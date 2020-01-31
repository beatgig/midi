import nodemailer from 'nodemailer'
import { transport as mg } from 'nodemailer-mailgun-transport'

/**
 * @description
 * Handles sending an email via the Mailgun API.
 */

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
}

const mailer = nodemailer.createTransport(mg(auth))

export default mailer
