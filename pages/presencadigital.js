import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [sectionBackgrounds, setSectionBackgrounds] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Detectar quais seções devem ter background image
      const sections = [
        'metodologia',
        'servicos',
        'filosofia',
        'faq'
      ];

      const newBackgrounds = {};
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          newBackgrounds[sectionId] = isVisible;
        }
      });

      setSectionBackgrounds(newBackgrounds);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSectionBackground = (sectionId) => {
    return sectionBackgrounds[sectionId] ? 'opacity-20' : 'opacity-0';
  };

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

  // Serviços oferecidos
  const servicos = [
    {
      categoria: 'Estratégia de Autoridade Digital',
      beneficio: 'Define o caminho mais curto entre sua expertise e o resultado financeiro.',
      items: [
        'Auditoria Completa de Presença Digital',
        'Mapeamento de Persona e Cliente Ideal (ICP)',
        'Arquitetura de Conteúdo de Valor',
        'Posicionamento para IA (GPO & LLMs): Mais do que SEO. Garantimos que sua marca não apenas seja encontrada, mas se torne a resposta de autoridade para as perguntas que seus clientes fazem a IAs como ChatGPT e Perplexity.'
      ]
    },
    {
      categoria: 'Design para Conversão e Confiança',
      beneficio: 'Transforma visitantes em clientes através de uma experiência que gera confiança e valor percebido a cada clique.',
      items: [
        'Design de Interface focado na Jornada do Usuário (UI/UX)',
        'Identidade Visual B2B de Alto Impacto',
        'Prototipagem Interativa para Validação Rápida',
        'Design System: A base para escalar sua marca com consistência e eficiência.'
      ]
    },
    {
      categoria: 'Desenvolvimento Robusto para o Futuro',
      beneficio: 'Constrói um alicerce digital que garante performance hoje e está pronto para o futuro da IA.',
      items: [
        'Desenvolvimento Frontend de Alta Performance',
        'Otimização de Velocidade e Core Web Vitals',
        'SEO Técnico e Indexabilidade',
        'Arquitetura Pronta para IA (Schema & Dados Estruturados): Implementamos o código que permite que IAs e buscadores entendam profundamente suas ofertas, transformando seu site em um "vendedor" que dialoga com a tecnologia 24/7.'
      ]
    },
    {
      categoria: 'Narrativas que Geram Negócios',
      beneficio: 'Cria a narrativa que converte cliques em contratos e posiciona sua empresa como a voz líder do seu mercado.',
      items: [
        'Copywriting Estratégico para Vendas',
        'Marketing de Conteúdo B2B',
        'Criação de Landing Pages de Alta Conversão',
        'Narrativas de Autoridade para IA: Não escrevemos apenas textos. Construímos a narrativa que responde às dores do seu cliente de forma tão clara e convincente que as IAs a adotam como a resposta definitiva, consolidando sua liderança de pensamento.'
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Conteúdo Principal */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    A Estratégica Digital por trás das Vendas Complexas
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Transformamos sua empresa em uma 
                  <span className="text-primary"> Autoridade Digital</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Combinamos design de conversão, desenvolvimento de performance e narrativas de autoridade para construir o ativo digital que seu negócio precisa para gerar mais receita e solidificar sua autoridade no mercado.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button
                    onClick={(e) => scrollToSection(e, 'metodologia')}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Ver Nossa Metodologia
                  </button>
                  <Link
                    href="#contato"
                    className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 text-center"
                  >
                    Iniciar Projeto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Metodologia */}
        <section id="metodologia" className="py-24 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossa Metodologia</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seis fases estruturadas para transformar sua presença digital em uma máquina de geração de leads qualificados.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {metodologia.map((fase, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  {index % 2 === 0 ? (
                    // Conteúdo à esquerda, imagem à direita
                    <>
                      <div className="lg:pr-12">
                        <div className="flex items-center mb-6">
                          <span className="text-6xl font-bold text-primary/20 mr-4">{fase.numero}</span>
                          <h3 className="text-2xl font-bold">{fase.titulo}</h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">{fase.descricao}</p>
                      </div>
                      <div className="mt-8 lg:mt-0">
                        <Image
                          src={fase.imagem}
                          alt={fase.titulo}
                          className="w-full h-auto rounded-lg shadow-lg"
                          width={600}
                          height={400}
                        />
                      </div>
                    </>
                  ) : (
                    // Imagem à esquerda, conteúdo à direita
                    <>
                      <div className="lg:order-1">
                        <Image
                          src={fase.imagem}
                          alt={fase.titulo}
                          className="w-full h-auto rounded-lg shadow-lg"
                          width={600}
                          height={400}
                        />
                      </div>
                      <div className="lg:order-2 lg:pl-12 mt-8 lg:mt-0">
                        <div className="flex items-center mb-6">
                          <span className="text-6xl font-bold text-primary/20 mr-4">{fase.numero}</span>
                          <h3 className="text-2xl font-bold">{fase.titulo}</h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">{fase.descricao}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Filosofia */}
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossa Filosofia</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Presença digital não é sobre estar online. É sobre estar presente onde sua audiência toma decisões.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pilares.map((pilar, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${pilar.icon} text-2xl text-primary`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{pilar.titulo}</h3>
                  <p className="text-gray-600">{pilar.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluções completas para empresas que precisam comunicar valor técnico e gerar leads qualificados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicos.map((categoria, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-4 text-primary">{categoria.categoria}</h3>
                  <ul className="space-y-3">
                    {categoria.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <i className="ri-check-line text-primary mr-2 mt-1"></i>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
              <p className="text-xl text-gray-600">
                Esclarecemos as principais dúvidas sobre nossos projetos de presença digital.
              </p>
            </div>

            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  >
                    <span className="font-semibold text-lg">{item.pergunta}</span>
                    <i className={`ri-arrow-${activeAccordion === index ? 'up' : 'down'}-s-line text-xl text-primary`}></i>
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{item.resposta}</p>
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

