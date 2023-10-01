import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // push user with useNavigate() to dashboard
    navigate("/app/dashboard", { replace: true, state: "this is some text" });
  };

  // replace:true  home => login => dashboard. when we go back from dashboard we won't go to login page again

  return (
    <div>
      <h1>Login</h1>
      {/* push user with <navigate/> component to dashboard*/}
      {isAuth && <Navigate to="/app/dashboard" replace={true} />}
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
      <button onClick={() => setIsAuth((prev) => !prev)}>toggle auth</button>
    </div>
  );
}

export default Login;
