import './assets/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { UserContextProvider } from './context/user.context';
import { Layout } from './layouts/Layout/Layout';
import { Error } from './pages/Error/Error';
import { Favorites } from './pages/Favorites/Favorites';
import { Login } from './pages/Login/Login';
import { Main } from './pages/Main/Main';
import { Movie } from './pages/Movie/Movie';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/movie/:id',
				element: <Movie />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/movie/:id',
				element: <Movie />
			}
		]
	},
	{
		path: '*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	</React.StrictMode>
);
