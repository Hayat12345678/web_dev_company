import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const User = mongoose.model(("User", userSchema));

app.get("/", async (req, res) => {
  try {
    const users = await User.find().exec();
    return req.json(users);
  } catch (error) {
    return res.json({ error: error.mesage });
  }
  res.json({ meg: "hallo" });
});

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
