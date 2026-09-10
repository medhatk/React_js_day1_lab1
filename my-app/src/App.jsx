import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Panel from "./components/panel";
const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    image:"/images/0macbook-air13-inch-m1.webp",
    price: 999,
    category: "Computers",
    inStock: true,
  },
  {
    id: 2,
    name: "Phone",
    image:"/images/0macbook-air13-inch-m1.webp",
    price: 599,
    category: "Mobile",
    inStock: true,
  },
  {
    id: 3,
    name: "Tablet",
    image:"/images/0macbook-air13-inch-m1.webp",
    price: 449,
    category: "Mobile",
    inStock: false,
  },
  {
    id: 4,
    name: "Monitor",
    image:"/images/0macbook-air13-inch-m1.webp",
    price: 329,
    category: "Computers",
    inStock: true,
  },
  {
    id: 5,
    name: "Keyboard",
    image:"/images/0macbook-air13-inch-m1.webp",
    price: 89,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 6,
    name: "Mouse",
    image:"/images/0macbook-air13-inch-m1.webp",

    price: 45,
    category: "Accessories",
    inStock: true,
  },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <main style={{ padding: "20px" }}>
      <Panel title="Product Catalogue">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </Panel>
    </main>
  );
}
