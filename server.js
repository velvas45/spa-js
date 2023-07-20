const express = require("express");
const path = require("path");

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

// routes
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log("Server is Running now!");
});
