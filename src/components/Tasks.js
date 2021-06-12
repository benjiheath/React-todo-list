import Task from "./Task";

const Tasks = ({ tasks, onDelete, onComplete }) => {
	return (
		<div className="tasks-container">
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					tasks={tasks}
					onDelete={onDelete}
					onComplete={onComplete}
				/>
			))}
		</div>
	);
};

export default Tasks;
