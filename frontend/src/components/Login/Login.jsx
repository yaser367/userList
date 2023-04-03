import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";

import "./Login.scss";

const Login = () => {
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const Navigate = useNavigate();
  const handleSubmit = () => {
    if (
      name === import.meta.env.VITE_APP_NAME &&
      password === import.meta.env.VITE_APP_PASSWORD
    ) {
      setUser(true);
      Navigate("/", { replace: true });
      auth.login(true);
      localStorage.setItem("user", true);
    } else {
      setUser(false);
      toast.error("Incorrect Username and password");
    }
  };
  return (
    <div className="app__login">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="page">
        <p className="head-text">Login</p>

        <div className="field field_v2">
          <input
            onChange={(e) => setName(e.target.value)}
            className="field__input"
            placeholder="e.g. yaser"
          />
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">Username</span>
          </span>
        </div>
        <div className="field field_v3">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="field__input"
            placeholder="e.g. 12345"
          />
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">Password</span>
          </span>
        </div>
      </div>
      <div className="login">
        <button onClick={handleSubmit} type="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
