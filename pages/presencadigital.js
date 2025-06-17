import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null); // State for active section, similar to 'sobre' page

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Obter a posição atual de rolagem
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Altura total rolável
      const progress = (scrollTop / docHeight) * 100; // Calcular progresso em porcentagem
      setScrollProgress(progress);

      // Detectar qual seção está visível e ativar transição, similar à página 'sobre'
      const sections = document.querySelectorAll('[data-section-id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Verifica se a seção está majoritariamente visível na viewport
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

  // Função para rolagem suave ao clicar em links internos, similar à página 'sobre'
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Função para ativar seção no hover/touch (desktop), similar à página 'sobre'
  const handleSectionInteraction = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Função para desativar seção (apenas no desktop), similar à página 'sobre'
  const handleSectionLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveSection(null);
    }
  };

  // Data para as seções
  const techStack = [
    {
      name: 'Next.js',
      description: 'Framework',
      level: 95,
      category: 'Expert',
      icon: 'ri-reactjs-line' // Ícone específico para Next.js (usando base React)
    },
    {
      name: 'React',
      description: 'Frontend',
      level: 92,
      category: 'Expert',
      icon: 'ri-reactjs-line' // Ícone específico para React
    },
    {
      name: 'TypeScript',
      description: 'Linguagem',
      level: 90,
      category: 'Expert',
      icon: 'ri-braces-line' // Ícone geral para TypeScript
    },
    {
      name: 'Tailwind CSS',
      description: 'Estilo',
      level: 94,
      category: 'Expert',
      icon: 'ri-paint-line' // Ícone de pintura para estilo
    },
    {
      name: 'GitHub',
      description: 'Repositório',
      level: 89,
      category: 'Expert',
      icon: 'ri-github-fill' // Ícone específico para GitHub
    },
    {
      name: 'Netlify',
      description: 'Deploy',
      level: 87,
      category: 'Expert',
      icon: 'ri-cloud-line' // Ícone de nuvem para deploy/hospedagem
    },
    {
      name: 'Cloudflare',
      description: 'CDN',
      level: 85,
      category: 'Expert',
      icon: 'ri-cloud-fill' // Ícone de nuvem preenchida para CDN
    },
    {
      name: 'Google Analytics',
      description: 'Analytics',
      level: 93,
      category: 'Expert',
      icon: 'ri-bar-chart-line' // Ícone de gráfico de barras para analytics
    },
    {
      name: 'Hotjar',
      description: 'UX',
      level: 93,
      category: 'Expert',
      icon: 'ri-user-smile-line' // Ícone de sorriso/experiência do usuário para UX
    },
    {
      name: 'Figma',
      description: 'Design',
      level: 93,
      category: 'Expert',
      icon: 'ri-brush-line' // Ícone de pincel para design
    }
  ];

  const exemplosSegmentos = [
    {
      segmento: 'Tecnologia B2B',
      problema: 'Empresas de tecnologia B2B com soluções robustas e times excepcionais, mas com dificuldade em traduzir essa sofisticação técnica em uma presença digital clara e estratégica, perdendo espaço em ciclos de compra complexos.',
      solucao: 'Transformação da presença digital em um imperativo competitivo, comunicando claramente a sofisticação técnica e construindo autoridade percebida no mercado.',
      icon: 'ri-rocket-line' // Ícone para Tecnologia B2B
    },
    {
      segmento: 'Serviços Técnicos com Aspiração Corporativa',
      problema: 'Consultorias ou empresas de engenharia com alto nível técnico, mas com uma presença digital genérica ou informal, criando um desalinhamento entre a entrega real e a percepção de mercado, o que compromete contratos mais complexos.',
      solucao: 'Elevar a percepção digital ao mesmo nível da entrega, funcionando como pré-validadora da maturidade e confiabilidade da empresa, essencial para conquistar contratos corporativos.',
      icon: 'ri-briefcase-line' // Ícone para Serviços Técnicos
    },
    {
      segmento: 'Arquitetura e Engenharia com Foco Institucional',
      problema: 'Pense em uma empresa de arquitetura ou engenharia especializada em projetos públicos, concorrências técnicas ou contratos institucionais. Para esse tipo de desafio, a percepção de autoridade começa antes mesmo de uma proposta ser avaliada. Estudos de comportamento digital indicam que mais de 60% da credibilidade percebida de um fornecedor técnico é formada nos primeiros segundos de interação online. Clareza técnica e sofisticação visual aqui não são estética — são pré-requisitos para competir e vencer disputas complexas. A presença digital precisa validar, desde o início, que a empresa tem estrutura, maturidade e confiabilidade para entregar o que promete.',
      solucao: 'Garantir clareza técnica e sofisticação visual na presença digital, validando desde o início a estrutura, maturidade e confiabilidade para competir e vencer disputas complexas.',
      icon: 'ri-building-2-line' // Ícone para Arquitetura e Engenharia
    }
  ];

  const metodologia = [
    {
      titulo: 'Definição da Voz', // Numeração removida
      descricao: 'Arquitetura da linguagem com base no ICP e nas dores do mercado real.',
      detalhes: [
        'Tom e personalidade alinhados à proposta de valor da empresa.',
        'Voice Guidelines claros para consistência omnichannel.',
        'Narrativa orientada a decisão e não a volume.'
      ],
      icon: 'ri-voiceprint-line' // Ícone de voz, ajustado aqui
    },
    {
      titulo: 'Arquitetura da Informação', // Numeração removida
      descricao: 'Organização do conteúdo para conversão com base em comportamento de compra.',
      detalhes: [
        'Hierarquia de conteúdo baseada em intenção.',
        'Estrutura para retenção, escaneabilidade e autoridade.',
        'Fluxos e touchpoints mapeados por tipo de visitante.'
      ],
      icon: 'ri-organization-chart' // Ícone para arquitetura/estrutura
    },
    {
      titulo: 'Copywriting Estratégico', // Numeração removida
      descricao: 'Texto que traduz o diferencial em argumentos de decisão.',
      detalhes: [
        'Headlines que posicionam com clareza.',
        'Propostas de valor mensuráveis.',
        'Objection handling e CTAs pensados para o cenário B2B.'
      ],
      icon: 'ri-quill-pen-line' // Ícone para escrita/copywriting
    },
    {
      titulo: 'Design de Interface', // Numeração removida
      descricao: 'Interface que transmite confiança e valor percebido.',
      detalhes: [
        'Hierarquia visual guiada por impacto e clareza.',
        'Microinterações, feedbacks visuais e responsividade plena.',
        'Coerência com a identidade e padrões visuais da empresa.'
      ],
      icon: 'ri-palette-line' // Ícone para design/paleta
    },
    {
      titulo: 'Desenvolvimento Técnico', // Numeração removida
      descricao: 'Código limpo, leve e confiável.',
      detalhes: [
        'SEO técnico e performance de carregamento real.',
        'Monitoramento, segurança e integridade como padrão.',
        'Integração com o stack real da empresa.'
      ],
      icon: 'ri-code-s-slash-line' // Ícone para desenvolvimento/código
    },
    {
      titulo: 'GEO — Growth Engine Optimization', // Numeração removida
      descricao: 'Não basta ranquear, é preciso converter. GEO é SEO com propósito comercial.',
      detalhes: [
        'Palavras-chave com intenção de compra.',
        'Content hubs para autoridade em segmentos estratégicos.',
        'Otimização contínua com foco em leads reais.'
      ],
      icon: 'ri-line-chart-line' // Ícone para gráficos/crescimento
    }
  ];

  const vozCaracteristicas = [
    {
      titulo: 'Clareza Técnica sem Hermetismo',
      descricao: 'autoridade que se comunica com quem decide.',
      icon: 'ri-lightbulb-line' // Lâmpada para clareza
    },
    {
      titulo: 'Confiança sem Arrogância',
      descricao: 'presença que transmite solidez desde o primeiro scroll.',
      icon: 'ri-shield-check-line' // Escudo para confiança
    },
    {
      titulo: 'Foco no que Importa',
      descricao: 'mensagens que deixam claro o diferencial nos primeiros segundos.',
      icon: 'ri-focus-3-line' // Foco para importância
    },
    {
      titulo: 'Autoridade Perceptível',
      descricao: 'posicionamento que sustenta decisões de compra complexas.',
      icon: 'ri-medal-line' // Medalha para autoridade
    }
  ];

  const acionamentoTexto = [ // Novo array para a seção "Quando nos acionam?"
    {
      texto: 'A percepção de valor precisa ser elevada à altura da operação.',
      icon: 'ri-line-chart-fill' // Ícone para percepção de valor
    },
    {
      texto: 'Autoridade técnica precisa ser percebida por decisores de verdade.',
      icon: 'ri-user-star-line' // Ícone para tomadores de decisão
    },
    {
      texto: 'O digital precisa deixar de ser vitrine e se tornar ativo estratégico.',
      icon: 'ri-building-line' // Ícone para ativo estratégico
    }
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

      {/* Link Voltar - Mantido tema claro conforme _app.js global */}
      <div className="fixed top-6 left-6 z-40">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 text-gray-700 hover:text-primary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o site
        </Link>
      </div>

      <div className="min-h-screen bg-black text-white">
        {/* Seção Hero - Adaptada da página 'sobre' */}
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

              {/* Botão para rolar para a introdução, similar ao estilo da página 'sobre' */}
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

        {/* Introdução e Problema - Adaptada do estilo de seção da página 'sobre' */}
        <section
          id="introducao"
          data-section-id="introducao"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('introducao')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('introducao')}
          onClick={() => handleSectionInteraction('introducao')}
        >
          {/* Sintaxe de className corrigida: template literal achatado em uma única linha */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'introducao' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/futuro.png)` }} /* Reutilizando imagem de 'sobre' por enquanto */
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'introducao' ? 'opacity-0' : 'opacity-100'}`}
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

        {/* Metodologia AORKIA - Estilo de seção da página 'sobre' */}
        <section
          id="metodologia"
          data-section-id="metodologia"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('metodologia')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('metodologia')}
          onClick={() => handleSectionInteraction('metodologia')}
        >
          {/* Sintaxe de className corrigida: template literal achatado em uma única linha */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'metodologia' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/light_pont.png)` }} /* Reutilizando imagem de 'sobre' por enquanto */
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'metodologia' ? 'opacity-0' : 'opacity-100'}`}
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
                <div key={index} className={`group relative p-8 rounded-2xl border transition-all duration-500 h-full flex flex-col justify-between items-center text-center ${ // Adicionado items-center e text-center
                  activeSection === 'metodologia'
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div>
                    {/* Numeração removida */}
                    <div className={`text-5xl mb-6 transition-colors duration-500 ${ // Ícone centralizado
                      activeSection === 'metodologia' ? 'text-primary' : 'text-blue-700'
                    }`}>
                      <i className={fase.icon}></i> {/* Ícone específico */}
                    </div>
                    <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-white' : 'text-black'
                    }`}>{fase.titulo}</h3>
                    <p className={`mb-4 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-gray-300' : 'text-gray-700'
                    }`}>{fase.descricao}</p>
                  </div>
                  {/* Solução criativa para texto longo: detalhes expansíveis/colapsáveis */}
                  <details className={`text-sm border-l-2 pl-4 cursor-pointer transition-colors duration-500 ${
                    activeSection === 'metodologia' ? 'text-gray-400 border-primary/30' : 'text-gray-700 border-blue-300'
                  }`}>
                    <summary className={`font-semibold hover:text-blue-400 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-primary' : 'text-blue-700'
                    }`}>Ver detalhes</summary>
                    <ul className="mt-2 space-y-1 text-left"> {/* Alinhado à esquerda dentro do details */}
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

        {/* A Voz da Sua Empresa - Estilo de seção da página 'sobre' */}
        <section
          id="voz"
          data-section-id="voz"
          className="relative w-full py-24 md:py-32 overflow-hidden group border-t border-b border-gray-800" // Reduzido o padding vertical e removido min-h-screen
          onMouseEnter={() => handleSectionInteraction('voz')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('voz')}
          onClick={() => handleSectionInteraction('voz')}
        >
          {/* Sintaxe de className corrigida: template literal achatado em uma única linha */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'voz' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/ponta.png)` }} /* Reutilizando imagem de 'sobre' por enquanto */
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'voz' ? 'opacity-0' : 'opacity-100'}`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
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
                <div key={index} className={`text-center p-6 rounded-xl border transition-all duration-500 h-full flex flex-col justify-between items-center ${ // Adicionado items-center
                  activeSection === 'voz'
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50'
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'voz' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className={caracteristica.icon}></i> {/* Ícone específico */}
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

        {/* Stack Tecnológico - Estilo de seção da página 'sobre' */}
        <section
          id="stack"
          data-section-id="stack"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('stack')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('stack')}
          onClick={() => handleSectionInteraction('stack')}
        >
          {/* Sintaxe de className corrigida: template literal achatado em uma única linha */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'stack' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/futuro.png)` }} /* Reutilizando imagem de 'sobre' por enquanto */
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'stack' ? 'opacity-0' : 'opacity-100'}`}
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
                    <i className={tech.icon}></i> {/* Ícone específico */}
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

        {/* Transformações por Segmento - Seção retrabalhada */}
        <section
          id="transformacoes"
          data-section-id="transformacoes"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('transformacoes')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('transformacoes')}
          onClick={() => handleSectionInteraction('transformacoes')}
        >
          {/* Sintaxe de className corrigida: template literal achatado em uma única linha */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'transformacoes' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/ponta.png)` }} /* Reutilizando imagem de 'sobre' por enquanto */
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'transformacoes' ? 'opacity-0' : 'opacity-100'}`}
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
                <div key={index} className={`p-8 rounded-2xl border transition-all duration-500 text-center ${ // Adicionado text-center
                  activeSection === 'transformacoes'
                  ? 'bg-black/30 border-primary/30 hover:bg-black/50'
                  : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                }`}>
                  <div className="flex flex-col items-center mb-6"> {/* Centralizado o conteúdo do header do card */}
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${exemplo.icon} text-white text-3xl`}></i> {/* Ícone específico */}
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                      activeSection === 'transformacoes' ? 'text-white' : 'text-black'
                    }`}>{exemplo.segmento}</h3>
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

        {/* Destaques Estratégicos (SEÇÃO EXCLUÍDA) */}

        {/* Quando nos acionam (SEÇÃO EXCLUÍDA) */}

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
                href="https://wa.me/553139586192" // Alterado para link do WhatsApp
                target="_blank" // Abrir em nova aba
                rel="noopener noreferrer" // Segurança
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i className="ri-whatsapp-line text-xl mr-3"></i> {/* Ícone do WhatsApp */}
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

        {/* Footer Minimalista - Alterado para fundo branco e texto preto */}
        <footer className="py-8 bg-white border-t border-gray-200"> {/* Fundo branco, borda cinza clara */}
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/image/logo_aorkia_color.png" // Logo colorida
                alt="AORKIA"
                width={80}
                height={40}
                className="opacity-70"
              />
            </div>
            <p className="text-gray-800 text-sm"> {/* Texto preto */}
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
