"use client"; // Marca este arquivo como um Componente Cliente

import { useEffect } from "react";
import Script from "next/script";

const ClientLayout = ({ children }) => {
  useEffect(() => {
    // Inicializando o dataLayer
    window.dataLayer = window.dataLayer || [];
  }, []);

  return (
    <>
      {/* Código do Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K3DL7SQ9');`}
      </Script>
      {children}
    </>
  );
};

export default ClientLayout;