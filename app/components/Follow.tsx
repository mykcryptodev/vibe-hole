import { sdk } from '@farcaster/frame-sdk'
import { FC } from "react";

export const Follow: FC<{ fid: number }> = ({ fid }) => {
  const handleFollow = async () => {
    await sdk.actions.viewProfile({ fid });
  }
  return (
    <div className="btn btn-primary" onClick={handleFollow}>
      Follow
    </div>
  );
};

