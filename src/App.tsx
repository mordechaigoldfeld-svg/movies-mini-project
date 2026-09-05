import { Routes, Route } from 'react-router'
import './App.css'
import Movies from './pages/Movies/Movies'
import Favorites from './pages/Favorites/Favorites'
import MovieDetails from './pages/MovieDetails/MOvieDetails'
import Layout from './Layout/layout'
import { useFetch } from './hooks/useFetch'

function App() {

      useFetch("https://api.tvmaze.com/shows", {})

  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Movies />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/movieDetails/:id' element={<MovieDetails />} />
          <Route path='*' element={<>404 page not found</>} />
        </Route>

      </Routes>
    
  )
}

export default App
