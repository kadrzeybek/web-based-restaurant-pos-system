import OrderList from "./OrderList";

const RecentOrder = () => {
  return (
    <div className="mt-4">
        <div className="bg-gray-50 w-full rounded-sm shadow-sm h-full">
            <div className="flex justify-between items-center p-4">
                <h1 className="text-lg font-semibold tracking-wide">Recent Orders</h1>
                <a href="#" className="text-blue-500">View All</a>
            </div>
            <div className="p-4 pt-0 overflow-y-scroll h-[300px] scrollbar-hide">
                <OrderList />
            </div>
        </div>
    </div>
  );
};

export default RecentOrder;
