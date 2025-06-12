import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Solucoes() {
  const [activeSection, setActiveSection] = useState('backup');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);
  const selectorRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Soluções com os novos textos do PDF e cores AORKIA
  const solutions = [
    {
      id: 'backup',
      title: 'Keepit com AORKIA',
      supportText: 'Backup Imutável. Isolamento Real. Recuperação Garantida.',
      subtitle: 'Microsoft, Google e Salesforce não garantem a recuperação dos seus dados em caso de erro, exclusão ou ataque. A AORKIA ativa a Keepit — plataforma global de backup SaaS — para entregar proteção imutável, restauração granular e conformidade certificada com LGPD, GDPR e HIPAA.',
      whyTitle: 'Por que preciso da Keepit com AORKIA?',
      whyContent: 'A responsabilidade sobre os dados é sua, não do provedor SaaS. Sem um backup isolado e imutável, qualquer exclusão acidental, falha interna ou ransomware pode causar perdas irreversíveis, interrupções operacionais e sanções regulatórias.',
      whatTitle: 'O que você ativa com Keepit',
      features: [
        {
          icon: 'ri-shield-keyhole-line',
          title: 'Backup Imutável com Air Gap',
          description: 'Dados isolados em nuvem independente — não podem ser corrompidos ou apagados.'
        },
        {
          icon: 'ri-restart-line',
          title: 'Restauração Granular e Instantânea',
          description: 'Recupere um item, uma conta ou toda a estrutura — em minutos e com total controle.'
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
      howTitle: 'Como funciona a ativação com a AORKIA',
      howSteps: [
        'Mapeamento do ambiente e riscos operacionais',
        'Implantação e configuração personalizada da Keepit',
        'Automação de snapshots, auditoria e planos de recuperação',
        'Capacitação da equipe + suporte estratégico contínuo'
      ],
      differentialTitle: 'O diferencial AORKIA',
      differentialContent: 'Na AORKIA, ativar Keepit é mais do que implementar uma tecnologia — é transformar proteção de dados em um pilar estratégico de continuidade, governança e vantagem competitiva.',
      risksTitle: 'O que você pode perder sem isso',
      risks: [
        'E-mails, arquivos e históricos valiosos perdidos para sempre',
        'Não conformidade com LGPD, GDPR, HIPAA ou DORA',
        'Operações paralisadas por falhas humanas ou ataques externos',
        'Impossibilidade de auditar e comprovar a integridade dos dados'
      ],
      ctaTitle: 'Proteja Seus Dados com Quem Ativa Resiliência de Verdade',
      ctaText: 'Blindar seus dados SaaS não é uma opção — é uma decisão estratégica. Fale com a AORKIA e ative agora a proteção imutável com Keepit.',
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
  };

  // Função para detectar seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-solution-id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          const solutionId = section.getAttribute('data-solution-id');
          setActiveSection(solutionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          
          {/* Seletor Horizontal de Soluções */}
          <div className="w-full max-w-5xl mx-auto mt-8 relative">
            <div 
              className="relative overflow-hidden rounded-xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              ref={selectorRef}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${selectedSolutionIndex * 100}%)` }}
              >
                {solutions.map((solution, index) => (
                  <div
                    key={solution.id}
                    className={`flex-shrink-0 w-full px-2 md:px-3 cursor-pointer transition-all duration-300 ${
                      index === selectedSolutionIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-30 scale-95'
                    }`}
                    onClick={() => {
                      setSelectedSolutionIndex(index);
                      const element = document.getElementById(solution.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className={`p-4 md:p-6 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                      index === selectedSolutionIndex
                        ? 'bg-primary/15 border-white/30 shadow-lg shadow-primary/25'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base">
                        {solution.supportText}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicadores de navegação */}
            <div className="flex justify-center mt-6 space-x-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSolutionIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === selectedSolutionIndex
                      ? 'bg-primary scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            {/* Botões de navegação lateral - apenas desktop */}
            <div className="hidden md:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-30" style={{ top: 'calc(50% - 30px)' }}>
              <button
                onClick={() => setSelectedSolutionIndex(Math.max(0, selectedSolutionIndex - 1))}
                disabled={selectedSolutionIndex === 0}
                className={`p-2 rounded-full transition-all duration-300 ${
                  selectedSolutionIndex === 0
                    ? 'opacity-30 cursor-not-allowed'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <i className="ri-arrow-left-line text-xl"></i>
              </button>
            </div>
            
            <div className="hidden md:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-30" style={{ top: 'calc(50% - 30px)' }}>
              <button
                onClick={() => setSelectedSolutionIndex(Math.min(solutions.length - 1, selectedSolutionIndex + 1))}
                disabled={selectedSolutionIndex === solutions.length - 1}
                className={`p-2 rounded-full transition-all duration-300 ${
                  selectedSolutionIndex === solutions.length - 1
                    ? 'opacity-30 cursor-not-allowed'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <i className="ri-arrow-right-line text-xl"></i>
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
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
        >
          {/* Background Image (aparece apenas quando ativo) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === solution.id ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${solution.image})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color (aparece quando não está ativo) */}
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === solution.id ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>
          
          {/* Content */}
          <div className="relative z-10 min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-7xl">
              
              {/* Hero da Solução */}
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-black'
                }`}>
                  {solution.title}
                </h2>
                <p className={`text-xl md:text-2xl font-semibold mb-6 transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                }`}>
                  {solution.supportText}
                </p>
                <p className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-gray-200' : 'text-gray-700'
                }`}>
                {solution.subtitle}
              </p>
            </div>

            {/* Por que preciso? */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className={`text-3xl mr-4 transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                }`}>
                  <i className="ri-question-line"></i>
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-black'
                }`}>
                  {solution.whyTitle}
                </h3>
              </div>
              <p className={`text-lg leading-relaxed max-w-4xl transition-colors duration-500 ${
                activeSection === solution.id ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {solution.whyContent}
              </p>
            </div>

            {/* O que oferece */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`text-3xl mr-4 transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                }`}>
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-black'
                }`}>
                  {solution.whatTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className={`p-6 rounded-lg border transition-all duration-500 ${
                    activeSection === solution.id 
                      ? 'bg-white/10 backdrop-blur-sm border-white/20' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`text-2xl mt-1 transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                      }`}>
                        <i className={feature.icon}></i>
                      </div>
                      <div>
                        <h4 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                          activeSection === solution.id ? 'text-white' : 'text-black'
                        }`}>
                          {feature.title}
                        </h4>
                        <p className={`transition-colors duration-500 ${
                          activeSection === solution.id ? 'text-gray-200' : 'text-gray-700'
                        }`}>
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
                <div className={`text-3xl mr-4 transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                }`}>
                  <i className="ri-settings-3-line"></i>
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-black'
                }`}>
                  {solution.howTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solution.howSteps.map((step, idx) => (
                  <div key={idx} className={`p-6 rounded-lg text-center border transition-all duration-500 ${
                    activeSection === solution.id 
                      ? 'bg-white/10 backdrop-blur-sm border-white/20' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                    }`}>
                      {idx + 1}
                    </div>
                    <p className={`font-medium transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferencial AORKIA */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className={`text-3xl mr-4 transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                }`}>
                  <i className="ri-star-line"></i>
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-black'
                }`}>
                  {solution.differentialTitle}
                </h3>
              </div>
              <div className={`p-8 rounded-lg border transition-all duration-500 ${
                activeSection === solution.id 
                  ? 'bg-primary/20 backdrop-blur-sm border-primary/30' 
                  : 'bg-blue-50 border-blue-200'
              }`}>
                <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-gray-800'
                }`}>
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
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-black'
                }`}>
                  {solution.risksTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.risks.map((risk, idx) => (
                  <div key={idx} className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-500 ${
                    activeSection === solution.id 
                      ? 'bg-red-900/20 border-red-500/30' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="text-red-400 text-xl">
                      <i className="ri-close-circle-line"></i>
                    </div>
                    <p className={`transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className={`text-3xl mr-4 transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                }`}>
                  <i className="ri-rocket-line"></i>
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-black'
                }`}>
                  {solution.ctaTitle}
                </h3>
              </div>
              <p className={`text-lg mb-8 max-w-3xl mx-auto transition-colors duration-500 ${
                activeSection === solution.id ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {solution.ctaText}
              </p>
              <Link 
                href="/contato" 
                className={`inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeSection === solution.id 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-blue-700 hover:bg-blue-800 text-white'
                }`}
              >
                Fale com um Especialista
              </Link>
            </div>

            {/* Botão Voltar ao Topo */}
            <div className="text-center">
              <button
                onClick={scrollToTop}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                  activeSection === solution.id 
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
                }`}
              >
                <i className="ri-arrow-up-line text-xl"></i>
                <span>Voltar ao Topo</span>
              </button>
            </div>
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
            Transforme desafios críticos em vantagem competitiva com as soluções AORKIA.
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

