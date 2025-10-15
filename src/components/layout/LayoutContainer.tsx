import { cn } from "@/lib/utils";

export default function LayoutContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[1600px] mx-auto", className)}>{children}</div>
  );
}
