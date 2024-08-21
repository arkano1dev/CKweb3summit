"use client";

import { motion } from "framer-motion";

export const HeadingText = () => {
  return (
    <>
      <motion.h1 className="text-center head-text tracking-tight">
        CryptoKnights
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0, transition: { delay: 0.7 } }}
        className="text-center max-w-xl mx-auto font-sans mb-4 font-semibold text-4xl md:text-5xl tracking-tight"
      >
        Transparent, {" "}
        <motion.span
          animate={{ backgroundColor: ["#ef4444", "#db2777"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="bg-clip-text text-transparent"
        >
          Real-Time
        </motion.span>{" "}
        {" "}
        <motion.span
          animate={{ backgroundColor: ["#db2777", "#ef4444"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="bg-clip-text text-transparent"
        >
          Asset Management.
        </motion.span>{" "}

        {/* <motion.div
          animate={{ backgroundColor: ["pink"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="bg-clip-text text-4xl mt-5 mb-3 text-transparent"
        >
          Live Life, we've Got You Covered
        </motion.div> */}
      </motion.p>
    </>
  );
};
