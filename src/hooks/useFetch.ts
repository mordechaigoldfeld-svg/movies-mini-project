import { useEffect, useState } from "react";
import {type Movie} from "../components/movieCard/MovieCard";
import { useMoviesStore } from "../store/MovieStore";




export function useFetch(url:string,options:{}){

    const data = useMoviesStore((s)=>s.movies)

    const setMovies = useMoviesStore((s)=>s.setMovies)


    useEffect(()=>{
        fetch(url,options)
        .then(res=> res.json())
        .then(data => setMovies(data))
        // .catch(error=> setError(error))

    },[url])

    return{
        data,
        // setData,
        // error,
        // setError
    }

}