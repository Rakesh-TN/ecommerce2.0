import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <main>
      <p>{product.title}</p>
      <p>{product.price}</p>
      
    </main>
  );
}

export default ViewProduct;