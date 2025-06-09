import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Solucoes() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSolution, setActiveSolution] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('backup');

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Detectar seção ativa baseada na posição de scroll
      const sections = ['backup', 'bordas', 'dspm', 'receitas', 'digital'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollTop + 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave para seção
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setSidebarOpen(false);
  };

  // Soluções com imagens e conteúdos completos
  const solutions = [
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      supportText: 'Imutável. Independente. Inteligente.',
      subtitle: 'Seus Dados na Nuvem, Realmente Protegidos.',
      caseStudy: 'Perder dados críticos de Plataformas SaaS como Microsoft 365, Google Workspace e Salesforce por um simples erro humano ou um ataque de ransomware pode paralisar sua operação e gerar custos enormes. Com o Backup SaaS Estratégico ativado pela AORKIA, você recupera desde um único e-mail até ambientes inteiros rapidamente, garantindo a continuidade do seu negócio e a tranquilidade da sua equipe.',
      activateContent: 'A AORKIA simplifica a complexidade da proteção de dados SaaS, ativando a plataforma líder da Keepit para oferecer máxima segurança, controle e tranquilidade para sua empresa:',
      features: [
        {
          icon: 'ri-shield-keyhole-line',
          title: 'Proteção Completa e Imutável Contra Ameaças',
          description: 'Seus dados SaaS são copiados para uma nuvem independente e segura, com backups 100% imutáveis que protegem contra ransomware, exclusões acidentais e corrupção.'
        },
        {
          icon: 'ri-restart-line',
          title: 'Recuperação Rápida e Granular a Qualquer Momento',
          description: 'Restaure exatamente o que você precisa – um arquivo, um e-mail, um registro específico ou contas inteiras – em minutos, diretamente para o local original ou para download.'
        },
        {
          icon: 'ri-apps-2-line',
          title: 'Ampla Cobertura para Seu Ecossistema SaaS',
          description: 'Garanta a proteção completa dos seus dados críticos em Microsoft 365, Google Workspace, Salesforce, Dynamics 365, Azure AD, entre outras plataformas essenciais.'
        },
        {
          icon: 'ri-file-shield-2-line',
          title: 'Conformidade Descomplicada e Auditoria Facilitada',
          description: 'Atenda às exigências da LGPD, GDPR, HIPAA e outras regulamentações com políticas de retenção flexíveis, trilhas de auditoria detalhadas e data centers seguros.'
        }
      ],
      whyContent: 'Muitas empresas ainda acreditam que seus provedores de SaaS (como Microsoft ou Google) são totalmente responsáveis pelo backup de todos os seus dados. No entanto, o modelo de responsabilidade é compartilhada: eles garantem a infraestrutura; você protege seus dados contra perdas acidentais, erros humanos, ameaças internas e ataques de ransomware.',
      whyQuote: 'Seus dados em Microsoft 365, Salesforce ou Google Workspace são ativos cruciais, mas a proteção nativa dessas plataformas não cobre todos os cenários de perda de dados. Erros humanos, exclusões (acidentais ou maliciosas) e, principalmente, ataques de ransomware podem levar à perda irreparável de informações vitais. Um backup SaaS dedicado, independente e imutável, como o ativado pela AORKIA, é essencial para garantir a verdadeira continuidade dos negócios, a conformidade regulatória e a sua total tranquilidade operacional.',
      howContent: 'A AORKIA não é apenas uma fornecedora de tecnologia; somos seus parceiros estratégicos na proteção de dados. Nosso modelo de "ativação" garante que você extraia o máximo valor da melhor solução de backup SaaS do mercado, de forma rápida, personalizada e sem complexidade para sua equipe.',
      howQuote: 'Com a AORKIA, você não apenas adquire uma solução líder global como a Keepit; você ativa uma estratégia completa e robusta de proteção para seus dados SaaS. Nossa expertise assegura uma implementação ágil e customizada às suas políticas, configuração otimizada para suas necessidades de conformidade e retenção de dados, e suporte especializado contínuo. Capacitamos sua equipe para gerenciar os backups com facilidade e confiança, transformando a segurança de dados em um pilar fundamental para o crescimento e a resiliência do seu negócio.',
      ctaText: 'Proteja o Coração Digital do Seu Negócio Agora Mesmo. Descubra como o Backup SaaS Estratégico ativado pela AORKIA pode blindar seus dados críticos na nuvem.',
      image: '/image/backup.png',
      logo: '/image/keepit_logo_aorkia.png'
    },
    {
      id: 'bordas',
      title: 'Operações de Bordas Inteligentes',
      supportText: 'Inteligência na Borda. Decisões Imediatas.',
      subtitle: 'Inteligência Artificial Onde Sua Empresa Mais Precisa.',
      caseStudy: 'Otimize a produção em tempo real na sua fábrica, preveja falhas em equipamentos remotos antes que paralisem suas operações, ou ofereça experiências personalizadas e instantâneas no seu varejo. Com as Operações de Bordas Inteligentes, a AORKIA ativa a IA onde seus dados são gerados, transformando desafios complexos em agilidade e resultados imediatos para o seu negócio.',
      activateContent: 'A AORKIA simplifica a complexidade de levar IA à borda, ativando plataformas líderes para que você escale suas operações com confiança e inteligência:',
      features: [
        {
          icon: 'ri-global-line',
          title: 'Escale Suas Operações de IA na Borda com Facilidade',
          description: 'Implemente e gerencie centralmente aplicações de IA em centenas ou milhares de locais geograficamente distribuídos, com provisionamento automatizado e orquestração simplificada.'
        },
        {
          icon: 'ri-dashboard-3-line',
          title: 'Gestão Unificada e Inteligente de Dispositivos e Aplicações',
          description: 'Controle todo o ciclo de vida de seus dispositivos e aplicações de borda a partir de uma única interface, simplificando a gestão, otimizando custos e garantindo a saúde da sua infraestrutura.'
        },
        {
          icon: 'ri-shield-check-line',
          title: 'Segurança Robusta de Ponta a Ponta na Borda',
          description: 'Proteja seus dados, modelos de IA e dispositivos na borda com uma arquitetura de segurança abrangente, desde o hardware até a nuvem, garantindo a integridade e confidencialidade de suas operações críticas.'
        },
        {
          icon: 'ri-puzzle-line',
          title: 'Flexibilidade Tecnológica com Curadoria Especializada',
          description: 'Tenha liberdade para escolher e ativar as melhores plataformas de software e modelos de IA em uma ampla gama de hardwares de borda, com a curadoria e expertise da AORKIA para atender sua necessidade específica.'
        }
      ],
      whyContent: 'Levar a Inteligência Artificial para mais perto da origem dos dados não é apenas uma tendência, é uma necessidade estratégica para muitas indústrias. A IA na borda permite respostas mais rápidas, operações mais eficientes e insights valiosos gerados instantaneamente.',
      whyQuote: 'A IA na Borda está se tornando essencial em todas as indústrias, permitindo que as organizações automatizem a tomada de decisões locais em tempo real e reduzam a dependência da infraestrutura em nuvem. Isso melhora a eficiência operacional e os custos, ao mesmo tempo que possibilita análises orientadas por IA, insights preditivos e uma melhor experiência do cliente. Para muitos casos de uso, a IA se moverá para mais perto dos dados, impulsionada pela necessidade de tomada de decisão em tempo real e eficiência operacional. Segundo o Gartner, até 2029, pelo menos 60% das implementações de computação de borda usarão IA composta (tanto IA preditiva quanto IA generativa [GenAI]), em comparação com menos de 5% em 2023.',
      howContent: 'A AORKIA é sua parceira estratégica para destravar o potencial da IA na borda. Nós simplificamos a complexidade para que você possa focar nos resultados de negócio, enquanto cuidamos da "ativação" da tecnologia com expertise.',
      howQuote: 'Desbloqueie o poder da IA distribuída com a AORKIA. Nós ativamos e ajudamos você a gerenciar modelos e aplicações de IA na borda em múltiplos locais, eliminando processos manuais com provisionamento automatizado e soluções otimizadas por nossa curadoria. Garanta a segurança de suas implementações com uma arquitetura robusta, protegendo seus dados e propriedade intelectual. Monitore a saúde dos dispositivos e gerencie toda a sua infraestrutura de borda de forma centralizada, reduzindo custos com suporte flexível a hardware e conectividade.',
      ctaText: 'Pronto para Ativar a Inteligência em suas Operações de Borda? Descubra como a AORKIA pode ativar a Inteligência Artificial na borda da sua empresa.',
      image: '/image/bordas.png'
    },
    {
      id: 'dspm',
      title: 'Segurança para Operações Críticas',
      supportText: 'Visão Total. Controle Ativo.',
      subtitle: 'Visibilidade e Controle Total dos Seus Dados, Onde Estiverem.',
      caseStudy: 'Sua empresa armazena dados de clientes ou propriedade intelectual em múltiplas nuvens e tem dificuldade em saber quem realmente tem acesso a quê? Uma configuração incorreta pode expor dados críticos, gerando riscos regulatórios e de reputação. Com a Segurança para Operações Críticas da AORKIA, você descobre, classifica e protege seus dados sensíveis de forma proativa e contínua.',
      activateContent: 'A AORKIA simplifica a complexa tarefa de proteger seus dados em ambientes híbridos e multinuvem, ativando Plataformas de Gestão da Postura de Segurança de Dados (DSPM) que oferecem:',
      features: [
        {
          icon: 'ri-search-eye-line',
          title: 'Descoberta e Classificação Abrangente de Dados',
          description: 'Identifique e classifique automaticamente dados sensíveis, incluindo "shadow data", em todos os seus repositórios na nuvem (IaaS, PaaS, SaaS) e sistemas on-premise.'
        },
        {
          icon: 'ri-bar-chart-grouped-line',
          title: 'Priorização Inteligente de Riscos de Exposição',
          description: 'Entenda o contexto de risco de cada dado sensível – quem acessa, como é usado, quais permissões existem – para focar seus esforços de correção onde realmente importa.'
        },
        {
          icon: 'ri-shield-check-line',
          title: 'Remediação Orientada e Conformidade Contínua',
          description: 'Receba recomendações claras ou automatize a correção de exposições de dados, garantindo a conformidade com LGPD, GDPR, HIPAA e outras normas de forma simplificada e auditável.'
        },
        {
          icon: 'ri-cloud-line',
          title: 'Segurança de Dados Integrada à Sua Nuvem',
          description: 'Unifique a segurança dos seus dados com a segurança da sua infraestrutura na nuvem, obtendo uma visão contextualizada para proteger suas aplicações nativas da nuvem de ponta a ponta.'
        }
      ],
      whyContent: 'Em um cenário de inovação acelerada na nuvem, o volume e a complexidade dos dados crescem exponencialmente. Isso dificulta a proteção eficaz, expondo sua empresa a riscos. Plataformas DSPM são essenciais para superar esses desafios.',
      whyQuote: 'Os dados alimentam a inovação na nuvem, mas o volume e a complexidade dos ambientes híbridos e multinuvem dificultam a segurança desses dados. As soluções isoladas geram muitos alertas, deixando as equipes sem saber onde direcionar os esforços. Seja uma violação de informações de clientes, registros financeiros ou propriedade intelectual, o acesso não autorizado aos dados pode ter graves consequências regulatórias e para a reputação. É crucial unificar a visibilidade da segurança para proteger contra ataques cibernéticos em qualquer ambiente.',
      howContent: 'A AORKIA é sua parceira para transformar a complexidade da segurança de dados em clareza e controle. Nosso modelo de "ativação" foca em implementar rapidamente a melhor tecnologia DSPM, adaptada à sua realidade, para proteger seus ativos mais valiosos.',
      howQuote: 'Com a AORKIA, você ativa uma solução DSPM líder que se integra à sua estratégia de segurança na nuvem. Nossa expertise garante a descoberta contínua de todos os seus dados sensíveis, a análise contextualizada dos riscos de exposição e a automação da remediação. Ajudamos sua equipe a tomar medidas contra as ameaças mais perigosas sem adicionar complexidade, garantindo que seus dados estejam protegidos e em conformidade, onde quer que estejam.',
      ctaText: 'Assuma o Controle da Segurança dos Seus Dados Críticos Hoje Mesmo. Descubra como a AORKIA pode ativar uma postura de segurança de dados proativa e resiliente na sua empresa.',
      image: '/image/dspm.png'
    },
    {
      id: 'receitas',
      title: 'Plataforma de Inteligência de Receita com IA',
      supportText: 'Receita Previsível. Crescimento Acelerado.',
      subtitle: 'Transforme Dados em Decisões e Receita Previsível.',
      caseStudy: 'Sua equipe de vendas perde tempo com tarefas manuais em vez de focar em fechar negócios? Suas previsões de receita são imprecisas e o pipeline parece ter "vazamentos" que você não consegue identificar? Com a Plataforma de Inteligência de Receita com IA ativada pela AORKIA, você obtém clareza e controle sobre todo o ciclo de receita.',
      activateContent: 'A AORKIA simplifica a complexidade da gestão de receita, ativando plataformas líderes que utilizam IA para unificar dados, processos e equipes, impulsionando a performance e a previsibilidade:',
      features: [
        {
          icon: 'ri-flow-chart',
          title: 'Orquestração Completa do Ciclo de Receita',
          description: 'Unifique todos os sinais de receita – CRM, e-mails, chamadas, dados de uso – em um único modelo de dados para gerenciar cadências e fluxos de trabalho de ponta a ponta.'
        },
        {
          icon: 'ri-line-chart-line',
          title: 'Previsibilidade e Análise Preditiva de Vendas',
          description: 'Aumente a precisão das suas previsões de receita, identifique negócios em risco ou com potencial de upsell, e compreenda o que realmente impulsiona seus resultados com IA.'
        },
        {
          icon: 'ri-team-line',
          title: 'Colaboração e Alinhamento entre Equipes (RevOps)',
          description: 'Capacite suas equipes de marketing, vendas e sucesso do cliente com insights compartilhados e automação de processos para uma "máquina de receita" eficiente e escalável.'
        },
        {
          icon: 'ri-user-settings-line',
          title: 'Capacitação Inteligente para Vendedores',
          description: 'Forneça aos seus vendedores insights acionáveis em tempo real, automação de tarefas administrativas e as melhores próximas ações recomendadas por IA para cada oportunidade.'
        }
      ],
      whyContent: 'No cenário B2B atual, gerar receita de forma previsível e eficiente exige mais do que intuição. É preciso transformar o vasto volume de dados de clientes e interações em inteligência acionável. A Inteligência de Receita com IA é a chave para isso.',
      whyQuote: 'A Inteligência Artificial aplicada à receita não é apenas uma ferramenta de análise; é um multiplicador de força para suas equipes de vendas, marketing e sucesso do cliente. Ela permite guiar vendedores com insights contextuais em tempo real, automatizar ações críticas e manter os negócios em movimento, adaptando-se não apenas a mudanças no CRM, mas a alterações estratégicas do seu mercado. Com o "Revenue Context" adequado, a IA capacita as empresas a realmente conduzir o crescimento da receita em escala.',
      howContent: 'A AORKIA é sua parceira na "ativação" de uma cultura orientada a dados e resultados. Nós não apenas implementamos a tecnologia; garantimos que ela se traduza em crescimento real e previsível para o seu negócio.',
      howQuote: 'Com a AORKIA, você ativa o poder da Inteligência de Receita com IA, indo além da simples integração de CRM. Nossa expertise assegura a unificação de todos os seus sinais de receita (e-mails, conversas, dados de uso, etc.) em um único modelo robusto. Ajudamos a configurar cadências de receita, automatizar fluxos de trabalho e controlar os modelos de IA para que suas equipes tenham os insights e as ações recomendadas mais precisas. Transformamos dados dispersos em uma máquina de receita previsível e escalável.',
      ctaText: 'Transforme Seus Dados em Receita Previsível Hoje Mesmo. Descubra como a AORKIA pode ativar a Inteligência de Receita com IA na sua empresa.',
      image: '/image/receitas.png'
    },
    {
      id: 'digital',
      title: 'Estratégia de Presença Digital AORKIA',
      supportText: 'Presença Estratégica. Resultados Concretos.',
      subtitle: 'Sua Presença Digital Como Ativo Estratégico de Crescimento.',
      caseStudy: 'Sua empresa compreende que uma presença digital eficaz vai muito além de um site visualmente atraente – é um ecossistema completo e um ativo estratégico fundamental para o crescimento sustentável no mercado B2B? Com a Estratégia de Presença Digital AORKIA, você eleva sua autoridade no mercado, a conexão com clientes e os resultados comerciais concretos.',
      activateContent: 'A AORKIA simplifica a complexidade de construir uma presença digital estratégica, ativando um ecossistema integrado que gera resultados mensuráveis:',
      features: [
        {
          icon: 'ri-global-line',
          title: 'Ecossistema Digital Integrado e Estratégico',
          description: 'Construa uma presença digital coesa que conecta site, conteúdo, SEO, automação de marketing e análise de dados em uma estratégia unificada para gerar leads qualificados e acelerar vendas.'
        },
        {
          icon: 'ri-trophy-line',
          title: 'Autoridade de Marca e Posicionamento de Mercado',
          description: 'Estabeleça sua empresa como referência no seu setor através de conteúdo estratégico, thought leadership e uma presença digital que comunica expertise, confiabilidade e inovação.'
        },
        {
          icon: 'ri-target-line',
          title: 'Geração e Nutrição Inteligente de Leads',
          description: 'Atraia, capture e nutra leads qualificados através de jornadas personalizadas, automação inteligente e conteúdo relevante que educa e converte prospects em clientes.'
        },
        {
          icon: 'ri-line-chart-line',
          title: 'Análise e Otimização Contínua de Performance',
          description: 'Monitore, meça e otimize continuamente sua presença digital com analytics avançados, testes A/B e insights acionáveis para maximizar ROI e acelerar crescimento.'
        }
      ],
      whyContent: 'No mercado B2B atual, sua presença digital é frequentemente o primeiro ponto de contato com prospects. Uma estratégia digital bem executada não apenas gera leads, mas constrói confiança, demonstra expertise e acelera o ciclo de vendas.',
      whyQuote: 'Uma presença digital estratégica no B2B vai muito além de ter um site bonito. É sobre criar um ecossistema que trabalha 24/7 para gerar leads qualificados, nutrir prospects, demonstrar autoridade no mercado e acelerar vendas. Empresas com presença digital estratégica bem executada veem um aumento significativo na geração de leads, redução no ciclo de vendas e melhoria na percepção de marca. É um investimento que se paga e continua gerando retorno ao longo do tempo.',
      howContent: 'A AORKIA é sua parceira na "ativação" de uma presença digital que gera resultados reais. Nós não apenas criamos sites; construímos ecossistemas digitais estratégicos que impulsionam crescimento sustentável.',
      howQuote: 'Com a AORKIA, você ativa uma estratégia de presença digital completa e orientada a resultados. Nossa expertise garante um site otimizado para conversão, estratégia de conteúdo que posiciona sua empresa como autoridade, automação de marketing que nutre leads eficientemente e análise contínua para otimização de performance. Transformamos sua presença digital em uma máquina de geração de leads e crescimento de receita.',
      ctaText: 'Transforme Sua Presença Digital em um Ativo de Crescimento. Descubra como a AORKIA pode ativar uma estratégia digital que gera resultados concretos para sua empresa.',
      image: '/image/digital.png'
    }
  ];

  return (
    <>
      <Head>
        <title>Soluções AORKIA | Tecnologia de Ponta. Visão de Futuro.</title>
        <meta name="description" content="Descubra nossas soluções especializadas para proteger, otimizar e acelerar o crescimento da sua empresa." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">AORKIA</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Início
              </Link>
              <Link href="/solucoes" className="text-white font-medium">
                Soluções
              </Link>
              <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-white"
            >
              <i className={`ri-${sidebarOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-black/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64 border-r border-gray-800`}>
        <div className="pt-20 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Nossas Soluções</h3>
          <nav className="space-y-2">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => scrollToSection(solution.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === solution.id 
                    ? 'bg-primary text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <div className="font-medium">{solution.title}</div>
                <div className="text-sm opacity-75">{solution.supportText}</div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay para mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <main className="bg-black text-white md:ml-64">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                Soluções Especializadas AORKIA
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Tecnologia de Ponta. <br className="hidden md:block" />
                Visão de Futuro.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
                Nossas soluções são desenhadas para proteger seus ativos digitais, otimizar sua performance operacional e acelerar sua jornada rumo ao crescimento estratégico e rentável.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Sections */}
        {solutions.map((solution, index) => (
          <section 
            key={solution.id}
            id={solution.id}
            className="relative min-h-screen py-24 md:py-32"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${solution.image})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl px-4">
              {/* Header */}
              <div className="mb-16">
                <p className="text-lg text-primary mb-2">{solution.supportText}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{solution.title}</h2>
                <h3 className="text-2xl md:text-3xl text-gray-300 mb-8">{solution.subtitle}</h3>
                
                {solution.logo && (
                  <div className="mb-8">
                    <Image 
                      src={solution.logo} 
                      alt={solution.title} 
                      className="h-16 w-auto"
                      width={200}
                      height={64}
                      priority
                    />
                  </div>
                )}
              </div>

              {/* Case Study */}
              <div className="mb-16">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  {solution.caseStudy}
                </p>
              </div>

              {/* Activate Content */}
              <div className="mb-16">
                <h4 className="text-2xl md:text-3xl font-bold mb-8">Como a AORKIA Ativa Esta Solução</h4>
                <p className="text-xl text-gray-300 mb-12">{solution.activateContent}</p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm">
                      <div className="flex items-start space-x-4">
                        <i className={`${feature.icon} text-3xl text-primary flex-shrink-0 mt-1`}></i>
                        <div>
                          <h5 className="text-xl font-semibold mb-4">{feature.title}</h5>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Section */}
              <div className="mb-16">
                <h4 className="text-2xl md:text-3xl font-bold mb-8">Por Que Esta Solução é Essencial</h4>
                <p className="text-xl text-gray-300 mb-8">{solution.whyContent}</p>
                <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-gray-300">
                  {solution.whyQuote}
                </blockquote>
              </div>

              {/* How Section */}
              <div className="mb-16">
                <h4 className="text-2xl md:text-3xl font-bold mb-8">Como a AORKIA Faz a Diferença</h4>
                <p className="text-xl text-gray-300 mb-8">{solution.howContent}</p>
                <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-gray-300">
                  {solution.howQuote}
                </blockquote>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-xl md:text-2xl font-semibold mb-8">{solution.ctaText}</p>
                <Link 
                  href="/contato" 
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-4 px-8 rounded-lg transition-colors text-lg"
                >
                  <span>Solicitar Demonstração</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* Footer */}
        <footer className="bg-gray-900 py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo e Descrição */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">AORKIA</h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  Tecnologia de Ponta. Visão de Futuro. Ativamos as melhores soluções globais para a sua realidade específica.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <i className="ri-linkedin-line text-2xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <i className="ri-twitter-line text-2xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <i className="ri-mail-line text-2xl"></i>
                  </a>
                </div>
              </div>

              {/* Soluções */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Soluções</h4>
                <ul className="space-y-2">
                  {solutions.slice(0, 5).map((solution) => (
                    <li key={solution.id}>
                      <button 
                        onClick={() => scrollToSection(solution.id)}
                        className="text-gray-300 hover:text-white transition-colors text-left"
                      >
                        {solution.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="mailto:contato@aorkia.com" className="hover:text-white transition-colors">
                      contato@aorkia.com
                    </a>
                  </li>
                  <li>
                    <Link href="/contato" className="hover:text-white transition-colors">
                      Fale Conosco
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 AORKIA. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
