const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const ConnectDB = require("./config/db");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");

// load config
dotenv.config({ path: "./config/config.env" });

ConnectDB();

const app = express();

// logging
if (process.env.MODE_ENV === "developemnt") {
  app.use(morgan("dev"));
}

// passport
require("./config/passport")(passport);

// express-session
app.use(
  session({
    secret: "my Secret",
    resave: false,
    saveUninitialized: false,
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// handlebar
app.engine(".hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

// router
app.use("/", require("./routes/index"));

// static files
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server Connect To Port ${PORT} running in ${process.env.NODE_ENV}`
  );
});
