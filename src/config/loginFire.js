import Fire from './config'

class LoginFire {

    async loginBringToFirebase(email, password) {
        try {
            let user = await Fire.auth.signInWithEmailAndPassword(email, password)
            if (user) {
                let userEmail = user.user.email
                return userEmail
            }
        } catch (error) {
            alert(error.message)
        }
    }

    async logOut() {
        await Fire.auth.signOut().then(function () {
            window.location.href = '/'
        }).catch(function (error) {
            alert(error.message)
        })
    }

    async loginingControl() {
        let observer = await Fire.auth.onAuthStateChanged(function (userInformation) {
            if (userInformation) {
                var email = userInformation.email;
                return email
            } else {
                window.location.href = '/'
            }
        });
    }

    async automaticLogOut() {
        let deneme = await Fire.auth.setPersistence(Fire.authh.Auth.Persistence.SESSION)
        // .then(function () {
        //     return window.location.href = '/'
        // })
        // .catch(function (error) {
        //     alert(error.message + " " + error.code)
        // })
    }

}

export default new LoginFire()