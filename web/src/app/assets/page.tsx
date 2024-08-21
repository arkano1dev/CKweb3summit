'use client'


import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { allowedAssetAddress, assetsDetails as assets } from "./assets";
import { ChartHighLevelComponent } from "./[id]/ChartHighLevelComponent";
import { genChartData } from "./[id]/getChartData";
import { ChartConfig } from "@/components/ui/chart";
import { useRouter } from "next/navigation";

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


const Assets = () => {

    const router = useRouter()

    return (
        <div className="my-10 mx-auto max-w-5xl flex flex-col gap-6">

            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading text-6xl tracking-tight bg-gradient-to-r from-blue-500 via-green-500 to-indigo-400 text-transparent bg-clip-text ">
                Assets
            </motion.h1>


            {assets.map((asset) => {

                const chartConfig = {
                    btc: {
                        label: "btc",
                        color: "hsl(var(--chart-1))",
                    },
                    knight: {
                        label: asset?.title,
                        color: "hsl(var(--chart-2))",
                    },
                } satisfies ChartConfig


                return (
                    <div key={asset.address} className="w-full col-span-2 rounded-3xl border-2 px-6 py-8 flex flex-row-reverse">
                        {/* <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="hidden md:flex shrink-0 justify-center items-center mx-5">
                        <Image
                            src="/image/device.svg"
                            alt="device"
                            width={300}
                            height={600}
                            className="w-full h-full rounded-lg"
                        />
                    </motion.div> */}
                        <div className="flex gap-2 flex-col sm:flex-row w-full">
                            <div className="flex flex-col">
                                <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading text-3xl tracking-tight">
                                    {asset.title}
                                </motion.h1>
                                <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="text-lg md:text-2xl mt-3">
                                    Risk: {asset.risk}
                                </motion.p>
                                <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="text-lg md:text-2xl mt-3">
                                    Target Allocation: {Object.entries(asset.targetAllocation).map(([key, value]) => `${key}: ${value}%`).join(", ")}
                                </motion.p>

                                <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="text-lg md:text-2xl mt-3">
                                    Started At: {asset.startedAt}
                                </motion.p>



                                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="flex flex-row mt-5 w-fit">
                                        <Button onClick={() => {
                                            router.push(`/assets/${asset.address}`)
                                        }} disabled={asset.address !== allowedAssetAddress} className="bg-primary text-secondary py-2 px-5 rounded-lg">
                                            Invest now
                                        </Button>
                                    </motion.div>

                            </div>



                            <div>
                                <ChartHighLevelComponent
                                    chartData={asset.chartData}
                                    chartConfig={chartConfig}
                                />
                            </div>


                        </div>
                    </div>

                )

            })}



        </div>
    )
}


export default Assets;
