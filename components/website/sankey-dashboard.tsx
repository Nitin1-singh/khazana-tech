import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";

const MutualFundOverlapSankey = () => {
  // Mutual fund data
  const funds = [
    "ICICI Bluechip",
    "HDFC Top 100",
    "SBI Bluechip",
    "Axis Bluechip",
    "Mirae Asset Large Cap",
  ];

  // Stock data (representing major stocks in these funds)
  const stocks = ["HDFC LTD", "RIL", "INFY", "TCS", "HDFCBANK", "BHARTIARTL"];

  // Create nodes for the Sankey diagram
  const nodes = [
    // Mutual funds (left side)
    ...funds.map((fund) => ({
      id: fund,
      color:
        fund === "ICICI Bluechip"
          ? "#606c38"
          : fund === "HDFC Top 100"
          ? "#704214"
          : fund === "SBI Bluechip"
          ? "#2a4d69"
          : fund === "Axis Bluechip"
          ? "#5e548e"
          : "#C19A6B", // Mirae Asset
    })),

    // Stocks (right side)
    ...stocks.map((stock) => ({
      id: stock,
      color:
        stock === "HDFC LTD"
          ? "#FFCC29"
          : stock === "RIL"
          ? "#3CB371"
          : stock === "INFY"
          ? "#C71585"
          : stock === "TCS"
          ? "#20B2AA"
          : stock === "HDFCBANK"
          ? "#FF6347"
          : "#E6E6FA", // BHARTIARTL
    })),
  ];

  // Create links between funds and stocks
  // The weight represents the percentage of each fund's portfolio in that stock
  const links = [
    // ICICI Bluechip links
    { source: "ICICI Bluechip", target: "HDFC LTD", value: 15 },
    { source: "ICICI Bluechip", target: "RIL", value: 12 },
    { source: "ICICI Bluechip", target: "INFY", value: 8 },
    { source: "ICICI Bluechip", target: "TCS", value: 10 },
    { source: "ICICI Bluechip", target: "HDFCBANK", value: 9 },
    { source: "ICICI Bluechip", target: "BHARTIARTL", value: 7 },

    // HDFC Top 100 links
    { source: "HDFC Top 100", target: "HDFC LTD", value: 18 },
    { source: "HDFC Top 100", target: "RIL", value: 9 },
    { source: "HDFC Top 100", target: "INFY", value: 4 },
    { source: "HDFC Top 100", target: "TCS", value: 8 },
    { source: "HDFC Top 100", target: "HDFCBANK", value: 16 },
    { source: "HDFC Top 100", target: "BHARTIARTL", value: 5 },

    // SBI Bluechip links
    { source: "SBI Bluechip", target: "HDFC LTD", value: 14 },
    { source: "SBI Bluechip", target: "RIL", value: 13 },
    { source: "SBI Bluechip", target: "INFY", value: 10 },
    { source: "SBI Bluechip", target: "TCS", value: 8 },
    { source: "SBI Bluechip", target: "HDFCBANK", value: 9 },
    { source: "SBI Bluechip", target: "BHARTIARTL", value: 7 },

    // Axis Bluechip links
    { source: "Axis Bluechip", target: "HDFC LTD", value: 12 },
    { source: "Axis Bluechip", target: "RIL", value: 14 },
    { source: "Axis Bluechip", target: "INFY", value: 11 },
    { source: "Axis Bluechip", target: "TCS", value: 9 },
    { source: "Axis Bluechip", target: "HDFCBANK", value: 8 },
    { source: "Axis Bluechip", target: "BHARTIARTL", value: 8 },

    // Mirae Asset Large Cap links
    { source: "Mirae Asset Large Cap", target: "HDFC LTD", value: 13 },
    { source: "Mirae Asset Large Cap", target: "RIL", value: 12 },
    { source: "Mirae Asset Large Cap", target: "INFY", value: 9 },
    { source: "Mirae Asset Large Cap", target: "TCS", value: 10 },
    { source: "Mirae Asset Large Cap", target: "HDFCBANK", value: 10 },
    { source: "Mirae Asset Large Cap", target: "BHARTIARTL", value: 8 },
  ];

  return (
    <div className="flex flex-col bg-[#1B1A1A] mt-8 rounded-lg text-white p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <h1 className="text-lg font-medium">Overlap Analysis</h1>
          <div className="ml-2 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-xs">
            ?
          </div>
        </div>
        <p className="text-sm text-gray-300 mb-1">
          Comparing Multiple Mutual Funds
        </p>
        <ul className="text-sm text-gray-300 list-disc pl-5">
          <li>6 Stocks shown across these funds</li>
          <li>Overlap percentages shown in the chart</li>
        </ul>
      </div>

      {/* Sankey Chart */}
      <div className="h-[800px] w-full">
        <ResponsiveSankey
          data={{ nodes, links }}
          margin={{ top: 20, right: 160, bottom: 20, left: 50 }}
          align="justify"
          colors={(node) => node.color || "#D4F5FF"}
          nodeOpacity={1}
          nodeHoverOpacity={1}
          nodeThickness={20}
          nodeSpacing={24}
          nodeBorderWidth={1}
          nodeBorderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
          nodeBorderRadius={3}
          linkOpacity={0.8} // Increase opacity for better visibility
          linkHoverOpacity={1}
          linkContract={3}
          enableLinkGradient={false} // Disable gradient to make color uniform
          labelPosition="outside"
          labelOrientation="vertical"
          labelPadding={16}
          labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
          theme={{
            labels: {
              text: {
                fill: "#D4F5FF", // Ensure labels are also visible
                fontSize: 12,
              },
            },
            tooltip: {
              container: {
                background: "#333",
              },
            },
          }}
          tooltip={({ node, link }) => {
            if (node) {
              return (
                <div className="bg-gray-800 p-2 rounded shadow text-white text-xs">
                  <strong>{node.id}</strong>
                </div>
              );
            }

            if (link) {
              return (
                <div className="bg-gray-800 p-2 rounded shadow text-white text-xs">
                  <strong>
                    {link.source} → {link.target}
                  </strong>
                  <div>Allocation: {link.value}%</div>
                </div>
              );
            }

            return null;
          }}
        />
      </div>
    </div>
  );
};

export default MutualFundOverlapSankey;
