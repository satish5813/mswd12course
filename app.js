const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./Routes/UserRouter.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello API ????");
});

app.use("/v0/api", UserRoute);

const URI =
  "mongodb+srv://sa:sa123@cluster0.ednne.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Mongodb Connected Successfully......"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Server RUn on Port NO 5000");
});
