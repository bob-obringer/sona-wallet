"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { ReactNode } from "react";

export function PrivyContextProvider({ children }: { children: ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        appearance: {
          theme: "dark",
          accentColor: "#DAFE58",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
