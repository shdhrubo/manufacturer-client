import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProducts = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const imageStorageKey = "d4cef6c6596f6dea3eda3874f25bf4d5";

  const onSubmit = async (data) => {
    console.log(data);
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

          fetch("https://manufacturer-xvzb.onrender.com/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Products Added Sucessfully!");
                reset();
              } else {
                toast.error("Failed");
              }
            });
        }
      });
  };

  return (
    <div>
      <h4 className="text-2xl text-blue-700 font-bold">Add a new prouct</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Minimum Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("minimum", {
              required: {
                value: true,
                message: "Minimum Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.minimum?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minimum.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("available", {
              required: {
                value: true,
                message: "Available Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.avilable?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.available.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            placeholder="Price Per Item "
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            className="input input-bordered w-full max-w-xs pt-2"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn bg-blue-700 w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddProducts;
