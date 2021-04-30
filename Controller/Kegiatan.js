const kegiatanmodel = require('../model/Kegiatan')

exports.create =(data) =>
new Promise((resolve, reject)=> {
    kegiatanmodel
    .create(data)
    .then(() => 
        resolve({
            status : true,
            pesan : 'Berhasil input Kegiatan'
        }))
    .catch(() => reject ({
        status : false,
        pesan : 'Gagal input Kegiatan'
        }))
})