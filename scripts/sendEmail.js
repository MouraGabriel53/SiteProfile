const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config({ path: "./.env" })

const app = express()

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    credentials: true,
  })
)

app.use(express.json())

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body

  main(name, email, message)
    .then(() => {
      res.status(200).send("E-mail enviado com sucesso!")
    })
    .catch((error) => {
      console.error(error)
      res.status(500).send("Falha ao enviar e-mail.")
    })
})

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000")
})

const HOST = process.env.HOST
const PORT = process.env.PORT
const USER = process.env.USER
const PASS = process.env.PASS

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
  auth: {
    user: USER,
    pass: PASS,
  },
})

async function main(name, email, message) {
  const info = await transporter.sendMail({
    from: USER,
    to: USER,
    subject: "Requisição pelo Website",
    text: `Name: ${name}\nE-mail: ${email}\nMessage: ${message}`,
  })

  console.log("Message sent: %s", info.messageId)
}
