"use client";

export function SideBar() {
  const sideBarData = [
    { href: "/", label: "PHA", key: "pha", isActive: true },
    {
      href: "/",
      label: "Fund Analysis",
      key: "fund_analysis",
      isActive: false,
    },
    { href: "/", label: "Holdings", key: "holdings", isActive: false },
    { href: "/", label: "Transaction", key: "transaction", isActive: false },
  ];
  return (
    <div className="w-[200px] bg-[#1B1A1A] text-sm mt-1">
      <div className="flex flex-col text-white p-4 gap-5">
        {sideBarData.map((val, key) => (
          <div
            key={key}
            className={`${
              val.isActive
                ? "bg-[#3D3D3D] font-semibold"
                : "bg-transparent font-normal"
            } rounded-lg p-2 ps-4`}
          >
            <p>{val.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
