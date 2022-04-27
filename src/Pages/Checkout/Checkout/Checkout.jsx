import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user, setUser] = useState({
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
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form action="">
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          value={user.name}
          placeholder="name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          value={user.email}
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
          value={user.address}
          onChange={handleAddressChange}
          placeholder="address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="phone"
          value={user.phone}
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
