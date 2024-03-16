import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem.jsx';

function MovieList({ movies }) {
	const sortItems = (a, b) => (a.rating < b.rating ? 1 : -1);
	const sortedItems = movies.sort(sortItems);
	
	return (
		<div className='movie-list'>
			<ul className='movie-list__list'>
				{sortedItems.map(movie => (
					<MovieItem
						key={movie.id}
						title={movie.title}
						image={movie.image}
						rating={movie.rating}
						favorite={movie.favorite}
					/>
				))}
			</ul>
		</div>
	);
}

export default MovieList;
