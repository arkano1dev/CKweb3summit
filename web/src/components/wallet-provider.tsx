"use client"

import { wagmiConfig } from "@/wagmi"
import { useMemo, ReactNode } from "react"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

const queryClient = new QueryClient()

export const Web3WalletProvider = ({ children }: { children: ReactNode }) => {

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
