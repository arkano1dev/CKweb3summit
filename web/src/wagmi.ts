import { createClient, defineChain } from 'viem'
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, arbitrum, base } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'



const myChain = defineChain({
  id: 42161,
  name: 'Arbitrum fork local',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://arbitrum-mainnet.infura.io/v3/6fd0456ccd6a4a7e95de3a624a9ed77a'],
    }
  }
})


export const wagmiConfig = createConfig({
  chains: [
    myChain
    // base,
    // mainnet
  ],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
  connectors: [
    injected(),
    // walletConnect({ projectId: 'xxxx' }),
    metaMask(),
    safe(),
  ],
  // transports:
  // transports: {
  // [mainnet.id]: http(),
  // [base.id]: http(),
  // [arbitrum.id]: http(),

  // },
})
