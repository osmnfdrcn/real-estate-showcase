import logo from "@/public/images/logo.svg";
import Link from "next-intl/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="relative overflow-y-hidden w-[136px] h-[45px] md:w-[150px] md:h-[50px] lg:w-[178px] lg:h-[60px] cursor-pointer">
      <Link href="/">
        <Image src={logo} alt="realtor-logo" fill />
      </Link>
    </div>
  );
};

export default React.memo(Logo);
