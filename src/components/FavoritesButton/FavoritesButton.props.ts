import { HTMLAttributes } from 'react';

export interface FavoritesButtonProps extends HTMLAttributes<HTMLButtonElement> {
	favorite?: boolean;
}
