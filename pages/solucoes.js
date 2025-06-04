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
  const [chatCompleted, setChatCompleted] = useState(false);
  
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
    setSelectedArea(null);
    setSelectedProfile(null);
    setCurrentStep(0);
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
            responseMessage = 'Excelente escolha! Para receber seu Blueprint Técnico Exclusivo e personalizado, por favor, preencha nosso formulário de contato.';
            
            // Adiciona botão para formulário
            setMessages(prev => [...prev, 
              { type: 'ai', content: responseMessage },
              { 
                type: 'ai', 
                content: 'Interação concluída. Para iniciar uma nova conversa, clique aqui',
                isEnd: true
              }
            ]);
          } else if (action === 'Conversa Estratégica') {
            responseMessage = 'Ótima decisão! Nossa Conversa Estratégica é uma sessão de consultoria exclusiva com um de nossos especialistas seniores. Discutiremos em profundidade os desafios específicos da sua organização e como nossas soluções podem endereçá-los. Para agendar sua Conversa Estratégica, por favor, preencha nosso formulário de contato.';
            
            // Adiciona botão para formulário
            setMessages(prev => [...prev, 
              { type: 'ai', content: responseMessage },
              { 
                type: 'ai', 
                content: 'Interação concluída. Para iniciar uma nova conversa, clique aqui',
                isEnd: true
              }
            ]);
          }
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
          setMessages(prev => [...prev, 
            {
              type: 'ai',
              content: 'Entendi sua mensagem. Para que possamos lhe atender da melhor forma e direcionar sua consulta ao especialista adequado, por favor, preencha nosso formulário de contato e retornaremos em breve.'
            },
            { 
              type: 'ai', 
              content: 'Interação concluída. Para iniciar uma nova conversa, clique aqui',
              isEnd: true
            }
          ]);
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
          message: 'Como gestor de marketing ou operações, você busca uma presença digital que seja tanto tecnicamente robusta quanto estrategicamente alinhada aos objetivos de negócio. A AORKIA desenvolve sua Estratégia de Presença Digital com foco em resultados mensuráveis, implementação ágil e escalabilidade. Nosso processo combina diagnóstico técnico detalhado, planejamento estratégico e execução tática para garantir que sua presença digital seja um verdadeiro ativo de negócio, não apenas um custo operacional.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Especialista Técnico': {
          message: 'Como especialista técnico, você precisa de uma presença digital que reflita a excelência técnica da sua solução, com implementação precisa e performance otimizada. A AORKIA desenvolve sua Estratégia de Presença Digital com um olhar técnico apurado, garantindo que cada elemento – do código e arquitetura às integrações e análises – seja implementado com excelência e alinhado aos mais altos padrões do mercado.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        },
        'Outro': {
          message: 'Identificamos seu interesse em Estratégia de Presença Digital. Para desenvolver uma abordagem verdadeiramente eficaz, precisamos compreender melhor seus objetivos específicos e o contexto atual da sua presença online. Nossos especialistas estão prontos para uma análise personalizada.',
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        }
      }
    };

    // Retorna diagnóstico específico ou um genérico se não encontrar
    return diagnoses[area]?.[profile] || {
      message: `Obrigado por compartilhar seu interesse em ${area} e seu perfil como ${profile}. Para fornecer a orientação mais precisa, gostaríamos de entender melhor seu cenário específico.`,
      recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
    };
  };

  // Renderização condicional baseada no modo de interface
  return (
    <>
      <Head>
        <title>AORKIA | Soluções</title>
        <meta name="description" content="Soluções AORKIA para empresas B2B" />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80"></div>
          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Soluções AORKIA
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl">
                Explore nossas soluções estratégicas para impulsionar seu crescimento, proteger seus ativos digitais e otimizar suas operações.
              </p>
            </div>
          </div>
        </section>

        {/* Seletor de Modo de Interface */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <button 
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
                  interfaceMode === 'intelligent' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setInterfaceMode('intelligent')}
              >
                Interface Inteligente
              </button>
              <button 
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
                  interfaceMode === 'traditional' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setInterfaceMode('traditional')}
              >
                Navegação Tradicional
              </button>
            </div>
          </div>
        </section>

        {/* Interface Inteligente */}
        {interfaceMode === 'intelligent' && (
          <section className="py-16 bg-black">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Interface Inteligente AORKIA</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Nossa Interface Inteligente personaliza recomendações com base no seu perfil e necessidades específicas.
                </p>
              </div>
              
              <div className={`grid grid-cols-1 ${viewMode === '70-30' ? 'md:grid-cols-7' : 'md:grid-cols-10'} gap-6`}>
                {/* Chat Interface */}
                <div className={`${viewMode === '70-30' ? 'md:col-span-5' : 'md:col-span-3'} bg-gray-900 rounded-lg overflow-hidden flex flex-col`}>
                  {/* Chat Header */}
                  <div className="bg-gray-800 p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                      <h3 className="text-lg font-medium">AORKIA Assistant</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={restartChat}
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Reiniciar conversa"
                      >
                        <i className="ri-restart-line"></i>
                      </button>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div 
                    ref={chatContainerRef}
                    className="flex-grow p-4 overflow-y-auto max-h-[500px]"
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    <div ref={chatMessagesRef} className="space-y-4">
                      {messages.map((message, index) => (
                        <div 
                          key={index} 
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.type === 'user' 
                                ? 'bg-primary text-white rounded-tr-none' 
                                : 'bg-gray-800 text-gray-200 rounded-tl-none'
                            }`}
                          >
                            {message.content}
                            {message.isEnd && (
                              <button 
                                onClick={restartChat}
                                className="text-primary underline hover:text-primary/80 ml-1"
                              >
                                clique aqui
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {showTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gray-800 text-gray-200 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="p-4 border-t border-gray-800">
                    {currentStep === 0 && (
                      <div className="grid grid-cols-1 gap-3">
                        {['Backup SaaS Estratégico', 'Operações de Bordas Inteligentes', 'Segurança para Operações Críticas', 'Plataforma de Inteligência de Receita com IA', 'Estratégia de Presença Digital AORKIA'].map((option) => (
                          <button
                            key={option}
                            onClick={() => handleAreaSelection(option)}
                            className="text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {currentStep === 1 && (
                      <div className="grid grid-cols-1 gap-3">
                        {['Liderança Executiva / Estratégica', 'Gestão Técnica / Operacional', 'Especialista Técnico', 'Outro'].map((option) => (
                          <button
                            key={option}
                            onClick={() => handleProfileSelection(option)}
                            className="text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {currentStep === 2 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['Blueprint Técnico Exclusivo', 'Conversa Estratégica'].map((option) => (
                          <button
                            key={option}
                            onClick={() => handleActionSelection(option)}
                            className="text-center p-3 bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {currentStep === 3 && !chatCompleted && (
                      <form onSubmit={handleUserMessageSubmit} className="flex space-x-2">
                        <input
                          type="text"
                          value={userMessage}
                          onChange={(e) => setUserMessage(e.target.value)}
                          placeholder="Digite sua mensagem..."
                          className="flex-grow p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                          type="submit"
                          className="p-3 bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                        >
                          <i className="ri-send-plane-fill"></i>
                        </button>
                      </form>
                    )}
                  </div>
                </div>
                
                {/* Results Panel */}
                <div className={`${viewMode === '70-30' ? 'md:col-span-2' : 'md:col-span-7'} bg-gray-900 rounded-lg overflow-hidden flex flex-col`}>
                  {/* Results Header */}
                  <div className="bg-gray-800 p-4">
                    <h3 className="text-lg font-medium">Análise Personalizada</h3>
                  </div>
                  
                  {/* Results Content */}
                  <div className="flex-grow p-4 overflow-y-auto">
                    {selectedArea && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400">Foco Selecionado:</h4>
                        <p className="text-lg">{selectedArea}</p>
                      </div>
                    )}
                    
                    {selectedProfile && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400">Perfil Identificado:</h4>
                        <p className="text-lg">{selectedProfile}</p>
                      </div>
                    )}
                    
                    {selectedArea && selectedProfile && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400">O que é imprescindível para você:</h4>
                        <p className="text-base text-gray-300">{getDiagnosis(selectedArea, selectedProfile).message}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Navegação Tradicional */}
        {interfaceMode === 'traditional' && (
          <section className="py-16 bg-black">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Explore nosso portfólio de soluções estratégicas para impulsionar seu crescimento e transformação digital.
                </p>
              </div>
              
              <div className="space-y-24">
                {/* Backup SaaS Estratégico */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Backup SaaS Estratégico</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      Perder dados críticos de Plataformas SaaS como Microsoft 365, Google Workspace e Salesforce por um simples erro humano ou um ataque de ransomware pode paralisar sua operação e gerar custos enormes. Para garantir proteção de dados independente, completa e sempre recuperável, a AORKIA ativa a Keepit – Líder Global com mais de 15.000 clientes em 74 países, incluindo Porsche e Oxford University.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Proteção imutável contra ransomware e ataques cibernéticos</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Recuperação granular e instantânea de dados</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Dashboards estratégicos e insights acionáveis</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link href="/contato" className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/backup.png" 
                        alt="Backup SaaS Estratégico" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Operações de Bordas Inteligentes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/bordas.png" 
                        alt="Operações de Bordas Inteligentes" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Operações de Bordas Inteligentes</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      Otimize a produção em tempo real na sua fábrica, preveja falhas em equipamentos remotos antes que paralisem suas operações, ou ofereça experiências personalizadas e instantâneas no seu varejo. A AORKIA ativa Plataformas Edge AI, garantindo inteligência, segurança e conformidade para suas operações na borda.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Processamento de dados em tempo real na borda</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Redução de latência e custos de transmissão de dados</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Implementação segura de modelos de IA em ambientes distribuídos</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link href="/contato" className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Segurança para Operações Críticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Segurança para Operações Críticas</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      Sua empresa armazena dados de clientes ou propriedade intelectual em múltiplas nuvens e tem dificuldade em saber quem realmente tem acesso a quê? Uma configuração incorreta pode expor dados críticos, gerando riscos regulatórios e de reputação. A AORKIA ativa Plataformas Data Security Posture Management (DSPM), que potencializam a descoberta, classificação, monitoramento e proteção contínuos dos seus dados sensíveis em ambientes multicloud e híbridos.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Visibilidade total dos dados sensíveis em ambientes multicloud</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Detecção e correção automatizada de riscos de segurança</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Conformidade contínua com regulamentações de proteção de dados</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link href="/contato" className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/dspm.png" 
                        alt="Segurança para Operações Críticas" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Plataforma de Inteligência de Receita com IA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/receitas.png" 
                        alt="Plataforma de Inteligência de Receita com IA" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Plataforma de Inteligência de Receita com IA</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      Sua equipe de vendas perde tempo com tarefas manuais em vez de focar em fechar negócios? Suas previsões de receita são imprecisas e o pipeline parece ter "vazamentos" que você não consegue identificar? A AORKIA ativa Plataformas de Inteligência de Receita com IA, transformando seus dados de vendas e CRM em insights preditivos e automação inteligente.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Previsões de receita precisas com IA</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Automação inteligente de tarefas de vendas</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Insights acionáveis para otimização do pipeline</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link href="/contato" className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Estratégia de Presença Digital */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Estratégia de Presença Digital AORKIA</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      Sua empresa compreende que uma presença digital eficaz vai muito além de um site visualmente atraente – é um ecossistema completo e um ativo estratégico fundamental para o crescimento sustentável no mercado B2B? A AORKIA ativa sua Estratégia de Presença Digital, elevando sua autoridade no mercado, a conexão com clientes e os resultados comerciais concretos.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Websites e plataformas digitais de alto impacto</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Conteúdo estratégico para posicionamento de autoridade</p>
                      </div>
                      <div className="flex items-start">
                        <div className="text-primary mr-3 mt-1">
                          <i className="ri-check-line text-xl"></i>
                        </div>
                        <p>Estratégias de conversão e geração de leads qualificados</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link href="/contato" className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                      <img 
                        src="/images/digital.png" 
                        alt="Estratégia de Presença Digital" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Seção Formulário - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto w-full">
                <form className="space-y-6" action="https://formspree.io/f/mkgrleqq" method="POST">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email corporativo</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:</label>
                    <div className="space-y-3">
                      {['Backup SaaS Estratégico', 'Operações de Bordas Inteligentes', 'Segurança para Operações Críticas', 'Plataforma de Inteligência de Receita com IA', 'Estratégia de Presença Digital AORKIA'].map((option) => (
                        <div key={option} className="flex items-center">
                          <input 
                            type="radio" 
                            id={option.replace(/\s+/g, '-').toLowerCase()} 
                            name="focus" 
                            value={option}
                            required
                            className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                          />
                          <label htmlFor={option.replace(/\s+/g, '-').toLowerCase()} className="ml-3 text-gray-300">
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
