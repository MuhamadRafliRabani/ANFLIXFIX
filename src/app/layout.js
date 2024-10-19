"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import Navbar from "./Components/Navigasi/navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
          <body className="overflow-x-hidden" suppressHydrationWarning={true}>
            {/* <Navbar /> */}
            {children}
            <div>
              <Toaster
                containerStyle={{ accentColor: "black", color: "white" }}
                position="top-right"
              />
            </div>
          </body>
        </SessionProvider>
      </html>
    </QueryClientProvider>
  );
}
