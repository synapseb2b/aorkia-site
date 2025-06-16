import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    {
      name: 'Next.js',
      description: 'Framework',
      level: 95,
      category: 'Expert'
    },
    {
      name: 'React',
      description: 'Frontend',
      level: 92,
      category: 'Expert'
    },
    {
      name: 'TypeScript',
      description: 'Linguagem',
      level: 90,
      category: 'Expert'
    },
    {
      name: 'Tailwind CSS',
      description: 'Estilo',
      level: 94,
      category: 'Expert'
    },
    {
      name: 'GitHub',
      description: 'Repositório',
      level: 89,
      category: 'Expert'
    },
    {
      name: 'Netlify',
      description: 'Deploy',
      level: 87,
      category: 'Expert'
    },
    {
      name: 'Cloudflare',
      description: 'CDN',
      level: 85,
      category: 'Expert'
    },
    {
      name: 'Google Analytics',
      description: 'Analytics',
      level: 93,
      category: 'Expert'
    },
    {
      name: 'Hotjar',
      description: 'UX',
      level: 93,
      category: 'Expert'
    },
    {
      name: 'Figma',
      description: 'Design',
      level: 93,
      category: 'Expert'
    }
  ];

  const exemplosSegmentos = [
    {
      segmento: 'Tecnologia B2B',
      descricao: 'Imagine uma empresa de tecnologia B2B com soluções robustas, engenharia de ponta e times de produto excepcionais. Agora considere que, segundo estudos da Gartner e Forrester, mais de 70% da percepção de valor inicial é formada nos canais digitais — antes mesmo de uma reunião comercial. Se essa empresa não traduz sua sofisticação técnica em uma presença digital clara, estratégica e compatível com sua entrega, ela simplesmente não será considerada em ciclos de compra complexos. Presença digital, neste caso, não é um diferencial. É imperativo competitivo. e times de produto excepcionais. Ainda assim, o mercado não percebe com clareza essa sofisticação. A presença digital precisa traduzir esse diferencial técnico em autoridade percebida.'
    },
    {
      segmento: 'Serviços Técnicos com Aspiração Corporativa',
      descricao: 'Considere uma consultoria em dados ou uma empresa de engenharia que já entrega com alto nível técnico, mas cuja presença digital ainda transmite um ar genérico ou informal. Isso cria um desalinhamento entre a entrega real e a percepção de mercado — o que compromete a conquista de contratos mais complexos. A presença digital precisa elevar a percepção ao mesmo nível da entrega, funcionando como pré-validadora da maturidade e da confiabilidade da empresa.'
    },
    {
      segmento: 'Arquitetura e Engenharia com Foco Institucional',
      descricao: 'Pense em uma empresa de arquitetura ou engenharia especializada em projetos públicos, concorrências técnicas ou contratos institucionais. Para esse tipo de desafio, a percepção de autoridade começa antes mesmo de uma proposta ser avaliada. Estudos de comportamento digital indicam que mais de 60% da credibilidade percebida de um fornecedor técnico é formada nos primeiros segundos de interação online. Clareza técnica e sofisticação visual aqui não são estética — são pré-requisitos para competir e vencer disputas complexas. A presença digital precisa validar, desde o início, que a empresa tem estrutura, maturidade e confiabilidade para entregar o que promete.'
    }
  ];

  const metodologia = [
    {
      numero: '01',
      titulo: 'Definição da Voz',
      descricao: 'Arquitetura da linguagem com base no ICP e nas dores do mercado real.',
      detalhes: '→ Tom e personalidade alinhados à proposta de valor da empresa.→ Voice Guidelines claros para consistência omnichannel.→ Narrativa orientada a decisão e não a volume.'
    },
    {
      numero: '02',
      titulo: 'Arquitetura da Informação',
      descricao: 'Organização do conteúdo para conversão com base em comportamento de compra.',
      detalhes: '→ Hierarquia de conteúdo baseada em intenção.→ Estrutura para retenção, escaneabilidade e autoridade.→ Fluxos e touchpoints mapeados por tipo de visitante.'
    },
    {
      numero: '03',
      titulo: 'Copywriting Estratégico',
      descricao: 'Texto que traduz o diferencial em argumentos de decisão.',
      detalhes: '→ Headlines que posicionam com clareza.→ Propostas de valor mensuráveis.→ Objection handling e CTAs pensados para o cenário B2B.'
    },
    {
      numero: '04',
      titulo: 'Design de Interface',
      descricao: 'Interface que transmite confiança e valor percebido.',
      detalhes: '→ Hierarquia visual guiada por impacto e clareza.→ Microinterações, feedbacks visuais e responsividade plena.→ Coerência com a identidade e padrões visuais da empresa.'
    },
    {
      numero: '05',
      titulo: 'Desenvolvimento Técnico',
      descricao: 'Código limpo, leve e confiável.',
      detalhes: '→ SEO técnico e performance de carregamento real.→ Monitoramento, segurança e integridade como padrão.→ Integração com o stack real da empresa.'
    },
    {
      numero: '06',
      titulo: 'GEO — Growth Engine Optimization',
      descricao: 'Não basta ranquear, é preciso converter. GEO é SEO com propósito comercial.',
      detalhes: '→ Palavras-chave com intenção de compra.→ Content hubs para autoridade em segmentos estratégicos.→ Otimização contínua com foco em leads reais.'
    }
  ];

  const vozCaracteristicas = [
    {
      titulo: 'Clareza Técnica sem Hermetismo',
      descricao: 'autoridade que se comunica com quem decide.'
    },
    {
      titulo: 'Confiança sem Arrogância',
      descricao: 'presença que transmite solidez desde o primeiro scroll.'
    },
    {
      titulo: 'Foco no que Importa',
      descricao: 'mensagens que deixam claro o diferencial nos primeiros segundos.'
    },
    {
      titulo: 'Autoridade Perceptível',
      descricao: 'posicionamento que sustenta decisões de compra complexas.'
    }
  ];

  const destaques = [
    '✔️ Presença digital que posiciona com diferenciação clara',
    '✔️ Voz estratégica que ressoa com decisores',
    '✔️ Performance técnica comprovável (< 2s carregamento)',
    '✔️ SEO técnico com foco em intenção comercial',
    '✔️ GEO aplicado à geração de autoridade e conversão, complementando o SEO técnico com foco em tração de negócios',
    '✔️ Estrutura viva, pensada para evoluir com o negócio'
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

      {/* Link Voltar */}
      <div className="fixed top-6 left-6 z-40">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 text-gray-700 hover:text-primary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o site
        </Link>
      </div>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background com partículas animadas */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="absolute inset-0 opacity-20">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
            {/* Logo AORKIA */}
            <div className="mb-8 animate-fade-in">
              <Image
                src="/image/logo_aorkia_white.png"
                alt="AORKIA"
                width={120}
                height={60}
                className="mx-auto opacity-90"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-primary bg-clip-text text-transparent animate-fade-in-up">
              Presença Digital Estratégica
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
              Quando presença digital não é estética — é posicionamento
            </p>

            <div className="text-lg md:text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              <p className="mb-6">
                Presença digital não é sobre ter um site bonito. É sobre ser percebido como você precisa ser — por quem realmente decide.
              </p>
              <p>
                Negligenciar a forma como sua empresa é apresentada digitalmente é como deixar a fachada de um prédio de alto padrão parecer uma obra inacabada — passa a mensagem errada para quem mais importa. Agora considere que, segundo estudos da Gartner e Forrester, mais de 70% da percepção de valor inicial é formada nos canais digitais — antes mesmo de uma reunião comercial.
              </p>
              <p>
                Uma presença digital desatualizada ou genérica comunica exatamente o oposto do que empresas sérias e qualificadas querem transmitir. Isso não é apenas uma falha estética — é um risco direto ao negócio. Em um cenário moldado por algoritmos, IAs e decisões aceleradas, a ausência de uma estrutura clara e estratégica pode minar sua credibilidade antes mesmo que uma conversa comece.
              </p>
              <p>
                Para a AORKIA, o site é apenas uma das interfaces da presença digital. Trabalhamos para ativar um ecossistema vivo — orientado por diferenciação clara, performance técnica e narrativa que posiciona.
              </p>
              <p>
                Nosso diferencial: ativamos presenças digitais com inteligência estratégica, combinando metodologia própria, stack moderno e Growth Engine Optimization (GEO) — uma evolução do SEO com foco em tração comercial.
              </p>
            </div>
          </div>
        </section>

        {/* Metodologia AORKIA */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Metodologia AORKIA
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Nossa metodologia é estruturada para garantir previsibilidade, performance técnica e coerência estratégica. São seis fases integradas que transformam presença digital em vantagem real:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metodologia.map((fase, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="text-primary text-2xl font-bold mb-4">{fase.numero}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{fase.titulo}</h3>
                    <p className="text-gray-300 mb-4">{fase.descricao}</p>
                    <p className="text-sm text-gray-400 border-l-2 border-primary/30 pl-4">{fase.detalhes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A Voz AORKIA */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                A Voz AORKIA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossa voz traduz autoridade sem exagero, clareza sem simplismo. Cada palavra tem propósito.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vozCaracteristicas.map((caracteristica, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-primary/20 to-blue-600/20 p-8 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">{caracteristica.titulo}</h3>
                    <p className="text-gray-300">{caracteristica.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Tecnológico */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Stack Tecnológico
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                A infraestrutura por trás da presença digital AORKIA é pensada para performance e governança real:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exemplosSegmentos.map((exemplo, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-primary/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{exemplo.segmento}</h3>
                  <p className="text-gray-300">{exemplo.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Transformações por Segmento
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Resultados reais de empresas que ativaram presença digital estratégica com a AORKIA
              </p>
            </div>

            <div className="space-y-16">
              {exemplosSegmentos.map((exemplo, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                  <div className="text-center mb-12">
                    <div className="inline-block bg-gradient-to-r from-primary to-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                      {exemplo.segmento}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exemplo.empresa}</h3>
                    <div className="text-lg font-semibold text-primary">{exemplo.impacto}</div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* ANTES */}
                    <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 p-6 rounded-2xl border border-red-500/30">
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white">ANTES</h4>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-red-300 mb-4">
                        {exemplo?.antes?.titulo ?? 'Título não disponível'}
                      </h5>
                      
                      <div className="mb-6">
                        <h6 className="text-sm font-semibold text-gray-300 mb-3">Principais Problemas:</h6>
                        <ul className="space-y-2">
                          {exemplo.antes.problemas.map((problema, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start">
                              <span className="text-red-400 mr-2">•</span>
                              {problema}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h6 className="text-sm font-semibold text-gray-300 mb-3">Métricas:</h6>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(exemplo.antes.metricas).map(([key, value], i) => (
                            <div key={i} className="bg-red-900/30 p-3 rounded-lg">
                              <div className="text-red-300 text-lg font-bold">{value}</div>
                              <div className="text-gray-400 text-xs">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* DEPOIS */}
                    <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 p-6 rounded-2xl border border-green-500/30">
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white">DEPOIS</h4>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-green-300 mb-4">
                        {exemplo?.depois?.titulo ?? 'Título não disponível'}
                      </h5>
                      
                      <div className="mb-6">
                        <h6 className="text-sm font-semibold text-gray-300 mb-3">Soluções Implementadas:</h6>
                        <ul className="space-y-2">
                          {exemplo.depois.solucoes.map((solucao, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start">
                              <span className="text-green-400 mr-2">✓</span>
                              {solucao}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h6 className="text-sm font-semibold text-gray-300 mb-3">Resultados:</h6>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(exemplo.depois.metricas).map(([key, value], i) => (
                            <div key={i} className="bg-green-900/30 p-3 rounded-lg">
                              <div className="text-green-300 text-lg font-bold">{value}</div>
                              <div className="text-gray-400 text-xs">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destaques Estratégicos */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Destaques Estratégicos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destaques.map((destaque, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white font-medium">{destaque}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quando nos acionam */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Quando nos acionam?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Empresas nos convidam quando:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">
                    A percepção de valor precisa ser elevada à altura da operação.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">
                    Autoridade técnica precisa ser percebida por decisores de verdade.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">
                    O digital precisa deixar de ser vitrine e se tornar ativo estratégico.
                  </p>
                </div>
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

