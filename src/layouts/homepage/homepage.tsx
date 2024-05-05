import React from 'react';
import { Button } from "@/components/ui/shadcn/button";
import PieChart from "@/components/ui/icon/clone-icons/sidebar/pie-chart";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import VariedBadge from "@/components/ui/data/varied-badge";
import AreaChart from "@/components/ui/data/chart/area-chart";
import MainChart from "@/components/ui/data/chart/main-chart";

const Homepage = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className={"w-full lg:px-11 pt-5 lg:max-w-[1472px]"}>
        <div className={"w-full h-44 overflow-hidden"}>
          {/*<div className={"w-full grid grid-cols-2 gap-3 xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3"}>*/}
          <div className={"w-full h-48 flex gap-4 overflow-x-scroll overflow-y-hidden"}>
            <div className={"w-full h-40 p-4 shadow-md bg-secondary rounded-xl min-w-48"}>
              <div className={"flex items-center gap-2"}>
                <div className={""}>
                  <img src="https://cdn.simplize.vn/simplizevn/community/images/1669865958809-Ellipse_909VNIndex.png"
                       className={"w-6 h-6"}/>
                </div>
                <Link href={"/charts/VNINDEX"}>
                  <h6 className={"text-sm font-semibold"}>VNINDEX</h6>
                </Link>
              </div>
              <div className={"text-foreground text-sm font-semibold flex items-center gap-1"}><h6>1,221.03</h6>
                <div className={"text-primary"}><h6>+4.67</h6></div>
                <VariedBadge className={"font-medium text-[0.8rem] leading-5 opacity-90 px-[1 px] py-[0.5px] text-white"} number={0.38} dataType={"%"}/>
              </div>
              <div className={"w-full h-auto overflow-hidden"}>
                <AreaChart colors={{backgroundColor: 'transparent'}} height={80}/>

              </div>
            </div>
            <div className={"w-full h-40 p-4 shadow-md bg-secondary rounded-xl min-w-48"}></div>
            <div className={"w-full h-40 p-4 shadow-md bg-secondary rounded-xl min-w-48"}></div>
            <div className={"w-full h-40 p-4 shadow-md bg-secondary rounded-xl min-w-48"}></div>
            <div className={"w-full h-40 p-4 shadow-md bg-secondary rounded-xl min-w-48"}></div>
            <div className={"w-full h-40 p-4 shadow-md bg-secondary rounded-xl min-w-48"}></div>
          </div>
        </div>
        <div className={"w-full my-10 flex items-center justify-between"}>
          <div className={"text-2xl font-bold flex items-center"}>
            <Link href={"/thi-truong"}>Thị trường</Link>
            <ChevronDownIcon className={"-rotate-90 w-6 h-6 text-gray-300"}/>
          </div>
          <div className={"md:flex gap-3 hidden"}>
            <Button variant={"secondary"} className={"gap-2 w-56"}>
              <PieChart/>
              Danh mục đầu tư
            </Button>
            <Button variant={"secondary"} className={"gap-2 w-56"}>
              <PieChart/>
              Danh sách theo dõi
            </Button>
          </div>
        </div>
        <div className={"w-full grid grid-cols-1 lg:grid-cols-6"}>
          <div className={"lg:col-span-4"}>
            <div className={"block md:flex items-center justify-between"}>
              <div className={"mb-3"}>
                <div className={"flex items-center gap-3 text-2xl font-bold"}>
                  <h2 className={""}>1,216.36</h2>
                  <h2 className={"text-primary"}>6.83</h2>
                  <VariedBadge className={"text-white"} number={0.38} dataType={"%"}/>
                </div>
                <h6 className={"text-foreground opacity-80 text-[0.7rem] font-light"}>Chỉ số VN-Index</h6>
              </div>
              <div className={"mb-3"}>
                <h2 className={"text-primary text-2xl font-bold"}>Booming</h2>
                <h6 className={"flex items-center gap-2 text-foreground opacity-80 text-[0.7rem] font-light"}>
                  Chu kỳ thị trường Việt Nam hiện tại
                  <svg width="16" height="16" className="css-1f19x3d" viewBox="0 0 12 12" stroke="#999999" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5"></circle>
                    <path d="M6 5.5L6 8.5" stroke-linecap="round"></path>
                    <path
                      d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z"></path>
                  </svg>
                </h6>
              </div>
              <div className={"flex items-center gap-1 text-sm text-blue-400"}>
                <h6 className={""}>Xem chi tiết</h6>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1L4.5 4L3 5.5L1.5 7" stroke="#006CEC" stroke-width="2" stroke-linecap="round"></path>
                </svg>
              </div>
            </div>
            <div className={"w-full h-[400px] "}>
              <MainChart colors={{backgroundColor: 'transparent'}} height={400}/>
            </div>
          </div>
          <div className={"lg:col-span-2"}></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;