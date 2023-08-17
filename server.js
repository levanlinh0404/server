const express = require("express");
const mongoose = require("mongoose");
const tableUser = require("./module/user");
const allkhoahoc = require ('./module/khoahoc');
const app = express();
require("dotenv").config();

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("hello server");
});

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    let data = await tableUser.create(req.body);
    res.status(200).json({ message: "add new user success", dataUser: data });
  } catch (err) {
    res.status(500).json({ message: "add new user error" });
    console.log(err);
  }
});

app.get("/data", async (req, res) => {
  try {
    let data = await tableUser.find({});
    res.status(200).json({ message: "success", dataUser: data });
  } catch (err) {
    res.status(500).json({ message: "get data error" });
    console.log(err);
  }
});



app.get("/data/:id", async (req, res) => {
  try {
    let iduser = req.params.id;

    let data = await tableUser.findOne({ _id : iduser });
    res.status(200).json({ message: "success", dataUser: data });
  } catch (err) {
    res.status(500).json({ message: "get data error" });
    console.log(err);
  }
});



app.put("/data/:id", async (req, res) => {
  try {
    let iduser = req.params.id;
    let datauser = req.body;
    let data = await tableUser.findByIdAndUpdate({ _id : iduser }, datauser);
    res.status(200).json({ message: "success", dataUser: data });
  } catch (err) {
    res.status(500).json({ message: "get data error" });
    console.log(err);
  }
});

app.delete("/data/:id", async (req, res) => {
  try {
    let iduser = req.params.id;
    let datauser = req.body;
    let data = await tableUser.findByIdAndDelete({ _id : iduser }, datauser);
    res.status(200).json({ message: "success", dataUser: data });
  } catch (err) {
    res.status(500).json({ message: "get data error" });
    console.log(err);
  }
});


mongoose.connect(process.env.MB).then(() => {
    console.log("connection success mongoose");
  });
