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

let apiClient: WebClient

const init: any = (slackToken: string) => {
  if (!apiClient) {
    apiClient = new WebClient(slackToken)
  }
  return apiClient
}

const sendSlack = async (options: SlackNotificationTypes) => {
  try {
    await apiClient.chat.postMessage({
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

export { sendSlack, init }
