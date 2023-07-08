import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("AppContext must be used within AppContextProvider");
  }
  return context;
};
const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
const oldfavorites=[...favorites]
const newFavorites=oldfavorites.concat(book)
setFavorites(newFavorites)

  };

  const removeFromFavorites = (id) => {
const oldfavorites=[...favorites]
const newFavorites=oldfavorites.filter(book=>book.id!==id)
setFavorites(newFavorites)

  };

  return (
    <AppContext.Provider
      value={{ favorites, setFavorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider
