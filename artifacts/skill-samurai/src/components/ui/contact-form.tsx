"use client";

import Script from "next/script";

export function ContactForm() {
  return (
    <>
      <iframe
        src="https://link.skillsamurai.com/widget/form/IQgM9f88Vnnv8Lep8JV0"
        style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: 20 }}
        id="popup-IQgM9f88Vnnv8Lep8JV0"
        data-layout="{'id':'POPUP'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Us"
        data-height="783"
        data-layout-iframe-id="popup-IQgM9f88Vnnv8Lep8JV0"
        data-form-id="IQgM9f88Vnnv8Lep8JV0"
        title="Contact Us"
      />
      <Script
        src="https://link.skillsamurai.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
