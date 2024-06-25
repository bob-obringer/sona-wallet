"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { ReactNode } from "react";

export function PrivyContextProvider({ children }: { children: ReactNode }) {
  return (
    <PrivyProvider
      appId="clv1galje0d5jvg84qal84z92"
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
