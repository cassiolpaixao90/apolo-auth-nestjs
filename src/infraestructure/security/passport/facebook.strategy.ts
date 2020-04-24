import { Injectable } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-facebook-token-nest';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook'){
    constructor(){
        super({
            clientID: "FACEBOOK_APP_ID",
            clientSecret: "FACEBOOK_APP_SECRET",
            fbGraphVersion: "v3.0",
        })
    }
}

