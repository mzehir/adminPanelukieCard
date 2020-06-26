// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import AboutFire from '../../config/aboutFire';
import LoginFire from '../../config/loginFire';
import {
    FormText,
    Table
} from 'reactstrap';

const About = () => {
    const [coverLetter, setcoverLetter] = useState('')
    const [CV, setCV] = useState(null)

    const [hizmet, sethizmet] = useState('')
    const [hizmetIconu, sethizmetIconu] = useState('')

    const [guzelSoz, setguzelSoz] = useState('')
    const [guzelSozYazar, setguzelSozYazar] = useState('')

    const [onYaziFormListe, setonYaziFormListe] = useState([])
    const [hizmetListe, sethizmetListe] = useState([])
    const [guzelSozListe, setguzelSozListe] = useState([])

    useEffect(() => {
        AboutFire.getProfil().then(((data) => {
            if (data) {
                setonYaziFormListe(data.OnYaziBilgileri)
                sethizmetListe(data.HizmetBilgileri)
                setguzelSozListe(data.GuzelSozBilgileri)
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
                            <strong>Profil Sayfa Ayarları</strong>
                        </div>

                        <div>
                            <div className="card-body">
                                <div className="row">

                                    {/* /////////////////////////////////////Ön Yazı Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Ön Yazı Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Ön Yazı Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Ön Yazı :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea defaultValue={onYaziFormListe ? onYaziFormListe.coverLetter : ""} onChange={e => setcoverLetter(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana site ziyaretçilerinin okuyacağı sizi anlatan bir yazı giriniz.
                                                Mesela bu yazı okuyucuyu sıkmamalı ve sizin hakkınızda bilgi verici olmalıdır.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>CV Yükle :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input className="file" type="file" onChange={e => setCV(e.target.files[0])}></input>
                                                <FormText color="muted">Lütfen buradan cv yükleme işlemini yapınız. Dosya formatı
                                                        <strong> PDF</strong> olmalıdır.
                                                    </FormText>
                                            </div>
                                        </div>


                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={onYaziFormSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////Ön Yazı Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Ön Yazı Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Hizmet Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Hizmet Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Hizmet Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Hizmet Ekle:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => sethizmet(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana kişisel hizmet bilgisi giriniz. Mesela <strong>Mobil Uygulamalar</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Hobi İconu:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => sethizmetIconu(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">
                                                    Öncelikle https://fontawesome.com/ adresine gidelim. Daha sonra arama butonuna iconunu eklemek istediğimiz hizmet ismini yazalım.
                                                    Mesela <strong>mobil </strong> gibi. Sonrasında arama sonucu ile karşımıza gelen iconlardan beğendiğimiz icona tıklayalım.
                                                    Karşımıza gelen sayfada en üst kısımda yer alan mesela fa fa-mobile yazısının <strong>fa fa-mobile </strong> bölümünü kopyalayalım ve bu alana yapıştıralım.
                                                </FormText>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button onClick={hizmetFormSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Hizmetler</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Hizmet</th>
                                                    <th>İcon Kodu</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {hizmetListe && hizmetListe.length > 0 && hizmetListe.map((hizmet, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{hizmet.hizmet}</td>
                                                            <td>{hizmet.hizmetIconu}</td>
                                                            <button onClick={() =>deletedHizmetToFire(index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Hizmet Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Hizmet Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Beğenilen Söz Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Beğenilen Söz Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Güzel Bir Söz Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Güzel Bir Söz:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea defaultValue={guzelSozListe ? guzelSozListe.guzelSoz : ""} onChange={e => setguzelSoz(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana site ziyaretçilerinin okuyacağı güzel bir yazı giriniz.
                                                Mesela bu yazı okuyucuyu sıkmamalı ve hoş veya  bilgi verici olmalıdır.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Sözün Yazarı:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={guzelSozListe ? guzelSozListe.guzelSozYazar : ""} onChange={e => setguzelSozYazar(e.target.value)} className="form-control" type="text"></input>
                                                <FormText color="muted">Lütfen buraya yazılan sözün yazarını giriniz. Mesela
                                                        <strong> Mustafa Kemal ATATÜRK</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>


                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={guzelSozFormSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////Beğenilen Söz Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Beğenilen Söz Bitişi//////////////////////////////////////// */}

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={deleteProfil} className="btn btn-danger btn-block">Tüm Sayfayı Sil</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

    async function onYaziFormSave(data) {
        try {
            var dataCV = {
                CV: CV,
            }
            var data = {
                coverLetter: coverLetter,
                cvName: CV.name,
            }
            await AboutFire.onYaziFormToFire(data, dataCV)
        } catch (error) {
            alert(error.message)
        }
    }

    async function hizmetFormSave(data) {
        try {
            var data = {
                hizmet: hizmet,
                hizmetIconu: hizmetIconu,
            }
            await AboutFire.hizmetFormToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function guzelSozFormSave(data) {
        try {
            var data = {
                guzelSoz: guzelSoz,
                guzelSozYazar: guzelSozYazar
            }
            await AboutFire.guzelSozFormToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function deleteProfil() {
        await AboutFire.deleteProfile()
    }

    async function deletedHizmetToFire(index) {
        await AboutFire.deleteHizmet(index)
    }

}

export default About