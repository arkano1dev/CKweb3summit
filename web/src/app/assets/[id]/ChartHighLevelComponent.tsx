'use client';
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis } from "recharts";

// import { AreaChart,  } from "lucide-react";
export function ChartHighLevelComponent({
    chartConfig, chartData
}: {
    chartConfig: ChartConfig;
    chartData: any[];
}) {

    return (

        <>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <AreaChart accessibilityLayer data={chartData}>

                    <Area
                        dataKey="btc"
                        type="natural"
                        fill="var(--color-btc)"
                        fillOpacity={0.4}
                        stroke="var(--color-btc)"
                        stackId="a" />

                    <Area
                        dataKey="knight"
                        type="natural"
                        fill="var(--color-knight)"
                        fillOpacity={0.4}
                        stroke="var(--color-knight)"
                        stackId="b" />

                    <XAxis
                        dataKey="day"
                        tickLine={true}
                        axisLine={true}
                        tickMargin={8}
                        tickFormatter={(value) => value} />

                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8} />
                </AreaChart>
            </ChartContainer>

            <div>
                {Object.entries(chartConfig).map(([key, value]) => (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: value.color }}></div>
                        <div>{value.label}</div>
                    </div>
                ))}
            </div>
        </>

    );
}
