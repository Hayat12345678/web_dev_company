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

const setUpDb = async (users) => {
  const defaultData = {
    cities: [
      {
        _id: "62669c29a1e7d4c03e31e61d",
        firstName: "Onur",
        lastName: "Kadirov",
        age: 17,
      },
      {
        _id: "626693dfa1e7d4c03e31e61b",
        firstName: "Orhan",
        lastName: "Kadirov",
        age: 39,
      },
      {
        _id: "62669c29a1e7d4c03e31e61c",
        firstName: "Dzhenay",
        lastName: "Kadirova",
        age: 37,
      },
      {
        _id: "62669456e24a943359dce849",
        firstName: "Hayat",
        lastName: "Alkheder",
        age: 54,
      },
      {
        _id: "62669be6e24a943359dce84a",
        firstName: "Lilith",
        lastName: "Lalash",
        age: 26,
      },
      {
        _id: "62669fc8ebbd68decc9b67cc",
        firstName: "Wan",
        lastName: "Ibrahim",
        age: 25,
      },
      {
        _id: "62669be6e24a943359dce84b",
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

app.post("/addUser", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
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
