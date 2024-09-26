// import { useState } from "react";
 //import "./App.css";
// function App() {
//   const [img, setImg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [qrData, setQrData] = useState("hai");
//   const [qrsize, setSize] = useState("150");

//   async function generateQR() {
//     setLoading(true);
//     try {
//       const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(
//         qrData
//       )}`;
//       setImg(url);
//     } catch (error) {
//       console.log("Error generating QR Code:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   function downloadQR() {
//     fetch(img)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const link = document.createElement("a");
//         link.href = URL.createObjectURL(blob);
//         link.download = "QRCode.png";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       })
//       .catch((error) => console.log("Error downloading QR Code:", error));
//   }

//   return (
//     <div className="app-container">
//       <h1>QR Code Generator</h1>
//       {loading && <p>Please wait...</p>}
//       {img && <img src={img} alt="Generated QR Code" className="qr-img" />}
//       <div>
//         <label htmlFor="dataInput" className="input-label">
//           Data for QR Code
//         </label>
//         <input
//           type="text"
//           value={qrData}
//           onChange={(e) => setQrData(e.target.value)}
//           id="dataInput"
//           placeholder="Enter data for QR"
//         />
//         <label htmlFor="SizeInput" className="input-label">
//           QR size (e.g., 200)
//         </label>
//         <input
//           type="text"
//           value={qrsize}
//           onChange={(e) => setSize(e.target.value)}
//           id="SizeInput"
//           placeholder="Enter size of QR"
//         />
//         <button onClick={generateQR} disabled={loading}>
//           Generate QR Code
//         </button>
//         <button onClick={downloadQR} disabled={!img}>
//           Download QR Code
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { createSwapy } from "swapy";
import './Swapy.css'

const App = () => {
  useEffect(() => {
    const container = document.querySelector(".container");

    const swapy = createSwapy(container, {
      animation: "dynamic", 
    });

    // You can disable and enable it anytime you want
    swapy.enable(true);

    swapy.onSwap((event) => {
      console.log(event.data.object);
      console.log(event.data.array);
      console.log(event.data.map);
    });

    // Cleanup on unmount
    return () => {
      swapy.enable(false);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div
          className="section-1 "
          style={{ width: "20%", border: "1px solid black" }}
          data-swapy-slot="foo"
        >
          <div className="content-a " data-swapy-item="a">
            1
          </div>
        </div>

        <div
          className="section-2"
          style={{ width: "20%", border: "1px solid black" }}
          data-swapy-slot="bar"
        >
          <div className="content-b" data-swapy-item="b">
            2<div className="handle" data-swapy-handle></div>
          </div>
        </div>
           
        <div
          className="section-3"
          style={{ width: "20%", border: "1px solid black" }}
          data-swapy-slot="baz"
        >
          <div className="content-c" data-swapy-item="c">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
