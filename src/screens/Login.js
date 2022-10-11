import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const Navigate = useNavigate();

  const { success,error, loading, authLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (success) {
      Navigate("/home");
    }
  },);
  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p className="text-danger">{ error.message}</p>}
      <div className="col-sm12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
          {loading ? "Loading..." : "Login"}
        </button>
        <div className="row">
          I don't have an account
          <Link to="/signup" className="raf">
            Sign up
          </Link>
        </div>
          
        <div className="row">
          I am a restaurant owner
          <Link to="/addrestaurant" className="raf">
            Register restaurant
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
