"use client";
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/shadcn/input';
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/shadcn/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
import NotifyCard from "@/layouts/sidebar/SidebarDropdown/notification/NotifyCard";


const tagsData = ["Tất cả", "Cổ phiếu", "Cảnh báo", "Khác"];
const notification = {
  img: "https://github.com/shadcn.png",
  fallback: "T",
  date: "19 giờ trước",
  read: false
}

const SearchBox = ({
                     placeholder: passedPlaceholder = "",
                     ...passedProps
                   }: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  useEffect(() => {
    const intr = setInterval(() => {
      setPlaceholder(passedPlaceholder.slice(0, placeholderIndex));
      if (placeholderIndex + 1 > passedPlaceholder.length) {
        setPlaceholderIndex(0)
      } else {
        setPlaceholderIndex(placeholderIndex + 1)
      }
    }, 150);
    return () => {
      clearInterval(intr)
    }
  },);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className={"h-8 bg-accent rounded-2xl"} asChild>
          <div className="flex w-full max-w-sm items-center gap-1.5 relative">
            <div className={"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"}>
              <MagnifyingGlassIcon className={"text-foreground"}/>
            </div>
            <Input id="picture" type="text" placeholder={placeholder}
                   className={"ms-2 border-none focus-visible:ring-0 xl:w-64 lg:w-32 shadow-none"}/>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className={"sm:max-w-[728px] bg-transparent border-none px-4 shadow-none"}>
        <DialogHeader className={"bg-white rounded-2xl w-full h-8 "}>
          <div className="flex w-full items-center gap-1.5 relative h-8">
            <div className={"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"}>
              <MagnifyingGlassIcon className={"text-gray-900"}/>
            </div>
            <Input id="picture" type="text" placeholder={"search"}
                   className={"ms-5 border-none focus-visible:ring-0 w-full shadow-none"}/>
          </div>
        </DialogHeader>
        <div className="grid gap-4 bg-white rounded-xl px-4 py-2 h-fit">
          <Tabs defaultValue={tagsData[0]} className="w-full">
            <TabsList className={"bg-transparent"}>
              {tagsData.map((tagsDatum) => (
                <TabsTrigger
                  key={tagsDatum}
                  className={"bg-gray-100 text-gray-900 rounded-2xl px-2 mx-2 text-xs font-normal data-[state=active]:bg-[#006CEC] data-[state=active]:text-white"}
                  value={tagsDatum}>{tagsDatum}</TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="Tất cả" className={"w-full p-2 h-fit"}>
              <ScrollArea className={"h-[600px]"}>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change
                your password
                here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change
                your password
                here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
                <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard><NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard><NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard><NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard><NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard><NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                  here.</NotifyCard>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;