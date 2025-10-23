import express from 'express';
import config from './config/config.js';
import Loaders from './loader/index.js';

let server;
async function start() {
    const app = express();
    await Loaders(app);

    server = app
                .listen(config.port, () => {
                    console.log(`The application is running on ${config.port}`);

                })
}

const exitHandler = () => {
    if(server){
        server.closed(()=> {
            console.log('Server Closed');
            process.exit(1);
        })
    }else{
        process.exit(1)
    }
}

const unexpectedErrorHandler = (error) => {
    console.error(error);
    exitHandler();
}

process.on('uncaughtException',unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

start();