import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/shadcn/avatar";
import { Badge } from "@/components/ui/shadcn/badge";
import { AntdBadge } from "@/components/ui/antd";
import MenuLink from "@/layouts/sidebar/menuLink/menuLink";
import DropdownContent from "@/layouts/sidebar/SidebarDropdown/notification/NotificationDropdown";
import ModeToggle from "@/components/ui/theme/DarkModeButton";
import { LightningBoltIcon } from "@radix-ui/react-icons"
import NotificationDropdown from "@/layouts/sidebar/SidebarDropdown/notification/NotificationDropdown";
import WhatnewsDropdown from "@/layouts/sidebar/SidebarDropdown/news/WhatnewsDropdown";
import Star from "@/components/ui/icon/clone-icons/sidebar/star";
import PieChart from "@/components/ui/icon/clone-icons/sidebar/pie-chart";
import BlinkStar from "@/components/ui/icon/clone-icons/sidebar/blink-star";
import Learn from "@/components/ui/icon/clone-icons/sidebar/learn";


const Sidebar = () => {
  const menuItems = [
    {
      title: "Thông Báo",
      icon: <AntdBadge count={5} closed/>,
      icon_active: <AntdBadge count={5}/>,
      dropdowncontent: <DropdownContent/>
    },
    {
      title: "Danh sách quan sát",
      icon: <Star className={"text-xl"}/>,
      href: "/abc"
    },
    {
      title: "Danh mục đầu tư",
      icon: <PieChart/>,
      href: "/abc"
    },
    {
      title: "Nebula AI",
      icon: <BlinkStar/>,
      href: "/abc"
    },
    {
      title: "Simplize learn",
      icon: <Learn/>,
      href: "/abc"
    }
  ];

  return (
    <div className={"w-14 h-screen flex flex-col items-center dark:border-r-[#ffffff19] dark:border-r-[1px] fixed top-0 left-0 z-20 pt-3"}>
      <div className={"w-14 flex flex-col items-center justify-items-end hover:bg-blue-100 px-1.5 rounded-xl"}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" width={32} height={32} className={"--foreground"}/>
          <AvatarFallback>
            T
          </AvatarFallback>
        </Avatar>
        <div className={""}
             style={{ transform: 'translateY(-50%)' }}>
          <Badge variant="secondary"
                 className={"bg-gray-500 hover:bg-gray-400 bg-opacity-80 text-white text-[10px] px-1.5"}
          >
            Badge
          </Badge>
        </div>
      </div>

      <div className={"flex flex-col items-center h-screen w-full justify-between mb-28"}>
        <div className={"flex flex-col items-center gap-4 w-full"}>
          <ul className={"h-fit w-full"}>
            {menuItems.map((item, index) => (
              <li key={index}
                  className={"w-full h-16 overflow-hidden flex items-center justify-center"}>
                {item.href ? (
                  <MenuLink className={"w-full"}
                            icon={item.icon}
                            link={item.href}
                            title={item.title}/>
                ) : (
                  <NotificationDropdown title={item.title}
                                   icon={item.icon}
                                   icon_active={item.icon_active}/>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={"flex flex-col items-center gap-4 h-fit w-full"}>
          <WhatnewsDropdown title={"Có gì mới?"}
                           icon={<LightningBoltIcon/>}/>
          <ModeToggle/>
        </div>
      </div>

    </div>
  )
    ;
};

export default Sidebar;