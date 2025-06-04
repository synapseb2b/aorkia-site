import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Solucoes() {
  const [interfaceMode, setInterfaceMode] = useState('intelligent'); // 'intelligent' ou 'traditional'
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showTyping, setShowTyping] = useState(false);
  const [viewMode, setViewMode] = useState('70-30'); // '70-30' ou '30-70'
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Bem-vindo à AORKIA. Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:' // Texto atualizado conforme pasted_content.txt
    }
  ]);
  
  // Referência para o container de mensagens para scroll automático
  const messagesEndRef = useRef(null);
  const chatMessagesRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Prevenir rolagem automática quando a página carrega
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

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

  // Efeito para rolar para o final das mensagens quando novas mensagens são adicionadas
  useEffect(() => {
    if (messagesEndRef.current && chatMessagesRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  // Função para lidar com erro genérico
  const handleError = () => {
    setShowTyping(false);
    setMessages(prev => [...prev, {
      type: 'ai',
      content: 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente ou entre em contato conosco diretamente.'
    }]);
  };

  // Função para lidar com a seleção de área crítica
  const handleAreaSelection = (area) => {
    try {
      setSelectedArea(area);
      setShowTyping(true);
      setMessages(prev => [...prev, { type: 'user', content: area }]);
      
      setTimeout(() => {
        try {
          setShowTyping(false);
          setMessages(prev => [...prev, 
            { 
              type: 'ai', 
              content: 'Compreendido. Agora, nos ajude a compreender melhor o seu papel na organização:' // Texto atualizado
            }
          ]);
          setCurrentStep(1);
        } catch (error) {
          console.error("Erro ao processar resposta da IA (Passo 1):", error);
          handleError();
        }
      }, 1500);
    } catch (error) {
      console.error("Erro ao selecionar área:", error);
      handleError();
    }
  };

  // Função para lidar com a seleção de perfil
  const handleProfileSelection = (profile) => {
    try {
      setSelectedProfile(profile);
      setShowTyping(true);
      setMessages(prev => [...prev, { type: 'user', content: profile }]);
      
      setTimeout(() => {
        try {
          setShowTyping(false);
          let diagnosis = getDiagnosis(selectedArea, profile);
          
          setMessages(prev => [...prev, 
            { 
              type: 'ai', 
              content: diagnosis.message // Mensagem dinâmica baseada na seleção
            },
            {
              type: 'ai',
              content: 'Para o próximo passo, o que seria mais valioso para você?' // Pergunta após diagnóstico
            }
          ]);
          setCurrentStep(2);
          
          // Muda para o modo 30-70 após o diagnóstico
          setTimeout(() => {
            setViewMode('30-70');
          }, 1000);
        } catch (error) {
          console.error("Erro ao processar diagnóstico:", error);
          handleError();
        }
      }, 2000);
    } catch (error) {
      console.error("Erro ao selecionar perfil:", error);
      handleError();
    }
  };

  // Função para lidar com a seleção da ação final
  const handleActionSelection = (action) => {
    try {
      setShowTyping(true);
      setMessages(prev => [...prev, { type: 'user', content: action }]);

      setTimeout(() => {
        try {
          setShowTyping(false);
          let responseMessage = '';
          if (action === 'Blueprint Técnico Exclusivo') {
            responseMessage = 'Excelente escolha! Para receber seu Blueprint Técnico Exclusivo e personalizado, por favor, preencha nosso formulário de contato. Um de nossos especialistas em ativação de soluções retornará em até 24 horas úteis. [Link para Formulário]'; // Texto atualizado
          } else if (action === 'Conversa Estratégica') {
            responseMessage = 'Ótima decisão! Nossa Conversa Estratégica é uma sessão de consultoria exclusiva com um de nossos especialistas seniores. Discutiremos em profundidade os desafios específicos da sua organização e como nossas soluções podem endereçá-los. Para agendar sua Conversa Estratégica, por favor, preencha nosso formulário de contato. Um de nossos especialistas entrará em contato em até 24 horas úteis para confirmar os próximos passos. [Link para Formulário]'; // Texto atualizado
          }
          setMessages(prev => [...prev, { type: 'ai', content: responseMessage }]);
          setCurrentStep(3); // Finaliza a interação guiada
        } catch (error) {
          console.error("Erro ao processar ação final:", error);
          handleError();
        }
      }, 1500);
    } catch (error) {
      console.error("Erro ao selecionar ação:", error);
      handleError();
    }
  };

  // Função para lidar com mensagem digitada pelo usuário
  const handleUserMessageSubmit = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    try {
      const messageToSend = userMessage;
      setUserMessage(''); // Limpa o input
      setShowTyping(true);
      setMessages(prev => [...prev, { type: 'user', content: messageToSend }]);

      setTimeout(() => {
        try {
          setShowTyping(false);
          setMessages(prev => [...prev, {
            type: 'ai',
            content: 'Entendi sua mensagem. Para que possamos lhe atender da melhor forma e direcionar sua consulta ao especialista adequado, por favor, preencha nosso formulário de contato e retornaremos em breve: [Apresentar Link para Formulário AORKIA]' // Texto atualizado
          }]);
          setCurrentStep(3); // Considera finalizada a interação guiada
        } catch (error) {
          console.error("Erro ao processar mensagem livre:", error);
          handleError();
        }
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar mensagem livre:", error);
      handleError();
    }
  };

  // Função para obter diagnóstico personalizado (Textos atualizados conforme pasted_content.txt)
  const getDiagnosis = (area, profile) => {
    const diagnoses = {
      'Backup SaaS Estratégico': {
        'Liderança Executiva / Estratégica': {
          message: 'Como líder, você exige confiança absoluta na resiliência dos seus dados críticos e na governança de sua empresa. A AORKIA ativa o Backup SaaS Estratégico da Keepit, líder global, assegurando proteção robusta contra falhas e ransomware. Elevamos esta proteção com uma camada de dashboards estratégicos e insights acionáveis, transformando seus dados de backup em ativos de inteligência para suas decisões de negócio.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Gestão Técnica / Operacional': {
          message: 'Sua prioridade como gestor técnico é garantir estabilidade, visibilidade e rastreabilidade dos backups, com mínimo esforço operacional. A AORKIA ativa para você uma solução de Backup SaaS imutável, totalmente auditável e automatizada. Facilitamos sua gestão e conformidade contínua com dashboards integrados e trilhas de auditoria detalhadas, implementados rapidamente pela nossa expertise.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Especialista Técnico': {
          message: 'Como especialista, você busca configurações avançadas, testes de recuperação confiáveis e dados de backup íntegros e acessíveis. Com a AORKIA, você tem acesso a uma camada técnica robusta da Keepit: políticas de backup e retenção altamente configuráveis, recuperação granular e a garantia de rastreabilidade total dos seus dados SaaS.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Outro': {
          message: 'Compreendemos seu interesse em Backup SaaS Estratégico. Para fornecer a melhor orientação, recomendamos uma análise detalhada do seu cenário específico. Nossos especialistas podem ajudar a definir a estratégia ideal para proteger seus dados SaaS.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        }
      },
      'Operações de Bordas Inteligentes': {
        'Liderança Executiva / Estratégica': {
          message: 'Como executivo, você busca transformar sua infraestrutura em um motor de performance e inovação, não um passivo oculto. A AORKIA ativa Operações de Bordas Inteligentes, com diagnóstico profundo e design tático, convertendo seus ambientes de borda – híbridos ou legados – em estruturas ágeis, resilientes e prontas para o futuro.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Gestão Técnica / Operacional': {
          message: 'Como gestor, você enfrenta ambientes de borda complexos, buscando otimizar a eficiência e a escalabilidade. A AORKIA ativa Operações de Bordas Inteligentes por meio de curadoria tecnológica e um redesenho estratégico. Fornecemos blueprint técnico, plano de transição seguro e governança contínua para suas operações de borda.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Especialista Técnico': {
          message: 'Como especialista, você precisa implementar e gerenciar modelos de IA na borda com performance, escalabilidade e confiabilidade. A AORKIA ativa plataformas Edge AI robustas, fornecendo diagnóstico técnico preciso, documentação detalhada e suporte em provas de conceito (PoCs) para garantir a viabilidade e o sucesso de seus projetos de IA na borda.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Outro': {
          message: 'Entendemos seu foco em Operações de Bordas Inteligentes. Para um direcionamento preciso, sugerimos uma análise aprofundada do seu ambiente e objetivos. Nossos especialistas podem desenhar a solução ideal para ativar a inteligência na borda da sua operação.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        }
      },
      'Segurança para Operações Críticas': {
        'Liderança Executiva / Estratégica': {
          message: 'Como líder, sua prioridade é ter uma postura de segurança de dados contínua e auditável para proteger ativos críticos e garantir conformidade. A AORKIA ativa uma plataforma DSPM líder de mercado, transformando a segurança de dados em um serviço gerenciado com prevenção contextualizada a riscos, resposta automatizada e conformidade contínua.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Gestão Técnica / Operacional': {
          message: 'Como gestor, seu desafio é manter visibilidade unificada dos dados, garantir correção automatizada de riscos e adesão a normas internacionais. A AORKIA ativa plataformas DSPM de ponta que se integram ao seu ecossistema de segurança, fornecendo automação inteligente para uma segurança de dados proativa e estruturada.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Especialista Técnico': {
          message: 'Como especialista, você precisa de visibilidade profunda sobre os dados, políticas de segurança adaptáveis e ferramentas que garantam conformidade em tempo real em ambientes complexos. A AORKIA ativa plataformas DSPM que oferecem integração robusta com seu stack tecnológico e capacidade de atender às mais rigorosas exigências regulatórias e de segurança de dados.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Outro': {
          message: 'Percebemos seu interesse em Segurança para Operações Críticas. Para oferecer a solução mais eficaz, precisamos entender melhor seus desafios de segurança e conformidade. Nossos especialistas estão prontos para uma análise detalhada.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        }
      },
      'Plataforma de Inteligência de Receita com IA': {
        'Liderança Executiva / Estratégica': {
          message: 'Como executivo, você busca previsibilidade de receita, otimização dos processos de vendas e uma visão 360º do cliente. A AORKIA ativa a Plataforma de Inteligência de Receita com IA, que unifica suas equipes de marketing, vendas e CS em um sistema operacional de receita coeso, escalável e focado em performance.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Gestão Técnica / Operacional': {
          message: 'Como gestor de RevOps/Vendas, seu desafio é eliminar silos de dados, automatizar fluxos de trabalho manuais e conectar as informações do cliente de ponta a ponta. A AORKIA ativa a Plataforma de Inteligência de Receita com IA, garantindo integração sistêmica e automação inteligente para orquestrar fluxos de receita coordenados, eficientes e previsíveis.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Especialista Técnico': {
          message: 'Como especialista de vendas ou analista, você precisa de insights confiáveis, ferramentas que economizem tempo e dados precisos para personalizar cada interação com o cliente. A AORKIA ativa a Plataforma de Inteligência de Receita com IA, fornecendo uma base de dados unificada, automação de tarefas rotineiras e inteligência preditiva para você focar no que realmente importa: fechar mais negócios e construir relacionamentos duradouros.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Outro': {
          message: 'Notamos seu interesse na Plataforma de Inteligência de Receita com IA. Para maximizar seu potencial de crescimento, é essencial entender seus processos comerciais atuais. Agende uma conversa com nossos especialistas para um diagnóstico preciso.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        }
      },
      'Estratégia de Presença Digital AORKIA': {
        'Liderança Executiva / Estratégica': {
          message: 'Como líder executivo, você exige que o investimento em presença digital se traduza em crescimento palpável, fortalecimento da marca e uma clara diferenciação no mercado. Sua visão precisa de uma execução digital que vá além do superficial e entregue resultados estratégicos. A AORKIA desenvolve sua Estratégia de Presença Digital com um olhar minucioso e orientado a negócios, alinhando cada ponto de contato online – do seu website e conteúdo à forma como suas soluções são apresentadas – aos seus objetivos de receita e posicionamento de mercado, garantindo impacto real e mensurável.',
          recommendations: ['Diagnóstico Estratégico da sua Presença Digital AORKIA', 'Sessão de Alinhamento Estratégico'] // Ações específicas para este produto
        },
        'Gestão Técnica / Operacional': {
          message: 'Como gestor, seu desafio é orquestrar uma presença digital que seja coesa, performática e que realmente converta visitantes em clientes, superando a fragmentação de canais, otimizando a jornada do cliente e medindo o ROI de forma eficaz. A AORKIA estrutura e orienta a implementação da sua Estratégia de Presença Digital, detalhando desde a arquitetura da informação, experiência do usuário (UX) e estratégia de conteúdo otimizado (SEO), até a integração de ferramentas e processos, assegurando que cada elemento online contribua para seus KPIs e facilite a gestão e a geração de leads qualificados.',
          recommendations: ['Diagnóstico Estratégico da sua Presença Digital AORKIA', 'Sessão de Alinhamento Estratégico']
        },
        'Especialista Técnico': {
          message: 'Como especialista, você busca direcionamento claro e as melhores práticas para que seu trabalho técnico em SEO, conteúdo, design ou análise de dados maximize o impacto da presença digital da empresa. A AORKIA fornece a Estratégia de Presença Digital que serve como um guia robusto para sua atuação, oferecendo frameworks validados, insights baseados em dados e um plano coeso. Assim, suas habilidades técnicas são potencializadas e integradas a uma visão de negócios vencedora, garantindo que sua execução detalhista contribua diretamente para os resultados.',
          recommendations: ['Diagnóstico Estratégico da sua Presença Digital AORKIA', 'Sessão de Alinhamento Estratégico']
        },
        'Outro': {
          message: 'Seu interesse na Estratégia de Presença Digital AORKIA é claro. Para definir o melhor caminho, precisamos avaliar sua presença online atual e seus objetivos de negócio. Nossos estrategistas digitais podem fornecer um diagnóstico completo.',
          recommendations: ['Diagnóstico Estratégico da sua Presença Digital AORKIA', 'Sessão de Alinhamento Estratégico']
        }
      }
    };

    // Retorna a mensagem e recomendações ou um fallback
    return diagnoses[area]?.[profile] || {
      message: 'Para fornecer a melhor recomendação, precisamos entender melhor seu contexto. Por favor, entre em contato conosco.',
      recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
    };
  };

  // Opções para cada etapa
  const options = {
    0: ['Backup SaaS Estratégico', 'Operações de Bordas Inteligentes', 'Segurança para Operações Críticas', 'Plataforma de Inteligência de Receita com IA', 'Estratégia de Presença Digital AORKIA'],
    1: ['Liderança Executiva / Estratégica', 'Gestão Técnica / Operacional', 'Especialista Técnico', 'Outro'],
    2: selectedArea === 'Estratégia de Presença Digital AORKIA' 
       ? ['Diagnóstico Estratégico da sua Presença Digital AORKIA', 'Sessão de Alinhamento Estratégico'] 
       : ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
  };

  // Handlers para cada etapa
  const handlers = {
    0: handleAreaSelection,
    1: handleProfileSelection,
    2: handleActionSelection
  };

  // Conteúdo para a Navegação Tradicional (Textos atualizados conforme pasted_content.txt)
  const traditionalContent = {
    headline: 'Nossas Soluções Estratégicas',
    subheadline: 'Explore como a AORKIA ativa tecnologia de ponta para transformar seus desafios complexos em crescimento rentável e sustentável.',
    sections: [
      {
        id: 'backup',
        title: 'Backup SaaS Estratégico: Seus Dados na Nuvem, Realmente Protegidos.',
        content: [
          {
            type: 'paragraph',
            text: 'Perder dados críticos de Plataformas SaaS como Microsoft 365, Google Workspace e Salesforce por um simples erro humano ou um ataque de ransomware pode paralisar sua operação e gerar custos enormes. Com o Backup SaaS Estratégico ativado pela AORKIA, você recupera desde um único e-mail até ambientes inteiros rapidamente, garantindo a continuidade do seu negócio e a tranquilidade da sua equipe.'
          },
          {
            type: 'subheadline',
            text: 'Ative e Escale Backup SaaS Estratégico'
          },
          {
            type: 'list',
            items: [
              { icon: 'ri-shield-check-line', title: 'Proteção Completa e Imutável Contra Ameaças', description: 'Seus dados SaaS são copiados para uma nuvem independente e segura, com backups 100% imutáveis que protegem contra ransomware, exclusões acidentais e corrupção.' },
              { icon: 'ri-history-line', title: 'Recuperação Rápida e Granular a Qualquer Momento', description: 'Restaure exatamente o que você precisa – um arquivo, um e-mail, um registro específico ou contas inteiras – em minutos, diretamente para o local original ou para download.' },
              { icon: 'ri-apps-2-line', title: 'Ampla Cobertura para Seu Ecossistema SaaS', description: 'Garanta a proteção completa dos seus dados críticos em Microsoft 365, Google Workspace, Salesforce, Dynamics 365, Azure AD, entre outras plataformas essenciais.' },
              { icon: 'ri-file-shield-2-line', title: 'Conformidade Descomplicada e Auditoria Facilitada', description: 'Atenda às exigências da LGPD, GDPR, HIPAA e outras regulamentações com políticas de retenção flexíveis, trilhas de auditoria detalhadas e data centers seguros.' }
            ]
          },
          {
            type: 'subheadline',
            text: 'Por Que Fazer Backup dos Seus Dados SaaS?'
          },
          {
            type: 'paragraph',
            text: 'Muitas empresas ainda acreditam que seus provedores de SaaS (como Microsoft ou Google) são totalmente responsáveis pelo backup de todos os seus dados. No entanto, o modelo de responsabilidade é compartilhada: eles garantem a infraestrutura; você protege seus dados contra perdas acidentais, erros humanos, ameaças internas e ataques de ransomware.'
          },
          {
            type: 'quote',
            text: 'Seus dados em Microsoft 365, Salesforce ou Google Workspace são ativos cruciais, mas a proteção nativa dessas plataformas não cobre todos os cenários de perda de dados. Erros humanos, exclusões (acidentais ou maliciosas) e, principalmente, ataques de ransomware podem levar à perda irreparável de informações vitais. Um backup SaaS dedicado, independente e imutável, como o ativado pela AORKIA, é essencial para garantir a verdadeira continuidade dos negócios, a conformidade regulatória e a sua total tranquilidade operacional.'
          },
          {
            type: 'subheadline',
            text: 'Como a AORKIA Ajuda Você com Backup SaaS Estratégico'
          },
          {
            type: 'paragraph',
            text: 'A AORKIA não é apenas uma fornecedora de tecnologia; somos seus parceiros estratégicos na proteção de dados. Nosso modelo de "ativação" garante que você extraia o máximo valor da melhor solução de backup SaaS do mercado, de forma rápida, personalizada e sem complexidade para sua equipe.'
          },
          {
            type: 'quote',
            text: 'Com a AORKIA, você não apenas adquire uma solução líder global como a Keepit; você ativa uma estratégia completa e robusta de proteção para seus dados SaaS. Nossa expertise assegura uma implementação ágil e customizada às suas políticas, configuração otimizada para suas necessidades de conformidade e retenção de dados, e suporte especializado contínuo. Capacitamos sua equipe para gerenciar os backups com facilidade e confiança, transformando a segurança de dados em um pilar fundamental para o crescimento e a resiliência do seu negócio.'
          },
          {
            type: 'cta',
            text: 'Proteja o Coração Digital do Seu Negócio Agora Mesmo. Descubra como o Backup SaaS Estratégico ativado pela AORKIA pode blindar seus dados críticos na nuvem. Agende uma demonstração personalizada ou solicite seu blueprint técnico exclusivo:',
            link: '/contato' // Link para formulário
          }
        ]
      },
      {
        id: 'bordas',
        title: 'Operações de Bordas Inteligentes: Inteligência Artificial Onde Sua Empresa Mais Precisa.',
        content: [
          {
            type: 'paragraph',
            text: 'Otimize a produção em tempo real na sua fábrica, preveja falhas em equipamentos remotos antes que paralisem suas operações, ou ofereça experiências personalizadas e instantâneas no seu varejo. Com as Operações de Bordas Inteligentes, a AORKIA ativa a IA onde seus dados são gerados, transformando desafios complexos em agilidade e resultados imediatos para o seu negócio.'
          },
          {
            type: 'subheadline',
            text: 'Ative e Escale Operações de Bordas Inteligentes'
          },
          {
            type: 'list',
            items: [
              { icon: 'ri-global-line', title: 'Escale Suas Operações de IA na Borda com Facilidade', description: 'Implemente e gerencie centralmente aplicações de IA em centenas ou milhares de locais geograficamente distribuídos, com provisionamento automatizado e orquestração simplificada.' },
              { icon: 'ri-settings-3-line', title: 'Gestão Unificada e Inteligente de Dispositivos e Aplicações', description: 'Controle todo o ciclo de vida de seus dispositivos e aplicações de borda a partir de uma única interface, simplificando a gestão, otimizando custos e garantindo a saúde da sua infraestrutura.' },
              { icon: 'ri-shield-keyhole-line', title: 'Segurança Robusta de Ponta a Ponta na Borda', description: 'Proteja seus dados, modelos de IA e dispositivos na borda com uma arquitetura de segurança abrangente, desde o hardware até a nuvem, garantindo a integridade e confidencialidade de suas operações críticas.' },
              { icon: 'ri-puzzle-2-line', title: 'Flexibilidade Tecnológica com Curadoria Especializada', description: 'Tenha liberdade para escolher e ativar as melhores plataformas de software e modelos de IA em uma ampla gama de hardwares de borda, com a curadoria e expertise da AORKIA para atender sua necessidade específica.' }
            ]
          },
          {
            type: 'subheadline',
            text: 'Por Que Executar IA na Borda?'
          },
          {
            type: 'paragraph',
            text: 'Levar a Inteligência Artificial para mais perto da origem dos dados não é apenas uma tendência, é uma necessidade estratégica para muitas indústrias. A IA na borda permite respostas mais rápidas, operações mais eficientes e insights valiosos gerados instantaneamente. A AORKIA ajuda sua empresa a:'
          },
          {
            type: 'quote',
            text: 'A IA na Borda está se tornando essencial em todas as indústrias, permitindo que as organizações automatizem a tomada de decisões locais em tempo real e reduzam a dependência da infraestrutura em nuvem. Isso melhora a eficiência operacional e os custos, ao mesmo tempo que possibilita análises orientadas por IA, insights preditivos e uma melhor experiência do cliente. Para muitos casos de uso, a IA se moverá para mais perto dos dados, impulsionada pela necessidade de tomada de decisão em tempo real e eficiência operacional. Segundo o Gartner, até 2029, pelo menos 60% das implementações de computação de borda usarão IA composta (tanto IA preditiva quanto IA generativa [GenAI]), em comparação com menos de 5% em 2023.'
          },
          {
            type: 'subheadline',
            text: 'Como a AORKIA Ajuda Você com IA na Borda'
          },
          {
            type: 'paragraph',
            text: 'A AORKIA é sua parceira estratégica para destravar o potencial da IA na borda. Nós simplificamos a complexidade para que você possa focar nos resultados de negócio, enquanto cuidamos da "ativação" da tecnologia com expertise.'
          },
          {
            type: 'quote',
            text: 'Desbloqueie o poder da IA distribuída com a AORKIA. Nós ativamos e ajudamos você a gerenciar modelos e aplicações de IA na borda em múltiplos locais, eliminando processos manuais com provisionamento automatizado e soluções otimizadas por nossa curadoria. Garanta a segurança de suas implementações com uma arquitetura robusta, protegendo seus dados e propriedade intelectual. Monitore a saúde dos dispositivos e gerencie toda a sua infraestrutura de borda de forma centralizada, reduzindo custos com suporte flexível a hardware e conectividade.'
          },
          {
            type: 'cta',
            text: 'Pronto para Ativar a Inteligência em suas Operações de Borda? Descubra como a AORKIA pode ativar a Inteligência Artificial na borda da sua empresa. Agende uma demonstração personalizada ou solicite seu blueprint técnico:',
            link: '/contato' // Link para formulário
          }
        ]
      },
      {
        id: 'dspm',
        title: 'Segurança para Operações Críticas: Visibilidade e Controle Total dos Seus Dados, Onde Estiverem.',
        content: [
          {
            type: 'paragraph',
            text: 'Sua empresa armazena dados de clientes ou propriedade intelectual em múltiplas nuvens e tem dificuldade em saber quem realmente tem acesso a quê? Uma configuração incorreta pode expor dados críticos, gerando riscos regulatórios e de reputação. Com a Segurança para Operações Críticas da AORKIA, você descobre, classifica e protege seus dados sensíveis de forma proativa e contínua.'
          },
          {
            type: 'subheadline',
            text: 'Ative e Escale Segurança para Operações Críticas'
          },
          {
            type: 'list',
            items: [
              { icon: 'ri-database-2-line', title: 'Descoberta e Classificação Abrangente de Dados', description: 'Identifique e classifique automaticamente dados sensíveis, incluindo "shadow data", em todos os seus repositórios na nuvem (IaaS, PaaS, SaaS) e sistemas on-premise.' },
              { icon: 'ri-focus-3-line', title: 'Priorização Inteligente de Riscos de Exposição', description: 'Entenda o contexto de risco de cada dado sensível – quem acessa, como é usado, quais permissões existem – para focar seus esforços de correção onde realmente importa.' },
              { icon: 'ri-shield-flash-line', title: 'Remediação Orientada e Conformidade Contínua', description: 'Receba recomendações claras ou automatize a correção de exposições de dados, garantindo a conformidade com LGPD, GDPR, HIPAA e outras normas de forma simplificada e auditável.' },
              { icon: 'ri-cloud-line', title: 'Segurança de Dados Integrada à Sua Nuvem', description: 'Unifique a segurança dos seus dados com a segurança da sua infraestrutura na nuvem, obtendo uma visão contextualizada para proteger suas aplicações nativas da nuvem de ponta a ponta.' }
            ]
          },
          {
            type: 'subheadline',
            text: 'Por Que Priorizar a Segurança da Postura dos Seus Dados (DSPM)?'
          },
          {
            type: 'paragraph',
            text: 'Em um cenário de inovação acelerada na nuvem, o volume e a complexidade dos dados crescem exponencialmente. Isso dificulta a proteção eficaz, expondo sua empresa a riscos. Plataformas DSPM são essenciais para superar esses desafios.'
          },
          {
            type: 'quote',
            text: 'Os dados alimentam a inovação na nuvem, mas o volume e a complexidade dos ambientes híbridos e multinuvem dificultam a segurança desses dados. As soluções isoladas geram muitos alertas, deixando as equipes sem saber onde direcionar os esforços. Seja uma violação de informações de clientes, registros financeiros ou propriedade intelectual, o acesso não autorizado aos dados pode ter graves consequências regulatórias e para a reputação. É crucial unificar a visibilidade da segurança para proteger contra ataques cibernéticos em qualquer ambiente.'
          },
          {
            type: 'subheadline',
            text: 'Como a AORKIA Ajuda Você com Segurança para Operações Críticas'
          },
          {
            type: 'paragraph',
            text: 'A AORKIA é sua parceira para transformar a complexidade da segurança de dados em clareza e controle. Nosso modelo de "ativação" foca em implementar rapidamente a melhor tecnologia DSPM, adaptada à sua realidade, para proteger seus ativos mais valiosos.'
          },
          {
            type: 'quote',
            text: 'Com a AORKIA, você ativa uma solução DSPM líder que se integra à sua estratégia de segurança na nuvem. Nossa expertise garante a descoberta contínua de todos os seus dados sensíveis, a análise contextualizada dos riscos de exposição e a automação da remediação. Ajudamos sua equipe a tomar medidas contra as ameaças mais perigosas sem adicionar complexidade, garantindo que seus dados estejam protegidos e em conformidade, onde quer que estejam.'
          },
          {
            type: 'cta',
            text: 'Assuma o Controle da Segurança dos Seus Dados Críticos Hoje Mesmo. Descubra como a AORKIA pode ativar uma postura de segurança de dados proativa e resiliente na sua empresa. Agende uma demonstração ou solicite seu blueprint técnico personalizado:',
            link: '/contato' // Link para formulário
          }
        ]
      },
      {
        id: 'receitas',
        title: 'Plataforma de Inteligência de Receita com IA: Transforme Dados em Decisões e Receita Previsível.',
        content: [
          {
            type: 'paragraph',
            text: 'Sua equipe de vendas perde tempo com tarefas manuais em vez de focar em fechar negócios? Suas previsões de receita são imprecisas e o pipeline parece ter "vazamentos" que você não consegue identificar? Com a Plataforma de Inteligência de Receita com IA ativada pela AORKIA, você obtém clareza e controle sobre todo o ciclo de receita.'
          },
          {
            type: 'subheadline',
            text: 'Ative e Escale sua Inteligência de Receita com IA'
          },
          {
            type: 'list',
            items: [
              { icon: 'ri-flow-chart', title: 'Orquestração Completa do Ciclo de Receita', description: 'Unifique todos os sinais de receita – CRM, e-mails, chamadas, dados de uso – em um único modelo de dados para gerenciar cadências e fluxos de trabalho de ponta a ponta.' },
              { icon: 'ri-line-chart-line', title: 'Previsibilidade e Análise Preditiva de Vendas', description: 'Aumente a precisão das suas previsões de receita, identifique negócios em risco ou com potencial de upsell, e compreenda o que realmente impulsiona seus resultados com IA.' },
              { icon: 'ri-group-line', title: 'Colaboração e Alinhamento entre Equipes (RevOps)', description: 'Capacite suas equipes de marketing, vendas e sucesso do cliente com insights compartilhados e automação de processos para uma "máquina de receita" eficiente e escalável.' },
              { icon: 'ri-user-voice-line', title: 'Capacitação Inteligente para Vendedores', description: 'Forneça aos seus vendedores insights acionáveis em tempo real, automação de tarefas administrativas e as melhores próximas ações recomendadas por IA para cada oportunidade.' }
            ]
          },
          {
            type: 'subheadline',
            text: 'Por Que Investir em Inteligência de Receita com IA?'
          },
          {
            type: 'paragraph',
            text: 'No cenário B2B atual, gerar receita de forma previsível e eficiente exige mais do que intuição. É preciso transformar o vasto volume de dados de clientes e interações em inteligência acionável. A Inteligência de Receita com IA é a chave para isso.'
          },
          {
            type: 'quote',
            text: 'A Inteligência Artificial aplicada à receita não é apenas uma ferramenta de análise; é um multiplicador de força para suas equipes de vendas, marketing e sucesso do cliente. Ela permite guiar vendedores com insights contextuais em tempo real, automatizar ações críticas e manter os negócios em movimento, adaptando-se não apenas a mudanças no CRM, mas a alterações estratégicas do seu mercado. Com o \'Revenue Context\' adequado, a IA capacita as empresas a realmente conduzir o crescimento da receita em escala.'
          },
          {
            type: 'subheadline',
            text: 'Como a AORKIA Ajuda Você com Inteligência de Receita com IA'
          },
          {
            type: 'paragraph',
            text: 'A AORKIA é sua parceira na "ativação" de uma cultura orientada a dados e resultados. Nós não apenas implementamos a tecnologia; garantimos que ela se traduza em crescimento real e previsível para o seu negócio.'
          },
          {
            type: 'quote',
            text: 'Com a AORKIA, você ativa o poder da Inteligência de Receita com IA, indo além da simples integração de CRM. Nossa expertise assegura a unificação de todos os seus sinais de receita (e-mails, conversas, dados de uso, etc.) em um único modelo robusto. Ajudamos a configurar cadências de receita, automatizar fluxos de trabalho e controlar os modelos de IA para que suas equipes tenham os insights e as ações recomendadas para otimizar cada interação e impulsionar a receita com precisão e eficiência.'
          },
          {
            type: 'cta',
            text: 'Pronto para Ativar uma Máquina de Receita Inteligente e Previsível? Descubra como a AORKIA pode ativar a Plataforma de Inteligência de Receita com IA ideal para sua empresa. Agende uma demonstração ou solicite seu blueprint técnico.',
            link: '/contato' // Link para formulário
          }
        ]
      },
      {
        id: 'digital',
        title: 'Estratégia de Presença Digital: Sua Marca Gerando Resultados Reais Online.',
        content: [
          {
            type: 'paragraph',
            text: 'Sua empresa compreende que uma presença digital eficaz vai muito além de um site visualmente atraente – é um ecossistema completo e um ativo estratégico fundamental para o crescimento sustentável no mercado B2B? Sua mensagem de marca se perde nos canais digitais e o retorno sobre seus esforços online é algo incerto? A AORKIA ativa sua Estratégia de Presença Digital, elevando sua autoridade no mercado, a conexão com clientes e os resultados comerciais concretos.'
          },
          {
            type: 'subheadline',
            text: 'Ative e Escale sua Estratégia de Presença Digital'
          },
          {
            type: 'list',
            items: [
              { icon: 'ri-search-eye-line', title: 'Diagnóstico Profundo e Auditoria Completa', description: 'Analisamos cada detalhe da sua atual presença digital – site, conteúdo, canais – para identificar pontos fortes, gargalos e oportunidades de otimização com foco em resultados.' },
              { icon: 'ri-compass-3-line', title: 'Planejamento Estratégico Digital Sob Medida', description: 'Desenvolvemos um plano de ação integrado e personalizado, alinhando sua mensagem, voz, canais e táticas diretamente aos seus objetivos de negócio para máximo impacto e clareza.' },
              { icon: 'ri-route-line', title: 'Otimização da Experiência e Jornada do Cliente Online', description: 'Mapeamos e refinamos cada ponto de contato digital, desde a descoberta da sua marca até a conversão, para garantir uma experiência do usuário (UX) fluida que engaja, educa e converte.' },
              { icon: 'ri-bar-chart-line', title: 'Foco em Resultados Mensuráveis e Crescimento Contínuo', description: 'Implementamos uma cultura orientada a dados para monitorar o desempenho, otimizar o ROI de cada ação e garantir que sua presença digital evolua estrategicamente com seu negócio.' }
            ]
          },
          {
            type: 'subheadline',
            text: 'Por Que Investir em uma Estratégia de Presença Digital?'
          },
          {
            type: 'paragraph',
            text: 'No competitivo mercado B2B, ter apenas um site ou perfis em alguns canais não basta. É a estratégia coesa por trás de cada clique, cada conteúdo e cada interação que transforma sua presença online de uma mera formalidade em um poderoso motor de crescimento e receita.'
          },
          {
            type: 'quote',
            text: 'Uma presença digital eficaz é um ecossistema completo, um ativo estratégico fundamental para o crescimento sustentável. Sem uma estratégia clara, seus canais podem operar isoladamente, sua mensagem pode se perder e seus investimentos podem não gerar o retorno esperado. A Estratégia de Presença Digital AORKIA garante que cada elemento online trabalhe em sinergia para construir autoridade, engajar seu público-alvo e, crucialmente, converter interesse em oportunidades de negócio reais e mensuráveis.'
          },
          {
            type: 'subheadline',
            text: 'Como a AORKIA Ajuda Você com sua Estratégia de Presença Digital'
          },
          {
            type: 'paragraph',
            text: 'A AORKIA não entrega apenas um relatório; nós co-criamos e orientamos a "ativação" de uma presença digital que reflete a excelência e a visão estratégica do seu negócio, com um olhar meticuloso para cada detalhe que impulsiona resultados.'
          },
          {
            type: 'quote',
            text: 'Com a Estratégia de Presença Digital AORKIA, analisamos cada detalhe da sua jornada online, do seu site aos canais de comunicação, para garantir que sua mensagem seja clara, seu engajamento eficaz e sua marca estrategicamente posicionada para capturar e converter as melhores oportunidades. Não é apenas sobre ter um site; é sobre construir uma presença digital poderosa que ativamente gera receita e fortalece seu negócio no competitivo mercado B2B.'
          },
          {
            type: 'cta',
            text: 'Pronto para Transformar Sua Presença Digital em um Verdadeiro Ativo Estratégico? Descubra como a Estratégia de Presença Digital AORKIA pode revolucionar seus resultados online. Agende uma conversa e solicite um diagnóstico estratégico personalizado:',
            link: '/contato' // Link para formulário
          }
        ]
      }
    ],
    form: {
      title: 'Pronto para transformar seu negócio?',
      subtitle: 'Descubra como nossas soluções estratégicas podem impulsionar sua empresa.',
      fields: [
        { id: 'name', label: 'Nome', type: 'text' },
        { id: 'email', label: 'Email corporativo', type: 'email' },
        { id: 'phone', label: 'WhatsApp / Telefone', type: 'tel' }
      ],
      radioLabel: 'Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:',
      radioOptions: [
        'Backup SaaS Estratégico',
        'Operações de Bordas Inteligentes',
        'Segurança para Operações Críticas',
        'Plataforma de Inteligência de Receita com IA',
        'Estratégia de Presença Digital AORKIA'
      ],
      buttonText: 'Solicitar Contato',
      confirmationText: 'Sua mensagem foi enviada. Um de nossos especialistas em ativação de soluções responderá em breve.',
      contactInfo: [
        'Av. Getúlio Vargas, 671 — Sala 500, BH - MG',
        '+55 31 98801-9006',
        'contato@aorkia.com'
      ]
    }
  };

  return (
    <>
      <Head>
        <title>AORKIA | Soluções</title>
        <meta name="description" content="Explore as soluções da AORKIA: Interface Inteligente e Navegação Tradicional." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Botões de Alternância de Interface */}
        <div className="text-center py-8 bg-gray-900">
          <button 
            onClick={() => setInterfaceMode('intelligent')}
            className={`px-6 py-2 rounded-l-lg transition-colors ${interfaceMode === 'intelligent' ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Interface Inteligente
          </button>
          <button 
            onClick={() => setInterfaceMode('traditional')}
            className={`px-6 py-2 rounded-r-lg transition-colors ${interfaceMode === 'traditional' ? 'bg-primary text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Navegação Tradicional
          </button>
        </div>

        {/* Interface Inteligente */}
        {interfaceMode === 'intelligent' && (
          <div ref={chatContainerRef} className={`flex flex-col md:flex-row h-[calc(100vh-128px)] overflow-hidden transition-all duration-500 ease-in-out`}>
            {/* Painel Esquerdo (Chat) */}
            <div className={`relative flex flex-col bg-gray-900 border-r border-gray-800 transition-all duration-500 ease-in-out ${viewMode === '70-30' ? 'md:w-7/12' : 'md:w-3/12'} w-full h-full`}>
              <div className="flex-grow overflow-y-auto p-6 space-y-4" ref={chatMessagesRef}>
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${msg.type === 'user' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-200'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {showTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-lg bg-gray-800 text-gray-400">
                      <div className="typing-indicator">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Área de Opções e Input */}
              <div className="p-6 border-t border-gray-800 bg-gray-900">
                {currentStep < 3 && options[currentStep] && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {options[currentStep].map((option) => (
                      <button 
                        key={option}
                        onClick={() => handlers[currentStep](option)}
                        className="px-4 py-2 bg-gray-700 hover:bg-primary text-gray-200 hover:text-white rounded-lg transition-colors text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                {currentStep < 3 && (
                  <form onSubmit={handleUserMessageSubmit} className="flex gap-3">
                    <input 
                      type="text"
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      placeholder="Ou digite sua mensagem aqui..."
                      className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                    >
                      <i className="ri-send-plane-fill"></i>
                    </button>
                  </form>
                )}
                {currentStep === 3 && (
                  <p className="text-gray-400 text-center">Interação concluída. Para iniciar uma nova conversa, atualize a página.</p>
                )}
              </div>
            </div>

            {/* Painel Direito (Conteúdo Dinâmico) */}
            <div className={`relative bg-black transition-all duration-500 ease-in-out ${viewMode === '70-30' ? 'md:w-5/12' : 'md:w-9/12'} w-full h-full overflow-y-auto p-8 md:p-12`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Interface Inteligente AORKIA</h2>
              <p className="text-lg text-gray-300 mb-8">
                Nossa interface utiliza IA para entender suas necessidades e direcionar você para a solução mais adequada.
              </p>
              {/* Conteúdo pode ser adicionado aqui baseado no estado */} 
              {selectedArea && (
                <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-4">Foco Selecionado:</h3>
                  <p className="text-xl text-primary">{selectedArea}</p>
                </div>
              )}
              {selectedProfile && (
                <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-4">Perfil Identificado:</h3>
                  <p className="text-xl text-primary">{selectedProfile}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navegação Tradicional */}
        {interfaceMode === 'traditional' && (
          <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{traditionalContent.headline}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{traditionalContent.subheadline}</p>
            </div>

            {/* Seções de Conteúdo Tradicional */}
            {traditionalContent.sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-24 p-8 md:p-12 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{section.title}</h3>
                {section.content.map((item, index) => {
                  if (item.type === 'paragraph') {
                    return <p key={index} className="text-lg text-gray-300 mb-6">{item.text}</p>;
                  } else if (item.type === 'subheadline') {
                    return <h4 key={index} className="text-2xl font-semibold mt-8 mb-4 text-white">{item.text}</h4>;
                  } else if (item.type === 'list') {
                    return (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {item.items.map((listItem, listIndex) => (
                          <div key={listIndex} className="flex items-start space-x-4 p-4 bg-gray-800 rounded">
                            <i className={`${listItem.icon} text-primary text-3xl mt-1`}></i>
                            <div>
                              <h5 className="font-semibold text-white">{listItem.title}</h5>
                              <p className="text-gray-400 text-sm">{listItem.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  } else if (item.type === 'quote') {
                    return (
                      <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-gray-400 my-6">
                        {item.text}
                      </blockquote>
                    );
                  } else if (item.type === 'cta') {
                    return (
                      <div key={index} className="mt-10 text-center md:text-left">
                        <p className="text-lg text-gray-300 mb-4">{item.text}</p>
                        <Link href={item.link} className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                          Solicitar Contato
                        </Link>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}

            {/* Formulário na Navegação Tradicional */}
            <div className="mt-24 p-8 md:p-12 bg-gray-900 rounded-lg border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">{traditionalContent.form.title}</h2>
                  <p className="text-xl text-gray-300 mb-8">
                    {traditionalContent.form.subtitle}
                  </p>
                </div>
                
                <div className="bg-gray-800 p-8 rounded-lg">
                  <form className="space-y-6">
                    {traditionalContent.form.fields.map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1">{field.label}</label>
                        <input 
                          type={field.type} 
                          id={field.id} 
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    ))}
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">{traditionalContent.form.radioLabel}</label>
                      <div className="space-y-3">
                        {traditionalContent.form.radioOptions.map((option) => (
                          <div key={option} className="flex items-center">
                            <input 
                              type="radio" 
                              id={`trad-${option.replace(/\s+/g, '-').toLowerCase()}`} 
                              name="focus-trad" 
                              className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                            />
                            <label htmlFor={`trad-${option.replace(/\s+/g, '-').toLowerCase()}`} className="ml-3 text-gray-300">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      {traditionalContent.form.buttonText}
                    </button>
                  </form>
                  
                  <p className="mt-6 text-sm text-gray-400 text-center">
                    {traditionalContent.form.confirmationText}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                    <p className="text-gray-400">
                      {traditionalContent.form.contactInfo.join('<br />')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

