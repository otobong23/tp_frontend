'use client';
import { QRCodeCanvas } from 'qrcode.react';
import { FC } from 'react';

type QRCodeGeneratorProps = {
    address: string,
    label: 'Bitcoin' | 'Ethereum' | 'USDT'
}

const QRCodeGenerator:FC<QRCodeGeneratorProps> = ({ address, label }) => {
  // Create a URI for different wallet types
  const getQRCodeData = () => {
    if (label === "Bitcoin") return `${address}`;
    if (label === "Ethereum") return `${address}`;
    if (label === "USDT") return `${address}`; // Assuming USDT on Ethereum
    return address;
  };

  return (
    <div>
      <QRCodeCanvas value={getQRCodeData()} size={256} />
    </div>
  );
};

export default QRCodeGenerator;
