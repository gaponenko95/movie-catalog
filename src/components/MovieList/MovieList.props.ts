import { Movie } from '../../interfaces/movie.interface'

export interface MovieListProps {
	movies: Movie[];
	error?: string;
	isLoading: boolean;
}
