import React from 'react'
import ListMovie from '../../components/listMovie/ListMovie'
import MainTop from '../../components/mainTop/MainTop'
import "./MoviesClass.css"
import { useMoviesStore } from '../../store/MovieStore'

export default function Movies() {
  const movies = useMoviesStore(s=>s.movies)
  return (
    <div className='moviesClass'>
      <MainTop/>
      <div className='test1'>
      <ListMovie movies={movies}/>
      </div>
    </div>
  )
}
