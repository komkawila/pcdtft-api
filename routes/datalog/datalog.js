const express = require('express');
// const db = require('../util/db.config');
const db = require('../../util/db.config');
const route = express.Router();

// Login
route.get('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id;
    await db.query("SELECT * FROM datalog_tb WHERE user_id = ?",
        [user_id], function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send({ err: true, status: false, message: err });
            } else {
                const json = { err: false, status: (result.length == 0 ? false : true), message: result };
                res.send(json);
            }
        });
});

module.exports = route;