import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <FoodCard item={item} key={item._id}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
