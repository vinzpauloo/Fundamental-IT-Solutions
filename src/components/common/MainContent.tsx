import { Fragment } from "react";
import Image from "next/image";

export default function MainContent({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings: {
    type: "video" | "image";
    src: string;
  };
}) {
  return (
    <Fragment>
      <div className="w-full h-[670px] absolute top-0 left-0 right-0">
        {settings.type === "video" && (
          <video
            src={settings.src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
          />
        )}
        {settings.type === "image" && (
          <Image
            src={settings.src}
            alt="background"
            className="w-full h-full object-cover"
          />
        )}
        <div className="w-full h-full absolute top-0 left-0 right-0 z-15 bg-black/40" />
      </div>
      {children}
    </Fragment>
  );
}
