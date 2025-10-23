import { google } from "googleapis";
import config from "../config/config.js";  


const oauth2Client = new google.auth.OAuth2(
    config.googleApi.clientId,
    config.googleApi.client_secret,
    config.googleApi.redirect_uri
);

const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly",];

export const getAuthUrl = () => {
    return oauth2Client.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        scope: SCOPES,
    });
};


export {oauth2Client};