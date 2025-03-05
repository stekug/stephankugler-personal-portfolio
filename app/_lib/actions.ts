"use server";

import axios from "axios";

export async function sendMessage(formData: FormData): Promise<void> {
  console.log("Message received!");

  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log("Form Data:", rawFormData);

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
      console.log("Message sent successfully!");
    } else {
      console.log("Failed to send message!", response.data);
    }
  } catch (error) {
    console.error("Failed to send message:", error);
  }
}
