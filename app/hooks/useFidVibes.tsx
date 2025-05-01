import { useEffect, useState } from "react";
import { getFidVibes } from "@/thirdweb/8453/0x0f4fa925dd83cf31950d6f6ead141646e2612894";
import { VIBE_HOLE_ADDRESS } from "../constants";
import { chain, client  } from "../constants";
import { getContract } from "thirdweb";
import { useMiniKit } from "@coinbase/onchainkit/minikit";

const contract = getContract({
  client,
  chain,
  address: VIBE_HOLE_ADDRESS[chain.id],
});

export const useFidVibes = () => {
  const { context } = useMiniKit();
  const [fidVibes, setFidVibes] = useState<Awaited<ReturnType<typeof getFidVibes>>>([]);

  const fetchFidVibes = async () => {
    const vibes = await getFidVibes({
      contract,
      fid: BigInt(context?.user?.fid ?? Math.floor(Math.random())),
      offset: BigInt(0),
      limit: BigInt(10),
    });
    setFidVibes(vibes);
  };

  useEffect(() => {
    if (!context?.user?.fid) return;
    
    fetchFidVibes();
    
    const intervalId = setInterval(fetchFidVibes, 10000);
    
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.user?.fid]);

  return {fidVibes};
};
