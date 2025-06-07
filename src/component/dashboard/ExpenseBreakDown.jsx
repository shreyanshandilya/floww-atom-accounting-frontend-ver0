import React from 'react'

const ExpenseBreakDown = ({className}) => {
    return (
        <div className={`bg-white md:py-6 md:px-6 xl:px-8 2xl:px-10 2xl:py-8 rounded-2xl border-2 border-[#E8E8E8] ${className} `}>
            <h2 className="md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-[#4A4A4A]">Expense Breakdown</h2>
            <p className="md:text-xs text-[#8E8E8E] mb-6">A pie chart the breakdown of your expenses</p>

           
        </div>
    )
}

export default ExpenseBreakDown