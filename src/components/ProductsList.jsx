import { Link } from "react-router-dom";

// src/components/ProductsList.jsx
export default function ProductsList({ products }) {
    console.log(products);
  return (
    <div className="h-screen bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center justify-center">
        <div className="min-h-screen w-full sm:w-2/3 bg-gray-100 dark:bg-gray-900 flex justify-center py-16 transition-colors duration-400 ">
          <div className="w-full max-w-7xl px-4 py-16 transition-colors duration-400 ">
            <div className="flex justify-between items-center py-3">
              <h1 className="text-2xl font-bold text-gray-600 mb-4">Products</h1>
              <Link className="box-button" to="/contact">Contact</Link>
              <Link className="box-button" to="/test">Test-Animation</Link>
            </div>
            <div className="grid grid-cols-2 2 md:grid-cols-2 lg:grid-cols-4 gap-3  ">
                {products.map((s) => (
                    <div key={s.id} className="box-product font-bold flex items-center">
                        <img src={s.image} alt="" className="size-6 mr-2 " />
                        <p className="line-clamp-2">{s.title}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
    </div>
  );
}
