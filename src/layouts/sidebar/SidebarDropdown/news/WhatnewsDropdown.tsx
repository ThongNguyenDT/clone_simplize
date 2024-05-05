import React from 'react';
import DropdownContent from "@/layouts/sidebar/SidebarDropdown/DropdownContent";
import { DropdownMenuItem } from "@/components/ui/shadcn/dropdown-menu";
import { Cross2Icon } from "@radix-ui/react-icons";


interface Proqs {
  icon?: any
  icon_active?: any
  title?: string
  open?: boolean
}

const ActionButton = () => {
  return (
    <DropdownMenuItem
            className={"focus-visible:ring-0 text-[--foreground] hover:bg-transparent rounded-md"}>
      <Cross2Icon/>
    </DropdownMenuItem>
  )
}


const WhatnewsDropdown = (progs: Proqs) => {
  return (
    <DropdownContent props={progs} close_button={<ActionButton/>}>

    </DropdownContent>
  );
};

export default WhatnewsDropdown;