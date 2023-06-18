import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban Project",
  description: "Manage todos and collaborative projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <section className="flex_row">
          <SideBar />
          <section className="w-[82.6%]">{children}</section>
        </section>
      </body>
    </html>
  );
}
