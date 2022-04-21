const router = require("express").Router();
const ArticleModel = require("../model/articles");
const { NotFoundResponse, SuccessResposne, CreatedResponse } = require("../response-object/response");

router.get("/", async (req, res) => {
  new SuccessResposne(res)
    .setResult(await ArticleModel.findAll())
    .send()
})

router.get("/:id", async (req, res) => {
  const article = await ArticleModel.findByPk(req.params.id);
  if(article)
    new SuccessResposne(res).setResult(article).send()
  else
    new NotFoundResponse(res).send("The article is not found!");
})

router.post("/", async (req, res) => {
  const {title, content } = req.body;
  const article = new ArticleModel({
    title,
    content
  });
  const savedArticle = await article.save()
  new CreatedResponse(res)
    .setResult(savedArticle)
    .send()
})

router.put("/:id", async (req, res) => {
  const { title, content } = req.body;
  
  const article = await ArticleModel.findByPk(req.params.id);
  if(article){
    article.title = title
    article.content = content
    new SuccessResposne(res).setResult(await article.save()).send()
  }
  else
    new NotFoundResponse(res).send("The article is not found!");
})

module.exports = router;