import React from "react";

const MobileFooter = () => {
  return (
    <div className="bg-[var(--dark)]">
      <ul className="grid grid-cols-4 text-center">
        <li className="text-white cursor-pointer transition-colors py-3 border-blue-600 border-[1px] hover:text-blue-600">
          About Us
        </li>
        <li className="text-white cursor-pointer transition-colors py-3 border-blue-600 border-[1px] hover:text-blue-600">
          Portfolio
        </li>
        <li className="text-white cursor-pointer transition-colors py-3 border-blue-600 border-[1px] hover:text-blue-600">
          Shop
        </li>
        <li className="text-white  cursor-pointer transition-colors py-3 border-blue-600 border-[1px] hover:text-blue-600">
          Services
        </li>
      </ul>
    </div>
  );
};

export default MobileFooter;
