import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, arbitrum, base } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'


export const wagmiConfig = createConfig({
  chains: [
    // arbitrum,
    base,
    mainnet
  ],
  connectors: [
    injected(),
    // walletConnect({ projectId: 'xxxx' }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    // [arbitrum.id]: http(),
  },
})
