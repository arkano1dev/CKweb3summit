'use client'


import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { assetsDetails } from "../assets";
import { useParams } from "next/navigation";
import {toast }from 'react-toastify'

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





import { type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart } from "recharts";
import { ChartHighLevelComponent } from "./ChartHighLevelComponent";
import { useMemo, useState } from "react";
import { genChartData } from "./getChartData";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { Input } from "@/components/ui/input";
import { Toast } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/sonner";



const AssetsDetailed = () => {
    const params = useParams()
    const id = params.id
    const assetDetails = assetsDetails.find(asset => asset.address === id)


    const chartConfig = {
        btc: {
            label: "btc",
            color: "hsl(var(--chart-1))",
        },
        knight: {
            label: assetDetails?.title,
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig


    const { data: hash, sendTransaction } = useSendTransaction()
    const [value, setValue] = useState('')
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleBuy = async () => {

        if (!assetDetails) return
        if(!value){

            toast.error('Please enter a value to buy')
            return;
        }

        const response = sendTransaction({
            to: assetDetails.address as any,
            value: parseEther(value.toString()),
        })

        console.log(response)
    }

    const handleSell = async () => {
        if (!assetDetails) return
        if(!value){

            toast.error('Please enter a value to sell')
            return;
        }

        // const response = sendTransaction({
        //     to: assetDetails.address as any,
        //     value: parseEther(value.toString()),
        // })

        // console.log(response)

    }

    return (
        <div className="my-10 mx-auto max-w-5xl flex flex-col gap-6">

            {!assetDetails ? <div>Asset not found</div> :
                <>
                    <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" className="font-heading text-6xl tracking-tight bg-gradient-to-r from-blue-500 via-green-500 to-indigo-400 text-transparent bg-clip-text ">
                        Asset: {assetDetails.title}
                    </motion.h1>


                    <div className="w-full col-span-2 rounded-3xl border-2 px-6 py-8 flex flex-row-reverse">

                        <div className="flex flex-col w-full">
                            <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="text-lg md:text-2xl mt-3">
                                Risk: {assetDetails.risk}
                            </motion.p>
                            <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="text-lg md:text-2xl mt-3">
                                Target Allocation: {Object.entries(assetDetails.targetAllocation).map(([key, value]) => `${key}: ${value}%`).join(", ")}
                            </motion.p>

                            <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="text-lg md:text-2xl mt-3">
                                Started At: {assetDetails.startedAt}
                            </motion.p>

                            <motion.p variants={slideFromRight} initial="hidden" whileInView="visible" className="text-lg md:text-2xl mt-3">
                                Current value in BTC: {assetDetails.chartData[assetDetails.chartData.length - 1].knight.toFixed(6)}
                            </motion.p>


                            <motion.p className="flex gap-3 my-4">

                                <Input required type='number' placeholder="Amount" onChange={handleChange} value={value} />
                                <Button onClick={handleBuy}>Buy</Button>
                                <Button onClick={handleSell}>Sell</Button>
                            </motion.p>


                            <ChartHighLevelComponent chartData={assetDetails.chartData} chartConfig={chartConfig} />


                        </div>
                    </div>

                </>}



        </div>
    )
}


export default AssetsDetailed;
