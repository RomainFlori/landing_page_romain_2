/* eslint-disable prefer-template */
/**
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */

import {NextResponse} from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
	host: "mail.gandi.net",
	port: 587,
	secure: false,
	auth: {
		user: "",
		pass: "",
	},
})

export async function POST(request) {
	try {
		const {firstName, lastName, email, phone, country, job, company} = await request.json()

		const mailOption = {
			from: email,
			to: "",
			cc: "",
			subject: "Demande de démo",
			html: ``,
		}

		await transporter.sendMail(mailOption)

		return NextResponse.json({message: "Email Sent Successfully"}, {status: 200})
	} catch (error) {
		return NextResponse.json({message: "Failed to Send Email :" + error}, {status: 500})
	}
}
