import { sendEmail } from "./email";
import { sendSlack } from "./slack";
import { sendSms } from "./sms";

import {
  SendNotificationTypes,
  SlackNotificationTypes,
  EmailNotificationTypes,
  SMSNotificationTypes
} from "./types/types";
import {
  CHANNEL_SLACK,
  CHANNEL_EMAIL,
  CHANNEL_SMS
} from "./constants/channels";

/**
 * @description
 * Utility class for sending a notification
 * across multiple services.
 *
 * @example
 * ```
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
      await sendSlack(options);
    },
    email: async (options: EmailNotificationTypes) => {
      await sendEmail(options);
    },
    sms: async (options: SMSNotificationTypes) => {
      await sendSms(options);
    }
  };

  options.channels.forEach(channel => {
    switch (channel) {
      case CHANNEL_SLACK:
        handleChannel.slack(options.slack);
        break;
      case CHANNEL_EMAIL:
        handleChannel.email(options.email);
        break;
      case CHANNEL_SMS:
        handleChannel.sms(options.sms);
        break;
    }
  });
};

export default sendNotification;
