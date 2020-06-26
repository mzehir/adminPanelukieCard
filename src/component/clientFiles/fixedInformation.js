import React, { useState, useEffect } from 'react';
import LoginFire from '../../config/loginFire';


const FixedInformation = () => {

    useEffect(() => {
        LoginFire.loginingControl().then(((data) => {
            if (data) {
                alert(data)
            }
        }))
    }, [])

    return (
        <div className="col-md-12 text-center bg-warning">
            {/* <h5 className="">
                <strong className="badge badge-danger">
                    Kullanıcı: zehir.m.54@gmail.com
                        </strong>
            </h5> */}
            <button id="logOutButtonId" onClick={logoutBringToFirebase} className="btn btn-outline-danger btn-sm mt-2 mb-2">Oturumu Kapat</button>
        </div>
    )

    async function logoutBringToFirebase() {
        await LoginFire.logOut()
    }
}
export default FixedInformation
