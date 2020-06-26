import Fire from './config';

class PortfolioFire {

    // ########################################Tümsel Portfolyo Getirme / Firebase İşlemleri#########################################################################
    async getPortolio() {
        let portfolioDto = await Fire.db.collection('Admin').doc('Portfolyo');
        return await portfolioDto.get()
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


    async getAllProjectData() {
        let projectDataDto = await Fire.db.collection('Admin').doc('Portfolyo').get()
        return await projectDataDto.get('Projeler')
    }


    // deleteProfile() {
    //     if (window.confirm('Tüm prfil bilgilerini silmek üzeresiniz emin misiniz?') === true) {
    //         return Fire.db.collection(`Admin`).doc("Profil").delete()
    //     } else {
    //         console.log("...")
    //     }
    // }

    // ########################################Tümsel Portfolyo Getirme/ Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Proje Oluşturma Formu / Firebase İşlemleri#########################################################################
    // let deneme = await Fire.storageRef.child('Project/').getDownloadURL()
    // let deneme = await Fire.storageRef.child('Project/').listAll()
    async projectToFire(data, dataImage) {
        let portfolioDto = await this.getPortolio()
        let projectDataDto = await this.getAllProjectData()
        let projectDataList = []
        let storageListDto = await Fire.storageRef.child('Project/').listAll()

        if (storageListDto) {
            for (let i = 0; i < storageListDto.items.length; i++) {
                if (storageListDto.items[i].name === dataImage.projectImage.name) {
                    alert("Bu fotoğraf ismi ile daha önce kayıt oluşturdunuz. Lütfen fotoğraf isminizin önceki fotoğraf isimlerinden farklı olduğundan emin olun.");
                    return;
                }
            }
        }

        var foto = await Fire.storage.ref(`Project/${dataImage.projectImage.name}`).put(dataImage.projectImage)
        var fotoFullPath = foto.metadata.fullPath
        var fotoUrl = await Fire.storageRef.child(fotoFullPath).getDownloadURL()
        data.fotoUrl = fotoUrl

        debugger
        if (!portfolioDto) {
            debugger
            projectDataList.push(data)
            alert("Proje yüklenme işlemi tamamlanmıştır.")
            return await Fire.db.collection('Admin').doc('Portfolyo').set({
                'Projeler': projectDataList
            })
        }
        if (!projectDataDto && portfolioDto) {
            debugger
            projectDataList.push(data)
            alert("Proje yüklenme işlemi tamamlanmıştır.")
            return await Fire.db.collection('Admin').doc('Portfolyo').update({
                'Projeler': projectDataList
            })
        }
        else {
            debugger
            projectDataDto.push(data);
            for (let i = 0; i < projectDataDto.length; i++) {
                projectDataList.push(projectDataDto[i])
            }
            alert("Proje yüklenme işlemi tamamlanmıştır.")
            return await Fire.db.collection('Admin').doc('Portfolyo').update({
                'Projeler': projectDataList
            })
        }

    }
    // ########################################Proje Oluşturma Formu / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Proje Silme / Firebase İşlemleri#########################################################################
    async deletedProjectToFire(data, index) {
        try {
            var desertRef = await Fire.storageRef.child('Project/' + data)
            await desertRef.delete()

            let projectDataDto = await this.getAllProjectData()
            projectDataDto.splice(index, 1)
            await Fire.db.collection('Admin').doc('Portfolyo').update({
                'Projeler': projectDataDto
            })
            alert('Proje silme talebiniz başarılı bir şekilde sonuçlanmıştır.')
            window.location.reload()
        } catch (error) {
            alert(error.message + " " + "Lütfen sayfayı yenileyiniz.")
        }

    }

    // ########################################Proje Silme / Firebase İşlemleri#########################################################################

}

export default new PortfolioFire();