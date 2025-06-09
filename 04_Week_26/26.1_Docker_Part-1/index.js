const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.listen(3000, () => console.log("Server started on PORT 3000"));