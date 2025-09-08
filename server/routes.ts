
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    const { name, phone, institution, message } = req.body;

    const text = `Name: ${name}\nNumber: ${phone}\nInstitution: ${institution}\nMessage: ${message}`;
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text:text }),
      }
    );

    const data = await telegramResponse.json();
    console.log("Telegram API response:", data);

    if (!telegramResponse.ok) {
      return res.status(500).json({ error: data });
    }

    res.json(data); // forward real Telegram response
  });

  // Get contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch contacts",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
