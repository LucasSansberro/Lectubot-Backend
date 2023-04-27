import { Model } from "mongoose";
import passport from "passport";
import { Strategy } from "passport-discord";
import ENV from "../config.js";
import User from "../models/User.js";

const { CLIENTID, CLIENTSECRET } = ENV;
type User = {
  _id?: number;
};
passport.serializeUser((user: User, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (user: User, done) => {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: CLIENTID!,
      clientSecret: CLIENTSECRET!,
      callbackURL: "/auth/redirect",
      scope: ["identify", "guilds"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ discordId: profile.id });
        if (user) {
          return done(null, user);
        }
        console.log(profile);

        //TODO Dont upload guilds to schema. Compare LECTORESID to check if user is member
        const newUser = new User({
          discordId: profile.id,
          username: profile.username,
          avatar: profile.avatar,
          guilds: profile.guilds,
        });

        await newUser.save();

        done(null, newUser);
      } catch (error: Error | any) {
        console.log(error);
        return done(error, undefined);
      }
    }
  )
);
