import Fire from './config';

class HomeFire {

    // ########################################Tümsel Anasayfa / Firebase İşlemleri#########################################################################
    async getAnasayfa() {
        let anasayfaDto = await Fire.db.collection('Admin').doc('Anasayfa');
        return await anasayfaDto.get()
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

    deleteAnasayfa() {
        if (window.confirm('Tüm anasayfa bilgilerini silmek üzeresiniz emin misiniz?') === true) {
            return Fire.db.collection(`Admin`).doc("Anasayfa").delete()
        } else {
            console.log("...")
        }
    }
    // ########################################Tümsel Anasayfa / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Kişisel Bilgiler / Firebase İşlemleri#########################################################################
    async getPersoneData() {
        let personelDto = await Fire.db.collection('Admin').doc('Anasayfa').get()
        return personelDto.get('PersonelBilgisi')
    }


    async personelDataToFire(data) {
        let anasayfaDto = await this.getAnasayfa()
        if (anasayfaDto) {
            alert('Kişisel bilgileriniz kaydedilmiştir.')
            return await Fire.db.collection('Admin').doc('Anasayfa').update({
                'PersonelBilgisi': data
            })
        } else {
            alert('Kişisel bilgileriniz kaydedilmiştir.')
            return await Fire.db.collection(`Admin`).doc('Anasayfa').set({
                'PersonelBilgisi': data
            })
        }


    }
    // ########################################Kişisel Bilgiler / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Sosyal Medya Hesap Bilgileri / Firebase İşlemleri############################################################
    async getMediaHesap() {
        let mediaHesapDto = await Fire.db.collection('Admin').doc('Anasayfa').get()
        return mediaHesapDto.get('SosyalMedyaHesap')
    }

    async socialMediaDataToFire(data) {
        let anasayfaDto = await this.getAnasayfa()
        let socialMediaDto = await this.getMediaHesap()
        let SosyalMedyaListesi = []

        if (!anasayfaDto) {
            SosyalMedyaListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Anasayfa').set({
                'SosyalMedyaHesap': SosyalMedyaListesi
            })
        } else if (anasayfaDto && !socialMediaDto) {
            SosyalMedyaListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Anasayfa').update({
                'SosyalMedyaHesap': SosyalMedyaListesi
            })
        } else {
            socialMediaDto.push(data);
            for (let i = 0; i < socialMediaDto.length; i++) {
                SosyalMedyaListesi.push(socialMediaDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Anasayfa').update({
                'SosyalMedyaHesap': SosyalMedyaListesi
            })
        }
    }

    async deleteSocialMediaAccount(index) {
        let socialMediaDto = await this.getMediaHesap()
        socialMediaDto.splice(index, 1)
        await Fire.db.collection('Admin').doc('Anasayfa').update({
            'SosyalMedyaHesap': socialMediaDto
        })
        alert('Sosyal medya hesabı silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
        window.location.reload()
    }
    // ########################################Sosyal Medya Hesap Bilgileri / Firebase İşlemleri############################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################İletişim Bilgileri / Firebase İşlemleri############################################################
    async getContactData() {
        let contactDto = await Fire.db.collection('Admin').doc('Anasayfa').get()
        return contactDto.get('IletisimBilgisi')
    }

    async contactDataToFire(data) {
        let anasayfaDto = await this.getAnasayfa()
        if (anasayfaDto) {
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen iletişim bilgilerini görmek için sayfayı yenileyiniz.")
            return await Fire.db.collection('Admin').doc('Anasayfa').update({
                'IletisimBilgisi': data
            })
        } else {
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen iletişim bilgilerini görmek için sayfayı yenileyiniz.")
            return await Fire.db.collection(`Admin`).doc('Anasayfa').set({
                'IletisimBilgisi': data
            })
        }


    }
    // ########################################İletişim Bilgileri / Firebase İşlemleri############################################################

}

export default new HomeFire();