export const sendSMSService = async ({ to, message }) => {
  console.log("=================================");
  console.log("SMS REQUEST");
  console.log("TO:", to);
  console.log("MESSAGE:", message);
  console.log("=================================");

  /*
    Actual SMS sending will be implemented here.

    Later this service can communicate with:

    1. Android SMS Gateway
    2. GSM Modem
    3. Your own SMS device
    4. Other SMS gateway
  */

  return {
    status: "QUEUED",
    to,
    message,
    messageId: `SMS-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
};

export const getSMSServiceStatus = async () => {
  return {
    provider: "SELF_HOSTED",
    status: "READY",
    smsGatewayConnected: false,
    message: "SMS gateway is not connected yet",
  };
};