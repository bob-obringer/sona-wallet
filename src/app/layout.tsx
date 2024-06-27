import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrivyProvider } from "@privy-io/react-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sona Wallet Export",
  description: "Sona Wallet Export",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrivyProvider
          appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
          config={{
            appearance: { theme: "dark" },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
