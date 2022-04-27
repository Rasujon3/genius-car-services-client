import React, { useEffect, useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
const axios = require("axios");

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;

  let from = location.state?.from?.pathname || "/home";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    // navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://arcane-basin-75267.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="Login" />
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Enter Email Address"
            ref={emailRef}
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-50 mx-auto d-block mb-2"
        >
          Login
        </button>
      </form>
      <span className="text-center">{errorElement}</span>
      <p>
        New to Genius Car?{" "}
        <Link
          className="text-primary pe-auto text-decoration-none"
          to="/register"
        >
          Please Register
        </Link>{" "}
      </p>
      <p>
        Forget Password?{" "}
        <Link
          className="text-primary pe-auto text-decoration-none"
          to="/resetpassword"
        >
          Reset Password
        </Link>{" "}
      </p>

      <SocialLogin />
    </div>
  );
};

export default Login;
