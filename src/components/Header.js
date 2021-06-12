import BtnContainer from "./BtnContainer";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const Header = ({ tasks, addTask, onDelAll }) => {
	// state for hiding/revealing 'Add task' section
	const [showForm, setShowForm] = useState(false);

	return (
		<div className="header">
			<div className="title-btns-container">
				<h2>Todo</h2>

				<BtnContainer
					toggleForm={() => setShowForm(!showForm)}
					onDelAll={onDelAll}
					// state
					showForm={showForm}
					tasks={tasks}
				/>
			</div>
			{showForm && <AddTaskForm tasks={tasks} addTask={addTask} />}
		</div>
	);
};

export default Header;
