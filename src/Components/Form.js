import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form.css";
import { useState } from "react";
import { formActions } from "./../store/form-slice";
import { useDispatch } from "react-redux";
const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [qual, setQual] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    dispatch(
      formActions.addFormData({
        name,
        age,
        qual,
        college,
        email,
      })
    );
  };
  return (
    <div className="outer-box form">
      <h1 style={{ color: "#111827" }}>Personal Details Form</h1>
      {/* <form className="form"> */}
      <TextField
        style={{ marginBottom: "20px" }}
        className="input"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        style={{ marginBottom: "20px" }}
        className="input"
        id="outlined-basic"
        label="Age"
        type="number"
        variant="outlined"
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        style={{ marginBottom: "20px" }}
        className="input"
        id="outlined-basic"
        label="Highest Qualification"
        variant="outlined"
        onChange={(e) => setQual(e.target.value)}
      />
      <TextField
        style={{ marginBottom: "20px" }}
        id="outlined-basic"
        className="input"
        label="College Name"
        variant="outlined"
        onChange={(e) => setCollege(e.target.value)}
      />
      <TextField
        style={{ marginBottom: "20px" }}
        id="outlined-basic"
        className="input"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        style={{ backgroundColor: "#111827", marginTop: "20px" }}
        className="submitbtn"
        variant="contained"
        component="span"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {/* </form> */}
    </div>
  );
};

export default Form;
