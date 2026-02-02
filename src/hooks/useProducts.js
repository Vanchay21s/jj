// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import { getProducts } from "../api/product.api.js";

 export const useProducts = {
  find(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getProducts()
          .then(setData)
          .catch(setError)
          .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
  }
}

