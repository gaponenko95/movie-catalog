import MainTitle from './components/MainTitle/MainTitle';
import Header from './Layouts/Header/Header.jsx';
import Link from './components/Link/Link.jsx';
import Logo from './components/Logo/Logo.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import NavItem from './components/NavItem/NavItem.jsx';
import Main from './Layouts/Main/Main.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import { useEffect, useState } from 'react';
import MainForm from './components/MainForm/MainForm.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import Text from './components/Text/Text.jsx';

const MOVIES_DATA = [
	{
		id: 1,
		title: 'Black Widow',
		image: '/movies/Black-Widow.svg',
		rating: '324',
		favorite: false
	},
	{
		id: 2,
		title: 'Shang Chi',
		image: '/movies/Shang-Chi.svg',
		rating: '124',
		favorite: false
	},
	{
		id: 3,
		title: 'Loki',
		image: '/movies/Loki.svg',
		rating: '235',
		favorite: false
	},
	{
		id: 4,
		title: 'How I Met Your Mother',
		image: '/movies/How-I-Met-Your-Mother.svg',
		rating: '123',
		favorite: false
	},
	{
		id: 5,
		title: 'Money Heist',
		image: '/movies/Money-Heist.svg',
		rating: '8125',
		favorite: true
	},
	{
		id: 6,
		title: 'Friends',
		image: '/movies/Friends.svg',
		rating: '123',
		favorite: true
	},
	{
		id: 7,
		title: 'The Big Bang Theory',
		image: '/movies/The-Big-Bang-Theory.svg',
		rating: '12',
		favorite: false
	},
	{
		id: 8,
		title: 'Two And a Half Men',
		image: '/movies/Two-And-a-Half-Men.svg',
		rating: '456',
		favorite: false
	}
];

function App() {
	const [storedAccounts, setStoredAccounts] = useLocalStorage('accounts');
	const [isLogIn, setIsLogIn] = useState(false);
	const [movies, setMovies] = useState(MOVIES_DATA);

	useEffect(() => {
		setIsLogIn(storedAccounts.some(account => account.isLogined === true));
	}, [storedAccounts]);

	const login = newAccount => {
		const updatedAccounts = storedAccounts.map(account => {
			if (account.name === newAccount.name) {
				return { ...account, isLogined: true };
			}
			return account;
		});

		if (!updatedAccounts.some(account => account.name === newAccount.name)) {
			updatedAccounts.push({ name: newAccount.name, isLogined: true });
		}

		setStoredAccounts(updatedAccounts);
	};

	const logout = () => {
		const updatedAccounts = storedAccounts.map(account => {
			if (account.isLogined) {
				return { ...account, isLogined: false };
			}
			return account;
		});

		setStoredAccounts(updatedAccounts);
	};

	const searchMovies = e => {
		e.preventDefault();
		const { value } = e.target.search;
		const filteredMovies = MOVIES_DATA.filter(movie =>
			movie.title.toLowerCase().includes(value.toLowerCase())
		);
		setMovies(filteredMovies);
	};

	return (
		<>
			<Header>
				<Link href='#'>
					<Logo />
				</Link>
				<Navigation>
					<NavItem text='Поиск фильмов' href='#' active />
					<NavItem text='Мои фильмы' href='#' counter />
					{isLogIn === true ? (
						<>
							<NavItem
								text={
									storedAccounts.find(account => account.isLogined)
										?.name
								}
								href='#'
								icon='profile'
							/>
							<NavItem
								text='Выйти'
								href='#'
								icon='login'
								onClick={logout}
							/>
						</>
					) : (
						<NavItem text='Войти' href='#' icon='login' />
					)}
				</Navigation>
			</Header>
			<Main>
				<MainHeader>
					{isLogIn === true ? (
						<>
							<MainTitle text='Поиск' />
							<Text small>
								Введите название фильма, сериала или мультфильма для
								поиска и добавления в избранное.
							</Text>
							<MainForm
								placeholder='Введите название'
								buttonText='Искать'
								icon='search'
								onSubmit={searchMovies}
							/>
						</>
					) : (
						<>
							<MainTitle text='Вход' />
							<LoginForm onSubmit={login} />
						</>
					)}
				</MainHeader>
				{isLogIn && <MovieList movies={movies} />}
			</Main>
		</>
	);
}

export default App;
