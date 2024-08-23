"use client";

import Device from "../device";
import { HeadingText } from "../heading-text";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full lg:min-h-screen flex flex-col gap-6 justify-center"
    >
      <HeadingText />
      <Link className="w-fit mx-auto mb-4" href='/assets'>
        <Button>
          Explore Decentralized Index Funds
        </Button>
      </Link>

      {/* <Device /> */}


      <div className="block md:hidden w-full justify-center items-center">
        <Image
          src="/image/device.svg"
          alt="CryptoKnights"
          width={400}
          height={800}
          className="w-1/2 mx-auto"
        />
      </div>


    </section>
  );
}
