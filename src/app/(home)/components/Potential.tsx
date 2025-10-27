"use client";

import LayoutContainer from "@/components/layout/LayoutContainer";
import { Clock, Zap, Shield, Users, Rocket, Award } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const contents = [
  {
    title: "Fast Delivery",
    description:
      "We deliver your software projects on time and within budget, ensuring rapid deployment without compromising quality.",
    icon: <Clock className="w-12 h-12" />,
  },
  {
    title: "High Performance",
    description:
      "Optimized solutions that scale with your business needs, delivering lightning-fast performance and reliability.",
    icon: <Zap className="w-12 h-12" />,
  },
  {
    title: "Security First",
    description:
      "Enterprise-grade security measures protect your data and applications from modern cyber threats.",
    icon: <Shield className="w-12 h-12" />,
  },
  {
    title: "Expert Team",
    description:
      "Work with seasoned professionals who bring years of experience in cutting-edge technologies.",
    icon: <Users className="w-12 h-12" />,
  },
  {
    title: "Rapid Innovation",
    description:
      "Accelerate your digital transformation with agile methodologies and modern development practices.",
    icon: <Rocket className="w-12 h-12" />,
  },
  {
    title: "Quality Assured",
    description:
      "Rigorous testing and quality control processes ensure your software meets the highest standards.",
    icon: <Award className="w-12 h-12" />,
  },
];

export default function Potential() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <LayoutContainer className="flex flex-col justify-center items-center min-h-[500px] md:h-[650px] gap-4 px-0">
      <div className="flex flex-col gap-2 text-center px-4">
        <h1 className="text-2xl font-bold">
          Accelerate your software timelines and drive change months faster.
        </h1>
        <p className="text-sm font-normal">
          We help tech-first companies speed up software development by
          enhancing their in-house capabilities with top-notch Filipino
          developers.
        </p>
      </div>

      <div className="w-full flex flex-col gap-2 md:hidden">
        <div className="overflow-hidden p-2 w-full" ref={emblaRef}>
          <div className="flex gap-4">
            {contents.map((content, index) => (
              <Content key={index} {...content} />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2">
          {contents.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:grid grid-cols-3 gap-4">
        {contents.map((content, index) => (
          <Content
            key={index}
            {...content}
            containerClassName="border-none shadow-none"
          />
        ))}
      </div>
    </LayoutContainer>
  );
}

function Content({
  title,
  description,
  icon,
  containerClassName,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "min-w-[250px] max-w-[300px] hover:scale-105 transition-all duration-300 flex flex-col gap-3 items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full border border-gray-200",
        containerClassName
      )}
    >
      <div className="text-[#415A77] mb-2">{icon}</div>
      <h2 className="text-lg font-bold text-center text-gray-800">{title}</h2>
      <p className="text-sm font-normal text-center text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
