import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover title={"Our Menu"} img={menuImg}></Cover>
      {/* main cover */}
      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't Miss"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        img={dessertImg}
        title={"Dessert"}
        items={dessert}
      ></MenuCategory>
      <MenuCategory img={pizzaImg} title={"Pizza"} items={pizza}></MenuCategory>
      <MenuCategory img={saladImg} title={"Salad"} items={salad}></MenuCategory>
      <MenuCategory img={soupImg} title={"Soup"} items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
