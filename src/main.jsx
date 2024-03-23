import './assets/styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserContextProvider } from './context/user.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<UserContextProvider>
		<App />
	</UserContextProvider>
);
