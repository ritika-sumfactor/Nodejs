export const userRegistration = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(req.query);
            return resolve("Hello world");
        } catch (error) {
            console.log("🚀 ~ file: userController.ts:19 ~ returnnewPromise ~ error:", error);
            return reject(error);
        }
    })
}