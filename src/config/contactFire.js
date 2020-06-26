import Fire from './config';

class ContactFire {

    // ########################################Tümsel İletişim Sayfası / Firebase İşlemleri##################################################################
    async getIletisim() {
        let iletisimDto = await Fire.db.collection('Admin').doc('Iletisim');
        return await iletisimDto.get()
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

    deleteIletisim() {
        if (window.confirm('Tüm iletişim sayfası bilgilerini silmek üzeresiniz emin misiniz?') === true) {
            return Fire.db.collection(`Admin`).doc("Iletisim").delete()
        } else {
            console.log("...")
        }
    }
    // ########################################Tümsel İletişim Sayfası / Firebase İşlemleri###################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Kişisel Bilgiler / Firebase İşlemleri########################################################################
    async getIletisimBilgileri() {
        let iletisimDto = await Fire.db.collection('Admin').doc('Iletisim').get()
        return iletisimDto.get('IletisimBilgisi')
    }

    async iletisimBilgileriToFire(data) {
        let iletisimDto = await this.getIletisim()
        if (iletisimDto) {
            debugger
            alert("Form bilgileriniz kaydedilmiştir.")
            return await Fire.db.collection('Admin').doc('Iletisim').update({
                'IletisimBilgisi': data
            })
        } else {
            debugger
            alert("Form bilgileriniz kaydedilmiştir.")
            return await Fire.db.collection(`Admin`).doc('Iletisim').set({
                'IletisimBilgisi': data
            })
        }


    }
    // ########################################Kişisel Bilgiler / Firebase İşlemleri########################################################################
}

export default new ContactFire();