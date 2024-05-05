import Sidebar from "@/layouts/sidebar/sidebar";
import Navbar from "@/layouts/navbar/navbar";
import Homepage from "@/layouts/homepage/homepage";

export default function Home() {
  return (
    <div>
      <div
        className={"w-14 fixed top-0 left-0 lg:flex flex-col items-center overflow-hidden h-screen shadow-2xl dark:shadow-sm dark:shadow-white pt-3 hidden z-20"}>
        <Sidebar/>
      </div>
      <div>
        <Navbar className={"lg:ms-14 w-full h-[6vh] pe-14 fixed top-0 left-0 flex items-center justify-center z-10 shadow-md dark:shadow-sm dark:shadow-gray-600 bg-background"}/>
      </div>
      <div>
        <Homepage className={"relative lg:ms-14 mt-16 mx-4 flex justify-center"}/>
      </div>
    </div>
  );
}


