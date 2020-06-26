import React, { useState } from 'react';
import RegisterFire from '../../config/registerFire';

const Register = () => {
    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    return (
        <div id="registerFatherDiv" className="row mt-5 justify-content-center mt-5 animated zoomInDown">

            <div className="card border-success col-sm-12 col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                <h3 className=" card-header  bg-transparent border-success text-center">
                    <strong className="badge">Kayıt Ekranı</strong>
                </h3>

                <div className="card-body text-success">
                    <form>
                        <div className="form-group animated fadeInLeftBig">
                            <label htmlFor="newUserName">Kullanıcı Adı:</label>
                            <input type="text" className="form-control" id="newUserName" placeholder="Bir kullanıcı adı oluşturunuz." onChange={e => setuserName(e.target.value)} />
                        </div>

                        <div className="form-group animated fadeInRightBig">
                            <label htmlFor="newEmailName">Email Adresi:</label>
                            <input type="email" className="form-control" id="newEmailName" placeholder="Email adresinizi giriniz." onChange={e => setemail(e.target.value)} />
                        </div>


                        <div className="form-group animated fadeInLeftBig">
                            <label htmlFor="newUserPassword">Parola:</label>
                            <input type="password" className="form-control" id="newUserPassword" placeholder="Bir parola oluşturunuz." onChange={e => setpassword(e.target.value)} />
                        </div>
                    </form>

                    <div className="text-center animated fadeInRightBig">
                        <button className="btn btn-outline-primary btn-sm" onClick={newRegister}>Kayıt Ol</button>
                    </div>
                </div>

                <div className="text-center bg-transparent border-success card-footer animated fadeInLeftBig">
                    <button className="btn btn-success btn-block" onClick={navigationTologinPage}>Oturum Aç</button>
                </div>
            </div>

        </div>
    )

    async function newRegister() {
        try {
            await RegisterFire.registerSendFirebase(email, password, userName)
        } catch (error) {
            alert(error.message)
        }
    }

    function navigationTologinPage() {
        document.getElementById('registerFatherDiv').className = "row justify-content-center mt-5 animated flip"
        window.location.href = '/'
    }

}
export default Register
