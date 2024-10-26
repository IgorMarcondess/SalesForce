'use client'
import { useEffect } from "react";
import imagem1 from "../../../../public/images/imagem1.png";

// Extender o tipo de `window` para incluir VLibras
declare global {
  interface Window {
    VLibras: any;
  }
}

export default function PaginaInicial1() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
  }, []);

  return (
    <>
      <main>
        <div className="bg-azulEscuro-100 w-full h-3/4 flex flex-col items-center text-xl md:bg-azulEscuro-100 md:h-96 md:flex md:flex-row md:items-center">
          <h1 className="font-titulo w-6/12 text-slate-50 md:font-titulo md:w-2/4 md:ml-16 md:mx-11 md:mr-16 md:text-xl">
            A Saleforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento
            pra aproximar empresas e pessoas. É um plataforma de CRM integrada que oferece a todos os
            departamentos uma vão única e compartilhada de cada cliente.
          </h1>
          <img className="w-80 h-80 md:ml-28" src={imagem1.src} alt="Imagem ilustrativa"/>
        </div>
      </main>
    </>
  );
}
