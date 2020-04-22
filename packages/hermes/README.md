<p align="center">
  <img width="200" height="200" src="https://i.imgur.com/BQ4A3bS.png">
</p>

# `@beatgig/hermes`

Easily send notifications to Slack, Email, or SMS.

## Installation

`yarn add @beatgig/hermes`

## Example

```javascript
import { sendNotification } from '@beatgig/hermes'

await sendNotification({
    channels: ['email', 'slack', 'sms'],
    email: {
      to: user.email,
      subject: 'Reset your Password',
      template: TEMPLATE_RESET_PASSWORD,
      templateData: {
        link,
      },
     apiKey: process.env.MAILGUN_API_KEY,
     domain: process.env.MAILGUN_DOMAIN
    },
   slack: {
      channel: 'testing',
      message: 'User #1234 has requested a password reset.'
      emoji: ':fire:',
      blocks: [...block data],
      token: process.env.SLACK_TOKEN
    },
   sms: {
     to: user.phone,
     message: 'A password reset request was received for your account. If this was not you, please contact us immediately.',
     accountSid: process.env.TWILIO_ACCOUNT_SID,
     token: process.env.TWILIO_TOKEN
   }
  })
```

## Tests

```bash
yarn test
```
