import { WebClient } from '@slack/web-api'
import { SlackNotificationTypes } from '../types/types'

/**
 *
 * @description
 *
 * Sends a Slack notification to a specified channel.
 *
 * @example
 *
 * ```
 * let token = process.env.SLACK_TOKEN
 *
 * await sendNotification({
 *     channels: ['slack'],
 *     slack: {
 *       token,
 *       channel: 'testing',
 *       emoji: ':fire:',
 *       message: 'testing',
 *     },
 *   })
 * ```
 */

let slack = undefined
class slackNotifier {
  options: object
  token: string

  constructor(options: SlackNotificationTypes) {
    this.options = options
    this.token = options.token

    if (!slack) {
      slack = new WebClient(this.token)
    }
  }

  sendSlack = async (options) => {
    try {
      await slack.chat.postMessage({
        channel: options.channel,
        ...(options.message && { text: options.message }),
        ...(options.blocks && { blocks: options.blocks }),
        ...(options.emoji && { icon_emoji: options.emoji }),
        ...(options.attachments && {
          attachments: options.attachments,
        }),
      })
    } catch (error) {
      throw new Error(`Slack notification failed to send: ${error}`)
    }
  }
}

export default slackNotifier
