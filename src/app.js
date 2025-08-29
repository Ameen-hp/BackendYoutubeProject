import express, { json, urlencoded } from "express"
import cors from "cors"
let app  = express()
app.use(cors({
    origin:"https:www.google.com",

}))
app.use(express.json({
    limit: "10MB"
}))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.static("public"))

import userRouter from "./routes/user.router.js"
app.use("/api/v1/users",userRouter)

console.log("app run successfully")
export default app;