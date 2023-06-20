"use client";

import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Loading from "@/components/Loading";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Kanban Project",
//   description: "Manage todos and collaborative projects",
// };

export default function RootLayout({ children }) {
  const [sideBarState, setSideBarState] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </body>
    </html>
  );
}
