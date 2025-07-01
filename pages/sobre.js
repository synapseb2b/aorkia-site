import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef({});

  // IntersectionObserver para detectar seções visíveis
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            setActiveSection(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.3,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Monitorar progresso de rolagem
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

  // Função para rolagem suave
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Sobre a AORKIA</title>
        <meta name="description" content="Ativando soluções de ponta para transformar seus ambientes críticos em sistemas coordenados, resilientes e escaláveis." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-white text-black">
        {/* Seção Hero - MANTIDA 100% ORIGINAL */}
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
                Sobre a <span className="text-[#0076FF]">AORKIA</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300">
                Ativando soluções de ponta para transformar seus ambientes críticos em sistemas coordenados, resilientes e escaláveis.
              </p>

              <button
                onClick={(e) => scrollToSection(e, 'historia')}
                className="text-lg font-medium px-8 py-3 border text-white border-white hover:bg-white hover:text-black transition-all duration-500 rounded-lg"
              >
                Conheça nossa história 
              </button>
            </div>
          </div>
        </section>

        {/* Seção Nossa História - NOVA VERSÃO CONFORME SOLICITADO */}
        <section 
          id="historia"
          data-section-id="historia"
          ref={(el) => (sectionRefs.current.historia = el)}
          className="relative w-full min-h-screen py-24 overflow-hidden"
        >
          {/* Background com transição */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'historia' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/horizonte.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'historia' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors duration-500 ${
              activeSection === 'historia' ? 'text-white' : 'text-black'
            }`}>
              Nossa História
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Coluna Esquerda - Conteúdo Textual */}
              <div className="space-y-8">
                <div className={`prose prose-lg max-w-none transition-colors duration-500 ${
                  activeSection === 'historia' ? 'prose-invert' : ''
                }`}>
                  <p className={`text-xl leading-relaxed mb-6 transition-colors duration-500 ${
                    activeSection === 'historia' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Na AORKIA, transformamos complexidade tecnológica em vantagem competitiva real para o seu negócio. Somos ativadores de tecnologia de ponta, não apenas consultores ou revendedores.
                  </p>
                  
                  <p className={`text-xl leading-relaxed mb-6 transition-colors duration-500 ${
                    activeSection === 'historia' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Fundada por especialistas com décadas de experiência em segurança cibernética e governança de dados, nossa missão é ativar as melhores plataformas globais para que você resolva seus desafios mais críticos e obtenha resultados tangíveis e duradouros.
                  </p>
                  
                  <p className={`text-xl leading-relaxed transition-colors duration-500 ${
                    activeSection === 'historia' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Nossa abordagem única combina expertise técnica profunda com visão estratégica de negócios, garantindo que cada implementação gere valor imediato e crescimento sustentável.
                  </p>
                </div>
              </div>

              {/* Coluna Direita - Vídeo Torre Comando */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    preload="auto"
                  >
                    <source src="/video/torre_comando.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                  
                  {/* Overlay decorativo */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Nossos Valores - MANTIDA ORIGINAL */}
        <section 
          id="valores"
          data-section-id="valores"
          ref={(el) => (sectionRefs.current.valores = el)}
          className="relative w-full min-h-screen py-24 overflow-hidden"
        >
          {/* Background com transição */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'valores' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/horizonte.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'valores' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors duration-500 ${
              activeSection === 'valores' ? 'text-white' : 'text-black'
            }`}>
              Nossos Valores
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 - Ativação Estratégica */}
              <div className={`group p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                activeSection === 'valores' 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#0076FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-rocket-line text-2xl text-white"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                      activeSection === 'valores' ? 'text-white' : 'text-black'
                    }`}>
                      Ativação Estratégica
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Vamos além da implementação. Ativamos o valor real da tecnologia de ponta para impulsionar a resiliência e a vantagem competitiva do seu negócio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Curadoria de Excelência */}
              <div className={`group p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                activeSection === 'valores' 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#0076FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-award-line text-2xl text-white"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                      activeSection === 'valores' ? 'text-white' : 'text-black'
                    }`}>
                      Curadoria de Excelência
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Selecionamos e entregamos apenas plataformas líderes e comprovadamente robustas, garantindo as melhores soluções para seus desafios mais críticos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Foco em Resultados de Negócio */}
              <div className={`group p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                activeSection === 'valores' 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#0076FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-target-line text-2xl text-white"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                      activeSection === 'valores' ? 'text-white' : 'text-black'
                    }`}>
                      Foco em Resultados de Negócio
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Construímos parcerias que transformam seu investimento em tecnologia em proteção inabalável de dados, governança estratégica e crescimento mensurável.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Expertise e Visão Contínua */}
              <div className={`group p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                activeSection === 'valores' 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#0076FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-eye-line text-2xl text-white"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                      activeSection === 'valores' ? 'text-white' : 'text-black'
                    }`}>
                      Expertise e Visão Contínua
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Nossa experiência consolidada garante que sua empresa esteja sempre à frente, com soluções adaptadas aos desafios de segurança e governança de dados do futuro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INÍCIO DA SEÇÃO "NOSSO ECOSSISTEMA DE PROTEÇÃO" */}
        <section
          id="parcerias" // Adicione um ID para a seção, se desejar
          data-section-id="parcerias"
          ref={(el) => (sectionRefs.current.parcerias = el)}
          className="relative w-full min-h-screen py-24 overflow-hidden" // Ajuste as classes conforme necessário
        >
          {/* Background com transição (se aplicável a esta seção) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'parcerias' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/horizonte.png)` }} // Use a imagem de fundo que desejar
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'parcerias' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-colors duration-500 ${
                activeSection === 'parcerias' ? 'text-white' : 'text-black'
              }`}>
                Nosso Ecossistema de Proteção
              </h2>
              
              <p className={`text-xl max-w-4xl mx-auto transition-colors duration-500 ${
                activeSection === 'parcerias' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Sua empresa usa as maiores plataformas. Nós garantimos a segurança e o controle delas.
              </p>
            </div>
            
            {/* Categoria 1: Produtividade e Colaboração */}
            <div className="mb-16">
              <h3 className={`text-2xl font-bold mb-8 text-center transition-colors duration-500 ${
                activeSection === 'parcerias' ? 'text-white' : 'text-black'
              }`}>
                Produtividade e Colaboração
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[ 
                  { name: 'Microsoft 365', icon: '/icon/microsoft_365.png' },
                  { name: 'Google Workspace', icon: '/icon/google_workspace.png' },
                  { name: 'Salesforce', icon: '/icon/salesforce.png' },
                  { name: 'Zendesk', icon: '/icon/zendesk.png' },
                  { name: 'Jira', icon: '/icon/jira.png' }
                ].map((platform, index) => (
                  <div key={index} className="group">
                    <div className={`p-6 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                      activeSection === 'parcerias' 
                        ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20' 
                        : 'bg-white border border-gray-200 hover:shadow-lg'
                    }`}>
                      <Image
                        src={platform.icon}
                        alt={platform.name}
                        className="w-full h-12 object-contain mx-auto mb-3"
                        width={120}
                        height={48}
                      />
                      <p className={`text-sm text-center font-medium transition-colors duration-500 ${
                        activeSection === 'parcerias' ? 'text-white' : 'text-gray-700'
                      }`}>
                        {platform.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categoria 2: Desenvolvimento e DevOps */}
            <div className="mb-16">
              <h3 className={`text-2xl font-bold mb-8 text-center transition-colors duration-500 ${
                activeSection === 'parcerias' ? 'text-white' : 'text-black'
              }`}>
                Desenvolvimento e DevOps
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[ 
                  { name: 'Azure DevOps', icon: '/icon/azure_devops.png' },
                  { name: 'Power Platform', icon: '/icon/power_platform.png' },
                  { name: 'Dynamics 365', icon: '/icon/dynamics_365.png' },
                  { name: 'Confluence', icon: '/icon/confluence.png' },
                  { name: 'Microsoft Entra ID', icon: '/icon/microsoft_entra_id.png' }
                ].map((platform, index) => (
                  <div key={index} className="group">
                    <div className={`p-6 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                      activeSection === 'parcerias' 
                        ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20' 
                        : 'bg-white border border-gray-200 hover:shadow-lg'
                    }`}>
                      <Image
                        src={platform.icon}
                        alt={platform.name}
                        className="w-full h-12 object-contain mx-auto mb-3"
                        width={120}
                        height={48}
                      />
                      <p className={`text-sm text-center font-medium transition-colors duration-500 ${
                        activeSection === 'parcerias' ? 'text-white' : 'text-gray-700'
                      }`}>
                        {platform.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categoria 3: Infraestrutura Cloud */}
            <div>
              <h3 className={`text-2xl font-bold mb-8 text-center transition-colors duration-500 ${
                activeSection === 'parcerias' ? 'text-white' : 'text-black'
              }`}>
                Infraestrutura Cloud
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[ 
                  { name: 'AWS', icon: '/icon/aws.png' },
                  { name: 'Microsoft Azure', icon: '/icon/azure.png' },
                  { name: 'Google Cloud', icon: '/icon/gcp.png' },
                ].map((platform, index) => (
                  <div key={index} className="group">
                    <div className={`p-6 rounded-xl transition-all duration-300 group-hover:scale-105 ${
                      activeSection === 'parcerias' 
                        ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20' 
                        : 'bg-white border border-gray-200 hover:shadow-lg'
                    }`}>
                      <Image
                        src={platform.icon}
                        alt={platform.name}
                        className="w-full h-12 object-contain mx-auto mb-3"
                        width={120}
                        height={48}
                      />
                      <p className={`text-sm text-center font-medium transition-colors duration-500 ${
                        activeSection === 'parcerias' ? 'text-white' : 'text-gray-700'
                      }`}>
                        {platform.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> {/* Fechamento do container mx-auto */}
        </section> {/* FECHAMENTO DA SEÇÃO "NOSSO ECOSSISTEMA DE PROTEÇÃO" */}

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-[#0076FF] to-[#0056CC] text-white">
          {/* ... conteúdo do CTA Final ... */}
        </section>
      </main> {/* FECHAMENTO DA TAG MAIN */}
    </>
  );
}

