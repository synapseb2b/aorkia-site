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
      image: '/images/backup.jpeg',
      logo: '/images/keepit_logo_aorkia.svg'
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
      image: '/images/bordas.png'
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
      image: '/images/dspm.jpeg'
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
      image: '/images/receitas.jpeg'
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
      image: '/images/digital.jpeg'
    }
  ];

  return (
    <>
      <Head>
        <title>Soluções | AORKIA</title>
        <meta name="description" content="Explore como a AORKIA ativa tecnologia de ponta para transformar seus desafios complexos em crescimento rentável e sustentável." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'hero' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/images/solucoesespecializadas.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'hero' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight transition-colors duration-500 ${
                activeSection === 'hero' ? 'text-white' : 'text-black'
              }`}>
                Nossas Soluções <br className="hidden md:block" />
                Estratégicas
              </h1>
              <p className={`text-xl md:text-2xl max-w-3xl mb-12 transition-colors duration-500 ${
                activeSection === 'hero' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Explore como a AORKIA ativa tecnologia de ponta para transformar seus desafios complexos em crescimento rentável e sustentável.
              </p>
              
              {/* Botão para rolar para as soluções */}
              <button 
                onClick={(e) => scrollToSection(e, 'solutions')}
                className={`text-lg font-medium px-8 py-3 border transition-all duration-500 ${
                  activeSection === 'hero' 
                  ? 'text-white border-white hover:bg-white hover:text-black' 
                  : 'text-black border-black hover:bg-black hover:text-white'
                }`}
                onMouseEnter={() => setActiveSection('hero')}
                onMouseLeave={() => setActiveSection(null)}
              >
                Explorar soluções
              </button>
            </div>
          </div>
        </section>

        {/* Seção de Soluções - Estilo Jam3 */}
        <section id="solutions" ref={solutionsRef} className="relative">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              id={solution.id}
              className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
              onMouseEnter={() => setActiveSection(solution.id)}
              onMouseLeave={() => setActiveSection(null)}
            >
              {/* Background Image (aparece apenas no hover) */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                  activeSection === solution.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${solution.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Background Color (aparece quando não está em hover) */}
              <div 
                className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                  activeSection === solution.id ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                      <p className={`text-lg mb-2 transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {solution.supportText}
                      </p>
                      <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-white' : 'text-black'
                      }`}>
                        {solution.title}
                      </h2>
                      <h3 className={`text-2xl md:text-3xl font-medium mb-8 transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                      }`}>
                        {solution.subtitle}
                      </h3>
                      {solution.logo && (
                        <div className="mt-4 mb-8">
                          <img 
                            src={solution.logo} 
                            alt="Logo" 
                            className="h-12 w-auto"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className={`text-xl leading-relaxed transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {solution.caseStudy}
                      </p>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="mb-24">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-12 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      Ative e Escale {solution.title}
                    </h3>
                    <p className={`text-xl mb-12 max-w-4xl transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.activateContent}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex">
                          <div className={`text-4xl mr-6 transition-colors duration-500 ${
                            activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                          }`}>
                            <i className={feature.icon}></i>
                          </div>
                          <div>
                            <h4 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                              activeSection === solution.id ? 'text-white' : 'text-black'
                            }`}>
                              {feature.title}
                            </h4>
                            <p className={`transition-colors duration-500 ${
                              activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Section */}
                  <div className="mb-24">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      Por Que {solution.id === 'backup' ? 'Fazer Backup dos Seus Dados SaaS?' : 
                              solution.id === 'bordas' ? 'Executar IA na Borda?' :
                              solution.id === 'dspm' ? 'Priorizar a Segurança da Postura dos Seus Dados (DSPM)?' :
                              solution.id === 'receitas' ? 'Investir em Inteligência de Receita com IA?' :
                              'Priorizar uma Estratégia de Presença Digital?'}
                    </h3>
                    <p className={`text-xl mb-8 max-w-4xl transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.whyContent}
                    </p>
                    <div className={`p-8 border-l-4 max-w-4xl transition-all duration-500 ${
                      activeSection === solution.id ? 'border-primary bg-black/30' : 'border-blue-700 bg-gray-100'
                    }`}>
                      <p className={`text-lg italic transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        "{solution.whyQuote}"
                      </p>
                    </div>
                  </div>

                  {/* How AORKIA Helps Section */}
                  <div className="mb-24">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      Como a AORKIA Ajuda Você com {solution.title}
                    </h3>
                    <p className={`text-xl mb-8 max-w-4xl transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.howContent}
                    </p>
                    <div className={`p-8 border-l-4 max-w-4xl transition-all duration-500 ${
                      activeSection === solution.id ? 'border-primary bg-black/30' : 'border-blue-700 bg-gray-100'
                    }`}>
                      <p className={`text-lg italic transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        "{solution.howQuote}"
                      </p>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="text-center max-w-4xl mx-auto">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      Comece com a AORKIA
                    </h3>
                    <p className={`text-xl mb-12 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.ctaText}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                      <Link 
                        href="/contato" 
                        className={`px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-500 ${
                          activeSection === solution.id 
                          ? 'bg-primary hover:bg-primary/90 text-white' 
                          : 'bg-blue-700 hover:bg-blue-800 text-white'
                        }`}
                      >
                        Agendar Demonstração
                      </Link>
                      <Link 
                        href="/contato" 
                        className={`px-8 py-4 text-lg font-medium rounded-lg border transition-colors duration-500 ${
                          activeSection === solution.id 
                          ? 'border-white text-white hover:bg-white hover:text-black' 
                          : 'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'
                        }`}
                      >
                        Solicitar Blueprint Técnico
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Seção Formulário - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:</label>
                    <div className="space-y-3">
                      {solutions.map((solution) => (
                        <div key={solution.id} className="flex items-center">
                          <input 
                            type="radio" 
                            id={solution.id} 
                            name="focus" 
                            className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                          />
                          <label htmlFor={solution.id} className="ml-3 text-gray-300">
                            {solution.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Solicitar Contato
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
