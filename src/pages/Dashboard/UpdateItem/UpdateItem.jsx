import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const item = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // upload img to imgbb and get an url
    const menuItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
    };
    if (data.image && data.image[0]) {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        menuItem.image = res.data.data.display_url;
      }
    } else {
      // Retain the existing image URL if no new image is provided
      menuItem.image = item.image;
    }

    const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
    console.log(menuRes.data);
    if (menuRes.data.modifiedCount > 0) {
      toast.success("Added Updated successfully");
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"Update An Item"}
        subHeading={"Refresh Info"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              required
              defaultValue={item.name}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex gap-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={item.category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option value="DEFAULT" disabled>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={item.price}
                placeholder="Enter Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <label className="form-control my-6">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Enter details"
              defaultValue={item.recipe}
            ></textarea>
          </label>
          <div className="form-control w-full mb-6">
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Update Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
