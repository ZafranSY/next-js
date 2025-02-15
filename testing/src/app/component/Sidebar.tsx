import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import React from "react";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
  flex flex-col 
  bg-green-900 text-white shadow-lg"
    >
      <SidebarIcon icon={<FaFire size={28} />} text="tooltip" />
      <SidebarIcon icon={<BsPlus size={32} />} text="tooltip" />
      <SidebarIcon icon={<BsFillLightningFill size={20} />} text="tooltip" />
      <SidebarIcon icon={<FaPoo size={20} />} text="tooltip" />
    </div>
  );
};
type SidebarIconProps = {
  icon: React.ReactNode;
  text: React.ReactNode;
};
const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, text }) => (
  <div className="sidebar-icon">
    {icon}
    <span className="sidebar-tooltip">{text}</span>
  </div>
);
export default Sidebar;
