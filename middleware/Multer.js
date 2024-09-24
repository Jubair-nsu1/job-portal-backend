const multer = require("multer");

// Upload Multiple Files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname === 'resume') {
        cb(null, './files/resumes');
      }
      else if (file.fieldname === 'coverLetter') {
          cb(null, './files/coverLetter');
      }
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' +Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ 
    storage:  storage , 
    limits:  {
      fileSize:1048576, // 1Mb
    },
  });

  module.exports = upload