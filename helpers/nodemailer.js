const nodemailer = require("nodemailer")

async function sendWelcomeEmail(toEmail, username) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: "Welcome to ffPath",
    html: `
      <h2>Selamat, ${username || "User"}!</h2>
      <p>Akun kamu sudah berhasil terbuat 🎉</p>
    `
  })
}

module.exports = { sendWelcomeEmail }