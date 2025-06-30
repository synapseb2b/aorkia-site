import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function BackupSaaS() {
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
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const index = solutions.findIndex(sol => sol.id === sectionId);
    setSelectedSolutionIndex(index);
    setActivePart(null); // Resetar a parte ativa ao mudar de seção
  };

  const handlePartClick = (partId) => {
    setActivePart(partId);
  };

  useEffect(() => {
    if (selectorRef.current) {
      const activeElement = selectorRef.current.querySelector(`.solution-selector-item[data-id="${activeSection}"]`);
      if (activeElement) {
        selectorRef.current.scrollTo({
          left: activeElement.offsetLeft - (selectorRef.current.offsetWidth / 2) + (activeElement.offsetWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection]);

  const currentSolution = solutions[selectedSolutionIndex];

  return (
    <>
      <Head>
        <title>AORKIA | Backup SaaS Estratégico</title>
        <meta name="description" content="A AORKIA ativa Keepit, líder global em backup SaaS, para transformar a proteção de dados em um pilar inabalável de continuidade, governança e vantagem competitiva." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/video/Keepit_AOIRKIA.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up">
              Sua proteção de dados SaaS é uma ilusão.
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up animation-delay-200">
              Microsoft 365, Google Workspace e Salesforce não garantem a recuperação dos seus dados contra ransomware, erros humanos ou falhas internas. A responsabilidade final é sempre sua.
            </h2>
            <p className="text-lg md:text-xl mb-10 animate-fade-in-up animation-delay-400">
              A AORKIA ativa a Keepit, plataforma líder global em backup SaaS, para transformar a proteção de dados em um pilar inabalável de continuidade, governança e vantagem competitiva.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-600">
              <Link href="#risco-real" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Veja a Falha na Prática
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Agendar Demonstração Estratégica
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: O Risco Real por Trás da Proteção Nativa */}
        <section id="risco-real" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/backup_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              O Risco Real por Trás da Proteção Nativa
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Coluna 1: Ferramentas Nativas */}
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-red-300">
                <h3 className="text-2xl font-semibold text-red-600 mb-6">Ferramentas Nativas (Microsoft 365 / Google)</h3>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Proteção contra Ransomware:</strong> Inexistente. Se um ataque criptografa seus dados, a lixeira e as versões são igualmente comprometidas.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Retenção de Dados:</strong> Limitada a 30-90 dias. Dados críticos são permanentemente excluídos após esse período.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Recuperação em Massa:</strong> Lenta, manual e complexa. Impossível restaurar um ambiente inteiro rapidamente.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Soberania de Dados:</strong> Sem garantia de que seus dados de backup residem no Brasil.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Coluna 2: Keepit Ativado por AORKIA */}
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-green-300">
                <h3 className="text-2xl font-semibold text-green-600 mb-6">Keepit Ativado por AORKIA</h3>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Proteção Imutável com Air Gap:</strong> Backups isolados em nuvem independente, 100% à prova de ransomware.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Retenção Ilimitada e Configurável:</strong> Guarde seus dados pelo tempo que precisar, garantindo conformidade total.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Recuperação Instantânea e Granular:</strong> Restaure um e-mail, uma conta ou todo o ambiente em minutos.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Soberania de Dados no Brasil:</strong> Garantia contratual de que seus dados permanecem em território nacional.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bloco de Destaque Estatístico */}
            <div className="mt-16 bg-blue-700 text-white p-8 rounded-lg shadow-xl text-center">
              <h3 className="text-3xl font-bold mb-4">A Responsabilidade é Sua. A Microsoft Confirma.</h3>
              <p className="text-xl italic leading-relaxed">
                "Recomendamos que você faça backup regularmente do Seu Conteúdo e dos Dados armazenados nos Serviços... Em caso de uma interrupção, você não poderá recuperar Seu Conteúdo nem os Dados que você tinha armazenado."
              </p>
              <p className="text-sm mt-4">Fonte: Termos de Serviço da Microsoft</p>
            </div>
          </div>
        </section>

        {/* Section 3: Não é só um Backup. É a Resiliência que salva o seu negócio. */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/backup_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
              Não é só um Backup. É a Resiliência que salva o seu negócio.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Diante do risco iminente de perda de dados em nuvem e das pesadas multas da LGPD, uma simples ferramenta de backup é insuficiente. A resposta precisa ser uma estratégia.
              A AORKIA entrega essa estratégia completa: ativamos a Keepit e implementamos seu backup imutável, com soberania de dados no Brasil, como um pilar fundamental de continuidade e governança. O resultado é a garantia de recuperação instantânea e a tranquilidade da conformidade total para o seu negócio.
            </p>
            {/* Diagrama de Valor */}
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12 mb-12">
              <Image src="/icon/keepit_logo_aorkia.png" alt="Keepit Logo" width={150} height={50} />
              <span className="text-4xl text-blue-600">+</span>
              <Image src="/logo/logo_aorkia_color_transparent.png" alt="AORKIA Logo" width={150} height={50} />
              <span className="text-4xl text-blue-600">→</span>
              <div className="flex flex-col items-center">
                <i className="ri-shield-check-fill text-6xl text-green-500 mb-2"></i>
                <p className="text-xl font-semibold text-gray-800">Continuidade e Governança</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Os Pilares da Proteção Real */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/backup_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Os Pilares da Proteção Real
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 group">
                <div className="text-blue-600 group-hover:text-blue-800 mb-4 text-5xl text-center">
                  <i className="ri-shield-keyhole-line"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Imutabilidade e Air Gap Verdadeiro</h3>
                <p className="text-gray-700 mb-4">
                  Seus backups são armazenados em uma nuvem privada e independente, com <strong className="font-bold">tecnologia verificada por blockchain</strong> que garante a imutabilidade. Por estarem isolados da sua rede (Air Gap), nenhum ataque de ransomware pode alcançá-los ou corrompê-los.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong className="font-semibold">O que significa para o negócio:</strong> Risco de paralisação por ransomware é mitigado. Em caso de ataque, a recuperação dos seus dados é 100% garantida, protegendo a receita e a reputação da empresa.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 group">
                <div className="text-blue-600 group-hover:text-blue-800 mb-4 text-5xl text-center">
                  <i className="ri-restart-line"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Restauração Granular e Instantânea</h3>
                <p className="text-gray-700 mb-4">
                  Uma interface de busca inteligente permite localizar e restaurar qualquer item – de um único e-mail a uma conta inteira do Salesforce – em minutos, sem scripts complexos.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong className="font-semibold">O que significa para o negócio:</strong> O tempo de inatividade (downtime) é drasticamente reduzido. A produtividade da equipe é mantida, pois a recuperação de um erro humano não paralisa a operação.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 group">
                <div className="text-blue-600 group-hover:text-blue-800 mb-4 text-5xl text-center">
                  <i className="ri-map-pin-line"></i> {/* Ícone de mapa do Brasil com selo de conformidade */}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Soberania de Dados e Conformidade</h3>
                <p className="text-gray-700 mb-4">
                  Garantia de que seus dados residem em uma nuvem privada e independente, com duas cópias replicadas em datacenters distintos localizados em São Paulo. Isso assegura soberania total dos dados em território nacional, atendendo plenamente aos requisitos mais rigorosos da LGPD.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong className="font-semibold">O que significa para o negócio:</strong> Risco de multas por não conformidade é eliminado. Simplifica auditorias e garante que a empresa cumpra as regulamentações de proteção de dados mais rigorosas.
                </p>
              </div>
            </div>

            {/* Grid de Plataformas Suportadas */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Proteção nativa para todo o seu ecossistema SaaS.</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
                <Image src="/icon/microsoft_365.png" alt="Microsoft 365 Logo" width={120} height={40} />
                <Image src="/icon/entra_id.png" alt="Microsoft Entra ID Logo" width={120} height={40} />
                <Image src="/icon/google.png" alt="Google Workspace Logo" width={120} height={40} />
                <Image src="/icon/salesforce.png" alt="Salesforce Logo" width={120} height={40} />
                <Image src="/icon/azure_devops.png" alt="Microsoft Azure DevOps Logo" width={120} height={40} />
                <Image src="/icon/microsoft_power_platform.png" alt="Microsoft Power Platform Logo" width={120} height={40} />
                <Image src="/icon/microsoft_dynamics_365.png" alt="Microsoft Dynamics 365 Logo" width={120} height={40} />
                <Image src="/icon/zendesk.png" alt="Zendesk Logo" width={120} height={40} />
                <Image src="/icon/atlassian_jira.png" alt="Atlassian Jira Logo" width={120} height={40} />
                <Image src="/icon/confluence.png" alt="Confluence Cloud Logo" width={120} height={40} />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3eCkFDVBZTyuw3x99mtoOR25plYf_6OJEsz6U-MrNxcy0weuGp2jaXR72-XEFBgrlMi0tpHtgl?gv=true" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
                Agendar Demo de Recuperação (15 min)
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Construído para os Desafios do Seu Negócio */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/backup_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Uma Solução. Respostas para Cada Desafio Estratégico.
            </h2>
            {/* Tabs Component */}
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <button
                  className={`px-6 py-3 text-lg font-semibold rounded-t-lg ${activePart === 'continuidade' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => handlePartClick('continuidade')}
                >
                  Continuidade e Resiliência Operacional
                </button>
                <button
                  className={`px-6 py-3 text-lg font-semibold rounded-t-lg ${activePart === 'seguranca' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => handlePartClick('seguranca')}
                >
                  Segurança da Arquitetura e Conformidade Técnica
                </button>
                <button
                  className={`px-6 py-3 text-lg font-semibold rounded-t-lg ${activePart === 'governanca' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => handlePartClick('governanca')}
                >
                  Governança Financeira e Risco Legal
                </button>
              </div>

              <div className="bg-white p-8 rounded-b-lg shadow-lg border border-gray-200">
                {activePart === 'continuidade' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Para a Continuidade e Resiliência Operacional</h3>
                    <p className="text-gray-700 mb-4">
                      <strong className="font-semibold">Desafio:</strong> Como garantir a continuidade do negócio diante de um ataque de ransomware ou erro humano crítico?
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold">Solução AORKIA:</strong> Entregamos um plano de recuperação de desastres auditável e funcional, com backups imutáveis que garantem a restauração completa e rápida, protegendo seus KPIs de tempo de inatividade e risco.
                    </p>
                  </div>
                )}
                {activePart === 'seguranca' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Para a Segurança da Arquitetura e Conformidade Técnica</h3>
                    <p className="text-gray-700 mb-4">
                      <strong className="font-semibold">Desafio:</strong> Como validar a integridade e o isolamento do backup, atendendo a frameworks como NIST e ISO 27001?
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold">Solução AORKIA:</strong> Ativamos uma arquitetura com Air Gap verdadeiro, imutabilidade comprovada por checksums e todas as certificações necessárias para validar sua postura de segurança e conformidade técnica.
                    </p>
                  </div>
                )}
                {activePart === 'governanca' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Para a Governança Financeira e Risco Legal</h3>
                    <p className="text-gray-700 mb-4">
                      <strong className="font-semibold">Desafio:</strong> Como justificar o investimento e garantir conformidade com a LGPD para mitigar riscos de multas e perdas financeiras?
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold">Solução AORKIA:</strong> Oferecemos uma solução com TCO previsível que transforma um custo de seguro em vantagem competitiva, garantindo soberania de dados e conformidade total para eliminar o risco de litígios e sanções.
                    </p>
                  </div>
                )}
                {!activePart && (
                  <div className="text-center text-gray-600">
                    Selecione uma aba para ver os detalhes.
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3eCkFDVBZTyuw3x99mtoOR25plYf_6OJEsz6U-MrNxcy0weuGp2jaXR72-XEFBgrlMi0tpHtgl?gv=true" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
                Agendar Demo de Recuperação (15 min)
              </a>
            </div>
          </div>
        </section>

        {/* Section 6: Confiança Validada pelo Mercado Global */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/backup_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
              Confiança Validada pelo Mercado Global
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-700 mb-12">
              Empresas no Brasil e no mundo confiam na tecnologia que ativamos. São mais de 15.000 empresas em 74 países.
            </p>

            {/* Logos de Clientes */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Clientes Globais</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center mb-12">
                <Image src="/icon/porsche.png" alt="Porsche Logo" width={150} height={50} />
                <Image src="/icon/oxford.png" alt="Oxford University Logo" width={150} height={50} />
                <Image src="/icon/alpla.png" alt="Alpla Logo" width={150} height={50} />
                <Image src="/icon/hdi.png" alt="HDI Logo" width={150} height={50} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Clientes Nacionais</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
                <Image src="/icon/arezzo.png" alt="Arezzo Logo" width={150} height={50} />
                <Image src="/icon/banco_bv.png" alt="Banco BV Logo" width={150} height={50} />
                <Image src="/icon/db_diagnosticos.png" alt="DB Diagnósticos Logo" width={150} height={50} />
                <Image src="/icon/itausa.png" alt="ITAUSA Logo" width={150} height={50} />
              </div>
            </div>

            {/* Depoimentos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="italic text-gray-700 mb-4">
                  "A Keepit nos permite escalar nosso negócio facilmente, adicionando novos usuários do Microsoft 365 sem custos ocultos."
                </p>
                <p className="font-semibold text-gray-800">Stefan Toefferl</p>
                <p className="text-sm text-gray-600">Engenheiro Sênior de Data Center, ALPLA</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="italic text-gray-700 mb-4">
                  "Estávamos procurando uma solução SaaS e não queríamos fazer o backup de todos os dados localmente (on-premise). O backup em nuvem da Keepit, simples e fácil de usar, entregou o que estávamos procurando."
                </p>
                <p className="font-semibold text-gray-800">Michael Bojko</p>
                <p className="text-sm text-gray-600">Engenheiro de Sistemas na Porsche Informatik</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="italic text-gray-700 mb-4">
                  "Temos as mais altas necessidades de proteção de dados, pois lidamos com dados ativos, dados pessoais para seguros de vida e seguros privados. Temos um intervalo de tempo muito curto para 'voltar à ativa' em caso de um desastre."
                </p>
                <p className="font-semibold text-gray-800">Philipp Poppe</p>
                <p className="text-sm text-gray-600">HDI Cloud, Gerente de Produto de Serviços Essenciais</p>
              </div>
            </div>

            {/* Bloco de Certificações e Whitepapers */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-inner border border-blue-200 text-center">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Certificações e Recursos</h3>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="https://www.keepit.com/trust-center/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  Keepit Trust Centers
                </a>
                <a href="https://www.keepit.com/press/iso-27001-security/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  ISO 27001
                </a>
                <a href="https://www.keepit.com/trust-center/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  ISAE 3402
                </a>
                <a href="https://www.keepit.com/resources/dora-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  DORA
                </a>
              </div>
              <a href="/documents/quando_o_desastre_acontece:_recuperacao_para_plataformas_saas.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg inline-flex items-center">
                <i className="ri-download-line mr-2"></i> Download eGuide: Quando o Desastre Acontece
              </a>
            </div>
          </div>
        </section>

        {/* Section 7: O que o Mercado Diz: Análise do Gartner Peer Insights. */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/backup_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
              O que o Mercado Diz: Análise do Gartner Peer Insights.
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Na AORKIA, nossa curadoria se baseia em dados. Escolhemos parceiros que são líderes validados não por analistas, mas pelos próprios usuários. Os dados do Gartner Peer Insights de Junho de 2025 confirmam por que a Keepit é a nossa escolha para backup SaaS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Bloco 1 - Confiança e Facilidade de Uso */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Recomendação e Implementação Simplificada</h3>
                <p className="text-5xl font-bold text-blue-600 mb-2">93%</p>
                <p className="text-gray-700 mb-4">dos usuários que avaliaram a plataforma a recomendam.</p>
                <p className="text-5xl font-bold text-blue-600 mb-2">4.7 / 5.0</p>
                <p className="text-gray-700 mb-4">em facilidade de Implementação, Administração e Manutenção.</p>
                <p className="text-gray-600 text-sm italic">
                  Uma plataforma aclamada pelo mercado e projetada para ser gerenciada com máxima eficiência pela sua equipe de TI.
                </p>
              </div>

              {/* Bloco 2 - Vantagem Competitiva Clara */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Fatores de Decisão: Por que os Clientes Escolhem Keepit?</h3>
                <p className="text-5xl font-bold text-blue-600 mb-2">+7.6%</p>
                <p className="text-gray-700 mb-4">em Custo Geral, superando a média do mercado e oferecendo um TCO (Custo Total de Propriedade) mais vantajoso.</p>
                <p className="text-5xl font-bold text-blue-600 mb-2">+5.4%</p>
                <p className="text-gray-700 mb-4">em Funcionalidade e Performance do Produto em comparação com a média de mercado.</p>
                <p className="text-gray-600 text-sm italic">
                  A decisão é baseada em valor real: uma plataforma com performance superior e custo mais eficiente que as alternativas.
                </p>
              </div>

              {/* Bloco 3 - O Diferencial AORKIA */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Onde a AORKIA Transforma a Melhor Tecnologia na Solução Completa</h3>
                <p className="text-gray-700 mb-4">
                  A mesma análise do Gartner mostra que, embora a tecnologia seja superior, a "Expertise em Serviços" não é o principal fator de decisão para a maioria dos clientes. É aqui que a AORKIA se destaca. Não apenas ativamos a Keepit, mas garantimos que ela seja implementada e gerida com a expertise que seu negócio precisa para extrair o máximo valor e transformar o backup em um ativo estratégico.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Nossa experiência e suporte contínuo garantem que você não apenas tenha a melhor tecnologia, mas também a melhor estratégia para proteção de dados.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3eCkFDVBZTyuw3x99mtoOR25plYf_6OJEsz6U-MrNxcy0weuGp2jaXR72-XEFBgrlMi0tpHtgl?gv=true" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
                Agendar Demo de Recuperação (15 min)
              </a>
            </div>
          </div>
        </section>

        {/* Pre-Footer Section */}
        <section className="bg-blue-800 text-white py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para Blindar Seus Dados SaaS?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Não espere um desastre acontecer. Ative a proteção imutável e a soberania de dados que seu negócio precisa com a AORKIA e Keepit.
            </p>
            <Link href="/contato" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-lg">
              Fale com um Especialista
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}


