const express = require("express");
const app = express();

let clicks = {};

app.get("/go", (req, res) => {
  const id = req.query.id;

  clicks[id] = (clicks[id] || 0) + 1;

  console.log(`QR ${id} di-scan ${clicks[id]}x`);

  res.redirect("https://youtube.com");
});

app.listen(3000, () => console.log("Server jalan"));