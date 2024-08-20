"use client"

import { wagmiConfig } from "@/wagmi"
import { useMemo, ReactNode } from "react"
// import {
//     PhantomWalletAdapter,
//     SolflareWalletAdapter,
//     MathWalletAdapter,
//   } from "@solana/wallet-adapter-wallets";
//   import {
//     ConnectionProvider,
//     WalletProvider,
//   } from "@solana/wallet-adapter-react";
//   import { clusterApiUrl } from "@solana/web3.js";


// function App() {
//   return (

//   )
// }

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

const queryClient = new QueryClient()

// function App() {
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         {/** ... */}
//       </QueryClientProvider>
//     </WagmiProvider>
//   )
// }

export const Web3WalletProvider = ({ children }: { children: ReactNode }) => {
  // const wallets = useMemo(
  //   () => [
      // new PhantomWalletAdapter(),
      // new SolflareWalletAdapter(),
      // new MathWalletAdapter(),
  //   ],
  //   []
  // );

  // const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);

  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </>

  )
}
