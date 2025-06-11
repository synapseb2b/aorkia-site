import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Solucoes() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const solutionsRef = useRef(null);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave ao clicar em links internos
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Soluções com suas respectivas imagens e conteúdos
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
      whyQuote: 'A Inteligência Artificial aplicada à receita não é apenas uma ferramenta de análise; é um multiplicador de força para suas equipes de vendas, marketing e sucesso do cliente. Ela permite que você identifique padrões, preveja comportamentos e otimize cada etapa do funil de vendas, garantindo que seus esforços se traduzam em resultados tangíveis e crescimento sustentável. Com a IA, você não apenas reage ao mercado, mas o molda ativamente, transformando dados em seu maior ativo estratégico.',
      howContent: 'A AORKIA é sua parceira estratégica para ativar uma Plataforma de Inteligência de Receita com IA que realmente funciona para o seu negócio. Nós vamos além da implementação, garantindo que a tecnologia se integre perfeitamente aos seus processos e impulsione seus resultados.',
      howQuote: 'Com a AORKIA, você ativa uma Plataforma de Inteligência de Receita com IA que unifica seus dados de vendas, marketing e sucesso do cliente, fornecendo uma visão 360º do seu pipeline. Nossa expertise garante a implementação de modelos preditivos que aumentam a precisão das suas previsões, identificam oportunidades de upsell e cross-sell, e alertam sobre riscos. Capacitamos suas equipes com insights acionáveis em tempo real, automação de tarefas repetitivas e orquestração inteligente de cadências, liberando seus vendedores para focar no que realmente importa: construir relacionamentos e fechar negócios. Transforme sua operação de receita em uma máquina previsível e de alto desempenho.',
      ctaText: 'Transforme Sua Receita em Crescimento Previsível. Descubra como a AORKIA pode ativar uma Plataforma de Inteligência de Receita com IA que impulsiona seus resultados.',
      image: '/image/receitas.png'
    },
    {
      id: 'digital',
      title: 'Estratégia de Presença Digital',
      supportText: 'Visibilidade. Engajamento. Conversão.',
      subtitle: 'Sua Marca no Centro das Atenções Digitais.',
      caseStudy: 'Sua empresa tem um site, redes sociais, mas não consegue atrair clientes qualificados ou gerar leads? Você investe em marketing digital, mas não vê retorno claro? Com a Estratégia de Presença Digital ativada pela AORKIA, sua marca se torna um ímã para o público certo, transformando visitantes em clientes fiéis e impulsionando seu crescimento online.',
      activateContent: 'A AORKIA simplifica a complexidade do marketing digital, ativando estratégias e ferramentas que garantem uma presença digital robusta e resultados mensuráveis:',
      features: [
        {
          icon: 'ri-seo-line',
          title: 'Otimização para Motores de Busca (SEO) e Conteúdo Estratégico',
          description: 'Posicione sua marca no topo das buscas do Google com conteúdo relevante e otimizado, atraindo tráfego orgânico qualificado e construindo autoridade no seu nicho.'
        },
        {
          icon: 'ri-advertisement-line',
          title: 'Campanhas de Mídia Paga (Tráfego Pago) de Alta Performance',
          description: 'Alcance seu público-alvo com precisão no Google Ads, Meta Ads e LinkedIn Ads, otimizando seu investimento para gerar leads, vendas e reconhecimento de marca.'
        },
        {
          icon: 'ri-mail-send-line',
          title: 'Automação de Marketing e Nutrição de Leads',
          description: 'Crie jornadas personalizadas para seus leads, automatize o envio de e-mails e mensagens, e os conduza de forma eficiente pelo funil de vendas até a conversão.'
        },
        {
          icon: 'ri-bar-chart-box-line',
          title: 'Análise de Dados e Otimização Contínua',
          description: 'Monitore o desempenho de suas campanhas em tempo real, identifique oportunidades de melhoria e otimize suas estratégias com base em dados para maximizar o ROI.'
        }
      ],
      whyContent: 'No mundo digital de hoje, ter uma presença online não é mais um diferencial, é uma necessidade. Mas não basta estar presente; é preciso ter uma estratégia clara para se destacar, atrair e converter.',
      whyQuote: 'No cenário digital atual, a presença online é a espinha dorsal de qualquer estratégia de crescimento. No entanto, muitas empresas se perdem na complexidade das ferramentas e canais, investindo sem um retorno claro. Uma Estratégia de Presença Digital eficaz vai além de ter um site ou redes sociais; ela integra SEO, mídia paga, conteúdo e automação de marketing em um ecossistema coeso que atrai, engaja e converte. É a diferença entre ser apenas mais uma empresa online e ser a referência no seu setor, gerando leads qualificados e impulsionando vendas de forma consistente.',
      howContent: 'A AORKIA é sua parceira estratégica para construir e otimizar sua presença digital. Nosso modelo de "ativação" garante que sua marca não apenas seja vista, mas que gere resultados reais, com estratégias personalizadas e foco em ROI.',
      howQuote: 'Com a AORKIA, você ativa uma Estratégia de Presença Digital que posiciona sua marca como líder no seu mercado. Nossa expertise em SEO garante que você seja encontrado por quem realmente importa, enquanto nossas campanhas de mídia paga geram leads qualificados e vendas. Implementamos automação de marketing para nutrir seus leads e transformá-los em clientes fiéis, e fornecemos análises detalhadas para otimização contínua. Deixe a AORKIA ativar o poder do digital para o seu negócio, transformando sua presença online em um motor de crescimento sustentável.',
      ctaText: 'Ative o Potencial Digital da Sua Marca. Descubra como a AORKIA pode construir uma Estratégia de Presença Digital que gera resultados reais para sua empresa.',
      image: '/image/digital.png'
    },
    {
      id: 'consultoria',
      title: 'Consultoria Estratégica',
      supportText: 'Visão. Estratégia. Execução.',
      subtitle: 'Desbloqueie o Potencial Máximo da Sua Empresa.',
      caseStudy: 'Sua empresa enfrenta desafios complexos que exigem uma nova perspectiva? Você precisa de um plano claro para escalar, inovar ou otimizar operações, mas não sabe por onde começar? Com a Consultoria Estratégica da AORKIA, você terá acesso a expertise de ponta para transformar desafios em oportunidades e alcançar seus objetivos de negócio com confiança.',
      activateContent: 'A AORKIA simplifica a complexidade da tomada de decisão estratégica, ativando insights e planos de ação que impulsionam o crescimento e a eficiência:',
      features: [
        {
          icon: 'ri-lightbulb-line',
          title: 'Diagnóstico e Análise Aprofundada',
          description: 'Identificamos os pontos críticos e as oportunidades ocultas em seus processos, tecnologia e mercado, fornecendo uma visão clara para a tomada de decisão.'
        },
        {
          icon: 'ri-rocket-line',
          title: 'Desenvolvimento de Estratégias Customizadas',
          description: 'Criamos planos de ação detalhados e personalizados para seus objetivos, seja para expansão, otimização de custos, inovação ou transformação digital.'
        },
        {
          icon: 'ri-hand-coin-line',
          title: 'Otimização de Processos e Eficiência Operacional',
          description: 'Redesenhe seus fluxos de trabalho, implemente as melhores práticas e utilize a tecnologia para maximizar a produtividade e reduzir desperdícios.'
        },
        {
          icon: 'ri-bar-chart-box-line',
          title: 'Gestão de Projetos e Acompanhamento de Resultados',
          description: 'Garantimos a execução eficaz das estratégias, monitorando o progresso e ajustando o curso para assegurar que seus objetivos sejam alcançados com sucesso.'
        }
      ],
      whyContent: 'Em um mercado em constante mudança, a capacidade de se adaptar e inovar é crucial. A Consultoria Estratégica oferece a visão externa e a expertise necessária para navegar por esses desafios e capitalizar novas oportunidades.',
      whyQuote: 'No ambiente de negócios dinâmico de hoje, a complexidade e a velocidade das mudanças exigem mais do que apenas experiência interna. A Consultoria Estratégica da AORKIA oferece uma visão externa imparcial e expertise especializada para identificar desafios, desvendar oportunidades e traçar um caminho claro para o sucesso. Seja para otimizar operações, inovar em produtos, expandir para novos mercados ou navegar por transformações digitais, ter um parceiro estratégico que compreende o cenário e sabe como ativar o potencial da sua empresa é fundamental para garantir um crescimento sustentável e uma vantagem competitiva duradoura.',
      howContent: 'A AORKIA é sua parceira estratégica para transformar desafios em resultados. Nosso modelo de "ativação" garante que você não apenas receba um plano, mas que ele seja implementado com sucesso, gerando valor real para sua empresa.',
      howQuote: 'Com a AORKIA, você ativa uma Consultoria Estratégica que vai além do diagnóstico. Nossa equipe de especialistas trabalha lado a lado com você para desenvolver e implementar soluções personalizadas, desde a otimização de processos e a adoção de novas tecnologias até a redefinição de modelos de negócio. Fornecemos insights acionáveis, metodologias comprovadas e acompanhamento contínuo para garantir que suas estratégias se traduzam em resultados tangíveis, como aumento de eficiência, redução de custos e crescimento de receita. Deixe a AORKIA ser o catalisador para o próximo nível de sucesso da sua empresa.',
      ctaText: 'Desbloqueie o Futuro da Sua Empresa. Descubra como a Consultoria Estratégica da AORKIA pode impulsionar seu crescimento e inovação.',
      image: '/image/consultoria.png'
    },
  ];

  return (
    <>
      <Head>
        <title>Soluções | AORKIA</title>
        <meta name="description" content="Descubra as soluções estratégicas da AORKIA para impulsionar a transformação digital e o crescimento do seu negócio." />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 com vídeo */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                Nossas Soluções
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white">
                Ative o Potencial da Sua <span className="text-primary">Empresa</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300">
                Descubra como a AORKIA pode impulsionar a transformação digital e o crescimento do seu negócio com soluções estratégicas e inovadoras.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex justify-center animate-bounce">
            <a 
              href="#solucoes-list" 
              onClick={(e) => scrollToSection(e, 'solucoes-list')}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção de Soluções */}
        <section id="solucoes-list" className="py-24 bg-black">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-5xl font-bold text-center mb-16 text-white">
              Nossas <span className="text-primary">Soluções</span>
            </h2>

            {/* Navegação lateral para desktop */}
            <div className="hidden md:flex flex-col w-64 fixed left-0 top-1/2 -translate-y-1/2 p-4 space-y-4">
              {solutions.map((solution) => (
                <a
                  key={solution.id}
                  href={`#${solution.id}`}
                  onClick={(e) => scrollToSection(e, solution.id)}
                  className="text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  {solution.title}
                </a>
              ))}
            </div>

            {/* Conteúdo das Soluções */}
            <div className="md:ml-64">
              {solutions.map((solution, index) => (
                <div 
                  key={solution.id} 
                  id={solution.id} 
                  className="mb-24 last:mb-0 p-8 rounded-lg"
                >
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                      <Image 
                        src={solution.image} 
                        alt={solution.title} 
                        width={600} 
                        height={400} 
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-primary text-2xl font-semibold mb-2">
                        {solution.supportText}
                      </h3>
                      <h2 className="text-4xl font-bold mb-6 text-white">
                        {solution.title}
                      </h2>
                      <p className="text-gray-300 text-lg mb-6">
                        {solution.subtitle}
                      </p>
                      <p className="text-gray-400 mb-8">
                        {solution.caseStudy}
                      </p>
                      <Link 
                        href="/contato" 
                        className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                      >
                        Fale com um especialista
                      </Link>
                    </div>
                  </div>

                  {/* Seção "Como Ativamos" */}
                  <div className="mt-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Como Ativamos</h3>
                    <p className="text-gray-300 text-lg mb-8">
                      {solution.activateContent}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-4">
                          <div className="text-primary text-3xl flex-shrink-0">
                            <i className={feature.icon}></i>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-2 text-white">
                              {feature.title}
                            </h4>
                            <p className="text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seção "Por Que" */}
                  <div className="mt-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Por Que</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      {solution.whyContent}
                    </p>
                    <blockquote className="border-l-4 border-primary pl-6 italic text-gray-300 text-lg">
                      {solution.whyQuote}
                    </blockquote>
                  </div>

                  {/* Seção "Como" */}
                  <div className="mt-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Como</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      {solution.howContent}
                    </p>
                    <blockquote className="border-l-4 border-primary pl-6 italic text-gray-300 text-lg">
                      {solution.howQuote}
                    </blockquote>
                  </div>

                  {/* CTA Final */}
                  <div className="mt-16 text-center">
                    <p className="text-xl font-semibold mb-6 text-white">
                      {solution.ctaText}
                    </p>
                    <Link 
                      href="/contato" 
                      className="inline-block bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-lg text-xl font-medium transition-colors"
                    >
                      Fale com um especialista
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

