import "fumadocs-ui/style.css";
import "./globals.css";

import { Banner } from "fumadocs-ui/components/banner";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>vinext docs</title>
        <meta
          name="description"
          content="Documentation for vinext — a Vite plugin that reimplements Next.js for Cloudflare Workers"
        />
      </head>
      <body>
        {/* <Banner>Experimental</Banner> */}
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
