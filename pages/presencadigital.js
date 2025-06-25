import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0); // Para controlar o accordion

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

  // Metodologia em 6 fases
  const metodologia = [
    {
      numero: '01',
      titulo: 'Definição da Voz',
      descricao: 'Arquitetura da linguagem com base no ICP e dores do mercado. Tom e personalidade alinhados à proposta de valor, com narrativa orientada a decisão.',
      imagem: '/image/voice_AORKIA.png'
    },
    {
      numero: '02',
      titulo: 'Arquitetura da Informação',
      descricao: 'Organização do conteúdo para conversão, com hierarquia baseada em intenção e fluxos mapeados por tipo de visitante para retenção e autoridade.',
      imagem: '/image/wireframe_AORKIA.png'
    },
    {
      numero: '03',
      titulo: 'Copywriting Estratégico',
      descricao: 'Texto que traduz o diferencial em argumentos de decisão. Headlines claras, propostas de valor mensuráveis e CTAs pensados para o cenário B2B.',
      imagem: '/image/screenshot_AORKIA.png'
    },
    {
      numero: '04',
      titulo: 'Design de Interface',
      descricao: 'Interface que transmite confiança e valor percebido. Hierarquia visual guiada por impacto, microinterações e responsividade plena, coerente com a identidade da empresa.',
      imagem: '/image/interface_AORKIA.png'
    },
    {
      numero: '05',
      titulo: 'Desenvolvimento Técnico',
      descricao: 'Código limpo, leve e confiável. SEO técnico, performance de carregamento real e integração com o stack tecnológico da empresa.',
      imagem: '/image/code_AORKIA.png'
    },
    {
      numero: '06',
      titulo: 'GEO — Growth Engine Optimization',
      descricao: 'GEO é SEO com propósito comercial. Foco em palavras-chave com intenção de compra, content hubs para autoridade e otimização contínua para leads reais.',
      imagem: '/image/GEO&SEO_AORKIA.png'
    }
  ];

  // Pilares da filosofia
  const pilares = [
    {
      titulo: 'Clareza Técnica sem Hermetismo',
      descricao: 'Autoridade que se comunica com quem decide.',
      icon: 'ri-lightbulb-line'
    },
    {
      titulo: 'Confiança sem Arrogância',
      descricao: 'Presença que transmite solidez desde o primeiro scroll.',
      icon: 'ri-shield-check-line'
    },
    {
      titulo: 'Foco no que Importa',
      descricao: 'Mensagens que deixam claro o diferencial nos primeiros segundos.',
      icon: 'ri-focus-3-line'
    },
    {
      titulo: 'Autoridade Perceptível',
      descricao: 'Posicionamento que sustenta decisões de compra complexas.',
      icon: 'ri-medal-line'
    }
  ];

  // Stack tecnológico categorizado
  const stackCategorias = [
    {
      categoria: 'Frontend & UI',
      tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    },
    {
      categoria: 'Infraestrutura & DevOps',
      tecnologias: ['GitHub', 'Netlify', 'Cloudflare']
    },
    {
      categoria: 'Análise & Otimização de UX',
      tecnologias: ['Google Analytics', 'Hotjar']
    },
    {
      categoria: 'Design & Prototipação',
      tecnologias: ['Figma']
    }
  ];

  // Segmentos para accordion
  const segmentos = [
    {
      titulo: 'Tecnologia B2B',
      desafio: 'Traduzir complexidade técnica em valor de negócio claro para C-Levels e decisores técnicos.',
      solucao: 'Implementação de arquitetura de conteúdo focada em casos de uso e copywriting de objeção.',
      resultado: 'Aumento de 40% em solicitações de demo qualificadas.'
    },
    {
      titulo: 'Serviços Técnicos com Aspiração Corporativa',
      desafio: 'Elevar a percepção digital ao mesmo nível da entrega técnica para conquistar contratos corporativos.',
      solucao: 'Transformação da presença digital em pré-validadora da maturidade e confiabilidade da empresa.',
      resultado: 'Aumento de 35% em propostas aceitas para projetos de alta complexidade.'
    },
    {
      titulo: 'Arquitetura e Engenharia com Foco Institucional',
      desafio: 'Validar estrutura, maturidade e confiabilidade para competir em disputas complexas e contratos públicos.',
      solucao: 'Garantir clareza técnica e sofisticação visual que transmite autoridade desde o primeiro contato.',
      resultado: 'Aumento de 50% na taxa de pré-qualificação em concorrências técnicas.'
    }
  ];

  return (
    <>
      <Head>
        <title>Presença Digital Estratégica AORKIA | Quando Posicionamento, Percepção e Tecnologia se Unem</title>
        <meta name="description" content="Desenvolvemos ecossistemas digitais para marcas B2B que não se contentam com o padrão, mas buscam a liderança de mercado." />
        <meta name="keywords" content="presença digital estratégica, desenvolvimento web b2b, posicionamento digital, autoridade digital" />
        <link rel="canonical" href="https://aorkia.com/presenca-digital" />
        <style jsx>{`
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
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>
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
        {/* 1. Seção Hero: A Declaração de Autoridade */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Headline Principal */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white">
                Presença Digital Estratégica: Quando Posicionamento, Percepção e Tecnologia se Unem para a Autoridade da sua Marca
              </h1>
              
              {/* Frase de Suporte */}
              <p className="text-xl md:text-2xl max-w-4xl mb-12 text-gray-300">
                Desenvolvemos ecossistemas digitais para marcas B2B que não se contentam com o padrão, mas buscam a liderança de mercado.
              </p>

              {/* Competências - Torres de Competência */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 w-full max-w-6xl">
                {competencias.map((competencia, index) => (
                  <div 
                    key={index} 
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-4xl text-primary mb-4">
                      <i className={competencia.icon}></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {competencia.titulo}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {competencia.subtitulo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center animate-bounce">
            <a
              href="#metodologia"
              onClick={(e) => scrollToSection(e, 'metodologia')}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* 2. Mural da Metodologia: "Da Estratégia à Autoridade: Nosso Processo em 6 Fases" */}
        <section id="metodologia" className="bg-white text-black py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Da Estratégia à Autoridade: Nosso Processo em 6 Fases
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Cada fase usa evidências visuais para provar nossa metodologia. Layout alternado para máximo impacto.
              </p>
            </div>

            <div className="space-y-24">
              {metodologia.map((fase, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Imagem */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <Image
                        src={fase.imagem}
                        alt={fase.titulo}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-6">
                      <span className="text-6xl font-bold text-primary mr-6">
                        {fase.numero}
                      </span>
                      <h3 className="text-3xl font-bold text-black">
                        {fase.titulo}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {fase.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. O Problema e a Nossa Filosofia */}
        <section id="problema-filosofia" className="bg-gray-100 py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Coluna Esquerda: O Problema */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-700">
                  O Risco da Presença Digital Padrão
                </h2>
                
                {/* Cards com estatísticas */}
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                    <div className="text-4xl font-bold text-red-600 mb-2">73%</div>
                    <p className="text-gray-700">dos decisores B2B formam opinião sobre fornecedores antes do primeiro contato</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                    <div className="text-4xl font-bold text-red-600 mb-2">8 seg</div>
                    <p className="text-gray-700">é o tempo médio para formar impressão de credibilidade online</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                    <div className="text-4xl font-bold text-red-600 mb-2">67%</div>
                    <p className="text-gray-700">das empresas B2B perdem oportunidades por presença digital inadequada</p>
                  </div>
                </div>

                <blockquote className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg">
                  <p className="text-lg font-semibold text-red-900 italic">
                    "Não é apenas uma falha estética — é um risco direto ao negócio."
                  </p>
                </blockquote>
              </div>

              {/* Coluna Direita: Nossa Filosofia */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
                  Como Construímos Autoridade Perceptível
                </h2>
                
                {/* Grade 2x2 dos pilares */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pilares.map((pilar, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl text-primary mb-4">
                        <i className={pilar.icon}></i>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-black">
                        {pilar.titulo}
                      </h3>
                      <p className="text-gray-700">
                        {pilar.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ecossistema Tecnológico: As Ferramentas da Nossa Precisão */}
        <section id="stack" className="bg-black text-white py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Nosso Ecossistema Tecnológico
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Selecionamos um stack de ponta, focado em performance, escalabilidade e segurança, para construir ativos digitais que perduram.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stackCategorias.map((categoria, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-primary">
                    {categoria.categoria}
                  </h3>
                  <div className="space-y-3">
                    {categoria.tecnologias.map((tech, techIndex) => (
                      <div key={techIndex} className="bg-gray-800 px-4 py-2 rounded text-center text-white">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Transformações por Segmento: A Prova Real do Nosso Impacto */}
        <section id="segmentos" className="bg-white text-black py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Resultados por Segmento: Onde a Estratégia Encontra a Realidade
              </h2>
              <p className="text-xl text-gray-700">
                Nossa metodologia funciona no mundo real, para clientes como você.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {segmentos.map((segmento, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    className={`w-full px-6 py-4 text-left font-semibold text-lg transition-colors ${
                      activeAccordion === index 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-50 text-black hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  >
                    <div className="flex justify-between items-center">
                      <span>{segmento.titulo}</span>
                      <i className={`ri-arrow-${activeAccordion === index ? 'up' : 'down'}-s-line`}></i>
                    </div>
                  </button>
                  
                  {activeAccordion === index && (
                    <div className="px-6 py-6 bg-white border-t border-gray-200">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-red-600 mb-2">Desafio Comum:</h4>
                          <p className="text-gray-700">{segmento.desafio}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-primary mb-2">Nossa Solução AORKIA:</h4>
                          <p className="text-gray-700">{segmento.solucao}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-green-600 mb-2">Resultado-Chave:</h4>
                          <p className="text-gray-700 font-semibold">{segmento.resultado}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA Final: A Máquina de Conversão */}
        <section id="cta" className="bg-gradient-to-r from-primary to-blue-600 text-white py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Pronto para ativar uma presença digital com peso real de autoridade?
            </h2>
            
            <p className="text-xl mb-8 text-blue-100">
              Nossa abordagem não é para todos. É para empresas que enxergam seu ecossistema digital como um ativo estratégico central para o crescimento. Se essa é a sua visão, estamos prontos para construir.
            </p>
            
            <p className="text-lg mb-12 text-blue-200">
              O próximo passo é uma sessão de análise estratégica de 30 minutos, onde faremos um diagnóstico inicial do seu posicionamento e oportunidades.
            </p>
            
            <Link 
              href="/contato" 
              className="inline-block bg-white text-primary px-12 py-4 rounded-lg font-bold text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              AGENDAR ANÁLISE ESTRATÉGICA
            </Link>
            
            <div className="mt-8 text-sm text-blue-200">
              <p>✓ Análise gratuita • ✓ Sem compromisso • ✓ Diagnóstico personalizado</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

