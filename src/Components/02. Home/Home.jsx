import React from 'react'
import HomeCover from '../assets/Home_Cover.jpg'
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <main>
        <section className='bg-img'>
            <img src={HomeCover} className='img-fluid' />
        </section>
        <section className="">
            <div className='container position-absolute top-50 start-50'>
                <div class="d-flex w-50 translate-middle search-box">
                    <input type="text" class="form-control" id="" placeholder="Search"/>
                    <Button variant="primary" className='ms-3'>Search</Button>
                </div>
            </div>
        </section>    
    </main>
  )
}

export default Home