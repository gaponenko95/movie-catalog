import Text from './components/Text/Text';
import MainTitle from './components/MainTitle/MainTitle';
import Header from './Layouts/Header/Header.jsx';
import Link from './components/Link/Link.jsx';
import Logo from './components/Logo/Logo.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import NavItem from './components/NavItem/NavItem.jsx';
import Main from './Layouts/Main/Main.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';
import MainForm from './components/MainForm/MainForm.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import { useState } from 'react';

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
	const [movies, setMovies] = useState(MOVIES_DATA);

	const searchMovies = e => {
		e.preventDefault();
		const { value } = e.target.search;
		const filteredMovies = MOVIES_DATA.filter(movie =>
			movie.title.toLowerCase().includes(value.toLowerCase())
		);
		setMovies([...filteredMovies]);
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
					<NavItem text='Войти' href='#' icon='login' />
				</Navigation>
			</Header>
			<Main>
				<MainHeader>
					<MainTitle text='Поиск' />
					<Text small>
						Введите название фильма, сериала или мультфильма для поиска и
						добавления в избранное.
					</Text>
					<MainForm
						placeholder='Введите название'
						buttonText='Искать'
						icon='search'
						onSubmit={searchMovies}
					/>
				</MainHeader>
				<MovieList movies={movies} />
			</Main>
		</>
	);
}

export default App;
