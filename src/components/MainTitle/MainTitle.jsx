import './MainTitle.css';

function Title({ children }) {
	return (
		<>
			<h1 className="main__title">{children}</h1>
		</>
	);
}

export default Title;