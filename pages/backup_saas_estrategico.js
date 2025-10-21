import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const faqData = [
  {
    question: "O que é Keepit?",
    answer: "Keepit é uma plataforma de backup e recuperação como serviço (SaaS). Ele protege dados de aplicações em nuvem como Microsoft 365 e Google Workspace, armazenando cópias seguras em uma nuvem independente para garantir a restauração em caso de perda de dados."
  },
  {
    question: "Por que a proteção nativa do Microsoft 365 ou Google Workspace não é suficiente?",
    answer: "As ferramentas nativas têm retenção de dados limitada (geralmente 30-90 dias) e não oferecem proteção real contra ransomware ou exclusões acidentais em massa. A responsabilidade final pela segurança dos dados é sempre do cliente, como afirmado pelos próprios fornecedores."
  },
  {
    question: "Como o Keepit protege contra ataques de ransomware?",
    answer: "A Keepit cria backups 100% imutáveis em uma nuvem isolada com tecnologia Air Gap. Isso significa que, mesmo que um ransomware atinja sua rede, os backups permanecem intactos e inacessíveis para os atacantes, garantindo uma restauração segura e completa."
  },
  {
    question: "Por que devo ativar o Keepit com a AORKIA e não diretamente?",
    answer: "A AORKIA transforma a ferramenta na solução completa. Nós adicionamos a camada de consultoria estratégica, implementação otimizada para o seu negócio e suporte especializado contínuo, garantindo que a tecnologia gere o máximo de valor em governança e continuidade."
  },
  {
    question: "Como o Keepit me ajuda a preparar para uma auditoria de dados?",
    answer: "A plataforma simplifica a preparação para auditorias, permitindo localizar dados rapidamente com filtros avançados e gerando trilhas de auditoria detalhadas de todas as atividades. Isso facilita a comprovação da integridade e do controle de acesso aos dados para auditores internos e externos."
  },
  {
    question: "A plataforma Keepit é certificada pela ISO 27001?",
    answer: "Sim. A Keepit possui a certificação ISO/IEC 27001, o padrão internacional mais reconhecido para Sistemas de Gestão da Segurança da Informação. Isso atesta que a plataforma segue as mais rigorosas práticas de segurança para proteger a confidencialidade, integridade e disponibilidade dos seus dados."
  },
  {
    question: "O que significa que o backup é \"imutável\"?",
    answer: "\"Imutável\" significa que, uma vez que uma cópia de segurança é feita, ela não pode ser alterada ou apagada por ninguém – nem por um usuário, nem por um administrador, nem por software malicioso – durante todo o seu ciclo de vida. Cada backup é uma \"fotografia\" protegida e inviolável."
  },
  {
    question: "A AORKIA garante que a implementação siga as melhores práticas de mercado?",
    answer: "Sim. Nosso processo estruturado inclui o mapeamento completo do seu ambiente, a avaliação de riscos e a configuração personalizada da Keepit segundo frameworks como NIST. Garantimos que a solução seja ativada de forma otimizada para suas necessidades de segurança e conformidade."
  },
  {
    question: "O que é a certificação ISAE 3402 e por que ela é importante para o backup?",
    answer: "ISAE 3402 é um padrão global que atesta a qualidade dos controles internos de uma organização de serviços. Para o backup, a certificação ISAE 3402 da Keepit garante que os processos de segurança, disponibilidade e confidencialidade dos dados são continuamente auditados e validados por terceiros independentes, oferecendo uma camada extra de confiança."
  },
  {
    question: "É possível recuperar apenas um e-mail ou arquivo específico?",
    answer: "Sim. A Keepit oferece recuperação granular, permitindo que você encontre e restaure exatamente o que precisa – seja um único e-mail, um arquivo, uma pasta ou uma conta inteira – de forma rápida e com poucos cliques."
  },
  {
    question: "Como o backup na Keepit se alinha aos controles de segurança da ISO 27001?",
    answer: "A solução se alinha diretamente a vários controles da ISO 27001, como A.12.3 (Backup), A.17.1 (Disponibilidade) e A.18.1 (Conformidade). Ao oferecer backups imutáveis, isolados e com recuperação testável, a Keepit ajuda sua empresa a atender e comprovar a implementação desses controles essenciais."
  },
  {
    question: "Como a AORKIA e Keepit ajudam a cumprir as exigências da LGPD e DORA?",
    answer: "Nós garantimos que seus backups fiquem em datacenters no Brasil (soberania de dados). Configuramos políticas de retenção para o tempo exigido por lei e facilitamos a localização e exclusão de dados para atender aos direitos dos titulares, garantindo conformidade com a LGPD. Para a DORA, a solução oferece a resiliência cibernética e a capacidade de recuperação de desastres que a regulação exige para o setor financeiro."
  },
  {
    question: "O Keepit oferece trilhas de auditoria detalhadas de todas as ações?",
    answer: "Sim. Todas as atividades na plataforma, como acessos de administradores, buscas e restaurações de dados, são registradas em logs de auditoria imutáveis. Isso fornece visibilidade completa sobre quem fez o quê e quando, sendo fundamental para investigações e auditorias."
  },
  {
    question: "Quais serviços e aplicações a Keepit protege?",
    answer: "A cobertura é ampla, incluindo Microsoft 365 (Outlook, OneDrive, SharePoint, Teams), Google Workspace, Salesforce, Microsoft Entra ID, Dynamics 365, Microsoft Power Platform e Zendesk, com mais serviços sendo adicionados continuamente."
  },
  {
    question: "Como posso usar o relatório ISAE 3402 da Keepit na minha própria auditoria?",
    answer: "Você pode apresentar o relatório ISAE 3402 da Keepit aos seus auditores como prova de que seu fornecedor de backup possui controles de segurança e operacionais robustos e validados. Isso pode reduzir o escopo e o custo da sua própria auditoria, pois demonstra que você utiliza um serviço que já é auditado."
  },
  {
    question: "Qual o ROI (Retorno sobre o Investimento) da solução ativada pela AORKIA?",
    answer: "O ROI é comprovado. Um estudo da Forrester indicou um ROI de 163% em 3 anos para a Keepit. A solução mitiga o risco de perdas financeiras com multas, ransomware e paralisações operacionais, além de gerar economia com a otimização de licenças de software de ex-funcionários."
  },
  {
    question: "É possível testar o plano de recuperação de desastres (Disaster Recovery)?",
    answer: "Sim. Ter uma cópia dos dados em um local separado e sempre acessível é vital para a recuperação de desastres. A plataforma permite que você realize testes de restauração a qualquer momento, garantindo que seus planos de recuperação sejam eficazes e que sua equipe esteja preparada para uma emergência real."
  },
  {
    question: "O que acontece com os dados de um funcionário que saiu da empresa?",
    answer: "Com a Keepit, você pode reter os dados de ex-funcionários pelo tempo que for necessário, sem precisar manter uma licença ativa do Microsoft 365 ou Google Workspace para eles. Isso gera uma economia direta e significativa em licenças de software."
  },
  {
    question: "Meus dados de backup ficam realmente armazenados no Brasil?",
    answer: "Sim. Com a ativação da AORKIA, garantimos contratualmente que seus dados de backup sejam armazenados em datacenters localizados em território brasileiro, atendendo plenamente aos requisitos de soberania de dados da LGPD."
  },
  {
    question: "Como funciona o suporte técnico se eu tiver um problema ou dúvida?",
    answer: "A AORKIA oferece suporte estratégico contínuo em português. Nossa equipe de especialistas está disponível para ajudar com dúvidas, orientar em processos de recuperação e garantir que você extraia o máximo valor da solução."
  },
  {
    question: "Como posso iniciar uma conversa estratégica com a AORKIA?",
    answer: "Você pode entrar em contato através do nosso site. Um de nossos especialistas irá agendar uma conversa para entender seus desafios de conformidade e continuidade, e desenhar a melhor solução de resiliência para o seu negócio."
  }
];

export default function BackupSaaSEstrategico() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionBackgrounds, setSectionBackgrounds] = useState({});
  const [openFaqItems, setOpenFaqItems] = useState({});
  const [showAllFaq, setShowAllFaq] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Detectar quais seções devem ter background image
      const sections = [
        'risco-real',
        'responsabilidade', 
        'resiliencia',
        'pilares',
        'cobertura',
        'desafios',
        'confianca',
        'depoimentos',
        'certificacoes',
        'faq'
      ];

      const newBackgrounds = {};
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Ativar background quando a seção está visível
          newBackgrounds[sectionId] = rect.top < window.innerHeight && rect.bottom > 0;
        }
      });

      setSectionBackgrounds(newBackgrounds);

      // Detectar seção ativa
      const allSections = document.querySelectorAll('[data-section]');
      allSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getSectionBackground = (sectionId) => {
    return sectionBackgrounds[sectionId] ? 'opacity-20' : 'opacity-0';
  };

  const toggleFaqItem = (index) => {
    setOpenFaqItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleShowAllFaq = () => {
    setShowAllFaq(!showAllFaq);
  };

  // Determinar quais FAQs mostrar
  const faqsToShow = showAllFaq ? faqData : faqData.slice(0, 7);

  return (
    <>
      <Head>
        <title>Backup SaaS Estratégico - Keepit | AORKIA</title>
        <meta name="description" content="Proteção Imutável. Recuperação Rápida. Conformidade Garantida. A AORKIA ativa a Keepit para backup SaaS estratégico com proteção real contra ransomware." />
        <meta name="keywords" content="backup saas, keepit, proteção imutável, recuperação rápida, conformidade, LGPD, GDPR, ransomware, Microsoft 365, Google Workspace, Salesforce" />
        <link rel="canonical" href="https://aorkia.com/backup_saas_estrategico" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="min-h-screen bg-black text-white relative">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
            src="/video/keepit_aorkia.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
          
          <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-primary">
              Backup SaaS Estratégico
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-center">
              Proteção Imutável. Recuperação Rápida. Conformidade Garantida.
            </p>
            <p className="text-lg md:text-xl mb-10 text-center max-w-4xl mx-auto text-gray-300">
              Seus dados SaaS estão vulneráveis a ransomware, exclusões acidentais e falhas de sistema — e você não tem controle real sobre sua recuperação? A AORKIA ativa a Keepit para criar uma camada de proteção imutável, com backup independente e recuperação granular que garante a continuidade do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="#risco-real" className="bg-primary hover:bg-primary/90 text-black font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                Descubra os Pontos Cegos
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition duration-300 text-lg">
                Ativar Proteção Agora
              </Link>
            </div>
          </div>
        </section>
        
        {/* O Risco Real por trás da Proteção Nativa (REIMAGINADO) */}
        <section id="risco-real" data-section="risco-real" className="py-20 md:py-28 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url(/image/backup_vertical.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Ilusão de Segurança que Custa Caro</h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-12">
                        Seu provedor SaaS garante a infraestrutura. Mas quem garante <strong className="text-primary">seus dados</strong> dentro dela? A resposta pode surpreender — e o custo da descoberta tardia é paralisante.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                    {/* Coluna do Risco */}
                    <div className="bg-gray-900/50 border border-red-500/30 rounded-2xl p-8 flex flex-col shadow-lg shadow-red-500/10">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">A Realidade da Proteção Nativa</h3>
                        </div>
                        <div className="space-y-4 text-gray-300 flex-grow">
                            <p><strong>Retenção Mínima:</strong> A "lixeira" do seu SaaS não é um cofre. É uma sala de espera de 30 dias para a perda permanente.</p>
                            <p><strong>Vulnerabilidade a Ransomware:</strong> Um ataque que criptografa seus dados ativos, sincroniza a destruição para a nuvem — e para seus "backups" nativos.</p>
                            <p><strong>Recuperação Lenta e Incerta:</strong> Restaurar um ambiente inteiro? Prepare-se para um processo manual, demorado e sem garantia de integridade total.</p>
                            <p className="mt-auto pt-4 font-semibold text-red-400">O contrato é claro: a Microsoft e o Google garantem o serviço, não a integridade dos seus dados. A responsabilidade final é sua.</p>
                        </div>
                    </div>

                    {/* Coluna da Solução */}
                    <div className="bg-gray-900/50 border border-primary/30 rounded-2xl p-8 flex flex-col shadow-lg shadow-primary/10">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">O Controle do Backup Estratégico</h3>
                        </div>
                        <div className="space-y-4 text-gray-300 flex-grow">
                            <p><strong>Cofre Imutável (Air-Gapped):</strong> Seus backups vivem em uma fortaleza digital, isolada e imune a qualquer ataque na sua rede principal.</p>
                            <p><strong>Recuperação Cirúrgica:</strong> Restaure um único e-mail ou uma estrutura de pastas inteira em minutos, com a certeza de que os dados estão limpos e íntegros.</p>
                            <p><strong>Conformidade Auditável:</strong> Soberania de dados no Brasil e trilhas de auditoria completas que transformam uma auditoria da LGPD em um processo simples e rápido.</p>
                            <p className="mt-auto pt-4 font-semibold text-primary">Nós transferimos a responsabilidade da sorte para a matemática. Com a AORKIA, a continuidade do seu negócio é uma certeza, não uma aposta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* A Responsabilidade é Sua. A Microsoft Confirma. */}
        <section id="responsabilidade" data-section="responsabilidade" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('responsabilidade')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden border border-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-12 -translate-x-12 blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <svg className="w-16 h-16 mx-auto text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  A Responsabilidade é Sua. A Microsoft Confirma.
                </h3>
                <blockquote className="text-lg md:text-xl text-gray-300/90 italic leading-relaxed mb-6">
                  "Você é responsável por implementar procedimentos de backup e recuperação suficientes para atender às suas necessidades de disponibilidade e continuidade."
                </blockquote>
                <p className="text-sm text-gray-400/70 font-medium">
                  Modelo de Responsabilidade Compartilhada - Microsoft Azure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Não é só um Backup. É a Resiliência que salva o seu negócio. (REIMAGINADO) */}
        <section id="resiliencia" data-section="resiliencia" className="py-20 md:py-28 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url(/image/backup_vertical.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Backup é commodity. Resiliência é estratégia.</h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-12">
                        Perder dados não é uma falha de TI, é uma falha de negócio. Diante de multas da LGPD, ataques de ransomware e paralisações operacionais, a pergunta não é *se* você precisa de um plano B, mas *quão rápido* ele te coloca de volta no jogo.
                    </p>
                </div>
                
                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-gray-900/20 rounded-3xl blur-xl"></div>
                    
                    <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-3 space-y-6">
                            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Simplesmente "salvar uma cópia" é uma tática do passado. Na nuvem, onde ameaças se movem na velocidade da luz, a única defesa eficaz é uma <strong className="text-primary">estratégia de resiliência ativa</strong>.
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-primary to-green-400 rounded-xl p-6 shadow-lg shadow-primary/20">
                                <p className="text-xl font-bold text-black text-center">
                                    Sua empresa não precisa de mais uma ferramenta. Precisa de uma apólice de seguro para sua continuidade.
                                </p>
                            </div>
                            
                            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    É isso que a AORKIA entrega: a ativação da Keepit não como um produto, mas como a <strong className="text-primary">espinha dorsal da sua governança e plano de recuperação</strong>. Garantimos que, quando o pior acontecer, sua operação não pare.
                                </p>
                            </div>
                        </div>
                        
                        <div className="md:col-span-2 flex items-center justify-center">
                            <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 shadow-2xl text-white text-center border border-primary/30 w-full">
                                <div className="text-6xl mb-4 text-primary animate-pulse-fast">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="m12 7.1 2.9 2.9-1.4 1.4-1.5-1.5-1.5 1.5-1.4-1.4zM12 12l2.9 2.9-1.4 1.4-1.5-1.5-1.5 1.5-1.4-1.4z"/></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Continuidade Garantida</h3>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    Recuperação instantânea. Conformidade contínua. Operação ininterrupta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Os Pilares da Proteção Real */}
        <section id="pilares" data-section="pilares" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('pilares')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
              Os Pilares da Proteção Real
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 1º Pilar */}
              <div className="p-6 rounded-lg border-2 border-primary/30 bg-black/20 text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="ri-lock-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Backup Imutável com Air Gap</h3>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  Seus dados são protegidos em uma nuvem completamente isolada, impossível de ser alterada ou corrompida por ransomware ou falhas humanas.
                </p>
                
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm font-semibold text-primary mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-gray-300 mb-1">
                    Zero risco de perda total de dados.
                  </p>
                  <p className="text-sm font-medium text-gray-300">
                    Recuperação garantida mesmo em ataques severos.
                  </p>
                </div>
              </div>

              {/* 2º Pilar */}
              <div className="p-6 rounded-lg border-2 border-primary/30 bg-black/20 text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="ri-search-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Recuperação Granular Inteligente</h3>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  Encontre e restaure exatamente o que precisa — desde um único e-mail até contas completas — em minutos, não horas.
                </p>
                
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm font-semibold text-primary mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-gray-300 mb-1">
                    Tempo de inatividade mínimo.
                  </p>
                  <p className="text-sm font-medium text-gray-300">
                    Produtividade mantida durante incidentes.
                  </p>
                </div>
              </div>

              {/* 3º Pilar */}
              <div className="p-6 rounded-lg border-2 border-primary/30 bg-black/20 text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="ri-government-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Conformidade e Auditoria Automática</h3>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  Trilhas de auditoria completas, dados no Brasil e certificações internacionais garantem conformidade total com LGPD e regulamentações.
                </p>
                
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm font-semibold text-primary mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-gray-300 mb-1">
                    Zero multas por não conformidade.
                  </p>
                  <p className="text-sm font-medium text-gray-300">
                    Auditorias simplificadas e documentadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cobertura Completa do seu Ecossistema SaaS */}
        <section id="cobertura" data-section="cobertura" className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('cobertura')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
              Cobertura Completa do seu Ecossistema SaaS
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto items-center">
              <div className="flex flex-col items-center">
                <Image src="/icon/microsoft_365.png" alt="Microsoft 365" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-300 text-center">Microsoft 365</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/gcp.png" alt="Google Workspace" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-300 text-center">Google Workspace</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/salesforce.png" alt="Salesforce" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-300 text-center">Salesforce</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/zendesk.png" alt="Zendesk" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-300 text-center">Zendesk</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/dynamics_365.png" alt="Dynamics 365" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-300 text-center">Dynamics 365</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/azure_devops.png" alt="Azure DevOps" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-300 text-center">Azure DevOps</span>
              </div>
            </div>
          </div>
        </section>

        {/* Uma Solução. Respostas para Cada Desafio Estratégico. */}
        <section id="desafios" data-section="desafios" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('desafios')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
              Uma Solução. Respostas para Cada Desafio Estratégico.
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Desafio 1 */}
              <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <i className="ri-error-warning-line text-2xl text-red-500"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Ransomware atingiu nossa infraestrutura SaaS</h3>
                    <p className="text-gray-400 mb-4">Como recuperar rapidamente sem pagar resgate?</p>
                    <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-gray-300 font-medium">
                        <strong>Solução Keepit:</strong> Backup imutável com Air Gap garante que seus dados estejam protegidos em nuvem independente. Recuperação completa em horas, não semanas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desafio 2 */}
              <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <i className="ri-user-unfollow-line text-2xl text-orange-500"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Funcionário deletou dados críticos por engano</h3>
                    <p className="text-gray-400 mb-4">Como recuperar informações específicas sem afetar o restante?</p>
                    <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-gray-300 font-medium">
                        <strong>Solução Keepit:</strong> Restauração granular permite recuperar desde um único e-mail até contas completas em minutos, com busca inteligente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desafio 3 */}
              <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <i className="ri-shield-cross-line text-2xl text-purple-500"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Auditoria LGPD está chegando</h3>
                    <p className="text-gray-400 mb-4">Como comprovar conformidade e controle de dados?</p>
                    <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-gray-300 font-medium">
                        <strong>Solução Keepit:</strong> Dados no Brasil, trilhas de auditoria completas e certificações ISO 27001, ISAE 3402 garantem conformidade total.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Confiança Validada pelo Mercado Global */}
        <section id="confianca" data-section="confianca" className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('confianca')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
              Confiança Validada pelo Mercado Global
            </h2>
            
            {/* Clientes Globais */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center text-gray-400 mb-8">Clientes Globais</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
                <div className="flex flex-col items-center">
                  <Image src="/icon/porsche.png" alt="Porsche" width={80} height={60} className="mb-2 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/oxford_university.png" alt="Oxford University" width={80} height={60} className="mb-2 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/alpla.png" alt="Alpla" width={80} height={60} className="mb-2 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/hdi.png" alt="HDI" width={80} height={60} className="mb-2 hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Clientes Nacionais */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center text-gray-400 mb-8">Clientes Nacionais</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
                <div className="flex flex-col items-center">
                  <Image src="/icon/arezzo.png" alt="Arezzo" width={80} height={60} className="mb-2 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/banco_bv.png" alt="Banco BV" width={80} height={60} className="mb-2 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/db_diagnosticos.png" alt="DB Diagnósticos" width={80} height={60} className="mb-2 hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/itausa.png" alt="ITAUSA" width={80} height={60} className="mb-2 hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-400">
                Mais de <strong className="text-primary">15.000 empresas</strong> em <strong className="text-primary">74 países</strong> confiam na Keepit
              </p>
            </div>
          </div>
        </section>

        {/* O que os Clientes que ativaram Keepit dizem? */}
        <section id="depoimentos" data-section="depoimentos" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('depoimentos')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
              O que os Clientes que ativaram Keepit dizem?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Depoimento 1 - ALPLA */}
              <div className="p-6 rounded-lg border-2 border-primary/30 bg-black/20 text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-300 mb-6 italic text-center">
                  "A Keepit nos permite escalar nosso negócio facilmente, adicionando novos usuários do Microsoft 365 sem custos ocultos."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-white">Stefan Toefferl</p>
                  <p className="text-sm text-gray-400">Engenheiro Sênior de Data Center, ALPLA</p>
                </div>
              </div>

              {/* Depoimento 2 - Porsche */}
              <div className="p-6 rounded-lg border-2 border-primary/30 bg-black/20 text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-300 mb-6 italic text-center">
                  "Estávamos procurando uma solução SaaS e não queríamos fazer o backup de todos os dados localmente (on-premise). O backup em nuvem da Keepit, simples e fácil de usar, entregou o que estávamos procurando."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-white">Michael Bojko</p>
                  <p className="text-sm text-gray-400">Engenheiro de Sistemas na Porsche Informatik</p>
                </div>
              </div>

              {/* Depoimento 3 - HDI */}
              <div className="p-6 rounded-lg border-2 border-primary/30 bg-black/20 text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-300 mb-6 italic text-center">
                  "Temos as mais altas necessidades de proteção de dados, pois lidamos com dados ativos, dados pessoais para seguros de vida e seguros privados. Temos um intervalo de tempo muito curto para 'voltar à ativa' em caso de um desastre."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-white">Philipp Poppe</p>
                  <p className="text-sm text-gray-400">HDI Cloud, Gerente de Produto de Serviços Essenciais</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificações e Recursos */}
        <section id="certificacoes" data-section="certificacoes" className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('certificacoes')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden border border-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-12 -translate-x-12 blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Certificações e Recursos
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <Image src="/icon/iso_27001.png" alt="ISO 27001" width={60} height={60} className="mb-2" />
                    <span className="text-white text-sm font-medium">ISO 27001</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image src="/icon/isae_3402.png" alt="ISAE 3402" width={60} height={60} className="mb-2" />
                    <span className="text-white text-sm font-medium">ISAE 3402</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <i className="ri-shield-check-line text-4xl text-white mb-2"></i>
                    <span className="text-white text-sm font-medium">GDPR</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <i className="ri-government-line text-4xl text-white mb-2"></i>
                    <span className="text-white text-sm font-medium">LGPD</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300/90 leading-relaxed">
                  Máxima segurança e conformidade com as principais certificações internacionais e regulamentações brasileiras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O que o Mercado Diz: Análise do Gartner Peer Insights */}
        <section id="gartner" data-section="gartner" className="py-16 md:py-24 bg-gray-900 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
              O que o Mercado Diz: Análise do Gartner Peer Insights
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                <div className="text-center mb-8">
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex text-yellow-400 text-3xl">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                    <span className="ml-3 text-2xl font-bold text-white">4.8/5</span>
                  </div>
                  <p className="text-lg text-gray-400 mb-8">Avaliação média no Gartner Peer Insights</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <p className="text-gray-300">dos usuários recomendam a Keepit</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                    <p className="text-gray-300">em facilidade de uso</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-black/50 rounded-lg border border-gray-700">
                  <blockquote className="text-lg text-gray-300 italic text-center">
                    "A Keepit oferece a melhor solução de backup SaaS do mercado. Interface intuitiva, recuperação rápida e suporte excepcional."
                  </blockquote>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    Fonte: Gartner Peer Insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" data-section="faq" className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('faq')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
              Perguntas Frequentes sobre Proteção SaaS
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {faqsToShow.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-gray-900/50 rounded-lg shadow-md border border-gray-700 overflow-hidden">
                    <button
                      onClick={() => toggleFaqItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                    >
                      <span className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </span>
                      <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-black font-bold transition-transform duration-200 ${openFaqItems[index] ? 'rotate-45' : ''}`}>
                        +
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${openFaqItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-4 pt-2">
                        <p className="text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Botão "Outras Perguntas" */}
              {!showAllFaq && (
                <div className="mt-8 text-center">
                  <button
                    onClick={toggleShowAllFaq}
                    className="bg-gray-900/50 rounded-lg shadow-md border border-gray-700 overflow-hidden w-full hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <div className="px-6 py-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-white">
                        Outras Perguntas
                      </span>
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-black font-bold">
                        +
                      </div>
                    </div>
                  </button>
                </div>
              )}
              
              {/* Botão "Mostrar Menos" quando todas as perguntas estão visíveis */}
              {showAllFaq && (
                <div className="mt-8 text-center">
                  <button
                    onClick={toggleShowAllFaq}
                    className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Mostrar Menos
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="cta-final" data-section="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-primary to-green-600 text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Pronto para Blindar Seus Dados SaaS?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-800">
              Não deixe seus dados vulneráveis. A AORKIA ativa a Keepit e implementa a proteção imutável que sua empresa precisa. Converse com nossos especialistas agora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block px-8 py-4 bg-black text-primary rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Falar com Especialista
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block px-8 py-4 border-2 border-black text-black rounded-full text-lg font-semibold hover:bg-black hover:text-primary transition-all duration-300"
              >
                Voltar ao Topo
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
