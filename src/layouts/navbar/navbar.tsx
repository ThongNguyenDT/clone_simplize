import React from 'react';
import Link from "next/link";
import Logo from "@/components/ui/icon/clone-icons/logo";
import Navigation from "@/layouts/navbar/navigation-menu";
import { BellFilled, MenuOutlined } from "@ant-design/icons";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Market from "@/components/ui/icon/clone-icons/navbar/market";
import SearchBox from "@/components/ui/icon/clone-icons/navbar/search-box";

const navdata = [
  {
    title: "Thị trường",
    href: "/thi-truong",
    children: [
      {
        title: "Cổ phiếu",
        icon: <Market/>,
        href: "/co-phieu"
      },
      {
        title: "Nhóm Ngành",
        icon: <Market/>,
        href: "/nhom-nganh"
      },
      {
        title: "Chỉ Số",
        icon: <Market/>,
        href: "/chi-so"
      },
      {
        title: "Hàng hóa",
        icon: <Market/>,
        href: "/commodities"
      },
      {
        title: "Cryptocurrency",
        icon: <Market/>,
        href: "/cryptocurrencies"
      },
      {
        title: "lãi suất",
        icon: <Market/>,
        href: "/lai-suat"
      },
      {
        title: "Tỷ giá",
        icon: <Market/>,
        href: "/ty-gia"
      },
      {
        title: "Vĩ mô",
        icon: <Market/>,
        href: "/vi-mo"
      }
    ]
  },
  {
    title: "Biểu đồ kỹ thuật",
    href: "/charts/VNINDEX"
  },
  {
    title: "Công cụ",
    children: [
      {
        title: "Phân tích cổ phiếu",
        description: "Phân tích, định giá và trực quan hoá dữ liệu cổ phiếu",
        href: "/co-phieu/HPG/phan-tich",
        icon: <Market/>,
      },
      {
        title: "Bộ lọc cổ phiếu",
        description: "Tìm kiếm các \"siêu\" cổ phiếu đự trên nhiều chỉ số và tiêu chí",
        href: "/screener/",
        icon: <Market/>,
      },
      {
        title: "Tối ưu danh mục",
        description: "Phân bố vốn hiệu quả, hợp lý với các mục tiêu khẩu vị rõ ràng",
        href: "/portfolio/optimization",
        icon: <Market/>,
      },
      {
        title: "Quỹ đầu tư",
        description: "\"Theo chân người khổng lồ\" Theo dõi giao dịch của các quỹ đầu tư lớn trên thị trường",
        href: "/funds",
        icon: <Market/>,
      },
      {
        title: "Tính lãi suất",
        description: "Dễ dàng hoạch định tài chính thông qua công cụ tính lãi suất vay và tiết kiệm",
        href: "/cong-cu-tinh-lai-suat",
        icon: <Market/>,
      }
    ],
    className: "w-[300px]"
  }
]

const Navbar = ({ className }: any) => {
  return (
    <div className={className}>
      <div className={"lg:hidden w-5 h-4 flex items-center justify-center"}>
        <MenuOutlined className={"ms-10"}/>
      </div>
      <div className={"w-full lg:max-w-[1472px] flex items-center lg:justify-between justify-center lg:px-11"}>
        <div className={"flex items-center lg:gap-8 justify-center lg:justify-start"}>
          <Link href={"/"} className={"h-full"}>
            <div className={"h-full"}>
              <Logo className={"w-28 h-full text-foreground"}/>
            </div>
          </Link>
          <Navigation className={"lg:flex gap-3 items-center hidden  w-full"} data={navdata}/>
        </div>
        <div className={"hidden lg:block"}>
          <SearchBox placeholder={"hello"}/>
        </div>
      </div>
      <div className={"max-w-28 lg:hidden w-14 h-14 flex items-center justify-center"}>
        <div className={"w-14"}>
          <BellFilled/>
        </div>
        <div>
          <MagnifyingGlassIcon width={20} height={20}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

