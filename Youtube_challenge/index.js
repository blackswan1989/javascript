// const express = require("express"); 구문법
import express from "express"; //ES6문법 express를 불러온다(require로).
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: 🌐http://localhost:${PORT}🌐`);
};

const handleHome = (req, res) => {
  res.send("Welcom Home");
};

const handleAboutUs = (req, res) => {
  res.send("About Us Page");
};

const handleContact = (req, res) => {
  res.send("Contact Page");
};

const handleProtected = (req, res) => {
  res.send("Protected Page. You can't come in");
};

const consoleMiddleware = (req, res, next) => {
  console.log("I'm a Middleware");
  next();
};

const redirectMiddleware = (req, res) => {
  console.log("You can't come in");
  res.redirect("/");
};

app.use(consoleMiddleware); // middleware

app.get("/", handleHome); // "/" home을 요청하는 페이지
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", redirectMiddleware, handleProtected);

app.listen(PORT, handleListening);
