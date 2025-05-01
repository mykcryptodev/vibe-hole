import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export const APP_NAME = "Vibe Hole";

export const chain = baseSepolia;//base;

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

export const VIBE_HOLE_ADDRESS = "0xD90AfcABD2A9aDE14D621b31F67Ef8B5fBedc343";