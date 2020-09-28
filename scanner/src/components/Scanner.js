import React, { useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
const Scanner = () => {
  const [barCode, setBarCode] = useState("");
  const [data, setData] = useState([
    { id: 1231312, quantity: 1 },
    { id: 131241512, quantity: 2 },
  ]);
  const [proposedData, setPropsedData] = useState("");
  if (barCode === "Not Found") {
    if (proposedData !== "") {
      let obj = { id: proposedData, quantity: 1 };
      let found = false;
      for (let i = 0; i < data.length; i++) {
        alert(data[i].id, data.quantity);
        if (data[i].id === proposedData) {
          data[i].quantity++;
          setData(data);
          if (data[i].quantity > 3) {
            setBarCode(data[i].id);
          }
          found = true;
          break;
        }
      }
    }
    if (!found) {
      data.push(obj);
    }
    found = false;
    setPropsedData("");
  }

  // console.log(proposedData);
  // if (data !== "Not Found") {
  //   let Obj = { id: data, quantity: 1 };
  //   if (proposedData === undefined) {
  //     setPropsedData([Obj]);
  //   } else {
  //     let found = false;
  //     let index = 0;
  //     for (let singleData of proposedData) {
  //       if (singleData.id === data) {
  //         found = true;
  //         break;
  //       }
  //       index++;
  //     }
  //     if (found) {
  //       proposedData[index].quantity++;
  //       setPropsedData(proposedData);
  //     } else {
  //       proposedData.push(Obj);
  //       setPropsedData(proposedData);
  //     }
  //   }
  //   console.log(proposedData);
  // }

  return (
    <div style={{ background: "white" }}>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setPropsedData(result.text);
          else setBarCode("Not Found");
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
