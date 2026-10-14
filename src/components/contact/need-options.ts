import { capabilities } from "@/content/services";

const otherNeedOption = "Something else";

export const needOptions: readonly string[] = [
  ...capabilities.map((capability) => capability.title),
  otherNeedOption,
];
