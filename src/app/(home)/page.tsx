import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CompanyStats from "./components/CompanyStats";
import Potential from "./components/Potential";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent settings={{ type: "video", src: "/video.mp4" }}>
        <LayoutContainer
          className="flex items-center md:justify-between h-[670px] flex-col justify-center md:flex-row gap-4 md:gap-0"
          outerClassName="z-20"
        >
          <div className="flex-col gap-2 md:gap-4 flex max-w-[500px]">
            <h1 className="text-[40px] font-extrabold leading-none text-center md:text-left text-white">
              We connect people and{" "}
              <span className="text-[#e5caa2]">endless possibilities</span>
            </h1>
            <p className="text-lg font-normal text-gray-500 text-white text-center md:text-left">
              Enhance your team with experienced, collaborative software
              professionals from the Philippines.
            </p>
          </div>
          <div className="max-w-[300px] bg-transparent md:bg-white rounded-lg p-4 flex flex-col gap-4 hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2 flex-row hidden md:flex">
              <Image
                src="/placeholder.png"
                alt="logo"
                width={60}
                height={60}
                className="rounded-full aspect-square object-cover"
              />
              <p className="text-lg font-bold text-[#415A77]">
                Looking for reliable tech talent?
              </p>
            </div>
            <Button className="bg-[#415A77] text-white w-full min-w-[150px]">
              <ArrowRight className="w-4 h-4" />
              Get Started
            </Button>
          </div>
        </LayoutContainer>
      </MainContent>

      <CompanyStats />
      <Potential />
    </main>
  );
}
