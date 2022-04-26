import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" />

        <input type="email" name="email" placeholder="Your Email" required />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?{" "}
        <Link className="text-danger pe-auto text-decoration-none" to="/login">
          Please Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
