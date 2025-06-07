import OverAllData from './OverAllData';
import MonthlyRevenueExpensesChart from './MonthlyRevenueExpensesChart';
import ExpenseBreakDown from './ExpenseBreakDown';
import RecentTransaction from './RecentTransaction';


export default function Dashboard() {
    return (
        <div className="p-6 md:px-5 lg:px-3 xl:px-6 2xl:px-8 space-y-6 bg-gray-50">
            <div>
                <h1 className="md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#4A4A4A] font-semibold">Dashboard</h1>
                <p className="md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-[#A4A4A4] font-medium">Welcome back! Here's your business overview.</p>
            </div>

            {/* Metrics */}
            <OverAllData />

            <div className=' grid grid-cols-1 lg:grid-cols-2 md:gap-2 xl:gap-4'>
                {/* monthly revenue - expense chart */}
                <MonthlyRevenueExpensesChart className={"col-span-1"} />

                {/* expense break down  */}
                <ExpenseBreakDown />
            </div>

            {/* Transactions */}
            <RecentTransaction/>
        </div>
    );
}
