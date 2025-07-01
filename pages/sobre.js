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
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
                Nossa História
              </h2>
              <div className="max-w-4xl space-y-6 text-lg text-gray-700">
                <p>
                  Na AORKIA, transformamos complexidade tecnológica em vantagem competitiva real para o seu negócio.
                </p>
                <p>
                  Somos ativadores de tecnologia de ponta, não apenas consultores ou revendedores.
                </p>
                <p>
                  Fundada por especialistas com décadas de experiência em segurança cibernética e governança de dados, nossa missão é ativar as melhores plataformas globais para que você resolva seus desafios mais críticos e obtenha resultados tangíveis e duradouros.
                </p>
                <p>
                  Nossa abordagem única combina expertise técnica profunda com visão estratégica de negócios, garantindo que cada implementação gere valor imediato e crescimento sustentável.
                </p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-rocket-line text-2xl text-white"></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-white' : 'text-black'
                }`}>
                  Ativação Estratégica
                </h3>
                <p className={`text-lg transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Vamos além da implementação. Ativamos o valor real da tecnologia de ponta para impulsionar a resiliência e a vantagem competitiva do seu negócio.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-award-line text-2xl text-white"></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-white' : 'text-black'
                }`}>
                  Curadoria de Excelência
                </h3>
                <p className={`text-lg transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Selecionamos e entregamos apenas plataformas líderes e comprovadamente robustas, garantindo as melhores soluções para seus desafios mais críticos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-target-line text-2xl text-white"></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-white' : 'text-black'
                }`}>
                  Foco em Resultados de Negócio
                </h3>
                <p className={`text-lg transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Construímos parcerias que transformam seu investimento em tecnologia em proteção inabalável de dados, governança estratégica e crescimento mensurável.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-eye-line text-2xl text-white"></i>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-white' : 'text-black'
                }`}>
                  Expertise e Visão Contínua
                </h3>
                <p className={`text-lg transition-colors duration-500 ${
                  activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Nossa experiência consolidada garante que sua empresa esteja sempre à frente, com soluções adaptadas aos desafios de segurança e governança de dados do futuro.
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
              Nosso Ecossistema de Proteção
            </h2>
            
            <p className={`text-xl text-center mb-16 max-w-4xl mx-auto transition-colors duration-500 ${
              activeSection === 'parcerias' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Sua empresa usa as maiores plataformas. Nós garantimos a segurança e o controle delas.
            </p>
            
            {/* Primeira linha de logos */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-12">
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/microsoft_365.png"
                    alt="Microsoft 365"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Microsoft 365</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/microsoft_entra_id.png"
                    alt="Microsoft Entra ID"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Microsoft Entra ID</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/google_workspace.png"
                    alt="Google Workspace"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Google Workspace</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/salesforce.png"
                    alt="Salesforce"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Salesforce</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/azure_devops.png"
                    alt="Microsoft Azure DevOps"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Azure DevOps</p>
                </div>
              </div>
            </div>

            {/* Segunda linha de logos */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-12">
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/power_platform.png"
                    alt="Microsoft Power Platform"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Power Platform</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/dynamics_365.png"
                    alt="Microsoft Dynamics 365"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Dynamics 365</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/zendesk.png"
                    alt="Zendesk"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Zendesk</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/jira.png"
                    alt="Atlassian Jira"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Jira</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/confluence.png"
                    alt="Atlassian Confluence"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Confluence</p>
                </div>
              </div>
            </div>

            {/* Terceira linha de logos */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/aws.png"
                    alt="AWS"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">AWS</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/azure.png"
                    alt="Microsoft Azure"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Microsoft Azure</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/gcp.png"
                    alt="Google Cloud"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Google Cloud</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/salesforce.png"
                    alt="Salesforce"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Salesforce</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/snowflake.png"
                    alt="Snowflake"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">Snowflake</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300">
                  <Image
                    src="/icon/mongodb.png"
                    alt="MongoDB"
                    className="w-full h-12 object-contain mx-auto"
                    width={120}
                    height={48}
                  />
                  <p className="text-sm mt-2 text-gray-600">MongoDB</p>
                </div>
              </div>
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

