"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/app/Components/navigasi/navbar.jsx";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        </head>
        <SessionProvider>
          <body
            className="overflow-x-hidden bg-primary_color"
            suppressHydrationWarning={true}
          >
            <Navbar />
            {children}
            <Toaster
              containerStyle={{ accentColor: "black", color: "white" }}
              position="top-right"
            />
            <SpeedInsights />
          </body>
        </SessionProvider>
      </html>
    </QueryClientProvider>
  );
}
