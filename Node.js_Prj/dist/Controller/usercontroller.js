"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegistration = void 0;
const connectDatabase_1 = require("../Database/connectDatabase");
const userRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { f_name, l_name, email, password, token } = req.body;
            console.log(req.body);
            // INSERT :
            // const sqlQuery = `insert into user_table (f_name,l_name,email,password,token)values(${f_name}, ${l_name}, ${email}, ${password}, ${token})`;
            // SELECT :
            // const sqlQuery = `select * from user_table`
            // UPDATE :
            // const sqlQuery = `update user_table set f_name='Archana' where token=11223`
            // DELETE :
            // const sqlQuery = `delete from user_table where token=11223`
            // JOIN :
            // const sqlQuery = `SELECT * FROM user_table as a join user_bankdetail as b on a.email= b.email;`
            let response = yield (0, connectDatabase_1.executeQuery)(sqlQuery);
            console.log("🚀 ~ file: userController.ts:13 ~ returnnewPromise ~ response:", response);
            return resolve(response);
            // return resolve("Hello world");
        }
        catch (error) {
            console.log("🚀 ~ file: userController.ts:19 ~ returnnewPromise ~ error:", error);
            return reject(error);
        }
    }));
});
exports.userRegistration = userRegistration;