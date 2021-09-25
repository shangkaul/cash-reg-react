import "./styles.css";
import Form from "./Form";
import React, { useState } from "react";

export default function App() {
  var [formData, SetFormData] = useState({
    cash: 0,
    amt: 0
  });

  function handleForm(cash, amt) {
    SetFormData({
      cash: cash,
      amt: amt
    });
  }

  return (
    <div className="App">
      <Form handleForm={handleForm.bind(this)} />
      <br />
      <div className="result">{formData.cash}</div>
    </div>
  );
}
