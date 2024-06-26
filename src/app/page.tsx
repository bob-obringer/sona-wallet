"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { ready, login, authenticated, exportWallet, logout } = usePrivy();
  const isLoggingInRef = useRef(false);

  useEffect(() => {
    if (!ready || !isLoggingInRef) return;
    isLoggingInRef.current = true;
    login();
  }, [authenticated, ready, login, exportWallet, logout]);

  if (!ready) return null;

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
