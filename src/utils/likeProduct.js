const likeProduct = (products, id) => {
  // Check if products are loaded
  if (!products || products.length === 0) {
    console.error("Products not loaded yet.");
    return;
  }

  // Find the current product by ID
  const currentProduct = products.find((product) => product.id === id);

  if (!currentProduct) {
    console.error(`Product with ID ${id} not found.`);
    return;
  }

  // Retrieve the existing liked products from localStorage or initialize it as an empty array
  const existingProduct = JSON.parse(localStorage.getItem("likeProduct")) || [];

  // Check if the product already exists in the liked products
  const isAlreadyInCart = existingProduct.some((product) => product.id === id);

  if (!isAlreadyInCart) {
    // If not already liked, add the product
    existingProduct.push({ ...currentProduct });

    // Update localStorage
    localStorage.setItem("likeProduct", JSON.stringify(existingProduct));
  } else {
    alert("Product already in liked products.");
  }

  return existingProduct;
};

export default likeProduct;
