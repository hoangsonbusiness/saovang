const CONSTANT = require('../config/constant')
const jwt = require('jsonwebtoken');

let Login = require('../model/Login');

module.exports.isAuthAdmin = (req, res, next) => {
    var token = null;
    if (req && req.headers.jwt) token = req.headers.jwt;

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        jwt.verify(token, CONSTANT.jwtSecretKey,
            (err, decoded) => {
                if (err) {
                    return res.status(500).send({ auth: false, message: 'Invalid signature.' });
                } else {
                    Login.findOne({ user: decoded.user })
                        .then(info => {
                            if (info == null) {
                                return res.status(404).send({ auth: false, message: 'Token authentication failed.' });
                            } else {
                                if (info.role != CONSTANT.admin)
                                    return res.status(401).send({ auth: false, message: 'User is unauthorized.' });

                                next();
                            }
                        })
                        .catch(err => {
                            return res.status(401).send({ auth: false, message: err + '' });
                        });

                }
            }
        )
    }
}

module.exports.isLoggin = (req, res, next) => {
    var token = null;
    if (req && req.headers.jwt) token = req.headers.jwt;
    // if (req && req.headers) token = req.headers.jwt;

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        jwt.verify(token, CONSTANT.jwtSecretKey,
            (err, decoded) => {
                if (err) {
                    return res.status(500).send({ auth: false, message: 'Invalid signature.' });
                } else {
                    next();
                }
            }
        )
    }
}