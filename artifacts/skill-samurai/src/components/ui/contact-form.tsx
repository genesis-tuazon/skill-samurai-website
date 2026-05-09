"use client";

import { useEffect } from "react";

const FORM_ID = "IQgM9f88Vnnv8Lep8JV0";
const POPUP_ID = `popup-${FORM_ID}`;
const SCRIPT_SRC = "https://link.skillsamurai.com/js/form_embed.js";

export function ContactForm() {
  useEffect(() => {
    // Only inject once — works across client-side back/forward navigation
    if (document.getElementById(POPUP_ID)) return;

    // Inject the iframe directly into <body> so GHL can freely move/wrap it
    // without conflicting with React's DOM ownership.
    const iframe = document.createElement("iframe");
    iframe.src = `https://link.skillsamurai.com/widget/form/${FORM_ID}`;
    Object.assign(iframe.style, {
      display: "none",
      width: "100%",
      height: "100%",
      border: "none",
      borderRadius: "20px",
    });
    iframe.id = POPUP_ID;
    iframe.setAttribute("data-layout", "{'id':'POPUP'}");
    iframe.setAttribute("data-trigger-type", "alwaysShow");
    iframe.setAttribute("data-trigger-value", "");
    iframe.setAttribute("data-activation-type", "alwaysActivated");
    iframe.setAttribute("data-activation-value", "");
    iframe.setAttribute("data-deactivation-type", "neverDeactivate");
    iframe.setAttribute("data-deactivation-value", "");
    iframe.setAttribute("data-form-name", "Contact Us");
    iframe.setAttribute("data-height", "783");
    iframe.setAttribute("data-layout-iframe-id", POPUP_ID);
    iframe.setAttribute("data-form-id", FORM_ID);
    iframe.title = "Contact Us";
    document.body.appendChild(iframe);

    // Inject GHL script (once per session)
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    // No cleanup — GHL manages its own overlay visibility after close.
    // Attempting DOM removal on unmount risks crashes when GHL has already
    // moved or destroyed those nodes. Leaving them in <body> is safe.
  }, []);

  // Nothing in the React tree — the iframe lives entirely in document.body
  return null;
}
