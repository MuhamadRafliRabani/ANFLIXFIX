"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
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
        <SkeletonTheme baseColor="#3b3b3b" highlightColor="#525252">
          <body className="overflow-x-hidden" suppressHydrationWarning={true}>
            <Navbar />
            {children}
            <div>
              <Toaster
                containerStyle={{ accentColor: "black", color: "white" }}
                position="top-right"
              />
            </div>
          </body>
        </SkeletonTheme>
      </html>
    </QueryClientProvider>
  );
}
