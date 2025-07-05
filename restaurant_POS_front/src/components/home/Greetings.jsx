import {useState, useEffect} from "react";

const Greetings = () => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
    }

    const formatTime = (date) => {
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    }

  return (

    <div className="flex justify-between">
        <div>
            <h2 className="text-lg font-semibold">Welcome back, Kadir!</h2>
            <p className="text-gray-600">Give Your Best Service for Customer</p>
        </div>
        <div>
            <h1 className="text-black text-2xl font-bold tracking-wide">{formatDate(dateTime)}</h1>
            <p className="text-gray-600 ">{formatTime(dateTime)}</p>
        </div>
    </div>
    
    
  );
};

export default Greetings;
