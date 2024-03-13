import { NearBindgen, near, call, view } from 'near-sdk-js';

import { Movie } from './movieInterface';
import { movies } from './movieSchema';


@NearBindgen({})
class CinematicRights {
    movies: Movie[] = movies;

    @view({}) // This method is read-only and can be called for free
    get_movies(): Movie[] {
        return this.movies;
    }

    @call({}) // This method changes the state, for which it cost gas
    add_movie({ movie }: { movie: Movie }): void {
        near.log(`Adding movie ${movie.name}`);
        this.movies.push(movie);
    }

    @call({}) // This method changes the state, for which it cost gas
    remove_movie({ movie }: { movie: Movie }): void {
        near.log(`Removing movie ${movie.id} ${movie.name}`);
        this.movies = this.movies.filter((mov: Movie) => {
            return mov.id !== movie.id
        });
    }

    @call({}) // This method changes the state, for which it cost gas
    remove_movie_by_id({ movieId }: { movieId: string }): void {
        near.log(`Removing movie ${movieId}`);
        this.movies = this.movies.filter((mov: Movie) => {
            return mov.id !== movieId
        });
    }

    @call({}) // This method changes the state, for which it cost gas
    edit_movie({ movie }: { movie: Movie }): void {
        near.log(`Saving movie ${movie.id} ${movie.name}`);
        this.movies = this.movies.map((mov: Movie) => {
            return mov.id === movie.id ? movie : mov
        });
    }
}