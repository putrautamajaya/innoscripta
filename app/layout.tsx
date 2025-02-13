"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./globals.css";

import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div suppressHydrationWarning>
          <QueryClientProvider client={queryClient}>
            <MantineProvider>{children}</MantineProvider>
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
