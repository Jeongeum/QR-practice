import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export const QR = () => {
  return <QRCodeCanvas value="https://www.naver.com/" />;
};
