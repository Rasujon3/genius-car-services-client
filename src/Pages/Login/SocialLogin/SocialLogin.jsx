import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">OR</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div className="btn btn-primary w-50">Google Sign In</div>
    </div>
  );
};

export default SocialLogin;
