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
  email: String,
});

const User = mongoose.model("User", userSchema);

const setUpDb = async (users) => {
  const defaultData = {
    cities: [
      {
        firstName: "Onur",
        lastName: "Kadirov",
        age: 17,
      },
      {
        firstName: "Orhan",
        lastName: "Kadirov",
        age: 39,
      },
      {
        firstName: "Dzhenay",
        lastName: "Kadirova",
        age: 37,
      },
      {
        firstName: "Hayat",
        lastName: "Alkheder",
        age: 54,
      },
      {
        firstName: "Lilith",
        lastName: "Lalash",
        age: 26,
      },
      {
        firstName: "Wan",
        lastName: "Ibrahim",
        age: 25,
      },
      {
        firstName: "Carlo",
        lastName: "Lalash",
        age: 22,
      },
    ],
  };

  await users.read();

  if (users.data === null) {
    users.data = defaultData;
    await users.write();
  }
};

app.get("/", async (req, res) => {
  try {
    const users = await User.find().exec();
    return res.json(users);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().exec();
    return res.json(users);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

app.patch("/deleteUser", async (req, res) => {
  try {
    await User.findByIdAndDelete(User._id);
    process.exit(0);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

app.post("/addUser", async (req, res) => {
  try {
    const newUser = new User({
      firstName: String,
      lastName: String,
      age: Number,
      email: String,
    });
    const tempUser = await newUser.save();
    tempUser.collection.insertOne();
    return res.json(newUser);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

mongoose.connect(process.env.REMOTE_CONNECTION).then(() => {
  app.listen(port, () => {
    console.log(
      `Example app listening on port ${port}: http://localhost:3300/`
    );
  });
});
