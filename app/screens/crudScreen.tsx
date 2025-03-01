import React from "react";
import { ItemProvider } from "@/components/ui/ItemContext";
import HomeScreen from "@/components/ui/HomeScreen";

export default function App() {
  return (
    <ItemProvider>
      <HomeScreen />
    </ItemProvider>
  );
}
