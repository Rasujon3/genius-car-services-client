import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading || updating) {
    return <Loading />;
  }

  if (user) {
    // navigate(from, { replace: true });
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    if (agree) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ name });
      navigate(from, { replace: true });
    }
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
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        {/* <label
          className={agree ? "ps-2 text-primary" : "ps-2 text-danger"}
          htmlFor="terms"
        > */}
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Genius Car Terms & Conditions
        </label>
        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link className="text-primary pe-auto text-decoration-none" to="/login">
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
