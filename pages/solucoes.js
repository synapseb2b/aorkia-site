import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Solucoes() {
  const [activeSection, setActiveSection] = useState('backup');
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);
  const selectorRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Soluções com os novos textos do PDF e nova ordem
  const solutions = [
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      supportText: 'Proteção Imutável. Recuperação Rápida. Conformidade Garantida.',
      subtitle: 'Microsoft, Google e Salesforce não protegem seus dados contra exclusões, erros humanos ou ransomware. A AORKIA ativa a Keepit — líder global em backup SaaS — para garantir recuperação granular, backups 100% imutáveis e conformidade com LGPD e GDPR. Confiança de mais de 15.000 empresas em 74 países, incluindo Porsche e Oxford University.',
      whyTitle: 'Por que preciso da Keepit com AORKIA?',
      whyContent: 'A responsabilidade sobre os dados é sua, não do provedor SaaS. Sem um backup isolado e imutável, qualquer exclusão acidental, falha interna ou ransomware pode causar perdas irreversíveis, interrupções operacionais e sanções regulatórias.',
      mythTitle: 'O Mito da Proteção Nativa: Seus Dados Estão Realmente Seguros?',
      mythContent: 'Muitos gestores acreditam que as ferramentas nativas de Microsoft 365, Google Workspace ou Salesforce oferecem proteção suficiente contra perda de dados. O mito é que "se está na nuvem, está protegido" ou que as versões anteriores e lixeiras são backup real. A verdade é que essas ferramentas têm limitações críticas: retenção limitada (30-90 dias), sem proteção contra ransomware, exclusões em massa ou falhas internas. Além disso, os próprios fornecedores deixam claro que a responsabilidade pelos dados é sua, não deles. Confiar apenas na proteção nativa é como deixar a porta de casa aberta e esperar que nada aconteça.',
      whatTitle: 'O que você ativa com Keepit',
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
      ctaText: 'Blindar seus dados SaaS não é uma opção — é uma decisão estratégica. Converse com nossos especialistas e ative agora a proteção imutável com Keepit.',
      image: '/image/backup.png',
      logo: '/image/keepit_logo_aorkia.png'
    },
    {
      id: 'dspm',
      title: 'Visibilidade Estratégica de Dados Sensíveis',
      supportText: 'Visibilidade Total. Controle Inteligente. Proteção de Dados em Qualquer Nuvem.',
      subtitle: 'Seus dados sensíveis estão espalhados em múltiplas nuvens — e você não tem visibilidade real sobre onde estão, quem acessa ou o quão expostos estão? A AORKIA ativa plataformas DSPM para descobrir, classificar e proteger dados críticos em tempo real, com controle contínuo e conformidade garantida.',
      whyTitle: 'Por que você precisa de DSPM agora?',
      whyContent: 'A explosão de dados em ambientes multinuvem criou um novo tipo de risco: dados invisíveis, permissões excessivas e alertas sem contexto. Sem DSPM, sua empresa não sabe o que está exposto — até que seja tarde demais.',
      mythTitle: 'O Mito da Segurança Perimetral: Você Realmente Sabe Onde Estão Seus Dados?',
      mythContent: 'Muitos gestores ainda acreditam que firewalls, antivírus e ferramentas tradicionais de segurança são suficientes para proteger dados sensíveis em ambientes de nuvem. O mito é que "se tenho controle de acesso, meus dados estão seguros" ou que as ferramentas de segurança existentes oferecem visibilidade completa. A verdade é que essas soluções focam no perímetro e na proteção de rede, mas não revelam que seus dados mais sensíveis podem estar acessíveis sem visibilidade, controle ou proteção eficaz. É uma falsa sensação de controle que expõe sua organização a riscos invisíveis de vazamento ou penalidade, até que seja tarde demais.',
      whatTitle: 'O que a AORKIA entrega com Visibilidade Estratégica de Dados Sensíveis?',
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
      ctaText: 'Segurança de dados não é só sobre firewalls — é sobre saber exatamente o que está exposto, onde e por quê. Converse com nossos especialistas e transforme visibilidade em segurança real.',
      image: '/image/dspm.png'
    },
    {
      id: 'bordas',
      title: 'Inteligência Autônoma na Borda',
      supportText: 'Decisão Imediata. Eficiência Local. IA no Ponto Crítico.',
      subtitle: 'A AORKIA ativa Plataformas Edge AI que processam dados onde eles nascem — na fábrica, no varejo, em equipamentos remotos — para decisões autônomas, respostas em tempo real e independência da nuvem.',
      whyTitle: 'Por que ativar Inteligência Autônoma na Borda?',
      whyContent: 'Levar a Inteligência Artificial até o ponto onde os dados são gerados não é mais tendência — é necessidade estratégica. Reduz latência, aumenta eficiência, habilita decisões locais instantâneas e libera sua operação da dependência total da nuvem. Segundo o Gartner, até 2029, 60% das implementações de edge computing usarão IA composta, ante menos de 5% em 2023.',
      mythTitle: 'O Mito da Centralização Total: Sua IA é Realmente Inteligente?',
      mythContent: 'Muitos gestores, acostumados com a potência da nuvem, acreditam que toda a inteligência e processamento de dados devem residir em data centers remotos. O mito é que a IA de ponta só funciona com grande poder de processamento centralizado, ou que suas operações já são "rápidas o suficiente". A verdade é que a dependência exclusiva da nuvem para cada decisão cria gargalos invisíveis: latência que retarda ações críticas, interrupções por falhas de conectividade e custos crescentes de transmissão de dados. Sua IA é poderosa na nuvem, mas será que ela é realmente inteligente onde a ação acontece – no ponto crítico da sua operação? Essa centralização pode estar roubando sua agilidade, eficiência e capacidade de inovação no dia a dia.',
      whatTitle: 'O que a AORKIA ativa com Inteligência Autônoma na Borda?',
      features: [
        {
          icon: 'ri-cpu-line',
          title: 'IA Ativa Onde os Dados Nascem',
          description: 'Decisões automatizadas em tempo real, com latência mínima e impacto máximo.'
        },
        {
          icon: 'ri-global-line',
          title: 'Escalabilidade Distribuída com Controle Central',
          description: 'Implante e gerencie IA em centenas ou milhares de sites com gestão central estratégica.'
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
      ctaText: 'Ganhe velocidade, resiliência e inteligência operacional no exato momento em que os dados são gerados. Converse com a AORKIA e veja como ativar decisões autônomas no ponto mais crítico da sua operação.',
      image: '/image/bordas.png'
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
        <meta name="description" content="Descubra as soluções AORKIA: Backup SaaS Estratégico, Visibilidade Estratégica de Dados Sensíveis, Inteligência Autônoma na Borda. Ativamos tecnologia para resultados mensuráveis." />
        <meta name="keywords" content="backup saas, dspm, edge ai, inteligência receita, presença digital, aorkia" />
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
          
          {/* Novo Seletor de Soluções em Cards - ORDEM ATUALIZADA */}
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

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          data-solution-id={solution.id}
          className={`relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800
            ${activeSection === solution.id ? 'bg-black text-white' : 'bg-white text-black'} 
            transition-colors duration-500`}
        >
          {/* Background Image (aparece apenas quando ativo e em telas maiores) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 hidden md:block
              ${activeSection === solution.id ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ backgroundImage: `url(${solution.image})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color (aparece quando não está ativo ou em telas menores) */}
          <div 
            className={`absolute inset-0 transition-opacity duration-500 md:hidden
              ${activeSection === solution.id ? 'opacity-0' : 'opacity-100'}
              ${activeSection === solution.id ? 'bg-black' : 'bg-white'} `}
          ></div>

          {/* Content */}
          <div className="relative z-10 min-h-screen py-20 px-4 flex flex-col justify-center">
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
              <div className="flex items-center justify-center mb-6">
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
              <p className={`text-lg leading-relaxed max-w-4xl mx-auto text-center transition-colors duration-500 ${
                activeSection === solution.id ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {solution.whyContent}
              </p>
            </div>

            {/* Nova seção: O Mito */}
            {solution.mythTitle && (
              <div className="mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className={`text-3xl mr-4 transition-colors duration-500 ${
                    activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-error-warning-line"></i>
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${
                    activeSection === solution.id ? 'text-white' : 'text-black'
                  }`}>
                    {solution.mythTitle}
                  </h3>
                </div>
                <div className={`p-8 rounded-lg border transition-all duration-500 ${
                  activeSection === solution.id 
                    ? 'bg-yellow-900/20 backdrop-blur-sm border-yellow-500/30' 
                    : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <p className={`text-lg leading-relaxed text-center transition-colors duration-500 ${
                    activeSection === solution.id ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {solution.mythContent}
                  </p>
                </div>
              </div>
            )}

            {/* O que oferece */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
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
                  <div key={idx} className={`p-6 rounded-lg border transition-all duration-500 text-center ${
                    activeSection === solution.id 
                      ? 'bg-white/10 backdrop-blur-sm border-white/20' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className={`text-2xl mb-4 mx-auto transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                    }`}>
                      <i className={feature.icon}></i>
                    </div>
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
                ))}
              </div>
            </div>

            {/* Como funciona */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
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
              <div className="flex items-center justify-center mb-6">
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
                <p className={`text-lg leading-relaxed text-center transition-colors duration-500 ${
                  activeSection === solution.id ? 'text-white' : 'text-gray-800'
                }`}>
                  {solution.differentialContent}
                </p>
              </div>
            </div>

            {/* Riscos */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-6">
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
                  <div key={idx} className={`flex items-center justify-center space-x-3 p-4 rounded-lg border transition-all duration-500 text-center ${
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
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                  activeSection === solution.id 
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="ri-arrow-up-line"></i>
                <span>Voltar ao Topo</span>
              </button>
            </div>

            </div>
          </div>
        </section>
      ))}

      {/* Mobile Touch Controls */}
      <div 
        className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex space-x-2 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2">
          {solutions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedSolutionIndex ? 'bg-primary' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

