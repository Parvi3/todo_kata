import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import('./newTaskForm.css');

export const NewTaskForm = ({addTask}) => {
	const [value, setValue] = useState('');

	const handleChange = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const handleSubmit = useCallback(e => {
		e.preventDefault();

		if (!value.trim()) {
			return;
		}

		addTask({
			id: uuidv4(),
			todo: value,
			completed: false,
		});

		setValue('');
	}, [addTask, value]);

	return (
		<header className="header">
			<h1 className="title">todos</h1>
			<form onSubmit={handleSubmit} className="form">
				<input
					name="input"
					className="input"
					placeholder="What needs to be done?"
					minLength={3}
					maxLength={50}
					value={value}
					onChange={handleChange}
				/>
			</form>
		</header>
	);
};
