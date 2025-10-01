const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail details
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,  // you’ll get messages in your inbox
      subject: "📩 New Contact Form Submission",
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "✅ Message sent successfully!" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ success: false, message: "❌ Failed to send message" });
  }
};



