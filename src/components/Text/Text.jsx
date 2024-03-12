import './Text.css';

function Text({ children, small }) {
	const textClass = small ? 'text text--small' : 'text';

	return (
		<>
			<p className={textClass}>{children}</p>
		</>
	);
}

export default Text;
