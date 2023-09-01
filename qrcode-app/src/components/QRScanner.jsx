import React, { useEffect } from 'react';
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import { useState } from 'react';

export const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScanSuccess = (decodedText, decodedResult) => {
    console.log('QR 코드 스캔 결과:', decodedText, decodedResult);
    setScanResult(() => decodedResult);
  };

  const handleScanError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    //
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false
    );

    scanner.render(handleScanSuccess);

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <>
      {scanResult ? (
        <a href={'http://' + scanResult}>스캔결과</a>
      ) : (
        <div id="reader" style={{ width: '250px', height: '250px' }}></div>
      )}
    </>
  );
};
