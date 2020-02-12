import { sendEmail } from './email'
import { slackNotifier } from './slack/'
import { smsNotifier } from './sms'

import {
  SendNotificationTypes,
  SlackNotificationTypes,
  EmailNotificationTypes,
  SMSNotificationTypes,
} from './types/types'
import { CHANNEL_SLACK, CHANNEL_EMAIL, CHANNEL_SMS } from './constants/channels'

/**
 * @description
 * Utility class for sending a notification
 * across multiple services.
 *
 * @example
 * ```
 * let token = process.env.SLACK_TOKEN
 *
 * await sendNotification({
 *     channels: ['email', 'slack', 'sms'],
 *     email: {
 *       to: user.email,
 *       subject: 'Reset your Password',
 *       template: TEMPLATE_RESET_PASSWORD,
 *       templateData: {
 *         link,
 *       },
 *     },
 *    slack: {
 *       token
 *       channel: 'testing',
 *       message: 'User #1234 has requested a password reset.'
 *       emoji: ':fire:',
 *       blocks: [...block data],
 *     },
 *    sms: {
 *      to: user.phone,
 *      message: 'A password reset request was received for your account. If this was not you, please contact us immediately.'
 *    }
 *   })
 * ```
 */
const sendNotification = async (options: SendNotificationTypes) => {
  const handleChannel = {
    slack: async (options: SlackNotificationTypes) => {
      const slack = new slackNotifier(options)
      await slack.sendSlack(options)
    },
    email: async (options: EmailNotificationTypes) => {
      await sendEmail(options)
    },
    sms: async (options: SMSNotificationTypes) => {
      const sms = new smsNotifier(options)

      await sms.sendSms(options)
    },
  }

  options.channels.forEach((channel) => {
    switch (channel) {
      case CHANNEL_SLACK:
        handleChannel.slack(options.slack)
        break
      case CHANNEL_EMAIL:
        handleChannel.email(options.email)
        break
      case CHANNEL_SMS:
        handleChannel.sms(options.sms)
        break
    }
  })
}

export default sendNotification
