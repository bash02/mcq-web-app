import React, { Component } from "react";
import "./auth.css";
import Link from "../Links/link";
import Input from "../Inputs/input";
import Button from "../Buttons/button";
import FormSeparator from "../separators/formSeparator";
import { FaFacebook, FaGoogle } from "react-icons/fa";

class Signup extends Component {
  state = {};
  render() {
    return (
      <form className="auth-form">
        <h1>SignUp</h1>
        <Link svg={<FaGoogle color="red" />} label="Signup with google" />
        <Link svg={<FaFacebook />} label="Signup with facebook" />
        <FormSeparator />
        <Input width="60%" label="Email address" />
        <Input width="60%" label="Password" />
        <Button label="Signup" />
      </form>
    );
  }
}

export default Signup;
