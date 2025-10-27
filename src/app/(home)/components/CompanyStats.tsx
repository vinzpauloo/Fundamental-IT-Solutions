import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CompanyStats() {
  return (
    <LayoutContainer
      className="flex flex-col gap-12 justify-center items-center min-h-[500px] md:min-h-[400px]"
      outerClassName="bg-[#f8f8f8]"
    >
      <h2 className="text-xl font-normal text-center">
        In today's ruthless software engineering job market, where skilled
        developers are hard to find and even harder to retain, fast-moving tech
        companies need a smart recruitment strategy to keep their best people
        around. That's where we come in.
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around w-full">
        <Counter title="300+" description="Software exports on board" />
        <Counter title="7+" description="Average years of experience" />
        <Counter title="5/5" description="Average rating" />
        <Counter title="100%" description="Dedicated team" />
      </div>
      <Button className="md:self-end text-blue-500" variant="ghost">
        More about us
        <ArrowRight className="w-4 h-4" />
      </Button>
    </LayoutContainer>
  );
}

function Counter({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm font-normal">{description}</p>
    </div>
  );
}
