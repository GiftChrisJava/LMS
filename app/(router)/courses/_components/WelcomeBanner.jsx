import React from "react";

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <div>
        <h1 className="font-bold text-[27px]">
          Welcome to <span className="text-primary">MANEB-QUIZE </span> Building
          a yaza in you.
        </h1>
        <h2 className="text-gray-500">
          Explore, Learn and build all real life projects
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
