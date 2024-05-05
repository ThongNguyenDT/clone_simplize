
import React from 'react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/shadcn/hover-card";

const Navigation = ({ className, data }: { className?: string, data?: any }) => {
  return (
    <div className={className}>
      {data.map((item: any, index: number) => (
        <HoverCard key={index} openDelay={0}>
          <HoverCardTrigger className={"rounded-2xl hover:bg-accent py-1 px-2"}>
            {item.href ? <Link href={item.href}>{item.title}</Link> : <div>{item.title}</div>}
          </HoverCardTrigger>
          {item.children && (
            <HoverCardContent className={"p-0 w-fit"}>
              <ul className={cn("grid w-[200px] gap-3 py-2 px-0", item.className)}>
                {item.children.map((child: any, childIndex: number) => (
                  // <li key={childIndex} className="row-span-3">
                  //   <NavigationMenuLink asChild>
                  //     <Link
                  //       className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  //       href="/"
                  //     >
                  //       {/*<Icons.clone-icons className="h-6 w-6" />*/}
                  //       <div className="mb-2 mt-4 text-lg font-medium">
                  //         shadcn/ui
                  //       </div>
                  //       <p className="text-sm leading-tight text-muted-foreground">
                  //         Beautifully designed components built with Radix UI and
                  //         Tailwind CSS.
                  //       </p>
                  //     </Link>
                  //   </NavigationMenuLink>
                  // </li>
                  <ListItem key={childIndex} href={child.href} title={child.title} icon={child.icon}
                            className={"min-h-11 flex"}>
                    {child.description}
                  </ListItem>
                ))}
              </ul>
            </HoverCardContent>
          )}
        </HoverCard>
      ))}
    </div>
  );
};

export default Navigation;


interface ListItemProps {
  icon: any;
  title: string;
  className?: string;
  children?: React.ReactNode;
  href?: any;
}

const ListItem = ( ({ icon, title, className, children, href }: ListItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          " select-none space-y-1 px-6 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex",
          className
        )}
      >
        <div className={"me-2.5 flex items-center"}>{icon}</div>
        <div>
          <div className="text-sm font-medium leading-none">
            {title}
          </div>
          {children && <div className="text-sm text-muted-foreground">{children}</div>}
        </div>
      </Link>
    </li>
  )
} )