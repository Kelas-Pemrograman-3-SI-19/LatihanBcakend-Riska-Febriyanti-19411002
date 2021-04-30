const router = require('express').Router()
const KegiatanController = require('../Controller/Kegiatan')

router.post('/insert',(req, res) =>{
    KegiatanController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router