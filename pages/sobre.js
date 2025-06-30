import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  // Efeito para monitorar o progresso de rolagem e detectar seções visíveis
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Detectar qual seção está visível e ativar transição
      const sections = document.querySelectorAll('[data-section-id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

        if (isVisible) {
          const sectionId = section.getAttribute('data-section-id');
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave ao clicar em links internos
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Função para ativar seção no hover/touch
  const handleSectionInteraction = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Função para desativar seção (apenas no desktop)
  const handleSectionLeave = () => {
    // No mobile, mantém ativo; no desktop, desativa
    if (window.innerWidth >= 768) {
      setActiveSection(null);
    }
  };

  const parceiros = [
    { name: 'Keepit', icon: '/icon/keepit_logo_aorkia.png' },
    { name: 'Microsoft', icon: '/icon/microsoft_365.png' },
    { name: 'Google', icon: '/icon/gcp.png' },
    { name: 'AWS', icon: '/icon/aws.png' },
    { name: 'Salesforce', icon: '/icon/salesforce.png' }
  ];

  return (
    <>
      <Head>
        <title>Sobre a AORKIA</title>
        <meta name="description" content="Ativando soluções de ponta para transformar seus ambientes críticos em sistemas coordenados, resilientes e escaláveis." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - VÍDEO CORRIGIDO */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0"
            preload="auto"
          >
            <source src="/video/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                Conheça a AORKIA.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white">
                Sobre a <span className="text-primary">AORKIA</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300">
                Ativando soluções de ponta para transformar seus ambientes críticos em sistemas coordenados, resilientes e escaláveis.
              </p>

              {/* Botão para rolar para a história */}
              <button
                onClick={(e) => scrollToSection(e, 'historia')}
                className="text-lg font-medium px-8 py-3 border text-white border-white hover:bg-white hover:text-black transition-all duration-500 rounded-lg"
              >
                Conheça nossa história
              </button>
            </div>
          </div>
        </section>

        {/* Seção História */}
        <section 
          id="historia"
          data-section-id="historia"
          className="relative w-full min-h-screen py-24 bg-white text-black"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
                  Nossa História
                </h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    A AORKIA nasceu da necessidade de transformar a complexidade tecnológica em vantagem competitiva real. Fundada por especialistas com décadas de experiência em segurança cibernética e governança de dados, nossa missão é ativar as melhores plataformas globais para resolver os desafios mais críticos das empresas.
                  </p>
                  <p>
                    Não somos apenas consultores ou revendedores. Somos ativadores de tecnologia de ponta, transformando soluções complexas em resultados tangíveis e duradouros para nossos clientes.
                  </p>
                  <p>
                    Nossa abordagem única combina expertise técnica profunda com visão estratégica de negócios, garantindo que cada implementação gere valor imediato e crescimento sustentável.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/image/sobre_historia.png"
                  alt="História da AORKIA"
                  className="w-full h-auto rounded-lg shadow-2xl"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção Nossos Valores - IMAGEM DE FUNDO CORRIGIDA */}
        <section 
          id="valores"
          data-section-id="valores"
          className="relative w-full min-h-screen py-24 overflow-hidden"
          onMouseEnter={() => handleSectionInteraction('valores')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('valores')}
        >
          {/* Background Image - CORRIGIDO */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-0 ${
              activeSection === 'valores' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/horizonte.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color */}
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-500 z-0 ${
              activeSection === 'valores' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors duration-500 ${
              activeSection === 'valores' ? 'text-white' : 'text-black'
            }`}>
              Nossos Valores
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-white' : 'text-black'
                }`}>
                  Excelência
                </h3>
                <p className={`text-lg transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Buscamos a perfeição em cada projeto, entregando soluções que superam expectativas e geram resultados excepcionais.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-lightbulb-line text-2xl text-white"></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-white' : 'text-black'
                }`}>
                  Inovação
                </h3>
                <p className={`text-lg transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Ativamos as tecnologias mais avançadas do mercado, sempre na vanguarda da transformação digital.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-team-line text-2xl text-white"></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-white' : 'text-black'
                }`}>
                  Parceria
                </h3>
                <p className={`text-lg transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Construímos relacionamentos duradouros, trabalhando lado a lado com nossos clientes para alcançar o sucesso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Parcerias Estratégicas - IMAGEM DE FUNDO CORRIGIDA */}
        <section 
          id="parcerias"
          data-section-id="parcerias"
          className="relative w-full min-h-screen py-24 overflow-hidden"
          onMouseEnter={() => handleSectionInteraction('parcerias')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('parcerias')}
        >
          {/* Background Image - CORRIGIDO */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 z-0 ${
              activeSection === 'parcerias' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/horizonte.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color */}
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-500 z-0 ${
              activeSection === 'parcerias' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors duration-500 ${
              activeSection === 'parcerias' ? 'text-white' : 'text-black'
            }`}>
              Parcerias Estratégicas
            </h2>
            
            <p className={`text-xl text-center mb-16 max-w-4xl mx-auto transition-colors duration-500 ${
              activeSection === 'parcerias' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Trabalhamos com os líderes globais em tecnologia para oferecer as melhores soluções do mercado.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {parceiros.map((parceiro, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
                    <Image
                      src={parceiro.icon}
                      alt={parceiro.name}
                      className="w-full h-12 object-contain mx-auto"
                      width={120}
                      height={48}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção CTA Final */}
        <section className="relative w-full py-24 bg-primary">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Descubra como a AORKIA pode ativar as melhores tecnologias para impulsionar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contato"
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Fale com um Especialista
              </Link>
              <Link
                href="/backup_saas_estrategico"
                className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Conheça Nossas Soluções
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

