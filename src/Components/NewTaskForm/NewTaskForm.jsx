import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import('./newTaskForm.css');

const NewTaskForm = ({ addTask }) => {
	const [value, setValue] = useState('');

	const handleChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	const handleSubmit = useCallback(
		(e) => {
			try {
				e.preventDefault();

				if (!value.trim()) {
					return;
				}

				addTask({
					id: uuidv4(),
					todo: value,
					completed: false,
					date: new Date(),
				});

				setValue('');
			} catch (err) {
				// eslint-disable-next-line no-console
				console.error('Что-то пошло не так...', err);
			}
		},
		[addTask, value]
	);

	return (
		<header className="header">
			<h1 className="title">todos</h1>
			<form onSubmit={handleSubmit} className="form">
				<input
					name="input"
					className="input"
					placeholder="What needs to be done?"
					minLength={3}
					maxLength={18}
					value={value}
					onChange={handleChange}
				/>
			</form>
		</header>
	);
};
export default NewTaskForm;
NewTaskForm.propTypes = {
	addTask: PropTypes.func.isRequired,
};
