import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
    howQuote: 'Com a AORKIA, você ativa o poder da Inteligência de Receita com IA, indo além da simples integração de CRM. Nossa expertise assegura a unificação de todos os seus sinais de receita (e-mails, conversas, dados de uso, etc.) em um único modelo robusto. Ajudamos a configurar cadências de receita, automatizar fluxos de trabalho e controlar os modelos de IA para que suas equipes tenham os insights e as ações recomendadas mais relevantes. Capacitamos sua equipe com treinamento especializado, garantindo adoção e resultados rápidos.',
    ctaText: 'Pronto para Transformar Dados em Crescimento Previsível? Descubra como a AORKIA pode ativar a Inteligência de Receita com IA na sua empresa.',
    image: '/image/receitas.png'
  },
  {
    id: 'digital',
    title: 'Estratégia de Presença Digital AORKIA',
    supportText: 'Receita Previsível. Crescimento Acelerado.',
    subtitle: 'Transforme Sua Presença Digital em Ativo Estratégico.',
    caseStudy: 'Sua empresa compreende que uma presença digital eficaz vai muito além de um site visualmente atraente – é um ecossistema completo e um ativo estratégico fundamental para o crescimento sustentável no mercado B2B? A AORKIA ativa sua Estratégia de Presença Digital, elevando sua autoridade no mercado, a conexão com clientes e os resultados comerciais concretos.',
    activateContent: 'A AORKIA simplifica a complexidade da transformação digital, ativando uma estratégia completa que unifica design, tecnologia e conteúdo para impulsionar resultados mensuráveis:',
    features: [
      {
        icon: 'ri-layout-4-line',
        title: 'Design Estratégico e Experiência do Usuário',
        description: 'Criamos experiências digitais que combinam estética sofisticada com funcionalidade intuitiva, refletindo a identidade da sua marca e otimizando a jornada do cliente B2B.'
      },
      {
        icon: 'ri-code-box-line',
        title: 'Desenvolvimento Tecnológico de Alta Performance',
        description: 'Implementamos soluções digitais robustas, escaláveis e seguras, utilizando as melhores tecnologias para garantir velocidade, confiabilidade e experiência excepcional.'
      },
      {
        icon: 'ri-file-text-line',
        title: 'Conteúdo Estratégico e Geração de Demanda',
        description: 'Desenvolvemos conteúdo de autoridade que posiciona sua empresa como líder de pensamento, atraindo leads qualificados e nutrindoos ao longo de todo o ciclo de compra B2B.'
      },
      {
        icon: 'ri-line-chart-line',
        title: 'Análise de Dados e Otimização Contínua',
        description: 'Implementamos métricas claras e processos de otimização contínua, transformando dados em insights acionáveis para melhorar constantemente sua presença digital.'
      }
    ],
    whyContent: 'No ambiente B2B atual, uma presença digital estratégica é essencial para construir autoridade, gerar demanda qualificada e acelerar ciclos de vendas. Não se trata apenas de estar online, mas de criar um ecossistema digital que impulsione resultados de negócio.',
    whyQuote: 'A transformação digital B2B vai muito além de um site bonito ou presença em redes sociais. Trata-se de criar um ecossistema digital coeso que funcione como uma extensão da sua estratégia de negócios. Empresas B2B com presença digital estratégica geram 3,5x mais leads e encurtam seus ciclos de vendas em até 70%. No entanto, muitas organizações ainda tratam seus ativos digitais como custos operacionais, não como investimentos estratégicos com ROI mensurável. A AORKIA transforma sua presença digital em um motor de crescimento, não apenas um centro de custos.',
    howContent: 'A AORKIA é sua parceira na "ativação" de uma presença digital estratégica. Nosso modelo vai além da implementação técnica, garantindo que sua presença digital se traduza em resultados de negócio concretos.',
    howQuote: 'Com a AORKIA, você ativa uma Estratégia de Presença Digital completa e orientada a resultados. Nossa abordagem integra design estratégico, desenvolvimento tecnológico de alta performance, conteúdo de autoridade e análise de dados em um ecossistema digital coeso. Implementamos rapidamente, com foco na experiência do usuário B2B e na geração de demanda qualificada. Capacitamos sua equipe para gerenciar e otimizar continuamente sua presença digital, transformando-a em um verdadeiro ativo estratégico para o crescimento do seu negócio.',
    ctaText: 'Pronto para Transformar Sua Presença Digital em Vantagem Competitiva? Descubra como a AORKIA pode ativar uma Estratégia de Presença Digital que impulsione resultados concretos para sua empresa.',
    image: '/image/digital.png'
  }
];

// Sidebar component
function Sidebar({ solutions, activeId, setActiveId }) {
  return (
    <aside className="hidden md:block fixed top-24 left-0 h-[calc(100vh-6rem)] w-60 bg-black border-r border-gray-800 z-30 p-6">
      <nav className="flex flex-col space-y-4">
        {solutions.map(sol => (
          <a
            key={sol.id}
            href={`#${sol.id}`}
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById(sol.id);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setActiveId(sol.id);
            }}
            className={`font-semibold text-lg rounded px-3 py-2 transition-colors ${
              activeId === sol.id ? 'bg-primary text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            {sol.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

// Navbar component
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 z-40 border-b border-gray-800">
      <div className="container mx-auto max-w-6xl px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/image/aorkia_white.png" alt="AORKIA Logo" width={42} height={42} />
          <span className="font-bold text-xl text-white tracking-wide">AORKIA</span>
        </Link>
        <nav className="flex gap-8">
          <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
            Sobre
          </Link>
          <Link href="/solucoes" className="text-white font-semibold border-b-2 border-primary pb-1">
            Soluções
          </Link>
          <Link href="/#contato" className="text-gray-300 hover:text-white transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 mt-24">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Image src="/image/aorkia_white.png" alt="AORKIA Logo" width={36} height={36} />
          <span className="font-bold text-lg text-white">AORKIA</span>
        </div>
        <div className="text-gray-400 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} AORKIA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default function Solucoes() {
  const [activeId, setActiveId] = useState(solutions[0].id);

  // Trocar activeId de acordo com o scroll
  // Opcional: useEffect para scrollspy

  return (
    <>
      <Head>
        <title>Soluções AORKIA</title>
        <meta name="description" content="Conheça as soluções estratégicas da AORKIA para transformação digital, segurança, IA e crescimento de receita." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <Navbar />

      <main className="bg-black text-white pt-24">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-screen overflow-hidden flex items-center justify-center hero">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
          <div className="container mx-auto max-w-6xl px-4 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Soluções <span className="text-primary">AORKIA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Ativamos tecnologia estratégica para proteger, escalar e potencializar o crescimento da sua empresa B2B.
            </p>
          </div>
        </section>

        <div className="flex">
          {/* Sidebar */}
          <Sidebar solutions={solutions} activeId={activeId} setActiveId={setActiveId} />

          {/* Conteúdo das soluções */}
          <div className="flex-1 ml-0 md:ml-60 transition-all duration-300">
            <section className="container mx-auto max-w-5xl px-4 py-24 space-y-32">
              {solutions.map((sol, idx) => (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="group relative bg-black border border-gray-800 rounded-lg p-8 md:p-12 shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                    <div className="flex-1 min-w-[280px] max-w-[320px]">
                      <Image
                        src={sol.image}
                        alt={sol.title}
                        width={500}
                        height={360}
                        className="rounded-xl shadow-lg object-cover border border-gray-700"
                      />
                      {sol.logo && (
                        <div className="mt-4 flex justify-center">
                          <Image
                            src={sol.logo}
                            alt="Logo"
                            width={140}
                            height={38}
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{sol.title}</h2>
                      <div className="text-base md:text-lg text-gray-300 font-semibold mb-1">{sol.supportText}</div>
                      <div className="text-lg md:text-xl font-semibold mb-2 text-white">{sol.subtitle}</div>
                      <div className="mb-4 text-gray-400">{sol.caseStudy}</div>
                      <div className="mb-4">
                        <span className="font-bold text-primary">Como ativamos:</span>
                        <div className="text-gray-300">{sol.activateContent}</div>
                        <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sol.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className={`text-2xl text-primary mr-2`}><i className={feature.icon}></i></span>
                              <div>
                                <div className="font-bold text-white">{feature.title}</div>
                                <div className="text-gray-400 text-sm">{feature.description}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        <span className="font-bold text-primary">Por que é essencial?</span>
                        <div className="text-gray-300">{sol.whyContent}</div>
                        <blockquote className="border-l-4 border-primary pl-4 text-gray-400 italic mt-2">{sol.whyQuote}</blockquote>
                      </div>
                      <div className="mb-4">
                        <span className="font-bold text-primary">Como ajudamos você:</span>
                        <div className="text-gray-300">{sol.howContent}</div>
                        <blockquote className="border-l-4 border-primary pl-4 text-gray-400 italic mt-2">{sol.howQuote}</blockquote>
                      </div>
                      <div>
                        <div className="pt-2 pb-2">
                          <span className="font-bold text-white">{sol.ctaText}</span>
                        </div>
                        <Link href="/#contato" className="inline-block mt-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                          Quero saber mais
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
