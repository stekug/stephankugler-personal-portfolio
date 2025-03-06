"use client";

import { sendMessage } from "../_lib/actions";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialState,
  );

  console.log("mesage:", state);
  console.log("formAction:", formAction);
  console.log("pending:", isPending);

  const inputStyles =
    "bg-primary-5 p-2 border border-accentPink-1 rounded-md shadow-md focus:border-accentGreen-1 focus:outline-none focus:ring-0";

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
          <input id="name" className={inputStyles} name="name" type="text" />
          <label htmlFor="email">Your E-Mail:</label>
          <input id="email" className={inputStyles} name="email" type="email" />
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            className={inputStyles}
            rows={5}
            name="message"
          />
          <p aria-live="polite">{state?.message}</p>
          <button
            disabled={isPending}
            type="submit"
            className="mt-2 w-full self-center rounded-lg bg-accentGreen-1 py-2 text-xl font-bold text-primary-2 shadow-lg transition-all duration-300 hover:bg-accentPink-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
