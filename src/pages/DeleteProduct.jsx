import axios from "axios";
import React, { useEffect, useState } from "react";
const DeleteProduct = () => {
  useEffect(() => {}, []);
  const [id, setProductId] = useState("");
  const [responseMessage, setResponse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const DeleteProduct = async () => {
    await axios
      .delete(`http://localhost:3000/product/${id}`, {})
      .then((res) => {
        setResponse("Product Deleted Sucessfully");
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
        setResponse(err.response.data.Err);
      });
  };

  return (
    <>
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
        <button className="btn btn-danger" id="liveAlertBtn" onClick={DeleteProduct}>
          Delete Product
        </button>
        <div id="liveAlertPlaceholder">
          {responseMessage}
          </div>
          
      </form>
    </>
  );
};
export default DeleteProduct;
