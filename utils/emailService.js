import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

/**
 * Sends a verification code to the email.
 * @param {string} email - Recipient email
 * @param {string} code - Verification code
 */
export const sendVerificationEmail = async (email, code) => {
	await transporter.sendMail({
		from: `"QuizTime" <${process.env.SMTP_USER}>`,
		to: email,
		subject: "Your Verification Code",
		html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Welcome to QuizTime!</h2>
                <p>Your verification code is:</p>
                <h1 style="color: #4CAF50; letter-spacing: 5px;">${code}</h1>
                <p>This code expires in 5 minutes.</p>
            </div>
        `,
	});
};
