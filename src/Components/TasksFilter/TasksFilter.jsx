import { useCallback } from 'react';

import('./tasksFilter.css');
export const TasksFilter = ({setFilter}) => {
	const filter = useCallback((el) => {
		setFilter(el);
	}, [setFilter]);

	return (
		<div className="filters">
			<button className="selected btn" onClick={() => filter('all')}>All</button>
			<button className="btn" onClick={() => filter('active')}>Active</button>
			<button className="btn" onClick={() => filter('completed')}>Completed</button>
		</div>
	);
};


