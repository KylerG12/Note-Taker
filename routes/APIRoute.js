const router = require("express").Router();
const fs = require("fs");
const uuid = require("uuid/v1");

router.get("/notes", async (req, res) => {
  const data = await fs.readFileSync("./db/db.json");
  const newData = JSON.parse(data);
  return res.json(newData);
});

router.post("/notes", (req, res) => {
  const arr = fs.readFileSync("./db/db.json");
  const par = JSON.parse(arr);
  const add = [...par, { ...req.body, id: uuid() }];
  fs.writeFileSync("./db/db.json", JSON.stringify(add));
  const data = fs.readFileSync("./db/db.json");
  const newData = JSON.parse(data);
  return res.json(newData);
});

router.delete("/notes/:id", async (req, res) => {
  const arr = await fs.readFileSync("./db/db.json");
  const data = JSON.parse(arr);
  const remove = req.params.id;
  const db = data.filter((id) => id.id !== remove);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  const datas = fs.readFileSync("./db/db.json");
  const newData = JSON.parse(datas);
  return res.json(newData);
});

module.exports = router;
