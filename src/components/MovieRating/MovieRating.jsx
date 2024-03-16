import './MovieRating.css';

function MovieRating({ rating }) {
	return (
		<div className='movie-item__rating'>
			<img src='/star.svg' className='movie-item__rating__img' />
			<span className='movie-item__rating__text'>{rating}</span>
		</div>
	);
}

export default MovieRating;
