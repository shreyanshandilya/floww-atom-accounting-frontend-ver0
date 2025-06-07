import {
  Home,
  Share2,
  Package,
  Users,
  FileText,
  UserPlus,
  File,
  PanelLeftClose,
  PanelRightClose,
} from "lucide-react";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function SideNavbar() {

  const [isPanelClosed, setisPanelClosed] = useState(false)

  return (
    <aside className={`${isPanelClosed ? "md:w-[50px] xl:w-[80px]" : "xl:w-[25%] lg:w-[25%] md:w-[25%]"} max-w-sm h-full overflow-y-auto bg-white border-r-[3px] border-[#E8E8E8] transition-all duration-150 ease-linear `}>
      <div className={`${isPanelClosed ? "px-2 justify-center" : "md:px-4 lg:px-6 justify-between"} xl:py-6 md:py-5 flex  items-center`}>
        <Link
          tabIndex={0}
          to={"/"}>
          <img
            loading="lazy"
            alt="floww icon"
            src="/icons/floww.png"
            className={`xl:w-[123px] lg:w-[90px] md:w-[75px] transition-all delay-100 ${isPanelClosed ? "hidden" : ""}`}
          />
        </Link>
        <button
          tabIndex={0}
          onClick={() => { setisPanelClosed(!isPanelClosed) }}
          aria-label="toggle panel button"
          className=" cursor-pointer"
        >
          {isPanelClosed ? <PanelRightClose className=" md:w-5 xl:w-7" /> : <PanelLeftClose className=" md:w-5 xl:w-7" />}
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        <SidebarItem icon={<Home className="w-full h-full" />} label="Dashboard" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<Share2 className="w-full h-full" />} label="Sales" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<Package className="w-full h-full" />} label="Purchase" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<Package className="w-full h-full" />} label="Quotation" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<Users className="w-full h-full" />} label="Customers" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<Users className="w-full h-full" />} label="Vendors" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<Package className="w-full h-full" />} label="Expenses" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<FileText className="w-full h-full" />} label="Documents" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<File className="w-full h-full" />} label="Ledger" isPanelClosed={isPanelClosed} />
        <SidebarItem icon={<UserPlus className="w-full h-full" />} label="Add members" isPanelClosed={isPanelClosed} />
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, label, isPanelClosed }) {

  const pathname = window.location.pathname
  let isActive
  if (pathname === "/" && label === "Dashboard") isActive = true
  else isActive = pathname.toLowerCase() === label.toLowerCase()

  return (
    <Link
      tabIndex={0}
      to={"#"}
      className={`flex items-center gap-3 xl:px-6 px-3 py-3 text-sm font-normal cursor-pointer transition-[background] duration-100 ease-linear
        ${isActive ? "bg-[#E8E8E8] text-[#333333] hover:bg-[#e0e0e0] md:text-xs lg:text-sm xl:text-base" : "text-[#777777] hover:bg-[#e2e2e23a] md:text-xs lg:text-sm xl:text-base"} `}
    >
      <span className="md:w-4 xl:w-5 2xl:w-6 md:h-4 xl:h-5 2xl:h-6">{icon}</span>
      <span className={`${isPanelClosed ? "hidden " : "opacity-100"} transition-opacity duration-150 ease-linear `}>{label}</span>
    </Link>
  );
}
