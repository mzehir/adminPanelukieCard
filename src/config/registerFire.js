import Fire from './config'

class RegisterFire {

    async registerSendFirebase(email, password, userName) {
        try {
            let user = await Fire.auth.createUserWithEmailAndPassword(email, password)
            alert(user.user.email + " " + "adresi ile kaydınız alınmıştır.")
            document.getElementById('registerFatherDiv').className = "row justify-content-center mt-5 animated flip"
            window.location.href = '/'
        } catch (error) {
            alert(error.message)
        }
    }

}


export default new RegisterFire()