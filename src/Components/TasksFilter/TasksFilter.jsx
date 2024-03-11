import { useCallback, useState } from 'react';

import('./tasksFilter.css');

const FILTERS = ['All', 'Active', 'Completed'];
export const TasksFilter = ({setFilter}) => {
	const [selected, setSelected] = useState('All');

	const filter = useCallback((el) => {
		setFilter(el);
		setSelected(el);
	}, [setFilter]);

	const clickSelected = useCallback((el) => {
		return selected === el ? 'selected' : '';
	}, [selected]);

	return (
		<div className="filters">
			{FILTERS.map(filterType => (
				<button
					key={filterType}
					className={`btn ${clickSelected(filterType)}`}
					onClick={() => filter(filterType)}
				>
					{filterType}
				</button>
			))}
		</div>
	);
};


