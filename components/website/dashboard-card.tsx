import { ChevronDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
type prop = {
  id: number;
  label: string;
  value: string;
  isProfit: boolean;
  returnValue: number;
  returnDay: string;
};
export function DashboardCard({ portfolioData }: { portfolioData: prop }) {
  return (
    <Card className="bg-[#12283f] border-none text-white h-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="bg-[#B2EFFF]" />
          <span className="">Current Investment Value</span>
          <div className="flex flex-col text-sm">
            {portfolioData.isProfit ? (
              <span className="text-[#6BBD6E] text-sm  font-semibold flex items-center space-x-4">
                <TrendingUp size={18} className="me-2 font-semibold" /> +
                {portfolioData.returnValue}%
              </span>
            ) : (
              <span className="text-[#EC817D] text-sm  font-semibold flex items-center space-x-4">
                <TrendingUp size={18} className="me-2 font-semibold" /> -
                {portfolioData.returnValue}%
              </span>
            )}
            {portfolioData.returnDay && (
              <span className="text-xs text-[#6BBD6E] w-[60px]">
                {portfolioData.returnDay} Return
              </span>
            )}
          </div>
        </div>
        <div className="text-lg">{portfolioData.value}</div>
      </CardContent>
    </Card>
  );
}
