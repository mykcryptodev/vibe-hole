import { LifecycleStatus, TransactionButton, TransactionStatusAction } from "@coinbase/onchainkit/transaction";
import { TransactionSponsor, TransactionStatusLabel } from "@coinbase/onchainkit/transaction";
import { TransactionStatus } from "@coinbase/onchainkit/transaction";
import { Transaction } from "@coinbase/onchainkit/transaction";
import { FC, useCallback, useMemo } from "react";
import { chain, client, TEST_FID, VIBE_HOLE_ADDRESS } from "../constants";
import { createVibe } from "@/thirdweb/84532/0xfab7d11e1bba8199616a64cb43764b45bdb81649";
import { encode, getContract } from "thirdweb";
import { useMiniKit } from "@coinbase/onchainkit/minikit";

type Props = {
  onSuccess: () => void;
}

export const Create: FC<Props> = ({ onSuccess }) => {
  const { context } = useMiniKit();

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log('LifecycleStatus', status);
    if (status.statusName === "success") {
      onSuccess();
    }
  }, [onSuccess]);

  const calls = useMemo(async () => {
    const contract = getContract({
      client,
      chain,
      address: VIBE_HOLE_ADDRESS[chain.id],
    });
    const create = await createVibe({
      contract,
      inputFid: BigInt(context?.user?.fid ?? TEST_FID),
    })
    const data = await encode(create);
    
    return [{
      to: VIBE_HOLE_ADDRESS[chain.id],
      data,
    }];

  }, [context?.user?.fid]);
  
  return (
    <Transaction
      chainId={chain.id} 
      calls={calls} 
      onStatus={handleOnStatus} 
    >
      <TransactionButton text="Create Vibe" />
      <TransactionSponsor />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction> 
  )
};
