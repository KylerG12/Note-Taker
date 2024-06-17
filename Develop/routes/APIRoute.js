const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
    return res.json(db);    
})

router.post('/notes', (req, res) => {
    const arr = fs.readFileSync('./db/db.json');
    const par = JSON.parse(arr);
    const add = [...par, req.body];

    fs.writeFileSync('./db/db.json', JSON.stringify(add))
    return res.json(db);
});
    // // fs.appendFileSync('./db/db.json', JSON.stringify(req.body), (err) => err && console.error(err))








module.exports = router;