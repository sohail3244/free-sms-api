import {
  sendSMSService,
  getSMSServiceStatus,
} from "../services/sms.service.js";

export const sendSMS = async (req, res) => {
  try {
    const { to, message } = req.body;

    // Validation
    if (!to) {
      return res.status(400).json({
        success: false,
        message: "Recipient mobile number is required",
      });
    }

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "SMS message is required",
      });
    }

    // Validate mobile number
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(to)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Indian mobile number",
      });
    }

    // Message length
    if (message.length > 160) {
      return res.status(400).json({
        success: false,
        message: "SMS message cannot exceed 160 characters",
      });
    }

    const result = await sendSMSService({
      to,
      message,
    });

    return res.status(200).json({
      success: true,
      message: "SMS request processed successfully",
      data: result,
    });
  } catch (error) {
    console.error("SEND SMS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to send SMS",
    });
  }
};

export const getSMSStatus = async (req, res) => {
  try {
    const result = await getSMSServiceStatus();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("SMS STATUS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Unable to get SMS status",
    });
  }
};