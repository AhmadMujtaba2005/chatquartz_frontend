import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Outfit } from "next/font/google";

export const metadata = {
  title: {
    default: "chatquartz — AI-Powered Chatbots for Business Growth",
    template: "%s | chatquartz",
  },
  description:
    "Turn casual visitors into loyal customers. Automate support, capture leads instantly, and drive 24/7 revenue with intelligent conversational AI.",
  openGraph: {
    title: "chatquartz — AI-Powered Chatbots for Business Growth",
    description:
      "Turn casual visitors into loyal customers. Automate support, capture leads instantly, and drive 24/7 revenue with intelligent conversational AI.",
    siteName: "chatquartz",
    type: "website",
  },
};

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="font-sans antialiased text-gray-900" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;