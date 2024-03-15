import Single from "../../components/single/Single";
import { orderRows } from "../../data";
import { useParams } from "react-router-dom"; // Import useParams
import "./order.scss";

const Order = () => {
  const { id } = useParams<{ id?: string }>(); // Get the id from the URL params

  if (!id) {
    // Handle the case where id is not provided in the URL
    return <div>No order ID provided</div>;
  }

  // Convert the id to a number
  const orderId = parseInt(id);

  // Find the order with the given ID
  const order = orderRows.find((order) => order.id === orderId);

  if (!order) {
    // Handle case where order with the given ID is not found
    return <div>Order not found</div>;
  }

  return (
    <div className="order">
      <Single
        id={order.id}
        title={order.orderList}
        info={{
          "Last Name": order.lastName,
          "First Name": order.firstName,
          "Phone": order.phone,
          "Order Date": order.orderDate,
          "Verified": order.verified,
        }}
      />
    </div>
  );
};

export default Order;
