import React, { useState } from "react";
import NavigateButton from "../Buttons/navigateButton";
import "./auth.css";
import Signin from "./signin";
import Signup from "./signup";

const AuthScreen = () => {
  const [screen, setState] = useState("signin");

  const handleChange = () => {
    if (screen === "signin") {
      setState("signup");
    } else {
      setState("signin");
    }
  };

  return (
    <div className="auth-screen">
      <div className="form-container">
        <NavigateButton
          handleScreenChange={handleChange}
          leftLabel="Signup"
          rightLabel="Signin"
        />
        {/* First Approach */}
        {screen === "signin" ? <Signin /> : <Signup />}
      </div>
    </div>
  );
};

export default AuthScreen;
