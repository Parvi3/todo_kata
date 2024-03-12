import { TasksFilter } from './../index';
import PropTypes from 'prop-types';

import('./footer.css');
export const Footer = ({itemsLeft, setFilter, handleClearCompleted, filter}) => {
	return (
		<footer className="footer">
			<span className="todo-count">{itemsLeft} items left</span>
			<TasksFilter setFilter={setFilter} filter={filter}/>
			<button className="clear-completed" onClick={handleClearCompleted}>Clear completed</button>
		</footer>
	);
};

Footer.propTypes = {
	itemsLeft: PropTypes.number.isRequired,
	setFilter: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
	handleClearCompleted: PropTypes.func.isRequired,
};