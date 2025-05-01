"use client";

import { APP_NAME } from "../constants";

export default function Vibe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-2xl font-bold">{APP_NAME}</div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-64 h-64 rounded-full bg-black"></div>
      </div>
      <div className="btn btn-primary">Click me</div>
    </div>
  );
} 