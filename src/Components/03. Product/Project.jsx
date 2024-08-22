import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


function Project() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => { setRecords(res.data.products) })
        .catch(err => console.log(err))
  })
  return (
    <main >
      <section>
        <div className='text-center my-5'>
          <h1>Products</h1>
        </div>
      </section>
      <section className='ps2'>
        <div>
          <div className='row'>
            {
              records.map((products, beta) => (
                <div className='col-lg-3 col-md-6 '>
                  <Card style={{ width: '20rem' }} className='m-2'>
                    <Card.Img variant="top" src={products.thumbnail}  alt={beta.id}/>
                    <Card.Body>
                      <Card.Title>{products.title}</Card.Title>
                      <Card.Text>${products.price}</Card.Text>
                      <div className='py-2'>
                      <Card.Text className='d-flex '>
                      <Rating name="read-only" value={products.rating} readOnly />
                       <span className='ps-1 text-secondary'>{products.rating}</span></Card.Text>
                      </div>
                      <Button variant="primary" as={Link} to={`/ViewProduct/${products.id}`} >View Product</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Project