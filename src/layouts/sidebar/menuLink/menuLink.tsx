import Link from "next/link";
import { Button } from "@/components/ui/shadcn/button";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip"

interface MenuLinkProps {
  className?: string
  icon?: any
  link: string
  title?: string
}

const MenuLink = (prog: MenuLinkProps) => {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={prog.link} className={prog.className + " flex items-center justify-center hover:bg-blue-100 dark:hover:bg-secondary h-full m-1 rounded-md"}>
              <Button variant="ghost" size="icon" className={"hover:bg-transparent"}>
                {prog.icon}
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent side={"right"} className={"bg-secondary-foreground text-secondary font-extralight"}>
            <p className={"text-sm"}>{prog.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    );
  }
;

export default MenuLink;