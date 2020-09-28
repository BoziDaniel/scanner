import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
const Scanner = () => {
  const [data, setData] = useState("Not Found");
  const [proposedData, setPropsedData] = useState([]);
  useEffect(() => {
    if (data === "Not Found") {
      let Obj = { id: proposedData, quantity: 1 };
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
  }, [data, proposedData]);
  return (
    <div style={{ background: "white" }}>
      <BarcodeScannerComponent
        width={300}
        height={300}
        onUpdate={(err, result) => {
          if (result) setPropsedData(result.text);
          else setData("Not Found");
        }}
      />
      <p>proposed Data: {proposedData}</p>
      <p>data: {data}</p>
    </div>
  );
};

export default Scanner;
