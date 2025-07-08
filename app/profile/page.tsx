"use client"

import ProfileCard from "@/component/ProfileCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <ProfileCard />
      </div>
    </div>
  );
}
