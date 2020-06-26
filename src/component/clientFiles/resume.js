// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import ResumeFire from '../../config/resumeFire';
import LoginFire from '../../config/loginFire';
import {
    Button,
    FormText,
    Table
} from 'reactstrap';

const Resume = () => {

    const [calisilanFirma, setcalisilanFirma] = useState('')
    const [calisilanFirmaZamani, setcalisilanFirmaZamani] = useState('')
    const [calisilanFirmaPozisyon, setcalisilanFirmaPozisyon] = useState('')
    const [calisilanFirmaTecrube, setcalisilanFirmaTecrube] = useState('')

    const [okunanOkul, setokunanOkul] = useState('')
    const [okunanOkulZamani, setokunanOkulZamani] = useState('')
    const [okunanOkulBolum, setokunanOkulBolum] = useState('')
    const [okunanOkulTecrube, setokunanOkulTecrube] = useState('')

    const [yetkinAlan, setyetkinAlan] = useState('')
    const [yetkinAlanYuzde, setyetkinAlanYuzde] = useState('')

    const [extraYetkinAlan, setextraYetkinAlan] = useState('')
    const [extraYetkinAlanYuzde, setextraYetkinAlanYuzde] = useState('')

    const [yabanciDil, setyabanciDil] = useState('')
    const [yabanciDilSeviye, setyabanciDilSeviye] = useState('')

    const [ayricaYetkinAlan, setayricaYetkinAlan] = useState('')

    const [hobiler, sethobiler] = useState('')
    const [hobilerAciklama, sethobilerAciklama] = useState('')

    const [calisilanFirmalarListesi, setcalisilanFirmalarListesi] = useState([])
    const [okunanOkullarListesi, setokunanOkullarListesi] = useState([])
    const [yetkinAlanlarListesi, setyetkinAlanlarListesi] = useState([])
    const [extraYetkinAlanlarListesi, setextraYetkinAlanlarListesi] = useState([])
    const [yabanciDilListesi, setyabanciDilListesi] = useState([])
    const [ayricaYetkinAlanListesi, setayricaYetkinAlanListesi] = useState([])
    const [hobilerListesi, sethobilerListesi] = useState([])

    useEffect(() => {
        ResumeFire.getResume().then(((data) => {
            debugger
            if (data) {
                setcalisilanFirmalarListesi(data.CalismaGecmisi)
                setokunanOkullarListesi(data.EgitimGecmisi)
                setyetkinAlanlarListesi(data.YetkinAlanlar)
                setextraYetkinAlanlarListesi(data.ExtraYetkinAlanlar)
                setyabanciDilListesi(data.YabanciDiller)
                setayricaYetkinAlanListesi(data.AyricaYetkinAlanlar)
                sethobilerListesi(data.Hobiler)
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
                            <strong>CV Sayfa Ayarları</strong>
                        </div>

                        <div>
                            <div className="card-body">
                                <div className="row">

                                    {/* /////////////////////////////////////Deneyim Geçmişi Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Deneyim Geçmişi Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Deneyim Geçmişi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Önceki Dönemde Çalışılan Şirket:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setcalisilanFirma(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana önceden çalışmış olduğunuz şirket ismi giriniz.
                                                    Mesela <strong>Akart İnşaat A.Ş</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Çalışılan Yıl Miktarı:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setcalisilanFirmaZamani(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana şirkette çalıştığınız yıl  bilginizi giriniz. Mesela <strong>2014 - 2018 </strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Çalışılan Pozisyon:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setcalisilanFirmaPozisyon(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana şirketteki çalışma pozisyonu bilgisini giriniz. Mesela <strong>Resepsiyon Görevlisi</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Kazanılan Tecrübe:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => setcalisilanFirmaTecrube(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana çalışılan şirketteki kazanılan tecrübe bilgisini giriniz. Yada şirket ile alakalı dikkat çekici
                                                    başka bir bilgide verilebilir. Tüm bilgiler 7 - 8 cümleyi geçmemesi tavsiye edilir.</FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={calismaGecmisiKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Deneyim Geçmişleri</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Şirket</th>
                                                    <th>Yıl Bilgisi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {calisilanFirmalarListesi && calisilanFirmalarListesi.length > 0 && calisilanFirmalarListesi.map((firma, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{firma.calisilanFirma}</td>
                                                            <td>{firma.calisilanFirmaZamani}</td>
                                                            <button onClick={() => deleteRequestDeneyim(index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Deneyim Geçmişi Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Deneyim Geçmişi Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Eğitim Geçmişi Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Eğitim Geçmişi Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eğitim Geçmişi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Önceki Dönemde Okunan Okul:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setokunanOkul(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana önceden okumuş olduğunuz okul ismi giriniz.
                                                    Mesela <strong>Ali Dilmen Anadolu Lisesi</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Okunan Yıl Bilgisi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setokunanOkulZamani(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana okuduğunuz okul yıl  bilginizi giriniz. Mesela <strong>2014 - 2018 </strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Okunan Bölüm:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setokunanOkulBolum(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana okunan bölüm bilgisini giriniz. Mesela <strong>Sayısal Bölümü</strong> gibi.
                                                Şayet Bölüm bilgisi yok ise <strong>-</strong> koyunuz.</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Kazanılan Tecrübe:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => setokunanOkulTecrube(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana okulda kazanılan tecrübe bilgisini giriniz. Yada okul ile alakalı dikkat çekici
                                                    başka bir bilgide verilebilir. Tüm bilgiler 7 - 8 cümleyi geçmemesi tavsiye edilir.</FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={egitimGecmisiKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Eğitim Geçmişleri</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Okul</th>
                                                    <th>Yıl Bilgisi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {okunanOkullarListesi && okunanOkullarListesi.length > 0 && okunanOkullarListesi.map((okul, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{okul.okunanOkul}</td>
                                                            <td>{okul.okunanOkulZamani}</td>
                                                            <button onClick={() => deleteRequestEgitim(index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Eğitim Geçmişi Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Eğitim Geçmişi Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Yetkinlik Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Yetkinlik Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Yetkinlik Bilgisi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Yetkin Olunan Alan:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setyetkinAlan(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yetkin olunan bir alan bilgisi giriniz.
                                                    Mesela <strong>HTML</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Yetkinlik Yüzdesi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setyetkinAlanYuzde(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yetkin olunan alanın yüzdesel belirtecini giriniz.. Mesela <strong> 98 </strong> gibi...</FormText>
                                            </div>
                                        </div>


                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={yetkiAlanlarKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Yetkinlik Bilgisi</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Yetkinlik</th>
                                                    <th>Yüzdesi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {yetkinAlanlarListesi && yetkinAlanlarListesi.length > 0 && yetkinAlanlarListesi.map((yetkinlik, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{yetkinlik.yetkinAlan}</td>
                                                            <td>{yetkinlik.yetkinAlanYuzde}</td>
                                                            <button onClick={() => deleteRequestYetkinlik(index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Yetkinlik Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Yetkinlik Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Extra Yetkinlik Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Extra Yetkinlik Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Extra Yetkinlik Bilgisi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Yetkin Olunan Alan:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setextraYetkinAlan(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yetkin olunan bir alan bilgisi giriniz.
                                                    Mesela <strong>HTML</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Yetkinlik Yüzdesi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setextraYetkinAlanYuzde(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yetkin olunan alanın yüzdesel belirtecini giriniz.. Mesela <strong> 98 </strong> gibi...</FormText>
                                            </div>
                                        </div>


                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={extrayetkiAlanlarKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Extra Eklenen Yetkinlik Bilgisi</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Yetkinlik</th>
                                                    <th>Yüzdesi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {extraYetkinAlanlarListesi && extraYetkinAlanlarListesi.length > 0 && extraYetkinAlanlarListesi.map((extraYetkinlik, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{extraYetkinlik.extraYetkinAlan}</td>
                                                            <td>{extraYetkinlik.extraYetkinAlanYuzde}</td>
                                                            <button onClick={() => deleteRequestExtraYetkinlik(index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Extra Yetkinlik Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Extra Yetkinlik Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Yabancı Dil Bilgisi Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Yabancı Dil Bilgisi Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Yabancı Dil Bilgisi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Yetkin Olunan Bir Yabancı Dil:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setyabanciDil(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yetkin olunan bir yabancı dil bilgisi giriniz.
                                                    Mesela <strong>Almanca</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Yabancı Dil Seviyesi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setyabanciDilSeviye(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yabancı dil ile alakalı 5 üzerinden bir belirteç giriniz.
                                                Mesela <strong> 3 </strong> gibi...</FormText>
                                            </div>
                                        </div>


                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={yabanciDillerKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Yabancı Dil Bilgisi Formu</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Yabancı Dil</th>
                                                    <th>Seviyesi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {yabanciDilListesi && yabanciDilListesi.length > 0 && yabanciDilListesi.map((yabanciDil, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{yabanciDil.yabanciDil}</td>
                                                            <td>{yabanciDil.yabanciDilSeviye}</td>
                                                            <button onClick={() => deleteRequestYabanciDil(index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Yabancı Dil Bilgisi Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Yabancı Dil Bilgisi Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Ayrıca Yetkin Alan Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Ayrıca Yetkin Alan Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Ayrıca Yetkinlik Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Yetkin Olunan Bir Alan:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setayricaYetkinAlan(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana ayrıca yetkin olunan bir alan bilgisi giriniz.
                                                    Mesela <strong>Özel Web Sitesi Tasarımı</strong> gibi...</FormText>
                                            </div>
                                        </div>


                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={ayricaYetkinAlanKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Ayrıca Yetkinlik Formu</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Eklenen Ayrıca Yetkinlik</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {ayricaYetkinAlanListesi && ayricaYetkinAlanListesi.length > 0 && ayricaYetkinAlanListesi.map((ayricaYetkinlik, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{ayricaYetkinlik.ayricaYetkinAlan}</td>
                                                            <button onClick={() => deleteRequestAyricaYetkinlik(index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Ayrıca Yetkin Alan Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Ayrıca Yetkin Alan Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Hobiler Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Hobiler Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Hobiler Formu</strong>
                                        </div>

                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Hobi Ekle</label>
                                            </div>
                                            <select onChange={e => sethobiler(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                                <option selected>Bir hobi seçiniz.</option>
                                                <option value="fa fa-futbol-o">Futbol</option>
                                                <option value="fa fa-headphones">Müzik</option>
                                                <option value="fa fa-rocket">Seyahat</option>
                                                <option value="fa fa-car">Arabalar</option>
                                                <option value="fa fa-gamepad">Pc Oyunları</option>
                                                <option value="fa fa-paint-brush">Resim Yapmak</option>
                                                <option value="fa fa-book">Kitap Okumak</option>
                                                <option value="fa fa-free-code-camp">Kamp Yapmak</option>
                                            </select>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Eklenen Hobiyle Alakalı Tanım:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => sethobilerAciklama(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana eklenen hobiyle alakalı belirteç giriniz.
                                                Mesela <strong>Futbol Oynamak</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button onClick={hobilerKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Hobiler Formu</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Hobi İconu</th>
                                                    <th>Hobi Tanımı</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {hobilerListesi && hobilerListesi.length > 0 && hobilerListesi.map((hobi, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{hobi.hobiler}</td>
                                                            <td>{hobi.hobilerAciklama}</td>
                                                            <button onClick={() => deleteRequestHobi(index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Hobiler Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Hobiler Formu Bitişi//////////////////////////////////////// */}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={deleteResume} className="btn btn-danger btn-block">Tüm Sayfayı Sil</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

    async function calismaGecmisiKaydet() {
        try {
            var data = {
                calisilanFirma: calisilanFirma,
                calisilanFirmaZamani: calisilanFirmaZamani,
                calisilanFirmaPozisyon: calisilanFirmaPozisyon,
                calisilanFirmaTecrube: calisilanFirmaTecrube,
            }
            await ResumeFire.calismaGecmisiToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function egitimGecmisiKaydet() {
        try {
            var data = {
                okunanOkul: okunanOkul,
                okunanOkulZamani: okunanOkulZamani,
                okunanOkulBolum: okunanOkulBolum,
                okunanOkulTecrube: okunanOkulTecrube,
            }
            await ResumeFire.egitimGecmisiToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function yetkiAlanlarKaydet() {
        try {
            var data = {
                yetkinAlan: yetkinAlan,
                yetkinAlanYuzde: yetkinAlanYuzde,
            }
            await ResumeFire.yetkinAlanlarToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function extrayetkiAlanlarKaydet() {
        try {
            var data = {
                extraYetkinAlan: extraYetkinAlan,
                extraYetkinAlanYuzde: extraYetkinAlanYuzde,
            }
            await ResumeFire.extrayetkinAlanlarToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function yabanciDillerKaydet() {
        try {
            var data = {
                yabanciDil: yabanciDil,
                yabanciDilSeviye: yabanciDilSeviye,
            }
            await ResumeFire.yabanciDillerToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function ayricaYetkinAlanKaydet() {
        try {
            var data = {
                ayricaYetkinAlan: ayricaYetkinAlan,
            }
            await ResumeFire.ayricaYetkinAlanToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function hobilerKaydet() {
        try {
            var data = {
                hobiler: hobiler,
                hobilerAciklama: hobilerAciklama,

            }
            await ResumeFire.hobilerToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }



    async function deleteResume() {
        await ResumeFire.deleteResume()
    }


    
    async function deleteRequestDeneyim(index) {
        await ResumeFire.deleteDeneyim(index)
    }

    async function deleteRequestEgitim(index) {
        await ResumeFire.deleteEgitim(index)
    }

    async function deleteRequestYetkinlik(index) {
        await ResumeFire.deleteYetkinlik(index)
    }

    async function deleteRequestExtraYetkinlik(index) {
        await ResumeFire.deleteExtraYetkinlik(index)
    }

    async function deleteRequestYabanciDil(index) {
        await ResumeFire.deleteYabanciDil(index)
    }

    async function deleteRequestAyricaYetkinlik(index) {
        await ResumeFire.deleteAyricaYetkinlik(index)
    }

    async function deleteRequestHobi(index) {
        await ResumeFire.deleteHobi(index)
    }
}

export default Resume