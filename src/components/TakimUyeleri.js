import React, {useState} from "react";







const TakimUyeleri = function ({takimUyeleri}) {

    const [duzenlenecekUye, setDuzenlenecekUye] = useState(null);
    const duzenle = (uye) => {
        setDuzenlenecekUye(uye);
      }
      
    

    return(
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
      </div>)
}
export default TakimUyeleri