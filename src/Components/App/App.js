import { NewTaskForm, TaskList, Footer } from './../index';
import { useCallback, useMemo, useState } from 'react';

import('./app.css');
const App = () => {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState('all');

	const addTask = useCallback(task => {
		setTasks(prevTasks => [...prevTasks, task]);
	}, []);

	const itemsLeft = useMemo(() => {
		return tasks.filter(task => !task.completed).length;
	}, [tasks]);


	const deleteTask = useCallback((id) => {
		setTasks(tasks.filter(task => task.id !== id));
	}, [tasks]);

	const toggleTask = useCallback((id) => {
		setTasks(tasks.map(task => {
			if (task.id === id) {
				return {
					...task,
					completed: !task.completed,
				};
			}
			return task;
		}));
	}, [tasks]);

	const filterTasks = (flag) => {
		let ft;
		if (flag === 'all') {
			ft = tasks;
		}
		if (flag === 'active') {
			ft = tasks.filter(task => !task.completed);
		}
		if (flag === 'completed') {
			ft = tasks.filter(task => task.completed);
		}
		return ft;
	};

	const filteredTasks = filterTasks(filter);

	const handleClearCompleted = useCallback(() => {
		setTasks(tasks.filter(task => !task.completed));
	}, [tasks]);

	return (
		<div className="app">
			<NewTaskForm addTask={addTask}/>
			<div className="main">
				{tasks.length > 0 &&
					<TaskList
						tasks={filteredTasks}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
					/>
				}
				{tasks.length > 0 &&
					<Footer
						itemsLeft={itemsLeft}
						setFilter={setFilter}
						handleClearCompleted={handleClearCompleted}
					/>}
			</div>
		</div>
	);
};

export default App;