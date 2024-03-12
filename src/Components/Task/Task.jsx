import React, { useCallback, useState } from 'react';
import { formatDistance } from 'date-fns';

import('./task.css');

export const Task = ({task, deleteTask, toggleTask, updateTask}) => {
	const {id, todo, completed, date} = task;
	const [clickEdit, setClickEdit] = useState(false);
	const [editTask, setEditTask] = useState('');

	const deleteBtn = useCallback((event) => {
		event.stopPropagation();
		deleteTask(id);
	}, [deleteTask, id]);

	const toggleCheckbox = useCallback((event) => {
		event.stopPropagation();
		toggleTask(id);
	}, [toggleTask, id]);

	const handleEdit = useCallback(() => {
		setEditTask(todo);
		setClickEdit(true);
	}, [todo]);

	const handleSubmit = useCallback((event) => {
		event.preventDefault();

		if (!editTask.trim()) {
			deleteTask(id);
		}

		updateTask(id, editTask);
		setClickEdit(false);
	}, [deleteTask, editTask, id, updateTask]);

	const handleInputChange = useCallback((event) => {
		event.preventDefault();
		setEditTask(event.target.value);
	}, []);

	return (
		<li className="list__item">{
			!clickEdit ? (
				<div className="view">
					<input
						id={`toggle_${id}`}
						className="toggle"
						type="checkbox"
						checked={completed}
						onChange={toggleCheckbox}/>

					<label htmlFor={`toggle_${id}`} className="label">
						<span className={`description ${completed ? 'completed' : ''}`}>{todo}</span>
						<span className="created">created {formatDistance(new Date(), date)} ago</span>
					</label>

					<button className="icon icon-edit" onClick={handleEdit}></button>
					<button className="icon icon-destroy" onClick={deleteBtn}></button>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<input type="text"
						   className="edit input"
						   value={editTask}
						   onChange={handleInputChange}
						   onBlur={handleSubmit}
						   placeholder="The empty task will disappear from the list"
						   minLength={3}
						   maxLength={18}
					/>
				</form>
			)}
		</li>
	);
};