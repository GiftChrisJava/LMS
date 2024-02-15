"use client";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";

function Courses() {
  return (
    <div className="grid p-5 grid-cols-1 md:grid-cols-3">
      {/* left container  */}
      <div className="col-span-2">
        <WelcomeBanner />

        {/* course list  */}
        <CourseList />
      </div>

      {/* right container  */}
      <div>Right section</div>
    </div>
  );
}

export default Courses;
