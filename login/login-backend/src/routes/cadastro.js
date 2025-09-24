import express from "express"
import User from "../models/User.js"
import bcrypt from "bcrypt"

const saltRounds = 10

const router = express.Router()

router.post("/api/cadastro", async (req, res) => {
    try {
        const { nome, email, senha } = req.body

        const existe = await User.findOne({ email })
        if (existe) {
            res.status(400).json({ erro: "Esse email já foi cadastrado" })
        }

        const hashSenha = await bcrypt.hash(senha, saltRounds)

        const novoUser = new User({ nome, email, senha: hashSenha })

        await novoUser.save()

        res.status(201).json({
            msg: "Usuário adicionado com sucesso",
            usuario: novoUser
        })
    }
    catch (err) {
        res.status(500).json({
            erro: "Erro ao tentar cadastrar novo usuário",
            details: err.message
        })
    }
})

export default router