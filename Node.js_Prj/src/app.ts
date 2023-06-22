// import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';

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

import { createServer, IncomingMessage, ServerResponse } from "http";

import * as fs from 'fs';

import * as url from "url";

import * as path from 'path';

const port = 8080;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    console.log("🚀 ~ file: app.ts:60 ~ server ~ request:", request)

    if (request.url == "/name") {
        if (request.method === "GET") {
            // response.end("hello world");

            // Create files:-
            fs.open('newfile2.txt', 'w', function (err, file) {
                if (err) throw err;
                console.log('File open');
            });

            //Update files:-
            fs.appendFile('newfile.txt', ' Append content', function (err) {
                if (err) throw err;
                console.log('File append');
            });

            fs.writeFile("File.txt", "This is node js session", function (err) {
                if (err) throw err;
                console.log("File written Sucessfully ")
            });

            // Read files:-
            // fs.readFileSync(path.join(__dirname, 'myFile.txt'), { encoding: 'utf-8' })

            // Delete files:-
            fs.unlink('newfile3.txt', function (err) {
                if (err) throw err;
                console.log('File deleted!');
            });

            //Rename files:-
            fs.rename('newfile1.txt', 'myrenamedfile.txt', function (err) {
                if (err) throw err;
                console.log('File Renamed!');
            });

            var adr = 'http://localhost:8080/default.htm?year=2021&month=August&name=anjali&tech=fullstack';

            var q = url.parse(adr, true);

            console.log("🚀 ~ file: app.ts:105 ~ server ~ q:", q)

        } else {
            response.end("Worng method for this api");
        }
    }
});

server.listen(port, () => console.log(`server is listining at port ${port}`));