import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome6Fill } from "@react-icons/all-files/ri/RiHome6Fill";
import { AiOutlineDollar } from "@react-icons/all-files/ai/AiOutlineDollar";
import { HiChartSquareBar } from "@react-icons/all-files/hi/HiChartSquareBar";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { BsGear } from "@react-icons/all-files/bs/BsGear";
import redde from "../assests/redde.svg";
import UserProfile from "./UserProfile";

const SideNav = () => {
  return (
    <div className="flex flex-col h-screen p-1 bg-white text-black w-60 border-r-2 border-gray-300 border-dotted">
      <div className="space-y-2">
        <div className="flex items-center justify-center ">
          <img src={redde} alt="Logo" className="w-14 h-14" />
        </div>
        <UserProfile />
        <h2 className="text-xs font-semibold text-gray-800 text-left ml-4 my-8 opacity-50">
          NAVIGATION
        </h2>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-white mx-2"
                }
              >
                <RiHome6Fill color="#930006" className="w-4 h-4 " />
                <span
              
                >
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li className="rounded-sm">
            <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <AiOutlineDollar color="#5B6B79" className="w-4 h-4" />
                <span>
                  Transactions
                </span>
              </NavLink>
            </li>
            <li className="rounded-sm">
            <NavLink
                to="/charges"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <HiChartSquareBar color="#5B6B79" className="w-4 h-4" />
                <span>
                  Charges
                </span>
              </NavLink>
            </li>
            <li className="rounded-sm">
            <NavLink
                to="/charges"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <FaUser color="#5B6B79" className="w-4 h-4" />
                <span>
                  Merchant
                </span>
              </NavLink>
            </li>
            <li className="rounded-sm">
            <NavLink
                to="/charges"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 space-x-3 rounded-md bg-red-100 mx-2 text-red-700"
                    : "flex items-center p-2 space-x-3 rounded-md hover:bg-red-100 mx-2"
                }
              >
                <BsGear color="#5B6B79" className="w-4 h-4" />
                <span>
                  My Actions
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
