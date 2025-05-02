import { LifecycleStatus, Transaction, TransactionButton, TransactionSponsor, TransactionStatus, TransactionStatusAction, TransactionStatusLabel } from "@coinbase/onchainkit/transaction";
import { useCallback, useMemo } from "react";
import { useAccount } from "wagmi";
import { chain, client, TEST_FID, VIBE_HOLE_ADDRESS } from "../constants";
import { claimVibe } from "@/thirdweb/8453/0x0f4fa925dd83cf31950d6f6ead141646e2612894";
import { getContract } from "thirdweb/contract";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { encode } from "thirdweb";

type Props = {
  onSuccess: () => void;
}

export const Claim = ({ onSuccess }: Props) => {
  const { address } = useAccount();
  const { context } = useMiniKit();

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log('LifecycleStatus', status);
    // on success, update the fidVibes state
    if (status.statusName === "success") {
      onSuccess();
    }
  }, [onSuccess]);

  const calls = useMemo(async () => {
    const contract = getContract({
      address: VIBE_HOLE_ADDRESS[chain.id],
      chain,
      client,
    });
    const claim = await claimVibe({
      contract,
      to: address as `0x${string}`,
      fid: BigInt(context?.user?.fid ?? TEST_FID),
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