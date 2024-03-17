const express = require("express");
const app = express();
const path = require("path");
const { v4: getId } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: getId(),
    username: "Todd",
    comment: "Lol that is so funny",
  },
  {
    id: getId(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: getId(),
    username: "Sk8erBoi",
    comment: "Plz delete your account,Todd",
  },
  {
    id: getId(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments", (req, res) => {
  res.render("comments/index.ejs", { comments });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: getId() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const obj = comments.find((el) => el.id === id);
  res.render("comments/show", { obj });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newComment;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((el) => el.id !== id);
  res.redirect("/comments");
});

app.get("/", (req, res) => {
  res.send("hai");
});

app.listen(8080, () => {
  console.log("server started");
});
