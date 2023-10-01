import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // push user to dashboard
    navigate("/app/dashboard", { replace: true, state: "this is dummy data" });
  };

  // replace:true  home => login => dashboard. when we go back from dashboard we won't go to login page again

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
