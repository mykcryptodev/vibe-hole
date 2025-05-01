import { useWalletBalance } from "thirdweb/react";
import { useAccount } from "wagmi";
import { chain, client, VIBE_HOLE_ADDRESS } from "../constants";

export const Balance = () => {
  const { address } = useAccount();

  const { data: balance } = useWalletBalance({
    client,
    address,
    chain,
    tokenAddress: VIBE_HOLE_ADDRESS,
  });

  return (
    <div>Balance: {balance?.value.toString()}</div>
  )
}