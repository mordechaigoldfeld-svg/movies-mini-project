import { createContext } from "react";






export const likeContext = createContext({

    Favorites: [],
    addFavorite: () => { },
    removeFavorite: () => { }
})