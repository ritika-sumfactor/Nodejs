import { executeQuery } from '../Database/connectDatabase';
import bcrypt from 'bcrypt';

export const userRegistration = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {

            let { f_name, l_name, email, password, token } = req.body
            console.log(req.body)

            //insert
            // const sqlQuery = `insert into user_table (f_name,l_name,email,password,token)values('${f_name}', '${l_name}', '${email}', '${password}', '${token}')`

            // const sqlQuery = `insert into user_table (f_name,l_name,email,password,token)values("Sakshi", "chaudhary", "sakshi@gmail.com", "sakshi@12345",67432)`


            //select
            // const sqlQuery = `select * from user_table`


            //update
            // const sqlQuery = `update user_table set f_name='Archana' where token=11223`


            //delete
            // const sqlQuery = `delete from user_table where token=67239`


            //join
            // const sqlQuery = `SELECT * FROM user_table as a join user_bankdetail as b on a.email= b.email;`



            //duplicacy
            const getRecord = `select * from user_table where email='${email}'`

            let resultset: any = await executeQuery(getRecord);

            if (resultset.length > 0) return res.status(400).send({ message: "User already registered please login" });
            



            //password bcrypt
            const salt = await bcrypt.genSalt();

            const hashedPassword = await bcrypt.hash(password, salt);
            

            const sqlQuery = `insert into user_table (f_name,l_name,email,password,token)values('${f_name}', '${l_name}', '${email}', '${hashedPassword}', '${token}')`

            let response = await executeQuery(sqlQuery)

            console.log("🚀 ~ file: userController.ts:13 ~ returnnewPromise ~ response:", response)

            return resolve(response);


            // return resolve("Hello world");
        } catch (error) {
            console.log("🚀 ~ file: userController.ts:19 ~ returnnewPromise ~ error:", error);
            return reject(error);
        }
    })
}




//userlogin :
export const userlogin = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {

            let { email, password } = req.body

            const getRecord = `select * from user_table where email='${email}'`

            let resulset: any = await executeQuery(getRecord)

            if (resulset.length == 0) return res.status(404).send({ message: "user Not Found Please Register and try again to login" })

            const match: boolean = await bcrypt.compare(password, resulset[0].password)

            if (match == false) return res.status(400).send("Entered Password is Incorrect")

            return resolve({ message: "User Sucessfully Logged in", data: resulset })

        } catch (error) {
            console.log("🚀 ~ file: userController.ts:44 ~ returnnewPromise ~ error:", error)
        }
    })
}
// jwttoken
let user: any = { email: email as string, password: password as string }

let acessToken = generateAcessToken(user)

console.log("🚀 ~ file: userController.ts:60 ~ returnnewPromise ~ acessToken:", acessToken)

let refreshToken = refreshAcessToken({ user: user })

console.log("🚀 ~ file: userController.ts:64 ~ returnnewPromise ~ refreshToken:", refreshToken)

return resolve({ message: "User Sucessfully Logged in", data: resulset, acessToken: acessToken, refreshToken: refreshToken })

catch (error) {
console.log("🚀 ~ file: userController.ts:44 ~ returnnewPromise ~ error:", error)
}


// get all user
export const getAllUser = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {

            const getRecord = `select * from user_table;`

            let resulset: any = await executeQuery(getRecord)

            return resolve(resulset)

        } catch (error) {
            console.log("🚀 ~ file: userController.ts:89 ~ returnnewPromise ~ error:", error)

        }
    })
}
// refresh token
export const refreshToken = async (req: any, res: any) => {

    return new Promise(async (resolve, reject) => {
        try {

            let { token, email } = req.body

            if (token == null) return res.sendStatus(401)

            const getRecord = `select * from user_table where email='${email}';`

            let resulset: any = await executeQuery(getRecord)
            console.log(resulset);

            if (resulset.length == 0) return res.sendStatus(403)

            jwt.verify(token, process.env.REFRESH_TOKEN_SECERET as string, (error: unknown, response: unknown) => {

                if (error) return res.sendStatus(403)

                const acessToken: string = generateAcessToken({ email: resulset[0].email, password: resulset[0].password })

                return resolve({ token: `Bearer ${acessToken}` })
            })
        } catch (error) {
            console.log("refresh token error", error)
            res.json({ error: error })
        }
    })
}