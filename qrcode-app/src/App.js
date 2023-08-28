import { Map } from './components/Map';
import { QR } from './components/QR';

// value
// url : 이동할 사이트 주소
// 문자 : 해당 문자 검색
function App() {
  // return <Map />;
  return (
    <>
      <Map />
      <QR />
    </>
  );
}
export default App;
