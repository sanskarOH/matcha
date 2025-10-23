import {google}from 'googleapis';
import { oauth2Client } from '../../loader/auth.loader.js';
import { getTokens } from '../../utils/tokenHandler.js';
import fs from 'fs'

export const getEmailList = async (userId, query = "is:unread", maxres= 1) => {  
    const tokens = JSON.parse(fs.readFileSync("tokens.json", "utf8"));
    if(!tokens) throw new Error("User Not Authenticatd");

    oauth2Client.setCredentials(tokens);
    const gmail = google.gmail({version: "v1", auth: oauth2Client});

    const response = await gmail.users.messages.list({
        userId: "me",
        q: query,
        maxres
    });

    const messages = response.data.messages || [];

    const details = await Promise.all(
        messages.map(async (msg) => {
            const msgData = await gmail.users.messages.get({
                userId: "me",
                id: msg.id,
                format: "metadata",
            });
            const headers = msgData.data.payload.headers;
            const subject = headers.find((h) => h.name === "Subject")?.value;
            const from = headers.find((h) => h.name === "From")?.value;
            return {id: msg.id, subject, from };
        })
    )
    return details;

}
