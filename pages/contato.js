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
        {/* Hero Section com Vídeo de Fundo */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Vídeo de Fundo */}
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>

          {/* Conteúdo da Hero */}
          <div className="relative z-20 container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Vamos Conversar?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Descubra como a AORKIA pode ativar tecnologia estratégica para transformar seus desafios em resultados mensuráveis.
            </p>
            
            {/* CTA para rolar para o formulário */}
            <button 
              onClick={scrollToContact}
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Falar com Especialista
            </button>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ Consultoria especializada • ✓ Implementação garantida • ✓ Suporte contínuo</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="animate-bounce">
              <i className="ri-arrow-down-line text-white text-2xl"></i>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

