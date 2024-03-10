import('./tasksFilter.css');
export const TasksFilter = () => {
	return (
		<div className="filters">
			<button className="selected btn">All</button>
			<button className="btn">Active</button>
			<button className="btn">Completed</button>
		</div>
	);
};


