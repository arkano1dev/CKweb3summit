"use client";

import Device from "../device";
import { HeadingText } from "../heading-text";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full mt-8 lg:min-h-screen flex flex-col gap-6 justify-center"
    >
      <HeadingText />
      <Button className="w-fit mx-auto mb-4">
        Explore Decentralized Index Funds
      </Button>
      <Device />

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
