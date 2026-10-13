"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";
import { type ChartConfig } from "./chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Stock } from "./Stocks";


export default function StocksChart({ stocks }: { stocks: Stock[] }) {
    const chartConfig = {
        quantity: {
            color: "blue"
        },
        minimum: {
            color: "red"
        }
    } satisfies ChartConfig;

    return (
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
            <BarChart accessibilityLayer data={stocks}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="quantity" fill="blue" radius={4} />
                <Bar dataKey="minimum" fill="red" radius={4} />
            </BarChart>
        </ChartContainer>
    );
}

