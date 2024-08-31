import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createTheme } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuel Track App",
  description: "Created by Davi Taveira",
};

createTheme({
  palette: {
    primary: {
      main: "#4894FE",
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
