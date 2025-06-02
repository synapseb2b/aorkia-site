import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Função para alternar o menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

  return (
    <>
      <Head>
        <title>Soluções B2B que Transformam Negócios: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível.</title>
        <meta name="description" content="Soluções B2B que Transformam Negócios: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0076FF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AORKIA B2B" />
        
        <link rel="canonical" href="https://www.aorkia.com.br/solucoes-b2b" />
        <link rel="alternate" hreflang="pt-BR" href="https://www.aorkia.com.br/solucoes-b2b" />
        <link rel="alternate" hreflang="en" href="https://www.aorkia.com/b2b-services" />
        <link rel="alternate" hreflang="es" href="https://www.aorkia.com.es/servicios-b2b" />
        <link rel="alternate" hreflang="x-default" href="https://www.aorkia.com/b2b-services" />
        
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-startup-image" href="/launch-screen.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" type="application/rss+xml" title="AORKIA Blog RSS Feed" href="/feed.xml" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        
        <meta property="og:title" content="Soluções B2B | AORKIA" />
        <meta property="og:description" content="Soluções B2B que Transformam Negócios: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível." />
        <meta property="og:image" content="https://www.aorkia.com.br/images/og-image.jpg" />
        <meta property="og:url" content="https://www.aorkia.com.br/solucoes-b2b" />
        <meta property="og:type" content="website" />
        
        {/* Preconnect para recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AORKIA",
              "url": "https://www.aorkia.com.br",
              "logo": "https://www.aorkia.com.br/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-31-98801-9006",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Getúlio Vargas, 671 - Sala 500",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "postalCode": "30112-021",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://www.linkedin.com/company/aorkia",
                "https://www.instagram.com/aorkia"
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AORKIA",
              "url": "https://www.aorkia.com.br",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.aorkia.com.br/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Soluções B2B",
              "provider": {
                "@type": "Organization",
                "name": "AORKIA"
              },
              "description": "Soluções B2B que Transformam Negócios: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "BRL"
                }
              }
            })
          }}
        />
      </Head>

      {/* Indicador de progresso de rolagem */}
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Header e Navegação */}
      <header className="bg-gray-900 shadow-sm py-2 transition-colors duration-200" role="banner">
        <div className="container mx-auto max-w-6xl px-4 flex justify-between items-center">
          <div>
            <Link href="/" className="flex items-center" aria-label="Home">
              <Image 
                src="/logo_aorkia_white.png" 
                alt="Logo AORKIA" 
                width={160} 
                height={80} 
                className="h-20 w-auto" 
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-white" role="navigation" aria-label="Main navigation">
            <Link href="/" className="font-medium cursor-pointer hover:text-primary" aria-current="page">Início</Link>
            <Link href="/solucoes" className="font-medium cursor-pointer hover:text-primary">Soluções</Link>
            <Link href="/sobre" className="font-medium cursor-pointer hover:text-primary">Sobre</Link>
            <Link href="/contato" className="font-medium cursor-pointer hover:text-primary">Contato</Link>
          </nav>
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-white" 
            aria-label="Toggle menu" 
            aria-expanded={mobileMenuOpen}
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 z-50 bg-gray-900`}>
          <div className="container mx-auto max-w-6xl px-4 py-8">
            <nav className="flex flex-col space-y-6 text-white" role="navigation" aria-label="Mobile navigation">
              <Link href="/" className="text-2xl font-medium cursor-pointer hover:text-primary" aria-current="page">Início</Link>
              <Link href="/solucoes" className="text-2xl font-medium cursor-pointer hover:text-primary">Soluções</Link>
              <Link href="/sobre" className="text-2xl font-medium cursor-pointer hover:text-primary">Sobre</Link>
              <Link href="/contato" className="text-2xl font-medium cursor-pointer hover:text-primary">Contato</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Seção Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden hero">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>

          <div className="container mx-auto max-w-6xl px-4 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" 
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)', letterSpacing: '0.5px' }}
                >
                  Soluções B2B que Transformam Negócios
                </h1>

                <p 
                  className="text-base sm:text-lg md:text-xl font-semibold text-white leading-relaxed" 
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)', letterSpacing: '0.5px' }}
                >
                  Potencialize sua empresa com nossas soluções: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível.
                </p>

                <p 
                  className="text-base sm:text-lg md:text-xl font-semibold text-white leading-relaxed italic" 
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)', letterSpacing: '0.5px' }}
                >
                  Incluindo Backup SaaS da 
                  <span className="text-[#00683f] font-bold bg-white px-1 rounded" style={{ textShadow: 'none', letterSpacing: 'normal' }}>
                    Keepit
                  </span> 
                  – Líder Global com mais de 15.000 clientes em 74 países, incluindo Porsche e Oxford University.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/5531988019006" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg md:hidden hover:bg-primary/90 animate-bounce"
                    >
                      <i className="ri-whatsapp-line text-xl"></i>
                    </a>

                    <a 
                      href="#formulario-cta"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-4 py-2 font-medium rounded-lg whitespace-nowrap flex items-center justify-center gap-2 hover-scale cursor-pointer text-sm sm:text-base md:text-lg shadow-lg transition-all duration-300"
                    >
                      <span>Fale com um Estrategista AORKIA</span>
                    </a>

                    <Link 
                      href="/solucoes" 
                      className="group border border-primary text-primary bg-white px-4 py-2 font-medium rounded-lg whitespace-nowrap flex items-center gap-3 hover:bg-primary/10 hover-scale cursor-pointer text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <span>Explore Nossas Soluções</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Soluções B2B */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white"></div>
            <div className="absolute inset-0 animate-gradient-x" style={{ background: 'linear-gradient(90deg, rgba(0,118,255,0.1), rgba(74,144,226,0.1), rgba(0,118,255,0.1))', backgroundSize: '200% 100%' }}></div>
            <div className="absolute inset-0 animate-gradient-y" style={{ background: 'linear-gradient(180deg, rgba(0,118,255,0.08), rgba(74,144,226,0.08), rgba(0,118,255,0.08))', backgroundSize: '100% 200%' }}></div>
            <div className="absolute inset-0 animate-gradient-radial">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,118,255,0.08), rgba(255,255,255,0) 60%)' }}></div>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-24">
              <div className="inline-flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="gradient-text">Soluções</span>
                  <span> Especializadas</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
                  Na AORKIA, cada escolha tecnológica é fundamentada naquilo que mais importa:
                  <span className="text-primary font-medium"> resultados previsíveis</span>,
                  <span className="text-primary font-medium"> eficiência operacional</span> e
                  <span className="text-primary font-medium"> expansão sustentável</span>.
                </p>
              </div>
            </div>

            {/* Backup SaaS Estratégico */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 mb-16">
              <div className="w-full md:basis-1/2 md:max-w-[600px] p-4 md:p-6 space-y-4 text-justify break-words hyphens-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center">Backup SaaS Estratégico</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  A AORKIA ativa a <span className="text-[#00683f] font-medium">Keepit</span> — líder global em backup SaaS — para garantir proteção completa e contínua dos seus dados na nuvem.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Proteção automatizada, recuperação instantânea, segurança absoluta.
                </blockquote>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 marker:text-primary leading-relaxed">
                  <li>Backup contínuo e automatizado</li>
                  <li>Recuperação instantânea e granular</li>
                  <li>Criptografia de ponta a ponta</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  A AORKIA + <span className="text-[#00683f] font-medium">Keepit</span>: backup transformado em inteligência operacional e resiliência estratégica.
                </p>
                <div className="flex justify-center mt-4">
                  <Link 
                    href="/solucoes" 
                    className="inline-flex items-center justify-center gap-2 border border-primary text-primary bg-white px-6 py-3 font-medium rounded-lg whitespace-nowrap hover:bg-primary/10 hover-scale cursor-pointer text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span>Explorar</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="w-full md:basis-1/2 flex items-center justify-center">
                <Image 
                  src="https://readdy.ai/api/search-image?query=3D%20holographic%20data%20protection%20shield%20with%20floating%20cloud%20storage%20elements%2C%20glowing%20blue%20neon%20grid%20lines%2C%20advanced%20security%20visualization%20with%20digital%20particles%2C%20dark%20tech%20background%20with%20geometric%20patterns%2C%20premium%20enterprise%20data%20vault%20concept%2C%20ultra%20modern%20minimalist%20design%2C%20no%20text&width=800&height=600&seq=backup3&orientation=landscape" 
                  alt="Backup SaaS Estratégico" 
                  width={600}
                  height={450}
                  className="w-full h-auto aspect-[4/3] object-cover object-top max-w-[600px] rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Infraestrutura Estratégica */}
            <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-8 mb-16">
              <div className="w-full md:basis-1/2 md:max-w-[600px] p-4 md:p-6 space-y-4 text-justify break-words hyphens-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center">Infraestrutura Estratégica</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  A AORKIA estrutura e otimiza infraestruturas críticas, convertendo complexidade em disponibilidade, segurança e performance superior.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Infraestruturas sob medida que impulsionam eficiência, escalabilidade e resiliência operacional.
                </blockquote>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 marker:text-primary leading-relaxed">
                  <li>Projetos personalizados para ambientes híbridos e multicloud</li>
                  <li>Integração e gestão contínua de sistemas críticos</li>
                  <li>Alta disponibilidade e segurança como padrão</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Transforme sua infraestrutura em um ativo estratégico e acelere resultados.
                </p>
                <div className="flex justify-center mt-4">
                  <Link 
                    href="/solucoes" 
                    className="inline-flex items-center justify-center gap-2 border border-primary text-primary bg-white px-6 py-3 font-medium rounded-lg whitespace-nowrap hover:bg-primary/10 hover-scale cursor-pointer text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span>Explorar</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="w-full md:basis-1/2 flex items-center justify-center">
                <Image 
                  src="https://readdy.ai/api/search-image?query=3D%20network%20of%20interconnected%20cubes%20with%20glowing%20blue%20neon%20edges%2C%20floating%20server%20racks%20with%20light%20trails%20connecting%20them%2C%20dark%20background%20with%20tech%20grid%2C%20orchestration%20flow%20visualization%2C%20minimalist%20infrastructure%20concept%2C%20no%20text%2C%20enterprise%20architecture&width=800&height=600&seq=infra2&orientation=landscape" 
                  alt="Infraestrutura Estratégica" 
                  width={600}
                  height={450}
                  className="w-full h-auto aspect-[4/3] object-cover object-top max-w-[600px] rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Segurança Cloud */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 mb-16">
              <div className="w-full md:basis-1/2 md:max-w-[600px] p-4 md:p-6 space-y-4 text-justify break-words hyphens-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center">Segurança Cloud</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  A AORKIA implanta segurança cloud (CSPM/CNAPP) para proteger ambientes multicloud com visibilidade total, conformidade contínua e resposta proativa a ameaças.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Segurança como componente nativo, integrada à sua infraestrutura e alinhada às normas globais.
                </blockquote>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 marker:text-primary leading-relaxed">
                  <li>Postura de segurança monitorada e auditável (CSPM)</li>
                  <li>Proteção integrada desde o código até a produção (CNAPP)</li>
                  <li>Automação para conformidade contínua (LGPD, GDPR, DORA)</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Fortaleça sua operação digital e impulsione a inovação segura.
                </p>
                <div className="flex justify-center mt-4">
                  <Link 
                    href="/solucoes" 
                    className="inline-flex items-center justify-center gap-2 border border-primary text-primary bg-white px-6 py-3 font-medium rounded-lg whitespace-nowrap hover:bg-primary/10 hover-scale cursor-pointer text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span>Explorar</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="w-full md:basis-1/2 flex items-center justify-center">
                <Image 
                  src="https://readdy.ai/api/search-image?query=3D%20shield%20icon%20with%20digital%20protection%20sphere%2C%20glowing%20blue%20neon%20cybersecurity%20elements%2C%20floating%20security%20nodes%20connected%20with%20light%20trails%2C%20dark%20background%20with%20tech%20grid%2C%20cloud%20security%20visualization%2C%20minimalist%20clean%20design%2C%20no%20text%2C%20enterprise%20protection%20concept&width=800&height=600&seq=security2&orientation=landscape" 
                  alt="Segurança Cloud" 
                  width={600}
                  height={450}
                  className="w-full h-auto aspect-[4/3] object-cover object-top max-w-[600px] rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Receita B2B */}
            <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 md:gap-8 mb-16">
              <div className="w-full md:basis-1/2 md:max-w-[600px] p-4 md:p-6 space-y-4 text-justify break-words hyphens-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center">Receita B2B</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  A AORKIA transforma operações fragmentadas em sistemas coesos de geração de receita, com processos integrados, previsibilidade e crescimento contínuo.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Operações comerciais otimizadas, integradas à presença digital, para acelerar performance e escalabilidade.
                </blockquote>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 marker:text-primary leading-relaxed">
                  <li>Diagnóstico e integração de processos e dados de receita</li>
                  <li>Automação e inteligência para previsibilidade e escala</li>
                  <li>Otimização da presença digital para máxima conversão</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Potencialize seu crescimento, unindo estratégia, tecnologia e execução.
                </p>
                <div className="flex justify-center mt-4">
                  <Link 
                    href="/solucoes" 
                    className="inline-flex items-center justify-center gap-2 border border-primary text-primary bg-white px-6 py-3 font-medium rounded-lg whitespace-nowrap hover:bg-primary/10 hover-scale cursor-pointer text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span>Explorar</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="w-full md:basis-1/2 flex items-center justify-center">
                <Image 
                  src="https://readdy.ai/api/search-image?query=3D%20holographic%20business%20growth%20visualization%20with%20ascending%20geometric%20shapes%2C%20glowing%20blue%20neon%20energy%20flows%20connecting%20floating%20crystal%20structures%2C%20premium%20dark%20tech%20environment%20with%20depth%2C%20abstract%20financial%20success%20representation%2C%20ultra%20modern%20enterprise%20concept%20with%20floating%20particles%20and%20light%20trails%2C%20clean%20minimalist%20design%2C%20no%20text%20or%20numbers&width=800&height=600&seq=revenue5&orientation=landscape" 
                  alt="Receita B2B" 
                  width={600}
                  height={450}
                  className="w-full h-auto aspect-[4/3] object-cover object-top max-w-[600px] rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Divisor visual antes da Metodologia */}
            <hr className="my-6 border-gray-300" />

            {/* Seção Metodologia AORKIA */}
            <section className="py-16 bg-white">
              <div className="container mx-auto max-w-6xl px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Metodologia AORKIA: Engenharia Estratégica Aplicada</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Conheça os pilares que transformam desafios complexos em crescimento sustentável e performance superior.
                  </p>
                </div>
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Dimensão 1 */}
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4 relative group">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                        <svg id="icon-diagnostico" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0076FF" strokeWidth="2" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-6">Diagnóstico Preciso e Curadoria Estratégica</h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                        Entendimento profundo. Soluções sob medida.
                      </p>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                      Cada projeto inicia com um diagnóstico minucioso, alinhado aos seus desafios e objetivos, para orientar escolhas tecnológicas sob medida.
                    </p>
                  </div>

                  {/* Dimensão 2 */}
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4 relative group">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                        <svg id="icon-implementacao" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0076FF" strokeWidth="2" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-6">Implementação e Integração de Alta Performance</h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                        Execução técnica. Resultados otimizados.
                      </p>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                      Implementamos e integramos sistemas com fluidez, sejam legados ou de vanguarda, sempre com foco em eficiência, disponibilidade e segurança.
                    </p>
                  </div>

                  {/* Dimensão 3 */}
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4 relative group">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                        <svg id="icon-gestao" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary">
                          <circle cx="12" cy="12" r="9"/>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/>
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-6">Gestão Proativa e Foco Contínuo em Resultados</h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                        Parceria evolutiva. Valor que perdura.
                      </p>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mt-4">
                      Garantimos que suas soluções evoluam com o negócio, por meio de gestão proativa e otimização contínua, assegurando resultados duradouros.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed italic">
                    <span className="font-bold">Nossa Metodologia assegura rigor, previsibilidade e resultados superiores em cada etapa do processo.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Seção CTA - Formulário */}
            <section id="formulario-cta" className="py-16 md:py-24 bg-gray-50">
              <div className="container mx-auto max-w-6xl px-4">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                  <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Pronto para transformar seu negócio?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                      Descubra como nossas soluções podem impulsionar sua empresa.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <i className="ri-check-line text-primary"></i>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Diagnóstico Personalizado</h4>
                          <p className="text-gray-600 text-sm">
                            Análise detalhada dos seus desafios e objetivos de negócio.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <i className="ri-check-line text-primary"></i>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Soluções Sob Medida</h4>
                          <p className="text-gray-600 text-sm">
                            Recomendações estratégicas alinhadas às suas necessidades específicas.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <i className="ri-check-line text-primary"></i>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Resultados Mensuráveis</h4>
                          <p className="text-gray-600 text-sm">
                            Foco em métricas e KPIs que realmente importam para seu negócio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-sm">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                        <input 
                          type="text" 
                          id="cargo" 
                          name="cargo" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Telefone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Assunto de Interesse</label>
                        <select 
                          id="interest" 
                          name="interest" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200" 
                          required
                        >
                          <option value="" disabled selected>Selecione uma opção</option>
                          <option value="backup">Backup SaaS Estratégico</option>
                          <option value="infra">Infraestrutura Estratégica</option>
                          <option value="security">Segurança Cloud</option>
                          <option value="revenue">Receita B2B</option>
                        </select>
                      </div>
                      
                      <div className="pt-2">
                        <button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                        >
                          Solicitar Contato
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image 
                src="/logo_aorkia_white.png" 
                alt="Logo AORKIA" 
                width={160} 
                height={64}
                className="h-16 w-auto mb-4" 
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Soluções estratégicas para empresas que buscam excelência e inovação no mercado B2B.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/aorkia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a 
                  href="https://www.instagram.com/aorkia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <i className="ri-map-pin-line"></i>
                  <span>Av. Getúlio Vargas, 671 — Sala 500, BH - MG</span>
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-phone-line"></i>
                  <a 
                    href="tel:+5531988019006" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    +55 31 98801-9006
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-mail-line"></i>
                  <a 
                    href="mailto:contato@aorkia.com" 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    contato@aorkia.com
                  </a>
                </p>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-gray-400">© 2025 AORKIA. Todos os direitos reservados.</p>
                <div className="mt-2 flex flex-wrap gap-4">
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    Política de Privacidade
                  </Link>
                  <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    Termos de Uso
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <div id="cookieConsent" className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white z-50 shadow-lg hidden">
        <p className="text-sm">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Privacidade.
        </p>
        <div className="flex gap-2">
          <button onClick={() => document.getElementById('cookieConsent').classList.add('hidden')}>
            Aceitar
          </button>
          <Link href="/privacy" className="text-sm underline">
            Saiba mais
          </Link>
        </div>
      </div>

      {/* Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Exibir cookie consent após 2 segundos
            setTimeout(() => {
              const cookieConsent = document.getElementById('cookieConsent');
              if (cookieConsent && !localStorage.getItem('cookieConsent')) {
                cookieConsent.classList.remove('hidden');
              }
            }, 2000);
            
            // Salvar consentimento ao clicar em aceitar
            document.querySelector('#cookieConsent button')?.addEventListener('click', () => {
              localStorage.setItem('cookieConsent', 'true');
            });
          `
        }}
      />
    </>
  );
}

// Estilos globais que serão injetados no arquivo _app.js
export const globalStyles = `
  :root {
    --background: #ffffff;
    --primary: #0076FF;
    --secondary: #4A90E2;
    --text-primary: #1A1F36;
    --text-secondary: #697386;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
  
  @keyframes gradient-y {
    0% { background-position: 50% 0%; }
    100% { background-position: 50% 200%; }
  }
  
  @keyframes gradient-radial {
    0% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 0.8; }
  }

  .animate-gradient-x {
    animation: gradient-x 15s linear infinite;
  }
  
  .animate-gradient-y {
    animation: gradient-y 12s linear infinite;
  }
  
  .animate-gradient-radial {
    animation: gradient-radial 10s ease-in-out infinite;
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .floating-element {
    animation: float 6s ease-in-out infinite;
  }

  .scroll-indicator {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--primary);
    transform-origin: 0%;
    z-index: 1000;
  }

  .hover-scale {
    transition: transform 0.2s ease-in-out;
  }
  
  .hover-scale:hover {
    transform: scale(1.05);
  }
`;
