import "./styles.css";
import Form from "./Form";
import React, { useState } from "react";

export default function App() {
  var denom = {
    1: 0,
    5: 0,
    10: 0,
    50: 0,
    100: 0,
    500: 0,
    2000: 0
  };
  var [formData, SetFormData] = useState({
    cash: 0,
    amt: 0,
    den: denom
  });

  function handleForm(cash, amt) {
    console.log("Cash:" + cash);
    console.log("Bill:" + amt);

    var cash_due = amt - cash;
    if (cash_due < 0) {
      alert("Not enough dough!");
    }

    var den = Object.keys(denom);
    den.sort(function (a, b) {
      return b - a;
    });
    console.log(den);
    var cnt = 0;
    while (cash_due > 0) {
      den.map((i) => {
        if (cash_due >= i) {
          var notes = Math.trunc(cash_due / i);
          denom[i] = notes;
          cash_due = cash_due - notes * i;
        }
      });
      cnt = cnt + 1;
      if (cnt > 10) {
        console.log(cnt);
        break;
      }
    }

    SetFormData({
      cash: cash,
      amt: amt,
      den: denom
    });
  }

  return (
    <div className="App">
      <Form handleForm={handleForm.bind(this)} />
      <br />
      <div className="result">
        <table>
          <tbody>
            <tr>
              <td>Total cash Due:</td>
              <td>{formData.amt - formData.cash}</td>
            </tr>
            {Object.keys(denom).map((i) => {
              return (
                <tr key={i}>
                  <td>{i}:</td>
                  <td>{formData.den[i]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
