import React from "react";
import BookList from "./component/BookList";
import BookDetails from "./component/BookDetails";
import Favorites from "./component/Favorites";
import { Route, Routes } from "react-router";
import "./component/book.scss"
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
  <div className="App">
    <Header/>
    <Routes>
<Route path="/" element={<BookList/>}   />
<Route path="/books/:id" element={<BookDetails/>}   />
<Route path="/favorites" element={<Favorites/>}   />
    </Routes>
    <Footer/>
  
  </div>
  );
}

export default App;