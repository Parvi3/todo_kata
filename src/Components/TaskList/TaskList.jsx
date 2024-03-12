import React from 'react';
import { Task } from './../index';
import PropTypes from 'prop-types';

import('./taskList.css');

export const TaskList = ({tasks, deleteTask, toggleTask, updateTask}) => {
	return (
		<ul className="list">
			{tasks.map(task =>
				<Task
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					toggleTask={toggleTask}
					updateTask={updateTask}
				/>)}
		</ul>
	);
};

TaskList.propTypes = {
	tasks: PropTypes.array.isRequired,
	deleteTask: PropTypes.func.isRequired,
	toggleTask: PropTypes.func.isRequired,
	updateTask: PropTypes.func.isRequired,
};