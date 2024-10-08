import passport from "passport";
import { Profile, Strategy } from "passport-discord";
import ENV from "../config.js";
import { User } from "../models/Schemas/User.js";

const { CLIENTID, CLIENTSECRET, LECTORESID } = ENV;
type User = {
  _id?: number;
};
interface profile extends Profile{
  global_name:string
}
passport.serializeUser((user: User, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (user: User, done) => {
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
    async (accessToken, refreshToken, profile : profile, done : any) => {
      try {
        if (profile.guilds?.find((guild) => guild.id == LECTORESID)) {
          const user = await User.findOneAndUpdate(
            { discordId: profile.id },
            {
              $set: {
                username: profile.global_name,
                avatar: profile.avatar,
              },
            },
            { new: true, upsert: true }
          );

          return done(null, user);
        } else {
          throw console.error("El usuario no está en el grupo de discord Lectores Argentinos");
        }
      } catch (error: Error | any) {
        console.log(error);
        return done(error, undefined);
      }
    }
  )
);
