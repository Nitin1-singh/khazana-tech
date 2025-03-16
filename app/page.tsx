"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";
import { DashboardCard } from "@/components/website/dashboard-card";
import { DashboardLineChart } from "@/components/website/dashboard-line-chart";
import { SectorDashboard } from "@/components/website/dashboard-hover";
import MutualFundOverlapSankey from "@/components/website/sankey-dashboard";
import { motion } from "framer-motion";
export default function PortfolioDashboard() {
  const initial = { opacity: 0, filter: "blur(1px)" };
  const animation = { opacity: 1, filter: "blur(0px)" };
  const duration = { duration: 0.4, ease: "easeInOut" };

  const [activeTab, setActiveTab] = useState("metrics");
  const cardData = [
    {
      id: 1,
      label: "Current Investment Value",
      value: "₹5,75,000",
      isProfit: true,
      returnValue: 0.6,
      returnDay: "1D",
    },
    {
      id: 2,
      label: "Initial Investment Value",
      value: "₹5,00,000",
      isProfit: true,
      returnValue: 15,
      returnDay: "",
    },
    {
      id: 3,
      label: "Best Performing Scheme",
      value: "ICICI Prudential Midcap Fund",
      isProfit: true,
      returnValue: 19,
      returnDay: "",
    },
    {
      id: 4,
      label: "Worst Performing Scheme",
      value: "Axis Flexi Cap Fund",
      isProfit: false,
      returnValue: 5,
      returnDay: "",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#161616] text-white">
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex flex-col mb-4">
            <motion.h1
              initial={initial}
              animate={animation}
              transition={{ ...duration, delay: 0.1 }}
              className="text-2xl font-normal"
            >
              Good morning, Yashna!
            </motion.h1>
            <motion.p
              initial={initial}
              animate={animation}
              transition={{ ...duration, delay: 0.2 }}
              className="text-[#F6F6F6] text-[14px] font-light"
            >
              Evaluate Your Investment Performance
            </motion.p>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {cardData.map((val, key) => (
              <motion.div
                initial={initial}
                animate={animation}
                transition={{ ...duration, delay: 0.3 * key }}
                className="h-full"
                key={key}
              >
                <DashboardCard portfolioData={val} />
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <Tabs
            defaultValue="metrics"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-6"
          >
            <motion.div
              initial={initial}
              animate={animation}
              transition={{ ...duration, delay: 0.6 }}
            >
              <TabsList className="bg-transparent border-b border-[#454545] w-full justify-start  gap-8 rounded-none px-0">
                <TabsTrigger
                  value="metrics"
                  className="text-sm px-6 py-2 text-white font-light data-[state=active]:font-normal data-[state=active]:text-[#E7E7E7] data-[state=active]:border-b-[4px] data-[state=active]:border-[#0858A0]  data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none"
                >
                  Performance Metrics
                </TabsTrigger>
                <TabsTrigger
                  value="composition"
                  className="text-sm px-6 py-2 text-white font-light data-[state=active]:font-normal data-[state=active]:text-[#E7E7E7] data-[state=active]:border-b-[4px] data-[state=active]:border-[#0858A0] data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none"
                >
                  Portfolio Composition
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="metrics" className="mt-6">
              <motion.div
                initial={initial}
                animate={animation}
                transition={{ ...duration, delay: 0.2 }}
              >
                <DashboardLineChart />
              </motion.div>
            </TabsContent>

            <TabsContent value="composition">
              <motion.div
                initial={initial}
                animate={animation}
                transition={{ ...duration, delay: 0.2 }}
              >
                <SectorDashboard />
                <MutualFundOverlapSankey />
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
