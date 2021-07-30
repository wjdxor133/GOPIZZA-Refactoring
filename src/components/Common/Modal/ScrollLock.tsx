import { useLayoutEffect } from "react";

declare global {
  interface window {
    window: any;
  }
}

export function ScrollLock() {
  useLayoutEffect((): any => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}
