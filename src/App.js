import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
	const [tasks, setTasks] = useState([]);

	// display local storage on page load
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("tasks"));
		if (!data) return;
		setTasks(data);
	}, []);

	// set local storage on re-render
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
		console.log("LOCAL STORAGE:", localStorage);
	});

	// onClick for 'Save Task' btn
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;

		const newTask = {
			id,
			text: task,
			completed: false,
		};

		setTasks([...tasks, newTask]);
	};

	// onClick for 'X' icon - remove task from state
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// onClick for checkmark -- toggle 'completed' property
	const completeTask = (id) => {
		const completedTask = tasks.find((task) => task.id === id);

		if (completedTask.completed) {
			completedTask.completed = false;
			setTasks([...tasks]);
			return;
		}

		completedTask.completed = true;
		setTasks([...tasks]);
	};

	return (
		<div className="app">
			<div className="master-container">
				<Header
					// state
					tasks={tasks}
					// fn props
					addTask={addTask}
					onDelAll={() => setTasks([])}
				/>
				<Tasks
					// state
					tasks={tasks}
					// fn props
					onDelete={deleteTask}
					onComplete={completeTask}
				/>
			</div>
		</div>
	);
}

export default App;
