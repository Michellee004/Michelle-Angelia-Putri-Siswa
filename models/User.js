const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nis: {
        type: String,
        required :  [true, 'Silahkan isikan nis valid!'],
        unique: true
    },
    nama: {
        type: String,
        required : [true, 'Silahkan isikan nama'],
        unique: true
    },
    gender: {
        type: String,
        required : [true, 'Silahkan isikan gender'],
        unique: true
    },
    tgllahir: {
        type: String,
        required : [true, 'Silahkan isikan tanggal lahir'],
        unique: true
    },
    kelas: {
        type: String,
        required : [true, 'Silahkan isikan kelas'],
        unique: true
    }
})

module.exports = mongoose.model('siswa', UserSchema)