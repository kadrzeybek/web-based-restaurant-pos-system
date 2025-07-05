import React from "react";

const MiniCart = ({ title, icon, number, footerNum, tableNum }) => {
  return (
    <div className="bg-gray-50 rounded-sm shadow-sm p-4 w-[50%]">
        <div className="flex items-start justify-between">
            <h1 className="text-lg font-semibold tracking-wide">{title}</h1>
            <button className={`${title === 'Total Earnings' ? "bg-green-300" : "bg-yellow-200"} p-2 rounded-md`}>{icon}</button>
        </div>
        <div>
            <h1 className="text-4xl font-bold mt-5">{number}</h1>
            <h1 className="text-sm mt-2 text-gray-500"><span className="text-green-600">{title === 'Total Earnings' ? `${footerNum} ` : `${tableNum-number}`}</span>{title === 'Total Earnings' ? ` than yesterday` : ` out of ${tableNum} tables available`}</h1>
        </div>

    </div>
  )
};

export default MiniCart;
