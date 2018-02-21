const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.set('view engine', 'ejs');

//use middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const generateRadndomString = () => {
  let shortUrl = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    shortUrl += possible.charAt(Math.floor(Math.random() * possible.length));
  return shortUrl;
}


var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.end("Hello!");
});

app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.get("/urls/:id", (req, res) => {
  let templateVars = {
    shortURL: req.params.id,
    urls: urlDatabase
  };
  res.render("urls_show", templateVars);
});

//Update
app.post("/urls/:id", (req, res) => {
  urlDatabase[req.params.id] = req.body.longURL;
  res.redirect("/urls");
});


app.post("/urls", (req, res) => {
  let newShortURL = generateRadndomString();
  urlDatabase[newShortURL] = req.body.longURL;
  res.redirect(302, `/urls/${newShortURL}`);
  res.send("Ok"); // Respond with 'Ok' (we will replace this)
});


app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n");
});

//redirect to a shortened URL
app.get("/u/:shortURL", (req, res) => {
  let longURL = urlDatabase[req.params.shortURL];
  if (!longURL) {
    res.redirect(404, "https://http.cat/404");
  } else {
    res.redirect(302, longURL);
  }
});

//Delete a link
app.post("/urls/:shortURL/delete", (req, res) => {
  delete urlDatabase[req.params.shortURL];
  res.redirect("/urls");
});

//GET from /login
app.get("/login",(req,res)=>{
  console.log('Cookies:' + req.cookies["username"]);
});
//Post from /login
app.post("/login",(req,res)=>{
res.cookie('username',req.body.username);
res.send("Success")
});

//Create a server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});