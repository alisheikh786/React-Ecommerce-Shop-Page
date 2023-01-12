import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GridProducts from "./GridProducts";
import ListProducts from "./ListProducts";
import { Container, Row } from "react-bootstrap";
import { useGetAllProductsQuery } from "../features/apiSlice";
import { loadProducts } from "../features/productSlice";
function Products() {
  const { data, isError, error, isLoading } = useGetAllProductsQuery();

  const { gridView } = useSelector((state) => state.products);

  const dispacth = useDispatch();
  useEffect(()=>{
    if(!isLoading){
       dispacth(loadProducts(data))
     }
  },[isLoading])


  return (
    <Container>
      <Row className="gy-4">
        {
          isError && error
        }
        {
          isLoading?"Loading......":
       gridView ?  <GridProducts/> : <ListProducts/>
            }
      </Row>
    </Container>
  );
}

export default Products;
