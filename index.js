const express = require ('express')
const app = express()
const mongoose = require ('mongoose')

//untuk konek ke database
mongoose.connect('mongodb://localhost:27017/Latihan',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Berhasil Conect Database'))
.catch(() => console.log('Gagal Conect Database'))

app.use(express.json({
    extended: true,
    limit: '20mb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))
// app.get('/', (req, res) => {
//     res.send('Hello world !')
// })
// app.get('/profile/:username/:id',
// (req, res) =>{
//     console.log(req.params)
// })

app.use('/kegiatan', require ('./routes/Kegiatan'))

app.listen(3000, () =>{
    console.log('server started')
}) 

