import { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/user.context.jsx';
import Header from './layouts/Header/Header.jsx';
import Main from './layouts/Main/Main.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import MainTitle from './components/MainTitle/MainTitle.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import Text from './components/Text/Text.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';

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
	const [accounts, setStoredAccounts] = useLocalStorage('accounts');
	const [movies, setMovies] = useState(MOVIES_DATA);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		setUser(accounts.find(account => account.isLogined) || false);
	}, [accounts]);

	const login = newAccount => {
		const updatedAccounts = accounts.map(account =>
			account.name === newAccount.name ? { ...account, isLogined: true } : account
		);

		if (!updatedAccounts.some(account => account.name === newAccount.name)) {
			updatedAccounts.push({ name: newAccount.name, isLogined: true });
		}

		setStoredAccounts(updatedAccounts);
	};

	const logout = () => {
		setStoredAccounts(
			accounts.map(account =>
				account.isLogined ? { ...account, isLogined: false } : account
			)
		);
	};

	const searchMovies = e =>
		setMovies(
			MOVIES_DATA.filter(({ title }) =>
				title.toLowerCase().includes(e.toLowerCase())
			)
		);

	return (
		<>
			<Header onClick={logout} />
			<Main>
				<MainHeader>
					<MainTitle text={user ? 'Поиск' : 'Вход'} />
					{user ? (
						<>
							<Text small>
								Введите название фильма, сериала или мультфильма для
								поиска и добавления в избранное.
							</Text>
							<SearchForm onSubmit={searchMovies} />
						</>
					) : (
						<LoginForm onSubmit={login} />
					)}
				</MainHeader>
				{user && <MovieList movies={movies} />}
			</Main>
		</>
	);
}

export default App;
