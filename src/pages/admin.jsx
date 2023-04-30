import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import addproduct from "./addproduct";
import Axios from "axios";

const Admin = () => {
  const [mostSellingProduct,setProductName] = useState({})
  const [popularCategory,setpopularCategory] = useState({})
  useEffect(()=>{
    const token = localStorage.getItem('token')
  Axios.get("http://localhost:3000/products/topSellingProducts",{ headers: {"Authorization" : `Bearer ${token}`} }
  ).then(res=>{
    
    setProductName(res.data)
  })
  Axios.get("http://localhost:3000/products/most-popular",{ headers: {"Authorization" : `Bearer ${token}`}}).then(response=>{
    console.log(response.data.categoryName)
    setpopularCategory(response.data)
})
  },[])
  const logout = () =>{
   localStorage.clear("token")
   
  }
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Admin
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/admin/addproduct">
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/deleteproduct">
                    Delete Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/updateproduct">
                    Update Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row ">
       <div className="col-md-3">
        
        <h4 className="mt-5 text-center">Most Selling Products</h4>
        <div className="mostSellingProduct text-success mt-4">
         <h2 className=" text-center mt-4">{mostSellingProduct.product_name}</h2>
         <h2 className="text-center">Order percentage</h2>
         <h2 className="text-center mt-4">{mostSellingProduct.order_percentage}</h2>
        </div>
       </div>
       <div className="col-md-3">
        <h4 className="mt-5 text-center">Customer Favorite category</h4>
        <div className="mostFavoriteCategory mt-4 text-warning">
        <h2 className=" text-center mt-4">{popularCategory.categoryName}</h2>
         <h2 className="text-center">Order percentage</h2>
         <h2 className="text-center mt-4">{popularCategory.order_percentage}</h2>
        </div>
       </div>
       </div>
     </div>
    </>
  );
};

export default Admin;
