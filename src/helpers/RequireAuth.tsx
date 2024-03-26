import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../context/user.context'

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const { user } = useContext(UserContext);
	const token = user.isLogined;
	
	if(!token) {
		return <Navigate to="/login" replace />;
	}
	return children;
};