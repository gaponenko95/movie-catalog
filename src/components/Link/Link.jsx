import './Link.css';

function Link({children}) {
	return (
		<a className='link'>
			{children}
		</a>
	);
}

export default Link;
