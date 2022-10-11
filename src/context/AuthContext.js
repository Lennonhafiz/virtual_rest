import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = AuthContext.Provider;
function AuthContextProvider({ children }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  //login function
  const authLogin = async (email, password) => {
    setLoading(true);
    await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setSuccess(false);
          setError(data);
        } else {
          setSuccess(true);
          setUser(data);
        }
      })
      .catch((err) => {
        console.log("error here: ", err);
        setError(err);
      });
    setLoading(false);
  };

  //signup function
  const authRegister = async (username, email, password) => {
    setLoading(true);
    await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data from here :", data);
        if (data.message === "user created") {
          setSuccess(true);
          setUser(data);
        } else {
          setSuccess(false);
          setUser(data);
        }
      })
      .catch((err) => {
        console.log("error from resgiter: ", err);
        setError(err);
      });
    setLoading(false);
  };
  //logout function
  const AuthLogout = () => {
    setSuccess(false);
    setUser(null);
  };

  return (
    <AuthProvider
      AuthProvider
      value={{
        success,
        error,
        loading,
        user,
        authLogin,
        authRegister,
        AuthLogout,
      }}
    >
      {children}
    </AuthProvider>
  );
}

export { AuthContext, AuthContextProvider };
