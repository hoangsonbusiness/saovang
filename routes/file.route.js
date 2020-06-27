//Upload file STR
const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
const DIR = __dirname + '/../uploads/';
//File name
var flname = "";
var orginalFileName = "";

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        orginalFileName = file.originalname;
        flname = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, flname);
    }
});

let upload = multer({ storage: storage });

router.post('/singleUpload', upload.single('file'), function(req, res) {
    if (!req.file) {
        return res.json({
            success: false,
            filename: "",
            orginalFileName: ""
        });

    } else {
        return res.json({
            success: true,
            filename: flname,
            "orginalFileName": orginalFileName
        })
    }
});

router.route('/deleteFile').post(function(req, res) {
    let filename = DIR + req.body.path;
    fs.unlink(filename, (err) => {
        if (err) {
            console.error(err)
            filename = "";
        }
    })
    res.json({
        success: true,
        "filename": filename
    })
});
//Upload file END

module.exports = router;