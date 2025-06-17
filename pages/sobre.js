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
    { name: 'Keepit', icon: '/image/keepit_logo_aorkia.png' }, // Substitua por seu caminho de logo Keepit
    { name: 'Microsoft', icon: '/image/microsoft_logo.png' }, // Substitua por seu caminho de logo Microsoft
    { name: 'Google', icon: '/image/google_logo.png' },     // Substitua por seu caminho de logo Google
    { name: 'AWS', icon: '/image/aws_logo.png' },           // Substitua por seu caminho de logo AWS
    { name: 'Salesforce', icon: '/image/salesforce_logo.png' } // Substitua por seu caminho de logo Salesforce
  ];

  return (
    <>
      <Head>
        <title>Sobre a AORKIA | Soluções Estratégicas B2B</title>
        <meta name="description" content="Conheça a AORKIA, empresa especializada em ativação de soluções estratégicas para o mercado B2B, com foco em Backup SaaS, Operações de Bordas Inteligentes, Segurança e Inteligência de Receita." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 com vídeo igual à Home e Soluções */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
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
                className="text-lg font-medium px-8 py-3 border text-white border-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Conheça nossa história
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex justify-center animate-bounce">
            <a
              href="#historia"
              onClick={(e) => scrollToSection(e, 'historia')}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção Nossa História - Estilo Jam3 com transições e textos centralizados */}
        <section
          id="historia"
          data-section-id="historia"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('historia')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('historia')}
          onClick={() => handleSectionInteraction('historia')}
        >
          {/* Background Image (aparece apenas no hover/ativo) */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'historia' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Background Color (aparece quando não está em hover/ativo) */}
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'historia' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col items-center text-center"> {/* Centralizado */}
              <h2 className={`text-3xl md:text-5xl font-bold mb-12 transition-colors duration-500 ${
                activeSection === 'historia' ? 'text-white' : 'text-black'
              }`}>
                Nossa História
              </h2>

              <div className={`text-lg md:text-xl max-w-4xl space-y-8 transition-colors duration-500 ${
                activeSection === 'historia' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  A AORKIA nasce de uma convicção – forjada em mais de duas décadas de experiência imersiva no epicentro da tecnologia B2B – de que empresas ambiciosas merecem uma abordagem mais ágil e eficaz. Após testemunhar os desafios recorrentes de implementações lentas, custos imprevisíveis e o potencial de tecnologias globais muitas vezes não realizado plenamente, surgiu a visão de um novo tipo de parceiro. Um parceiro que não apenas oferece tecnologia, mas que a ativa com foco estratégico, transformando as melhores soluções do mundo em resultados de negócio reais e rentáveis para seus clientes.
                </p>
                <p>
                  Fundada em 2025, a AORKIA é a materialização dessa visão. Somos especialistas em realizar a curadoria e ativação de plataformas de ponta em Backup SaaS Estratégico, Operações de Bordas Inteligentes e Segurança para Operações Críticas. Nosso compromisso é com a implementação rápida, a redução de riscos associados à adoção tecnológica e a geração de valor imediato.
                </p>
                <p>
                  Iniciamos nossa trajetória sobre uma base sólida de expertise de mercado, com o objetivo de construir uma equipe de Heads altamente capacitados, dedicados a cada pilar de solução. Olhamos para o futuro com a ambição de expandir nossa capacidade de transformar desafios complexos em diferenciação operacional e valor estratégico para empresas que, como nós, acreditam no poder da tecnologia ativada com inteligência e propósito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Nossos Valores - Estilo Jam3 com transições e textos centralizados */}
        <section
          id="valores"
          data-section-id="valores"
          className="relative w-full min-h-screen overflow-hidden group border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('valores')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('valores')}
          onClick={() => handleSectionInteraction('valores')}
        >
          {/* Background Image (aparece apenas no hover/ativo) */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'valores' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/light_pont.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Background Color (aparece quando não está em hover/ativo) */}
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'valores' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col items-center"> {/* Centralizado */}
              <h2 className={`text-3xl md:text-5xl font-bold mb-16 transition-colors duration-500 ${
                activeSection === 'valores' ? 'text-white' : 'text-black'
              }`}>
                Nossos Valores
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className={`p-8 rounded-lg border transition-all duration-500 text-center ${ /* Centralizado */
                  activeSection === 'valores'
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-rocket-line"></i>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-white' : 'text-black'
                  }`}>
                    Ativação Estratégica
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Mais do que implementar, ativamos o valor real da tecnologia global para o seu negócio.
                  </p>
                </div>

                <div className={`p-8 rounded-lg border transition-all duration-500 text-center ${ /* Centralizado */
                  activeSection === 'valores'
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-award-line"></i>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-white' : 'text-black'
                  }`}>
                    Curadoria de Excelência
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Selecionamos e trazemos até você apenas soluções líderes e comprovadamente robustas.
                  </p>
                </div>

                <div className={`p-8 rounded-lg border transition-all duration-500 text-center ${ /* Centralizado */
                  activeSection === 'valores'
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-focus-3-line"></i>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-white' : 'text-black'
                  }`}>
                    Foco no Cliente e em Resultados
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Construímos parcerias para transformar seu investimento em tecnologia em vantagem competitiva duradoura.
                  </p>
                </div>

                <div className={`p-8 rounded-lg border transition-all duration-500 text-center ${ /* Centralizado */
                  activeSection === 'valores'
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-eye-line"></i>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-white' : 'text-black'
                  }`}>
                    Visão de Futuro, Expertise Presente
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Nascemos da experiência para construir o futuro, com um compromisso de evoluir constantemente e entregar o máximo potencial tecnológico aos nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Parceiros Estratégicos - Estilo Jam3 com transições e logos */}
        <section
          id="parceiros"
          data-section-id="parceiros"
          className="relative w-full overflow-hidden group border-b border-gray-800 py-24"
          onMouseEnter={() => handleSectionInteraction('parceiros')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('parceiros')}
          onClick={() => handleSectionInteraction('parceiros')}
        >
          {/* Background Image (aparece apenas no hover/ativo) */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'parceiros' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/ponta.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Background Color (aparece quando não está em hover/ativo) */}
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'parceiros' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center"> {/* Centralizado */}
              <h2 className={`text-3xl md:text-5xl font-bold mb-16 text-center transition-colors duration-500 ${ /* Centralizado */
                activeSection === 'parceiros' ? 'text-white' : 'text-black'
              }`}>
                Parceiros Estratégicos
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full"> {/* Adicionado w-full para alinhar o grid */}
                {parceiros.map((parceiro, index) => (
                  <div key={index} className={`flex items-center justify-center h-32 rounded-lg border transition-all duration-500 ${
                    activeSection === 'parceiros'
                    ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                    : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                  }`}>
                    {parceiro.icon ? (
                      <Image
                        src={parceiro.icon}
                        alt={parceiro.name}
                        width={100} // Ajuste conforme o tamanho ideal da logo
                        height={50} // Ajuste conforme o tamanho ideal da logo
                        objectFit="contain" // Garante que a logo se ajuste ao contêiner
                        className="max-h-full max-w-full opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <p className={`text-2xl font-bold transition-colors duration-500 ${
                        activeSection === 'parceiros' ? 'text-white' : 'text-black'
                      }`}>
                        {parceiro.name}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <Link
                  href="/contato"
                  className={`inline-flex items-center text-lg font-medium px-8 py-3 border transition-all duration-500 ${
                    activeSection === 'parceiros'
                    ? 'text-white border-white hover:bg-white hover:text-black'
                    : 'text-black border-black hover:bg-black hover:text-white'
                  }`}
                >
                  <span>Fale Conosco</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
