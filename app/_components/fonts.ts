import { Roboto, Roboto_Mono } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const robotoMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
