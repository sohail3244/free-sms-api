import express from "express";

import {
  sendSMS,
  getSMSStatus,
} from "../controllers/sms.controller.js";

const router = express.Router();

// Send SMS
router.post("/send", sendSMS);

// SMS service status
router.get("/status", getSMSStatus);

export default router;