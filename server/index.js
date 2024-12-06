const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  return res.json({
    msg: "Welcome to Food Delivery App",
  });
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
