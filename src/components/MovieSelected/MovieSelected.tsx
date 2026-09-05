import { Link, useParams } from "react-router";
import { useMoviesStore } from "../../store/MovieStore"
import "./MovieSelected.css"
import { useState } from "react";




export default function MovieSelected() {

    const movies = useMoviesStore(s => s.movies);
    const { id } = useParams();
    const movie = movies.find((movie) => { return movie.id === Number(id) })
    const addFavorite = useMoviesStore(s=>s.addFavorite)
    const removeFavorite = useMoviesStore(s=>s.removeFavorite)
    const isFavorite = useMoviesStore((s)=>
    s.favorites.some((fav)=>fav.id === Number(id))
);

    const handleLike = ()=>{
        if(isFavorite){
            removeFavorite(movie.id)
        }else{
            addFavorite(movie)
        }
    }

    return (
        <div className="card">
            <div className="first">
                <img src={movie?.image.medium} alt="image" />
                <div className="second">
                    <h3>{movie?.name}</h3>
                    <p>{movie?.summary}</p>
            <button className="likeButton" onClick={handleLike}>{isFavorite?"dislike💔":"like❤️"}</button>
            <Link to='/'>
            <button className="backButton">←back to movies</button>
            </Link>
                </div>
            </div>

        </div>
    )
}
