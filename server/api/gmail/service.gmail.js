import { google } from "googleapis";
import { oauth2Client } from "../../loader/auth.loader.js";
import fs from "fs";

export const getEmailList = async (userId, query = "is:unread", maxResults = 10) => {
  // 1️⃣ Load tokens
  const tokens = JSON.parse(fs.readFileSync("tokens.json", "utf8"));
  if (!tokens) throw new Error("User not authenticated");

  // 2️⃣ Set credentials
  oauth2Client.setCredentials(tokens);


  // 4️⃣ Initialize Gmail API
  const gmail = google.gmail({ version: "v1", auth: oauth2Client });

  // 5️⃣ Fetch messages
  const response = await gmail.users.messages.list({
    userId: "me",
    q: query,
    maxResults
    
  });

  const profileRes = await gmail.users.getProfile({
    userId: "me",
  });
  const profile = profileRes.data.emailAddress;
  console.log("authenticated user", profile)

  const messages = response.data.messages || [];

  // 6️⃣ Extract useful headers
  const details = await Promise.all(
    messages.map(async (msg) => {
      const msgData = await gmail.users.messages.get({
        userId: "me",
        id: msg.id,
        format: "FULL",
      });
      const headers = msgData.data.payload.headers;
      const subject = headers.find((h) => h.name === "Subject")?.value;
      const from = headers.find((h) => h.name === "From")?.value;
      return { id: msg.id, subject, from };
    })
  );

  return details;
};
