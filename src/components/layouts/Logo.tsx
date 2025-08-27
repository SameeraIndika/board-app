"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <Image
        onClick={() => router.push("/")}
        src="/logo.svg"
        height="24"
        width="98"
        alt="logo"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Logo;
