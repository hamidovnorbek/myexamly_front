import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, institution, message } = req.body;
  const text = Name: ${name}\nNumber: ${phone}\nInstitution: ${institution}\nMessage: ${message};

  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  try {
    const telegramRes = await fetch(
      https://api.telegram.org/bot${token}/sendMessage,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );
    const data = await telegramRes.json();
    return res.status(telegramRes.ok ? 200 : 400).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to send message" });
  }
}