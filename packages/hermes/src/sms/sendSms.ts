import { Twilio } from "twilio";

type SMSTypes = {
  to: string;
  message: string;
};

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
 *     },
 *   })
 * ```
 */
const sendSms = async (options: SMSTypes) => {
  const accountSid = process.env.TWLIO_ACCOUNT_SID;
  const token = process.env.TWILIO_TOKEN;

  const twilio = new Twilio(accountSid, token);

  try {
    await twilio.messages.create({
      to: options.to,
      from: process.env.TWILIO_FROM_NUMBER,
      body: options.message
    });
  } catch (error) {
    throw new Error(`Failed to send SMS notification: ${error}`);
  }
};

export default sendSms;
