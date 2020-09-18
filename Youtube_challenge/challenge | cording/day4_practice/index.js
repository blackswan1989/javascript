import express from "express";
const app = express();

const handleHome = (req, res) => {
  res.send("Welcom Home");
};

const handleAboutUs = (req, res) => {
  res.send("About Us Page");
};

const handleContact = (req, res) => {
  res.send("Contact Page");
};

const consoleMiddleware = (req, res, next) => {
  console.log("I'm a Middleware");
  next();
};
const redirectMiddleware = (req, res) => {
  res.redirect("/");
  console.log("You can't come in");
};

const handleProtected = (req, res, next) => {
  res.send("Protected Page");
};

app.use(consoleMiddleware);

app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", redirectMiddleware, handleProtected);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
