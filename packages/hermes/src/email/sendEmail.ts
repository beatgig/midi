import mailer from './mailer'
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
 *       to: user.email,
 *       subject: 'Reset your password',
 *       template: TEMPLATE_RESET_PASSWORD,
 *       templateData: {
 *         link,
 *       },
 *     },
 *   })
 * ```
 */
const sendEmail = async (options: EmailNotificationTypes) => {
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

export default sendEmail
