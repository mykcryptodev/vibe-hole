import { FC } from "react";
import { useFidVibes } from "../hooks/useFidVibes";
import { UserCard } from "./UserCard";
import { useMiniKit } from "@coinbase/onchainkit/minikit";

export const Matches: FC = () => {
  const { context } = useMiniKit();
  const { fidVibes } = useFidVibes();
  const mostRecentFidVibe = fidVibes[0];

  const fidToShow = Number(mostRecentFidVibe?.counterpartyFid) === Number(context?.user?.fid) 
    ? Number(mostRecentFidVibe?.sourceFid)
    : Number(mostRecentFidVibe?.counterpartyFid);

  if (!mostRecentFidVibe) {
    return null;
  }

  return (
    <UserCard fid={fidToShow} />
  )
};
