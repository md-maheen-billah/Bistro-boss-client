import { Link } from "react-router-dom";
import Cover from "../../../components/Cover/Cover";
import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover title={title} img={img}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="flex justify-center my-4">
          <button className="btn border-0 rounded-none border-b-4 btn-outline">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
