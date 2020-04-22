import { Twilio } from 'twilio'
import { SMSNotificationTypes } from '../types/types'

/**
 *
 *
 * @description
 * Sends an SMS out to the specified number with a message.
 *
 * @example
 *
 * ```
 *   await sendNotification({
 *     channels: ['sms'],
 *     sms: {
 *       to: '1234567890',
 *       from: process.env.TWILIO_FROM_NUMBER,
 *       message: 'testing',
 *       accountSid: process.env.TWILIO_ACCOUNT_SID,
 *       token: process.env.TWILIO_TOKEN
 *     },
 *   })
 * ```
 */

let twilio = undefined
class SmsNotifier {
  options: object
  accountSid: string
  token: string

  constructor(options: SMSNotificationTypes) {
    this.accountSid = options.accountSid
    this.token = options.token

    if (!twilio) {
      twilio = new Twilio(this.accountSid, this.token)
    }
  }

  sendSms = async (options: SMSNotificationTypes) => {
    try {
      await twilio.messages.create({
        to: options.to,
        from: options.from,
        body: options.message,
      })
    } catch (error) {
      throw new Error(`Failed to send SMS notification: ${error}`)
    }
  }
}

export default SmsNotifier
