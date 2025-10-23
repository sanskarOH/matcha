import { exchangeCodeForTokens } from "../../middleware/exchangeCodeForTokens.js";
import { getEmailList } from "./service.gmail.js";
import { getAuthUrl } from "../../loader/auth.loader.js";
import google from 'googleapis'
import fs from 'fs'


export const redirectToGoogle = async (req, res) => {
    console.log("redirect to google called");
    const url = getAuthUrl();
    console.log(url)
    res.redirect(url);
}

export const handleGoogleCallback = async (req, res) => {
    try{
        const {code} = req.query;
        const tokens = await exchangeCodeForTokens(code, "user1");
        fs.writeFileSync("tokens.json", JSON.stringify(tokens, null, 2));
        res.redirect('/emails')
    }catch (error){
        console.error("Callback Error:", error);
        res.status(500).json({message: "Error during Oauth"});
    }
}

export const fetchEmails = async (req, res) => {
    try{
        const emails = await getEmailList("user1");
        res.json(emails);
    }catch (error){
        console.error("Email Fetch Error:",error);
        res.status(500).json({message: "Failed to fetch emails"});
    }
}