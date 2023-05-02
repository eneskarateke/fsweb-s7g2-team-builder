import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Data.css"

function Data({ takimUyeleri, setTakimUyeleri, duzenlenecekUye, setDuzenlenecekUye }) {
  const [user, setUser] = useState({ isim: "", rol: "", email:"", yas:"", takim:"" });

  useEffect(() => {
    setUser(duzenlenecekUye || { isim: "", rol: "", email:"", yas:"", takim:"" });
  }, [duzenlenecekUye]);

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleEkle = () => {
    setTakimUyeleri([...takimUyeleri, user]);
    setUser({ isim: "", rol: "", email:"", yas:"", takim:"" });
  };

  const handleGuncelle = () => {
    const index = takimUyeleri.findIndex(u => u.isim === duzenlenecekUye.isim);
    const updatedUyeler = [...takimUyeleri];
    updatedUyeler[index] = user;
    setTakimUyeleri(updatedUyeler);
    setUser({ isim: "", rol: "", email:"", yas:"", takim:"" });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (duzenlenecekUye) {
      handleGuncelle();
    } else {
      handleEkle();
    }
    setDuzenlenecekUye(null);
    setUser({ isim: "", rol: "", email:"", yas:"", takim:"" });
  };

  return (
    <div className="Form">  
      <Form onSubmit={event => handleSubmit(event)}>
        <FormGroup>
          <Label className="Label" for="exampleİsim">İsim</Label>
          <Input
            className="Input"
            type="text"
            name="isim"
            value={user.isim}
            onChange={event => handleChange(event)}
          />
        </FormGroup>
  
        <FormGroup>
          <Label className="Label" for="exampleRol">Rol</Label>
          <Input
            className="Input"
            type="text"
            name="rol"
            value={user.rol}
            onChange={event => handleChange(event)}
          />
        </FormGroup>
  
        <FormGroup>
          <Label className="Label" for="exampleEmail">E-mail</Label>
          <Input
            className="Input"
            type="text"
            name="email"
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </FormGroup>
  
        <FormGroup>
          <Label className="Label" for="exampleRol">Yaş (Rakamla)</Label>
          <Input
            className="Input"
            type="number"
            name="yas"
            value={user.yas}
            onChange={event => handleChange(event)}
          />
        </FormGroup>

        <FormGroup>
          <Label className="Label" for="exampleRol">Tuttuğu Takım</Label>
          <Input
            className="Input"
            type="text"
            name="takim"
            value={user.takim}
            onChange={event => handleChange(event)}
          />
        </FormGroup>

        <Button className="Button">{duzenlenecekUye ? "Güncelle" : "Ekle"}</Button>
      </Form>
    </div>
  );
}

export default Data;
