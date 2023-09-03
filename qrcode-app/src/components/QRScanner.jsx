import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState } from "react";

export const QRScanner = ({ setIsOpen }) => {
  const [scanResult, setScanResult] = useState(null);
  const qrcodeRef = useRef();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false
    );

    const handleScanSuccess = (decodedText) => {
      console.log("QR 코드 스캔 결과:", decodedText);
      setScanResult(() => decodedText);
      qrcodeRef.current.click();
      setIsOpen(false);
      scanner.clear();
    };

    // const handleScanError = (error) => {
    //   console.log(error);
    // };

    scanner.render(handleScanSuccess);

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <>
      {scanResult ? (
        <>
          <a href={scanResult} ref={qrcodeRef} target="_blank" rel="noreferrer">
            스캔결과: {scanResult}
          </a>
        </>
      ) : (
        <div id="reader" style={{ width: "250px", height: "250px" }}></div>
      )}
    </>
  );
};
