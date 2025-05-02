/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Follow } from "./Follow";

// make an api call to get the user data
const getUserData = async (fid: number) => {
  const response = await fetch(`/api/users/get?fids=${fid}`);
  const data = await response.json();
  console.log({ fid, userData: data.users?.[0] });
  return data.users?.[0]; // Get the first user from the users array
}

export const UserCard: FC<{ fid: number }> = ({ fid }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user", fid],
    queryFn: () => getUserData(fid),
  });

  if (isLoading) {
    return <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
      <div className="flex flex-col">
        <div className="w-24 h-4 bg-gray-200 animate-pulse rounded" />
        <div className="w-24 h-4 bg-gray-200 animate-pulse rounded" />
      </div>
    </div>
  }

  if (error || !data) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <img className="rounded-full" src={data?.pfp_url} alt={data?.display_name} width={32} height={32} />
      <div className="flex flex-col">
        <span className="text-sm font-medium">{data?.display_name}</span>
        <span className="text-xs text-gray-500">{data?.username}</span>
        <Follow fid={fid} />
      </div>
    </div>
  )
}