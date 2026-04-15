import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pratik Kumar | Full Stack AI Engineer",
  description: "Specializing in GenAI, LangChain, RAG Pipelines, and LLM Systems.",
  openGraph: {
    title: "Pratik Kumar Portfolio",
    description: "Expertise in LLM Systems, Agentic AI, and Full Stack Development.",
    url: "https://my-portfolio-green-mu-65.vercel.app/", 
    images: ["https://your-site.vercel.app/og-image.png"],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratik Kumar Portfolio',
    description: 'Specializing in GenAI & Full Stack Systems',
    site: '@PratikK4887',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-accent-cyan/20`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

