import { useFetch } from "../../hooks/useFetch";
import { useMoviesStore } from "../../store/MovieStore";
import MovieCard, { type Movie } from "../movieCard/MovieCard";
import "./listMovie.css"

type MovieProps={
    movies:Movie[]
}



export default function ListMovie(props:MovieProps) {
    
    const searchedMovies = useMoviesStore(s=>s.searchedMovies)

    const{movies}= props

    if (!movies) {
        return <p>טוען נתונים...</p>;
    }
    const displayedMovies = searchedMovies.length === 0 ? movies : searchedMovies;
    return (
        <div className="cardsGrid">
            {displayedMovies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}







