"use client";

import Image from "next/image";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Tháng 1",
    "Quỹ thu": 4000,
    "Chi tiêu": 2400,
  },
  {
    name: "Tháng 2",
    "Quỹ thu": 3000,
    "Chi tiêu": 1398,
  },
  {
    name: "Tháng 3",
    "Quỹ thu": 2000,
    "Chi tiêu": 9800,
  },
  {
    name: "Tháng 4",
    "Quỹ thu": 2780,
    "Chi tiêu": 3908,
  },
  {
    name: "Tháng 5",
    "Quỹ thu": 1890,
    "Chi tiêu": 4800,
  },
  {
    name: "Tháng 6",
    "Quỹ thu": 2390,
    "Chi tiêu": 3800,
  },
  {
    name: "Tháng 7",
    "Quỹ thu": 3490,
    "Chi tiêu": 4300,
  },
  {
    name: "Tháng 8",
    "Quỹ thu": 3490,
    "Chi tiêu": 4300,
  },
  {
    name: "Tháng 9",
    "Quỹ thu": 3490,
    "Chi tiêu": 4300,
  },
  {
    name: "Tháng 10",
    "Quỹ thu": 3490,
    "Chi tiêu": 4300,
  },
  {
    name: "Tháng 11",
    "Quỹ thu": 3490,
    "Chi tiêu": 4300,
  },
  {
    name: "Tháng 12",
    "Quỹ thu": 3490,
    "Chi tiêu": 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Quỹ trường</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db " }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db " }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="Quỹ thu"
            stroke="#C3EBFA"
            activeDot={{ r: 8 }}
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="Chi tiêu"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
