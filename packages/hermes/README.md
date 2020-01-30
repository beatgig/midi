<p align="center">
  <img width="200" height="200" src="https://i.imgur.com/BQ4A3bS.png">
</p>

# `@beatgig/hermes`

Easily send notifications to Slack, Email, or SMS.

## Installation

`yarn add @beatgig/hermes`

## Example

```javascript
await sendNotification({
    channels: ['email', 'slack', 'sms'],
    email: {
      to: user.email,
      subject: 'Reset your password',
      template: TEMPLATE_RESET_PASSWORD,
      templateData: {
        link,
      },
    },
   slack: {
      channel: 'testing',
      message: 'User #1234 has requested a password reset.'
      emoji: ':fire:',
      blocks: [...block data],
    },
   sms: {
     to: user.phone,
     message: 'A password reset request was received for your account.'
   }
  })
```

## Tests

```bash
yarn test
```
