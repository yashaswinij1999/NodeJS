const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

let comments = [
  {
    id: uuidv4(),
    username: "Todd",
    comment: "Lol that is so funny",
  },
  {
    id: uuidv4(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuidv4(),
    username: "Sk8erBoi",
    comment: "Plz delete your account,Todd",
  },
  {
    id: uuidv4(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect("/comments");
});

app.get("/comments/new", (req, resp) => {
  resp.render("new");
});

app.get("/comments", (req, resp) => {
  resp.render("index", { ...comments });
});

app.listen(3000, () => {
  console.log("port started");
});
