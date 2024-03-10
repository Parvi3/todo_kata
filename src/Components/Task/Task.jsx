import React, { useCallback, useState } from 'react';

import('./task.css');

export const Task = ({task, deleteTask, toggleTask}) => {
	const {id, todo, completed} = task;
	const [flag, setFlag] = useState(false);

	const deleteBtn = useCallback((event) => {
		event.stopPropagation();
		deleteTask(id);
	}, [deleteTask, id]);

	const toggleCheckbox = useCallback((event) => {
		event.stopPropagation();
		toggleTask(id);
	}, [toggleTask, id]);

	return (
		<li className="list__item">
			<div className="view">
				<input
					id={`toggle_${id}`}
					className="toggle"
					type="checkbox"
					checked={completed}
					onChange={toggleCheckbox}/>

				<label htmlFor={`toggle_${id}`} className="label">
					<span className={`description ${completed ? 'completed' : ''}`}>{todo}</span>
					<span className="created">created 17 seconds ago</span>
				</label>

				<button className="icon icon-edit"></button>
				<button className="icon icon-destroy" onClick={deleteBtn}></button>
			</div>

			<form>
				<input type="text" className="edit input"/>
			</form>
		</li>
	);
};