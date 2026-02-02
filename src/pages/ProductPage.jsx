// src/pages/ProductPage.jsx
import ProductsList from "../components/ProductsList.jsx";
import { useProducts } from "../hooks/useProducts.js";

export default function ProductsPage() {
  const { data, loading, error } =  useProducts.find();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;
  return <ProductsList products={data}/>;
}
