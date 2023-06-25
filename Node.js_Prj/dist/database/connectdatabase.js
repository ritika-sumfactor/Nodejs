"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeQuery = exports.connectNodeDatabase = void 0;
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "Momslove.78",
    database: "ritikasrivastva"
});
const connectNodeDatabase = () => {
    return new Promise((resolve, reject) => {
        try {
            connection.connect((error) => {
                if (error)
                    return reject(error);
                return resolve("Database connected successfully");
            });
        }
        catch (error) {
            console.log("🚀 ~ file: ConnectDatabase.ts:16 ~ returnnewPromise ~ error:", error);
        }
    });
};
exports.connectNodeDatabase = connectNodeDatabase;
const executeQuery = (sqlQuery) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(sqlQuery, (error, response) => {
                console.log("🚀 ~ file: ConnectDatabase.ts:31 ~ connection.query ~ error:", error);
                if (error)
                    return reject(error);
                return resolve(response);
            });
        }
        catch (error) {
            console.log("🚀 ~ file: ConnectDatabase.ts:32 ~ returnnewPromise ~ error:", error);
        }
    });
};
exports.executeQuery = executeQuery;