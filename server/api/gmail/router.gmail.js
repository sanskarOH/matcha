import {Router} from "express";
import {
    redirectToGoogle,
    handleGoogleCallback,
    fetchEmails
    
} from "../gmail/controllers.gmail.js";


const router = Router();


router.get("/auth/google", redirectToGoogle);
router.get("/auth/google/callback",handleGoogleCallback);
router.get("/emails",fetchEmails);


export default router;
