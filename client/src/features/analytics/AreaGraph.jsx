import React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

// Dummy Card components (kept same)
export const Card = ({ children }) => (
    <div className="rounded-xl bg-white p-4 w-full h-full">{children}</div>
)
export const CardHeader = ({ children }) => (
    <div className="mb-4">{children}</div>
)
export const CardTitle = ({ children }) => (
    <h2 className="text-xl font-bold">{children}</h2>
)
export const CardContent = ({ children }) => (
    <div className="w-full h-full">{children}</div> // <-- full height
)
export const CardFooter = ({ children }) => (
    <div className="mt-4">{children}</div>
)

// ChartContainer
export const ChartContainer = ({ children }) => (
    <div className="w-full h-full">{children}</div>
)

// Data
const chartData = [
    { day: "week 1", desktop: 120 },
    { day: "week 2", desktop: 200 },
    { day: "week 3", desktop: 340 },
    { day: "week 4", desktop: 180 },
];




export default function AreaGraph() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Monthly Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer>
                    {/* ✅ Responsive container */}
                    <ResponsiveContainer width="90%" height="80%">
                        <AreaChart
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid stroke="none" />
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 6)}
                            />
                            <defs>
                                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="violet" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="violet" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="url(#fillDesktop)"
                                fillOpacity={0.4}
                                stroke="blue"
                                stackId="a"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="text-gray-500 flex items-center gap-2 leading-none">
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
