import React from "react";
import { useSelector } from "react-redux";
import "./FormdataCard.css";
const FormdataCard = () => {
  const personalData = useSelector((state) => state.form.personalDetails);
  console.log(personalData);
  return (
    personalData &&
    personalData.map((val, i) => {
      return (
        <div className="outer-box-card">
          <div>
            <h3>Data {i}</h3>
          </div>
          <div className="data">Name: {val.name}</div>
          <div className="data">Age: {val.age}</div>
          <div className="data">Highest Qualification: {val.qual}</div>
          <div className="data">College Name: {val.college}</div>
          <div className="data">Email: {val.email}</div>
        </div>
      );
    })
  );
};

export default FormdataCard;
