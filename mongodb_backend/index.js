import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.get("/", async (req, res) => {
  try {
    const users = await User.find().exec();
    await users.read();

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

    if (User.data === null) {
      users.data = defaultData;
      await users.write();
    }
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

app.patch("/edit:userId", async (req, res) => {
  try {
    await User.findByIdAndUpdate("users._id", {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
    }).exec();
    return res.json();
  } catch (error) {
    return res.json({ error: error.message });
  }
});

app.delete("/users/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndRemove(userId);
    return res.sendStatus(200);
  } catch (err) {
    return res.json({ err: err.message });
  }
});

app.post("/add+user", async (req, res) => {
  // const User = new UserModel {firstName: firstName,lastName: lastName, age: age, email: email}
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
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
      `Example app listening on port ${port}: http://localhost:3300/`
    );
  });
});
