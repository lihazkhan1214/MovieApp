'use client';
import React, { useEffect } from "react";
import Sidebar from "./@sidebar/page";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
 
}>) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // This code will only run on the client side
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/admin");
    }
  }, []);

  if (!mounted) {
    return null;
  } else {
    return (
      <html lang="en">
        <body className={` flex`}>
          <div className="fixed z-40 top-0 left-0 w-64 h-full">
            <Sidebar />
          </div>
          <div className="md:ml-64 flex-1 ">{children}</div>
        </body>
      </html>
    );
  }
}
