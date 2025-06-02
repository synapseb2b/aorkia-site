import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Dados dos diagnósticos (simplificado, idealmente viria de uma API ou arquivo separado)
const diagnostics = {
  'backup-saas': {
    'c-level': {
      title: 'Diagnóstico Estratégico: Backup SaaS para C-Level',
      content: [
        'Sua visão estratégica exige resiliência absoluta. A perda de dados SaaS não é uma opção.',
        'A Keepit, via AORKIA, garante conformidade (LGPD, GDPR) e continuidade operacional inabalável.',
        'Mitigue riscos financeiros e reputacionais com backup imutável e recuperação instantânea.',
        'Foco no core business: deixe a proteção de dados SaaS conosco.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
    'ti-manager': {
      title: 'Diagnóstico Técnico: Backup SaaS para Gestor de TI',
      content: [
        'Simplifique a gestão de backups SaaS com uma solução centralizada e automatizada.',
        'Recuperação granular e rápida minimiza downtime e impacto nas operações.',
        'Segurança de ponta com criptografia e armazenamento imutável.',
        'Libere sua equipe de tarefas manuais e foque em projetos estratégicos.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
    'ti-specialist': {
      title: 'Diagnóstico Operacional: Backup SaaS para Especialista de TI',
      content: [
        'Implementação rápida e integração transparente com Microsoft 365, Google Workspace, Salesforce, etc.',
        'Console intuitiva para gerenciamento simplificado e monitoramento proativo.',
        'APIs robustas para automação e integração com suas ferramentas existentes.',
        'Suporte técnico especializado AORKIA para garantir performance máxima.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
  },
  'infraestrutura': {
    'c-level': {
      title: 'Diagnóstico Estratégico: Infraestrutura para C-Level',
      content: [
        'Sua infraestrutura atual suporta a velocidade e a escala que seu negócio exige?',
        'A AORKIA desenha ambientes resilientes e escaláveis que garantem disponibilidade e performance.',
        'Otimize custos operacionais (OpEx) com soluções eficientes e gerenciamento proativo.',
        'Infraestrutura como pilar estratégico para inovação e crescimento sustentável.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
    'ti-manager': {
      title: 'Diagnóstico Técnico: Infraestrutura para Gestor de TI',
      content: [
        'Gerencie ambientes híbridos e multicloud com visibilidade e controle centralizados.',
        'Garanta alta disponibilidade e recuperação de desastres (DR) eficaz.',
        'Modernize sistemas legados e integre novas tecnologias sem disrupção.',
        'Monitore performance e segurança 24/7 com ferramentas avançadas.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
    'ti-specialist': {
      title: 'Diagnóstico Operacional: Infraestrutura para Especialista de TI',
      content: [
        'Automatize provisionamento, configuração e gerenciamento de infraestrutura (IaC).',
        'Implemente redes seguras e otimizadas para performance e baixa latência.',
        'Gerencie containers e orquestração (Kubernetes) com eficiência.',
        'Otimize bancos de dados e armazenamento para máxima performance.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
  },
  'seguranca-cloud': {
    'c-level': {
      title: 'Diagnóstico Estratégico: Segurança Cloud para C-Level',
      content: [
        'A expansão para a nuvem aumentou sua superfície de ataque. Seus ativos estão protegidos?',
        'A AORKIA implementa CSPM/CNAPP para visibilidade total e conformidade contínua.',
        'Reduza o risco de violações de dados e multas regulatórias (LGPD, GDPR).',
        'Segurança como habilitadora de negócios, permitindo inovação segura na nuvem.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
    'ti-manager': {
      title: 'Diagnóstico Técnico: Segurança Cloud para Gestor de TI',
      content: [
        'Obtenha visibilidade unificada da postura de segurança em ambientes multicloud.',
        'Automatize a detecção e remediação de configurações incorretas e vulnerabilidades.',
        'Garanta conformidade com padrões de mercado (CIS, NIST) e regulamentações.',
        'Integre segurança ao ciclo de vida de desenvolvimento (DevSecOps).',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
    'ti-specialist': {
      title: 'Diagnóstico Operacional: Segurança Cloud para Especialista de TI',
      content: [
        'Implemente controles de segurança granulares (IAM, redes, dados).',
        'Configure e gerencie ferramentas CSPM e CNAPP de forma eficaz.',
        'Responda a incidentes de segurança na nuvem com rapidez e precisão.',
        'Monitore atividades suspeitas e investigue ameaças em tempo real.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
  },
  'receita-b2b': {
    'c-level': {
      title: 'Diagnóstico Estratégico: Receita B2B para C-Level',
      content: [
        'Seus processos comerciais estão fragmentados e impedem o crescimento escalável?',
        'A AORKIA integra Marketing, Vendas e CS para criar uma máquina de receita previsível.',
        'Obtenha visibilidade completa do funil e tome decisões baseadas em dados.',
        'Alinhe tecnologia e processos para maximizar a eficiência e acelerar o crescimento.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
    'ti-manager': {
      title: 'Diagnóstico Técnico: Receita B2B para Gestor de TI',
      content: [
        'Integre CRM, automação de marketing e outras ferramentas do GTM stack.',
        'Garanta a qualidade e a governança dos dados de clientes e prospects.',
        'Implemente dashboards e relatórios para monitoramento de KPIs de receita.',
        'Forneça a infraestrutura tecnológica para suportar operações de receita escaláveis.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
    'ti-specialist': {
      title: 'Diagnóstico Operacional: Receita B2B para Especialista de TI',
      content: [
        'Configure e personalize plataformas de CRM e automação de marketing.',
        'Desenvolva integrações customizadas entre sistemas de receita.',
        'Gerencie a segurança e o acesso aos dados comerciais sensíveis.',
        'Automatize fluxos de trabalho para otimizar processos de vendas e marketing.',
      ],
      blueprintLink: '#',
      scheduleLink: '#formulario-cta',
    },
  },
};

export default function Solucoes() {
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showTraditionalNav, setShowTraditionalNav] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState(null);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Mensagem inicial da IA
    addAiMessage(
      'Bem-vindo à AORKIA. Sou sua assistente estratégica para diagnóstico preliminar. Vamos, juntos, identificar com precisão qual área da sua operação exige evolução imediata. Selecione abaixo a frente que mais representa o seu foco atual:',
      0
    );
  }, []);

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const addAiMessage = (text, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'ai');
      // Avança para a próxima etapa se necessário (ex: após seleção de área)
      if (step === 0 && text.includes('Qual o seu papel')) {
        setStep(1);
      }
    }, delay);
  };

  const handleAreaSelection = (area, areaText) => {
    if (step !== 0) return; // Evita cliques múltiplos ou fora de hora
    setSelectedArea(area);
    addMessage(`Meu foco atual é: ${areaText}`, 'user');
    addAiMessage(
      'Ótimo, agora me ajude a entender qual o seu papel na organização. Selecione a opção que mais representa seu perfil:',
      1000
    );
  };

  const handleProfileSelection = (profile, profileText) => {
    if (step !== 1 || !selectedArea) return; // Evita cliques múltiplos ou fora de hora
    setSelectedProfile(profile);
    addMessage(`Meu perfil é: ${profileText}`, 'user');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const result = diagnostics[selectedArea]?.[profile];
      if (result) {
        setDiagnosticResult(result);
        addMessage(
          `Entendido. Com base nas suas respostas, preparei um diagnóstico preliminar direcionado:\n\n**${result.title}**\n\n${result.content.map(item => `- ${item}`).join('\n')}`,
          'ai'
        );
        setStep(2); // Etapa de diagnóstico
      } else {
        addMessage(
          'Desculpe, não consegui gerar um diagnóstico para essa combinação. Por favor, reinicie a conversa ou explore nossa navegação tradicional.',
          'ai'
        );
        setStep(0); // Reinicia em caso de erro
      }
    }, 1500);
  };

  const handleReset = () => {
    setMessages([]);
    setStep(0);
    setSelectedArea(null);
    setSelectedProfile(null);
    setDiagnosticResult(null);
    setIsTyping(false);
    // Adiciona a mensagem inicial novamente
    addAiMessage(
      'Bem-vindo à AORKIA. Sou sua assistente estratégica para diagnóstico preliminar. Vamos, juntos, identificar com precisão qual área da sua operação exige evolução imediata. Selecione abaixo a frente que mais representa o seu foco atual:',
      500 // Delay menor no reset
    );
  };

  const toggleTraditionalNav = () => {
    setShowTraditionalNav(!showTraditionalNav);
  };

  // Opções para seleção
  const areaOptions = [
    { id: 'backup-saas', text: 'Backup SaaS Estratégico' },
    { id: 'infraestrutura', text: 'Infraestrutura Estratégica' },
    { id: 'seguranca-cloud', text: 'Segurança Cloud' },
    { id: 'receita-b2b', text: 'Receita B2B' },
  ];

  const profileOptions = [
    { id: 'c-level', text: 'Executivo C-Level' },
    { id: 'ti-manager', text: 'Gestor de TI' },
    { id: 'ti-specialist', text: 'Especialista de TI' },
  ];

  return (
    <>
      <Head>
        <title>Soluções AORKIA | Interface Inteligente e Navegação Tradicional</title>
        <meta name="description" content="Explore as soluções AORKIA através da nossa Interface Inteligente ou navegação tradicional. Backup SaaS, Infraestrutura, Segurança Cloud e Receita B2B." />
        {/* Outras meta tags relevantes podem ser adicionadas aqui */}
      </Head>

      {/* Header (Assumindo que é global via _app.js) */}
      {/* <Header /> */}

      <main>
        {/* Seção da Interface Inteligente */}
        <section className="relative min-h-screen flex flex-col md:flex-row items-stretch tera-style overflow-hidden">
          {/* Vídeo de Fundo */}
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Container Principal */}
          <div className={`relative z-20 flex flex-col md:flex-row w-full transition-all duration-500 ease-in-out ${showTraditionalNav ? 'md:h-auto' : 'md:h-screen'}`}>
            
            {/* Coluna do Chat (Interface Inteligente) */}
            <div className={`w-full ${showTraditionalNav ? 'md:w-[30%]' : 'md:w-[70%]'} p-4 md:p-8 flex flex-col tera-chat transition-all duration-500 ease-in-out`}>
              <div className="flex-grow overflow-y-auto pr-2 space-y-4 mb-4" style={{ maxHeight: 'calc(100vh - 150px)' }}>
                {messages.map((msg, index) => (
                  <div key={index} className={`chat-message ${msg.sender === 'user' ? 'chat-message-user' : 'chat-message-ai'}`}>
                    {msg.text.split('\n').map((line, i) => (
                      <p key={i} className={line.startsWith('**') ? 'font-bold' : ''}>{line.replace(/\*\*/g, '')}</p>
                    ))}
                  </div>
                ))}
                {isTyping && (
                  <div className="typing-indicator">
                    <span>Digitando</span>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Opções de Resposta */}
              <div className="mt-auto pt-4 border-t border-gray-700/50">
                {step === 0 && (
                  <div className="flex flex-wrap gap-2">
                    {areaOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleAreaSelection(option.id, option.text)}
                        className="chat-button bg-primary hover:bg-primary/90 text-white"
                      >
                        ➤ {option.text}
                      </button>
                    ))}
                  </div>
                )}
                {step === 1 && (
                  <div className="flex flex-wrap gap-2">
                    {profileOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleProfileSelection(option.id, option.text)}
                        className="chat-button bg-primary hover:bg-primary/90 text-white"
                      >
                        ➤ {option.text}
                      </button>
                    ))}
                  </div>
                )}
                {/* Botão Reset sempre visível após o início */}
                {step >= 0 && (
                   <div className="relative mt-4">
                     {/* Placeholder para input futuro, se necessário */}
                     {/* <input type="text" className="chat-input" placeholder="Digite sua mensagem..." /> */}
                     <button onClick={handleReset} className="reset-button" title="Reiniciar conversa">
                       <i className="ri-refresh-line"></i>
                     </button>
                     {/* <button id="sendButton" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-primary/90">
                       <i className="ri-send-plane-fill"></i>
                     </button> */}
                   </div>
                )}
              </div>
            </div>

            {/* Coluna de Conteúdo Recomendado / Navegação Tradicional */}
            <div className={`w-full ${showTraditionalNav ? 'md:w-[70%]' : 'md:w-[30%]'} p-4 md:p-8 overflow-y-auto tera-content transition-all duration-500 ease-in-out`} style={{ maxHeight: '100vh' }}>
              {step === 2 && diagnosticResult && !showTraditionalNav && (
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4 tera-tag">Diagnóstico Preliminar</h3>
                  <h4 className="text-xl font-semibold mb-3 tera-title">{diagnosticResult.title}</h4>
                  <div className="space-y-2 mb-6 tera-subtitle">
                    {diagnosticResult.content.map((item, index) => (
                      <p key={index}><i className="ri-check-double-line text-primary mr-2"></i>{item}</p>
                    ))}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Próximos Passos Recomendados:</h4>
                  <div className="flex flex-col gap-3">
                    <Link href={diagnosticResult.blueprintLink} className="tera-button flex items-center justify-center gap-2">
                      <i className="ri-download-cloud-2-line"></i> Acesse o Blueprint Técnico Exclusivo
                    </Link>
                    <Link href={diagnosticResult.scheduleLink} className="tera-button flex items-center justify-center gap-2">
                      <i className="ri-calendar-event-line"></i> Agende uma conversa estratégica
                    </Link>
                  </div>
                   {/* Card azul convidando para navegação tradicional */}
                   <div className="text-card-blue-border mt-8">
                     <h4 className="font-bold mb-2 text-lg">Explore Mais Detalhes</h4>
                     <p className="text-sm mb-3">Prefere uma visão completa? Acesse nossa navegação tradicional para explorar todas as soluções em profundidade.</p>
                     <button onClick={toggleTraditionalNav} className="tera-button text-sm py-2 px-4">
                       Ver Navegação Tradicional
                     </button>
                   </div>
                </div>
              )}

              {/* Conteúdo da Navegação Tradicional (inicialmente oculto ou mostrado se showTraditionalNav for true) */}
              <div className={`traditional-section ${showTraditionalNav ? 'visible' : ''} text-white`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossas Soluções Estratégicas</h2>
                
                {/* Bloco Backup SaaS */}
                <div id="backup-saas" className="product-block mb-16">
                  <h3 className="product-title-disruptive">Backup SaaS Estratégico</h3>
                  <p className="product-intro">Garanta a continuidade do seu negócio protegendo dados críticos em Microsoft 365, Google Workspace, Salesforce e mais, contra exclusão acidental, ransomware e falhas.</p>
                  <h4 className="use-case-title">Casos de Uso Essenciais:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="use-case-item">
                      <p><strong>Recuperação Rápida:</strong> Restaure e-mails, arquivos ou contas inteiras em minutos, não dias.</p>
                    </div>
                    <div className="use-case-item">
                      <p><strong>Conformidade Garantida:</strong> Atenda requisitos de retenção e LGPD/GDPR com armazenamento seguro e imutável.</p>
                    </div>
                    <div className="use-case-item">
                      <p><strong>Proteção Contra Ransomware:</strong> Isole seus backups de ataques e garanta a recuperação sem pagar resgate.</p>
                    </div>
                  </div>
                  <div className="highlight-section">
                    <h4 className="highlight-title">Destaque: Keepit - Líder Global em Backup SaaS</h4>
                    <p className="highlight-text mb-4">Parceria AORKIA + Keepit: A plataforma nº 1 em proteção de dados SaaS, confiada por mais de 15.000 empresas em 74 países. Tecnologia dinamarquesa com data centers independentes e segurança de nível militar.</p>
                    <p className="highlight-text font-semibold mb-2">Plataformas Suportadas:</p>
                    <div className="flex flex-wrap justify-center items-center gap-4 saas-logos">
                      {/* Adicionar logos como Image components */}
                      <Image src="/logo-m365.png" alt="Microsoft 365" width={100} height={30} className="h-8 w-auto" loading="lazy" />
                      <Image src="/logo-google-workspace.png" alt="Google Workspace" width={120} height={30} className="h-8 w-auto" loading="lazy" />
                      <Image src="/logo-salesforce.png" alt="Salesforce" width={80} height={30} className="h-8 w-auto" loading="lazy" />
                      <Image src="/logo-dynamics-365.png" alt="Dynamics 365" width={100} height={30} className="h-8 w-auto" loading="lazy" />
                      {/* Adicionar mais logos conforme necessário */}
                    </div>
                  </div>
                  <Link href="#formulario-cta" className="product-cta-button">
                    Solicitar Diagnóstico de Backup SaaS <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>

                {/* Bloco Infraestrutura Estratégica */}
                <div id="infraestrutura" className="product-block mb-16">
                   <h3 className="product-title-disruptive">Infraestrutura Estratégica</h3>
                   <p className="product-intro">Transforme sua infraestrutura de TI de um centro de custo para um motor de inovação e eficiência, com soluções resilientes, escaláveis e seguras.</p>
                   <h4 className="use-case-title">Casos de Uso Essenciais:</h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                     <div className="use-case-item">
                       <p><strong>Modernização Cloud:</strong> Migre e otimize cargas de trabalho em ambientes multicloud (AWS, Azure, GCP) com segurança.</p>
                     </div>
                     <div className="use-case-item">
                       <p><strong>Alta Disponibilidade:</strong> Desenhe arquiteturas que garantam operação contínua dos seus sistemas críticos.</p>
                     </div>
                     <div className="use-case-item">
                       <p><strong>Otimização de Custos:</strong> Reduza gastos com infraestrutura através de dimensionamento correto e automação.</p>
                     </div>
                   </div>
                   <div className="highlight-section">
                     <h4 className="highlight-title">Destaque: Abordagem Híbrida Inteligente</h4>
                     <p className="highlight-text">Combinamos o melhor dos mundos on-premise e cloud, criando soluções híbridas personalizadas que maximizam performance, segurança e controle de custos. Foco em automação (IaC), monitoramento proativo e gestão simplificada.</p>
                   </div>
                   <Link href="#formulario-cta" className="product-cta-button">
                     Solicitar Diagnóstico de Infraestrutura <i className="ri-arrow-right-line"></i>
                   </Link>
                 </div>

                {/* Bloco Segurança Cloud */}
                 <div id="seguranca-cloud" className="product-block mb-16">
                   <h3 className="product-title-disruptive">Segurança Cloud</h3>
                   <p className="product-intro">Navegue pela complexidade da segurança em nuvem com confiança. Implementamos CSPM e CNAPP para visibilidade total, conformidade e proteção proativa.</p>
                   <h4 className="use-case-title">Casos de Uso Essenciais:</h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                     <div className="use-case-item">
                       <p><strong>Gestão de Postura (CSPM):</strong> Identifique e corrija configurações incorretas e riscos em tempo real.</p>
                     </div>
                     <div className="use-case-item">
                       <p><strong>Proteção de Aplicações (CNAPP):</strong> Garanta segurança desde o código até a execução em produção.</p>
                     </div>
                     <div className="use-case-item">
                       <p><strong>Conformidade Contínua:</strong> Automatize auditorias e garanta aderência a LGPD, GDPR, DORA, etc.</p>
                     </div>
                   </div>
                   <div className="highlight-section">
                     <h4 className="highlight-title">Destaque: Segurança Integrada ao Negócio</h4>
                     <p className="highlight-text">Nossa abordagem vai além da tecnologia. Integramos segurança aos seus processos de negócio e desenvolvimento (DevSecOps), transformando-a em um habilitador de inovação e confiança digital.</p>
                   </div>
                   <Link href="#formulario-cta" className="product-cta-button">
                     Solicitar Diagnóstico de Segurança Cloud <i className="ri-arrow-right-line"></i>
                   </Link>
                 </div>

                {/* Bloco Receita B2B */}
                 <div id="receita-b2b" className="product-block mb-16">
                   <h3 className="product-title-disruptive">Receita B2B</h3>
                   <p className="product-intro">Unifique suas operações de Marketing, Vendas e Customer Success. Crie uma máquina de receita previsível e escalável com processos otimizados e tecnologia integrada.</p>
                   <h4 className="use-case-title">Casos de Uso Essenciais:</h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                     <div className="use-case-item">
                       <p><strong>Automação Inteligente:</strong> Otimize funis de vendas e marketing com automação e lead scoring.</p>
                     </div>
                     <div className="use-case-item">
                       <p><strong>Visibilidade 360º:</strong> Integre dados de CRM e outras fontes para uma visão completa do cliente.</p>
                     </div>
                     <div className="use-case-item">
                       <p><strong>Performance Digital:</strong> Otimize sua presença online para gerar leads qualificados e conversões.</p>
                     </div>
                   </div>
                   <div className="highlight-section">
                     <h4 className="highlight-title">Destaque: Engenharia de Receita</h4>
                     <p className="highlight-text">Aplicamos princípios de engenharia para mapear, otimizar e automatizar seus processos de receita. Foco em dados, integração de sistemas (CRM, Marketing Automation) e alinhamento estratégico para crescimento sustentável.</p>
                   </div>
                   <Link href="#formulario-cta" className="product-cta-button">
                     Solicitar Diagnóstico de Receita B2B <i className="ri-arrow-right-line"></i>
                   </Link>
                 </div>

                {/* Seção CTA com Formulário (Reutilizada) */}
                <section id="formulario-cta" className="cta-form-section">
                  <div className="container mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-10">Descubra como nossas soluções podem impulsionar sua empresa.</p>
                    
                    <form className="space-y-4 max-w-lg mx-auto text-left">
                      <div>
                        <label htmlFor="name-solucoes" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                        <input type="text" id="name-solucoes" name="name" className="form-input" required />
                      </div>
                      <div>
                        <label htmlFor="cargo-solucoes" className="block text-sm font-medium text-gray-300 mb-1">Cargo</label>
                        <input type="text" id="cargo-solucoes" name="cargo" className="form-input" required />
                      </div>
                      <div>
                        <label htmlFor="email-solucoes" className="block text-sm font-medium text-gray-300 mb-1">Email Corporativo</label>
                        <input type="email" id="email-solucoes" name="email" className="form-input" required />
                      </div>
                      <div>
                        <label htmlFor="phone-solucoes" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp / Telefone</label>
                        <input type="tel" id="phone-solucoes" name="phone" className="form-input" required />
                      </div>
                      <div>
                        <label htmlFor="interest-solucoes" className="block text-sm font-medium text-gray-300 mb-1">Assunto de Interesse</label>
                        <select id="interest-solucoes" name="interest" className="form-select" required>
                          <option value="" disabled selected>Selecione uma opção</option>
                          <option value="backup">Backup SaaS Estratégico</option>
                          <option value="infra">Infraestrutura Estratégica</option>
                          <option value="security">Segurança Cloud</option>
                          <option value="revenue">Receita B2B</option>
                        </select>
                      </div>
                      <div className="pt-2">
                        <button type="submit" className="form-button">Solicitar Contato</button>
                      </div>
                    </form>
                    <p className="text-sm text-gray-400 mt-8">Seus dados estão seguros conosco. Consulte nossa Política de Privacidade.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Botão Flutuante para Navegação Tradicional */}
          <button 
            onClick={toggleTraditionalNav} 
            className="traditional-nav-button"
            title={showTraditionalNav ? "Voltar para Interface Inteligente" : "Explorar Navegação Tradicional"}
          >
            {showTraditionalNav ? <i className="ri-robot-line"></i> : <i className="ri-list-unordered"></i>}
            <span>{showTraditionalNav ? "Interface Inteligente" : "Navegação Tradicional"}</span>
          </button>

        </section>
      </main>

      {/* Footer (Assumindo que é global via _app.js) */}
      {/* <Footer /> */}
    </>
  );
}

