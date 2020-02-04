const sendNotification = jest.fn();

describe("Notification tests", () => {
  test("confirms that an email notification has been sent", async () => {
    await sendNotification({
      channels: ["email"],
      email: {
        to: "some.user@example.com",
        subject: "Test Message",
        template: "sampleTemplate",
        templateData: {
          firstName: "Test"
        }
      }
    });

    expect(sendNotification).toHaveBeenCalled();
  });

  test("confirms that a slack notification has been sent", async () => {
    await sendNotification({
      channels: ["slack"],
      slack: {
        channel: "testing",
        emoji: ":fire:",
        message: "testing"
      }
    });

    expect(sendNotification).toHaveBeenCalled();
  });

  test("confirms that an sms notification has been sent", async () => {
    await sendNotification({
      channels: ["sms"],
      sms: {
        to: "1234567890",
        message: "testing"
      }
    });
  });
});
