import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import MainTitle from '../../components/MainTitle/MainTitle';
import Text from '../../components/Text/Text';
import styles from './Error.module.css';

export function Error() {
	return (
		<div className={styles.error}>
			<MainTitle>Ошибка 404</MainTitle>
			<Text>
				Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела, была
				удалена, или был введен неверный адрес в адресной строке.
			</Text>
			<Link to={'/'}>
				<Button>Перейти на главную</Button>
			</Link>
		</div>
	);
}
