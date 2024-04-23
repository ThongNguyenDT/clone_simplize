import React from 'react';
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge"
import styles from './sidebar.module.scss'
import MenuLink from "@/components/ui/sidebar/menuLink/menuLink";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuPortal,
    DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ChevronRightIcon} from "@radix-ui/react-icons";

const menuItems = [
    {
        title: "Dashboard",
        icon: <ChevronRightIcon className={"h-10 w-full"}/>,
        type: "a",
        href: "/"
    }
]

const Sidebar = () => {
    return (
        <div className={"min-w-24 h-screen flex flex-col items-center"}>
            <div className={"w=[32px] h=[32px] flex flex-col items-center hover:bg-blue-100 pt-2.5 px-1.5 rounded-2xl"}>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" width={32} height={32}/>
                    <AvatarFallback>
                        T
                    </AvatarFallback>
                </Avatar>
                <div className={""}
                     style={{transform: 'translateY(-50%)'}}>

                    {/*        <span className={"text-[10px] py-0.5 px-1 border-r-6 text-white font-semibold"}>*/}
                    {/*            BASIC*/}
                    {/*        </span>*/}
                    <Badge variant="secondary"
                           className={"bg-gray-500 hover:bg-gray-400 bg-opacity-80 text-white text-[10px] px-1.5"}>Badge</Badge>
                </div>
            </div>

            <div className={"flex flex-col items-center h-screen w-full justify-between mb-28"}>
                <div className={"flex flex-col items-center gap-4 h-16 w-full"}>
                    <ul className={" w-full"}>
                        {menuItems.map((item, index) => (
                            <li key={index} className={"w-full"}>
                                {item.type === "link" ? (
                                    <MenuLink item={item}/>
                                ) : (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild className={"h-20 w-full hover:bg-blue-50 border-none active:border-none active:outline-none"}>
                                            <Button variant="ghost" size="icon" >
                                                {item.icon }
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56">
                                            <DropdownMenuLabel> {item.title}</DropdownMenuLabel>
                                            <DropdownMenuSeparator/>

                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={"flex flex-col items-center gap-4 bg-blue-500 h-[100px] w-full"}>

                </div>
            </div>

        </div>
    )
        ;
};

export default Sidebar;