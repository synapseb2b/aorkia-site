import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Contato() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave ao clicar no botão "Contato" - agora rola para o footer global
  const scrollToContact = (e) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Contato | AORKIA</title>
        <meta name="description" content="Entre em contato com a AORKIA para descobrir como nossas soluções estratégicas podem impulsionar sua empresa." />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 com vídeo */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                Entre em contato conosco.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white">
                Fale com a <span className="text-primary">AORKIA</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300">
                Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
              </p>
              
              {/* Botão para rolar para o footer global */}
              <button 
                onClick={scrollToContact}
                className="text-lg font-medium px-8 py-3 border text-white border-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Contato
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex justify-center animate-bounce">
            <a 
              href="#footer" 
              onClick={scrollToContact}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

