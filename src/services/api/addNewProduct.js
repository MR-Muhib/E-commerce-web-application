const addNewProduct = async (product) => {
  try {
    const response = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error adding product:", error.message);
  }
};

export default addNewProduct;
