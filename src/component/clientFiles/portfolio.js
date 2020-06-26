// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import PortfolioFire from '../../config/portfolioFire';
import LoginFire from '../../config/loginFire';
import {
    FormText
} from 'reactstrap';

const Portfolio = () => {

    const [projectImage, setprojectImage] = useState(null)

    const [projectTitle, setprojectTitle] = useState('')
    const [shortProjectDescription, setshortProjectDescription] = useState('')
    const [projectMoreDescription, setprojectMoreDescription] = useState('')
    const [finishDate, setfinishDate] = useState('')
    const [customerInformation, setcustomerInformation] = useState('')

    const [projectDataFilter, setprojectDataFilter] = useState('')

    const [projectDataList, setprojectDataList] = useState([])



    useEffect(() => {
        PortfolioFire.getAllProjectData().then(((data) => {
            if (data) {
                setprojectDataList(data)
            }
        }))
        LoginFire.loginingControl().then((() => {
            
        }))
    }, [projectDataFilter])



    return (
        <div className="col-md-10 mt-5">
            <div className="row">
                <div className="col-md-12">

                    <div className="text-center card">
                        <div className="card-header">
                            <strong>Portföy Sayfa Ayarları</strong>
                        </div>

                        <div>
                            <div className="card-body">
                                <div className="row">

                                    {/* /////////////////////////////////////Proje Ekleme Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Proje Ekleme Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Proje Ekleme Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Proje Başlığı:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setprojectTitle(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana prjeniz ile ilgili bir başlık yazınız.
                                                Mesela <strong> React Admin Panel </strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Özet Bilgi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setshortProjectDescription(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana prjeniz ile ilgili özet bilgi / başlık yazınız.
                                                Mesela <strong> Firebase bağlantılı </strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Detaylı Bilgi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => setprojectMoreDescription(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana prjeniz ile ilgili detaylı bilgi yazınız.
                                                Bu bilgi kişi fotoğrafı görüntülediği takdirde fotoğraf altında yer alacaktır.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Tamamlanma Tarihi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setfinishDate(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana projenizin tamalanma tarihini yazınız.
                                                Mesela <strong> 14 Ocak, 2020 </strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Müşteri Bilgisi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setcustomerInformation(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana müşterinizin bir bilgisini yazınız.
                                                Mesela <strong> deneme@gmail.com </strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>


                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Proje Fotoğrafı :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input className="form-control-file" type="file" onChange={e => setprojectImage(e.target.files[0])}></input>
                                                <FormText color="muted">Lütfen buradan projeniz ile alakalı  yükleme işlemini yapınız.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={projectSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////Proje Ekleme Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Proje Ekleme Formu Bitişi//////////////////////////////////////// */}

                                    {/* /////////////////////////////////////Eklenen Projeler Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Eklenen Projeler Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Projeler</strong>
                                        </div>

                                        <table className="table table-hover">
                                            <thead>
                                                <tr className="table-success">
                                                    <th>Proje Fotoğrafı</th>
                                                    <th>Proje Başlığı</th>
                                                    <th>Özet Açıklama</th>
                                                    <th>Müşteri Bilgisi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {projectDataList && projectDataList.length > 0 && projectDataList.map((data, index) => {
                                                    return (
                                                        <tr>
                                                            <img className="p-3" src={data.fotoUrl} height="100" width="100"></img>
                                                            <td>{data.projectTitle}</td>
                                                            <td>{data.shortProjectDescription}</td>
                                                            <td>{data.customerInformation}</td>
                                                            <button onClick={() => projectDeleted(data.projectImageName, index)} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /////////////////////////////////////Eklenen Projeler Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Eklenen Projeler Formu Bitişi//////////////////////////////////////// */}

                                </div>
                            </div>
                        </div>
                        {/* <div className="card-footer">
                            <button onClick={deleteProfil} className="btn btn-danger btn-block">Tüm Sayfayı Sil</button>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )

    async function projectSave(data, dataImage) {
        try {
            var data = {
                projectImageName: projectImage.name,
                projectTitle: projectTitle,
                shortProjectDescription: shortProjectDescription,
                projectMoreDescription: projectMoreDescription,
                customerInformation: customerInformation,
                finishDate: finishDate,

                // projectDataFilter:projectDataFilter,
            }
            var dataImage = {
                projectImage: projectImage
            }
            await PortfolioFire.projectToFire(data, dataImage)
        } catch (error) {
            alert(error.message)
        }
    }

    async function projectDeleted(data, index) {
        await PortfolioFire.deletedProjectToFire(data, index)
    }

    // async function deleteProfil() {
    //     await AboutFire.deleteProfile()
    // }

}

export default Portfolio