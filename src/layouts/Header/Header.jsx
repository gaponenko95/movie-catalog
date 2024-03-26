import styles from './Header.module.css';
import Link from '../../components/Link/Link.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import NavItem from '../../components/NavItem/NavItem.jsx';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context.jsx';

function Header({ onClick }) {
	const { user } = useContext(UserContext);

	const userLogout = e => {
		e.preventDefault();
		onClick();
	};

	return (
		<header className={styles.header}>
			<Link href='#'>
				<Logo />
			</Link>
			<Navigation>
				<NavItem text='Поиск фильмов' href='#' active={user} />
				<NavItem text='Мои фильмы' href='#' counter />
				{user ? (
					<>
						<NavItem text={user.name} href='#' icon='profile' />
						<NavItem
							text='Выйти'
							href='#'
							icon='login'
							onClick={userLogout}
						/>
					</>
				) : (
					<NavItem text='Войти' href='#' icon='login' active={!user} />
				)}
			</Navigation>
		</header>
	);
}

export default Header;
