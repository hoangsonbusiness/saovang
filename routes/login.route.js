const jwt = require('jsonwebtoken')
const CONSTANT = require('../config/constant')
const express = require('express');
const router = express.Router();

const jwtHelper = require('../common/jwtHelper');

let Login = require('../model/Login');

router.route('/isAuthenticated').post(function(req, res) {
    let login = new Login(req.body);
    Login.findOne({ "user": login.user, "pass": login.pass })
        .then(info => {
            if (info == null) {
                res.status(404).json({ "message": "User not found!!!" });
            } else {
                const token = jwt.sign({
                    "user": info.user
                }, CONSTANT.jwtSecretKey, {
                    algorithm: CONSTANT.algorithm,
                    expiresIn: CONSTANT.experation
                })

                // res.cookie('jwt', token, { maxAge: 7200 * 1000 })
                res.status(200).json({ 'user': info.user, 'jwt': token });
            }
        })
        .catch(err => {
            res.status(404).send("Error!!!");
        });

});

router.get('/isAuthAdmin', jwtHelper.isAuthAdmin, (req, res) => {
    res.status(200).json({ message: 'authenticated !!!' })
});

router.get('/isLoggin', jwtHelper.isLoggin, (req, res) => {
    res.status(200).json({ message: 'User is loggin' })
});

module.exports = router;