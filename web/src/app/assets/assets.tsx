'use client';

import { genChartData } from "./[id]/getChartData";

export const assetsDetails = [
    {
        address: '0xcde32c3d85b9fe1795e68dca32b77fbe71ffc0c1',
        title: "Market leaders",
        risk: "Moderate",
        targetAllocation: {
            BTC: 50,
            ETH: 20,
            UNI: 10,
            LINK: 10,
            CK: 10,
        },
        startedAt: "2024-08-01",
        chartData: genChartData(),
    },
    {
        address: '2',
        title: "Utilmate growth",
        risk: "High",
        targetAllocation: {
            BTC: 10,
            ETH: 10,
            SOL: 80,
        },
        startedAt: "2024-08-01",
        chartData: genChartData(),
    },
    {
        address: '3',
        title: "Recession proof",
        risk: "Low",
        targetAllocation: {
            BTC: 50,
            ETH: 30,
            SOL: 20,
        },
        startedAt: "2024-08-01",
        chartData: genChartData(),
    }
];



export const allowedAssetAddress = assetsDetails[0].address;
