import passport from "passport";
import { Strategy } from "passport-discord";
import ENV from "../config.js";
import { User } from "../models/Schemas/User.js";

const { CLIENTID, CLIENTSECRET } = ENV;
type User = {
  _id?: number;
};
passport.serializeUser((user: User, done) => {
  done(null, user._id);
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
        //TODO Don't save guild in DB, just check if user is in guild = lectores 
        const user = await User.findOneAndUpdate(
          { discordId: profile.id },
          {
            $set: {
              username: profile.username,
              avatar: profile.avatar,
              guilds: profile.guilds,
            },
          },
          { new: true, upsert: true }
        );

        return done(null, user);
      } catch (error: Error | any) {
        console.log(error);
        return done(error, undefined);
      }
    }
  )
);
