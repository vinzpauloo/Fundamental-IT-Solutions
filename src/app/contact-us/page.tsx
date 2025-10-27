import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
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
          <div className="flex flex-col gap-6 z-20 text-center">
            <h6 className="text-xl font-normal md:font-semibold">
              Get In Touch
            </h6>
            <h1 className="text-[40px] md:text-[60px] font-bold leading-none w-full md:w-3/4 mx-auto">
              Ready to connect with{" "}
              <span className="text-[#e5caa2]">endless possibilities?</span>
            </h1>
            <h6 className="text-xl font-normal md:font-semibold w-full md:w-3/4 mx-auto">
              Let's discuss how our team can help bring your vision to life.
              Reach out and start your journey with us today.
            </h6>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-4xl mt-8">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/20 p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-300">hello@fundamentals.ph</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-300">+63 (XXX) XXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="bg-white/20 p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-300">Philippines</p>
              </div>
            </div>
          </div>

          <Button className="bg-[#e5caa2] text-[#415A77] rounded-full font-semibold hover:bg-[#d4b891] transition-colors">
            <ArrowRight className="w-4 h-4" />
            Start Your Project
          </Button>
        </LayoutContainer>
      </MainContent>
    </main>
  );
}
