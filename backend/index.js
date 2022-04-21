const express = require("express");
const server = express();
const PORT = 8080;
const articleRoutes = require("./src/routes/articles");
const dbConnection = require("./src/db/connection");
const { NotFoundResponse, SuccessResposne, BadRequestResponse } = require("./src/response-object/response");
const UserModel = require("./src/model/users");
const hashFunction =  require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "1234567";

// To accept json data / to promote as RestAPI
server.use(express.json());

server.use("/articles", articleRoutes);
server.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({
    where: { username }
  })
  console.log({user})
  if(user && hashFunction.compareSync(password, user.password)) {
    const {password, ...userData} = await user.toJSON();
    new SuccessResposne(res)
      .setResult({
        token: jwt.sign(userData, JWT_SECRET, { expiresIn: '1h' }), 
      })
      .send("Login successful")
  } else {
    new BadRequestResponse(res).send("User or password is incorrect");
  }
  
})
server.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log({ username, password })
  const user = new UserModel({
    username,
    password: await hashFunction.hash(password, 1)
  });
  const { password: _, ...savedUser} = await (await user.save()).toJSON();
  
  new SuccessResposne(res)
    .setResult(savedUser)
    .send()
})


server.post("/auth", async (req, res) => {
  const { token } = req.body;
  if(!token) {
    return new BadRequestResponse(res).send("token is required");
  }

  const payload = jwt.verify(token, JWT_SECRET);
  console.log({payload})
  const user = await UserModel.findOne({
    where: { username: payload.username }
  })
  if(user) {
    const userDate = await user.toJSON();
    delete userDate.password;

    new SuccessResposne(res).setResult(userDate).send("Verified");
  } else {
    new BadRequestResponse(res).send("Invalid token")
  }
  
})

server.use("*", (req, res) => {
  new NotFoundResponse(res).send();
})

dbConnection
  .authenticate()
  .then(()=> {
    server.listen(PORT, ()=> {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })

