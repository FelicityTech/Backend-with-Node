const multer = require('multer');
const upload = multer({dest: 'uploads/' });

append.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file); // Prints the upload file object
    res.send('File uploaded successfully!');
});