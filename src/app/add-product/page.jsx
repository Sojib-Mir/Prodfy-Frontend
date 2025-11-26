"use client";
import Loading from "@/components/Loading";
import useAuth from "@/hook/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { user, loading } = useAuth();

  const onSubmit = async (data) => {
    const productData = {
      user: data.name,
      email: data.email,
      title: data.productName,
      category: data.category,
      price: data.price,
      image: data.photo,
      shortDescription: data.shortDescription,
      fullDescription: data.fullDescription,
      createdAt: new Date().toLocaleString("en-GB", {
        timeZone: "Asia/Dhaka",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    };

    try {
      const res = await fetch("https://prodfy-server.vercel.app/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        alert("Product add successful!");
        router.push("/products");
      } else {
        alert("Failed to add Product");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <div className="card border border-pink-500/20 bg-base-100 w-full max-w-xl mx-auto shadow-2xl rounded-2xl my-15">
        <div className="card-body p-6 relative my-15">
          <h1 className="text-amber-500 text-2xl text-center font-bold mb-6">
            Add Product
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* User Name & Email */}
            <div className="flex gap-5 justify-center items-center mx-auto w-full">
              <div className="w-full">
                {/* User Name */}
                <label className="font-medium">User Name</label>
                <input
                  type="text"
                  className="input w-full rounded focus:border-0 focus:outline-sky-500 mt-2"
                  placeholder="User Name"
                  defaultValue={user?.displayName}
                  readOnly
                  {...register("name")}
                />
              </div>

              {/* User Email */}
              <div className="w-full">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="input w-full rounded focus:border-0 focus:outline-sky-500 mt-2"
                  placeholder="User Email"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
            </div>

            {/* Product */}
            <div className="flex gap-5 justify-center items-center mx-auto w-full">
              {/* Product Name */}
              <div className="w-full">
                <label className="font-medium">Product Name</label>
                <input
                  type="text"
                  className="input w-full rounded focus:border-0 focus:outline-sky-500 mt-2"
                  placeholder="Product Name"
                  {...register("productName", { required: true })}
                />
                {errors.productName && (
                  <p className="text-red-600 text-sm mt-1">
                    Product Name is Required
                  </p>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="w-full">
                <label className=" font-medium mb-2">Category</label>
                <select
                  defaultValue={""}
                  className="select w-full rounded focus:border-0 focus:outline-sky-500 mt-2"
                  {...register("category", { required: true })}
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Plants">Plants</option>
                  <option value="Foods">Foods</option>
                  <option value="Home & Living">Home & Living</option>
                  <option value="Characters">Characters</option>
                  <option value="Space">Space</option>
                  <option value="Animals">Animals</option>
                  <option value="Other">Other</option>
                </select>

                {errors.category && (
                  <p className="text-red-600 text-sm mt-1">
                    Category is Required
                  </p>
                )}
              </div>
            </div>

            {/* Product Price */}
            <div className="flex gap-5 justify-center items-center mx-auto w-full">
              {/* Product Price */}
              <div>
                <label className=" font-medium mb-2">Product Price</label>
                <input
                  type="number"
                  className="input w-full rounded focus:border-0 focus:outline-sky-500 mt-2"
                  placeholder="Product Price"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <p className="text-red-600 text-sm mt-1">Price is Required</p>
                )}
              </div>

              {/* Product URL */}
              <div>
                <label className=" font-medium mb-2">Product URL</label>
                <input
                  type="url"
                  className="input w-full rounded focus:border-0 focus:outline-sky-500 mt-2"
                  placeholder="https://example.com/image.jpg"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <p className="text-red-600 text-sm mt-1">
                    Product URL is Required
                  </p>
                )}
              </div>
            </div>

            {/* Description Textarea */}
            <div className="flex gap-5 justify-center items-center mx-auto w-full">
              {/* Short Description Textarea */}
              <div>
                <label className=" font-medium mb-2">Short Description</label>
                <textarea
                  rows="2"
                  className="textarea w-full rounded focus:border-0 focus:outline-sky-500 h-[150px] mt-2"
                  placeholder="Enter Product Short Description"
                  {...register("shortDescription", {
                    required: "Short Description is required",
                    minLength: {
                      value: 10,
                      message:
                        "Short Description must be at least (10) characters",
                    },
                    maxLength: {
                      value: 200,
                      message:
                        "Short Description cannot exceed (200) characters",
                    },
                  })}
                />
                {errors.shortDescription && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.shortDescription.message}
                  </p>
                )}
              </div>{" "}
              {/* Full Description Textarea */}
              <div>
                <label className=" font-medium mb-2">Full Description</label>
                <textarea
                  rows="2"
                  className="textarea w-full rounded focus:border-0 focus:outline-sky-500 h-[150px] mt-2"
                  placeholder="Enter Product Full Description"
                  {...register("fullDescription", {
                    required: "Full Description is required",
                    minLength: {
                      value: 50,
                      message:
                        "Full Description must be at least (50) characters",
                    },
                    maxLength: {
                      value: 2000,
                      message:
                        "Full Description cannot exceed (2000) characters",
                    },
                  })}
                />
                {errors.fullDescription && (
                  <p className="text-red-600 text-sm mt-1 font-bold">
                    {errors.fullDescription.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-4xl bg-linear-to-r from-pink-600 to-red-600 hover:from-pink-800 hover:to-red-800"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
