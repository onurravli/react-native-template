import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import "@/global.css";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </GluestackUIProvider>
  );
}
