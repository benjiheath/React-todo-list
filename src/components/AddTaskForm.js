import React from "react";
import { useState, useRef } from "react";

const AddTaskForm = ({ tasks, addTask }) => {
	// task text state
	const [text, setText] = useState("");

	// state for empty input submissions
	const [emptySubmit, setEmptySubmit] = useState(false);

	// targetting input field for focusing
	const inputEl = useRef(null);

	// on form submission: check for empty field - update task text
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			setEmptySubmit(true);
			return;
		}

		addTask(text);

		// re-focus input field
		inputEl.current.focus();

		// reset state
		setText("");
		setEmptySubmit(false);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="input-container">
				<input
					autoFocus
					ref={inputEl}
					type="text"
					className={emptySubmit && !text ? "input-empty" : ""}
					placeholder={
						emptySubmit
							? "Please specify a task"
							: "Enter task"
					}
					value={text}
					onChange={(e) => setText(e.target.value)}
				></input>
			</div>
			<input className="btn btn-save" type="submit" value="Save Task"></input>
		</form>
	);
};

export default AddTaskForm;
