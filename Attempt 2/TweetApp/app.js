const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let comments = [
  {
    id: 1,
    username: "Todd",
    comment: "Lol that is so funny",
  },
  {
    id: 2,
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: 3,
    username: "Sk8erBoi",
    comment: "Plz delete your account,Todd",
  },
  {
    id: 4,
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, resp) => {
  resp.render("index", { comments });
});

app.listen(3000, () => {
  console.log("port started");
});
