const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Get all articles");
})

router.get("/:id", (req, res) => {
  res.send(`Get article by id: ${req.params.id}`)
})

router.post("/", (req, res) => {
  const {title, description } = req.body;
  res.status(201).send({ title, description });
})

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const {title, description } = req.body;
  res.send(`Update article by id: ${id}, title: ${title}, description: ${description}`)
})

module.exports = router;