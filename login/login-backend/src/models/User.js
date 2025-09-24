import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "O username não pode estar vazio"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "O email não pode estar vazio"],
            unique: true,
            lowercase: true,
            trim: true
        },
        senha: {
            type: String,
            required: [true, "A senha não pode estar vazia"],
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema)

export default User