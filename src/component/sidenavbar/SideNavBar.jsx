import {
  Home,
  Share2,
  Package,
  Users,
  FileText,
  UserPlus,
  File,
  PanelLeftClose,
} from "lucide-react";

export default function SideNavbar() {
  return (
    <div className=" w-full h-full overflow-y-auto bg-white border-r-[3px] border-[#E8E8E8] ">
      <div className="xl:py-6 md:py-5 md:px-4 lg:px-6 flex justify-between items-center">
          <img
          alt="floww icon"
          src="/icons/floww.png"
          className="xl:w-[123px] lg:w-[90px] md:w-[75px] "
          />
        <button>
          <PanelLeftClose className=" w-5"/>
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        <SidebarItem icon={<Home  className="w-full h-full"/>} label="Dashboard" />
        <SidebarItem icon={<Share2  className="w-full h-full"/>} label="Sales" />
        <SidebarItem icon={<Package  className="w-full h-full"/>} label="Purchase" />
        <SidebarItem icon={<Package className="w-full h-full" />} label="Quotation" />
        <SidebarItem icon={<Users  className="w-full h-full"/>} label="Customers" />
        <SidebarItem icon={<Users  className="w-full h-full"/>} label="Vendors" />
        <SidebarItem icon={<Package  className="w-full h-full"/>} label="Expenses" />
        <SidebarItem icon={<FileText  className="w-full h-full"/>} label="Documents" />
        <SidebarItem icon={<File className="w-full h-full" />} label="Ledger" />
        <SidebarItem icon={<UserPlus className="w-full h-full" />} label="Add members" />
      </nav>
    </div>
  );
}

function SidebarItem({ icon, label }) {

  const pathname = window.location.pathname
  let isActive 
  if(pathname === "/" && label === "Dashboard") isActive = true
  else isActive = pathname.toLowerCase() === label.toLowerCase() 

  return (
    <div
      className={`flex items-center gap-3 xl:px-6 px-3 py-3 text-sm font-normal cursor-pointer transition-[background] duration-100 ease-linear ${
        isActive ? "bg-[#E8E8E8] text-[#333333] hover:bg-[#e0e0e0] md:text-xs lg:text-sm xl:text-base" : "text-[#777777] hover:bg-[#e2e2e23a] md:text-xs lg:text-sm xl:text-base"
      } `}
    >
      <span className="md:w-4 xl:w-5 md:h-4 xl:h-5">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
