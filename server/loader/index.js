import db from "./dbLoader.js";
import express from "./express.js";

export default async (app) => {
    if(db){
        console.log('Connection to Firebase Successfull ✅');
    }
    
    express(app);
}