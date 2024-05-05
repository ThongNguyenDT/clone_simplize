import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar";
import { DotFilledIcon } from "@radix-ui/react-icons";

interface Progs {
  img?: string
  fallback?: string
  date?: string
  read?: boolean
}
interface NotifyCardProps {
  props: Progs
  className?: string
  children?: React.ReactNode
}

const NotifyCard: React.FC<NotifyCardProps> = ({props, children, className}) => {
  return (
    <div className={className}>
      <div className={"flex space-x-4 w-full"}>
        <Avatar>
          <AvatarImage src={props.img}/>
          <AvatarFallback>{props.fallback}</AvatarFallback>
        </Avatar>
        <div className={"space-y-1 w-full"}>
          <div className={"flex justify-between w-full"}>
            <p className={"text-sm"}>
              {children}
            </p>
            {!props.read && <DotFilledIcon className={'text-xl text-blue-700 shadow-2xl shadow-blue-500'}/>}
          </div>
          <div className={"flex items-center pt-1"}>
          <span className={"text-xs text-blue-500"}>
                {props.date}
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyCard;