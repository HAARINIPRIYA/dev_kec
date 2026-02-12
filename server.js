const express = require("express");
const app = express();

app.use(express.static(__dirname));

const PORT = 8000;

app.listen(PORT, () => {
  console.log("guvi_kec running on port 8000");
});
