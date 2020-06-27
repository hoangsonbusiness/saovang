const express = require('express');
const router = express.Router();
const model = require('../common/diModel')

//Require Annoucement model in our routes module
// let Course = require('../model/Course');

router.route('/add').post(async function(req, res) {
    const getSeq = require('../common/autoIncrement');
    let path = req.originalUrl;
    let seq = await getSeq(model.getPath(path));
    req.body._id = seq;
    let objModel = model.getModel(req.originalUrl);
    let data = new objModel(req.body);
    data.save()
        .then(rs => {
            res.status(200).json({ message: 'data is added successfully' });
        })
        .catch(err => {
            console.log(err + '')
            res.status(400).send("unable to save to database");
        });
    // course.save()
    // .then(course => {
    //     res.status(200).json({ message: 'course is added successfully' });
    // })
    // .catch(err => {
    //     res.status(400).send("unable to save to database");
    // });
});

router.route('/update/:id').post(function(req, res) {
    let body = { _id: req.params.id };
    model.getModel(req.originalUrl).findOneAndUpdate(body, { $set: req.body },
        function(err, rs) {
            if (err) {
                res.status(400).json({ message: "update data error" });
            } else {
                res.status(200).json({ message: "update data successfully" });
            }
        });
    // Course.findOneAndUpdate(body, { $set: req.body },
    //     function(err, rs) {
    //         if (err) {
    //             res.status(400).json({ message: "update document error" });
    //         } else {
    //             res.status(200).json({ message: "update Course successfully" });
    //         }
    //     });
});

router.route('/delete').post(function(req, res) {
    let body = { _id: req.body };
    model.getModel(req.originalUrl).deleteMany(body, function(err, result) {
        if (err) res.json(err);
        else res.status(200).json({ message: "delete data successfully" });
    });
    // Course.deleteMany(body, function(err, result) {
    //     if (err) res.json(err);
    //     else res.status(200).json({ message: "delete Course successfully" });
    // });
});

router.route('/show').get(function(req, res) {
    let body = {};
    model.getModel(req.originalUrl).find(body).sort({ _id: -1 })
        .exec((err, rs) => {
            if (err) res.status(400).send("message:unable to get data");
            res.status(200).json(rs);
        })
        // Course.find(body).sort({ _id: -1 })
        //     .exec((err, rs) => {
        //         if (err) res.status(400).send("message:unable to get Course");
        //         res.status(200).json(rs);
        //     })
});

router.route('/get/:id').get(function(req, res) {
    let body = { _id: req.params.id };
    model.getModel(req.originalUrl).find(body)
        .exec((err, rs) => {
            if (err) res.status(400).send("unable to get data");
            res.status(200).json(rs);
        })
        // Course.find(body)
        //     .exec((err, rs) => {
        //         if (err) res.status(400).send("unable to get Course");
        //         res.status(200).json(rs);
        //     })
});

module.exports = router;