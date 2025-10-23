import Joi from 'joi'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({path: path.join(__dirname, "../.env")});
const envSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production','development','test').required(),
        PORT: Joi.number().default(3000),
        FIREBASE_apiKey: Joi.string().required(),
        FIREBASE_authDomain: Joi.string().required(),
        FIREBASE_projectId: Joi.string().required(),
        FIREBASE_storageBucket: Joi.string().required(),
        FIREBASE_appId: Joi.string().required(),
        GOOGLE_client_id:Joi.string().required(),
        GOOGLE_project_id: Joi.string().required(),
        GOOGLE_auth_uri:Joi.string().required(),
        GOOGLE_token_uri:Joi.string().required(),
        GOOGLE_auth_pro_Cert:Joi.string().required(),
        GOOGLE_client_secret:Joi.string().required(),
        GOOGLE_secret:Joi.string().required(),
        GOOGLE_redirect_uri: Joi.string().required(),

    }).unknown();

const  { value: envVars, error} = envSchema.prefs({errors: {label :'key'}}).validate(process.env);

if(error){
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    firebaseConfig: {
        apiKey: envVars.FIREBASE_apiKey,
        authDomain: envVars.FIREBASE_authDomain,
        projectId: envVars.FIREBASE_projectId,
        storageBucket: envVars.FIREBASE_storageBucket,
        appId: envVars.FIREBASE_appId,
    },
    googleApi:{
        clientId: envVars.GOOGLE_client_id,
        projectId: envVars.GOOGLE_project_id,
        auth_uri: envVars.GOOGLE_auth_uri,
        token_uri: envVars.GOOGLE_token_uri,
        client_secret: envVars.GOOGLE_client_secret,
        auth_pro_cert: envVars.GOOGLE_auth_pro_Cert,
        session_secret: envVars.GOOGLE_secret,
        redirect_uri : envVars.GOOGLE_redirect_uri,
    }
}
export default config;