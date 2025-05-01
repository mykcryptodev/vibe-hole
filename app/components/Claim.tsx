import { LifecycleStatus, Transaction, TransactionButton, TransactionSponsor, TransactionStatus, TransactionStatusAction, TransactionStatusLabel } from "@coinbase/onchainkit/transaction";
import { useCallback, useMemo } from "react";
import { useAccount } from "wagmi";
import { chain, client, VIBE_HOLE_ADDRESS } from "../constants";
import { claimVibe } from "@/thirdweb/84532/0xfab7d11e1bba8199616a64cb43764b45bdb81649";
import { getContract } from "thirdweb/contract";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { encode } from "thirdweb";

export const Claim = () => {
  const { address } = useAccount();
  const { context } = useMiniKit();

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log('LifecycleStatus', status);
  }, []);

  const calls = useMemo(async () => {
    const contract = getContract({
      address: VIBE_HOLE_ADDRESS[chain.id],
      chain,
      client,
    });
    const claim = await claimVibe({
      contract,
      to: address as `0x${string}`,
      fid: BigInt(context?.user?.fid ?? Math.floor(Math.random())),
    });
    const data = await encode(claim);
    
    return [{
      to: VIBE_HOLE_ADDRESS[chain.id],
      data,
    }];
  }, [address, context?.user?.fid]);

  return (
    <Transaction
      chainId={chain.id} 
      calls={calls} 
      onStatus={handleOnStatus} 
    >
      <TransactionButton text="Claim Vibe" />
      <TransactionSponsor />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction> 
  )
}