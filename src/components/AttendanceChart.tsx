"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Thứ 2",
    "có mặt": 60,
    "vắng mặt": 40,
  },
  {
    name: "Thứ 3",
    "có mặt": 70,
    "vắng mặt": 60,
  },
  {
    name: "Thứ 4",
    "có mặt": 90,
    "vắng mặt": 75,
  },
  {
    name: "Thứ 5",
    "có mặt": 90,
    "vắng mặt": 75,
  },
  {
    name: "Thứ 6",
    "có mặt": 65,
    "vắng mặt": 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Hoạt Động</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db " }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db " }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="có mặt"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="vắng mặt"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
