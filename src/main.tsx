import './assets/styles/index.css';

import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';

import { UserContextProvider } from './context/user.context';
import { PREFIX } from './helpers/API'
import { RequireAuth } from './helpers/RequireAuth'
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
				element: <RequireAuth><Main /></RequireAuth>
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/favorites',
				element: <RequireAuth><Favorites /></RequireAuth>
			},
			{
				path: '/movie/:id',
				element: <RequireAuth><Movie /></RequireAuth>,
				errorElement: <>Ошибка загрузки фильма...</>,
				loader: async ({ params }) => {
					return defer({
						data: axios.get(`${PREFIX}?tt=${params.id}`).then((data) => data)
					});
				}
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
