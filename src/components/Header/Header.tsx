import cn from 'classnames';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { UserContext } from '../../context/user.context';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

export function Header() {
	const { user, setStoredAccounts, accounts } = useContext(UserContext);
	// const [movieCounter, setMovieCounter] = useState<number>(0);

	const logout = () => {
		setStoredAccounts(accounts.map((account) => (account.isLogined ? { ...account, isLogined: false } : account)));
	};

	// useEffect(() => {
	// 	setMovieCounter(MOVIES_DATA.filter(({ favorite }) => favorite).length);
	// }, [movieCounter]);

	return (
		<header className={styles.header}>
			<Link to="/">
				<Logo />
			</Link>
			<nav>
				<ul className={styles.navigationList}>
					<li className={cn(styles.navItem)}>
						<NavLink to={'/'} className={({ isActive }) => cn(styles.link, { [styles.navItemActive]: isActive })}>
							Поиск фильмов
						</NavLink>
					</li>
					<li className={cn(styles.navItem)}>
						<NavLink
							to={'/favorites'}
							className={({ isActive }) => cn(styles.link, { [styles.navItemActive]: isActive })}>
							Мои фильмы
							{/* <div className={styles.counterIcon}>
								<div className={styles.counterIconCircle}>
									<span className={styles.counterIconCount}>1</span>
								</div>
							</div> */}
						</NavLink>
					</li>
					{user.isLogined ? (
						<>
							<li className={cn(styles.navItem)}>
								<NavLink to={'/favorites'} className={styles.link}>
									{user.name}
									<img src="/profile.svg" alt="Иконка профиля" />
								</NavLink>
							</li>
							<li onClick={logout} className={cn(styles.navItem)}>
								Выйти
							</li>
						</>
					) : (
						<li className={cn(styles.navItem)}>
							<NavLink
								to={'/login'}
								className={({ isActive }) => cn(styles.link, { [styles.navItemActive]: isActive })}>
								Войти
								<img src="/login.svg" alt="Иконка входа" className={styles.navigationItemIcon} />
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
