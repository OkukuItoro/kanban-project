"use client";

import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Kanban Project",
//   description: "Manage todos and collaborative projects",
// };

export default function RootLayout({ children }) {
  const [sideBarState, setSideBarState] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar
          sideBarState={sideBarState}
          handleSideBarState={setSideBarState}
        />
        <section className="flex_row">
          <SideBar
            sideBarState={sideBarState}
            handleSideBarState={setSideBarState}
          />
          <section className="w-[100%] lg:w-[82.6%] lg:ml-auto">
            {children}
          </section>
        </section>
      </body>
    </html>
  );
}
