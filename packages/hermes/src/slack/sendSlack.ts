import { WebClient } from '@slack/web-api'
import { SlackNotificationTypes } from '../types/types'

const slack = new WebClient(process.env.SLACK_TOKEN)

/**
 *
 * @description
 *
 * Sends a Slack notification to a specified channel.
 *
 * @example
 *
 * ```
 * await sendNotification({
 *     channels: ['slack'],
 *     slack: {
 *       channel: 'testing',
 *       emoji: ':fire:',
 *       message: 'testing',
 *     },
 *   })
 * ```
 */
const sendSlack = async (options: SlackNotificationTypes) => {
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

export default sendSlack
