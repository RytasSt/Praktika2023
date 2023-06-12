import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from ".././context/ShopContextProvider";
import "./cart.scss"
const mealsURL = "http://localhost:3000/meals";
const ordersURL = "http://localhost:3000/orders";

function Cart() {
  const [meals, setMeals] = useState([]);
  const [userData, setUserData] = useState({});
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

  useEffect(() => {
    axios
      .get(mealsURL)
      .then((response) => setMeals(response.data))
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:3000/users/getName")
      .then((res) => setUserData(res.data))
      .catch((error) => console.log(error));
  }, [])

  const placeOrder = () => {
    const orderData = {
      cartItems: cartItems,
      name: userData.name,
      status: "new"
      // customerName: customerName,
    };
    axios
    .post(ordersURL, orderData)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="cart">
        <div>
          <h1>Cart items</h1>
        </div>
        <div className="cartContainer">
          {meals.map((meal, index) => {
            if (cartItems[meal._id] !== 0) {
              return (
                <div className="cartItem" key={index}>
                  <div>{meal.title}</div>
                  <div>{meal.description}</div>
                  <div>{meal.menu}</div>
                  <div className="countHandler">
                    <button onClick={() => removeFromCart(meal._id)}>-</button>
                    <input value={cartItems[meal._id]} onChange={(e) => updateCartItemCount(Number(e.target.value), meal._id)} />
                    <button onClick={() => addToCart(meal._id)}>+</button>
                  </div>

                </div>
              )
            }
          })}
        </div>
      </div>
      <div>
        <button onClick={placeOrder}>Order</button>
      </div>
    </>
  );
}

export default Cart;