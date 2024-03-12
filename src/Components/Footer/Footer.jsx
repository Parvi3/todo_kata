import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter/TasksFilter';

import('./footer.css');
const Footer = ({ itemsLeft, setFilter, handleClearCompleted, filter }) => (
	<footer className="footer">
		<span className="todo-count">{itemsLeft} items left</span>
		<TasksFilter setFilter={setFilter} filter={filter} />
		<button
			className="clear-completed"
			onClick={handleClearCompleted}
			type="button"
		>
			Clear completed
		</button>
	</footer>
);

export default Footer;
Footer.propTypes = {
	itemsLeft: PropTypes.number.isRequired,
	setFilter: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
	handleClearCompleted: PropTypes.func.isRequired,
};
