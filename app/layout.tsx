import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import React from "react";
import { ToastContainer } from "react-toastify";

import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import UserContextProvider from "@/context/UserDetailsContextProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <UserContextProvider>
            <div className="relative flex flex-col h-screen">
              <ToastContainer />
              {/* <Navbar /> */}
              <main className="container mx-auto max-w-5xl flex-grow lg:p-10 p-5">
                {children}
              </main>
              <div>
                <Footer />
              </div>
            </div>
          </UserContextProvider>
        </Providers>
      </body>
    </html>
  );
}
