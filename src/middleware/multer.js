const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './uploads/')
    },
    filename: (request, file, callback) => {
        // console.log(file)
        callback(null, file.fieldname + '-' + new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname)
    }
})

const fileFilter = (request, file, callback) => {
    const ext = path.extname(file.originalname)
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
}

const maxSize = 1024 * 1024

let upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: maxSize } })

module.exports = upload