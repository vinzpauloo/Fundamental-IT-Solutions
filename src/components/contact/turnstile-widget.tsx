"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";

type TurnstileRenderOptions = {
  sitekey: string;
  action: string;
  size: "flexible";
  theme: "light";
  "refresh-expired": "auto";
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const turnstileScriptSrc =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export function TurnstileWidget({ siteKey }: { siteKey: string }) {
  const container = useRef<HTMLDivElement | null>(null);
  const widgetId = useRef<string | null>(null);

  const renderWidget = useCallback(() => {
    const turnstile = window.turnstile;
    if (!turnstile || !container.current || widgetId.current !== null) {
      return;
    }
    widgetId.current = turnstile.render(container.current, {
      sitekey: siteKey,
      action: "contact",
      size: "flexible",
      theme: "light",
      "refresh-expired": "auto",
    });
  }, [siteKey]);

  const attachContainer = useCallback(
    (node: HTMLDivElement) => {
      container.current = node;
      renderWidget();
      return () => {
        if (widgetId.current !== null) {
          window.turnstile?.remove(widgetId.current);
        }
        widgetId.current = null;
        container.current = null;
      };
    },
    [renderWidget],
  );

  return (
    <>
      <Script
        src={turnstileScriptSrc}
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div ref={attachContainer} className="min-h-[65px]" />
    </>
  );
}
