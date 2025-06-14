import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Detectar seção ativa
      const sections = ['hero', 'metodologia', 'voz', 'tecnologia', 'portfolio', 'resultados', 'cta'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dados dos cases de sucesso
  const portfolioCases = [
    {
      id: 'aorkia-site',
      title: 'Site Institucional AORKIA',
      category: 'Identidade Corporativa',
      description: 'Presença digital que consolida autoridade em soluções B2B críticas',
      metrics: {
        'Tempo de Carregamento': '< 2s',
        'Score SEO Técnico': '98/100',
        'Taxa de Conversão': '+340%',
        'Autoridade de Domínio': 'DA 67'
      },
      highlights: [
        'Arquitetura de informação estratégica para ICP C-Level',
        'Copy orientado por jobs-to-be-done específicos',
        'Performance técnica otimizada para credibilidade',
        'Integração seamless com stack de vendas'
      ],
      image: '/image/solucoesespecializadas.png',
      video: '/image/video_hero.mp4'
    },
    {
      id: 'keepit-integration',
      title: 'Integração Estratégica Keepit',
      category: 'Partnership Branding',
      description: 'Posicionamento de parceria global com líder em backup SaaS',
      metrics: {
        'Brand Awareness': '+280%',
        'Lead Quality Score': '9.2/10',
        'Partnership ROI': '+450%',
        'Market Positioning': 'Top 3'
      },
      highlights: [
        'Co-branding estratégico com líder global',
        'Messaging diferenciado para mercado brasileiro',
        'Jornada de conversão otimizada para enterprise',
        'Credibilidade por associação técnica'
      ],
      image: '/image/keepit_logo_aorkia.png'
    },
    {
      id: 'dspm-positioning',
      title: 'Posicionamento DSPM',
      category: 'Thought Leadership',
      description: 'Educação de mercado em Data Security Posture Management',
      metrics: {
        'Share of Voice': '+520%',
        'Qualified Leads': '+380%',
        'Sales Cycle': '-45%',
        'Deal Size': '+290%'
      },
      highlights: [
        'Criação de categoria de mercado inexistente',
        'Content strategy para educação técnica',
        'SEO para termos de alta intenção comercial',
        'Positioning como pioneer e authority'
      ],
      image: '/image/dspm.png'
    },
    {
      id: 'backup-saas',
      title: 'Backup SaaS Estratégico',
      category: 'Solution Marketing',
      description: 'Comunicação técnica para decisores de infraestrutura',
      metrics: {
        'Technical Engagement': '+420%',
        'Demo Requests': '+350%',
        'Enterprise Deals': '+280%',
        'Customer LTV': '+190%'
      },
      highlights: [
        'Linguagem técnica para IT decision makers',
        'Proof points baseados em compliance',
        'ROI calculator integrado',
        'Trust signals para enterprise'
      ],
      image: '/image/backup.png'
    },
    {
      id: 'operacoes-bordas',
      title: 'Operações de Bordas',
      category: 'Innovation Showcase',
      description: 'Comunicação de soluções edge computing avançadas',
      metrics: {
        'Innovation Index': '94/100',
        'Technical Authority': '+380%',
        'Market Education': '+290%',
        'Competitive Advantage': '+250%'
      },
      highlights: [
        'Explicação simplificada de tecnologia complexa',
        'Use cases específicos por vertical',
        'Demonstração de expertise técnica',
        'Diferenciação competitiva clara'
      ],
      image: '/image/bordas.png'
    }
  ];

  // Metodologia AORKIA
  const metodologiaSteps = [
    {
      phase: '01',
      title: 'Definição da Voz',
      description: 'Arquitetura estratégica da identidade verbal',
      details: [
        'Análise profunda do ICP e jobs-to-be-done específicos',
        'Mapeamento da jornada de decisão C-Level',
        'Definição de tom, personalidade e posicionamento único',
        'Criação de voice guidelines para consistência omnichannel'
      ],
      icon: 'ri-mic-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      phase: '02',
      title: 'Arquitetura de Informação',
      description: 'Estrutura estratégica para conversão',
      details: [
        'Hierarquia de conteúdo baseada em intenção de compra',
        'Fluxos de navegação otimizados para decision makers',
        'Wireframes focados em redução de fricção',
        'Mapeamento de touchpoints críticos'
      ],
      icon: 'ri-building-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      phase: '03',
      title: 'Copywriting Estratégico',
      description: 'Mensagens que convertem decisores',
      details: [
        'Headlines baseadas em value proposition específica',
        'CTAs orientados por psychological triggers',
        'Social proof estrategicamente posicionado',
        'Objection handling integrado ao copy'
      ],
      icon: 'ri-edit-line',
      color: 'from-green-500 to-teal-500'
    },
    {
      phase: '04',
      title: 'Design de Interface',
      description: 'Experiência visual que transmite autoridade',
      details: [
        'Sistema de design consistente com brand guidelines',
        'Hierarquia visual que guia para conversão',
        'Micro-interações que aumentam engagement',
        'Responsividade perfeita em todos os dispositivos'
      ],
      icon: 'ri-palette-line',
      color: 'from-orange-500 to-red-500'
    },
    {
      phase: '05',
      title: 'Desenvolvimento Técnico',
      description: 'Performance e segurança enterprise-grade',
      details: [
        'Código otimizado para velocidade e SEO',
        'Segurança e compliance para dados sensíveis',
        'Integração com stack de marketing e vendas',
        'Monitoramento e analytics avançados'
      ],
      icon: 'ri-code-line',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      phase: '06',
      title: 'SEO & Performance',
      description: 'Visibilidade e autoridade digital',
      details: [
        'SEO técnico para termos de alta intenção',
        'Content strategy para thought leadership',
        'Link building com autoridades do setor',
        'Performance optimization contínua'
      ],
      icon: 'ri-search-line',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <>
      <Head>
        <title>Presença Digital AORKIA | Expertise Estratégica em Comunicação B2B</title>
        <meta name="description" content="Transformamos presença digital em vantagem competitiva. Metodologia proprietária para empresas que precisam de autoridade real no mercado B2B." />
        <meta name="theme-color" content="#0076FF" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="bg-black text-white min-h-screen overflow-x-hidden">
        {/* Barra de Progresso Avançada */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
          <div 
            className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>

        {/* Navegação Lateral */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <nav className="space-y-4">
            {[
              { id: 'hero', label: 'Início' },
              { id: 'metodologia', label: 'Metodologia' },
              { id: 'voz', label: 'Voz AORKIA' },
              { id: 'tecnologia', label: 'Tecnologia' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'resultados', label: 'Resultados' },
              { id: 'cta', label: 'Contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary scale-150' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                title={item.label}
              />
            ))}
          </nav>
        </div>

        {/* Link de Volta */}
        <div className="fixed top-6 left-6 z-40">
          <Link 
            href="/"
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm backdrop-blur-sm bg-black/30 px-3 py-2 rounded-lg border border-gray-700 hover:border-primary/50"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Voltar para o site
          </Link>
        </div>

        {/* Hero Section Revolucionária */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Background Video */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/image/video_hero.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-primary/20"></div>
          
          {/* Partículas animadas */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
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

          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="mb-12">
              <Image 
                src="/image/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="h-20 w-auto mx-auto mb-8 animate-fade-in"
                width={200}
                height={80}
                priority
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
              Presença Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient-x">
                Estratégica
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-12 text-gray-300 animate-fade-in-up animation-delay-200">
              Quando autoridade real precisa ser <span className="text-white font-medium">percebida</span> e <span className="text-primary font-medium">mensurada</span>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-400">
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
                Não criamos sites. <span className="text-white font-medium">Ativamos ecossistemas digitais</span> que consolidam 
                vantagem competitiva através de metodologia proprietária, tecnologia de ponta e expertise estratégica.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">340%</div>
                  <div className="text-gray-400">Aumento médio em conversão</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">< 2s</div>
                  <div className="text-gray-400">Tempo de carregamento</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98/100</div>
                  <div className="text-gray-400">Score SEO médio</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Explorar Metodologia
                <i className="ri-arrow-down-line ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="group border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center"
              >
                Ver Portfolio
                <i className="ri-external-link-line ml-2 group-hover:scale-110 transition-transform duration-300"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Metodologia AORKIA */}
        <section id="metodologia" className="py-32 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                Metodologia <span className="text-primary">AORKIA</span>
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Seis fases integradas que transformam presença digital em 
                <span className="text-white font-medium"> estrutura viva de posicionamento</span>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {metodologiaSteps.map((step, index) => (
                <div 
                  key={step.phase}
                  className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  {/* Número da fase */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.phase}
                  </div>

                  {/* Ícone */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Detalhes */}
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <i className="ri-check-line text-primary mr-2 mt-0.5 flex-shrink-0"></i>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Efeito hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Voz AORKIA - Seção Interativa */}
        <section id="voz" className="py-32 px-4 bg-black relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #0076FF 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, #4A90E2 0%, transparent 50%)`
            }}></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                A Voz <span className="text-primary">AORKIA</span>
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Identidade verbal que consolida autoridade e diferenciação competitiva
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Lado esquerdo - Características da voz */}
              <div className="space-y-8">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold mb-6 text-primary">Tom Estratégico</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="ri-check-double-line text-primary mr-3 mt-1"></i>
                      <div>
                        <strong className="text-white">Técnico sem ser hermético:</strong>
                        <span className="text-gray-300"> Linguagem que demonstra expertise sem alienar decisores</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-double-line text-primary mr-3 mt-1"></i>
                      <div>
                        <strong className="text-white">Assertivo sem ser agressivo:</strong>
                        <span className="text-gray-300"> Confiança que inspira credibilidade imediata</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-check-double-line text-primary mr-3 mt-1"></i>
                      <div>
                        <strong className="text-white">Orientado por resultados:</strong>
                        <span className="text-gray-300"> Foco em ROI e impacto mensurável</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold mb-6 text-primary">Personalidade</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">Inteligente</div>
                      <div className="text-sm text-gray-400">Demonstra expertise técnica</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">Confiável</div>
                      <div className="text-sm text-gray-400">Inspira segurança</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">Inovadora</div>
                      <div className="text-sm text-gray-400">Pioneira em soluções</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">Estratégica</div>
                      <div className="text-sm text-gray-400">Visão de longo prazo</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado direito - Exemplos práticos */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-8 text-white">Exemplos Práticos</h3>
                
                {[
                  {
                    context: 'Headlines',
                    before: '"Soluções de TI para sua empresa"',
                    after: '"Ativamos plataformas globais líderes para operações críticas"',
                    explanation: 'Específico, técnico e orientado por resultado'
                  },
                  {
                    context: 'CTAs',
                    before: '"Entre em contato"',
                    after: '"Ativar proteção crítica"',
                    explanation: 'Ação específica que gera urgência qualificada'
                  },
                  {
                    context: 'Value Props',
                    before: '"Melhor custo-benefício"',
                    after: '"ROI mensurável em 90 dias"',
                    explanation: 'Promessa específica e temporalmente definida'
                  }
                ].map((example, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <div className="text-primary font-semibold mb-3">{example.context}</div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-red-400 text-sm">❌ Antes:</span>
                        <div className="text-gray-400 italic">{example.before}</div>
                      </div>
                      <div>
                        <span className="text-green-400 text-sm">✅ AORKIA:</span>
                        <div className="text-white font-medium">{example.after}</div>
                      </div>
                      <div className="text-sm text-gray-500 border-l-2 border-primary/30 pl-3">
                        {explanation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologia e Performance */}
        <section id="tecnologia" className="py-32 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                Stack <span className="text-primary">Tecnológico</span>
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Performance enterprise-grade que sustenta autoridade digital
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Performance Metrics */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-bold mb-8 text-primary">Métricas de Performance</h3>
                  <div className="space-y-6">
                    {[
                      { metric: 'Core Web Vitals', value: '100/100', icon: 'ri-speed-line' },
                      { metric: 'SEO Score', value: '98/100', icon: 'ri-search-line' },
                      { metric: 'Security Score', value: 'A+', icon: 'ri-shield-check-line' },
                      { metric: 'Accessibility', value: '100/100', icon: 'ri-eye-line' },
                      { metric: 'Best Practices', value: '100/100', icon: 'ri-star-line' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                        <div className="flex items-center">
                          <i className={`${item.icon} text-primary text-xl mr-3`}></i>
                          <span className="text-gray-300">{item.metric}</span>
                        </div>
                        <span className="text-white font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack Tecnológico */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
                  <h3 className="text-2xl font-bold mb-8 text-primary">Tecnologias Utilizadas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      { name: 'Next.js', category: 'Framework', level: 'Expert' },
                      { name: 'React', category: 'Frontend', level: 'Expert' },
                      { name: 'TypeScript', category: 'Language', level: 'Expert' },
                      { name: 'Tailwind CSS', category: 'Styling', level: 'Expert' },
                      { name: 'Vercel', category: 'Deploy', level: 'Expert' },
                      { name: 'Cloudflare', category: 'CDN', level: 'Expert' },
                      { name: 'Google Analytics', category: 'Analytics', level: 'Expert' },
                      { name: 'Hotjar', category: 'UX', level: 'Expert' },
                      { name: 'Figma', category: 'Design', level: 'Expert' }
                    ].map((tech, index) => (
                      <div key={index} className="text-center p-4 bg-gray-900/50 rounded-lg hover:bg-primary/10 transition-colors">
                        <div className="text-white font-semibold mb-1">{tech.name}</div>
                        <div className="text-gray-400 text-sm mb-2">{tech.category}</div>
                        <div className="text-primary text-xs font-medium">{tech.level}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Demonstração de Performance */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">
                Performance em Tempo Real
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">1.2s</div>
                  <div className="text-gray-400">First Contentful Paint</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">1.8s</div>
                  <div className="text-gray-400">Largest Contentful Paint</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">0.1s</div>
                  <div className="text-gray-400">Cumulative Layout Shift</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">50ms</div>
                  <div className="text-gray-400">First Input Delay</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio de Cases */}
        <section id="portfolio" className="py-32 px-4 bg-black">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                Portfolio <span className="text-primary">Estratégico</span>
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Cases que demonstram transformação mensurável em autoridade digital
              </p>
            </div>

            <div className="space-y-16">
              {portfolioCases.map((case_item, index) => (
                <div 
                  key={case_item.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Conteúdo */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      {case_item.category}
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                      {case_item.title}
                    </h3>
                    
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {case_item.description}
                    </p>

                    {/* Métricas */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(case_item.metrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                          <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                          <div className="text-gray-400 text-sm">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white">Destaques Estratégicos:</h4>
                      {case_item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <i className="ri-check-line text-primary mr-3 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl border border-gray-700 group-hover:border-primary/50 transition-all duration-500">
                        {case_item.video ? (
                          <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-80 object-cover"
                          >
                            <source src={case_item.video} type="video/mp4" />
                          </video>
                        ) : (
                          <Image 
                            src={case_item.image}
                            alt={case_item.title}
                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            width={600}
                            height={320}
                          />
                        )}
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="text-white font-semibold mb-2">Ver detalhes do case</div>
                            <div className="text-gray-300 text-sm">Análise completa de estratégia e resultados</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Resultados e ROI */}
        <section id="resultados" className="py-32 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                Resultados <span className="text-primary">Mensuráveis</span>
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                ROI comprovado através de métricas que importam para o negócio
              </p>
            </div>

            {/* Métricas Principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                {
                  metric: '+340%',
                  description: 'Aumento médio em conversão',
                  detail: 'Leads qualificados para enterprise',
                  icon: 'ri-arrow-up-line',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  metric: '+280%',
                  description: 'Crescimento em brand awareness',
                  detail: 'Reconhecimento no mercado B2B',
                  icon: 'ri-eye-line',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  metric: '-45%',
                  description: 'Redução no ciclo de vendas',
                  detail: 'Aceleração do processo decisório',
                  icon: 'ri-time-line',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  metric: '+450%',
                  description: 'ROI em marketing digital',
                  detail: 'Retorno sobre investimento',
                  icon: 'ri-money-dollar-circle-line',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${item.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-4">{item.metric}</div>
                    <div className="text-lg text-gray-300 mb-2">{item.description}</div>
                    <div className="text-sm text-gray-500">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparativo Antes/Depois */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-16">
              <h3 className="text-3xl font-bold mb-12 text-center text-white">
                Transformação Típica: Antes vs. Depois AORKIA
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Antes */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-red-400 mb-6">❌ Antes</h4>
                  {[
                    'Site genérico sem diferenciação clara',
                    'Linguagem técnica hermética ou muito simplista',
                    'Performance lenta (>5s carregamento)',
                    'SEO básico, baixa visibilidade orgânica',
                    'Conversão baixa (<2%)',
                    'Ciclo de vendas longo (6+ meses)',
                    'Brand awareness limitado ao networking'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <i className="ri-close-line text-red-400 mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Depois */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-green-400 mb-6">✅ Depois AORKIA</h4>
                  {[
                    'Presença digital que consolida autoridade',
                    'Voz estratégica que ressoa com C-Level',
                    'Performance enterprise-grade (<2s)',
                    'SEO técnico dominando termos-chave',
                    'Conversão otimizada (8%+)',
                    'Ciclo acelerado (3 meses)',
                    'Reconhecimento como thought leader'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <i className="ri-check-line text-green-400 mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="text-center">
              <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-12 max-w-4xl mx-auto">
                <i className="ri-double-quotes-l text-4xl text-primary mb-6"></i>
                <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 italic">
                  "A AORKIA não apenas criou nossa presença digital — eles ativaram um ecossistema 
                  que posiciona nossa empresa como autoridade técnica no mercado. O ROI foi 
                  mensurável desde o primeiro mês."
                </blockquote>
                <div className="text-gray-300">
                  <div className="font-semibold">CTO, Empresa Fortune 500</div>
                  <div className="text-sm">Setor de Infraestrutura Crítica</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Estratégico */}
        <section id="cta" className="py-32 px-4 bg-black relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cyan-400/10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Convide a <span className="text-primary">AORKIA</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-light mb-12 text-gray-300">
              quando sua presença digital precisar refletir autoridade real
            </h3>
            
            <div className="space-y-8 mb-16 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-white mb-4">Não criamos sites.</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ativamos um núcleo estratégico formado por especialistas em engenharia de sistemas, 
                    design de interface, copywriting de conversão e performance de SEO técnico.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-white mb-4">Empresas nos acionam</h4>
                  <p className="text-gray-300 leading-relaxed">
                    quando a percepção de valor precisa ser elevada à altura da operação. 
                    Quando autoridade técnica precisa ser percebida e mensurada.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-2xl text-primary font-medium">
                  Presença digital, para nós, é estrutura viva de posicionamento.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/solucoes"
                className="group bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Explorar Soluções AORKIA
                <i className="ri-arrow-right-line ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>
              <Link 
                href="/contato"
                className="group border border-primary text-primary hover:bg-primary hover:text-white px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-300 flex items-center"
              >
                Iniciar Conversa Estratégica
                <i className="ri-chat-3-line ml-3 group-hover:scale-110 transition-transform duration-300"></i>
              </Link>
            </div>

            {/* Informações de contato */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <i className="ri-mail-line text-3xl text-primary mb-3"></i>
                <div className="text-white font-semibold">Email Estratégico</div>
                <div className="text-gray-400">contato@aorkia.com</div>
              </div>
              <div className="text-center">
                <i className="ri-phone-line text-3xl text-primary mb-3"></i>
                <div className="text-white font-semibold">Linha Direta</div>
                <div className="text-gray-400">+55 31 3958-6192</div>
              </div>
              <div className="text-center">
                <i className="ri-map-pin-line text-3xl text-primary mb-3"></i>
                <div className="text-white font-semibold">Sede Estratégica</div>
                <div className="text-gray-400">Belo Horizonte, MG</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Minimalista e Elegante */}
        <footer className="py-16 px-4 border-t border-gray-800 bg-gray-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <Image 
                  src="/image/logo_aorkia_white.png" 
                  alt="AORKIA" 
                  className="h-12 w-auto"
                  width={120}
                  height={48}
                />
                <div className="text-gray-400 text-sm mt-4">
                  Presença digital estratégica para empresas que precisam de autoridade real.
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="text-gray-400 text-sm mb-2">
                  © 2025 AORKIA. Expertise estratégica aplicada.
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-4">
                  <Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors text-sm">
                    Privacidade
                  </Link>
                  <Link href="/terms" className="text-gray-500 hover:text-primary transition-colors text-sm">
                    Termos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Estilos customizados */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        /* Scroll suave personalizado */
        html {
          scroll-behavior: smooth;
        }
        
        /* Efeitos de hover personalizados */
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }
        
        .group:hover .group-hover\\:translate-y-1 {
          transform: translateY(0.25rem);
        }
      `}</style>
    </>
  );
}