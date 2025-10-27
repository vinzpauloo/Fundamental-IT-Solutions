import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "color", color: "#122636" }}
        className="h-[670px]"
      >
        <LayoutContainer
          className="flex items-center justify-center h-[670px] flex-col text-white gap-6"
          outerClassName="z-20 relative"
        >
          <div className="flex flex-col gap-6 z-20">
            <h6 className="text-xl font-normal md:font-semibold">
              About Fundamentals IT Solutions
            </h6>
            <h1 className="text-[40px] md:text-[60px] font-bold leading-none w-full md:w-3/4">
              Meet one of the happiest,{" "}
              <span className="text-[#ff6f8b]">
                most impactful software firms
              </span>
            </h1>
            <h6 className="text-xl font-normal md:font-semibold w-full md:w-3/4">
              Discover the people behind Fundamentals IT Solutions and how we
              vibe as a team.
            </h6>
          </div>
          <Image
            src="/people.png"
            alt="about"
            width={888}
            height={575}
            className="object-cover absolute bottom-0 right-0 z-10 hidden md:block"
          />
        </LayoutContainer>
      </MainContent>
    </main>
  );
}
