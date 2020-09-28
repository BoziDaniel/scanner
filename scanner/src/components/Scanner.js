import React, { useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
const Scanner = () => {
  const [barCode, setBarCode] = useState("");
  const [data, setData] = useState([]);
  const [proposedData, setPropsedData] = useState("Not Found");

  if (barCode === "") {
    let obj = { id: proposedData, quantity: 1 };
    let found = false;
    if (proposedData !== "Not Found") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === proposedData) {
          data[i].quantity++;
          setData(data);
          if (data[i].quantity > 3) {
            setBarCode(data[i].id);
            alert("Your barcode is: " + { barCode });
          }
          found = true;
          break;
        }
      }
      if (!found) {
        data.push(obj);
        setData(data);
      }
      setPropsedData("Not Found");
    }

    found = false;
  }

  return (
    <div style={{ background: "white" }}>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setPropsedData(result.text);
          else setPropsedData("Not Found");
        }}
      />
      <p>proposed Data: {proposedData}</p>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.quantity}</div>
          </div>
        ))}
      </div>
      <p>barcode: {barCode}</p>
    </div>
  );
};

export default Scanner;
