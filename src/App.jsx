import Text from './components/Text/Text';
import MainTitle from './components/MainTitle/MainTitle';
import Button from './components/Button/Button';

function App() {


	return (
		<>
			<MainTitle>Поиск</MainTitle>
			<Text small>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное</Text>
			<Button>Поиск</Button>
		</>
	);
}

export default App;
