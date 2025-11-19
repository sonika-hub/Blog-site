import express from "express";
const app = express();
const port = 3000;
let blogPosts = [];
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.get("/about",(req,res)=>{
    res.render("about.ejs");
})
app.get("/posts",(req,res)=>{
    res.render("posts.ejs");
})
app.post("/submit-blog", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  blogPosts.push({ title, author, content });
  res.redirect("/");
});
app.get("/view",(req,res)=>{
    res.render("view.ejs",{blogPosts});
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
})
app.listen(port,()=>{
    console.log("server running at port 3000");
});
