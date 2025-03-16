import React, { Component } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "./auth.css";
import Link from "../Links/link";
import NavigateButton from "../Buttons/navigateButton";
import Input from "../Inputs/input";
import Button from "../Buttons/button";
import FormSeparator from "../separators/formSeparator";

class Signin extends Component {
  state = {};
  render() {
    return (
      <form className="auth-form">
      <h1>Signin</h1>
      <Link svg={<FaGoogle color="red" />} label="Signin with google" />
      <Link svg={<FaFacebook />} label="Signin with facebook" />
      <FormSeparator />
      <Input width="60%" label="Email address" />
      <Input width="60%" label="Password" />
      <Button label="Sigin" />
    </form>
    );
  }
}

export default Signin;
