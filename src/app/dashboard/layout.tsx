import BottomBar from "@/components/BottomBar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import WithAuth from "./WithAuth";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen overflow-hidden relative flex">
      <div className="flex-1 hidden lg:block sticky bg-[#1992C90A]">
        <LeftSidebar />
      </div>
      <div className="flex-[3] content flex flex-col h-screen">
        <div className="h-[88.8%] lg:h-full overflow-y-scroll scrollbar-hide px-7 pt-10">
          <WithAuth>
          {children}
          </WithAuth>
        </div>
        <div className="h-[11.2%] lg:hidden flex items-center justify-center px-2">
          <BottomBar />
        </div>
      </div>
      <div className="flex-1 hidden lg:block sticky p-[10px] overflow-y-scroll scrollbar-hide h-screen">
        <RightSidebar />
      </div>
    </div>
  );
}