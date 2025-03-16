"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sectorData = {
  Technology: [
    {
      mutualFund: "ICICI Prudential Bluechip Fund",
      allocation: 38,
      amount: 380000,
    },
    { mutualFund: "SBI Bluechip Fund", allocation: 40, amount: 480000 },
    { mutualFund: "Axis Bluechip Fund", allocation: 50, amount: 475000 },
    {
      mutualFund: "Mirae Asset Large Cap Fund",
      allocation: 42,
      amount: 462000,
    },
  ],
  Financials: [
    {
      mutualFund: "ICICI Prudential Bluechip Fund",
      allocation: 37,
      amount: 370000,
    },

    { mutualFund: "Axis Bluechip Fund", allocation: 32, amount: 304000 },
    {
      mutualFund: "Mirae Asset Large Cap Fund",
      allocation: 34,
      amount: 374000,
    },
  ],
  Energy: [
    {
      mutualFund: "ICICI Prudential Bluechip Fund",
      allocation: 25,
      amount: 250000,
    },
    { mutualFund: "HDFC Top 100 Fund", allocation: 20, amount: 160000 },

    {
      mutualFund: "Mirae Asset Large Cap Fund",
      allocation: 24,
      amount: 264000,
    },
    { mutualFund: "SBI Bluechip Fund", allocation: 21, amount: 252000 },
  ],
  Industrials: [
    { mutualFund: "SBI Bluechip Fund", allocation: 12, amount: 144000 },
    { mutualFund: "SBI Bluechip Fund", allocation: 27, amount: 324000 },
    { mutualFund: "Axis Bluechip Fund", allocation: 18, amount: 171000 },
    { mutualFund: "HDFC Top 100 Fund", allocation: 80, amount: 640000 },
  ],
};

const sectorColors: { [key: string]: string } = {
  Technology: "bg-[#C6C4D8] col-span-3",
  Financials: "bg-[#9BB0C7]",
  Energy: "bg-[#EBE2EA]",
  Industrials: "bg-[#DAD3E1] col-span-3",
};

export function SectorDashboard() {
  const totalInvestment = Object.values(sectorData)
    .flat()
    .reduce((sum, fund) => sum + fund.amount, 0);

  return (
    <div className="bg-[#1B1A1A] p-6 mt-9 rounded-lg">
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(sectorData).map(([sector, funds]) => {
          const sectorInvestment = funds.reduce(
            (sum, fund) => sum + fund.amount,
            0
          );
          const sectorPercentage = (
            (sectorInvestment / totalInvestment) *
            100
          ).toFixed(2);

          return (
            <Card
              key={sector}
              className={`group rounded-xl shadow-lg ${sectorColors[sector]} text-black relative`}
            >
              <CardHeader>
                <CardTitle>{sector}</CardTitle>
                <p className="text-lg font-semibold">
                  ₹ {sectorInvestment.toLocaleString()}
                </p>
              </CardHeader>
              <CardContent className="mt-10 relative">
                <p className="text-2xl font-normal">{sectorPercentage}%</p>
                {/* Hidden Fund Details - Visible on Hover */}
                <div className="absolute top-0 left-0 h-[198px] z-[1000000] -translate-y-[70%] w-full flex flex-col gap-2 bg-black/80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  {funds.map((fund, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{fund.mutualFund}</span>
                      <span>₹ {fund.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
