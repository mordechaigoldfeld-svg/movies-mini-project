import React from 'react'
import { useParams } from 'react-router'
import MovieSelected from '../../components/MovieSelected/MovieSelected';

export default function MovieDetails() {

  const {id} = useParams();
  return (
    <MovieSelected/>
    // <div>MovieDetails{id}</div>
  )
}
