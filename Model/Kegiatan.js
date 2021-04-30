const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KegiatanSchema = new Schema ({
    namaKegiatan:{
        type : String
    },
    deskripsi :{
        type : String
    },
    waktu : {
        type : String
    }
})

module.exsport = mongoose.model('Kegiatan', KegiatanSchema)