import React from 'react'
import { Button, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ListProducts() {
const {filterProducts} = useSelector((state)=>state.products)
  return (
    <>
    {
      filterProducts.map((element)=>{
        return (
          <Col xs={12} key={element.id}>
          <div className='d-flex align-items-center' >
            <Image src={element.image} thumbnail style={{width: "250px", height: "200px"}} className='me-4'/>
            <div className='w-75'>
              <h3>{element.title}</h3>
              <p>{element.description.slice(0, 200)}</p>
              <Button variant='dark' as={Link} to={`/products/${element.id}`} className='me-3'>View Product </Button>
              <Button variant='dark'>ADD to Cart</Button>
            </div>
          </div>
          </Col>
        )
      })
    }
    </>
  )
}

export default ListProducts