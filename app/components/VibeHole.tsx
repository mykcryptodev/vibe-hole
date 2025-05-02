import { FC } from "react";
import { APP_NAME, chain, client, VIBE_HOLE_ADDRESS } from "../constants";
import Image from "next/image";
import { Claim } from "./Claim";
import { Create } from "./Create";
import { useFidVibes } from "../hooks/useFidVibes";
import { useWalletBalance } from "thirdweb/react";
import { useAccount } from "wagmi";
import { Matches } from "./Matches";

export const VibeHole: FC = () => {
  const { fidVibes } = useFidVibes();
  const { address } = useAccount();

  const { data: balance, refetch: refetchBalance } = useWalletBalance({
    client,
    address,
    chain,
    tokenAddress: VIBE_HOLE_ADDRESS[chain.id],
  });

  const onClaimSuccess = () => {
    refetchBalance();
  }

  const onCreateSuccess = () => {
    refetchBalance();
  }
  
  return (
    <div className="flex items-center justify-center min-h-100 rounded-large w-full">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-4xl font-bold">{APP_NAME}</div>
        <div className="text-2xl font-bold">
          Match your vibe with a new bestie.
        </div>
        <div className="text-2xl font-bold">
          Get coins.
        </div>
        <div className="relative">
          <Image src="/images/logo.png" alt="Vibe" width={100} height={100} className="my-10 h-48 w-48 rounded-full animate-[spin_10s_ease-in-out_infinite] " />
          <div className="absolute top-1/2 left-0 w-full flex justify-center -translate-y-1/2">
            <Matches />
          </div>
        </div>
        <div className="bg-[var(--app-card-bg)] backdrop-blur-md rounded-xl shadow-lg border border-[var(--app-card-border)] p-4 max-w-[200px] w-full mb-4">
          <div className="text-sm font-medium mb-1">VIBE Balance</div>
          <div className="text-2xl font-bold">{balance?.displayValue}</div>
        </div>
        
        <div className="flex items-center">
          <Claim onSuccess={onClaimSuccess} />
        </div>
        <div className="flex items-center">
          <Create onSuccess={onCreateSuccess} />
        </div>
      </div>
    </div>
  )
};
