import { React, useState } from "react";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";
import { ModalBg } from "./Modal/ModalBg";
import { Modal } from "./Modal/Modal";
import { QRScanner } from "./QRScanner";

export const Map = () => {
  const navermaps = useNavermaps();
  const [isOpen, setIsOpen] = useState(false);
  const areaList = [
    { location: "강남구청", lat: 37.5174, lng: 127.0474 },
    { location: "삼성1동 주민센터", lat: 37.5143, lng: 127.0626 },
    { location: "삼성2동 주민센터", lat: 37.5112, lng: 127.046 },
  ];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const mapCenter = new navermaps.LatLng(37.5135, 127.0527);

  return (
    <div>
      <MapDiv
        style={{
          width: "100%",
          height: "600px",
        }}
      >
        <NaverMap defaultCenter={mapCenter} defaultZoom={15}>
          {areaList.map((item) => (
            <Marker
              position={new navermaps.LatLng(item.lat, item.lng)}
              onClick={openModal}
            />
          ))}
        </NaverMap>
      </MapDiv>
      {isOpen && (
        <ModalBg>
          <Modal>
            <button onClick={closeModal}>X</button>
            <div className="qrwrapper">
              <h3>QR 코드를 스캔해주세요.</h3>
              <QRScanner setIsOpen={setIsOpen} />
            </div>
          </Modal>
        </ModalBg>
      )}
    </div>
  );
};
