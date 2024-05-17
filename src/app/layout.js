import Navbar from "./Components/Navigasi/navbar";
import { UserProvider } from "./User/Is-User-Login";
import "./globals.css";

export const metadata = {
  title: "ANFLIX",
  description: "Web netflix versi anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
