import { FC } from "react";
import { APP_NAME } from "../constants";
import Image from "next/image";
export const VibeHole: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-100 rounded-large w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl font-bold">{APP_NAME}</div>
        <div className="text-2xl font-bold">
          Match your vibe with a new bestie.
        </div>
        <div className="text-2xl font-bold">
          Get coins.
        </div>
        <Image src="/images/logo.png" alt="Vibe" width={100} height={100} className="mt-20 h-48 w-48 animate-[spin_10s_ease-in-out_infinite] " />
      </div>
    </div>
  )
};
