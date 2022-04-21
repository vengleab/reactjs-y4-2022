const express = require("express");
const server = express();
const PORT = 8080;
const articleRoutes = require("./src/routes/articles");

// To accept json data / to promote as RestAPI
server.use(express.json());

server.use("/articles", articleRoutes);
server.post("/login", (req, res) => {
  const { user, password } = req.body;
  res.send(`Login by user: ${user} and password ${password}`)
})
server.post("/auth", (req, res) => {
  res.send("Verify token/session")
})

server.use("*", (req, res) => {
  res.status(404).send({ message: "Route is not found!!!"})
})

server.listen(PORT, ()=> {
  console.log(`Server is running on http://localhost:${PORT}`)
})