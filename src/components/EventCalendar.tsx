"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Hội thảo học tập hiệu quả",
    time: "9:00 AM - 11:00 AM",
    description: "Chia sẻ phương pháp học tập nâng cao hiệu quả.",
  },
  {
    id: 2,
    title: "Tư vấn hướng nghiệp",
    time: "1:00 PM - 3:00 PM",
    description: "Tư vấn việc làm cho sinh viên năm cuối.",
  },
  {
    id: 3,
    title: "Lễ trao bằng tốt nghiệp",
    time: "4:00 PM - 6:00 PM",
    description: "Lễ trao bằng cho các sinh viên tốt nghiệp.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Sự Kiện</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-[#C3EBFA] even:border-t-[#CFCEFF]"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
