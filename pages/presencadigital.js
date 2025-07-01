import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
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

  // Metodologia em 6 fases - CAMINHOS CORRIGIDOS
  const metodologia = [
    {
      numero: '01',
      titulo: 'Diagnóstico e Estratégia',
      descricao: 'O que fazemos: Mapeamos seu mercado, as dores do seu cliente ideal (ICP) e seu posicionamento competitivo. O que você ganha: A definição da estratégia de autoridade e da narrativa central que guiará todo o projeto para gerar resultados mensuráveis.',
      imagem: '/image/voice.png' // CORRIGIDO
    },
    {
      numero: '02',
      titulo: 'Arquitetura para Conversão',
      descricao: 'O que fazemos: Organizamos a jornada do usuário e a hierarquia do conteúdo com um único foco: a conversão. O que você ganha: Um caminho claro que guia seu visitante ideal do primeiro clique à ação desejada, construindo confiança em cada etapa.',
      imagem: '/image/wireframe.png' // CORRIGIDO
    },
    {
      numero: '03',
      titulo: 'Copywriting de Decisão',
      descricao: 'O que fazemos: Criamos o texto que traduz seus diferenciais técnicos em argumentos de negócio. O que você ganha: Headlines, propostas de valor e CTAs que falam a língua do seu cliente B2B e o ajudam a tomar a decisão de comprar.',
      imagem: '/image/screenshot_AORKIA.png' // MANTIDO
    },
    {
      numero: '04',
      titulo: 'Design de Confiança e Valor',
      descricao: 'O que fazemos: Desenhamos uma interface que materializa sua credibilidade e profissionalismo. O que você ganha: Uma experiência visual que transmite o alto valor da sua marca antes mesmo da primeira palavra ser lida, gerando confiança instantânea.',
      imagem: '/image/interface.png' // CORRIGIDO
    },
    {
      numero: '05',
      titulo: 'Construção e Performance',
      descricao: 'O que fazemos: Escrevemos um código limpo, aplicamos SEO técnico e garantimos performance de carregamento obsessiva. O que você ganha: Um ativo digital rápido, seguro e escalável, que funciona perfeitamente em qualquer dispositivo e é amado pelos mecanismos de busca.',
      imagem: '/image/code.png' // CORRIGIDO
    },
    {
      numero: '06',
      titulo: 'Otimização para a Nova Busca (GEO + GPO)',
      descricao: 'O que fazemos: GEO + GPO é nossa resposta para o presente e o futuro da descoberta online. Otimizamos sua presença para dominar os rankings do Google (GEO) e, simultaneamente, para se tornar a resposta de autoridade para IAs conversacionais como ChatGPT e Perplexity (GPO - Generative Presence Optimization). O que você ganha: Relevância máxima, hoje e amanhã. Você garante que seus clientes te encontrem nas buscas tradicionais e, crucialmente, nas novas conversas com inteligência artificial.',
      imagem: '/image/geo_&_seo.png' // CORRIGIDO
    }
  ];

  // Pilares da filosofia
  const pilares = [
    {
      titulo: 'Presença Digital Estratégica',
      descricao: 'Não é sobre estar online. É sobre estar presente onde sua audiência toma decisões.',
      icon: 'ri-global-line'
    },
    {
      titulo: 'Conversão por Design',
      descricao: 'Cada elemento visual e textual é pensado para guiar o visitante em direção à ação desejada.',
      icon: 'ri-focus-3-line'
    },
    {
      titulo: 'Autoridade Técnica',
      descricao: 'Conteúdo que demonstra expertise real, construindo confiança através de conhecimento aplicado.',
      icon: 'ri-award-line'
    },
    {
      titulo: 'Performance Mensurável',
      descricao: 'Métricas que importam: tempo de carregamento, taxa de conversão e geração de leads qualificados.',
      icon: 'ri-line-chart-line'
    }
  ];

  // Serviços oferecidos - NOVA ESTRUTURA
  const servicosCards = [
    {
      id: 1,
      titulo: 'Estratégia de Autoridade Digital',
      imagem: '/image/autoridade.png',
      topicos: [
        'Auditoria Completa de Presença Digital',
        'Mapeamento de Persona e Cliente Ideal (ICP)',
        'Arquitetura de Conteúdo de Valor',
        'Posicionamento para IA (GPO & LLMs)'
      ]
    },
    {
      id: 2,
      titulo: 'Design para Conversão e Confiança',
      imagem: '/image/design.png',
      topicos: [
        'Design de Interface focado na Jornada do Usuário (UI/UX)',
        'Identidade Visual B2B de Alto Impacto',
        'Prototipagem Interativa para Validação Rápida',
        'Design System para escalar sua marca'
      ]
    },
    {
      id: 3,
      titulo: 'Desenvolvimento Robusto para o Futuro',
      imagem: '/image/desenvolvimento.png',
      topicos: [
        'Desenvolvimento Frontend de Alta Performance',
        'Otimização de Velocidade e Core Web Vitals',
        'SEO Técnico e Indexabilidade',
        'Arquitetura Pronta para IA (Schema & Dados Estruturados)'
      ]
    },
    {
      id: 4,
      titulo: 'Narrativas que Geram Negócios',
      imagem: '/image/copy.png',
      topicos: [
        'Copywriting Estratégico para Vendas',
        'Marketing de Conteúdo B2B',
        'Criação de Landing Pages de Alta Conversão',
        'Narrativas de Autoridade para IA'
      ]
    }
  ];

  // FAQ
  const faq = [
    {
      pergunta: 'Qual é o diferencial da Presença Digital AORKIA?',
      resposta: 'Nosso diferencial é a inteligência estratégica por trás da tecnologia. Enquanto outros entregam sites, nós construímos máquinas de autoridade e geração de leads. Combinamos uma metodologia validada de 6 fases com tecnologia de ponta para garantir que sua presença digital não seja apenas uma vitrine, mas o motor de crescimento do seu negócio B2B.'
    },
    {
      pergunta: 'Como a Presença Digital AORKIA vai além de um "mero site"?',
      resposta: 'Um site é uma ferramenta. Nós entregamos o sistema completo que faz a ferramenta funcionar. Isso significa que cuidamos de tudo: da Estratégia (o que dizer e para quem), passando pela Construção (um ativo digital rápido e confiável), até a Otimização para Resultados (GEO & GPO), garantindo que seu investimento gere um retorno claro e mensurável.'
    },
    {
      pergunta: 'Vocês trabalham apenas com empresas de tecnologia?',
      resposta: 'Nossa expertise é em negócios onde a confiança e a complexidade técnica são cruciais para a venda. Atuamos com excelência nos seguintes cenários: Tecnologia B2B, Serviços Técnicos com Aspiração Corporativa, e Arquitetura e Engenharia com Foco Institucional. Entendemos as nuances da decisão B2B e traduzimos sua expertise em autoridade digital.'
    },
    {
      pergunta: 'Como é medido o sucesso de um projeto de Presença Digital AORKIA?',
      resposta: 'O sucesso é medido em dois níveis. No negócio: o impacto direto no pipeline de vendas e na geração de receita. Na operação: o crescimento de tráfego qualificado, a taxa de conversão de leads e o fortalecimento da sua marca como autoridade nas buscas tradicionais e por IA.'
    },
    {
      pergunta: 'Oferecem suporte pós-lançamento e otimização contínua?',
      resposta: 'Sim, e este é um dos nossos pilares. A presença digital não é um projeto com início, meio e fim. É um ativo que precisa de gestão contínua para se valorizar. Oferecemos programas de otimização contínua (GEO & GPO) e refinamento estratégico para garantir que seus resultados não apenas se mantenham, mas cresçam com o tempo.'
    },
    {
      pergunta: 'O que é GEO e como ele difere do SEO tradicional?',
      resposta: 'GEO (Growth Engine Optimization) é a nossa evolução do SEO. Enquanto o SEO tradicional foca em tráfego, o GEO foca em oportunidades de negócio. Otimizamos seu conteúdo para a intenção de compra do seu cliente. Já o GPO (Generative Presence Optimization) é o passo seguinte: preparamos seu conteúdo para que ele se torne a resposta de autoridade para IAs como o ChatGPT, posicionando sua marca no futuro da busca.'
    },
    {
      pergunta: 'Como a Presença Digital AORKIA ajuda minha empresa a gerar leads qualificados?',
      resposta: 'Geramos leads qualificados porque não deixamos isso ao acaso. Nossa metodologia de 6 fases é um sistema desenhado intencionalmente para atrair, engajar e converter o seu cliente ideal. Desde a definição da estratégia até a otimização para a nova busca (GEO & GPO), cada passo é pensado para guiar decisores B2B diretamente para o seu funil de vendas.'
    }
  ];

  return (
    <>
      <Head>
        <title>Presença Digital AORKIA | Desenvolvimento Web Estratégico para B2B</title>
        <meta name="description" content="Transformamos empresas B2B em autoridades digitais. Desenvolvimento web, UX/UI design, copywriting estratégico e SEO técnico para gerar leads qualificados." />
        <meta name="keywords" content="presença digital, desenvolvimento web b2b, ux ui design, copywriting estratégico, seo técnico, landing pages, autoridade digital" />
        <link rel="canonical" href="https://aorkia.com/presencadigital" />
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

      <main className="bg-white text-gray-900">
        {/* Seção Hero */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0"
            preload="auto"
          >
            <source src="/video/presenca_digital.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                A Estratégica Digital por trás das Vendas Complexas
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white">
                Transformamos sua empresa em uma 
                <span className="text-[#0076FF]"> Autoridade Digital</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300">
                Combinamos design de conversão, desenvolvimento de performance e narrativas de autoridade para construir o ativo digital que seu negócio precisa para gerar mais receita e solidificar sua autoridade no mercado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={(e) => scrollToSection(e, 'metodologia')}
                  className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Ver Nossa Metodologia
                </button>
                <Link
                  href="#contato"
                  className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Iniciar Projeto
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Metodologia */}
        <section 
          id="metodologia" 
          data-section-id="metodologia"
          ref={(el) => (sectionRefs.current.metodologia = el)}
          className="relative py-24 bg-gray-50 text-center overflow-hidden"
        >
          {/* Background com transição */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'metodologia' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/6fases.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'metodologia' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'metodologia' ? 'text-white' : 'text-black'
              }`}>Nossa Metodologia</h2>
              <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                activeSection === 'metodologia' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Seis fases estruturadas para transformar sua presença digital em uma máquina de geração de leads qualificados.
              </p>
            </div>

            {/* Timeline Vertical Centralizada */}
            <div className="max-w-4xl mx-auto">
              {metodologia.map((fase, index) => (
                <div key={index} className="relative flex items-center justify-center mb-16 last:mb-0">
                  {/* Linha vertical */}
                  {index < metodologia.length - 1 && (
                    <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'bg-white/30' : 'bg-primary/30'
                    }`}></div>
                  )}
                  
                  {/* Conteúdo alternado */}
                  <div className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Número e linha */}
                    <div className="flex-1 flex items-center justify-center">
                      {index % 2 === 0 && (
                        <div className="text-right pr-8">
                          <div className="flex items-center justify-end mb-4">
                            <span className={`text-6xl font-bold mr-4 transition-colors duration-500 ${
                              activeSection === 'metodologia' ? 'text-white' : 'text-primary'
                            }`}>{fase.numero}</span>
                            <div className={`w-8 h-0.5 transition-colors duration-500 ${
                              activeSection === 'metodologia' ? 'bg-white' : 'bg-primary'
                            }`}></div>
                          </div>
                          <h3 className={`text-2xl font-bold mb-4 text-right transition-colors duration-500 ${
                            activeSection === 'metodologia' ? 'text-white' : 'text-black'
                          }`}>{fase.titulo}</h3>
                          <p className={`text-lg leading-relaxed text-right max-w-md ml-auto transition-colors duration-500 ${
                            activeSection === 'metodologia' ? 'text-gray-300' : 'text-gray-600'
                          }`}>{fase.descricao}</p>
                        </div>
                      )}
                    </div>

                    {/* Círculo central */}
                    <div className={`w-4 h-4 rounded-full z-10 flex-shrink-0 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'bg-white' : 'bg-primary'
                    }`}></div>

                    {/* Conteúdo do lado direito */}
                    <div className="flex-1 flex items-center justify-center">
                      {index % 2 === 1 && (
                        <div className="text-left pl-8">
                          <div className="flex items-center justify-start mb-4">
                            <div className={`w-8 h-0.5 transition-colors duration-500 ${
                              activeSection === 'metodologia' ? 'bg-white' : 'bg-primary'
                            }`}></div>
                            <span className={`text-6xl font-bold ml-4 transition-colors duration-500 ${
                              activeSection === 'metodologia' ? 'text-white' : 'text-primary'
                            }`}>{fase.numero}</span>
                          </div>
                          <h3 className={`text-2xl font-bold mb-4 text-left transition-colors duration-500 ${
                            activeSection === 'metodologia' ? 'text-white' : 'text-black'
                          }`}>{fase.titulo}</h3>
                          <p className={`text-lg leading-relaxed text-left max-w-md transition-colors duration-500 ${
                            activeSection === 'metodologia' ? 'text-gray-300' : 'text-gray-600'
                          }`}>{fase.descricao}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Filosofia */}
        <section 
          data-section-id="filosofia"
          ref={(el) => (sectionRefs.current.filosofia = el)}
          className="relative py-24 bg-white text-center overflow-hidden"
        >
          {/* Background com transição */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'filosofia' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/6fases.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'filosofia' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'filosofia' ? 'text-white' : 'text-black'
              }`}>Nossa Filosofia</h2>
              <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                activeSection === 'filosofia' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Presença digital não é sobre estar online. É sobre estar presente onde sua audiência toma decisões.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pilares.map((pilar, index) => (
                <div key={index} className={`group p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                  activeSection === 'filosofia' 
                    ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                }`}>
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-[#0076FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${pilar.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                        activeSection === 'filosofia' ? 'text-white' : 'text-black'
                      }`}>
                        {pilar.titulo}
                      </h3>
                      <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                        activeSection === 'filosofia' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {pilar.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section 
          data-section-id="servicos"
          ref={(el) => (sectionRefs.current.servicos = el)}
          className="relative py-24 bg-gray-50 text-center overflow-hidden"
        >
          {/* Background com transição */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'servicos' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/6fases.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'servicos' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'servicos' ? 'text-white' : 'text-black'
              }`}>Nossos Serviços</h2>
              <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
                activeSection === 'servicos' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Soluções completas para empresas que precisam comunicar valor técnico e gerar leads qualificados.
              </p>
            </div>

            {/* Layout 01 | 02, 03 | 04 */}
            <div className="max-w-6xl mx-auto">
              {/* Primeira linha: 01 | 02 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {servicosCards.slice(0, 2).map((servico, index) => (
                  <div key={servico.id} className={`relative flex items-center justify-center ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {/* Card */}
                    <div className={`rounded-2xl p-8 max-w-md w-full hover:shadow-lg transition-all duration-300 ${
                      activeSection === 'servicos' 
                        ? 'bg-white/10 backdrop-blur-sm border-2 border-white/30' 
                        : 'bg-transparent border-2 border-[#0076FF]'
                    }`}>
                      {/* Imagem retangular */}
                      <div className="mb-6">
                        <Image
                          src={servico.imagem}
                          alt={servico.titulo}
                          className="w-full h-48 object-cover rounded-lg"
                          width={400}
                          height={200}
                        />
                      </div>
                      
                      {/* Área de texto */}
                      <div className="text-center">
                        {/* Headline H3 */}
                        <h3 className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
                          activeSection === 'servicos' ? 'text-white' : 'text-black'
                        }`}>
                          {servico.titulo}
                        </h3>
                        
                        {/* Texto em tópicos */}
                        <ul className="space-y-3 text-left">
                          {servico.topicos.map((topico, topicoIndex) => (
                            <li key={topicoIndex} className="flex items-start">
                              <i className={`ri-check-line mr-2 mt-1 flex-shrink-0 transition-colors duration-500 ${
                                activeSection === 'servicos' ? 'text-white' : 'text-[#0076FF]'
                              }`}></i>
                              <span className={`transition-colors duration-500 ${
                                activeSection === 'servicos' ? 'text-gray-300' : 'text-gray-700'
                              }`}>{topico}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Número */}
                    <div className={`absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} top-8 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors duration-500 ${
                      activeSection === 'servicos' ? 'bg-white text-black' : 'bg-[#0076FF] text-white'
                    }`}>
                      <span className="font-bold text-lg">0{servico.id}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Segunda linha: 03 | 04 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {servicosCards.slice(2, 4).map((servico, index) => (
                  <div key={servico.id} className={`relative flex items-center justify-center ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {/* Card */}
                    <div className={`rounded-2xl p-8 max-w-md w-full hover:shadow-lg transition-all duration-300 ${
                      activeSection === 'servicos' 
                        ? 'bg-white/10 backdrop-blur-sm border-2 border-white/30' 
                        : 'bg-transparent border-2 border-[#0076FF]'
                    }`}>
                      {/* Imagem retangular */}
                      <div className="mb-6">
                        <Image
                          src={servico.imagem}
                          alt={servico.titulo}
                          className="w-full h-48 object-cover rounded-lg"
                          width={400}
                          height={200}
                        />
                      </div>
                      
                      {/* Área de texto */}
                      <div className="text-center">
                        {/* Headline H3 */}
                        <h3 className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
                          activeSection === 'servicos' ? 'text-white' : 'text-black'
                        }`}>
                          {servico.titulo}
                        </h3>
                        
                        {/* Texto em tópicos */}
                        <ul className="space-y-3 text-left">
                          {servico.topicos.map((topico, topicoIndex) => (
                            <li key={topicoIndex} className="flex items-start">
                              <i className={`ri-check-line mr-2 mt-1 flex-shrink-0 transition-colors duration-500 ${
                                activeSection === 'servicos' ? 'text-white' : 'text-[#0076FF]'
                              }`}></i>
                              <span className={`transition-colors duration-500 ${
                                activeSection === 'servicos' ? 'text-gray-300' : 'text-gray-700'
                              }`}>{topico}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Número */}
                    <div className={`absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} top-8 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors duration-500 ${
                      activeSection === 'servicos' ? 'bg-white text-black' : 'bg-[#0076FF] text-white'
                    }`}>
                      <span className="font-bold text-lg">0{servico.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção FAQ */}
        <section 
          data-section-id="faq"
          ref={(el) => (sectionRefs.current.faq = el)}
          className="relative py-24 bg-white text-center overflow-hidden"
        >
          {/* Background com transição */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'faq' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/6fases.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'faq' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-4xl px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                activeSection === 'faq' ? 'text-white' : 'text-black'
              }`}>Perguntas Frequentes</h2>
              <p className={`text-xl transition-colors duration-500 ${
                activeSection === 'faq' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Esclarecemos as principais dúvidas sobre nossos projetos de presença digital.
              </p>
            </div>

            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className={`rounded-lg transition-all duration-500 ${
                  activeSection === 'faq' 
                    ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                    : 'border border-gray-200'
                }`}>
                  <button
                    className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors ${
                      activeSection === 'faq' ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  >
                    <span className={`font-semibold text-lg transition-colors duration-500 ${
                      activeSection === 'faq' ? 'text-white' : 'text-black'
                    }`}>{item.pergunta}</span>
                    <i className={`ri-arrow-${activeAccordion === index ? 'up' : 'down'}-s-line text-xl transition-colors duration-500 ${
                      activeSection === 'faq' ? 'text-white' : 'text-primary'
                    }`}></i>
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-4">
                      <p className={`leading-relaxed text-left transition-colors duration-500 ${
                        activeSection === 'faq' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{item.resposta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção CTA Final */}
        <section id="contato" className="py-24 bg-primary">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Pronto para Transformar sua Presença Digital?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Vamos conversar sobre como podemos transformar sua empresa em uma autoridade digital que gera leads qualificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contato"
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Iniciar Projeto
              </Link>
              <a
                href="https://wa.me/553139586192"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                WhatsApp Direto
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

