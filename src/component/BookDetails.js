
import React, { useEffect, useState } from 'react';
import "./book.scss";
import { useParams } from 'react-router';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../Api';
 const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
   const getBookDetails = async (id) => { 
    try {
      const resp = await axios.get(`${BOOK_DETAILS_URL}/${id}`);
      const data = resp.data;
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  }
   useEffect(() => {
    getBookDetails(id);
  }, [id]);
   return (
    <div className='book-details'>
      <div className='book-image'>
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className='book-description'>
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
};
 export default BookDetails;