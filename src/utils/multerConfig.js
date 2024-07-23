const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Asegúrate de usar barras invertidas dobles o barras normales
    const uploadPath = path.join('C:', 'Users', 'yeiso', 'OneDrive', 'Escritorio', 'My Work Frelansee', 'TheraClinic', 'Desarrollo', 'Archivos');
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
