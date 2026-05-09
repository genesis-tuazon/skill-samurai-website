"use client";

import { useEffect } from "react";

const FORM_ID = "IQgM9f88Vnnv8Lep8JV0";
const POPUP_ID = `popup-${FORM_ID}`;
const SCRIPT_SRC = "https://link.skillsamurai.com/js/form_embed.js";

export function ContactForm() {
  useEffect(() => {
    // Don't double-inject (React StrictMode / fast refresh)
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

    // Inject the GHL embed script
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // GHL wraps the iframe in a container div attached to <body>.
      // Walk up from the iframe to find that outermost container, then remove it.
      const el = document.getElementById(POPUP_ID);
      if (el) {
        let node: Element = el;
        while (node.parentElement && node.parentElement !== document.body) {
          node = node.parentElement;
        }
        node.remove();
      }
      // Remove the script tag so re-navigation reloads it fresh
      const existingScript = document.querySelector(
        `script[src="${SCRIPT_SRC}"]`
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  // Nothing in the React tree — the iframe lives entirely in document.body
  return null;
}
