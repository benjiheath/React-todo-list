import Btn from "./Btn";

const BtnContainer = ({ toggleForm, showForm, onDelAll, tasks }) => {
	return (
		<div className="btn-container">
			<Btn
				text="Delete All"
				color="#ff7a7a"
				classN={tasks.length === 0 ? "btn btn-del-inactive" : "btn btn-del"}
				onClick={onDelAll}
				tasks={tasks}
			/>
			<Btn
				//^ using show/hide state from Header
				classN={!showForm ? "btn btn-add" : "btn btn-hide"}
				text={!showForm ? "Add Task" : "Hide"}
				color={!showForm ? "#77bdff" : "grey"}
				onClick={toggleForm}
			/>
		</div>
	);
};

export default BtnContainer;
