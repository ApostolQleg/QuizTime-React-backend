import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * Verifies Google ID Token and returns the payload (user data).
 * @param {string} token - Google ID Token
 * @returns {Promise<Object>} - Payload (email, name, picture, sub, etc.)
 */
export const verifyGoogleToken = async (token) => {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: process.env.GOOGLE_CLIENT_ID,
	});
	return ticket.getPayload();
};
