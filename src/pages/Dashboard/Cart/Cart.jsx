import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <div>
        <h2 className="text-6xl">Items: {cart.length}</h2>
        <h2 className="text-6xl">Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
