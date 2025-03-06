"use server";

import axios from "axios";

export async function sendMessage(prevState: unknown, formData: FormData) {
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
    // For testing purposes, we'll wait 3 seconds before returning the response
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Sending message...");
    const response = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: text,
    });

    // For testing purposes, we'll wait 3 seconds before returning the response
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    if (response.status === 200) {
      console.log("Message sent successfully!");
      return { message: "message sent!" };
    } else {
      console.log("Failed to send message!", response.data);
      return { message: "message not sent!" };
    }
  } catch (error) {
    console.error("Failed to send message:", error);
    return { message: "Error, could not sent message" };
  }
}
