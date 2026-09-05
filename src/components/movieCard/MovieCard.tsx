import { Link, useNavigate } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import "./movieCard.css"

export type Movie = {
    id: number,
    name: string,
    sumary: string
    image: object
}

type MovieProps = {
    movie: Movie
}


export default function MovieCard(props: MovieProps) {

    const { movie } = props
    const navigate = useNavigate();
    return (
        <div className="cardClass">
            <img src={movie.image.medium} alt="image" />
            <h3>{movie.name}</h3>

                <button className="viewButton" onClick={() => navigate(`/movieDetails/${movie.id}`) }>view →</button>
        </div>

    )
}
