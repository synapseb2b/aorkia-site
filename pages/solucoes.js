import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Solucoes() {
  const [activeSection, setActiveSection] = useState('backup');
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Soluções com os novos textos do PDF e cores AORKIA
  const solutions = [
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      supportText: 'Proteção Imutável. Recuperação Rápida. Conformidade Garantida.',
      subtitle: 'Microsoft, Google e Salesforce não protegem seus dados contra exclusões, erros humanos ou ransomware. A AORKIA ativa a Keepit — líder global em backup SaaS — para garantir recuperação granular, backups 100% imutáveis e conformidade total com LGPD e GDPR.',
      whyTitle: 'Por que preciso de Backup SaaS Estratégico?',
      whyContent: 'O modelo de responsabilidade em nuvem é compartilhado: os provedores garantem a infraestrutura, mas você é quem responde pela proteção dos dados. Sem um backup dedicado, erros acidentais, ataques cibernéticos ou falhas internas podem causar perdas irreversíveis — e multas regulatórias.',
      whatTitle: 'O que o Backup SaaS Estratégico da AORKIA oferece?',
      features: [
        {
          icon: 'ri-shield-keyhole-line',
          title: 'Backups 100% Imutáveis',
          description: 'Proteção real contra ransomware, exclusões acidentais e corrupção de dados.'
        },
        {
          icon: 'ri-restart-line',
          title: 'Recuperação Rápida e Granular',
          description: 'De um único e-mail até ambientes inteiros, restaurados em minutos.'
        },
        {
          icon: 'ri-apps-2-line',
          title: 'Cobertura Total do Ecossistema SaaS',
          description: 'Microsoft 365, Google Workspace, Salesforce, Dynamics 365, Azure AD e mais.'
        },
        {
          icon: 'ri-file-shield-2-line',
          title: 'Conformidade e Auditoria Descomplicadas',
          description: 'Alinhado às exigências da LGPD, GDPR, HIPAA — com trilhas de auditoria e retenção customizada.'
        }
      ],
      howTitle: 'Como funciona a ativação com a AORKIA?',
      howSteps: [
        'Ativação guiada com especialistas AORKIA',
        'Configuração personalizada para seu ambiente e compliance',
        'Treinamento da equipe + suporte contínuo',
        'Sem complexidade técnica, sem ruído operacional'
      ],
      differentialTitle: 'O diferencial AORKIA',
      differentialContent: 'A AORKIA não vende software. Ativamos uma estratégia robusta de proteção de dados SaaS com base na Keepit — a plataforma utilizada por marcas como Porsche e Oxford University. Transformamos complexidade técnica em resiliência real, mensurável e confiável.',
      risksTitle: 'O que você pode perder sem isso?',
      risks: [
        'E-mails e arquivos críticos apagados permanentemente',
        'Falta de evidência para auditorias regulatórias',
        'Operações paralisadas por erros humanos ou ransomware',
        'Multas por descumprimento da LGPD / GDPR'
      ],
      ctaTitle: 'Proteja o Coração Digital do Seu Negócio',
      ctaText: 'Blindar seus dados críticos é uma decisão estratégica, não técnica. Fale agora com um especialista da AORKIA e ative sua resiliência SaaS.',
      image: '/image/backup.png',
      logo: '/image/keepit_logo_aorkia.png'
    },
    {
      id: 'bordas',
      title: 'Operações de Bordas Inteligentes',
      supportText: 'Decisão Imediata. Eficiência Local. IA no Ponto Crítico.',
      subtitle: 'A AORKIA ativa Plataformas Edge AI que processam dados onde eles nascem — na fábrica, no varejo, em equipamentos remotos — para decisões autônomas, respostas em tempo real e independência da nuvem.',
      whyTitle: 'Por que mover a IA para a borda?',
      whyContent: 'Levar a Inteligência Artificial até o ponto onde os dados são gerados não é mais tendência — é necessidade estratégica. Reduz latência, aumenta eficiência, habilita decisões locais instantâneas e libera sua operação da dependência total da nuvem. Segundo o Gartner, até 2029, 60% das implementações de edge computing usarão IA composta, ante menos de 5% em 2023.',
      whatTitle: 'O que a AORKIA ativa em suas Operações de Borda?',
      features: [
        {
          icon: 'ri-cpu-line',
          title: 'IA Ativa Onde os Dados Nascem',
          description: 'Decisões automatizadas em tempo real, com latência mínima e impacto máximo.'
        },
        {
          icon: 'ri-global-line',
          title: 'Escalabilidade Distribuída com Controle Central',
          description: 'Implante e gerencie IA em centenas ou milhares de sites com orquestração inteligente.'
        },
        {
          icon: 'ri-dashboard-3-line',
          title: 'Gestão Unificada de Dispositivos e Aplicações',
          description: 'Ciclo de vida completo sob controle em uma única interface — menos custos, mais eficiência.'
        },
        {
          icon: 'ri-shield-check-line',
          title: 'Segurança de Ponta a Ponta',
          description: 'Proteção desde o hardware até a nuvem. Criptografia, isolamento e integridade garantida.'
        }
      ],
      howTitle: 'Como funciona a ativação com a AORKIA?',
      howSteps: [
        'Mapeamento dos casos de uso críticos',
        'Escolha e integração das melhores plataformas Edge AI',
        'Automação do provisionamento e orquestração centralizada',
        'Treinamento, suporte e gestão contínua com visibilidade total'
      ],
      differentialTitle: 'O diferencial AORKIA',
      differentialContent: 'Você não precisa entender de infraestrutura distribuída, containers ou gerenciamento de dispositivos. A AORKIA entrega IA funcional na borda — pronta, segura e dimensionada para seu negócio. Ativamos, monitoramos e escalamos junto com você.',
      risksTitle: 'O que você perde sem isso?',
      risks: [
        'Operações paralisadas por latência ou falta de conectividade',
        'Falta de resposta imediata em situações críticas',
        'Custo alto com nuvem centralizada e suporte ineficiente',
        'Perda de competitividade em eficiência, personalização e predição'
      ],
      ctaTitle: 'Desbloqueie a IA onde ela mais importa',
      ctaText: 'Está pronto para ativar inteligência real na borda do seu negócio? Fale com um especialista da AORKIA e descubra como colocar IA para decidir e agir no ponto certo.',
      image: '/image/bordas.png'
    },
    {
      id: 'dspm',
      title: 'Segurança para Operações Críticas',
      supportText: 'Visibilidade Total. Controle Inteligente. Proteção de Dados em Qualquer Nuvem.',
      subtitle: 'Seus dados sensíveis estão espalhados em múltiplas nuvens — e você não tem visibilidade real sobre onde estão, quem acessa ou o quão expostos estão? A AORKIA ativa plataformas DSPM para descobrir, classificar e proteger dados críticos em tempo real, com controle contínuo e conformidade garantida.',
      whyTitle: 'Por que você precisa de DSPM agora?',
      whyContent: 'A explosão de dados em ambientes multinuvem criou um novo tipo de risco: dados invisíveis, permissões excessivas e alertas sem contexto. Sem DSPM, sua empresa não sabe o que está exposto — até que seja tarde demais.',
      whatTitle: 'O que a AORKIA entrega com Segurança para Operações Críticas?',
      features: [
        {
          icon: 'ri-search-eye-line',
          title: 'Descoberta e Classificação Inteligente de Dados Sensíveis',
          description: 'Mapeamento automático de todos os dados confidenciais — até os invisíveis ("shadow data") — em SaaS, IaaS, PaaS e ambientes híbridos.'
        },
        {
          icon: 'ri-bar-chart-grouped-line',
          title: 'Priorização Real de Riscos com Contexto',
          description: 'Entenda quem acessa, como os dados são usados e onde estão vulneráveis — para agir no que realmente importa.'
        },
        {
          icon: 'ri-shield-check-line',
          title: 'Correção Automatizada e Conformidade Simples',
          description: 'Remediação guiada ou automatizada. Conformidade com LGPD, GDPR, HIPAA com trilhas de auditoria completas.'
        },
        {
          icon: 'ri-cloud-line',
          title: 'Segurança Integrada à Sua Infraestrutura Cloud',
          description: 'Proteja aplicações nativas da nuvem com uma visão unificada de dados, permissões e riscos em tempo real.'
        }
      ],
      howTitle: 'Como funciona a ativação com a AORKIA?',
      howSteps: [
        'Mapeamento completo de riscos e dados sensíveis',
        'Integração com sua estratégia de segurança e compliance',
        'Automação da remediação com visibilidade contínua',
        'Capacitação da equipe + suporte estratégico AORKIA'
      ],
      differentialTitle: 'O diferencial AORKIA',
      differentialContent: 'Enquanto outras soluções apenas geram alertas, a AORKIA transforma dados em ação concreta. Ativamos as melhores plataformas DSPM do mercado e orquestramos sua proteção de dados com inteligência, contexto e precisão contínua.',
      risksTitle: 'O que está em risco sem isso?',
      risks: [
        'Informações de clientes expostas sem rastreamento',
        'Violações com impacto regulatório (LGPD, GDPR)',
        'Perda de propriedade intelectual e reputação',
        'Equipes paralisadas por alertas sem ação'
      ],
      ctaTitle: 'Assuma o Controle Real dos Seus Dados',
      ctaText: 'Segurança de dados não é só sobre firewalls — é sobre saber exatamente o que está exposto, onde e por quê. Fale com um especialista AORKIA e ative uma postura de segurança proativa, contínua e auditável.',
      image: '/image/dspm.png'
    },
    {
      id: 'receitas',
      title: 'Plataforma de Inteligência de Receita com IA',
      supportText: 'Crescimento Real. Previsibilidade Mensurável. Decisões Guiadas por Dados.',
      subtitle: 'Sua equipe está atolada em tarefas manuais, seus vendedores perdem o timing, e suas previsões mudam toda semana? A AORKIA ativa Plataformas de Inteligência de Receita com IA que transformam dados fragmentados em decisões precisas, pipeline saudável e crescimento previsível.',
      whyTitle: 'Por que sua operação precisa de Inteligência de Receita com IA?',
      whyContent: 'Em mercados B2B complexos, intuição não é mais suficiente. Sem visibilidade real sobre o ciclo de receita, você perde oportunidades, fecha menos do que poderia e não consegue repetir o que funciona. A IA aplicada à receita conecta dados, processos e equipes — permitindo decisões rápidas, previsões confiáveis e execução coordenada.',
      whatTitle: 'O que a AORKIA entrega com Inteligência de Receita?',
      features: [
        {
          icon: 'ri-flow-chart',
          title: 'Ciclo de Receita Unificado e Visível',
          description: 'CRM, e-mails, reuniões e dados de uso em um modelo único — para gestão de pipeline em tempo real.'
        },
        {
          icon: 'ri-line-chart-line',
          title: 'Previsibilidade com IA Preditiva',
          description: 'Saiba o que vai fechar, o que está em risco e onde estão suas melhores oportunidades.'
        },
        {
          icon: 'ri-team-line',
          title: 'Alinhamento Total entre Marketing, Vendas e Customer Success (RevOps)',
          description: 'Processos integrados, playbooks automatizados e insights compartilhados entre áreas.'
        },
        {
          icon: 'ri-user-settings-line',
          title: 'Capacitação Inteligente dos Vendedores',
          description: 'Próximas ações recomendadas, alertas inteligentes, automação de tarefas — para foco total no fechamento.'
        }
      ],
      howTitle: 'Como funciona a ativação com a AORKIA?',
      howSteps: [
        'Mapeamento do ciclo de receita e gaps operacionais',
        'Integração de dados e implantação da plataforma IA mais aderente ao seu stack',
        'Implementação de modelos preditivos com personalização por ICP e segmento',
        'Treinamento das equipes + governança e suporte contínuo'
      ],
      differentialTitle: 'O diferencial AORKIA',
      differentialContent: 'A maioria das empresas compra software e continua vendendo no escuro. Com a AORKIA, você ativa uma operação de receita inteligente, onde cada etapa é visível, previsível e escalável. Não apenas dashboards — mas direção real para o crescimento.',
      risksTitle: 'O que você perde sem isso?',
      risks: [
        'Pipeline com vazamentos invisíveis',
        'Previsões inconsistentes e pressão no fim do mês',
        'Time de vendas reagindo, não liderando',
        'Oportunidades de upsell perdidas por falta de insight'
      ],
      ctaTitle: 'Transforme Dados em Receita Previsível',
      ctaText: 'Sua operação de receita pode ser uma máquina previsível de alto desempenho. Fale com a AORKIA e ative sua plataforma de inteligência com IA agora.',
      image: '/image/receitas.png'
    },
    {
      id: 'digital',
      title: 'Estratégia de Presença Digital',
      supportText: 'Posicionamento Estratégico. Leads Qualificados. ROI Mensurável.',
      subtitle: 'Ter um site e postar nas redes não é mais suficiente. Se sua empresa investe em marketing digital e não atrai leads qualificados ou vê retorno real, a AORKIA ativa uma Estratégia de Presença Digital centrada em performance, autoridade e geração de receita.',
      whyTitle: 'Por que sua empresa precisa de uma Estratégia Digital de verdade?',
      whyContent: 'Em um mar de conteúdos e anúncios, estar presente não significa ser encontrado — e muito menos escolhido. A presença digital precisa ser estratégica, mensurável e conectada diretamente à geração de demanda qualificada.',
      whatTitle: 'O que a AORKIA entrega na sua Estratégia de Presença Digital?',
      features: [
        {
          icon: 'ri-search-line',
          title: 'SEO e Conteúdo com Foco em Conversão',
          description: 'Posicione sua empresa no topo das buscas com conteúdo pensado para atrair, educar e converter.'
        },
        {
          icon: 'ri-advertisement-line',
          title: 'Mídia Paga com Segmentação Cirúrgica',
          description: 'Campanhas otimizadas no Google, Meta e LinkedIn com foco real em CAC, LTV e geração de oportunidades concretas.'
        },
        {
          icon: 'ri-robot-line',
          title: 'Automação e Nutrição Inteligente de Leads',
          description: 'Jornadas personalizadas que educam, qualificam e conduzem o lead até o momento certo da venda.'
        },
        {
          icon: 'ri-bar-chart-line',
          title: 'Métricas Reais e Otimização Contínua',
          description: 'Relatórios estratégicos com foco em ROI, CAC e pipeline — não em métricas de vaidade.'
        }
      ],
      howTitle: 'Como funciona a ativação com a AORKIA?',
      howSteps: [
        'Diagnóstico do seu funil e posicionamento digital atual',
        'Ativação integrada de SEO, mídia paga e automação com metas claras',
        'Criação e publicação de conteúdos estratégicos orientados por dados',
        'Monitoramento, otimização e realinhamento contínuo com foco em resultado'
      ],
      differentialTitle: 'O diferencial AORKIA',
      differentialContent: 'Outras empresas vendem tráfego. A AORKIA entrega tração. Ativamos uma estratégia que transforma sua presença digital em uma máquina previsível de leads qualificados e crescimento mensurável. Sem promessas vagas. Sem desperdício de verba.',
      risksTitle: 'O que você perde sem isso?',
      risks: [
        'Visibilidade sem conversão real',
        'Leads desqualificados ocupando seu time comercial',
        'Investimento sem retorno, baseado em vaidade e volume',
        'Ausência de autoridade digital frente à concorrência'
      ],
      ctaTitle: 'Posicione sua marca como referência no digital',
      ctaText: 'A presença digital certa atrai, qualifica e acelera. Fale com a AORKIA e ative uma estratégia feita para gerar resultado real — não apenas likes.',
      image: '/image/digital.png'
    }
  ];

  // Função para navegar no carrossel
  const navigateCarousel = (direction) => {
    const newSlide = direction === 'next' 
      ? (currentSlide + 1) % solutions.length 
      : currentSlide === 0 ? solutions.length - 1 : currentSlide - 1;
    
    setCurrentSlide(newSlide);
    setActiveSection(solutions[newSlide].id);
    
    // Scroll para a seção correspondente
    const section = document.getElementById(solutions[newSlide].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Função para ir para uma solução específica
  const goToSolution = (index) => {
    setCurrentSlide(index);
    setActiveSection(solutions[index].id);
    
    const section = document.getElementById(solutions[index].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Detectar seção ativa no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-solution-id]');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          const solutionId = section.getAttribute('data-solution-id');
          setActiveSection(solutionId);
          setCurrentSlide(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Soluções AORKIA - Ativamos Tecnologia para Resultados Reais</title>
        <meta name="description" content="Descubra as soluções AORKIA: Backup SaaS, Edge AI, DSPM, Inteligência de Receita e Presença Digital. Ativamos tecnologia para resultados mensuráveis." />
        <meta name="keywords" content="backup saas, edge ai, dspm, inteligência receita, presença digital, aorkia" />
        <link rel="canonical" href="https://aorkia.com/solucoes" />
      </Head>

      {/* Hero Section com Vídeo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Vídeo de Fundo */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/video/hero-background.mp4" type="video/mp4" />
            {/* Fallback para navegadores que não suportam vídeo */}
            <div className="w-full h-full bg-gradient-to-br from-dark-blue-1 to-dark-blue-2"></div>
          </video>
        </div>

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Conteúdo da Hero */}
        <div className="relative z-20 container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Soluções AORKIA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Ativamos tecnologia de ponta para transformar desafios complexos em resultados mensuráveis e crescimento sustentável.
          </p>
          
          {/* Carrossel Horizontal Elegante */}
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-8">Escolha sua Solução</h3>
              
              {/* Navegação do Carrossel */}
              <div className="flex items-center justify-center space-x-4">
                {/* Botão Anterior */}
                <button
                  onClick={() => navigateCarousel('prev')}
                  className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-white transition-all duration-300 border border-primary/30"
                  aria-label="Solução anterior"
                >
                  <i className="ri-arrow-left-line text-xl"></i>
                </button>

                {/* Cards das Soluções */}
                <div className="flex-1 overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {solutions.map((solution, index) => (
                      <div
                        key={solution.id}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div 
                          className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                            index === currentSlide 
                              ? 'bg-primary/20 border-2 border-primary scale-105' 
                              : 'bg-white/5 border border-white/20 hover:bg-white/10'
                          }`}
                          onClick={() => goToSolution(index)}
                        >
                          <h4 className="text-xl font-semibold text-white mb-2">
                            {solution.title}
                          </h4>
                          <p className="text-primary text-sm font-medium mb-3">
                            {solution.supportText}
                          </p>
                          <p className="text-gray-300 text-sm line-clamp-3">
                            {solution.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão Próximo */}
                <button
                  onClick={() => navigateCarousel('next')}
                  className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-white transition-all duration-300 border border-primary/30"
                  aria-label="Próxima solução"
                >
                  <i className="ri-arrow-right-line text-xl"></i>
                </button>
              </div>

              {/* Indicadores */}
              <div className="flex justify-center space-x-2 mt-6">
                {solutions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSolution(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir para solução ${index + 1}`}
                  />
                ))}
              </div>

              {/* Botão Ver Solução */}
              <button
                onClick={() => goToSolution(currentSlide)}
                className="mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Esta Solução
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <i className="ri-arrow-down-line text-white text-2xl"></i>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          data-solution-id={solution.id}
          className="relative min-h-screen py-20 px-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 44, 76, 0.9), rgba(13, 58, 100, 0.9)), url(${solution.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="container mx-auto max-w-7xl">
            
            {/* Hero da Solução */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {solution.title}
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
                {solution.supportText}
              </p>
              <p className="text-lg md:text-xl max-w-5xl mx-auto leading-relaxed text-gray-200">
                {solution.subtitle}
              </p>
            </div>

            {/* Por que preciso? */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="text-primary text-3xl mr-4">
                  <i className="ri-question-line"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {solution.whyTitle}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-200 max-w-4xl">
                {solution.whyContent}
              </p>
            </div>

            {/* O que oferece */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="text-primary text-3xl mr-4">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {solution.whatTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary text-2xl mt-1">
                        <i className={feature.icon}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-200">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Como funciona */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="text-primary text-3xl mr-4">
                  <i className="ri-settings-3-line"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {solution.howTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solution.howSteps.map((step, idx) => (
                  <div key={idx} className="p-6 rounded-lg text-center bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-primary text-3xl font-bold mb-4">
                      {idx + 1}
                    </div>
                    <p className="font-medium text-white">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferencial AORKIA */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="text-primary text-3xl mr-4">
                  <i className="ri-star-line"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {solution.differentialTitle}
                </h3>
              </div>
              <div className="p-8 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                <p className="text-lg leading-relaxed text-white">
                  {solution.differentialContent}
                </p>
              </div>
            </div>

            {/* Riscos */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="text-red-400 text-3xl mr-4">
                  <i className="ri-alert-line"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {solution.risksTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.risks.map((risk, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 rounded-lg bg-red-900/20 border border-red-500/30">
                    <div className="text-red-400 text-xl">
                      <i className="ri-close-circle-line"></i>
                    </div>
                    <p className="text-gray-200">
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="text-primary text-3xl mr-4">
                  <i className="ri-rocket-line"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {solution.ctaTitle}
                </h3>
              </div>
              <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-200">
                {solution.ctaText}
              </p>
              <Link 
                href="/contato" 
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Fale com um Especialista
              </Link>
            </div>

            {/* Botão Voltar ao Topo */}
            <div className="text-center">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20"
              >
                <i className="ri-arrow-up-line text-xl"></i>
                <span>Voltar ao Topo</span>
              </button>
            </div>

          </div>
        </section>
      ))}

      {/* CTA Final */}
      <section className="py-20 px-4 bg-dark-blue-1">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Ativar Resultados Reais?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transforme desafios complexos em crescimento sustentável com as soluções AORKIA.
          </p>
          <Link 
            href="/contato" 
            className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Começar Agora
          </Link>
        </div>
      </section>

    </>
  );
}

