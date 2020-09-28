import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
const Scanner = () => {
  const [data, setData] = useState("Not Found");
  const [proposedData, setPropsedData] = useState([]);
  useEffect(() => {
    console.log(proposedData);
    if (data !== "Not Found") {
      let Obj = { id: data, quantity: 1 };
      if (proposedData === undefined) {
        setPropsedData([Obj]);
      } else {
        let found = false;
        let index = 0;
        for (let singleData of proposedData) {
          if (singleData.id === data) {
            found = true;
            break;
          }
          index++;
        }
        if (found) {
          proposedData[index].quantity++;
          setPropsedData(proposedData);
        } else {
          proposedData.push(Obj);
          setPropsedData(proposedData);
        }
      }
      console.log(proposedData);
    }
  }, [data, proposedData]);
  return (
    <div style={{ background: "white" }}>
      <p>works</p>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </div>
  );
};

export default Scanner;
