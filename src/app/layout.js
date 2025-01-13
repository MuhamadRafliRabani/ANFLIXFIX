"use client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Navbar from "@/app/Components/navbar.jsx";
import axios from "axios";

const queryClient = new QueryClient();

async function fetchSession() {
  const { data, error } = await axios.get("/api/auth/session");
  if (error) throw new Error("Failed to fetch session");
  return data;
}

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" type="image/x-icon" />
          <title>Unoffcial Mal Library</title>
        </head>
        <body className="bgyell overflow-x-hidden bg-primary_color">
          <SessionProvider>
            <Navbar />
            <MainContent children={children} />
            <SpeedInsights />
          </SessionProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}

function MainContent({ children }) {
  const { data: session, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
  });

  return <>{children}</>;
}
