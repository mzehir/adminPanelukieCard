import React, { useState } from 'react';
import PasswordResetFire from '../../config/passwordResetFire'

const PasswordReset = () => {
    const [email, setemail] = useState('')

    return (
        <div id="passswordResetFatherDiv" className="row justify-content-center mt-5 animated backInDown">

            <div className="card border-danger col-sm-12 col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                <h3 className="card-header bg-transparent border-danger text-center ">
                    <strong className="badge">Şifre Yenileme</strong>
                </h3>
                <div className="card-body text-danger animated fadeInUpBig">
                    <form className="">
                        <div className="form-group ">
                            <label htmlFor="nowUserName">Email Adresi:</label>
                            <input type="email" className="form-control" id="nowUserName" placeholder="Email adresinizi giriniz." onChange={e => setemail(e.target.value)} />
                        </div>
                    </form>

                    <div className="text-center">
                        <button className="btn btn-outline-danger btn-sm" onClick={resetToPassword}>Parolayı Sıfırla</button>
                    </div>
                </div>

                <div className="text-center  bg-transparent border-danger card-footer animated fadeInUpBig">
                    <button className="btn btn-success btn-sm" onClick={navigationToLoginPage}>Oturum Aç Sayfasına Git</button>
                </div>

            </div>
        </div>
    )

    async function resetToPassword() {
        try {
            await PasswordResetFire.passwordToResetFirebase(email)
        } catch (error) {
            alert(error.message)
        }
    }

    function navigationToLoginPage() {
        document.getElementById('passswordResetFatherDiv').className = "row justify-content-center mt-5 animated flash"
        window.location.href = '/'
    }

}
export default PasswordReset
