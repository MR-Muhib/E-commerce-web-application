import { useState } from "react";

import { toast } from "react-toastify";
import addNewProduct from "../services/api/addNewProduct";

const AddProductForm = () => {
  const initialData = {
    id: new Date().getTime().toString(),
    name: "",
    title: "",
    price: "",
    stock: "",
    category: "",
    image: "",
    description: "",
  };

  const [product, setProduct] = useState(initialData);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "our-first-project");
    data.append("cloud_name", "dcdga3gke");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dcdga3gke/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    // console.log(result);
    setProduct({ ...product, image: result.secure_url });
  };
  // [api.reducerPath] : api.reducer

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.image) {
      toast("Image is Uploading, please wait...");
      return;
    }

    addNewProduct(product);
    setProduct(initialData);
  };

  return (
    <div className="w-full p-5 my-5">
      <form
        className="container mx-auto border border-gray-300 p-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center underline m-5">
          Add Product
        </h2>
        <p>Product Name:</p>
        <input
          value={product.name}
          className="border border-gray-300 w-full my-2 "
          onChange={handleChange}
          name="name"
          required
        />
        <br />
        <p>Product Title:</p>
        <input
          value={product.title}
          className="border border-gray-300 w-full my-2 "
          onChange={handleChange}
          name="name"
          required
        />
        <br />
        <p>Price:</p>

        <input
          value={product.price}
          className="border border-gray-300 w-full my-2 "
          onChange={handleChange}
          name="price"
          type="number"
          required
        />
        <br />

        <label htmlFor="category">Category:</label>
        <input
          value={product.category}
          onChange={handleChange}
          name="category"
          type="text"
          className="border border-gray-300 w-full my-2"
          required
        />

        <label htmlFor="quantity">Stock</label>
        <input
          value={product.quantity}
          onChange={handleChange}
          name="stock"
          type="number"
          className="border border-gray-300 w-full my-2"
        />

        <p>Description:</p>
        <input
          value={product.description}
          className="border border-gray-300 w-full my-2 "
          onChange={handleChange}
          name="description"
          type="text"
          required
        />
        <br />
        <p>Image URL:</p>

        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="w-48 mx-auto m-2"
          />
        )}
        <input type="file" name="image" onChange={handleImageChange} />
        <br />
        <input
          className="block w-full py-2 px-8 bg-[#b88e2f] mt-5 cursor-pointer font-semibold text-white "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProductForm;
