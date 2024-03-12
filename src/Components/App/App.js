import { useCallback, useMemo, useState } from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

import('./app.css');

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState('All');

	const addTask = useCallback((task) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	}, []);

	const itemsLeft = useMemo(
		() => tasks.filter((task) => !task.completed).length,
		[tasks]
	);

	const deleteTask = useCallback((id) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	}, []);

	const toggleTask = useCallback((id) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) => {
				if (task.id === id) {
					return { ...task, completed: !task.completed };
				}
				return task;
			})
		);
	}, []);

	const filteredTasks = useMemo(() => {
		switch (filter) {
			case 'All':
				return tasks;
			case 'Active':
				return tasks.filter((task) => !task.completed);
			case 'Completed':
				return tasks.filter((task) => task.completed);
			default:
				return tasks;
		}
	}, [tasks, filter]);

	const handleClearCompleted = useCallback(() => {
		setTasks((oldTasks) => oldTasks.filter((task) => !task.completed));
		setFilter('All');
	}, []);

	const updateTask = useCallback(
		(id, newText) => {
			setTasks((prevTasks) =>
				prevTasks.map((task) =>
					task.id === id
						? { ...task, todo: newText, completed: false }
						: task
				)
			);
		},
		[setTasks]
	);

	return (
		<div className="app">
			<NewTaskForm addTask={addTask} />
			<div className="main">
				{tasks.length > 0 && (
					<TaskList
						tasks={filteredTasks}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
						updateTask={updateTask}
					/>
				)}
				{tasks.length > 0 && (
					<Footer
						itemsLeft={itemsLeft}
						filter={filter}
						setFilter={setFilter}
						handleClearCompleted={handleClearCompleted}
					/>
				)}
			</div>
		</div>
	);
};

export default App;
