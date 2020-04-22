export type NotificationChannel = 'slack' | 'email' | 'sms'

export type SendNotificationTypes = {
  channels: NotificationChannel[]
  slack?: SlackNotificationTypes
  email?: EmailNotificationTypes
  sms?: SMSNotificationTypes
}

export type SlackNotificationTypes = {
  token?: string
  channel: string
  message: string
  emoji?: string
  blocks?: Array<any>
  attachments?: Array<any>
}

export type EmailNotificationTypes = {
  to: string
  subject: string
  template: string
  templateData?: Object
  apiKey: string
  domain: string
}

export type SMSNotificationTypes = {
  to: string
  message: string
  from: string
  accountSid: string
  token: string
}
