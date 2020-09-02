const multer = require('multer')

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './uploads/')
    },
    filename: (request, file, callback) => {
        console.log(file)
        callback(null, file.fieldname + '-' + new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname)
    }
})
let upload = multer({ storage: storage })

module.exports = upload