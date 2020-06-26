// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import HomeFire from '../../config/homeFire';
import LoginFire from '../../config/loginFire';
import {
    FormText,
    Table
} from 'reactstrap';

const Home = () => {

    const [nameAndSurname, setnameAndSurname] = useState('')
    const [birthDate, setbirthDate] = useState('')
    const [business1, setbusiness1] = useState('')
    const [business2, setbusiness2] = useState('')

    const [socialMediaAccount, setsocialMediaAccount] = useState('')
    const [socialMediaAccountIcon, setsocialMediaAccountIcon] = useState('')

    const [gsm, setgsm] = useState('')
    const [emailadress, setemailadress] = useState('')
    const [website, setwebsite] = useState('')
    const [homeadress, sethomeadress] = useState('')

    const [personelDataList, setpersonelDataList] = useState([])
    const [sosyalMedyaList, setsosyalMedyaList] = useState([])
    const [contactDataList, setcontactDataList] = useState([])

    useEffect(() => {
        HomeFire.getAnasayfa().then(((data) => {
            if (data) {
                setpersonelDataList(data.PersonelBilgisi)
                setsosyalMedyaList(data.SosyalMedyaHesap)
                setcontactDataList(data.IletisimBilgisi)
            }
        }))
        LoginFire.loginingControl().then((() => {
        }))

        LoginFire.automaticLogOut().then((() => {
        }))
    }, [])


    return (
        <div className="col-md-10 mt-5">
            <div id="homePageId" className="row">
                <div className="col-md-12">

                    <div className="text-center card">
                        <div className="card-header">
                            <strong>Anasayfa Ayarları</strong>
                        </div>

                        <div>
                            <div className="card-body">
                                <div className="row">
                                    {/* /////////////////////////////////////Kişisel Bilgiler Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Kişisel Bilgiler Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Kişisel Bilgiler Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Ad ve Soyad :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={personelDataList ? personelDataList.nameAndSurname : ""} onChange={e => setnameAndSurname(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana adınızı ve soyadınızı giriniz. Mesela <strong>Ahmet Aslan</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Doğum Tarihi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={personelDataList ? personelDataList.birthDate : ""} onChange={e => setbirthDate(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana doğum tarihinizi giriniz. Mesela <strong>Subat 14, 1990</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Meslek Bilgisi :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={personelDataList ? personelDataList.business1 : ""} onChange={e => setbusiness1(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana meslek bilginizi giriniz. Mesela <strong>Yazılım Mühendisi</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Meslek Bilgisi 2 :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={personelDataList ? personelDataList.business2 : ""} onChange={e => setbusiness2(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana 2.meslek bilginizi giriniz. Mesela <strong>Web Developer</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={personelDataSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////Kişisel Bilgiler Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Kişisel Bilgiler Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Sosyal Medya Hesapları Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Sosyal Medya Hesapları Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Sosyal Medya Hesapları Formu</strong>
                                        </div>

                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Hesap Ekle</label>
                                            </div>
                                            <select onChange={e => setsocialMediaAccountIcon(e.target.value)} class="custom-select" id="inputGroupSelect01">
                                                <option selected>Bir hesap seçiniz.</option>
                                                <option value="fa fa-facebook">Facebook</option>
                                                <option value="fa fa-twitter">Twitter</option>
                                                <option value="fa fa-linkedin">Linkedin</option>
                                                <option value="fa fa-youtube">Youtube</option>
                                                <option value="fa fa-instagram">İnstagram</option>
                                                <option value="fa-github-alt">Github</option>
                                                <option value="fa fa-pinterest">Pinterest</option>
                                                <option value="fa fa-skype">Skype</option>
                                            </select>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Profil Adresi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={socialMediaAccount} onChange={e => setsocialMediaAccount(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana sosyal medya hesabı profil linkinizi giriniz. Mesela <strong>https://github.com/mzehir</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button onClick={socialMediaSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Sosyal Medya Hesapları</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Hesap</th>
                                                    <th>İcon Kodu</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {sosyalMedyaList && sosyalMedyaList.length > 0 && sosyalMedyaList.map((sosyalMedya, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{sosyalMedya.socialMediaAccount}</td>
                                                            <td>{sosyalMedya.socialMediaAccountIcon}</td>
                                                            <button onClick={() => deleteSocialMedia({ index })} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Sosyal Medya Hesapları Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Sosyal Medya Hesapları Formu Bitişi//////////////////////////////////////// */}

                                    {/* /////////////////////////////////////İletişim Bilgileri Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////İletişim Bilgileri Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>İletişim Bilgileri Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Telefon Numarası :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={contactDataList ? contactDataList.gsm : ""} onChange={e => setgsm(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana telefon numaranızı giriniz. Mesela <strong>0 545 555 55 55</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Mail Adresi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={contactDataList ? contactDataList.emailadress : ""} onChange={e => setemailadress(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana mail bilginizi giriniz. Mesela <strong>deneme@gmail.com</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Website Adresi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={contactDataList ? contactDataList.website : ""} onChange={e => setwebsite(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana ikinci website adres bilginizi giriniz. Mesela <strong>https://www.limiyum.com/</strong> gibi... Şayet yok ise mevcut website adres bilginizi giriniz.</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>İkametgah Adresi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={contactDataList ? contactDataList.homeadress : ""} onChange={e => sethomeadress(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana adres bilginizi giriniz. Mesela <strong>Atatürk Mah. Cumhuriyet Cad. No:70 Beşiktaş / İSTANBUL</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={contactDataSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////İletişim Bilgileri Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////İletişim Bilgileri Formu Bitişi//////////////////////////////////////// */}

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={deleteAnasayfa} className="btn btn-danger btn-block">Tüm Sayfayı Sil</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

    async function personelDataSave() {
        try {
            var data = {
                nameAndSurname: nameAndSurname,
                birthDate: birthDate,
                business1: business1,
                business2: business2,
            }
            await HomeFire.personelDataToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function socialMediaSave() {
        try {
            if (!socialMediaAccount || !socialMediaAccountIcon) {
                alert('Lütfen bilgileri eksiksiz giriniz.')
            } else {
                var data = {
                    socialMediaAccount: socialMediaAccount,
                    socialMediaAccountIcon: socialMediaAccountIcon,
                }
                await HomeFire.socialMediaDataToFire(data)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    async function contactDataSave() {
        try {
            var data = {
                gsm: gsm,
                emailadress: emailadress,
                website: website,
                homeadress: homeadress,
            }
            await HomeFire.contactDataToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function deleteAnasayfa() {
        await HomeFire.deleteAnasayfa()
    }

    async function deleteSocialMedia(index) {
        await HomeFire.deleteSocialMediaAccount(index.index)
    }

}

export default Home 
