import React from 'react';
import { Task } from './../index';

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

