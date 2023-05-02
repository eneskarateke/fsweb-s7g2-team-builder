import './App.css';
import Data from './components/Data';
import { useState } from 'react';

function App() {
  const [takimUyeleri, setTakimUyeleri] = useState([
    {isim: "Ali", rol: "Yazılımcı", email: "ali@example.com", yas: 30, takim: "A Takımı"},
    {isim: "Ayşe", rol: "Tasarımcı", email: "ayse@example.com", yas: 25, takim: "B Takımı"},
    {isim: "Mehmet", rol: "Test Mühendisi", email: "mehmet@example.com", yas: 28, takim: "A Takımı"}
  ]);
  const [duzenlenecekUye, setDuzenlenecekUye] = useState(null);

  const duzenle = (uye) => {
    setDuzenlenecekUye(uye);
  }

  return (
    <div className="App">
      <Data takimUyeleri={takimUyeleri} setTakimUyeleri={setTakimUyeleri} duzenlenecekUye={duzenlenecekUye} setDuzenlenecekUye={setDuzenlenecekUye} />
      <div>
        {takimUyeleri.map((uyeler, index) => (
          <div className='tekilUye' key={index}>
            <p>Üye ismi: {uyeler.isim}</p>
            <p>Üye rolü: {uyeler.rol}</p>
            <p>Üye Email'i: {uyeler.email}</p>
            <p>Üye yaşı: {uyeler.yas}</p>
            <p>Üye takımı: {uyeler.takim}</p>
            <button className='Button' onClick={() => duzenle(uyeler)}>Düzenle</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;