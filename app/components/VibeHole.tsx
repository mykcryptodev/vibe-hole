import { FC } from "react";
import { APP_NAME } from "../constants";
import Image from "next/image";
import { Balance } from "./Balance";
import { Claim } from "./Claim";
import { Create } from "./Create";
import { useFidVibes } from "../hooks/useFidVibes";

export const VibeHole: FC = () => {
  const { fidVibes } = useFidVibes();
  
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
        <Image src="/images/logo.png" alt="Vibe" width={100} height={100} className="my-10 h-48 w-48 rounded-full animate-[spin_10s_ease-in-out_infinite] " />
        
        <div className="bg-[var(--app-card-bg)] backdrop-blur-md rounded-xl shadow-lg border border-[var(--app-card-border)] p-4 max-w-[200px] w-full mb-4">
          <div className="text-sm font-medium mb-1">VIBE Balance</div>
          <Balance className="text-2xl font-bold" />
        </div>
        
        <div className="flex items-center">
          <Claim />
        </div>
        <div className="flex items-center">
          <Create />
        </div>
      </div>
    </div>
  )
};
