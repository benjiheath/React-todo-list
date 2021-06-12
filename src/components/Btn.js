const Btn = ({ onClick, text, color, classN, tasks }) => {
	return (
		<button
			onClick={onClick}
			className={classN}
			style={{ backgroundColor: color }}
			tasks={tasks}
		>
			{text}
		</button>
	);
};

export default Btn;
