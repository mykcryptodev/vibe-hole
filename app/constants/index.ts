import { base } from "thirdweb/chains";

import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export const APP_NAME = "Vibe Hole";

export const chain = base;

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

export const VIBE_HOLE_ADDRESS: Record<number, `0x${string}`> = {
  [baseSepolia.id]: "0xfab7d11e1bba8199616a64cb43764b45bdb81649",
  [base.id]: "0x0f4fa925dd83cf31950d6f6ead141646e2612894",
} as const;

export const TEST_FID = 217248;
