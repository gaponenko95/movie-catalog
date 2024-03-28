import { ReactNode } from 'react';

export interface NavItemProps {
	to: string;
	children: ReactNode;
	icon?: string;
	counter?: boolean;
	active?: boolean;
	href?: string;
	onClick?: () => void;
}
