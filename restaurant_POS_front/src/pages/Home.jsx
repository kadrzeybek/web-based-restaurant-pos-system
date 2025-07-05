
import { BanknoteArrowUp, UtensilsCrossed } from 'lucide-react';
import Greetings from '../components/home/Greetings';
import MiniCart from '../components/home/MiniCart';
import RecentOrder from '../components/home/RecentOrder';




const Home = () => {

  return (
    <section className="flex h-full gap-3">
      <div className='flex-[4] bg-white rounded-sm shadow-sm p-5'>
        <Greetings />
        <div className="flex gap-3 items-center justify-between mt-4">
          <MiniCart title="Total Earnings" icon={<BanknoteArrowUp />} number={512} footerNum={1.6} />
          <MiniCart title="Active Tables" icon={<UtensilsCrossed />} number={5} tableNum={15} />
        </div>
        <RecentOrder />
      </div>
      <div className='flex-[2] bg-white rounded-sm shadow-sm p-5'>
      </div>
    </section>
  );
}

export default Home;
