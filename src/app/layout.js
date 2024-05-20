import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "./Components/Navigasi/navbar";
import { UserProvider } from "./User/Is-User-Login";
import "./globals.css";

export const metadata = {
  title: "Anflix",
  description: "Web netflix versi anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SkeletonTheme baseColor="#3c3c3c" highlightColor="#525252">
        <body className={`overflow-x-hidden`} suppressHydrationWarning={true}>
          <Navbar />
          {children}
        </body>
      </SkeletonTheme>
    </html>
  );
}
