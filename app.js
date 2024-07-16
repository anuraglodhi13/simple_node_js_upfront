const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.post("/", function (req, res) {
  console.log(req.body);
  res.send();
});
app.listen(3001, () => {
  console.log("app is up");
});
