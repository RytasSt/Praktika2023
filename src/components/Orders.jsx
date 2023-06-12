import axios from "axios";
import { useState, useEffect } from "react";
import { deleteHandler } from "../../services/deleteHandler copy";
const mealsURL = "http://localhost:3000/meals";
const ordersURL = "http://localhost:3000/orders";
function Orders() {
  const [orders, setOrders] = useState([]);
  const [meals, setMeals] = useState([]);
  const [confirmedOrderIds, setConfirmedOrderIds] = useState([]);

  useEffect(() => {
    axios
      .get(ordersURL)
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error));
    axios
      .get(mealsURL)
      .then((response) => setMeals(response.data))
      .catch((error) => console.log(error));
  }, [])



  const handleConfirmOrder = (orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order._id === orderId) {
        const updatedOrder = { ...order, status: "active" };
        axios.patch(ordersURL + "/" + orderId, updatedOrder)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
        return updatedOrder;
      }
      return order;
    });
  
    setOrders(updatedOrders);
  };


  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order._id === orderId) {
        const updatedOrder = { ...order, status: "canceled" };
        axios.patch(ordersURL + "/" + orderId, updatedOrder)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
        return updatedOrder;
      }
      return order;
    });
  
    setOrders(updatedOrders);
  };

  const orderjsx = orders.map((order) => {
    const { _id, cartItems, status, name } = order;
    const isConfirmed = confirmedOrderIds.includes(_id)
    const selectedItems = Object.entries(cartItems).filter(
      ([mealId, count]) => count > 0
    );
  
    // Create a list of selected item JSX elements
    const selectedItemsList = selectedItems.map(([mealId, count]) => {
      // Fetch meal details using the mealId from the selected item
      const meal = meals.find((meal) => meal._id === mealId);
  
      if (meal) {
        return (
          <li key={mealId}>
            {meal.title} - Quantity: {count}
          </li>
        );
      }
      return null;
    });
  
    // Render the order card
    return (
      <div key={_id} className="order-card">
        <h3>Order ID: {_id}</h3>
        <div>Order by user: {name}</div>
        status: {status}
        <ul>{selectedItemsList}</ul>
        {isConfirmed ? (
          <p>Order confirmed</p>
        ) : (
          <>
            <button onClick={() => handleConfirmOrder(_id)}>Confirm Order</button>
            <button onClick={() => handleCancelOrder(_id)}>Cancel Order</button>
          </>
        )}
      </div>
    );
  });
  return (
    <>

      <div className="menuWrapper">
        <div className="menuTitle"><p>Meals</p></div>
        <div className="menuContainer">
          {orderjsx}
        </div>
        <div>
        </div>
      </div>

    </>
  );
}

export default Orders;