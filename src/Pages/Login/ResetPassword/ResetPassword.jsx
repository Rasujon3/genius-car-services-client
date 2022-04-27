import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";
  //   if (user) {
  //     navigate(from, { replace: true });
  //   }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    // if (!error) {
    //   setTimeout(() => {
    //     navigate("/home");
    //   }, 2000);
    // }
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Enter Email Address"
            name="email"
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-50 mx-auto d-block mb-2"
        >
          Reset Password
        </button>
        <span className="text-center">{errorElement}</span>
      </form>
    </div>
  );
};

export default ResetPassword;
