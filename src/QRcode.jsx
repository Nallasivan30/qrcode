import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const CustomQRcode = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <QRCode
        // size={256}
        // style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
      <label htmlFor="qr" className="my-4">
        Enter the link
      </label>
      <input
        type="text"
        className="border-spacing-x-7 "
        placeholder="Enter the text or link"
        name=""
        id="qr"
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <button className="p-4 text-white bg-slate-900 my-4" onClick={generateQR}>
        Generate QR Code
      </button> */}
    </div>
  );
};

export default CustomQRcode;
