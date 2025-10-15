import Navigator from "../common/Navigator";
import LayoutContainer from "./LayoutContainer";
import { Zap, Code } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-2 py-3 md:px-0 md:py-4 bg-[#0D1B2A] border-b border-[#415A77]">
      <LayoutContainer className="flex justify-between items-center">
        <div className="flex items-center space-x-3 px-2">
          <div className="relative">
            <div className="w-10 h-10 bg-[#415A77] rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#778DA9] rounded-full flex items-center justify-center">
              <Zap className="w-2 h-2 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">
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
