/**
 * ? Handle errors in Node/express
 * 
 * Ans:-- 
 * There Could be mutiple answers to it. But the most effective one that i also use
 * is explained below;
 *  1--making a separate class which extends the Error class and that class we can use throughout
 *     our application. 
 * 
 *  2--we can throw new Error with custom message
 * 
 *  3--we can make different folders like can break down the code so that coding mistakes would be less.
 *     eg; I can make repository where database query could be written and controllers where these queries
 *     would be used but between these two there could be one more folder Services which accept errors and
 *     send response/errors.
 * 
 *  4-- Async-Await usage with try-catch block also helps in good error handling as inside catch we can
 *      capture all errors
 *  
 *  5-- Error handling middlewares could be used-- app.use(error, req, res, next)
 *      as error handling middleware is for first handle error approach.
 * 
 * 
 */

const express = require("express");
const app = express();

app.get("/", async (_req, res) => {
    try {
        let data = await fetch("demo url");

        // error handling using async await -- try-catch
        // or you can throw error
        if(!data){
            throw new Error("Data is not found");
        }

        res.send(200).json({
            data,
            success: true
        })
    } catch (error) {
        // inside catch sending error to the client
        res.send(400).json({
            message: error.message,
            success: false
        })
    }
});

app.listen(6000, () => {
    console.log("Server is running on 6000");
})