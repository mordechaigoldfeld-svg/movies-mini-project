import { create } from "zustand"
import { useFetch } from "../hooks/useFetch"


export type Movie = {

    id: number,
    name: string,
    image: object,
    summary: string

}






type MovieType = {

    movies: Movie[],
    setMovies: (movies: Movie[]) => void,
    favorites:Movie [],
    addFavorite: (movie: Movie) => void,
    removeFavorite: (id: number) => void,
    isFavorite: (id: number) => boolean,
    searchedMovies:Movie[],
    setSearchedMovies:(movies:Movie[])=>void

}

export const useMoviesStore = create<MovieType>((set,get) => ({
    movies: [],
    setMovies: (movies: Movie[]) => set(() => ({ movies })),
    favorites: [],

    addFavorite: (movie) =>
        set((s) => {
            if (s.favorites.some((m) => m.id === movie.id)) return s;
            return { favorites: [...s.favorites, movie] };
        }),
    removeFavorite: (id) =>
        set((state) => ({
            favorites: state.favorites.filter((m) => m.id !== id),
    })),

    isFavorite: (id) => get().favorites.some((m) => m.id === id),

    searchedMovies:[],

    setSearchedMovies:(searchedMovies:Movie[])=> set(() => ({searchedMovies}))
        

}))

// addFavorite: (movie) =>
//     set((state) => {
//         if (state.favorites.some((m) => m.id === movie.id)) return state;
//         return { favorites: [...state.favorites, movie] };
//     }),