import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 bg-white flex justify-between">
      {/* search bar  */}
      <div className="flex gap-3 p-2 rounded-md">
        <Search className="h-5 w-5 text-gray-500" />
        <input
          className="outline-none border p-1 rounded-sm text-slate-800"
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* get started icon  */}
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
