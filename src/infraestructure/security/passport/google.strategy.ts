import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

    constructor() {
      super({
        clientID: "credentials.web.client_id",
        clientSecret: "credentials.web.client_secret",
        callbackURL: "credentials.web.redirect_uris[0]",
        passReqToCallback: true,
        scope: ['profile'],
      });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: any) {
      try {
        const user = {
          request,
          accessToken,
          refreshToken,
          profile
        };
        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }

}
