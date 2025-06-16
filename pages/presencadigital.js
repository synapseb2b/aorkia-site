import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null); // State for active section, similar to 'sobre' page

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detect which section is visible and activate transition, similar to 'sobre' page
      const sections = document.querySelectorAll('[data-section-id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if section is mostly visible in the viewport
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

  // Function for smooth scrolling to internal links, similar to 'sobre' page
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Function to activate section on hover/touch (desktop), similar to 'sobre' page
  const handleSectionInteraction = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Function to deactivate section (only on desktop), similar to 'sobre' page
  const handleSectionLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveSection(null);
    }
  };

  // Data for sections
  const techStack = [
    {
      name: 'Next.js',
      description: 'Framework',
      level: 95,
      category: 'Expert',
      icon: 'ri-reactjs-line' // Specific icon for Next.js (using React icon as base)
    },
    {
      name: 'React',
      description: 'Frontend',
      level: 92,
      category: 'Expert',
      icon: 'ri-reactjs-line' // Specific icon for React
    },
    {
      name: 'TypeScript',
      description: 'Linguagem',
      level: 90,
      category: 'Expert',
      icon: 'ri-braces-line' // General code braces icon for TypeScript
    },
    {
      name: 'Tailwind CSS',
      description: 'Estilo',
      level: 94,
      category: 'Expert',
      icon: 'ri-paint-line' // Paint icon for styling
    },
    {
      name: 'GitHub',
      description: 'Repositório',
      level: 89,
      category: 'Expert',
      icon: 'ri-github-fill' // Specific icon for GitHub
    },
    {
      name: 'Netlify',
      description: 'Deploy',
      level: 87,
      category: 'Expert',
      icon: 'ri-cloud-line' // Cloud icon for deploy/hosting
    },
    {
      name: 'Cloudflare',
      description: 'CDN',
      level: 85,
      category: 'Expert',
      icon: 'ri-cloud-fill' // Filled cloud icon for CDN
    },
    {
      name: 'Google Analytics',
      description: 'Analytics',
      level: 93,
      category: 'Expert',
      icon: 'ri-bar-chart-line' // Bar chart icon for analytics
    },
    {
      name: 'Hotjar',
      description: 'UX',
      level: 93,
      category: 'Expert',
      icon: 'ri-user-smile-line' // Smile/user experience icon for UX
    },
    {
      name: 'Figma',
      description: 'Design',
      level: 93,
      category: 'Expert',
      icon: 'ri-brush-line' // Brush icon for design
    }
  ];

  const exemplosSegmentos = [
    {
      segmento: 'Tecnologia B2B',
      problema: 'Empresas de tecnologia B2B com soluções robustas e times excepcionais, mas com dificuldade em traduzir essa sofisticação técnica em uma presença digital clara e estratégica, perdendo espaço em ciclos de compra complexos.',
      solucao: 'Transformação da presença digital em um imperativo competitivo, comunicando claramente a sofisticação técnica e construindo autoridade percebida no mercado.',
      image: '/image/tech_b2b.jpg' // Placeholder, replace with actual image path
    },
    {
      segmento: 'Serviços Técnicos com Aspiração Corporativa',
      problema: 'Consultorias ou empresas de engenharia com alto nível técnico, mas com uma presença digital genérica ou informal, criando um desalinhamento entre a entrega real e a percepção de mercado, o que compromete contratos mais complexos.',
      solucao: 'Elevar a percepção digital ao mesmo nível da entrega, funcionando como pré-validadora da maturidade e confiabilidade da empresa, essencial para conquistar contratos corporativos.',
      image: '/image/services_corporate.jpg' // Placeholder, replace with actual image path
    },
    {
      segmento: 'Arquitetura e Engenharia com Foco Institucional',
      problema: 'Empresas de arquitetura ou engenharia especializadas em projetos públicos e concorrências técnicas que precisam da percepção de autoridade antes mesmo de uma proposta ser avaliada, pois a credibilidade digital é formada nos primeiros segundos.',
      solucao: 'Garantir clareza técnica e sofisticação visual na presença digital, validando desde o início a estrutura, maturidade e confiabilidade para competir e vencer disputas complexas.',
      image: '/image/architecture_institutional.jpg' // Placeholder, replace with actual image path
    }
  ];

  const metodologia = [
    {
      numero: '01',
      titulo: 'Definição da Voz',
      descricao: 'Arquitetura da linguagem com base no ICP e nas dores do mercado real.',
      detalhes: [
        'Tom e personalidade alinhados à proposta de valor da empresa.',
        'Voice Guidelines claros para consistência omnichannel.',
        'Narrativa orientada a decisão e não a volume.'
      ],
      icon: 'ri-megaphone-line' // Icon for voice/communication
    },
    {
      numero: '02',
      titulo: 'Arquitetura da Informação',
      descricao: 'Organização do conteúdo para conversão com base em comportamento de compra.',
      detalhes: [
        'Hierarquia de conteúdo baseada em intenção.',
        'Estrutura para retenção, escaneabilidade e autoridade.',
        'Fluxos e touchpoints mapeados por tipo de visitante.'
      ],
      icon: 'ri-building-line' // Icon for architecture/structure
    },
    {
      numero: '03',
      titulo: 'Copywriting Estratégico',
      descricao: 'Texto que traduz o diferencial em argumentos de decisão.',
      detalhes: [
        'Headlines que posicionam com clareza.',
        'Propostas de valor mensuráveis.',
        'Objection handling e CTAs pensados para o cenário B2B.'
      ],
      icon: 'ri-quill-pen-line' // Icon for writing/copywriting
    },
    {
      numero: '04',
      titulo: 'Design de Interface',
      descricao: 'Interface que transmite confiança e valor percebido.',
      detalhes: [
        'Hierarquia visual guiada por impacto e clareza.',
        'Microinterações, feedbacks visuais e responsividade plena.',
        'Coerência com a identidade e padrões visuais da empresa.'
      ],
      icon: 'ri-palette-line' // Icon for design/palette
    },
    {
      numero: '05',
      titulo: 'Desenvolvimento Técnico',
      descricao: 'Código limpo, leve e confiável.',
      detalhes: [
        'SEO técnico e performance de carregamento real.',
        'Monitoramento, segurança e integridade como padrão.',
        'Integração com o stack real da empresa.'
      ],
      icon: 'ri-code-s-slash-line' // Icon for development/code
    },
    {
      numero: '06',
      titulo: 'GEO — Growth Engine Optimization',
      descricao: 'Não basta ranquear, é preciso converter. GEO é SEO com propósito comercial.',
      detalhes: [
        'Palavras-chave com intenção de compra.',
        'Content hubs para autoridade em segmentos estratégicos.',
        'Otimização contínua com foco em leads reais.'
      ],
      icon: 'ri-line-chart-line' // Icon for charts/growth
    }
  ];

  const vozCaracteristicas = [
    {
      titulo: 'Clareza Técnica sem Hermetismo',
      descricao: 'autoridade que se comunica com quem decide.',
      icon: 'ri-lightbulb-line' // Lightbulb for clarity
    },
    {
      titulo: 'Confiança sem Arrogância',
      descricao: 'presença que transmite solidez desde o primeiro scroll.',
      icon: 'ri-shield-check-line' // Shield for trust
    },
    {
      titulo: 'Foco no que Importa',
      descricao: 'mensagens que deixam claro o diferencial nos primeiros segundos.',
      icon: 'ri-focus-3-line' // Focus for importance
    },
    {
      titulo: 'Autoridade Perceptível',
      descricao: 'posicionamento que sustenta decisões de compra complexas.',
      icon: 'ri-medal-line' // Medal for authority
    }
  ];

  const destaques = [
    'Presença digital que posiciona com diferenciação clara',
    'Voz estratégica que ressoa com decisores',
    'Performance técnica comprovável (< 2s carregamento)',
    'SEO técnico com foco em intenção comercial',
    'GEO aplicado à geração de autoridade e conversão, complementando o SEO técnico com foco em tração de negócios',
    'Estrutura viva, pensada para evoluir com o negócio'
  ];

  return (
    <>
      <Head>
        <title>Presença Digital Estratégica AORKIA | Quando sua autoridade precisa ser percebida</title>
        <meta name="description" content="A AORKIA não cria sites. Nós ativamos presença digital como um motor estratégico de posicionamento, reputação e geração de oportunidades qualificadas." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Link Voltar - Keep the white/light theme as per global _app.js */}
      <div className="fixed top-6 left-6 z-40">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 text-gray-700 hover:text-primary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o site
        </Link>
      </div>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section - Adapted from 'sobre' page */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
                Presença Digital Estratégica.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white animate-fade-in-up">
                Quando presença digital não é <span className="text-primary">estética</span> — é <span className="text-primary">posicionamento</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300 animate-fade-in-up animation-delay-200">
                É sobre ser percebido como você precisa ser — por quem realmente decide.
              </p>

              {/* Added to match 'sobre' page style */}
              <button
                onClick={(e) => scrollToSection(e, 'introducao')}
                className="text-lg font-medium px-8 py-3 border text-white border-white hover:bg-white hover:text-black transition-all duration-500 animate-fade-in-up animation-delay-400"
              >
                Saiba mais
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex justify-center animate-bounce">
            <a
              href="#introducao"
              onClick={(e) => scrollToSection(e, 'introducao')}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Introdução e Problema - Adapted from 'sobre' page section style */}
        <section
          id="introducao"
          data-section-id="introducao"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('introducao')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('introducao')}
          onClick={() => handleSectionInteraction('introducao')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'introducao' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/futuro.png)` }} {/* Re-using image from 'sobre' for now */}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'introducao' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col">
              <h2 className={`text-3xl md:text-5xl font-bold mb-12 transition-colors duration-500 ${
                activeSection === 'introducao' ? 'text-white' : 'text-black'
              }`}>
                O Cenário Atual
              </h2>

              <div className={`text-lg md:text-xl max-w-4xl space-y-8 transition-colors duration-500 ${
                activeSection === 'introducao' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  Negligenciar a forma como sua empresa é apresentada digitalmente é como deixar a fachada de um prédio de alto padrão parecer uma obra inacabada — passa a mensagem errada para quem mais importa.
                </p>
                <p>
                  Estudos da Gartner e Forrester indicam que mais de 70% da percepção de valor inicial é formada nos canais digitais — antes mesmo de uma reunião comercial. Uma presença digital desatualizada ou genérica comunica exatamente o oposto do que empresas sérias e qualificadas querem transmitir.
                </p>
                <p>
                  Isso não é apenas uma falha estética — é um risco direto ao negócio. Em um cenário moldado por algoritmos, IAs e decisões aceleradas, a ausência de uma estrutura clara e estratégica pode minar sua credibilidade antes mesmo que uma conversa comece.
                </p>
                <p>
                  Para a AORKIA, o site é apenas uma das interfaces da presença digital. Trabalhamos para ativar um ecossistema vivo — orientado por diferenciação clara, performance técnica e narrativa que posiciona. Nosso diferencial: ativamos presenças digitais com inteligência estratégica, combinando metodologia própria, stack moderno e Growth Engine Optimization (GEO) — uma evolução do SEO com foco em tração comercial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metodologia AORKIA - Section style from 'sobre' page */}
        <section
          id="metodologia"
          data-section-id="metodologia"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('metodologia')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('metodologia')}
          onClick={() => handleSectionInteraction('metodologia')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'metodologia' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/light_pont.png)` }} {/* Re-using image from 'sobre' for now */}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'metodologia' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-6 py-24 md:py-32 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'metodologia' ? 'text-white' : 'text-black'
              }`}>
                Metodologia AORKIA
              </h2>
              <p className={`text-xl max-w-4xl mx-auto transition-colors duration-500 ${
                activeSection === 'metodologia' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Seis fases que estruturam uma presença digital como ativo estratégico de autoridade e diferenciação:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metodologia.map((fase, index) => (
                <div key={index} className={`group relative p-8 rounded-2xl border transition-all duration-500 h-full flex flex-col justify-between ${
                  activeSection === 'metodologia'
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div>
                    <div className={`text-primary text-2xl font-bold mb-4 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-primary' : 'text-blue-700'
                    }`}>{fase.numero}</div>
                    <div className={`text-5xl mb-6 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-primary' : 'text-blue-700'
                    }`}>
                      <i className={fase.icon}></i> {/* Specific icon */}
                    </div>
                    <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-white' : 'text-black'
                    }`}>{fase.titulo}</h3>
                    <p className={`mb-4 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-gray-300' : 'text-gray-700'
                    }`}>{fase.descricao}</p>
                  </div>
                  {/* Creative solution for long text: Expandable/Collapsible details */}
                  <details className={`text-sm border-l-2 pl-4 cursor-pointer transition-colors duration-500 ${
                    activeSection === 'metodologia' ? 'text-gray-400 border-primary/30' : 'text-gray-700 border-blue-300'
                  }`}>
                    <summary className={`font-semibold hover:text-blue-400 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-primary' : 'text-blue-700'
                    }`}>Ver detalhes</summary>
                    <ul className="mt-2 space-y-1">
                      {fase.detalhes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary">→</span>
                          {item.trim()}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A Voz da Sua Empresa - Section style from 'sobre' page */}
        <section
          id="voz"
          data-section-id="voz"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('voz')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('voz')}
          onClick={() => handleSectionInteraction('voz')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'voz' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/ponta.png)` }} {/* Re-using image from 'sobre' for now */}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'voz' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'voz' ? 'text-white' : 'text-black'
              }`}>
                A Voz da Sua Empresa — Você sabe qual é?
              </h2>
              <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                activeSection === 'voz' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Sua presença digital precisa refletir o que sua empresa realmente representa — ou corre o risco de reforçar percepções ultrapassadas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vozCaracteristicas.map((caracteristica, index) => (
                <div key={index} className={`text-center p-6 rounded-xl border transition-all duration-500 h-full flex flex-col justify-between ${
                  activeSection === 'voz'
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'voz' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className={caracteristica.icon}></i> {/* Specific icon */}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-500 ${
                    activeSection === 'voz' ? 'text-white' : 'text-black'
                  }`}>{caracteristica.titulo}</h3>
                  <p className={`text-sm transition-colors duration-500 ${
                    activeSection === 'voz' ? 'text-gray-300' : 'text-gray-700'
                  }`}>{caracteristica.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Tecnológico - Section style from 'sobre' page */}
        <section
          id="stack"
          data-section-id="stack"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('stack')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('stack')}
          onClick={() => handleSectionInteraction('stack')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'stack' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/futuro.png)` }} {/* Re-using image from 'sobre' for now */}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'stack' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'stack' ? 'text-white' : 'text-black'
              }`}>
                Stack Tecnológico
              </h2>
              <p className={`text-xl max-w-4xl mx-auto transition-colors duration-500 ${
                activeSection === 'stack' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Performance enterprise-grade, com tecnologias modernas, auditáveis e de alta confiabilidade:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className={`p-4 rounded-lg text-center border transition-colors duration-500 ${
                  activeSection === 'stack'
                  ? 'bg-gray-800 border-gray-700 hover:border-primary/50'
                  : 'bg-gray-100 border-gray-300 hover:border-blue-500'
                }`}>
                  <div className={`text-3xl mb-2 transition-colors duration-500 ${
                    activeSection === 'stack' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className={tech.icon}></i> {/* Specific icon */}
                  </div>
                  <h3 className={`text-lg font-semibold mb-1 transition-colors duration-500 ${
                    activeSection === 'stack' ? 'text-white' : 'text-black'
                  }`}>{tech.name}</h3>
                  <p className={`text-gray-400 text-sm mb-1 transition-colors duration-500 ${
                    activeSection === 'stack' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{tech.description}</p>
                  <p className={`text-xs font-bold transition-colors duration-500 ${
                    activeSection === 'stack' ? 'text-primary' : 'text-blue-700'
                  }`}>{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformações por Segmento - Reworked section */}
        <section
          id="transformacoes"
          data-section-id="transformacoes"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('transformacoes')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('transformacoes')}
          onClick={() => handleSectionInteraction('transformacoes')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'transformacoes' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/ponta.png)` }} {/* Re-using image from 'sobre' for now */}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'transformacoes' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-6 py-24 md:py-32 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'transformacoes' ? 'text-white' : 'text-black'
              }`}>
                Transformações por Segmento
              </h2>
              <p className={`text-xl max-w-4xl mx-auto transition-colors duration-500 ${
                activeSection === 'transformacoes' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Veja alguns exemplos do imperativo da Transformação da Presença Digital:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {exemplosSegmentos.map((exemplo, index) => (
                <div key={index} className={`p-8 rounded-2xl border transition-all duration-500 ${
                  activeSection === 'transformacoes'
                  ? 'bg-black/30 border-primary/30 hover:bg-black/50'
                  : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                }`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      {exemplo.image && (
                        <Image
                          src={exemplo.image}
                          alt={exemplo.segmento}
                          width={64}
                          height={64}
                          objectFit="cover"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                        activeSection === 'transformacoes' ? 'text-white' : 'text-black'
                      }`}>{exemplo.segmento}</h3>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                      activeSection === 'transformacoes' ? 'text-primary' : 'text-blue-700'
                    }`}>O Desafio:</h4>
                    <p className={`leading-relaxed transition-colors duration-500 ${
                      activeSection === 'transformacoes' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exemplo.problema}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                      activeSection === 'transformacoes' ? 'text-primary' : 'text-blue-700'
                    }`}>Nossa Solução:</h4>
                    <p className={`leading-relaxed transition-colors duration-500 ${
                      activeSection === 'transformacoes' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exemplo.solucao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destaques Estratégicos - Section style from 'sobre' page */}
        <section
          id="destaques"
          data-section-id="destaques"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('destaques')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('destaques')}
          onClick={() => handleSectionInteraction('destaques')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'destaques' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/futuro.png)` }} {/* Re-using image from 'sobre' for now */}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'destaques' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'destaques' ? 'text-white' : 'text-black'
              }`}>
                Destaques Estratégicos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destaques.map((destaque, index) => (
                <div key={index} className={`p-6 rounded-xl border transition-all duration-500 text-center h-full flex flex-col justify-center ${
                  activeSection === 'destaques'
                  ? 'bg-primary/10 border-primary/20 hover:border-primary/40'
                  : 'bg-blue-100 border-blue-300 hover:border-blue-500'
                }`}>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className={`font-medium transition-colors duration-500 ${
                    activeSection === 'destaques' ? 'text-white' : 'text-black'
                  }`}>{destaque}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quando nos acionam - Section style from 'sobre' page */}
        <section
          id="acionamento"
          data-section-id="acionamento"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('acionamento')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('acionamento')}
          onClick={() => handleSectionInteraction('acionamento')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'acionamento' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/light_pont.png)` }} {/* Re-using image from 'sobre' for now */}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'acionamento' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'acionamento' ? 'text-white' : 'text-black'
              }`}>
                Quando nos acionam?
              </h2>
              <p className={`text-xl mb-12 transition-colors duration-500 ${
                activeSection === 'acionamento' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Empresas nos convidam quando:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className={`text-center p-8 rounded-2xl border transition-all duration-500 ${
                activeSection === 'acionamento'
                ? 'bg-black/30 border-gray-700 hover:bg-black/50'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-line-chart-fill text-white text-3xl"></i> {/* Icon for value perception */}
                </div>
                <p className={`font-medium transition-colors duration-500 ${
                  activeSection === 'acionamento' ? 'text-white' : 'text-black'
                }`}>
                  A percepção de valor precisa ser elevada à altura da operação.
                </p>
              </div>

              <div className={`text-center p-8 rounded-2xl border transition-all duration-500 ${
                activeSection === 'acionamento'
                ? 'bg-black/30 border-gray-700 hover:bg-black/50'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-star-line text-white text-3xl"></i> {/* Icon for decision makers */}
                </div>
                <p className={`font-medium transition-colors duration-500 ${
                  activeSection === 'acionamento' ? 'text-white' : 'text-black'
                }`}>
                  Autoridade técnica precisa ser percebida por decisores de verdade.
                </p>
              </div>

              <div className={`text-center p-8 rounded-2xl border transition-all duration-500 ${
                activeSection === 'acionamento'
                ? 'bg-black/30 border-gray-700 hover:bg-black/50'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-building-line text-white text-3xl"></i> {/* Icon for strategic asset */}
                </div>
                <p className={`font-medium transition-colors duration-500 ${
                  activeSection === 'acionamento' ? 'text-white' : 'text-black'
                }`}>
                  O digital precisa deixar de ser vitrine e se tornar ativo estratégico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Pronto para ativar uma presença digital com peso real de autoridade?
            </h2>

            <p className="text-xl text-gray-300 mb-12">
              Vamos conversar.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:contato@aorkia.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@aorkia.com
              </a>

              <a
                href="tel:+553139586192"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +55 31 3958-6192
              </a>
            </div>

            <Link
              href="/solucoes"
              className="inline-flex items-center text-primary hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Explorar outras soluções AORKIA
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer Minimalista */}
        <footer className="py-8 bg-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/image/logo_aorkia_white.png"
                alt="AORKIA"
                width={80}
                height={40}
                className="opacity-70"
              />
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 AORKIA. Padrões de execução aplicados.
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }
      `}</style>
    </>
  );
}
