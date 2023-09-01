import { React, useState } from 'react';
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps';
import { ModalBg } from './Modal/ModalBg';
import { Modal } from './Modal/Modal';
// import { QrScanner } from '@yudiel/react-qr-scanner';
import { QRScanner } from './QRScanner';

export const Map = () => {
  const navermaps = useNavermaps();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const mapCenter = new navermaps.LatLng(37.5173, 127.0474);

  return (
    <div>
      <MapDiv
        style={{
          width: '100%',
          height: '600px',
        }}
      >
        <NaverMap defaultCenter={mapCenter} defaultZoom={17}>
          <Marker position={mapCenter} onClick={openModal} />
        </NaverMap>
      </MapDiv>
      {isOpen && (
        <ModalBg>
          <Modal>
            <button onClick={closeModal}>X</button>
            <div className="qrwrapper">
              <h3>QR 코드를 스캔해주세요.</h3>
              <QRScanner />
            </div>
          </Modal>
        </ModalBg>
      )}
    </div>
  );
};
