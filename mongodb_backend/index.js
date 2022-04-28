import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const setUpDb = async (db) => {
  const defaultData = {
    cities: [
      {
        id: 1,
        name: "Hamburg",
        inhabitans: 1800000,
      },
      {
        id: 2,
        name: "Köln",
        inhabitans: 1086000,
      },
      {
        id: 3,
        name: "Berlin",
        inhabitans: 6200000,
      },
    ],
  };

  await db.read();

  if (db.data === null) {
    db.data = defaultData;
    await db.write();
  }
};

app.get("/", async (req, res) => {
  try {
    const users = await User.find().exec();
    return res.json(users);
  } catch (error) {
    return res.json({ error: error.message });
  }
  res.json({ meg: "hallo" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().exec();
    return res.json(users);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

app.post("/addUser", async (req, res) => {
  try {
    const newUser = new User({
      firstName: "jack",
      lastName: "Sparow",
      age: 55,
    });
    await newUser.save();
    return res.json(newUser);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

mongoose.connect(process.env.REMOTE_CONNECTION).then(() => {
  app.listen(port, () => {
    console.log(
      `Example app listening on port ${port}: http://localhost:3000/`
    );
  });
});
