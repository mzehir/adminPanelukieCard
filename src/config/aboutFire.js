import Fire from './config';

class AboutFire {

    // ########################################Tümsel Hakkımda(About) / Firebase İşlemleri#########################################################################
    async getProfil() {
        let profilDto = await Fire.db.collection('Admin').doc('Profil');
        return await profilDto.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    var data = doc.data();
                    return data
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    deleteProfile() {
        if (window.confirm('Tüm prfil bilgilerini silmek üzeresiniz emin misiniz?') === true) {
            return Fire.db.collection(`Admin`).doc("Profil").delete()
        } else {
            console.log("...")
        }
    }
    // ########################################Tümsel Hakkımda(About) / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Ön Yazı  Formu / Firebase İşlemleri#########################################################################
    async getOnYaziForm() {
        let onYaziDto = await Fire.db.collection('Admin').doc('Profil').get()
        return onYaziDto.get('OnYaziBilgileri')
    }

    async onYaziFormToFire(data, dataCV) {
        let profilDto = await this.getProfil()
        if (dataCV.CV) {
            alert("CV ve ön yazı formunuz başarılı bir şekilde kayıt altına alınmıştır.")
            // firebase.storage.ref(`CV/${cv.cvBenim.name}`).put(cv.cvBenim);
            debugger
            Fire.storage.ref(`CV/${dataCV.CV.name}`).put(dataCV.CV);
        }
        if (profilDto) {
            return await Fire.db.collection('Admin').doc('Profil').update({
                'OnYaziBilgileri': data
            })
        } else {
            return await Fire.db.collection(`Admin`).doc('Profil').set({
                'OnYaziBilgileri': data
            })
        }


    }
    // ########################################Ön Yazı  Formu / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Hizmet Formu / Firebase İşlemleri#########################################################################
    async getHizmet() {
        let hizmetDto = await Fire.db.collection('Admin').doc('Profil').get()
        return hizmetDto.get('HizmetBilgileri')
    }

    async hizmetFormToFire(data) {
        let profilDto = await this.getProfil()
        let hizmetDto = await this.getHizmet()
        let hizmetListesi = []

        if (!profilDto) {
            hizmetListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hizmet bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Profil').set({
                'HizmetBilgileri': hizmetListesi
            })
        } else if (profilDto && !hizmetDto) {
            hizmetListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hizmet bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Profil').update({
                'HizmetBilgileri': hizmetListesi
            })
        } else {
            hizmetDto.push(data);
            for (let i = 0; i < hizmetDto.length; i++) {
                hizmetListesi.push(hizmetDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hizmet bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Profil').update({
                'HizmetBilgileri': hizmetListesi
            })
        }
    }

    async deleteHizmet(index) {
        try {
            let hizmetDto = await this.getHizmet()
            hizmetDto.splice(index, 1)
            await Fire.db.collection('Admin').doc('Profil').update({
                'HizmetBilgileri': hizmetDto
            })
            alert('Hizmet bilgisi silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
            window.location.reload()
        } catch (error) {
            alert(error.message + " " + "Lütfen sayfayı yenileyiniz.")
        }
    }
    // ########################################Hizmet Formu Bilgiler / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Güzel Bir Söz Formu / Firebase İşlemleri#############################################################
    async getGuzelSozForm() {
        let guzelSozDto = await Fire.db.collection('Admin').doc('Profil').get()
        return guzelSozDto.get('GuzelSozBilgileri')
    }

    async guzelSozFormToFire(data) {
        let profilDto = await this.getProfil()
        if (profilDto) {
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen söz bilgisini görmek için sayfayı yenileyiniz.")
            return await Fire.db.collection('Admin').doc('Profil').update({
                'GuzelSozBilgileri': data
            })
        } else {
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen söz bilgisini görmek için sayfayı yenileyiniz.")
            return await Fire.db.collection(`Admin`).doc('Profil').set({
                'GuzelSozBilgileri': data
            })
        }


    }

    // ########################################Güzel Bir Söz Formu / Firebase İşlemleri#############################################################

}

export default new AboutFire();