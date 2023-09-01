import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

export const QR = () => {
  const navigate = useNavigate();
  return (
    <QRCodeCanvas
      value="https://www.naver.com/"
      onClick={() => navigate('https://www.naver.com/')}
    />
  );
};
