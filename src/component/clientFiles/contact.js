import React, { useEffect, useState } from 'react';
import ContactFire from '../../config/contactFire';
import LoginFire from '../../config/loginFire';
import {
    FormText
} from 'reactstrap';
const Contact = () => {

    const [email, setemail] = useState('')
    const [lokasyon, setlokasyon] = useState('')
    const [gsm, setgsm] = useState('')

    const [iletisimList, setiletisimList] = useState([])

    useEffect(() => {
        ContactFire.getIletisim().then(((data) => {
            if (data) {
                setiletisimList(data.IletisimBilgisi)
            }
        }))
        LoginFire.loginingControl().then((() => {
            
        }))
    }, [])


    return (
        <div className="col-md-10 mt-5">
            <div className="row">
                <div className="col-md-12">

                    <div className="text-center card">
                        <div className="card-header">
                            <strong>Contact Sayfa Ayarları</strong>
                        </div>

                        <div>
                            <div className="card-body">
                                <div className="row">

                                    {/* /////////////////////////////////////İletişim Bilgiler Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////İletişim Bilgiler Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>İletişim Bilgiler Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Email Adresi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={iletisimList.email} onChange={e => setemail(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana mail adresinizi giriniz. Mesela <strong>deneme@gmail.com</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Lokasyon Bilgisi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={iletisimList.lokasyon} onChange={e => setlokasyon(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana ikamet adres bilginizi giriniz. Mesela
                                                    <strong> Atatürk Mah. Cumhuriyet Cad. No:79 Beşiktaş / İstanbul</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Telefon Numarası:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={iletisimList.gsm} onChange={e => setgsm(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana telefon numarası bilginizi giriniz. Mesela <strong>0 555 555 5555</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={iletisimFormuSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////İletişim Bilgiler Bilgiler Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////İletişim Bilgiler Bilgiler Formu Bitişi//////////////////////////////////////// */}

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={deleteIletisimPage} className="btn btn-danger btn-block">Tüm Sayfayı Sil</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

    async function iletisimFormuSave(data) {
        try {
            var data = {
                email: email,
                lokasyon: lokasyon,
                gsm: gsm
            }
            debugger
            await ContactFire.iletisimBilgileriToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function deleteIletisimPage() {
        await ContactFire.deleteIletisim()
    }

}

export default Contact