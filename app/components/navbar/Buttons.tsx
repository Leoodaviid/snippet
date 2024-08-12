"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Buttons = () => {
  const { userId } = useAuth();
  return (
    <div className="max-sm:w-full">
      {userId ? (
        <Link
          href="/my-notes"
          className="max-sm:w-full bg-blue-light dark:bg-blue-dark p-2 px-6 text-sm text-white rounded-md"
        >
          <button>Access To The App</button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
          <Link href="/sign-in">
            <button className="max-sm:w-full bg-blue-light dark:bg-blue-dark px-6 py-2 text-white rounded-md">
              Sign-In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="text-sm border border-blue-500 text-blue-light dark:text-blue-dark py-2 hover:bg-blue-light dark:bg-blue-dark hover:text-white px-6 rounded-md">
              Sign-Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Buttons;
