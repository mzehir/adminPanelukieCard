import Fire from './config';

class PasswordResetFire {

    async passwordToResetFirebase(email) {
        try {
            await Fire.auth.sendPasswordResetEmail(email)
            alert("E-posta adresinize gönderilen bağlantıdan şifrenizi sıfırlayınız.")
            window.location.href = '/'
        } catch (error) {
            alert(error.message)
        }
    }

}

export default new PasswordResetFire()