import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AOSInit } from "@/components/aos";

const raleway = Raleway({ subsets: ["latin"] });
const neue = localFont({
  src: [
    {
      path: "./fonts/NeueMachina-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue",
});

export const metadata: Metadata = {
  title: "DotProLabs Assignment",
  description: "Assignment for DotProLabs by Tushar Daiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${raleway.className} ${neue.variable} bg-primaryBg text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
