const router = require('express').Router();
const fs = require('fs');
const uuid = require('uuid/v1');

router.get('/notes', async (req, res) => {
    const data = await fs.readFileSync('./db/db.json');
    const newData = JSON.parse(data);
    return res.json(newData);
       
})

router.post('/notes', (req, res) => {
    const arr = fs.readFileSync('./db/db.json');
    const par = JSON.parse(arr);
    const add = [...par, {...req.body, id:uuid()}];
    fs.writeFileSync('./db/db.json', JSON.stringify(add))
    const data = fs.readFileSync('./db/db.json');
    const newData = JSON.parse(data);
    return res.json(newData);
});



module.exports = router;