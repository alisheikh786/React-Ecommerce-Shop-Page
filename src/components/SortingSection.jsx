import { Button, Form } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setListView, setGridView, sorting, setSorting } from '../features/productSlice';
import { useDispatch, useSelector } from 'react-redux';

function SortingSection() {

  const { gridView, filterProducts, setSort, allProducts, } = useSelector((state) => state.products)
  const dispatch = useDispatch();
  const sort = (e) => {
    const value = e.target.value;
    dispatch(setSorting(value))
  }
  useEffect(() => {
    dispatch(sorting())
  }, [setSort, allProducts])
  return (
    <>
      <div className='py-5 d-flex justify-content-between'>
        <div>
          <Button variant={gridView ? "dark" : "outline-dark"} className=' me-3' onClick={() => dispatch(setGridView())}>
            <FontAwesomeIcon icon="fa-solid fa-table-cells" />
          </Button>
          <Button variant={!gridView ? "dark" : "outline-dark"} onClick={() => dispatch(setListView())}>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </Button>
        </div>
        <div>
          <p> Total Products :-{filterProducts.length} </p>
        </div>
        <div>
          <Form.Select onClick={sort}>
            <option value="ascending">Ascending</option>
            <option value="decending">Decending</option>
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highhest)</option>
          </Form.Select>

        </div>
      </div>
    </>
  )
}

export default SortingSection