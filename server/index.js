import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { sendMail } from './mailer.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, message } = req.body

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    // Email to user
    await sendMail({
      to: email,
      subject: 'Welcome to SolarJunction ☀️',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#F4F7F4;border-radius:12px;">
          <h1 style="color:#1E5939;">Hello ${name}! 👋</h1>
          <p style="color:#22382B;">Thank you for reaching out to <strong>SolarJunction</strong>.</p>
          <p style="color:#22382B;">We have received your enquiry and our team will contact you within <strong>24 hours</strong>.</p>
          <div style="background:#E1E6E1;padding:20px;border-radius:8px;margin:24px 0;">
            <h3 style="color:#1E5939;margin:0 0 12px;">Your Enquiry Details:</h3>
            <p style="margin:4px 0;color:#22382B;">📞 Phone: ${phone}</p>
            <p style="margin:4px 0;color:#22382B;">✉️ Email: ${email}</p>
            <p style="margin:4px 0;color:#22382B;">💬 Message: ${message}</p>
          </div>
          <p style="color:#22382B;">Meanwhile feel free to WhatsApp us for faster response.</p>
          <a href="https://wa.me/919876543210" style="display:inline-block;background:#1E5939;color:white;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:bold;margin-top:16px;">
            💬 Chat on WhatsApp
          </a>
          <hr style="margin:32px 0;border:1px solid #E1E6E1;"/>
          <p style="color:#22382B;font-size:12px;">SolarJunction — Powering the Green Revolution<br/>solarjunctionllp@gmail.com</p>
        </div>
      `
    })

    // Email to owner
    await sendMail({
      to: process.env.OWNER_EMAIL,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#F4F7F4;border-radius:12px;">
          <h1 style="color:#1E5939;">New Lead! 🎉</h1>
          <div style="background:#E1E6E1;padding:20px;border-radius:8px;">
            <p style="margin:4px 0;color:#22382B;"><strong>Name:</strong> ${name}</p>
            <p style="margin:4px 0;color:#22382B;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin:4px 0;color:#22382B;"><strong>Email:</strong> ${email}</p>
            <p style="margin:4px 0;color:#22382B;"><strong>Message:</strong> ${message}</p>
          </div>
        </div>
      `
    })

    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(5000, () => console.log('Server running on port 5000'))