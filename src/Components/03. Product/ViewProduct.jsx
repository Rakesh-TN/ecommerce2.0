import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Rating } from '@mui/material';
import UserComments from './UserComments';
import Recommened from './Recommened';


function ViewProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => { setProduct(res.data); })
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <section className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="spinner-border" style={{ width: '6rem', height: '6rem' }} role="status">
        <p className="visually-hidden">Loading...</p>
      </div>
  </section>;

  return (
    <main className='container'>
      <section className='row'>
        <div className='col-lg-6'>
          <img src={product.images} alt='No Image' className='img-fluid' />
        </div>
        <div className='col-lg-6'>
          <div className='pt-5'>
            <h1>{product.title}</h1>
            <div className='pt-2 d-flex'>
              <Rating name="read-only" value={product.rating} readOnly />
              <p className=' text-secondary'>({product.rating})</p>
            </div>
            <p>{product.description}</p>
            <div className='d-flex'>
              <h2 className=''>${product.price}</h2>
              <p className='text-success pt-3 ps-2'>${product.discountPercentage} off</p>
            </div>
            <p>Brand : {product.brand}</p>
            <p>Stock : {product.stock}</p>
            <p>Warranty : {product.warrantyInformation}</p>
            <p>Shipping : {product.shippingInformation}</p>
            <p>Availability : <span className='text-danger fw-bold'>{product.availabilityStatus}</span></p>
            <p>Return Policy : <span className='fw-bold'>{product.returnPolicy}</span></p>
            <p>Tags : <span className='text-capitalize'>{product.tags[0]} {product.tags[1]}</span></p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3>Comments</h3>
          <div>
            <UserComments />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ViewProduct;