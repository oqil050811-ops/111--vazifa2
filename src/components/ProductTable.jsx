import { useState } from "react";
import AvailabilityBadge from "./AvailabilityBadge";

function ProductTable() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15",
      category: "Phone",
      price: 999,
      stock: 12,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Samsung S24",
      category: "Phone",
      price: 899,
      stock: 8,
      status: "In Stock",
    },
    {
      id: 3,
      name: "MacBook Air",
      category: "Laptop",
      price: 1299,
      stock: 5,
      status: "In Stock",
    },
    {
      id: 4,
      name: "HP Pavilion",
      category: "Laptop",
      price: 750,
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 5,
      name: "iPad Pro",
      category: "Tablet",
      price: 799,
      stock: 10,
      status: "In Stock",
    },
    {
      id: 6,
      name: "AirPods Pro",
      category: "Accessories",
      price: 249,
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 7,
      name: "Logitech Mouse",
      category: "Accessories",
      price: 50,
      stock: 20,
      status: "In Stock",
    },
    {
      id: 8,
      name: "Samsung Tab S9",
      category: "Tablet",
      price: 650,
      stock: 4,
      status: "In Stock",
    },
  ]);

  const [search, setSearch] = useState("");

  function deleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Product Table
        </h1>

        <p className="text-gray-500 mb-6">
          Manage your store products
        </p>

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 p-3 mb-5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => {
                const status =
                  product.stock === 0 ? "Out of Stock" : "In Stock";

                return (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium text-gray-800">
                      {product.name}
                    </td>

                    <td className="p-4 text-gray-600">
                      {product.category}
                    </td>

                    <td className="p-4 font-semibold">
                      ${product.price}
                    </td>

                    <td className="p-4">{product.stock}</td>

                    <td className="p-4">
                      <AvailabilityBadge status={status} />
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}

              {filteredProducts.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="p-6 text-center text-gray-500"
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-gray-500">
          Total products: {filteredProducts.length}
        </p>
      </div>
    </div>
  );
}

export default ProductTable;