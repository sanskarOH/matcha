import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import router from '../api/index.js';
export default (app) => {
    app.get('/healthcheck', (_req,res)=>{
        const healthcheck = {
            uptime: process.uptime(),
            message: 'OK',
            timeStamp: Date.now(),
        };
        try{
            return res.status(200).json(healthcheck)
        }catch(e){
            return res.status(503).send();
        }
    });

    // app.use(cors());
    // app.use(helmet());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(router)
};