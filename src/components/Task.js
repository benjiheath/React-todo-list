import { FcCheckmark } from "react-icons/fc";
import { CgUndo } from "react-icons/cg";

const Task = (props) => {
	return (
		<div className={props.task.completed ? "task task-complete" : "task"}>
			<p className="task-title">
				{props.task.completed ? (
					<strike>{props.task.text}</strike>
				) : (
					props.task.text
				)}
			</p>

			<div className="task-icons">
				<span
					onClick={() => {
						props.onComplete(props.task.id);
					}}
				>
					{props.task.completed ? (
						<CgUndo className="check undo" />
					) : (
						<FcCheckmark
							className="task-x"
							className="check"
						/>
					)}
				</span>
				<p onClick={() => props.onDelete(props.task.id)} className="task-x">
					&times;
				</p>
			</div>
		</div>
	);
};

export default Task;
