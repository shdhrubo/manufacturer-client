import React from "react";
import baseUrl from "../../api/baseUrl";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBox,
  faFileLines,
  faTags,
  faCloudArrowUp,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const AddProducts = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const imageStorageKey = "d4cef6c6596f6dea3eda3874f25bf4d5";

  const onSubmit = async (data) => {
    const image = data?.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            description: data.description,
            minimum: data.minimum,
            available: data.available,
            price: data.price,
            img: img,
          };

          fetch(`${baseUrl}/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Products Added Successfully!");
                reset();
              } else {
                toast.error("Failed to add product");
              }
            });
        }
      });
  };

  return (
    <div className="p-4 md:p-10 bg-gray-50/50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-left mb-10">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-1 flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} className="text-xs" />
            Inventory Control
          </h2>
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 uppercase tracking-tighter">
            Add New Component
          </h3>
          <p className="text-gray-500 mt-2 font-light text-sm italic">
            Expanding the catalog? Input the manufacturing specs below to list a
            new part.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 transition-all duration-300">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Name */}
              <div className="form-control text-left">
                <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                  Product Identity
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. High-Speed RAM"
                    className="input input-bordered w-full focus:border-blue-500 rounded-xl text-sm pl-12 h-12 shadow-inner bg-gray-50/30"
                    {...register("name", {
                      required: "Product Name is required",
                    })}
                  />
                  <FontAwesomeIcon
                    icon={faBox}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  />
                </div>
                {errors.name && (
                  <span className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wider">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="form-control text-left">
                <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                  Unit Price ($)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="input input-bordered w-full focus:border-blue-500 rounded-xl text-sm pl-12 h-12 shadow-inner bg-gray-50/30 font-black"
                    {...register("price", { required: "Price is required" })}
                  />
                  <FontAwesomeIcon
                    icon={faTags}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                  />
                </div>
                {errors.price && (
                  <span className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wider">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="form-control text-left">
              <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                Detailed Description
              </label>
              <div className="relative">
                <textarea
                  rows="3"
                  className="textarea textarea-bordered w-full focus:border-blue-500 rounded-xl text-sm pl-12 pt-4 shadow-inner bg-gray-50/30 h-28"
                  placeholder="Describe the component specs and features..."
                  {...register("description", {
                    required: "Description is required",
                  })}
                ></textarea>
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="absolute left-4 top-5 text-gray-300"
                />
              </div>
              {errors.description && (
                <span className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wider">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Minimum */}
              <div className="form-control text-left">
                <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                  MOQ (Min. Order)
                </label>
                <input
                  type="number"
                  placeholder="100"
                  className="input input-bordered w-full focus:border-blue-500 rounded-xl text-sm h-12 shadow-inner bg-gray-50/30"
                  {...register("minimum", { required: "MOQ is required" })}
                />
                {errors.minimum && (
                  <span className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wider">
                    {errors.minimum.message}
                  </span>
                )}
              </div>

              {/* Available */}
              <div className="form-control text-left">
                <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                  Total Available
                </label>
                <input
                  type="number"
                  placeholder="5000"
                  className="input input-bordered w-full focus:border-blue-500 rounded-xl text-sm h-12 shadow-inner bg-gray-50/30"
                  {...register("available", {
                    required: "Available quantity is required",
                  })}
                />
                {errors.available && (
                  <span className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wider">
                    {errors.available.message}
                  </span>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div className="form-control text-left">
              <label className="label uppercase text-[10px] font-black text-gray-400 tracking-[0.2em]">
                Product Visual (Image)
              </label>
              <div className="relative group/file">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full focus:border-blue-500 rounded-xl text-sm h-14 bg-gray-50/30"
                  {...register("image", { required: "Image is required" })}
                />
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 group-hover/file:text-blue-500 transition-colors"
                />
              </div>
              {errors.image && (
                <span className="text-[10px] text-red-500 font-bold mt-1 uppercase tracking-wider">
                  {errors.image.message}
                </span>
              )}
            </div>

            {/* Action */}
            <div className="pt-8 border-t border-gray-50 mt-4">
              <button
                type="submit"
                className="w-full h-14 bg-blue-600 text-white rounded-full font-black shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
              >
                <FontAwesomeIcon icon={faBriefcase} />
                Register New SKU
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
