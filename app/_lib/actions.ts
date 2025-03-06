"use server";

import axios from "axios";

export async function sendMessage(prevState: unknown, formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const text = `
    New message from ${rawFormData.name}
    Email: ${rawFormData.email}
    Message: ${rawFormData.message}
    `;

  try {
    const response = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: text,
    });

    if (response.status === 200) {
      return { message: "message sent!" };
    } else {
      return { message: "message not sent!" };
    }
  } catch (error) {
    return { message: `Error, could not sent message, ${error}` };
  }
}
