import { NewTaskForm, TaskList, Footer } from './../index';
import { useCallback, useMemo, useState } from 'react';

import('./app.css');
const App = () => {
	const [tasks, setTasks] = useState([]);

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
                    completed: !task.completed
                };
            }
            return task;
        }));
    }, [tasks]);

	return (
		<div className="app">
			<NewTaskForm addTask={addTask}/>
			<div className="main">
				{tasks.length > 0 &&
					<TaskList
						tasks={tasks}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
					/>
				}
				{tasks.length > 0 && <Footer itemsLeft={itemsLeft}/>}
			</div>
		</div>
	);
};

export default App;
