import React, { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  /*   const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `https://arcane-basin-75267.herokuapp.com/service`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []); */
  const [services] = useServices();
  return (
    <div id="services" className="container">
      <div className="row">
        <h1 className="text-primary text-center my-5">Our Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
