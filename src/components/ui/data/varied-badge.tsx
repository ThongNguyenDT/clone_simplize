import React from 'react';
import { cn } from "@/lib/utils";

const VariedBadge = ({className, number, dataType}: {className?: string, number: number, dataType?: string}) => {

  return (
    <div className={cn("flex items-center gap-2 text-sm bg-primary data-[down=true]:bg-red-600 rounded-md p-1.5 py-1 ", className)} data-down={number<0} >
      <svg fill="#F4F4F5" className={"data-[down=true]:rotate-180"} data-down={number<0} width="8" height="5" viewBox="0 0 8 5"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z"></path>
      </svg>
      <h6>{number>0 ? number : -number}{dataType}</h6>
    </div>

  );
};

export default VariedBadge;