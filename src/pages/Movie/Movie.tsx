import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'

import MainHeader from '../../components/MainHeader/MainHeader'
import MainTitle from '../../components/MainTitle/MainTitle'
import Text from '../../components/Text/Text'
import { Data } from '../../interfaces/data.inteface'

export function Movie() {
	const data = useLoaderData() as { data: Data };
	
	return (
			<Suspense fallback={<Text>Загружаем фильм...</Text>}>
				<Await resolve={data.data}>
					{({ data: { short: { name, description } } }) => 
					<MainHeader>
						<MainTitle>{name}</MainTitle>
						<Text>{description}</Text>
					</MainHeader>}
				</Await>
			</Suspense>
	);
}
