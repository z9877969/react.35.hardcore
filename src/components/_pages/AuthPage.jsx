import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../_share/Form/Form";
import authFormOptions from "../../assets/options/authOptions.json";
import { register, login } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// type, title, name, placeholder

const AuthPage = () => {
  const dispatch = useDispatch();
  const { authType } = useParams();
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    authType === "register" && dispatch(register(form));
    authType === "login" && dispatch(login(form));
  };

  const btnTitle = authType === "register" ? "SignUp" : "SignIn";
  const link = authType === "register" ? "SignIn" : "SignUp";
  const to = authType === "register" ? "/auth/login" : "/auth/register";

  return (
    <>
      <Link to={to}>{link}</Link>
      <Form
        formOpts={authFormOptions}
        handleChange={handleChange}
        cbOnSubmit={handleSubmit}
        formValues={form}
        btnTitle={btnTitle}
      />
    </>
  );
};

export default AuthPage;
