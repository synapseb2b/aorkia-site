import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Solucoes() {
  const [activeSection, setActiveSection] = useState('backup');
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);
  const [activePart, setActivePart] = useState(null); // Para controlar qual parte está ativa
  const selectorRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Soluções com nova ordem e textos atualizados
  const solutions = [
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      supportText: 'Proteção Imutável. Recuperação Rápida. Conformidade Garantida.',
      subtitle: 'Microsoft, Google e Salesforce não protegem seus dados contra exclusões, erros humanos ou ransomware. A AORKIA ativa a Keepit — líder global em backup SaaS — para garantir recuperação granular, backups 100% imutáveis e conformidade com LGPD e GDPR. Confiança de mais de 15.000 empresas em 74 países, incluindo Porsche e Oxford University.',
      video: '/image/Keepit_AOIRKIA.mp4',
      mythTitle: 'O Mito da Proteção Nativa: Seus Dados Estão Realmente Seguros?',
      mythContent: 'Muitos gestores acreditam que as ferramentas nativas de Microsoft 365, Google Workspace ou Salesforce oferecem proteção suficiente contra perda de dados. O mito é que "se está na nuvem, está protegido" ou que as versões anteriores e lixeiras são backup real. A verdade é que essas ferramentas têm limitações críticas: retenção limitada (30-90 dias), sem proteção contra ransomware, exclusões em massa ou falhas internas. Além disso, os próprios fornecedores deixam claro que a responsabilidade pelos dados é sua, não deles.',
      mythHighlight: 'Confiar apenas na proteção nativa é como deixar a porta de casa aberta e esperar que nada aconteça.',
      solutionTitle: 'Backup Imutável: Proteção Real, Recuperação Garantida.',
      features: [
        {
          icon: 'ri-shield-keyhole-line',
          title: 'Backup Imutável com Air Gap',
          description: 'Dados isolados em nuvem independente — não podem ser corrompidos ou apagados. Proteção real contra ransomware e falhas internas.'
        },
        {
          icon: 'ri-restart-line',
          title: 'Restauração Granular e Instantânea',
          description: 'Recupere um item, uma conta ou toda a estrutura — em minutos e com total controle. Sem perda de produtividade.'
        },
        {
          icon: 'ri-apps-2-line',
          title: 'Cobertura Completa do seu Ecossistema SaaS',
          description: 'Proteção nativa para Microsoft 365, Google Workspace, Salesforce, Dynamics, Azure AD e muito mais.'
        },
        {
          icon: 'ri-file-shield-2-line',
          title: 'Compliance Automatizado e Retenção Ilimitada',
          description: 'Políticas configuráveis, trilhas de auditoria completas e certificações como ISO 27001, ISAE 3402 e DORA.'
        }
      ],
      differentialTitle: 'Por que ativar Backup SaaS com AORKIA?',
      differentialSubtitle: 'Entregamos Proteção Estratégica e Conformidade Real',
      differentialContent: 'Na AORKIA, ativar Keepit é mais do que implementar uma tecnologia — é transformar proteção de dados em um pilar estratégico de continuidade, governança e vantagem competitiva.',
      processTitle: 'Sua Proteção de Dados: Nosso Processo Estruturado.',
      processSteps: [
        {
          title: 'Mapeamento do Ambiente e Riscos Operacionais',
          description: 'Avaliação completa dos seus dados críticos e vulnerabilidades para proteção personalizada.'
        },
        {
          title: 'Implantação e Configuração Personalizada da Keepit',
          description: 'Ativação da plataforma com configurações otimizadas para seu ambiente e necessidades específicas.'
        },
        {
          title: 'Automação de Snapshots, Auditoria e Planos de Recuperação',
          description: 'Configuração de políticas automatizadas e procedimentos de recuperação para máxima eficiência.'
        },
        {
          title: 'Capacitação da Equipe + Suporte Estratégico Contínuo',
          description: 'Treinamento especializado e suporte AORKIA para gestão proativa da sua proteção de dados.'
        }
      ],
      risksTitle: 'A Inação tem um Custo Alto: Não Deixe Seus Dados Vulneráveis.',
      risks: [
        'E-mails, arquivos e históricos valiosos perdidos para sempre, impactando operações críticas.',
        'Não conformidade com LGPD, GDPR, HIPAA ou DORA, resultando em multas e sanções.',
        'Operações paralisadas por falhas humanas ou ataques externos, comprometendo a continuidade.',
        'Impossibilidade de auditar e comprovar a integridade dos dados para compliance e governança.'
      ],
      ctaText: 'Blindar seus dados SaaS não é uma opção — é uma decisão estratégica. Converse com nossos especialistas e ative agora a proteção imutável com Keepit.',
      logo: '/image/keepit_logo_aorkia.png',
      // Imagens para cada parte da seção
      images: {
        intro: '/image/backup.png',
        myth: '/image/backup.png',
        solution: '/image/backup.png',
        differential: '/image/backup.png',
        process: '/image/backup.png',
        risks: '/image/backup.png',
        cta: '/image/backup.png'
      }
    },
    {
      id: 'dspm',
      title: 'Visibilidade Estratégica de Dados Sensíveis',
      supportText: 'Visibilidade Total. Controle Inteligente. Proteção de Dados em Qualquer Nuvem.',
      subtitle: 'Seus dados sensíveis estão espalhados em múltiplas nuvens — e você não tem visibilidade real sobre onde estão, quem acessa ou o quão expostos estão? A AORKIA ativa plataformas DSPM para descobrir, classificar e proteger dados críticos em tempo real, com controle contínuo e conformidade garantida.',
      video: '/image/DSPM_AORKIA.mp4',
      mythTitle: 'O Mito da Segurança Perimetral: Você Realmente Sabe Onde Estão Seus Dados?',
      mythContent: 'Muitos gestores ainda acreditam que firewalls, antivírus e ferramentas tradicionais de segurança são suficientes para proteger dados sensíveis em ambientes de nuvem. O mito é que "se tenho controle de acesso, meus dados estão seguros" ou que as ferramentas de segurança existentes oferecem visibilidade completa. A verdade é que essas soluções focam no perímetro e na proteção de rede, mas não revelam que seus dados mais sensíveis podem estar acessíveis sem visibilidade, controle ou proteção eficaz.',
      mythHighlight: 'É uma falsa sensação de controle que expõe sua organização a riscos invisíveis de vazamento ou penalidade, até que seja tarde demais.',
      solutionTitle: 'DSPM Inteligente: Visibilidade, Controle e Proteção Real de Dados.',
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
      differentialTitle: 'Por que ativar DSPM com AORKIA?',
      differentialSubtitle: 'Entregamos Visibilidade Estratégica e Ação Concreta',
      differentialContent: 'Enquanto outras soluções apenas geram alertas, a AORKIA transforma dados em ação concreta. Ativamos as melhores plataformas DSPM do mercado e orquestramos sua proteção de dados com inteligência, contexto e precisão contínua.',
      processTitle: 'Sua Visibilidade de Dados: Nosso Processo Estruturado.',
      processSteps: [
        {
          title: 'Mapeamento Completo de Riscos e Dados Sensíveis',
          description: 'Descoberta abrangente de todos os dados críticos e avaliação de vulnerabilidades em seu ambiente.'
        },
        {
          title: 'Integração com sua Estratégia de Segurança e Compliance',
          description: 'Alinhamento das políticas DSPM com seus frameworks de segurança e requisitos regulatórios existentes.'
        },
        {
          title: 'Automação da Remediação com Visibilidade Contínua',
          description: 'Implementação de correções automatizadas e monitoramento em tempo real para proteção proativa.'
        },
        {
          title: 'Capacitação da Equipe + Suporte Estratégico AORKIA',
          description: 'Treinamento especializado e suporte contínuo para maximizar o valor da sua estratégia de proteção de dados.'
        }
      ],
      risksTitle: 'A Inação tem um Custo Alto: Não Deixe Seus Dados Invisíveis.',
      risks: [
        'Informações de clientes expostas sem rastreamento, comprometendo confiança e reputação.',
        'Violações com impacto regulatório (LGPD, GDPR), resultando em multas significativas.',
        'Perda de propriedade intelectual e reputação por vazamentos não detectados.',
        'Equipes paralisadas por alertas sem ação, desperdiçando recursos e tempo.'
      ],
      ctaText: 'Segurança de dados não é só sobre firewalls — é sobre saber exatamente o que está exposto, onde e por quê. Converse com nossos especialistas e transforme visibilidade em segurança real.',
      // Imagens para cada parte da seção
      images: {
        intro: '/image/dspm.png',
        myth: '/image/dspm.png',
        solution: '/image/dspm.png',
        differential: '/image/dspm.png',
        process: '/image/dspm.png',
        risks: '/image/dspm.png',
        cta: '/image/dspm.png'
      }
    },
    {
      id: 'bordas',
      title: 'Inteligência Autônoma na Borda',
      supportText: 'Decisão Imediata. Eficiência Local. IA no Ponto Crítico.',
      subtitle: 'A AORKIA ativa Plataformas Edge AI que processam dados onde eles nascem — na fábrica, no varejo, em equipamentos remotos — para decisões autônomas, respostas em tempo real e independência da nuvem.',
      video: '/image/Edge_AI_AORKIA.mp4',
      mythTitle: 'O Mito da Centralização Total: Sua IA é Realmente Inteligente?',
      mythContent: 'Muitos gestores, acostumados com a potência da nuvem, acreditam que toda a inteligência e processamento de dados devem residir em data centers remotos. O mito é que a IA de ponta só funciona com grande poder de processamento centralizado, ou que suas operações já são "rápidas o suficiente". A verdade é que a dependência exclusiva da nuvem para cada decisão cria gargalos invisíveis: latência que retarda ações críticas, interrupções por falhas de conectividade e custos crescentes de transmissão de dados. Sua IA pode ser poderosa na nuvem, mas será que ela é realmente inteligente onde a ação acontece – no ponto crítico da sua operação?',
      mythHighlight: 'Confiar apenas na inteligência centralizada na nuvem é como ter um cérebro brilhante desconectado dos reflexos do corpo no momento da ação, roubando sua agilidade e capacidade de inovação no dia a dia.',
      solutionTitle: 'IA Funcional na Borda: Agilidade, Resiliência e Inteligência Operacional.',
      features: [
        {
          icon: 'ri-cpu-line',
          title: 'IA Ativa Onde os Dados Nascem',
          description: 'Decisões automatizadas em tempo real, com latência mínima e impacto máximo, sem depender da conectividade constante com a internet.'
        },
        {
          icon: 'ri-global-line',
          title: 'Escalabilidade Distribuída com Controle Central',
          description: 'Implante e gerencie IA em centenas ou milhares de sites com gestão central estratégica unificada, otimizando custos e eficiência.'
        },
        {
          icon: 'ri-dashboard-3-line',
          title: 'Gestão Unificada de Dispositivos e Aplicações',
          description: 'Controle o ciclo de vida completo de seus sistemas de borda sob uma única interface, abstraindo a complexidade da infraestrutura distribuída.'
        },
        {
          icon: 'ri-shield-check-line',
          title: 'Segurança de Ponta a Ponta',
          description: 'Proteção robusta desde o hardware até a nuvem com criptografia, isolamento e integridade garantida, processando dados localmente para privacidade aprimorada.'
        }
      ],
      differentialTitle: 'Por que ativar Edge AI com AORKIA?',
      differentialSubtitle: 'Entregamos a IA Pronta, Segura e Dimensionada',
      differentialContent: 'Você não precisa entender de infraestrutura distribuída, containers ou gerenciamento de dispositivos. A AORKIA entrega IA funcional na borda — pronta, segura e dimensionada para seu negócio. Ativamos, monitoramos e escalamos junto com você.',
      processTitle: 'Seu Caminho para a Inteligência Autônoma: Nosso Processo Estruturado.',
      processSteps: [
        {
          title: 'Mapeamento dos Casos de Uso Críticos',
          description: 'Avaliação detalhada das suas operações e necessidades para otimização com IA na borda.'
        },
        {
          title: 'Escolha e Integração das Melhores Plataformas Edge AI',
          description: 'Seleção e ativação das tecnologias líderes de mercado, como NVIDIA Jetson ou Azure IoT Edge, adaptadas ao seu ambiente.'
        },
        {
          title: 'Automação do Provisionamento e Orquestração Centralizada',
          description: 'Configuração de fluxos de trabalho para implantação e gerenciamento eficientes em escala, abstraindo a complexidade.'
        },
        {
          title: 'Treinamento, Suporte e Gestão Contínua com Visibilidade Total',
          description: 'Capacitação da sua equipe e suporte especializado AORKIA para máxima performance e resiliência.'
        }
      ],
      risksTitle: 'A Inação tem um Custo Alto: Não Deixe Sua Operação para Trás.',
      risks: [
        'Operações paralisadas por latência ou falta de conectividade, impactando a produtividade.',
        'Falta de resposta imediata em situações críticas, comprometendo segurança ou qualidade.',
        'Custo alto com nuvem centralizada e suporte ineficiente, devido à transmissão constante de dados.',
        'Perda de competitividade em eficiência, personalização e predição no seu segmento.'
      ],
      ctaText: 'Ganhe velocidade, resiliência e inteligência operacional no exato momento em que os dados são gerados. Converse com a AORKIA e veja como ativar decisões autônomas no ponto mais crítico da sua operação.',
      // Imagens para cada parte da seção
      images: {
        intro: '/image/bordas.png',
        myth: '/image/bordas.png',
        solution: '/image/bordas.png',
        differential: '/image/bordas.png',
        process: '/image/bordas.png',
        risks: '/image/bordas.png',
        cta: '/image/bordas.png'
      }
    }
  ];

  // Funções para controle de touch no mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && selectedSolutionIndex < solutions.length - 1) {
      setSelectedSolutionIndex(selectedSolutionIndex + 1);
    }
    if (isRightSwipe && selectedSolutionIndex > 0) {
      setSelectedSolutionIndex(selectedSolutionIndex - 1);
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Função para detectar seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-solution-id]');
      let currentActive = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          currentActive = section.getAttribute('data-solution-id');
        }
      });
      setActiveSection(currentActive);

      // Detectar qual parte está visível e ativar transição
      const parts = document.querySelectorAll('[data-part-id]');
      parts.forEach((part) => {
        const rect = part.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          const partId = part.getAttribute('data-part-id');
          setActivePart(partId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para ativar parte no hover/touch
  const handlePartInteraction = (partId) => {
    setActivePart(partId);
  };

  // Função para desativar parte (apenas no desktop)
  const handlePartLeave = () => {
    // No mobile, mantém ativo; no desktop, desativa
    if (window.innerWidth >= 768) {
      setActivePart(null);
    }
  };

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Função para controlar vídeos com Intersection Observer
  useEffect(() => {
    const videos = document.querySelectorAll('video[data-auto-play]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.5 // Vídeo precisa estar 50% visível para começar a tocar
    });

    videos.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      videos.forEach((video) => {
        observer.unobserve(video);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Soluções AORKIA - Ativamos Tecnologia para Resultados Reais</title>
        <meta name="description" content="Descubra as soluções AORKIA: Backup SaaS Estratégico, Visibilidade Estratégica de Dados Sensíveis, Inteligência Autônoma na Borda. Ativamos tecnologia para resultados mensuráveis." />
        <meta name="keywords" content="backup saas, dspm, edge ai, inteligência receita, presença digital, aorkia" />
        <link rel="canonical" href="https://aorkia.com/solucoes" />
      </Head>

      {/* Hero Section com Vídeo - MANTIDO ORIGINAL */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Vídeo de Fundo */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/image/video_hero.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>

        {/* Conteúdo da Hero */}
        <div className="relative z-20 container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Soluções AORKIA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Ativamos tecnologia de ponta para transformar desafios críticos em resultados mensuráveis e operações mais seguras.
          </p>
          
          {/* Seletor de Soluções em Cards - ORDEM ATUALIZADA */}
          <div className="w-full max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => {
                  setSelectedSolutionIndex(index);
                  const element = document.getElementById(solution.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`flex flex-col items-center justify-center p-6 rounded-lg border transition-all duration-300 h-full text-center
                  ${index === selectedSolutionIndex
                    ? 'bg-primary/20 border-primary/50 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }
                `}
              >
                <div className={`text-3xl mb-3 ${
                  index === selectedSolutionIndex ? 'text-primary' : 'text-white/70'
                }`}>
                  <i className={solution.features[0].icon}></i>
                </div>
                <h3 className={`text-xl font-bold mb-1 ${
                  index === selectedSolutionIndex ? 'text-white' : 'text-gray-300'
                }`}>
                  {solution.title}
                </h3>
                <p className={`text-sm ${
                  index === selectedSolutionIndex ? 'text-gray-200' : 'text-gray-400'
                }`}>
                  {solution.supportText}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <i className="ri-arrow-down-line text-white text-2xl"></i>
          </div>
        </div>
      </section>

      {/* Solutions Sections - NOVA ESTRUTURA CONFORME WIREFRAME */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          data-solution-id={solution.id}
          className="bg-white"
        >
          {/* 1ª PARTE: Introdução e Contexto */}
          <div 
            data-part-id={`${solution.id}-intro`}
            className="relative w-full overflow-hidden group"
            onMouseEnter={() => handlePartInteraction(`${solution.id}-intro`)}
            onMouseLeave={handlePartLeave}
            onTouchStart={() => handlePartInteraction(`${solution.id}-intro`)}
            onClick={() => handlePartInteraction(`${solution.id}-intro`)}
          >
            {/* Background Image (aparece apenas no hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activePart === `${solution.id}-intro` ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${solution.images.intro})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Background Color (aparece quando não está em hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                activePart === `${solution.id}-intro` ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>

            <div className={`relative z-10 container mx-auto max-w-6xl px-4 py-20 text-center transition-colors duration-500`}>
              {/* Logo da solução (se existir) */}
              {solution.logo && (
                <div className="mb-8">
                  <Image 
                    src={solution.logo} 
                    alt={solution.title}
                    className="h-12 w-auto mx-auto"
                    width={120}
                    height={48}
                  />
                </div>
              )}

              {/* Título Principal (H1) */}
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
                activePart === `${solution.id}-intro` ? 'text-white' : 'text-gray-900'
              }`}>
                {solution.title}
              </h1>

              {/* Subtítulo (Destaque) */}
              <p className={`text-xl md:text-2xl font-semibold mb-8 transition-colors duration-500 ${
                activePart === `${solution.id}-intro` ? 'text-primary-light' : 'text-primary'
              }`}>
                {solution.supportText}
              </p>

              {/* Vídeo - Responsivo com largura dos cards */}
              <div className="w-full max-w-4xl mx-auto mb-8">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video 
                    data-auto-play
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    muted
                    loop
                    playsInline
                    poster="/image/video-poster.jpg"
                  >
                    <source src={solution.video} type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                </div>
              </div>

              {/* Descrição principal */}
              <p className={`text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto transition-colors duration-500 ${
                activePart === `${solution.id}-intro` ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {solution.subtitle}
              </p>

              {/* CTA Primária */}
              <div className="mb-8">
                <Link 
                  href="/contato" 
                  className={`inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg ${
                    activePart === `${solution.id}-intro` 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                >
                  Falar com Especialista
                </Link>
              </div>

              {/* Elemento de Confiança */}
              <div className={`text-sm transition-colors duration-500 ${
                activePart === `${solution.id}-intro` ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <p>✓ Consultoria especializada • ✓ Implementação garantida • ✓ Suporte contínuo</p>
              </div>
            </div>
          </div>

          {/* 2ª PARTE: O Mito (com destaque visual) */}
          <div 
            data-part-id={`${solution.id}-myth`}
            className="relative w-full overflow-hidden group"
            onMouseEnter={() => handlePartInteraction(`${solution.id}-myth`)}
            onMouseLeave={handlePartLeave}
            onTouchStart={() => handlePartInteraction(`${solution.id}-myth`)}
            onClick={() => handlePartInteraction(`${solution.id}-myth`)}
          >
            {/* Background Image (aparece apenas no hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activePart === `${solution.id}-myth` ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${solution.images.myth})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Background Color (aparece quando não está em hover/ativo) */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                activePart === `${solution.id}-myth` ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ background: 'linear-gradient(to right, #fef2f2, #fff7ed)' }}
            ></div>

            <div className="relative z-10 py-20">
              <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 transition-colors duration-500 ${
                  activePart === `${solution.id}-myth` ? 'text-white' : 'text-red-700'
                }`}>
                  {solution.mythTitle}
                </h2>
                <p className={`text-lg md:text-xl leading-relaxed mb-8 transition-colors duration-500 ${
                  activePart === `${solution.id}-myth` ? 'text-gray-300' : 'text-red-800'
                }`}>
                  {solution.mythContent}
                </p>
                <div className={`border-l-4 p-6 rounded-lg transition-all duration-500 ${
                  activePart === `${solution.id}-myth` 
                    ? 'bg-white/10 border-red-300' 
                    : 'bg-red-100 border-red-500'
                }`}>
                  <p className={`text-lg font-semibold italic transition-colors duration-500 ${
                    activePart === `${solution.id}-myth` ? 'text-white' : 'text-red-900'
                  }`}>
                    "{solution.mythHighlight}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3ª PARTE: A Solução AORKIA (4 benefícios com ícones) */}
          <div 
            data-part-id={`${solution.id}-solution`}
            className="relative w-full overflow-hidden group"
            onMouseEnter={() => handlePartInteraction(`${solution.id}-solution`)}
            onMouseLeave={handlePartLeave}
            onTouchStart={() => handlePartInteraction(`${solution.id}-solution`)}
            onClick={() => handlePartInteraction(`${solution.id}-solution`)}
          >
            {/* Background Image (aparece apenas no hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activePart === `${solution.id}-solution` ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${solution.images.solution})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Background Color (aparece quando não está em hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                activePart === `${solution.id}-solution` ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>

            <div className="relative z-10 py-20">
              <div className="container mx-auto max-w-6xl px-4">
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-colors duration-500 ${
                  activePart === `${solution.id}-solution` ? 'text-white' : 'text-gray-900'
                }`}>
                  {solution.solutionTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className={`text-center p-6 rounded-lg border transition-all duration-500 ${
                      activePart === `${solution.id}-solution` 
                        ? 'bg-white/10 border-white/20 hover:shadow-lg' 
                        : 'bg-gray-50 border-gray-200 hover:shadow-lg'
                    }`}>
                      <div className={`text-4xl mb-4 transition-colors duration-500 ${
                        activePart === `${solution.id}-solution` ? 'text-primary-light' : 'text-primary'
                      }`}>
                        <i className={feature.icon}></i>
                      </div>
                      <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                        activePart === `${solution.id}-solution` ? 'text-white' : 'text-gray-900'
                      }`}>{feature.title}</h3>
                      <p className={`leading-relaxed transition-colors duration-500 ${
                        activePart === `${solution.id}-solution` ? 'text-gray-300' : 'text-gray-700'
                      }`}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4ª PARTE: O Diferencial AORKIA */}
          <div 
            data-part-id={`${solution.id}-differential`}
            className="relative w-full overflow-hidden group"
            onMouseEnter={() => handlePartInteraction(`${solution.id}-differential`)}
            onMouseLeave={handlePartLeave}
            onTouchStart={() => handlePartInteraction(`${solution.id}-differential`)}
            onClick={() => handlePartInteraction(`${solution.id}-differential`)}
          >
            {/* Background Image (aparece apenas no hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activePart === `${solution.id}-differential` ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${solution.images.differential})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Background Color (aparece quando não está em hover/ativo) */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                activePart === `${solution.id}-differential` ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ background: 'linear-gradient(to right, #eff6ff, #f0fdf4)' }}
            ></div>

            <div className="relative z-10 py-20">
              <div className="container mx-auto max-w-4xl px-4 text-center">
                <div className="mb-8">
                  <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-4 transition-colors duration-500 ${
                    activePart === `${solution.id}-differential` 
                      ? 'bg-primary-light text-white' 
                      : 'bg-primary text-white'
                  }`}>
                    DIFERENCIAL AORKIA
                  </div>
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 ${
                  activePart === `${solution.id}-differential` ? 'text-white' : 'text-gray-900'
                }`}>
                  {solution.differentialTitle}
                </h2>
                <p className={`text-xl font-semibold mb-8 transition-colors duration-500 ${
                  activePart === `${solution.id}-differential` ? 'text-primary-light' : 'text-primary'
                }`}>
                  {solution.differentialSubtitle}
                </p>
                <p className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 ${
                  activePart === `${solution.id}-differential` ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {solution.differentialContent}
                </p>
              </div>
            </div>
          </div>

          {/* 5ª PARTE: Como Funciona (4 passos) */}
          <div 
            data-part-id={`${solution.id}-process`}
            className="relative w-full overflow-hidden group"
            onMouseEnter={() => handlePartInteraction(`${solution.id}-process`)}
            onMouseLeave={handlePartLeave}
            onTouchStart={() => handlePartInteraction(`${solution.id}-process`)}
            onClick={() => handlePartInteraction(`${solution.id}-process`)}
          >
            {/* Background Image (aparece apenas no hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activePart === `${solution.id}-process` ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${solution.images.process})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Background Color (aparece quando não está em hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                activePart === `${solution.id}-process` ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>

            <div className="relative z-10 py-20">
              <div className="container mx-auto max-w-6xl px-4">
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-colors duration-500 ${
                  activePart === `${solution.id}-process` ? 'text-white' : 'text-gray-900'
                }`}>
                  {solution.processTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solution.processSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0 transition-colors duration-500 ${
                        activePart === `${solution.id}-process` 
                          ? 'bg-primary-light text-white' 
                          : 'bg-primary text-white'
                      }`}>
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                          activePart === `${solution.id}-process` ? 'text-white' : 'text-gray-900'
                        }`}>{step.title}</h3>
                        <p className={`leading-relaxed transition-colors duration-500 ${
                          activePart === `${solution.id}-process` ? 'text-gray-300' : 'text-gray-700'
                        }`}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6ª PARTE: Riscos de Não Agir */}
          <div 
            data-part-id={`${solution.id}-risks`}
            className="relative w-full overflow-hidden group"
            onMouseEnter={() => handlePartInteraction(`${solution.id}-risks`)}
            onMouseLeave={handlePartLeave}
            onTouchStart={() => handlePartInteraction(`${solution.id}-risks`)}
            onClick={() => handlePartInteraction(`${solution.id}-risks`)}
          >
            {/* Background Image (aparece apenas no hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activePart === `${solution.id}-risks` ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${solution.images.risks})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Background Color (aparece quando não está em hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-gray-100 transition-opacity duration-500 ${
                activePart === `${solution.id}-risks` ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>

            <div className="relative z-10 py-20">
              <div className="container mx-auto max-w-6xl px-4">
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-colors duration-500 ${
                  activePart === `${solution.id}-risks` ? 'text-white' : 'text-red-700'
                }`}>
                  {solution.risksTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solution.risks.map((risk, idx) => (
                    <div key={idx} className={`flex items-start p-6 rounded-lg shadow-sm border transition-all duration-500 ${
                      activePart === `${solution.id}-risks` 
                        ? 'bg-white/10 border-red-300' 
                        : 'bg-white border-red-200'
                    }`}>
                      <div className={`text-2xl mr-4 mt-1 flex-shrink-0 transition-colors duration-500 ${
                        activePart === `${solution.id}-risks` ? 'text-red-300' : 'text-red-500'
                      }`}>
                        <i className="ri-close-circle-line"></i>
                      </div>
                      <p className={`leading-relaxed transition-colors duration-500 ${
                        activePart === `${solution.id}-risks` ? 'text-gray-300' : 'text-gray-700'
                      }`}>{risk}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7ª PARTE: CTA Final */}
          <div 
            data-part-id={`${solution.id}-cta`}
            className="relative w-full overflow-hidden group"
            onMouseEnter={() => handlePartInteraction(`${solution.id}-cta`)}
            onMouseLeave={handlePartLeave}
            onTouchStart={() => handlePartInteraction(`${solution.id}-cta`)}
            onClick={() => handlePartInteraction(`${solution.id}-cta`)}
          >
            {/* Background Image (aparece apenas no hover/ativo) */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                activePart === `${solution.id}-cta` ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${solution.images.cta})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            {/* Background Color (aparece quando não está em hover/ativo) */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                activePart === `${solution.id}-cta` ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ background: 'linear-gradient(to right, #0076FF, #16a34a)' }}
            ></div>

            <div className="relative z-10 py-20">
              <div className="container mx-auto max-w-4xl px-4 text-center">
                <p className={`text-xl md:text-2xl leading-relaxed mb-8 transition-colors duration-500 ${
                  activePart === `${solution.id}-cta` ? 'text-gray-300' : 'text-white'
                }`}>
                  {solution.ctaText}
                </p>
                <Link 
                  href="/contato" 
                  className={`inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg ${
                    activePart === `${solution.id}-cta` 
                      ? 'bg-white text-primary hover:bg-gray-100' 
                      : 'bg-white text-primary hover:bg-gray-100'
                  }`}
                >
                  Fale com um Especialista
                </Link>
              </div>
            </div>
          </div>

          {/* Voltar ao Topo */}
          <div className="bg-white py-8">
            <div className="container mx-auto max-w-4xl px-4 text-center">
              <button
                onClick={scrollToTop}
                className="text-primary hover:text-primary/80 font-semibold transition-colors flex items-center mx-auto"
              >
                <i className="ri-arrow-up-line text-xl mr-2"></i>
                Voltar ao Topo
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* Botão Voltar ao Topo Flutuante */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-50"
        aria-label="Voltar ao topo"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>
    </>
  );
}

