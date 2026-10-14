import {
  Activity,
  CloudCog,
  Layers,
  Network,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { CapabilityIcon } from "@/content/services";
import { cn } from "@/lib/utils";

export const capabilityIcons: Record<CapabilityIcon, LucideIcon> = {
  Layers,
  Smartphone,
  Network,
  CloudCog,
  Activity,
  Workflow,
};

type CapabilityIconTileProps = {
  icon: CapabilityIcon;
  tone?: "light" | "dark";
};

export function CapabilityIconTile({
  icon,
  tone = "light",
}: CapabilityIconTileProps) {
  const Icon = capabilityIcons[icon];

  return (
    <span
      className={cn(
        "inline-flex size-14 shrink-0 items-center justify-center rounded-xl ring-1",
        tone === "dark"
          ? "bg-forest-900 text-gold-300 ring-forest-600/60"
          : "bg-forest-800 text-gold-300 ring-forest-700/30",
      )}
    >
      <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
    </span>
  );
}
