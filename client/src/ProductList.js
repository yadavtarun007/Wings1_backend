import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetching the products from backend and storing them in state
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/sellProduct");
        setProducts(response.data); // Save products to state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to update a product's soldPrice
  const updateProduct = async (productId, updatedData) => {
    try {
      await axios.patch(`http://localhost:5001/sellProduct/${productId}`, updatedData);
      console.log("Product updated successfully");
      // Optionally, refetch or update the products list to reflect the change
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId ? { ...product, ...updatedData } : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.productName}</h2>
          <p>Cost Price: {product.costPrice}</p>
          <p>Sold Price: {product.soldPrice || "Not sold yet"}</p>
          <button
            onClick={() => updateProduct(product._id, { soldPrice: 20 })} // Example update with soldPrice = 20
          >
            Update Sold Price
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
