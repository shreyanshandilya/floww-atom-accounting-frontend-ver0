import React, { useCallback } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RoundedTopBar = (props) => {
  const { fill, x, y, width, height } = props;
  const curveRadius = 10; // Adjust this value to change the roundness

  // Path for bar with only top-left and top-right rounded corners
  const path = `
    M${x},${y + height}
    L${x},${y + curveRadius}
    Q${x},${y} ${x + curveRadius},${y}
    L${x + width - curveRadius},${y}
    Q${x + width},${y} ${x + width},${y + curveRadius}
    L${x + width},${y + height}
    Z
  `;

  return <path d={path} fill={fill} />;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-md rounded-md border border-[#E8E8E8]">
        <p className="font-semibold text-base text-[#4A4A4A]">{label}</p>
        <div className="flex flex-col gap-1 mt-1">
          {payload.map((entry, index) => (
            <div key={`tooltip-${index}`} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              />
              <span className="md:text-xs xl:text-sm text-[#4A4A4A] font-medium ">
                {entry.name}: <span className="font-normal text-[#606060] ">{entry.value.toLocaleString()}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const MonthlyRevenueExpensesChart = ({ className }) => {
  // Sample data - replace with your actual data
  const data = [
    { name: "Week1", revenue: 4000, expenses: 2400 },
    { name: "Week2", revenue: 3000, expenses: 1398 },
    { name: "Week3", revenue: 2000, expenses: 9800 },
    { name: "Week4", revenue: 2780, expenses: 3908 },
  ];

  const formatYAxisTick = useCallback(
    (value) => {
      if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
      } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}k`;
      }
      return value;
    },
    [],
  )

  return (
    <div className={`bg-white md:py-6 md:px-6 xl:px-8 2xl:px-10 2xl:py-8 rounded-2xl border-2 border-[#E8E8E8] ${className} `}>
      <h2 className="md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-[#4A4A4A]">Monthly Revenue vs Expenses</h2>
      <p className="md:text-xs text-[#8E8E8E] mb-6">The statistics show your revenue and expenses</p>

      <div className="h-[284px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: -10,
              bottom: 0,
            }}
            barGap={0}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{
                fill: "#4A4A4A", // Gray-500 text color
                fontSize: "14px", // Smaller font size
              }}
              axisLine={{ stroke: "#d1d5db" }} // Gray-300 line color
              tickLine={{ stroke: "#d1d5db" }} // Gray-300 tick line color
            />
            <YAxis
              tickFormatter={formatYAxisTick}  // Use the custom formatter here
              tick={{
                fill: "#6b7280",
                fontSize: "12px",
                fontFamily: "sans-serif",
              }}
              axisLine={{ stroke: "#d1d5db" }}
              tickLine={{ stroke: "#d1d5db" }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: '#f0f0f0' }}  // Light gray background when hovering
            />

            <Bar dataKey="revenue" fill="#2ECC71" name="Revenue" shape={<RoundedTopBar />} />
            <Bar dataKey="expenses" fill="#FB3748" name="Expenses" shape={<RoundedTopBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyRevenueExpensesChart;