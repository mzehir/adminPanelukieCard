import React, { useState, useEffect } from 'react';
import LoginFire from '../../config/loginFire';


const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    return (
        <div id="loginFatherDiv" className="row justify-content-center mt-5  animated flip">
            <div className="card border-primary col-sm-12 col-md-4  shadow-lg p-3 mb-5 bg-white rounded">
                <h3 className="card-header  bg-transparent border-primary text-center">
                    <strong className="badge ">Giriş Ekranı</strong>
                </h3>
                <div className="card-body text-primary">
                    <form className="">
                        <div className="form-group animated backInLeft">
                            <label htmlFor="nowUserName">Kullanıcı Adı:</label>
                            <input type="email" className="form-control" id="nowUserName" placeholder="Kullanıcı adınızı girin." onChange={e => setemail(e.target.value)} />
                        </div>

                        <div className="form-group animated fadeInRightBig">
                            <label htmlFor="nowUserPassword">Parola:</label>
                            <input type="password" className="form-control" id="nowUserPassword" placeholder="Parolanızı girin." onChange={e => setpassword(e.target.value)} />
                        </div>
                    </form>

                    <div className="text-center">
                        <button className="btn btn-outline-success btn-sm animated backInLeft" onClick={login}>Giriş Yap</button>
                    </div>
                </div>

                <div className="text-center bg-transparent border-primary card-footer animated fadeInRightBig">
                    <button onClick={navigationTopasswordResetPage} className="btn btn-danger mb-2">Parolamı Unuttum</button>
                    <button onClick={navigationToRegisterPage} className="btn btn-primary btn-block">Kayıt Ol</button>
                </div>
            </div>

        </div>
    )

    async function login() {
        try {
            await LoginFire.loginBringToFirebase(email, password).then(((user) => {
                if (user) {
                    document.getElementById('loginFatherDiv').className = "row justify-content-center mt-5  animated rotateOut"
                    window.location.href = '/adminPaneli/homePage'
                }
            }))
        }
        catch (error) {
            alert(error.message)
        }
    }

    function navigationToRegisterPage() {
        document.getElementById('loginFatherDiv').className = "row justify-content-center mt-5  animated hinge"
        window.location.href = '/registerPage'
    }

    function navigationTopasswordResetPage() {
        document.getElementById('loginFatherDiv').className = "row justify-content-center mt-5  animated hinge"
        window.location.href = '/passwordReset'
    }

}
export default Login
