import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Rating } from '@mui/material';
import UserComments from './UserComments';


function ViewProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => { setProduct(res.data); })
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <main className='container'>
      <section className='row'>
        <div className='col-lg-6'>
          <img src={product.images} className='img-fluid' />
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
            <h2 className=''>${product.discountPercentage}</h2>
            <p className='text-decoration-line-through pt-3 ps-2'>${product.price}</p>
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
         <h3>Comments</h3>
         <div>
            <UserComments/>
         </div>
      </section>
    </main>
  );
}

export default ViewProduct;