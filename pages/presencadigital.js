import { useState, useEffect, useRef } from 'react';
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
      descricao: 'O que fazemos: Mapeamos seu mercado, as dores do seu cliente ideal (ICP) e seu posicionamento competitivo. \n\nO que você ganha: A definição da estratégia de autoridade e da narrativa central que guiará todo o projeto para gerar resultados mensuráveis.',
      imagem: '/image/voice.png'
    },
    {
      numero: '02',
      titulo: 'Arquitetura para Conversão',
      descricao: 'O que fazemos: Organizamos a jornada do usuário e a hierarquia do conteúdo com um único foco: a conversão. \n\nO que você ganha: Um caminho claro que guia seu visitante ideal do primeiro clique à ação desejada, construindo confiança em cada etapa.',
      imagem: '/image/wireframe.png'
    },
    {
      numero: '03',
      titulo: 'Copywriting de Decisão',
      descricao: 'O que fazemos: Criamos o texto que traduz seus diferenciais técnicos em argumentos de negócio. \n\nO que você ganha: Headlines, propostas de valor e CTAs que falam a língua do seu cliente B2B e o ajudam a tomar a decisão de comprar.',
      imagem: '/image/screenshot_AORKIA.png'
    },
    {
      numero: '04',
      titulo: 'Design de Confiança e Valor',
      descricao: 'O que fazemos: Desenhamos uma interface que materializa sua credibilidade e profissionalismo. \n\nO que você ganha: Uma experiência visual que transmite o alto valor da sua marca antes mesmo da primeira palavra ser lida, gerando confiança instantânea.',
      imagem: '/image/interface.png'
    },
    {
      numero: '05',
      titulo: 'Construção e Performance',
      descricao: 'O que fazemos: Escrevemos um código limpo, aplicamos SEO técnico e garantimos performance de carregamento obsessiva. \n\nO que você ganha: Um ativo digital rápido, seguro e escalável, que funciona perfeitamente em qualquer dispositivo e é amado pelos mecanismos de busca.',
      imagem: '/image/code.png'
    },
    {
      numero: '06',
      titulo: 'Otimização para a Nova Busca (GEO + GPO)',
      descricao: 'O que fazemos: GEO + GPO é nossa resposta para o presente e o futuro da descoberta online. Otimizamos sua presença para dominar os rankings do Google (GEO) e, simultaneamente, para se tornar a resposta de autoridade para IAs conversacionais como ChatGPT e Perplexity (GPO - Generative Presence Optimization). \n\nO que você ganha: Relevância máxima, hoje e amanhã. Você garante que seus clientes te encontrem nas buscas tradicionais e, crucialmente, nas novas conversas com inteligência artificial.',
      imagem: '/image/geo_&_seo.png'
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
                  {/* Linha vertical - REMOVIDA */}

                  {/* Círculo do número */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10 transition-colors duration-500 ${
                    activeSection === 'metodologia' ? 'bg-primary' : 'bg-gray-400'
                  }`}>
                    {fase.numero}
                  </div>

                  {/* Conteúdo da fase */}
                  <div className="ml-8 text-left max-w-xl">
                    <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-white' : 'text-black'
                    }`}>
                      {fase.titulo}
                    </h3>
                    <p className={`text-lg transition-colors duration-500 ${
                      activeSection === 'metodologia' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {fase.descricao}
                    </p>
                    <div className="mt-4">
                      <Image 
                        src={fase.imagem} 
                        alt={fase.titulo} 
                        width={200} 
                        height={150} 
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Pilares */}
        <section 
          id="pilares" 
          data-section-id="pilares"
          ref={(el) => (sectionRefs.current.pilares = el)}
          className="py-24 bg-white text-center"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Nossos Pilares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pilares.map((pilar, index) => (
                <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg">
                  <i className={`${pilar.icon} text-5xl text-primary mb-4`}></i>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{pilar.titulo}</h3>
                  <p className="text-gray-700">{pilar.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section 
          id="servicos" 
          data-section-id="servicos"
          ref={(el) => (sectionRefs.current.servicos = el)}
          className="py-24 bg-gray-900 text-white"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicosCards.map((servico) => (
                <div key={servico.id} className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                  <Image 
                    src={servico.imagem} 
                    alt={servico.titulo} 
                    width={150} 
                    height={150} 
                    className="mb-6 rounded-full border-4 border-primary"
                  />
                  <h3 className="text-3xl font-bold mb-4 text-primary">{servico.titulo}</h3>
                  <ul className="list-none space-y-2 text-lg text-gray-300">
                    {servico.topicos.map((topico, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <i className="ri-check-double-line text-primary mr-2"></i>
                        {topico}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção FAQ */}
        <section 
          id="faq" 
          data-section-id="faq"
          ref={(el) => (sectionRefs.current.faq = el)}
          className="py-24 bg-white"
        >
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="flex justify-between items-center w-full p-6 text-left text-xl font-semibold text-gray-800 focus:outline-none"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    {item.pergunta}
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {activeAccordion === index && (
                    <div className="p-6 border-t border-gray-200 text-gray-700">
                      <p>{item.resposta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção CTA Final */}
        <section 
          id="contato" 
          data-section-id="contato"
          ref={(el) => (sectionRefs.current.contato = el)}
          className="py-24 bg-primary text-white text-center"
        >
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Pronto para Transformar sua Presença Digital?</h2>
            <p className="text-xl mb-12">Entre em contato e descubra como a AORKIA pode impulsionar seu negócio B2B.</p>
            <Link 
              href="/contato" 
              className="bg-white text-primary px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition-colors shadow-lg"
            >
              Fale Conosco
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}


