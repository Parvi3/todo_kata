import React, { useCallback } from 'react';

import('./task.css');

export const Task = ({task, deleteTask, toggleTask}) => {
	const {id, todo, completed} = task;

	const deleteBtn = useCallback(() => {
		deleteTask(id);
	}, [deleteTask, id]);

	const toggleCheckbox = useCallback(() => {
		toggleTask(id);
	}, [toggleTask, id]);

	return (
		<li className="list__item">
			<input className="toggle" type="checkbox" onClick={toggleCheckbox}/>
			<label form="toggle" className="label">
				<span className={`description ${completed ? 'completed' : null}`}>{todo}</span>
				<span className="created">created 17 seconds ago</span>
			</label>
			<button className="icon icon-edit"></button>
			<button className="icon icon-destroy" onClick={deleteBtn}></button>
		</li>
	);
};