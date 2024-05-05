import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/shadcn/dropdown-menu";
import { Button } from "@/components/ui/shadcn/button";

interface Proqs {
  icon?: any
  icon_active?: any
  title?: string
}

interface dropContentProps {
  props: Proqs
  menu_button?: React.ReactNode
  children?: React.ReactNode
  close_button?: React.ReactNode
}

const DropdownContent = ({props, menu_button, children, close_button}: dropContentProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild
                           className={"!h-16 w-full border-none active:border-none active:outline-none"}>
        <Button variant="ghost" size="icon" className={"focus-visible:ring-0 rounded-non hover:bg-blue-100 dark:hover:bg-secondary m-1"}>
          {props.icon}
          {/*{props.icon_active}*/}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 h-[92vh] p-3 shadow-xl rounded-md" side="right" align="start">
        <DropdownMenuLabel className={"w-full flex justify-between items-center"}>
          <div className={"text-base font-semibold"}> {props.title} </div>
          {close_button? close_button : menu_button}
        </DropdownMenuLabel>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownContent;