import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import React from "react";

function SideNav() {
  const menu = [
    { id: 1, name: "All Courses", icon: BookOpen },

    { id: 2, name: "Membership", icon: BadgeIcon },

    { id: 1, name: "Be Instructor", icon: GraduationCap },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <p className="font-bold text-purple-700 text-lg">MANED QUIZ</p>
      <hr className="mt-7" />
      {/* menu list  */}
      <div className="mt-5">
        {menu.map((item) => (
          <div
            key={item.id}
            className="group p-1 flex gap-3 mt-2 text-[18px] items-center 
          text-gray-500 cursor-pointer hover:bg-primary hover:text-white 
          rounded-md transition-all ease-in-out duration-200"
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
