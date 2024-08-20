"use client";

import { motion } from "framer-motion";
import { HoverCard } from "./card";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section>
      <section
        id="bento"
        className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5 items-center mb-16 md:mb-24 lg:mb-44"
      >
        <div className="w-full h-[25rem] col-span-2 rounded-3xl border-2 p-3 lg:p-5 flex flex-row-reverse">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="hidden md:flex shrink-0 justify-center items-center mx-5">
            <Image
              src="/image/device.svg"
              alt="device"
              width={300}
              height={600}
              className="w-full h-full rounded-lg"
            />
          </motion.div>
          <div className="flex flex-col w-full">
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading text-4xl md:text-7xl tracking-tight">
              Real-Time Portfolio Rebalancing
            </motion.h1>
            <div className="flex h-full w-full items-center justify-end">
              <motion.p variants={slideFromLeft} initial="hidden" whileInView="visible" className="desc">
                Automatically adjusts your portfolio to maintain your desired asset allocation, ensuring optimal performance and risk management.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-1 rounded-3xl border-2 p-3 lg:p-5 flex flex-col">
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="text-3xl md:text-5xl lg:text-6xl font-heading text-center">Transparent Asset Management</motion.h1>

          <div className="flex h-full w-full items-center justify-end">
            <motion.p variants={slideFromLeft} initial="hidden" whileInView="visible" className="desc">
              Provides full visibility into your investments, with detailed reports and real-time updates, so you always know where your money is.
            </motion.p>
          </div>
        </div>

        <div className="w-full col-span-1 rounded-3xl border-2 p-3 lg:p-5 flex flex-col">
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="text-3xl md:text-5xl lg:text-6xl font-heading text-center">Seamless User Experience</motion.h1>

          <div className="flex h-full w-full items-center justify-end">
            <motion.p variants={slideFromLeft} initial="hidden" whileInView="visible" className="desc">
              Offers an intuitive and user-friendly interface, making it easy to monitor your portfolio, set alerts, and make adjustments on the go.
            </motion.p>
          </div>
        </div>

        <div className="w-full h-[25rem] col-span-2 rounded-3xl border-2 p-3 lg:p-5 flex">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="hidden md:flex shrink-0 justify-center items-center mx-5">
            <Image
              src="/image/emulator.png"
              alt="device"
              width={200}
              height={600}
              className="w-auto h-full rounded-lg"
            />
          </motion.div>
          <div className="flex flex-col w-full">
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading text-5xl md:text-7xl tracking-tight text-right">
              Customizable Investment Strategies:
            </motion.h1>
            <div className="flex h-full w-full items-center justify-end">
              <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="desc text-right">
                Allows you to tailor your investment strategy to your specific goals and risk tolerance, with options for both conservative and aggressive investors.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
