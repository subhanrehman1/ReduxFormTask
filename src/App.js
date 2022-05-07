import React from "react";
import "./App.css";
import Form from "./Components/Form";
import FormdataCard from "./Components/FormdataCard";
import { useSelector } from "react-redux";
const App = () => {
  const items = useSelector((state) => state.form.personalDetails);
  console.log(items);
  return (
    <div>
      <Form />
      <FormdataCard />
    </div>
  );
};

export default App;
