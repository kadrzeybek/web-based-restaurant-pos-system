import { CheckCheck, CircleSmall, History, XCircle } from "lucide-react";
import React from "react";

const OrderList = () => {
  const tables = [
    { id: 1, name: "Table 1", items: 3, status: "ready" },
    { id: 2, name: "Table 2", items: 5, status: "continue" },
    { id: 3, name: "Table 3", items: 2, status: "cancel" },
    { id: 4, name: "Table 4", items: 2, status: "ready" },

    // Add more tables as needed
  ];

  return (
    <div>
      {tables.map((table, index) => (
        <div
          key={index}
          className="bg-white shadow-sm border-b border-gray-300 p-4 flex items-center gap-4"
        >
          <button className="bg-yellow-300 p-3 text-xl font-bold rounded-sm w-12">
            {table.id}
          </button>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-black text-lg font-semibold tracking-wide">
                {table.name}
              </h1>
              <p className="text-gray-500 text-sm">{table.items} Items</p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p
                className={`px-4 flex items-center gap-1 ${
                  table.status === "ready"
                    ? "text-green-500"
                    : table.status === "continue"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {table.status === "ready" && <CheckCheck size={17} />}
                {table.status === "continue" && <History size={17} />}
                {table.status === "cancel" && <XCircle size={17} />}
                {table.status === "ready"
                  ? "Ready"
                  : table.status === "continue"
                  ? "Continue"
                  : "Canceled"}
              </p>
              <p className="text-gray-500 text-sm">
                <CircleSmall
                  size={17}
                  className={`inline ${
                    table.status === "ready"
                      ? "text-green-500"
                      : table.status === "continue"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                />{" "}
                {table.status === "ready"
                  ? "Ready to Serve"
                  : table.status === "continue"
                  ? "Order In Progress"
                  : "Order Canceled"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
