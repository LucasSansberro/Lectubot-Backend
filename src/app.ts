import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import passport from "passport";
import ENV from "./config.js";
import authRouter from "./routes/auth.routes.js";
import authorsRouter from "./routes/authors.routes.js";
import booksRouter from "./routes/books.routes.js";
import booksReadRouter from "./routes/booksRead.routes.js";
import reviewsRouter from "./routes/reviews.routes.js";
import usersRouter from "./routes/users.routes.js";
import "./strategies/discordStrategy.js";

const app = express();
const { URLMONGO, SECRETSESSION } = ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "POST,GET,PUT,OPTIONS,DELETE",
  })
);

app.use(
  session({
    secret: SECRETSESSION,
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
      mongoUrl: URLMONGO,
    }),
    cookie: {
      maxAge: 60000 * 60 * 24 * 7,
    },
  })
);
app.use(cookieParser(SECRETSESSION));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "¡Bienvenido a Lectores Argentinos!" });
});

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);
app.use("/booksRead", booksReadRouter);
app.use("/authors", authorsRouter);
app.use("/reviews", reviewsRouter);

export default app;
