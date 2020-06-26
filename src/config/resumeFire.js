import Fire from './config';

class ResumeFire {

    // ########################################Tümsel CV(Resume) / Firebase İşlemleri#########################################################################
    async getResume() {
        let resumeDto = await Fire.db.collection('Admin').doc('CV');
        return await resumeDto.get()
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

    deleteResume() {
        if (window.confirm('Tüm CV sayfası bilgilerini silmek üzeresiniz emin misiniz?') === true) {
            return Fire.db.collection(`Admin`).doc("CV").delete()
        } else {
            console.log("...")
        }
    }
    // ########################################Tümsel CV(Resume) / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Mesleki Çalışma Geçmişi / Firebase İşlemleri#########################################################################
    async getCalismaGecmisi() {
        let calismaGecmisiDto = await Fire.db.collection('Admin').doc('CV').get()
        return calismaGecmisiDto.get('CalismaGecmisi')
    }

    async calismaGecmisiToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let calismaGecmisiDto = await this.getCalismaGecmisi()
        let calismaGecmisiListesi = []

        if (!resumeDto) {
            calismaGecmisiListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'CalismaGecmisi': calismaGecmisiListesi
            })
        } else if (resumeDto && !calismaGecmisiDto) {
            calismaGecmisiListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'CalismaGecmisi': calismaGecmisiListesi
            })
        } else {
            calismaGecmisiDto.push(data);
            for (let i = 0; i < calismaGecmisiDto.length; i++) {
                calismaGecmisiListesi.push(calismaGecmisiDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'CalismaGecmisi': calismaGecmisiListesi
            })
        }
    }

    async deleteDeneyim(index) {
        let calismaGecmisiDto = await this.getCalismaGecmisi()
        calismaGecmisiDto.splice(index, 1)
        await Fire.db.collection('Admin').doc('CV').update({
            'CalismaGecmisi': calismaGecmisiDto
        })
        alert('Deneyim geçmişi silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
        window.location.reload()
    }
    // ########################################Mesleki Çalışma Geçmişi / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Eğitim Geçmişi / Firebase İşlemleri#########################################################################
    async getEgitimGecmisi() {
        let egitimGecmisiDto = await Fire.db.collection('Admin').doc('CV').get()
        return egitimGecmisiDto.get('EgitimGecmisi')
    }

    async egitimGecmisiToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let egitimGecmisiDto = await this.getEgitimGecmisi()
        let egitimGecmisiListesi = []

        if (!resumeDto) {
            egitimGecmisiListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'EgitimGecmisi': egitimGecmisiListesi
            })
        } else if (resumeDto && !egitimGecmisiDto) {
            egitimGecmisiListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'EgitimGecmisi': egitimGecmisiListesi
            })
        } else {
            egitimGecmisiDto.push(data);
            for (let i = 0; i < egitimGecmisiDto.length; i++) {
                egitimGecmisiListesi.push(egitimGecmisiDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'EgitimGecmisi': egitimGecmisiListesi
            })
        }
    }

    async deleteEgitim(index) {
        let egitimGecmisiDto = await this.getEgitimGecmisi()
        egitimGecmisiDto.splice(index, 1)
        await Fire.db.collection('Admin').doc('CV').update({
            'EgitimGecmisi': egitimGecmisiDto
        })
        alert('Eğitim geçmişi silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
        window.location.reload()
    }
    // ########################################Eğitim Geçmişi / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Yetkin Alanlar Bilgi Formu / Firebase İşlemleri#############################################################
    async getYetkinAlanlar() {
        let yetkinAlanlarDto = await Fire.db.collection('Admin').doc('CV').get()
        return yetkinAlanlarDto.get('YetkinAlanlar')
    }

    async yetkinAlanlarToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let yetkinAlanlarDto = await this.getYetkinAlanlar()
        let yetkinAlanlarListesi = []

        if (!resumeDto) {
            yetkinAlanlarListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'YetkinAlanlar': yetkinAlanlarListesi
            })
        } else if (resumeDto && !yetkinAlanlarDto) {
            yetkinAlanlarListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'YetkinAlanlar': yetkinAlanlarListesi
            })
        } else {
            yetkinAlanlarDto.push(data);
            for (let i = 0; i < yetkinAlanlarDto.length; i++) {
                yetkinAlanlarListesi.push(yetkinAlanlarDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'YetkinAlanlar': yetkinAlanlarListesi
            })
        }
    }

    async deleteYetkinlik(index) {
        let yetkinAlanlarDto = await this.getYetkinAlanlar()
        yetkinAlanlarDto.splice(index, 1)
        await Fire.db.collection('Admin').doc('CV').update({
            'YetkinAlanlar': yetkinAlanlarDto
        })
        alert('Yetkin alan silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
        window.location.reload()

    }
    // ########################################Yetkin Alanlar Bilgi Formu / Firebase İşlemleri#############################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Extra Yetkin Alanlar Bilgi Formu / Firebase İşlemleri#############################################################
    async getExtraYetkinAlanlar() {
        let extraYetkinAlanlarDto = await Fire.db.collection('Admin').doc('CV').get()
        return extraYetkinAlanlarDto.get('ExtraYetkinAlanlar')
    }

    async extrayetkinAlanlarToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let extraYetkinAlanlarDto = await this.getExtraYetkinAlanlar()
        let extraYetkinAlanlarListesi = []

        if (!resumeDto) {
            extraYetkinAlanlarListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen extra yetkin alan bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'ExtraYetkinAlanlar': extraYetkinAlanlarListesi
            })
        } else if (resumeDto && !extraYetkinAlanlarDto) {
            extraYetkinAlanlarListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen extra yetkin alan bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'ExtraYetkinAlanlar': extraYetkinAlanlarListesi
            })
        } else {
            extraYetkinAlanlarDto.push(data);
            for (let i = 0; i < extraYetkinAlanlarDto.length; i++) {
                extraYetkinAlanlarListesi.push(extraYetkinAlanlarDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen extra yetkin alan bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'ExtraYetkinAlanlar': extraYetkinAlanlarListesi
            })
        }
    }

    async deleteExtraYetkinlik(index) {
        let extraYetkinAlanlarDto = await this.getExtraYetkinAlanlar()
        extraYetkinAlanlarDto.splice(index, 1)
        await Fire.db.collection('Admin').doc('CV').update({
            'ExtraYetkinAlanlar': extraYetkinAlanlarDto
        })
        alert('Extra yetkinlik silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
        window.location.reload()
    }
    // ########################################Extra Yetkin Alanlar Bilgi Formu / Firebase İşlemleri#############################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Yabancı Diller Bilgi Formu / Firebase İşlemleri#############################################################
    async getYabanciDiller() {
        let yabanciDillerDto = await Fire.db.collection('Admin').doc('CV').get()
        return yabanciDillerDto.get('YabanciDiller')
    }

    async yabanciDillerToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let yabanciDillerDto = await this.getYabanciDiller()
        let yabanciDillerListesi = []

        if (!resumeDto) {
            yabanciDillerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen yabancı dil bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'YabanciDiller': yabanciDillerListesi
            })
        } else if (resumeDto && !yabanciDillerDto) {
            yabanciDillerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen yabancı dil bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'YabanciDiller': yabanciDillerListesi
            })
        } else {
            yabanciDillerDto.push(data);
            for (let i = 0; i < yabanciDillerDto.length; i++) {
                yabanciDillerListesi.push(yabanciDillerDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen yabancı dil bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'YabanciDiller': yabanciDillerListesi
            })
        }
    }

    async deleteYabanciDil(index) {
        let yabanciDillerDto = await this.getYabanciDiller()
        yabanciDillerDto.splice(index, 1)
        await Fire.db.collection('Admin').doc('CV').update({
            'YabanciDiller': yabanciDillerDto
        })
        alert('Yabancı dil bilgisi silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
        window.location.reload()
    }
    // ########################################Yabancı Diller Bilgi Formu / Firebase İşlemleri#############################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Ayrıca Yetkin Alan Bilgi Formu / Firebase İşlemleri#############################################################
    async getAyricaYetkinAlanlar() {
        let ayricaYetkinAlanlarDto = await Fire.db.collection('Admin').doc('CV').get()
        return ayricaYetkinAlanlarDto.get('AyricaYetkinAlanlar')
    }

    async ayricaYetkinAlanToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let ayricaYetkinAlanlarDto = await this.getAyricaYetkinAlanlar()
        let ayricaYetkinAlanlarListesi = []

        if (!resumeDto) {
            ayricaYetkinAlanlarListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen ayrıca yetkin alanlar bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'AyricaYetkinAlanlar': ayricaYetkinAlanlarListesi
            })
        } else if (resumeDto && !ayricaYetkinAlanlarDto) {
            ayricaYetkinAlanlarListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen ayrıca yetkin alanlar bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'AyricaYetkinAlanlar': ayricaYetkinAlanlarListesi
            })
        } else {
            ayricaYetkinAlanlarDto.push(data);
            for (let i = 0; i < ayricaYetkinAlanlarDto.length; i++) {
                ayricaYetkinAlanlarListesi.push(ayricaYetkinAlanlarDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen ayrıca yetkin alanlar bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'AyricaYetkinAlanlar': ayricaYetkinAlanlarListesi
            })
        }
    }

    async deleteAyricaYetkinlik(index) {
        let ayricaYetkinAlanlarDto = await this.getAyricaYetkinAlanlar()
        ayricaYetkinAlanlarDto.splice(index, 1)
        await Fire.db.collection('Admin').doc('CV').update({
            'AyricaYetkinAlanlar': ayricaYetkinAlanlarDto
        })
        alert('Ayrıca yetkin alan silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
        window.location.reload()
    }
    // ########################################Ayrıca Yetkin Alan Bilgi Formu / Firebase İşlemleri#############################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Hobiler Formu / Firebase İşlemleri#############################################################
    async getHobiler() {
        let hobilerDto = await Fire.db.collection('Admin').doc('CV').get()
        return hobilerDto.get('Hobiler')
    }

    async hobilerToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let hobilerDto = await this.getHobiler()
        let hobilerListesi = []

        if (!resumeDto) {
            hobilerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hobiler bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'Hobiler': hobilerListesi
            })
        } else if (resumeDto && !hobilerDto) {
            hobilerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hobiler bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'Hobiler': hobilerListesi
            })
        } else {
            hobilerDto.push(data);
            for (let i = 0; i < hobilerDto.length; i++) {
                hobilerListesi.push(hobilerDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hobilerr bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'Hobiler': hobilerListesi
            })
        }
    }

    async deleteHobi(index) {
        let hobilerDto = await this.getHobiler()
        hobilerDto.splice(index, 1)
        await Fire.db.collection('Admin').doc('CV').update({
            'Hobiler': hobilerDto
        })
        alert('Hobi silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
        window.location.reload()
    }
    // ########################################Hobiler Yetkin Alan Bilgi Formu / Firebase İşlemleri#############################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Tamamlanan Projeler Formu / Firebase İşlemleri#############################################################

    // ########################################Tamamlanan Projeler Formu / Firebase İşlemleri#############################################################

}

export default new ResumeFire();