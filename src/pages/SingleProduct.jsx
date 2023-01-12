import {React, useEffect} from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../features/apiSlice';

function SingleProduct() {


  const {id} = useParams();
  const {error, isError, isLoading, data} = useGetSingleProductQuery(id);
console.log(data)
const showProduct = (data) => {
  return (
    <>
   <Container>
    <Row className='align-items-center'>
      <Col xs={12} sm={6}>
        <Image src={data.image} fluid style={{height: "30rem", width: "35rem"}}/>
      </Col>
      <Col xs={12} sm={6}>
<h3 className='lead text-uppercase fw-3'>{data.category}</h3>
<h2 className='fs-2'>{data.title}</h2>
<p className='fs-5' style={{fontWeight: "500"}}>Rating  </p>
<p className='fw-bold fs-4'>$ {data.price}</p>
<p >{data.description}</p>
      </Col>
    </Row>
   </Container>
    </>
  )
}

  return (
    <>
    {
      isError?error:isLoading?"....Loading": showProduct(data)
    }
    </>
  )
}

export default SingleProduct