import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import styles from './Layout.module.css';

export function Layout() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
}
