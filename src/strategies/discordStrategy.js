import ENV from "../config.js";
import User from "../models/User.js";
import passport from "passport";
import { Strategy } from "passport-discord";

const { CLIENTID, CLIENTSECRET } = ENV;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: CLIENTID,
      clientSecret: CLIENTSECRET,
      callbackURL: "/auth/redirect",
      scope: ["identify", "guilds"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        
        const user = await User.findOne({ discordId: profile.id });
        if (user) {
          return done(null, user);
        }

        const newUser = new User({
          discordId: profile.id,
          username: profile.username,
          guilds: profile.guilds,
        });

        await newUser.save();

        done(null, newUser);
      } catch (error) {
        console.log(error);
        return done(error, null);
      }
    }
  )
);
