"use client";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { createPublicClient } from "viem";
import { WagmiProvider } from "wagmi";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ToastAction } from "@/components/ui/toast";
import {
  mainnet,
  optimism,
  arbitrum,
  sepolia,
  baseSepolia,
  optimismSepolia,
  arbitrumSepolia,
} from "wagmi/chains";
import { createWalletClient, custom } from "viem";
import { http } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "OraQuest",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  chains: [optimismSepolia, baseSepolia],
  transports: {
    [baseSepolia.id]: http(
      "https://base-sepolia.g.alchemy.com/v2/POcytJtZjkzStgaMseE9BxpHexaC4Tfj"
    ),
  },
});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const walletClient = createWalletClient({
  chain: baseSepolia,
  transport: http(),
  // transport: custom(window.ethereum),
});

// useEffect(() => {
//   if (typeof window === "undefined") return;

//   const walletClient = createWalletClient({
//     chain: mainnet,
//     transport: custom(window.ethereum as WindowProvider),
//   });
//   setWalletClient(walletClient as WalletClient);
// }, []);
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(
    "https://base-sepolia.g.alchemy.com/v2/POcytJtZjkzStgaMseE9BxpHexaC4Tfj"
  ),
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#111111",
            accentColorForeground: "white",
            borderRadius: "medium",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
