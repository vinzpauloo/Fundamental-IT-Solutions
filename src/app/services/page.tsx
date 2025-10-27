import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "image", src: "/team.png" }}
        className="h-[670px]"
      >
        <LayoutContainer
          className="flex items-center justify-center h-[670px] flex-col text-white gap-6"
          outerClassName="z-20"
        >
          <h6 className="text-xl font-normal md:font-semibold text-center">
            Dedicated Development Teams
          </h6>
          <h1 className="text-[40px] md:text-[60px] font-bold text-center leading-none w-full md:w-3/4">
            Build an elite development team{" "}
            <span className="text-[#e5caa2]">that feels like yours</span>
          </h1>
          <h6 className="text-xl font-normal md:font-semibold text-center  w-full md:w-3/4">
            Integrate a custom team of software experts from the Philippines
            into your organization and enjoy dedicated support and specialized
            skills for your tech needs.
          </h6>

          <Button className="bg-[#415A77] text-white rounded-full">
            <ArrowRight className="w-4 h-4" />
            Get Started
          </Button>
        </LayoutContainer>
      </MainContent>
    </main>
  );
}
