
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Test route to verify API is working
  app.get("/api/test", (req, res) => {
    res.json({ 
      message: "API is working!", 
      timestamp: new Date().toISOString(),
      env: {
        hasTelegramToken: !!process.env.TELEGRAM_TOKEN,
        hasTelegramChatId: !!process.env.TELEGRAM_CHAT_ID
      }
    });
  });
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Contact form submitted:", req.body);
      
      const { name, phone, institution, message } = req.body;

      // Validate required fields
      if (!name || !phone || !institution || !message) {
        return res.status(400).json({ 
          error: "All fields are required",
          missing: { name: !name, phone: !phone, institution: !institution, message: !message }
        });
      }

      const text = `Name: ${name}\nNumber: ${phone}\nInstitution: ${institution}\nMessage: ${message}`;
      const token = process.env.TELEGRAM_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;
      
      // Check if environment variables are set
      if (!token || !chatId) {
        console.error("Missing environment variables:", { 
          hasToken: !!token, 
          hasChatId: !!chatId 
        });
        return res.status(500).json({ 
          error: "Server configuration error",
          details: "Missing Telegram configuration"
        });
      }

      console.log("Sending message to Telegram...");
      
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: text }),
        }
      );

      const data = await telegramResponse.json();
      console.log("Telegram API response:", data);

      if (!telegramResponse.ok) {
        console.error("Telegram API error:", data);
        return res.status(500).json({ 
          error: "Failed to send message",
          telegramError: data 
        });
      }

      console.log("Message sent successfully!");
      res.json({ success: true, data }); // forward real Telegram response
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
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
