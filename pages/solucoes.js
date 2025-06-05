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
      content: 'Bem-vindo à AORKIA. Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:'
    }
  ]);
  const [chatCompleted, setChatCompleted] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  
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

  // Função para reiniciar o chat
  const restartChat = () => {
    setCurrentStep(0);
    setSelectedArea(null);
    setSelectedProfile(null);
    setViewMode('70-30');
    setChatCompleted(false);
    setMessages([
      {
        type: 'ai',
        content: 'Bem-vindo à AORKIA. Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:'
      }
    ]);
  };

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

        setMessages(prev => [...prev, 
          { type: 'ai', content: 'Obrigado pela interação! Aproveite a Análise Personalizada que preparamos para você! ->' },
          { type: 'ai', content: '- Fim do Chat -' }
        ]);

        setChatCompleted(true);
        setViewMode('30-70'); // Aumenta o espaço da Análise Personalizada

      } catch (error) {
        console.error("Erro ao processar diagnóstico:", error);
        handleError();
      }
    }, 1500); // Mantive o delay de 1500ms que simula a digitação
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
          setChatCompleted(true);
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
          setChatCompleted(true);
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
          message: 'Como líder executivo, você exige que o investimento em presença digital se traduza em crescimento palpável, fortalecimento da marca e uma clara diferenciação no mercado. Sua visão precisa de uma execução digital que vá além do superficial e entregue resultados estratégicos. A AORKIA desenvolve sua Estratégia de Presença Digital com um olhar minucioso e orientado a negócios, alinhando cada ponto de contato online – do seu website e conteúdo à forma como suas soluções são apresentadas – aos seus objetivos de receita e posicionamento de mercado.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Gestão Técnica / Operacional': {
          message: 'Como gestor de marketing ou operações, você enfrenta o desafio de implementar e manter uma presença digital que não apenas pareça boa, mas que gere resultados mensuráveis e escaláveis. A AORKIA desenvolve sua Estratégia de Presença Digital com foco em operacionalização eficiente, fornecendo não apenas o design e desenvolvimento, mas também os processos, ferramentas e métricas para que você possa gerenciar e evoluir continuamente sua presença online.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Especialista Técnico': {
          message: 'Como especialista técnico, você precisa de uma presença digital que reflita a excelência técnica da sua solução, comunique com precisão suas capacidades e seja construída sobre fundações tecnológicas sólidas. A AORKIA desenvolve sua Estratégia de Presença Digital com rigor técnico, garantindo que seu website e conteúdo não apenas comuniquem efetivamente, mas também sejam tecnicamente robustos, seguros e otimizados para performance.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Outro': {
          message: 'Identificamos seu interesse em Estratégia de Presença Digital. Para desenvolver uma abordagem personalizada que realmente impulsione seus objetivos de negócio, precisamos entender melhor seu contexto específico. Nossos especialistas estão prontos para uma análise detalhada.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        }
      }
    };

    // Retorna diagnóstico específico ou um padrão se não encontrar
    return diagnoses[area]?.[profile] || {
      message: `Obrigado por compartilhar suas informações. Com base no seu interesse em ${area} e seu perfil ${profile}, gostaríamos de oferecer uma análise personalizada. Nossos especialistas podem ajudar a definir a melhor estratégia para sua situação específica.`,
      recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
    };
  };

  return (
    <>
      <Head>
        <title>Soluções | AORKIA</title>
        <meta name="description" content="Conheça as soluções estratégicas da AORKIA para transformação digital, segurança e inovação." />
      </Head>

      <main className="min-h-screen bg-black text-white">
        
       {/* Seleção de Interface */}
<section className="py-16 bg-black">
  <div className="flex justify-end mb-12">
    <button 
      className={`px-8 py-4 text-lg font-medium rounded-lg transition-all ${interfaceMode === 'traditional' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
      onClick={() => setInterfaceMode('traditional')}
    >
      Navegação Tradicional
    </button>
  </div>

  {/* Interface Inteligente */}
  {interfaceMode === 'intelligent' && (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-100px)]">

      {/* Coluna da Esquerda - Chat Interface */}
      <div className="flex flex-col h-full">
        <div className="ai-interface" ref={chatContainerRef}>
          <div className="ai-header">
            <h3 className="ai-title">Interface Inteligente AORKIA</h3>
          </div>
          <div className="ai-conversation" ref={chatMessagesRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`ai-message ${msg.type === 'user' ? 'user' : 'ai'}`}>
                <div className="ai-message-content">
                  {msg.content}
                </div>
              </div>
            ))}
            {showTyping && (
              <div className="ai-message ai">
                <div className="ai-message-content">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Coluna da Direita - Análise Personalizada */}
      <div className="flex flex-col h-full">
        {/* Aqui virá o conteúdo da Análise Personalizada */}
      </div>

    </div>
  )}
</section>

    {/* Coluna da Direita - Análise Personalizada */}
    <div className="flex flex-col h-full">
      {/* Aqui virá o conteúdo da Análise Personalizada */}
    </div>

  </div>
)}
                   
                    {/* Opções de Seleção - Passo 0: Seleção de Área */}
                    {currentStep === 0 && !showTyping && (
                      <div className="p-4 bg-gray-900">
                        <div className="ai-options grid grid-cols-1 md:grid-cols-2 gap-3">
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleAreaSelection('Backup SaaS Estratégico')}
                          >
                            Backup SaaS Estratégico
                          </button>
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleAreaSelection('Operações de Bordas Inteligentes')}
                          >
                            Operações de Bordas Inteligentes
                          </button>
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleAreaSelection('Segurança para Operações Críticas')}
                          >
                            Segurança para Operações Críticas
                          </button>
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleAreaSelection('Plataforma de Inteligência de Receita com IA')}
                          >
                            Plataforma de Inteligência de Receita com IA
                          </button>
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleAreaSelection('Estratégia de Presença Digital AORKIA')}
                          >
                            Estratégia de Presença Digital AORKIA
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Opções de Seleção - Passo 1: Seleção de Perfil */}
                    {currentStep === 1 && !showTyping && (
                      <div className="p-4 bg-gray-900">
                        <div className="ai-options grid grid-cols-1 md:grid-cols-2 gap-3">
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleProfileSelection('Liderança Executiva / Estratégica')}
                          >
                            Liderança Executiva / Estratégica
                          </button>
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleProfileSelection('Gestão Técnica / Operacional')}
                          >
                            Gestão Técnica / Operacional
                          </button>
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleProfileSelection('Especialista Técnico')}
                          >
                            Especialista Técnico
                          </button>
                          <button 
                            className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-4 rounded-lg text-left"
                            onClick={() => handleProfileSelection('Outro')}
                          >
                            Outro
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Opções de Seleção - Passo 2: Seleção de Ação */}
                    {currentStep === 2 && !showTyping && selectedArea && selectedProfile && (
                      <div className="p-4 bg-gray-900">
                        <div className="ai-options flex flex-col md:flex-row gap-3">
                          {getDiagnosis(selectedArea, selectedProfile).recommendations.map((rec, idx) => (
                            <button 
                              key={idx}
                              className="ai-option bg-gray-800 hover:bg-primary transition-colors py-3 px-6 rounded-lg text-center flex-1"
                              onClick={() => handleActionSelection(rec)}
                            >
                              {rec}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Input de Mensagem e Botões */}
                    <div className="ai-input flex justify-center">
                      <button className="ai-restart-button" onClick={restartChat}>
                        Reiniciar Conversa
                      </button>
                    </div>
                              Enviar
                            </button>
                          </form>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Coluna da Direita (Resultados) - Análise Personalizada */}
                <div className={`${viewMode === '70-30' ? 'lg:col-span-4' : 'lg:col-span-8'} transition-all duration-500`}>
                  {selectedArea && selectedProfile && (
                    <div className="bg-gray-900 rounded-lg p-6 h-full">
                      <h3 className="text-2xl font-bold text-primary mb-6">Análise Personalizada</h3>
                      
                      <div className="mb-6 pb-6 border-b border-gray-800">
                        <h4 className="text-lg font-medium text-gray-400">Foco Selecionado:</h4>
                        <p className="text-xl font-semibold text-white mt-2">{selectedArea}</p>
                      </div>
                      
                      <div className="mb-6 pb-6 border-b border-gray-800">
                        <h4 className="text-lg font-medium text-gray-400">Perfil Identificado:</h4>
                        <p className="text-xl font-semibold text-white mt-2">{selectedProfile}</p>
                      </div>
                      
                      {currentStep >= 2 && (
                        <div className="mb-8 pb-6 border-b border-gray-800">
                          <h4 className="text-lg font-medium text-gray-400">O que é imprescindível para você:</h4>
                          <p className="text-lg text-white mt-4 leading-relaxed">
                            {getDiagnosis(selectedArea, selectedProfile).message}
                          </p>
                        </div>
                      )}
                      
                      {/* CTA para formulário */}
                      <div className="mb-8">
                        <Link href="/contato" className="block w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center">
                          Solicitar Análise Detalhada
                        </Link>
                        
                        <div className="mt-4 text-center">
                          <p className="text-gray-400">Ou entre em contato diretamente:</p>
                          <a href="mailto:contato@aorkia.com" className="text-primary hover:text-primary/80 mt-1 inline-block">
                            contato@aorkia.com
                          </a>
                        </div>
                      </div>
                      
                      {/* Convite para navegação tradicional */}
                        >
                          Navegar Tradicionalmente
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navegação Tradicional */}
            {interfaceMode === 'traditional' && (
              <div className="space-y-24">
                {/* Backup SaaS Estratégico */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Backup SaaS Estratégico</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      Transforme seus dados de backup em ativos estratégicos. Nossa solução não apenas protege seus dados SaaS críticos contra falhas e ransomware, mas também os transforma em insights acionáveis para decisões de negócio mais inteligentes.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Microsoft 365</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Google Workspace</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Salesforce</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Dashboards Estratégicos</span>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/backup.png" 
                        alt="Backup SaaS Estratégico" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Operações de Bordas Inteligentes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/bordas.png" 
                        alt="Operações de Bordas Inteligentes" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Operações de Bordas Inteligentes</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      Transforme sua infraestrutura de borda em um motor de inovação. Nossas soluções de Edge Computing e Edge AI otimizam suas operações distribuídas, garantindo performance, escalabilidade e inteligência onde você mais precisa.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Edge Computing</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Edge AI</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Infraestrutura Distribuída</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Otimização de Performance</span>
                    </div>
                  </div>
                </div>

                {/* Segurança para Operações Críticas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Segurança para Operações Críticas</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      Proteja seus dados críticos com uma postura de segurança contínua e auditável. Nossa plataforma DSPM (Data Security Posture Management) oferece prevenção contextualizada a riscos, resposta automatizada e conformidade contínua.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">DSPM</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Segurança de Dados</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Conformidade</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Automação de Segurança</span>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/dspm.png" 
                        alt="Segurança para Operações Críticas" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Plataforma de Inteligência de Receita com IA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/receitas.png" 
                        alt="Plataforma de Inteligência de Receita com IA" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Plataforma de Inteligência de Receita com IA</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      Unifique suas equipes de marketing, vendas e CS em um sistema operacional de receita coeso e focado em performance. Nossa plataforma elimina silos de dados, automatiza fluxos de trabalho e conecta as informações do cliente de ponta a ponta.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">RevOps</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Automação de Vendas</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">IA Preditiva</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Insights de Cliente</span>
                    </div>
                  </div>
                </div>

                {/* Estratégia de Presença Digital */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Estratégia de Presença Digital AORKIA</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      Transforme seu investimento digital em crescimento palpável e diferenciação no mercado. Desenvolvemos sua estratégia de presença digital com foco em resultados de negócio, alinhando cada ponto de contato online aos seus objetivos estratégicos.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Websites Estratégicos</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Marketing Digital B2B</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Conteúdo Técnico</span>
                      <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Posicionamento Digital</span>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/digital.png" 
                        alt="Estratégia de Presença Digital" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Seção de Contato */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
                </p>
              </div>
              <div>
                <form className="bg-black p-6 rounded-lg" action="https://formspree.io/f/mkgrleqq" method="POST">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <p className="block text-sm font-medium text-gray-400 mb-3">Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:</p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input type="radio" id="focus1" name="focus" value="Backup SaaS Estratégico" className="mr-3" />
                        <label htmlFor="focus1" className="text-gray-300">Backup SaaS Estratégico</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="focus2" name="focus" value="Operações de Bordas Inteligentes" className="mr-3" />
                        <label htmlFor="focus2" className="text-gray-300">Operações de Bordas Inteligentes</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="focus3" name="focus" value="Segurança para Operações Críticas" className="mr-3" />
                        <label htmlFor="focus3" className="text-gray-300">Segurança para Operações Críticas</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="focus4" name="focus" value="Plataforma de Inteligência de Receita com IA" className="mr-3" />
                        <label htmlFor="focus4" className="text-gray-300">Plataforma de Inteligência de Receita com IA</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="focus5" name="focus" value="Estratégia de Presença Digital AORKIA" className="mr-3" />
                        <label htmlFor="focus5" className="text-gray-300">Estratégia de Presença Digital AORKIA</label>
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Solicitar Contato
                  </button>
                  <div id="form-success" className="mt-4 text-center text-sm text-primary hidden">
                    Sua mensagem foi enviada. Um de nossos especialistas em ativação de soluções responderá em breve.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
