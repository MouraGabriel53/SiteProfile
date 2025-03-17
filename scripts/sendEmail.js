const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config()

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    credentials: true,
  })
)

app.use(express.json())

import { HOST, PORT, USER, PASS } from "dotenv"

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
  auth: {
    user: USER,
    pass: PASS,
  },
})

async function main() {
  const info = await transporter.sendMail({
    from: USER,
    to: email,
    subject: "Requisição pelo Website",
    text: `Name: ${name} E-mail: ${email} Message: ${message}`,
  })

  console.log("Message sent: %s", info.messageId)
}

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body

  main(name, email, message)
    .then(() => {
      res.status(200).send("E-mail enviado com sucesso!")
    })
    .catch((error) => {
      console.error(error)
      res.status(500).send("Falha ao enviar e-mail!")
    })
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})
