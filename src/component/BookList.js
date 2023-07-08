import React, { useEffect, useState } from "react";
import "./book.scss";
import { API_URL } from "../Api";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useAppContext } from "./context/AppContext";
import { useNavigate } from "react-router";

const BookList = () => {
  const [books, setbooks] = useState([]);

  const { favorites, setFavorites, addToFavorites, removeFromFavorites } =
    useAppContext();

  const navigate = useNavigate();

  const favoriteChecker = (id) => {
    const control = favorites.some((book) => book.id === id);
    return control;
  };
  const getBookData = async () => {
    try {
      const resp = await axios.get(API_URL);

      const data = resp.data;
      setbooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <Container className="book-list">
      <Row className="book">
        {books.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4} xl={4}>
            <Card className="cards">
              <Card.Img
                variant="top"
                src={book.image_url}
                onClick={() => navigate(`/books/${book.id}`)}
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.authors}</Card.Text>
                {favoriteChecker(book.id) ? (
                  <Button
                    className="btn"
                    onClick={() => removeFromFavorites(book)}
                  >
                    Remove From Favorites
                  </Button>
                ) : (
                  <Button className="btn" onClick={() => addToFavorites(book)}>
                    Add to Favorites
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
