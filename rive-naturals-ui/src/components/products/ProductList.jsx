import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  // Add to Cart handler
  const handleAddToCart = async (productId) => {
    try {
      await fetch("http://localhost:8080/api/carts", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 })
      });
      alert("Added to cart!");
    } catch (err) {
      alert("Error adding to cart");
    }
  };
function ProductImage({ productId, alt }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let objectUrl = null;
    fetch(`http://localhost:8080/api/products/${productId}/image`)
      .then(res => res.blob())
      .then(blob => {
        objectUrl = URL.createObjectURL(blob);
        setSrc(objectUrl);
      });
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [productId]);

  if (!src) return <div>Loading...</div>;
  return <img src={src} alt={alt} className="w-70 h-70 object-contain mb-3" />;
}

  return (
    <section className="w-full py-16 min-h-[1000px] bg-[#faf6f2]">
      <h2 className="text-2xl font-bold text-[#4c6b5a] mb-6 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4">
        {products.map(prod => (
          <div key={prod.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
<ProductImage productId={prod.id} alt={prod.name} />
            <span className="bg-[#a7c3a1] text-white px-2 py-1 rounded text-xs mb-2">{prod.tag}</span>
            <div className="text-lg font-semibold text-[#4c6b5a]">{prod.name}</div>
            <div className="text-[#5f7c6e] mt-1">₹{prod.price}</div>
            <button
              className="bg-[#5f7c6e] text-white px-4 py-2 rounded mt-3"
              onClick={() => handleAddToCart(prod.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
