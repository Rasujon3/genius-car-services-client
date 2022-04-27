import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage Your Services</h2>
      {/* {services.map((service) => ( */}
      {/* <div key={service._id}> */}
      {/* <h5>
            {service.name}{" "}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h5> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        {services.map((service) => (
          <tbody key={service._id}>
            <tr>
              <th scope="row">0</th>
              <td>{service.name}</td>
              <td onClick={() => handleDelete(service._id)}>❌</td>
            </tr>
          </tbody>
        ))}
      </table>
      {/* // </div> */}
    </div>
  );
};

export default ManageServices;
