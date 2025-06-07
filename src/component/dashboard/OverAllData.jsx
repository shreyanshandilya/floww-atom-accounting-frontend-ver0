import React from 'react'

const OverAllData = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-4 md:gap-2">
                {[
                    { label: 'Total Sales', value: '₹ 10,000', icon: '/icons/total-sales.png' },
                    { label: 'Total Expenses', value: '₹ 2,000', icon: '/icons/total-expenses.png' },
                    { label: 'Net Profit', value: '₹ 8000', icon: '/icons/net-profit.png' },
                    { label: 'Revenue', value: '₹ 30,000', icon: '/icons/revenue.png' },
                ].map((item, idx) => (
                    <div key={idx} className=" bg-white border-[#E8E8E8] border-[2px] rounded-xl flex gap-1 lg:gap-3 items-center py-[14px] md:px-2 lg:px-4 ">
                        <div className=' xl:p-3 p-2 rounded-[10px] bg-[#0033661A] '>
                            <img
                                loading='lazy'
                                alt={item.label}
                                src={item.icon}
                                className="w-4 text-xs object-contain" />
                        </div>
                        <div>
                            <p className="md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-[#4A4A4A] ">{item.value}</p>
                            <p className="text-[#BBBBBB] md:text-[10px] lg:text-xs xl:text-sm">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
  )
}

export default OverAllData