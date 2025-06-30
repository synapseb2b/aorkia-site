import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);

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

  // Competências para a seção Hero
  const competencias = [
    {
      titulo: 'Innovative Coding Development',
      subtitulo: 'Desenvolvimento com Foco em Performance e SEO',
      icon: 'ri-code-s-slash-line'
    },
    {
      titulo: 'Content Strategy',
      subtitulo: 'Estratégia de Conteúdo para Geração de Autoridade',
      icon: 'ri-article-line'
    },
    {
      titulo: 'Project Management',
      subtitulo: 'Gestão de Projetos de Alta Complexidade',
      icon: 'ri-organization-chart'
    },
    {
      titulo: 'UX-UI Design',
      subtitulo: 'Design de Interfaces Focadas em Decisão',
      icon: 'ri-palette-line'
    },
    {
      titulo: 'Graphic Design',
      subtitulo: 'Identidade Visual para Marcas B2B',
      icon: 'ri-brush-line'
    }
  ];

  // Metodologia em 6 fases - CAMINHOS CORRIGIDOS
  const metodologia = [
    {
      numero: '01',
      titulo: 'Definição da Voz',
      descricao: 'Arquitetura da linguagem com base no ICP e dores do mercado. Tom e personalidade alinhados à proposta de valor, com narrativa orientada a decisão.',
      imagem: '/image/voice.png' // CORRIGIDO
    },
    {
      numero: '02',
      titulo: 'Arquitetura da Informação',
      descricao: 'Organização do conteúdo para conversão, com hierarquia baseada em intenção e fluxos mapeados por tipo de visitante para retenção e autoridade.',
      imagem: '/image/wireframe.png' // CORRIGIDO
    },
    {
      numero: '03',
      titulo: 'Copywriting Estratégico',
      descricao: 'Texto que traduz o diferencial em argumentos de decisão. Headlines claras, propostas de valor mensuráveis e CTAs pensados para o cenário B2B.',
      imagem: '/image/screenshot_AORKIA.png' // MANTIDO
    },
    {
      numero: '04',
      titulo: 'Design de Interface',
      descricao: 'Interface que transmite confiança e valor percebido. Hierarquia visual guiada por impacto, microinterações e responsividade plena, coerente com a identidade da empresa.',
      imagem: '/image/interface.png' // CORRIGIDO
    },
    {
      numero: '05',
      titulo: 'Desenvolvimento Técnico',
      descricao: 'Código limpo, leve e confiável. SEO técnico, performance de carregamento real e integração com o stack tecnológico da empresa.',
      imagem: '/image/code.png' // CORRIGIDO
    },
    {
      numero: '06',
      titulo: 'GEO — Growth Engine Optimization',
      descricao: 'GEO é SEO com propósito comercial. Foco em palavras-chave com intenção de compra, content hubs para autoridade e otimização contínua para leads reais.',
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
      categoria: 'Estratégia Digital',
      items: [
        'Auditoria de Presença Digital',
        'Definição de Persona e ICP',
        'Arquitetura de Conteúdo',
        'Estratégia de SEO/GEO'
      ]
    },
    {
      categoria: 'Design & UX',
      items: [
        'Design de Interface (UI/UX)',
        'Identidade Visual B2B',
        'Prototipagem Interativa',
        'Design System'
      ]
    },
    {
      categoria: 'Desenvolvimento',
      items: [
        'Desenvolvimento Frontend',
        'Otimização de Performance',
        'SEO Técnico',
        'Integração de Sistemas'
      ]
    },
    {
      categoria: 'Conteúdo & Copy',
      items: [
        'Copywriting Estratégico',
        'Content Marketing B2B',
        'Criação de Landing Pages',
        'Blog Corporativo'
      ]
    }
  ];

  // FAQ
  const faq = [
    {
      pergunta: 'Qual é o diferencial da Presença Digital AORKIA?',
      resposta: 'Não somos uma agência tradicional. Somos especialistas em tecnologia B2B que entendemos as dores reais do mercado. Nossa abordagem combina expertise técnica com visão estratégica de negócios.'
    },
    {
      pergunta: 'Quanto tempo leva um projeto de presença digital?',
      resposta: 'Projetos completos variam de 6 a 12 semanas, dependendo da complexidade. Trabalhamos com metodologia ágil e entregas incrementais para garantir alinhamento contínuo.'
    },
    {
      pergunta: 'Vocês trabalham apenas com empresas de tecnologia?',
      resposta: 'Nosso foco é B2B, especialmente empresas que vendem soluções complexas. Temos expertise particular em tecnologia, mas atendemos qualquer empresa que precise comunicar valor técnico.'
    },
    {
      pergunta: 'Como é medido o sucesso de um projeto?',
      resposta: 'Métricas claras: tempo de carregamento, posicionamento SEO, taxa de conversão, geração de leads qualificados e, principalmente, impacto no pipeline de vendas.'
    },
    {
      pergunta: 'Oferecem suporte pós-lançamento?',
      resposta: 'Sim. Oferecemos pacotes de manutenção, otimização contínua e evolução da presença digital. O digital nunca para, e nem nós.'
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
                    Presença Digital AORKIA
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Transformamos empresas B2B em 
                  <span className="text-primary"> autoridades digitais</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Desenvolvimento web estratégico, UX/UI design orientado a conversão e copywriting que gera leads qualificados. Para empresas que vendem soluções complexas.
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

                {/* Estatísticas */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-gray-600">Performance Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">3.2s</div>
                    <div className="text-sm text-gray-600">Tempo de Carregamento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">340%</div>
                    <div className="text-sm text-gray-600">Aumento em Leads</div>
                  </div>
                </div>
              </div>

              {/* Competências */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-8 text-center">Nossas Competências</h3>
                  <div className="space-y-6">
                    {competencias.map((comp, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className={`${comp.icon} text-xl text-primary`}></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{comp.titulo}</h4>
                          <p className="text-sm text-gray-600">{comp.subtitulo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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

