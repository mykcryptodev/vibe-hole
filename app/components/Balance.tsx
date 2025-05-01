import { useWalletBalance } from "thirdweb/react";
import { useAccount } from "wagmi";
import { chain, client, VIBE_HOLE_ADDRESS } from "../constants";
import { FC } from "react";

export const Balance: FC<{ className?: string }> = ({ className }) => {
  const { address } = useAccount();

  const { data: balance } = useWalletBalance({
    client,
    address,
    chain,
    tokenAddress: VIBE_HOLE_ADDRESS[chain.id],
  });

  return (
    <div className={className}>Balance: {balance?.displayValue}</div>
  )
}