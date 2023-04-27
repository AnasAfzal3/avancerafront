import React, { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
        setProducts(res.data)
    })
    },[])
  return (
    <>
      <div className="container">
      <h1 className="mt-4">Products</h1>
    
      <div className="row">
      {products.map((post)=>{
        const {id,product_name,price} = post
        return   <div className="col-md-4">
        <div className="card mt-4" style={{width: "18rem"}} key={id}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product_name}</h5>
            <p className="card-text">
              {price}
            </p>
            <a href="#" className="btn btn-primary">
              Buy now
            </a>
          </div>
        </div>
        </div>
      })}
      
        </div>
      </div>
    </>
  );
};

export default Products;
