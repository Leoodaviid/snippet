"use client";
import React, { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import ConfigProvider from "@/app/providers/config";
import ThemeProvider from "@/app/providers/theme";
import { Hydration } from "../components/Hydration";

function Providers({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <ConfigProvider>
        <ThemeProvider attribute="class">
          <Hydration>{children}</Hydration>
        </ThemeProvider>
      </ConfigProvider>
    </ClerkProvider>
  );
}

export default Providers;
