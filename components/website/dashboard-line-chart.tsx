"use client";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ArrowDownCircle } from "lucide-react";

const chartConfig = {
  value: {
    label: "Portfolio Value (INR)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const irrPerformanceData = [
  { month: "Jan 2023", date: "21", value: 10.5 },
  { month: "Mar 2023", date: "21", value: 11.2 },
  { month: "Jun 2023", date: "21", value: 12.1 },
  { month: "Sep 2023", date: "21", value: 12.8 },
  { month: "Dec 2023", date: "21", value: 13.5 },
  { month: "Mar 2024", date: "21", value: 14.0 },
  { month: "Jun 2024", date: "21", value: 13.8 },
  { month: "Sep 2024", date: "21", value: 13.2 },
  { month: "Dec 2024", date: "21", value: 12.9 },
  { month: "Mar 2025", date: "21", value: 12.5 },
];

export function DashboardLineChart() {
  return (
    <Card className="bg-[#1B1A1A] text-white">
      <CardHeader className="space-y-4">
        <CardTitle>Performance Summary</CardTitle>
        <div className="bg-[#262626] text-white w-fit rounded-lg p-4 space-y-4 h-full">
          <p>₹5,50,000</p>
          <div className="text-[#6BBD6E] flex gap-3 items-center h-full">
            <ArrowDownCircle size={15} className="transform rotate-180" />
            <p>₹50,000</p>
            <div className="bg-[#6BBD6E] w-[1px] h-[13px]" />
            <p>10%</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart width={600} height={300} data={irrPerformanceData}>
            {/* Dashed line only on X-axis */}
            <CartesianGrid vertical={false} stroke="#444" />
            <XAxis dataKey="month" tick={{ fill: "#fff" }} />
            {/* Custom Tooltip to show only the month */}
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#262626] border border-[#1971ca] text-white p-2 rounded-md shadow-lg">
                      <p className="text-sm">
                        {payload[0].payload.date} {payload[0].payload.month}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="linear"
              dataKey="value"
              stroke="#0080ff"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
