import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [pname, setPname] = useState("");
  const [ptype, setPtype] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pname") {
      setPname(value);
    } else if (name === "ptype") {
      setPtype(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "info") {
      setInfo(value);
    }
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/AddProduct.php";

    let fData = new FormData();
    fData.append("pname", pname);
    fData.append("ptype", ptype);
    fData.append("price", price);
    fData.append("info", info);
    fData.append("image", image);

    axios
      .post(url, fData)
      .then((response) => {
        setResult("Product Added!" + response.data);
        setPname("");
        setPtype("");
        setPrice("");
        setInfo("");
        setImage(null);
        setPreview(null);
      })
      .catch((error) => setResult("Error: " + error.message));
  };

  return (
    <div className="add-product-container">
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <h2>Add Product</h2>
          <input
            type="text"
            id="pname"
            name="pname"
            value={pname}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          <br />
          <input
            type="text"
            id="ptype"
            name="ptype"
            value={ptype}
            onChange={handleChange}
            placeholder="Product Type"
            required
          />
          <br />
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <br />
          <textarea
            id="info"
            name="info"
            value={info}
            onChange={handleChange}
            placeholder="Information about plant"
            rows={10}
            required
          />
          <br />
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChangeImage}
            accept="image/*"
          />
          <br />
          {preview && <img src={preview} alt="Image Preview" width="200" />}
          <br />
          <div className="product-resullt">
            <span>{result}</span>
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
