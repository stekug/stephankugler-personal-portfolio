"use client";

import toast from "react-hot-toast";
import { sendMessage } from "../_lib/actions";
import { useActionState, useEffect, useState } from "react";

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialState,
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const messageMaxLength = 360;
  const messageMinLength = 10;

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  const inputStyles =
    "bg-primary-5 p-2 border border-accentPink-1 rounded-md shadow-md focus:border-accentGreen-1 focus:outline-none focus:ring-0";

  useEffect(() => {
    if (state?.message === "message sent!") {
      toast.success("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } else if (state?.message === "message not sent!") {
      toast.error("Failed to send message, please try again!");
    } else if (state?.message === "Error, could not sent message") {
      toast.error("Error, could not sent message");
    }
  }, [state]);

  return (
    <div className="w-full max-w-2xl">
      <p>
        <span className="mb-4 block text-xl font-black uppercase tracking-wide text-accentPink-1">
          Contact me
        </span>
      </p>
      <div className="rounded-lg border border-accentPink-1">
        <p className="mt-4 px-4">
          If you have questions about my project, feel free to ask. I&apos;m
          always open to connect to new people and work opportunities.
        </p>
        <form
          className="flex flex-col justify-center gap-2 p-4"
          action={formAction}
        >
          <label htmlFor="name">Your Name:</label>
          <input
            required
            id="name"
            className={inputStyles}
            name="name"
            type="text"
            onChange={handleNameChange}
            value={name}
          />
          <label htmlFor="email">Your E-Mail:</label>
          <input
            required
            id="email"
            className={inputStyles}
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            className={inputStyles}
            rows={5}
            name="message"
            required
            maxLength={messageMaxLength}
            minLength={messageMinLength}
            onChange={handleMessageChange}
            value={message}
          />
          <p className="text-sm">
            <span
              className={`${message.length >= messageMaxLength - 40 ? "text-accentPink-1" : "text-accentGreen-1"} font-bold`}
            >
              {360 - message.length}
            </span>{" "}
            characters remaining
          </p>
          <button
            disabled={isPending}
            type="submit"
            className="mt-2 w-full self-center rounded-lg bg-accentGreen-1 py-2 text-xl font-bold text-primary-2 shadow-lg transition-all duration-300 hover:bg-accentPink-1 disabled:cursor-not-allowed disabled:bg-primary-5 disabled:text-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
