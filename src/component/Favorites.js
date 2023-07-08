
import React from 'react';
import { useAppContext } from './context/AppContext';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./book.scss";
 const Favorites = () => {
  const { favorites, setFavorites, addToFavorites, removeFromFavorites } = useAppContext();
   console.log(favorites);
  const favoriteChecker = (id) => {
    const control = favorites.some((book) => book.id === id);
    return control;
  };
   return (
    <Container className='favorites'>   
      <Row className='favorite-list'>
        {favorites.length > 0 ? favorites.map((book) => (
          <Col key={book.id} sm={12} md={6} lg={4} xl={4}>
            <Card className="cards">
              <Card.Img variant="top" src={book.image_url} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.authors}</Card.Text>
                {favoriteChecker(book.id) ? (
                  <Button className="btn" onClick={() => removeFromFavorites(book.id)}>
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
        )) : <h2>You don't have any favorite book yet</h2>}
      </Row>
    </Container>
  );
};
 export default Favorites;