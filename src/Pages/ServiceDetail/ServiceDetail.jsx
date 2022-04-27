import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  return (
    <div className="container">
      <h2 className="text-center">Your are about to book: {service.name}</h2>
      <div className="service">
        <img height={300} className="w-100" src={service.img} alt="" />
        <h2>{service.name}</h2>
        <p>Price: {service.price}$</p>
        <p>
          <small>{service.description}</small>
        </p>
        <div className="text-center">
          <Link to={`/checkout/${serviceId}`}>
            <button className="btn btn-primary">Proceed Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
