import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
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
