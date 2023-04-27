import React, { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";
const Addproduct = () => {
  const [categories, setCategory] = useState([]);
  const [product_title, setProduct] = useState("");
  const [price, setprice] = useState("");
  const [stock, setstock] = useState("");
  const [productActive, setFlag] = useState(1);
  const [Addcategory, SelectCategory] = useState(1);

  useEffect(() => {
    Axios.get("http://localhost:3000/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);
  const productsave = async () => {
    await Axios.post("http://localhost:3000/product", {
      product_name: product_title,
      product_price: price,
      product_stock: stock,
      created_at: "",
      category: Addcategory,
      product_active: productActive,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit" className="btn btn-primary" onClick={productsave}>
        Add product
      </button>
    </form>
  );
};

export default Addproduct;
