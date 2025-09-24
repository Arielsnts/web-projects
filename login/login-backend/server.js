import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import cadastro from "./src/routes/cadastro.js"
import login from "./src/routes/login.js"
import user from "./src/routes/user.js"

dotenv.config({ path: './secret.env' })

const app = express()

app.use(express.json())

app.use(cookieParser())

app.use(cors({
    origin: "https://login-nine-kappa.vercel.app/",
    credentials: true
}))

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.status(200).send("API rodando!")
})

app.use(cadastro)
app.use(login)
app.use(user)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado!"))
    .catch((err) => console.log(err))

app.listen(PORT, () => console.log("Rodando na porta 3000!"))