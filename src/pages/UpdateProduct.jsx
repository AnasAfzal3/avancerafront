import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateProduct = () => {
  useEffect(() => {});
  const [id, setProductId] = useState("");
  const [product_title, setProduct] = useState("");
  const [price, setprice] = useState("");
  const [stock, setstock] = useState("");
  const [productActive, setFlag] = useState(1);
  const [Addcategory, SelectCategory] = useState(1);
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const saveSetting = async () => {
    console.log("hit")
    await axios.put(`http://localhost:3000/product/${id}`, {
      product_name: product_title,
      product_price: price,
      product_stock: stock,
      category: Addcategory,
      product_active: productActive,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Product id
        </label>

        <input
          type="text"
          onChange={(e) => setProductId(e.target.value)}
          className="form-control"
          id="title"
          aria-describedby="id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Product title
        </label>

        <input
          type="text"
          onChange={(e) => setProduct(e.target.value)}
          className="form-control"
          id="title"
          aria-describedby="producttitle"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Product price
        </label>
        <input
          type="text"
          onChange={(e) => setprice(e.target.value)}
          className="form-control"
          id="price"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Product stock
        </label>
        <input
          type="text"
          onChange={(e) => setstock(e.target.value)}
          className="form-control"
          id="price"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Product Active
        </label>
        <select onChange={(e) => setFlag(e.target.value)}>
          <option value="0">Disabled</option>
          <option value="1">Enabled</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select onChange={(e) => SelectCategory(e.target.value)}>
          <option value="1">Mobile</option>
          <option value="2">Laptop</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary" onClick={saveSetting}>
        Update product
      </button>
    </form>
  );
};

export default UpdateProduct;
