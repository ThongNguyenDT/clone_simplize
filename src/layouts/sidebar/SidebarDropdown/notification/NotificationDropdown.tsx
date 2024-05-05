import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/shadcn/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import NotifyCard from "@/layouts/sidebar/SidebarDropdown/notification/NotifyCard";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area"
import DropdownContent from "@/layouts/sidebar/SidebarDropdown/DropdownContent";
import { Button } from "@/components/ui/shadcn/button";
import { CheckOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";


const tagsData = ["Tất cả", "Cổ phiếu", "Cảnh báo", "Khác"];
const notification = {
  img: "https://github.com/shadcn.png",
  fallback: "T",
  date: "19 giờ trước",
  read: false
}

interface Proqs {
  icon?: any
  icon_active?: any
  title?: string
}

const ActionButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={"border-none active:border-none active:outline-none"}>
        <Button variant="ghost" size="icon"
                className={"focus-visible:ring-0 rounded-none text-[--foreground] hover:bg-transparent"}>
          <EllipsisOutlined className={"text-xl"}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-56 p-3 shadow-neutral-900 shadow-2xl rounded-md font-semibold"}
                           side="bottom" align="end">
        <DropdownMenuItem className={"hover:rounded-2xl"}>
          <CheckOutlined/>
          <span className={"ms-2"}> Đánh dấu đã đọc</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={"hover:rounded-2xl"}>
          <SettingOutlined/>
          <span className={"ms-2"}> Cài đặt thông báo</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const NotificationDropdown = (props: Proqs) => {
  return (
    <DropdownContent props={props} menu_button={<ActionButton/>}>
      <DropdownMenuGroup className={"flex"}>
        <Tabs defaultValue={tagsData[0]} className="w-full">
          <TabsList className={"bg-transparent"}>
            {tagsData.map((tagsDatum) => (
              <TabsTrigger
                key={tagsDatum}
                className={"bg-muted text-secondary-foreground rounded-2xl px-2 mx-2 text-xs font-normal data-[state=active]:bg-[#006CEC] data-[state=active]:text-white"}
                value={tagsDatum}>{tagsDatum}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="Tất cả" className={"w-full p-2"}>
            <ScrollArea className={"h-[90vh]"}>
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
              <NotifyCard props={notification} className={" hover:bg-muted p-3 rounded-md"}>Change your password
                here.</NotifyCard>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </DropdownMenuGroup>
    </DropdownContent>
  )
};


export default NotificationDropdown;