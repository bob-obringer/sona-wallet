"use client";

import { ReactNode, useEffect, useRef } from "react";
import { PrivyProvider, usePrivy } from "@privy-io/react-auth";

export function PrivyContextProvider({ children }: { children: ReactNode }) {
  return (
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
  );
}

export default function Home() {
  const { ready, login, authenticated, exportWallet, logout } = usePrivy();
  const isLoggingInRef = useRef(false);

  // show login dialog when we're ready
  useEffect(() => {
    if (!ready || !isLoggingInRef || authenticated) return;
    isLoggingInRef.current = true;
    login();
  }, [authenticated, ready, login, exportWallet, logout]);

  if (!ready) return null;

  // show the ui once we're ready
  return (
    <div className="h-svh w-full flex flex-col items-center justify-center gap-2">
      {!authenticated && (
        <button
          onClick={authenticated ? exportWallet : login}
          className="p-2 px-4 text-black bg-[#DAFE58]"
        >
          {authenticated ? "Export Wallet" : "Login"}
        </button>
      )}
      {authenticated && (
        <>
          <button
            onClick={exportWallet}
            className="w-40 p-2 px-4 text-black bg-[#DAFE58]"
          >
            Export Wallet
          </button>
          <button
            onClick={logout}
            className="w-40 p-2 px-4 text-gray-300 border border-gray-300"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
