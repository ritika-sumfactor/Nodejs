"use strict";
// import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
//=============================== FILE SYSTEM ===============================:- 
// import { createServer, IncomingMessage, ServerResponse } from "http";
// import * as fs from 'fs';
// import * as url from "url";
// import * as path from 'path';
// const port = 8080;
// const server = createServer((request: IncomingMessage, response: ServerResponse) => {
//     console.log("🚀 ~ file: app.ts:60 ~ server ~ request:", request)
//     if (request.url == "/name") {
//         if (request.method === "GET") {
//             // response.end("hello world");
//             // Create files:-
//             fs.open('mynewfile2.txt', 'w', function (err, file) {
//                 if (err) throw err;
//                 console.log('File open');
//             });
//             //Update file:
//             fs.appendFile('mynewfile.txt', ' Append content', function (err) {
//                 if (err) throw err;
//                 console.log('File append');
//             });
//             fs.writeFile("myFile.txt", "This is node js session", function (err) {
//                 if (err) throw err;
//                 console.log("File written Sucessfully ")
//             });
//             // Read file:
//             const readfile = fs.readFileSync(path.join(__dirname, 'myFile.txt'), { encoding: 'utf-8' })
//             console.log(readfile);
//             // Delete files:
//             // fs.unlink('mynewfile3.txt', function (err) {
//             //     if (err) throw err;
//             //     console.log('File deleted!');
//             // });
//             //Rename file:
//             // fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//             //     if (err) throw err;
//             //     console.log('File Renamed!');
//             // });
//             var adr = 'http://localhost:8080/default.htm?year=2020&month=November&name=ritika&tech=fullstack';
//             var q = url.parse(adr, true);
//             console.log("🚀 ~ file: app.ts:105 ~ server ~ q:", q)
//         } else {
//             response.end("Worng method for this api");
//         }
//     }
// });
// server.listen(port, () => console.log(`server is listining at port ${port}`));
// Events :- 
//to generate events:-
// import { EventEmitter } from 'events';
// const eventBroker = new EventEmitter();
// eventBroker.on('event-1', () => {
//     console.log("event 1 is fired");
// })
// eventBroker.on('checkPage', (statusCode, msg) => {
//     console.log(`status code is ${statusCode} and the page is ${msg}`);
// })
// eventBroker.emit('event-1');
// eventBroker.emit('checkPage', 200, 'ok');
// MULTER :
// Upload files:-
// import express, { Request, Response, NextFunction, Application } from 'express';
// import multer from 'multer';
// const app: Application = express();
// const port = 9800;
// const storage = multer.diskStorage({
//     destination(req, file, callback) {
//         callback(null, './src')
//     },
//     filename(req, file, callback) {
//         callback(null, file.originalname)
//     },
// });
// const upload = multer({ storage: storage });
// app.get('/uploadFile', upload.single('myFile'), (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const file = req.file;
//         console.log("🚀 ~ file: app.ts:46 ~ app.get ~ file:", file)
//         res.status(200).send("file is sucessfully saved")
//     } catch (error) {
//         console.log("🚀 ~ file: app.ts:51 ~ app.get ~ error:", error)
//     }
// });
// app.listen(port, () => console.log(`server is listining at port ${port}`));
// EMAIL :
// import express, { Request, Response, NextFunction } from 'express';
// import nodemailer from 'nodemailer';
// const port = 9800;
// const app = express();
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: { user: "ritika.sumfactor@gmail.com", pass: "uticbdmqwidwlkhw" }
// });
// let mailOptions = {
//     from: "ritika.sumfactor@gmail.com",
//     to: "ritikasrivastava5439@gmail.com",
//     subject: "NODEJS",
//     text: "THIS IS NODEJS TUTORIAL"
// }
// app.get('/sendEmail', (req: Request, res: Response, next: NextFunction) => {
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) return res.status(500).send({ error: error })
//         console.log("🚀 ~ file: app.ts:80 ~ transporter.sendMail ~ info:", info)
//         return res.status(200).send({ info: info });
//     });
// });
// app.listen(port, () => console.log(`server is listining at port ${port}`));
//SQL workbench:
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const connectDatabase_1 = require("../src/Database/connectDatabase");
const routes_1 = __importDefault(require("../src/Routes/routes"));
const port = Number(process.env.PORT);
app.use(express_1.default.json());
app.use('/', routes_1.default);
(0, connectDatabase_1.connectNodeDatabase)().then((response) => {
    console.log(response);
    const server = app.listen(port, () => console.log(`server is running at port http://localhost:${port}`));
}).catch((error) => {
    console.log("🚀 ~ file: app.ts:102 ~ connectNodeDatabase ~ error:", error);
});