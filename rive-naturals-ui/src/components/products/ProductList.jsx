
import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Add to Cart handler
  const handleAddToCart = async (productId) => {
    try {
      await fetch("http://localhost:8080/api/carts", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
      });
      alert("Added to cart!");
    } catch (err) {
      alert("Error adding to cart");
    }
  };

  // Admin handlers (you should implement these with your API)
  const handleAddImage = () => {
    // Example: open modal or prompt to add image
    alert("Add Image clicked - implement your logic here");
  };

  const handleEditImage = (productId) => {
    alert(`Edit Image for product ${productId} - implement your logic here`);
  };

  const handleDeleteImage = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(`http://localhost:8080/api/products/${productId}/image`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete image");

      alert("Image deleted successfully");
      // Refresh products to update images
      const updatedProducts = await fetch("http://localhost:8080/api/products").then((r) => r.json());
      setProducts(updatedProducts);
    } catch (err) {
      alert("Error deleting image: " + err.message);
    }
  };

  function ProductImage({ productId, alt }) {
    const [src, setSrc] = useState(null);

    useEffect(() => {
      let objectUrl = null;
      fetch(`http://localhost:8080/api/products/${productId}/image`)
        .then((res) => {
          if (!res.ok) throw new Error("No image found");
          return res.blob();
        })
        .then((blob) => {
          objectUrl = URL.createObjectURL(blob);
          setSrc(objectUrl);
        })
        .catch(() => setSrc(null)); // no image case

      return () => {
        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
      };
    }, [productId]);

    if (src === null) return <div>No image available</div>;
    if (!src) return <div>Loading...</div>;
    return <img src={src} alt={alt} className="w-70 h-70 object-contain mb-3" />;
  }

  return (
    <section className="w-full py-16 min-h-[1000px] bg-[#faf6f2]">
      <h2 className="text-2xl font-bold text-[#4c6b5a] mb-6 text-center">All Products</h2>

      {userRole === "ADMIN" && (
        <div className="mb-6 text-center">
          <button
            onClick={handleAddImage}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Image
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center relative"
          >
            <ProductImage productId={prod.id} alt={prod.name} />
            <span className="bg-[#a7c3a1] text-white px-2 py-1 rounded text-xs mb-2">{prod.tag}</span>
            <div className="text-lg font-semibold text-[#4c6b5a]">{prod.name}</div>
            <div className="text-[#5f7c6e] mt-1">₹{prod.price}</div>

            {userRole === "ADMIN" && (
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleEditImage(prod.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteImage(prod.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            )}

            {userRole !== "ADMIN" && (
              <button
                className="bg-[#5f7c6e] text-white px-4 py-2 rounded mt-3"
                onClick={() => handleAddToCart(prod.id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
