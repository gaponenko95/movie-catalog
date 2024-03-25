import { HTMLAttributes, ReactNode } from 'react';

export interface NavigationProps extends HTMLAttributes<HTMLUListElement> {
	children: ReactNode;
}
