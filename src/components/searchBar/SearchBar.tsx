import { use } from "react"
import { useMoviesStore } from "../../store/MovieStore"
import {type Movie} from "../../store/MovieStore"



export default function SearchBar() {
  const movies = useMoviesStore(s=>s.movies)
  const setSearchedMovies = useMoviesStore(s=>s.setSearchedMovies)

  const search = (event: React.ChangeEvent<HTMLInputElement>)=> {
      const value: string = event.target.value;
      const foundMovies = movies.filter((item: Movie) => item.name.includes(value));
      setSearchedMovies(foundMovies);
  }
  return (
    <div>
        <input onChange={search} type="text" placeholder='enter a movie' />
  
        
    </div>
  )
}
