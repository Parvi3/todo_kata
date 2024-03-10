import { TasksFilter } from './../index';

import('./footer.css');
export const Footer = ({itemsLeft, setFilter, handleClearCompleted}) => {
	return (
		<footer className="footer">
			<span className="todo-count">{itemsLeft} items left</span>
			<TasksFilter setFilter={setFilter}/>
			<button className="clear-completed" onClick={handleClearCompleted}>Clear completed</button>
		</footer>
	);
};