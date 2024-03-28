import { HTMLAttributes, ReactNode } from 'react';

export interface MainTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode;
	small?: boolean;
}
