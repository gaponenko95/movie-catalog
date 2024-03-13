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

function App() {


	return (
		<>
			<Header>
				<Link>
					<Logo />
				</Link>
				<Navigation>
					<NavItem active >Поиск фильмов</NavItem>
					<NavItem counter >Мои фильмы</NavItem>
					<NavItem icon='login' >Войти</NavItem>
				</Navigation>
			</Header>
			<Main>
				<MainHeader>
					<MainTitle>Поиск</MainTitle>
					<Text small >Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Text>
					<MainForm placeholder={'Введите название'} buttonText={'Искать'} icon={'search'} />
				</MainHeader>
			</Main>
		</>
	);
}

export default App;
