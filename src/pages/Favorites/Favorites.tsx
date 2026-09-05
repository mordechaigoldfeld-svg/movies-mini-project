import React from 'react'
import { useMoviesStore } from '../../store/MovieStore'
import ListMovie from '../../components/listMovie/ListMovie'





export default function Favorites() {

  const favorites = useMoviesStore(s=>s.favorites)

  return (
    <div>
      <ListMovie movies={favorites}/>
    </div>
  )
}
