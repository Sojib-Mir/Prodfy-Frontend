"use client";

import React, { useEffect, useState } from "react";
import useAuth from "@/hook/useAuth";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import Loading from "@/components/Loading";
import NoDataPage from "@/components/NoDataPage";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  useEffect(() => {
    // Stop everything until user is loaded
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://prodfy-server.vercel.app/products?email=${user.email}`,
          { cache: "no-store" }
        );
        const data = await res.json();

        if (productId) {
          setProducts(data.filter((p) => p._id === productId));
        } else {
          setProducts(data);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId, user]);

  const handleDeleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://prodfy-server.vercel.app/products/${_id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => {
            if (!res.ok) throw new Error("Delete failed on server.");
            return res.json();
          })
          .then(() => {
            setProducts((prev) => prev.filter((p) => p._id !== _id));
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          })
          .catch((err) => {
            Swal.fire(
              "Error!",
              err.message || "Something went wrong!",
              "error"
            );
          });
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <>
      {products.length === 0 ? (
        <NoDataPage />
      ) : (
        <div className="my-10 w-full px-4">
          {/* Title */}
          <div className="w-fit mb-6 p-1 rounded-lg shadow-inner">
            <button className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-pink-600/20 shadow-md">
              My Uploaded Product{" "}
              <span className="font-bold text-md bg-red-500/50 rounded px-2 py-1 text-white">
                ({products.length})
              </span>
            </button>
          </div>

          {/* Table */}
          <div className="w-full max-w-7xl mx-auto overflow-x-auto rounded shadow-xl border border-pink-500/30">
            <table className="table w-full min-w-max">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>User Name</th>
                  <th>Product Name</th>
                  <th>Product ID</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, idx) => (
                  <tr key={product._id}>
                    <th>{idx + 1}</th>
                    <td>{user?.displayName || "No Name"}</td>
                    <td className="whitespace-nowrap">{product.title}</td>
                    <td className="whitespace-nowrap">{product._id}</td>
                    <td>{product.price} (BDT)</td>
                    <td>{product.category}</td>
                    <td className="whitespace-nowrap">{product.createdAt}</td>
                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <Link
                          href={`/products/${product._id}`}
                          className="btn btn-sm text-white rounded bg-linear-to-r from-blue-700 to-pink-700"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="btn btn-sm text-white rounded bg-linear-to-r from-blue-700 to-pink-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
