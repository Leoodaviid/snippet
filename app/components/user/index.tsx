"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const ProfileUser = () => {
  const { user } = useUser();
  const imageUrl = user?.imageUrl;

  const loadingImg = (
    <div className="w-9 h-9 rounded-full mb-1 bg-slate-200 dark:bg-slate-500"></div>
  );

  const loadingUserName = (
    <span className="text-slate-500 text-[11px] bg-primary-light rounded-3xl dark:bg-primary-dark h-4 w-[100px]"></span>
  );

  const loadingUserEmail = (
    <span className="text-slate-500 text-[11px] bg-primary-light rounded-3xl dark:bg-primary-dark h-2 w-[130px]"></span>
  );

  return (
    <div className="flex gap-3 items-center">
      {!user ? (
        loadingImg
      ) : (
        <Image
          src={imageUrl!}
          alt={user?.firstName!}
          width={36}
          height={36}
          className="rounded-full"
        />
      )}
      <div className={`flex flex-col text-sm ${!user ? "gap-1" : ""}`}>
        {!user ? (
          loadingUserName
        ) : (
          <span className="font-semibold text-slate-500">{`${user?.firstName} ${user?.lastName}`}</span>
        )}
        {!user ? (
          loadingUserEmail
        ) : (
          <small className="text-slate-500 text-xs">
            {user?.emailAddresses[0].emailAddress}
          </small>
        )}
      </div>
    </div>
  );
};

export default ProfileUser;
