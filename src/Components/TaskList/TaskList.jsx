import PropTypes from 'prop-types';
import Task from '../Task/Task';

import('./taskList.css');

const TaskList = ({ tasks, deleteTask, toggleTask, updateTask }) => (
	<ul className="list">
		{tasks.map((task) => (
			<Task
				key={task.id}
				task={task}
				deleteTask={deleteTask}
				toggleTask={toggleTask}
				updateTask={updateTask}
			/>
		))}
	</ul>
);
export default TaskList;
TaskList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			completed: PropTypes.bool,
			// добавьте все ожидаемые свойства, которые может содержать ваш объект task
		})
	).isRequired,
	deleteTask: PropTypes.func.isRequired,
	toggleTask: PropTypes.func.isRequired,
	updateTask: PropTypes.func.isRequired,
};
