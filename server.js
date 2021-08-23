require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    // example of the authHeader would be like:
    // Bearer what-ever-token-string-comes-here-in-a-single-long-string
    const authHeader = req.headers["authorization"]; // 'Bearer <token>' string
    const token = authHeader && authHeader.split(" ")[1]; // only '<token>' string part
  
    if (token == null) return res.sendStatus(401); // Unauthorized
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Forbidden
      req.user = user; // authorization successful so we then can use the user in the request, since its valid
      next();
    });
  };

// Middleware
app.use(express.json());

let posts = [
  {
    title: "Avengers",
    username: "Nazhim",
  },
  {
    title: "Harry potter",
    username: "Harry",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.post("/login", (req, res) => {
  // Firstly you have to authenticate the user but, since this is mostly focused to authorization,
  // let's just say that the user is authenticated

  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});



app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
