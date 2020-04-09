import * as nodemailer from 'nodemailer'
import * as mg from 'nodemailer-mailgun-transport'
import { EmailNotificationTypes } from '../../src/types/types'

/**
 *
 * @description
 * Function to send our notification emails. These rely on
 * templates stored in MailGun which contain the majority of
 * the templating and styling, along with static text.
 *
 * Dynamic values such as reset tokens, etc are passed in the
 * `options.email.templateData` parameter as an object.
 *
 * @example
 * ```
 * await sendNotification(message, {
 *     channels: ['email'],
 *     email: {
 *       token
 *       to: user.email,
 *       subject: 'Reset your password',
 *       template: TEMPLATE_RESET_PASSWORD,
 *       templateData: {
 *         link,
 *       },
 *      apiKey: process.env.MAILGUN_API_KEY,
 *      domain: process.env.MAILGUN_DOMAIN
 *     },
 *   })
 * ```
 */

let mailer
class EmailNotifier {
  options: object
  apiKey: string
  domain: string

  constructor(options: EmailNotificationTypes) {
    this.apiKey = options.apiKey
    this.domain = options.domain

    this.options = {
      auth: {
        api_key: this.apiKey,
        domain: this.domain,
      },
    }
    if (!mailer) {
      mailer = nodemailer.createTransport(mg(this.options))
    }
  }

  sendEmail = async (options: EmailNotificationTypes) => {
    const auth = {
      auth: {
        apiKey: this.apiKey,
        domain: this.domain,
      },
    }

    try {
      await mailer.sendMail({
        from: 'hello@example.com',
        to: options.to,
        subject: options.subject,
        template: options.template,
        'h:X-Mailgun-Variables': JSON.stringify(options.templateData),
      })

      return 'Email notification sent successfully.'
    } catch (error) {
      throw new Error(`Email notification failed to send: ${error}`)
    }
  }
}

export default EmailNotifier
