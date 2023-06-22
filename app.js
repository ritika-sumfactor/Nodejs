"use strict";
// import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Server } from 'http';
// import createHttpError from 'http-errors';
// import { config } from 'dotenv';
// config();
// const app: Application = express()
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello from ts app');
// });
// app.use((req: Request, res: Response, next: NextFunction) => {
//     next(new createHttpError.NotFound())
// });
// const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//     res.status(err.status || 500);
//     res.send({
//         status: err.status || 500,
//         message: err.message,
//     })
// }
// app.use(errorHandler);
// const PORT: Number = Number(process.env.PORT) || 3000
// const server: Server = app.listen(PORT, () =>
//     console.log(server, `server is on port ${PORT}`));
const http_1 = require("http");
const fs = __importStar(require("fs"));
const url = __importStar(require("url"));
const port = 8080;
const server = (0, http_1.createServer)((request, response) => {
    console.log("🚀 ~ file: app.ts:60 ~ server ~ request:", request);
    if (request.url == "/name") {
        if (request.method === "GET") {
            // response.end("hello world");
            // Create files:-
            fs.open('mynewfile2.txt', 'w', function (err, file) {
                if (err)
                    throw err;
                console.log('File open');
            });
            //Update files:-
            fs.appendFile('mynewfile1.txt', ' Append content', function (err) {
                if (err)
                    throw err;
                console.log('File append');
            });
            fs.writeFile("myFile.txt", "This is node js session", function (err) {
                if (err)
                    throw err;
                console.log("File written Sucessfully ");
            });
            // Read files:-
            // fs.readFileSync(path.join(__dirname, 'myFile.txt'), { encoding: 'utf-8' })
            // Delete files:-
            fs.unlink('mynewfile3.txt', function (err) {
                if (err)
                    throw err;
                console.log('File deleted!');
            });
            //Rename files:-
            fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
                if (err)
                    throw err;
                console.log('File Renamed!');
            });
            var adr = 'http://localhost:8080/default.htm?year=2021&month=August&name=anjali&tech=fullstack';
            var q = url.parse(adr, true);
            console.log("🚀 ~ file: app.ts:105 ~ server ~ q:", q);
        }
        else {
            response.end("Worng method for this api");
        }
    }
});
server.listen(port, () => console.log(`server is listining at port ${port}`));
