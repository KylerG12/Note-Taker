const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const html = require("./routes/htmlRoute");
const api = require("./routes/APIRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);

app.listen(PORT, () => console.log("Now listening"));
