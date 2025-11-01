import Navigator from "../common/Navigator";
import LayoutContainer from "./LayoutContainer";

const Header = () => {
  return (
    <header className="w-full px-2 py-3 md:px-0 md:py-4 bg-[#0D1B2A] border-b border-[#415A77]">
      <LayoutContainer className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/FISlogo.jpg"
            alt="Fundamental IT Solutions Logo"
            className="object-contain rounded-lg max-h-12"
          />
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
