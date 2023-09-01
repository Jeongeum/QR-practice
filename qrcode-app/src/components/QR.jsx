import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

export const QR = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>테스트용 qr코드</p>
      <QRCodeCanvas value="https://www.naver.com/" />
    </>
  );
};
