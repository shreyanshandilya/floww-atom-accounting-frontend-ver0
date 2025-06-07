import { ArrowRightLeft } from 'lucide-react';
import React from 'react'

const RecentTransaction = () => {
    const transactions = [
        { type: 'Sale', name: 'ABC Corp', amount: -30000, date: '2024-01-15' },
        { type: 'Purchase', name: 'XYZ Supplies', amount: -30000, date: '2024-01-15' },
        { type: 'Sale', name: 'Tech Solutions', amount: 90000, date: '2024-01-15' },
    ];
    return (
        <div className="bg-white md:p-4 lg:p-6 xl:p-8 rounded-2xl border-2 border-[#E8E8E8] ">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="font-medium text-[#4A4A4A] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ">Recent Transactions</h2>
                    <p className="md:text-xs xl:text-sm text-[#8E8E8E]">This is the data of recent transactions from your accounts</p>
                </div>
                <a href="#" className="text-[#0077EE] underline underline-offset-1 md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium hover:underline">View all</a>
            </div>
            <div className="divide-y">
                {transactions.map((txn, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 border-[1px] border-[#0000001A] md:rounded-xl xl:rounded-2xl ">
                        <div className="flex items-center gap-4 ">
                            <div className="px-3 py-2 bg-[#0033661A] md:rounded-lg xl:rounded-xl 2xl:rounded-2xl">
                                <ArrowRightLeft className="text-blue-700 w-4" />
                            </div>
                            <div>
                                <p className="font-medium text-[#333333] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ">{txn.type}</p>
                                <p className="md:text-xs xl:text-sm 2xl:text-base text-[#8E8E8E]">{txn.name}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className={`font-medium md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  ${txn.amount < 0 ? 'text-[#FB3748]' : 'text-[#1FC16B]'}`}>
                                {txn.amount < 0 ? `-₹ ${Math.abs(txn.amount)}` : `+₹ ${txn.amount}`}
                            </p>
                            <p className="md:text-xs xl:text-sm 2xl:text-base font-light text-[#777777]">{txn.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentTransaction