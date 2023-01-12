import { React, lazy } from 'react'
import { Container } from 'react-bootstrap'
import FilterSection from '../components/FilterSection'
import Products from '../components/Products'
// import SortingSection from '../components/SortingSection';
const SortingSection = lazy(() => import('../components/SortingSection'));

function Home() {
  return (
    <section>
      <Container className='d-flex'>
        <div className='w-25'>
          <FilterSection />
        </div>
        <div className='w-75'>
          <SortingSection />
          <Products />
        </div>
      </Container>
    </section>
  )
}

export default Home