import Navigator from "../common/Navigator";
import LayoutContainer from "./LayoutContainer";
import { Code } from "lucide-react";

const Header = () => {
  return (
    <header className="py-2 absolute top-0 left-0 right-0 z-20">
      <LayoutContainer className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-[#415A77] rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xs md:text-xl font-bold text-white">
              Fundamental IT
            </h1>
            <p className="text-xs text-[#E0E1DD]">Solutions</p>
          </div>
        </div>
        <Navigator />
      </LayoutContainer>
    </header>
  );
};

export default Header;
