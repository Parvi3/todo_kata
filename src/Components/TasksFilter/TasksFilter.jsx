import { useCallback } from 'react';
import PropTypes from 'prop-types';

import('./tasksFilter.css');

const FILTERS = ['All', 'Active', 'Completed'];
const TasksFilter = ({ setFilter, filter }) => {
	const filterClick = useCallback(
		(filterType) => {
			setFilter(filterType);
		},
		[setFilter]
	);

	return (
		<div className="filters">
			{FILTERS.map((filterType) => (
				<button
					key={filterType}
					className={`btn ${filter === filterType ? 'selected' : ''}`}
					onClick={() => filterClick(filterType)}
					type="button"
				>
					{filterType}
				</button>
			))}
		</div>
	);
};
export default TasksFilter;

TasksFilter.propTypes = {
	setFilter: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
};
