import { UserRound } from "lucide-react";   

const Header = () => {
  return (
    <header className="bg-white h-13 w-full shadow-md px-4 flex items-center justify-between">
      
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <UserRound size={30} className="text-gray-700" />
            <div>
              <p className="text-sm font-medium">Kadir Zeybekoğlu</p>
              <p className="text-xs text-gray-400">Cashier</p>
            </div>
          </div>
    </header>
  );
};


export default Header;
