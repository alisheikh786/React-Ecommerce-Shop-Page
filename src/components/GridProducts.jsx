import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function GridProducts() {
const {filterProducts} = useSelector((state)=>state.products)
  return (
    <>
      {
        filterProducts.map((element) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={element.id} >
              <Card className='h-100 p-2 text-center'>
                <Card.Img variant="top" src={element.image} height='200px' />
                <Card.Body>
                  <Card.Title className=''> {element.title.slice(0, 20)} </Card.Title>
                  <Card.Text>
                    {element.price}
                  </Card.Text>
                  <Button as={Link} to={`/products/${element.id}`} variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })
      }
    </>
  )
}

export default GridProducts