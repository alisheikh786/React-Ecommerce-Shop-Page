import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters, updateFilters } from '../features/productSlice';

function FilterSection() {
  const { filters: { text, minPrice, maxPrice, price }, filters, allProducts  } = useSelector((state) => state.products);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(updateFilters())
  }, [filters])
  const filterHandle = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    dispacth(setFilters({ value, name }));
  }

  const getUniqueData = (data, attr) => {
    let newData = data.map((element) => {
      return element[attr]
    })
    return (newData = ["all", ...new Set(newData)])
  }

  const categoryData = getUniqueData(allProducts, "category")

  return (
    <React.Fragment>
      <div className='my-3 me-3'>
        <Form.Label htmlFor='searchInput'>Search Products</Form.Label>
        <Form.Control type='text' value={text} name='text' onChange={filterHandle} placeholder='Search Your Goods' id='searchInput' />
      </div>
      <div className='my-5'>
        {
          categoryData.map((element, index) => {
            return (
              <Button key={index} onClick={filterHandle} name='category' className='d-block m-2' value={element} type="button">
                {element}
              </Button>
            )
          })}
      </div>
      <div className='pt-5'>
        <Form.Label htmlFor='priceRange'> Select by Price:- </Form.Label>
        <Form.Range id='priceRange' name='price' min={minPrice} max={maxPrice} value={price} onChange={filterHandle}/>
      </div>
    </React.Fragment>
  )
}

export default FilterSection