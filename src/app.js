import express from "express";
import session from "express-session";
import passport from "passport";
import authRouter from "./routes/auth.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import indexRouter from "./routes/index.routes.js";
import "./strategies/discordStrategy.js";
import MongoStore from "connect-mongo";
import ENV from "./config.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const { URLMONGO, SECRETSESSION } = ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true, 
  credentials: true,
  methods: 'POST,GET,PUT,OPTIONS,DELETE' 
}));

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

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/dashboard", dashboardRouter);

export default app;
