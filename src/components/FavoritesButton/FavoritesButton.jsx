import cn from 'classnames';
import styles from './FavoritesButton.module.css';

const FavoritesButton = ({ favorite }) => (
	<button
		className={cn(styles.favoritesButton, {
			[styles.favoritesButtonGreen]: favorite
		})}
	>
		<img src={favorite ? '/favorites.svg' : '/favorites-add.svg'} alt='Избранное' />
		{favorite ? 'В избранном' : 'В избранное'}
	</button>
);

export default FavoritesButton;
