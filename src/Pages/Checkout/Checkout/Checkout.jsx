import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
  };
  /*   const [user, setUser] = useState({
    name: "Akbar The freat",
    email: "akbar@miomo.com",
    address: "Tajmohol Road Md.pur",
    phone: "01711717117",
  });

  const handleAddressChange = (event) => {
    console.log(event.target.value);
    const { address, ...rest } = user;
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    console.log(newUser);
    setUser(newUser);
  }; */
  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          value={user?.displayName}
          readOnly
          disabled
          placeholder="name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          value={user?.email}
          readOnly
          disabled
          placeholder="email"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          value={service.name}
          placeholder="service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          autoComplete="off"
          placeholder="address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="phone"
          placeholder="phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
