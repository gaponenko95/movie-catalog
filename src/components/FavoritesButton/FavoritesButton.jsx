import './FavoritesButton.css';

const FavoritesButton = ({ favorite }) => (
	<button className={`favorites-button ${favorite ? 'favorites-button--green' : ''}`}>
		<img src={favorite ? '/favorites.svg' : '/favorites-add.svg'} alt='Избранное' />
		{favorite ? 'В избранном' : 'В избранное'}
	</button>
);

export default FavoritesButton;
