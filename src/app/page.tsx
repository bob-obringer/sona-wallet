"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePrivy } from "@privy-io/react-auth";

export default function Home() {
  const { ready, login, authenticated, exportWallet, logout } = usePrivy();
  const isLoggingInRef = useRef(false);
  const isExportingRef = useRef(false);

  // useEffect(() => {
  //   window.onunhandledrejection = (error) => {
  //     document.cookie.split(";").forEach(function (cookie) {
  //       document.cookie =
  //         cookie.split("=")[0] +
  //         "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  //     });
  //     localStorage.clear();
  //     sessionStorage.clear();
  //     setTimeout(() => {
  //       window.location.reload();
  //     });
  //   };
  //   return () => {
  //     window.onunhandledrejection = null;
  //   };
  // }, [exportWallet, login]);

  useEffect(() => {
    if (!ready) return;

    if (authenticated) {
      if (isExportingRef.current) return;
      isExportingRef.current = true;
      void exportWallet();
      return;
    }

    if (!isLoggingInRef.current) {
      isLoggingInRef.current = true;
      login();
      return;
    }
  }, [authenticated, ready, login, exportWallet, logout]);

  return null;
}
