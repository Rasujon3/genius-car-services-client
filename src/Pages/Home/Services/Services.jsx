import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `services.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2>Services: {services.length}</h2>
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
