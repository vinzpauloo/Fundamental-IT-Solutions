"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" arrow disabled={pending}>
      {pending ? "Sending…" : "Send enquiry"}
    </Button>
  );
}
