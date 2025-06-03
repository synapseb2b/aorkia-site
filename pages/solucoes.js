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
      content: 'Bem-vindo à AORKIA. Vamos identificar, com precisão, a área crítica da sua operação que precisa evoluir. Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:'
    }
  ]);
  
  // Referência para o container de mensagens para scroll automático
  const messagesEndRef = useRef(null);
  const chatMessagesRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Prevenir rolagem automática quando a página carrega
  useEffect(() => {
    // Desabilitar rolagem automática na carga inicial
    window.history.scrollRestoration = 'manual';
    
    // Manter a posição do scroll quando a página carrega
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      container.scrollTop = 0;
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
  // Modificado para não rolar a página inteira, apenas o container de chat
  useEffect(() => {
    if (messagesEndRef.current && chatMessagesRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  // Função para lidar com a seleção de área crítica
  const handleAreaSelection = (area) => {
    try {
      setSelectedArea(area);
      setShowTyping(true);
      
      // Adiciona a mensagem do usuário imediatamente
      setMessages(prev => [...prev, { type: 'user', content: area }]);
      
      // Simula o tempo de digitação da IA
      setTimeout(() => {
        try {
          setShowTyping(false);
          setMessages(prev => [...prev, 
            { 
              type: 'ai', 
              content: 'Entendido. Agora, nos ajude a compreender melhor o seu papel na organização:' 
            }
          ]);
          setCurrentStep(1);
        } catch (error) {
          console.error("Erro ao processar resposta da IA:", error);
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
      
      // Adiciona a mensagem do usuário imediatamente
      setMessages(prev => [...prev, { type: 'user', content: profile }]);
      
      // Simula o tempo de digitação da IA
      setTimeout(() => {
        try {
          setShowTyping(false);
          
          // Determina o diagnóstico com base na área e perfil
          let diagnosis = getDiagnosis(selectedArea, profile);
          
          setMessages(prev => [...prev, 
            { 
              type: 'ai', 
              content: diagnosis.message
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

  // Função para obter diagnóstico personalizado
  const getDiagnosis = (area, profile) => {
    try {
      const diagnoses = {
        'Backup SaaS Estratégico': {
          'Liderança Executiva / Estratégica': {
            message: 'Diagnóstico Estratégico: Sua posição de liderança exige garantia de continuidade de negócios. Identificamos que sua estratégia de Backup SaaS atual apresenta vulnerabilidades críticas que podem comprometer decisões executivas e gerar riscos regulatórios significativos. Recomendamos uma avaliação imediata da sua postura de resiliência de dados.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestão Técnica / Operacional': {
            message: 'Diagnóstico Técnico-Gerencial: Como responsável pela infraestrutura tecnológica, sua atual abordagem de Backup SaaS apresenta lacunas operacionais que comprometem SLAs e aumentam o risco de perda de dados críticos. Identificamos oportunidades para otimizar processos, reduzir overhead operacional e implementar automações que eliminariam pontos cegos na proteção de dados.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua infraestrutura atual de Backup SaaS apresenta deficiências arquiteturais que comprometem a integridade e disponibilidade dos dados. Identificamos oportunidades para implementar soluções de proteção de dados de última geração que eliminariam vulnerabilidades técnicas e otimizariam processos de recuperação.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Outro': {
            message: 'Baseado no seu perfil e interesse em Backup SaaS Estratégico, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Plataformas de FinOps com IA': {
          'Liderança Executiva / Estratégica': {
            message: 'Diagnóstico Estratégico: Sua infraestrutura atual está limitando a capacidade de inovação e crescimento do negócio. Como líder, você enfrenta desafios de escalabilidade que impactam diretamente resultados financeiros e vantagem competitiva. Identificamos oportunidades para transformar sua infraestrutura em um ativo estratégico que impulsiona inovação.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestão Técnica / Operacional': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor, você enfrenta o desafio de equilibrar manutenção da infraestrutura existente com a necessidade de modernização. Sua arquitetura atual apresenta ineficiências que aumentam custos operacionais e limitam a agilidade do negócio. Identificamos oportunidades para otimizar recursos e implementar automações que reduziriam significativamente o overhead operacional.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua infraestrutura atual apresenta gargalos técnicos que comprometem performance e escalabilidade. Identificamos oportunidades para implementar arquiteturas modernas que eliminariam pontos únicos de falha e otimizariam a utilização de recursos, permitindo maior flexibilidade e resiliência operacional.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Outro': {
            message: 'Baseado no seu perfil e interesse em Plataformas de FinOps com IA, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Plataformas Edge AI': {
          'Liderança Executiva / Estratégica': {
            message: 'Diagnóstico Estratégico: Sua postura de segurança cloud atual expõe a organização a riscos significativos de compliance e reputação. Como líder, você enfrenta o desafio de proteger ativos digitais críticos em um cenário de ameaças cada vez mais sofisticadas. Identificamos vulnerabilidades que poderiam ser exploradas para comprometer dados sensíveis e propriedade intelectual.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestão Técnica / Operacional': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor responsável pela segurança, você enfrenta o desafio de manter visibilidade e controle em ambientes cloud distribuídos. Sua abordagem atual apresenta lacunas que dificultam a detecção e resposta a ameaças em tempo hábil. Identificamos oportunidades para implementar controles de segurança adaptativos que fortaleceriam significativamente sua postura de proteção.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua arquitetura de segurança cloud atual apresenta vulnerabilidades técnicas que poderiam ser exploradas por atacantes. Identificamos oportunidades para implementar controles de segurança avançados que forneceriam proteção em profundidade e visibilidade granular sobre atividades suspeitas, fortalecendo significativamente sua postura de segurança.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Outro': {
            message: 'Baseado no seu perfil e interesse em Plataformas Edge AI, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Data Security Posture Management (DSPM)': {
          'Liderança Executiva / Estratégica': {
            message: 'Diagnóstico Estratégico: Sua abordagem atual de geração de receita B2B apresenta ineficiências que limitam o crescimento e previsibilidade financeira. Como líder, você enfrenta o desafio de escalar operações comerciais de forma sustentável. Identificamos oportunidades para implementar uma metodologia de engenharia de receita que transformaria seu processo de vendas em um motor de crescimento previsível.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestão Técnica / Operacional': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor de tecnologia, você tem a oportunidade de transformar a infraestrutura tecnológica em um habilitador estratégico para o crescimento de receita B2B. Sua stack tecnológica atual não está otimizada para suportar processos comerciais escaláveis. Identificamos oportunidades para implementar soluções que aumentariam significativamente a eficiência e eficácia da equipe comercial.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua infraestrutura tecnológica atual não está otimizada para suportar processos comerciais escaláveis. Identificamos oportunidades para implementar automações e integrações que eliminariam silos de dados e forneceriam insights acionáveis para a equipe comercial, aumentando significativamente a eficiência do processo de vendas.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Outro': {
            message: 'Baseado no seu perfil e interesse em Data Security Posture Management (DSPM), recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Breach and Attack Simulation (BAS)': {
          'Liderança Executiva / Estratégica': {
            message: 'Diagnóstico Estratégico: Como líder, você enfrenta o desafio de garantir que sua organização esteja preparada para resistir a ataques cibernéticos sofisticados. Sua abordagem atual de validação de segurança apresenta lacunas que podem resultar em falsos positivos e uma falsa sensação de segurança. Identificamos oportunidades para implementar uma estratégia de validação contínua que forneceria uma visão realista da sua postura de segurança.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestão Técnica / Operacional': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor de segurança, você enfrenta o desafio de validar a eficácia dos controles de segurança implementados. Sua abordagem atual de testes de segurança é manual, episódica e não cobre adequadamente todas as superfícies de ataque. Identificamos oportunidades para implementar uma plataforma de simulação contínua que validaria automaticamente seus controles de segurança contra as táticas, técnicas e procedimentos mais recentes.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Como especialista técnico, você enfrenta o desafio de manter-se atualizado com as últimas táticas, técnicas e procedimentos de ataque. Sua abordagem atual de testes de segurança consome muito tempo, é propensa a erros e não fornece cobertura abrangente. Identificamos oportunidades para implementar uma plataforma automatizada que simularia continuamente ataques reais, fornecendo feedback imediato sobre vulnerabilidades e configurações incorretas.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Outro': {
            message: 'Baseado no seu perfil e interesse em Breach and Attack Simulation (BAS), recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Otimização de Presença Digital': {
          'Liderança Executiva / Estratégica': {
            message: 'Diagnóstico Estratégico: Como líder, você enfrenta o desafio de garantir que sua presença digital esteja alinhada com os objetivos estratégicos do negócio. Sua abordagem atual não está otimizada para gerar leads qualificados e converter visitantes em clientes. Identificamos oportunidades para implementar uma estratégia digital integrada que aumentaria significativamente o ROI dos seus investimentos digitais.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestão Técnica / Operacional': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor, você enfrenta o desafio de integrar múltiplas plataformas digitais e garantir uma experiência consistente para os usuários. Sua infraestrutura digital atual apresenta silos que dificultam a coleta e análise de dados. Identificamos oportunidades para implementar uma arquitetura integrada que forneceria uma visão unificada do cliente e permitiria personalização em escala.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Como especialista técnico, você enfrenta o desafio de otimizar o desempenho e a segurança das plataformas digitais. Sua infraestrutura atual apresenta gargalos que impactam a experiência do usuário e a capacidade de escalar. Identificamos oportunidades para implementar otimizações técnicas que melhorariam significativamente o desempenho, a segurança e a escalabilidade da sua presença digital.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Outro': {
            message: 'Baseado no seu perfil e interesse em Otimização de Presença Digital, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        }
      };

      // Verificar se a área e o perfil existem no objeto de diagnósticos
      if (diagnoses[area] && diagnoses[area][profile]) {
        return diagnoses[area][profile];
      } else {
        // Fallback para caso a combinação específica não exista
        return {
          message: `Baseado no seu interesse em ${area} e seu perfil ${profile}, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.`,
          recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
        };
      }
    } catch (error) {
      console.error("Erro ao gerar diagnóstico:", error);
      return {
        message: "Desculpe, ocorreu um erro ao processar seu diagnóstico. Por favor, entre em contato diretamente com nossa equipe para uma avaliação personalizada.",
        recommendations: ['Contato Direto']
      };
    }
  };

  // Função para lidar com a seleção de recomendação
  const handleRecommendationSelection = (recommendation) => {
    try {
      setShowTyping(true);
      
      // Adiciona a mensagem do usuário imediatamente
      setMessages(prev => [...prev, { type: 'user', content: `Gostaria de saber mais sobre: ${recommendation}` }]);
      
      // Simula o tempo de digitação da IA
      setTimeout(() => {
        try {
          setShowTyping(false);
          
          let response = '';
          
          // Determina a resposta com base na recomendação selecionada
          if (recommendation === 'Blueprint Técnico Exclusivo') {
            response = 'Excelente escolha! Nosso Blueprint Técnico Exclusivo é um documento estratégico personalizado que mapeia detalhadamente a jornada de transformação tecnológica da sua empresa. Ele inclui análise da situação atual, recomendações técnicas específicas, roadmap de implementação e métricas de sucesso. Para receber seu Blueprint Técnico Exclusivo, preencha o formulário de contato e um de nossos especialistas entrará em contato em até 24 horas úteis.';
          } else if (recommendation === 'Conversa Estratégica') {
            response = 'Ótima decisão! Nossa Conversa Estratégica é uma sessão de consultoria exclusiva com um de nossos especialistas seniores, onde discutiremos em profundidade os desafios específicos da sua organização e como nossas soluções podem endereçá-los. Para agendar sua Conversa Estratégica, preencha o formulário de contato indicando sua disponibilidade, e nossa equipe entrará em contato para confirmar o horário.';
          } else if (recommendation === 'Contato Direto') {
            response = 'Entendido! Para um contato direto com nossa equipe, você pode ligar para +55 31 98801-9006, enviar um e-mail para contato@aorkia.com ou preencher o formulário de contato em nosso site. Um de nossos especialistas entrará em contato em até 24 horas úteis para discutir suas necessidades específicas.';
          } else {
            response = `Agradecemos seu interesse em ${recommendation}. Um de nossos especialistas entrará em contato em breve para fornecer mais informações e discutir como podemos ajudar sua organização.`;
          }
          
          setMessages(prev => [...prev, { type: 'ai', content: response }]);
          setCurrentStep(3);
        } catch (error) {
          console.error("Erro ao processar recomendação:", error);
          handleError();
        }
      }, 2000);
    } catch (error) {
      console.error("Erro ao selecionar recomendação:", error);
      handleError();
    }
  };

  // Função para lidar com o envio de mensagem pelo usuário
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!userMessage.trim()) return;
    
    try {
      // Adiciona a mensagem do usuário
      setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
      setUserMessage('');
      setShowTyping(true);
      
      // Simula o tempo de digitação da IA
      setTimeout(() => {
        try {
          setShowTyping(false);
          
          // Resposta genérica para qualquer mensagem do usuário após o diagnóstico
          const response = "Obrigado por compartilhar essas informações adicionais. Para fornecer uma análise mais detalhada e personalizada para o seu caso específico, recomendamos agendar uma conversa com um de nossos especialistas. Por favor, preencha o formulário de contato ou ligue para +55 31 98801-9006, e teremos prazer em ajudar a encontrar a melhor solução para sua organização.";
          
          setMessages(prev => [...prev, { type: 'ai', content: response }]);
        } catch (error) {
          console.error("Erro ao processar mensagem:", error);
          handleError();
        }
      }, 2000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      handleError();
    }
  };

  // Função para alternar entre os modos de interface
  const toggleInterfaceMode = () => {
    setInterfaceMode(prev => prev === 'intelligent' ? 'traditional' : 'intelligent');
  };

  // Função para reiniciar a conversa
  const resetConversation = () => {
    try {
      setMessages([
        {
          type: 'ai',
          content: 'Bem-vindo à AORKIA. Vamos identificar, com precisão, a área crítica da sua operação que precisa evoluir. Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:'
        }
      ]);
      setCurrentStep(0);
      setSelectedArea(null);
      setSelectedProfile(null);
      setViewMode('70-30');
    } catch (error) {
      console.error("Erro ao reiniciar conversa:", error);
      handleError();
    }
  };

  // Função para lidar com erros
  const handleError = () => {
    setMessages(prev => [...prev, 
      { 
        type: 'ai', 
        content: 'Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente ou entre em contato diretamente com nossa equipe pelo telefone +55 31 98801-9006 ou e-mail contato@aorkia.com.' 
      }
    ]);
  };

  return (
    <>
      <Head>
        <title>Soluções AORKIA | Interface Inteligente</title>
        <meta name="description" content="Conheça nossas soluções estratégicas para o mercado B2B: Backup SaaS, Infraestrutura, Segurança Cloud e Receita B2B." />
      </Head>

      <main className="bg-black text-white min-h-screen">
        {/* Seção Hero com vídeo de fundo */}
        <section className="relative min-h-screen flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="container mx-auto px-4 relative z-10 py-16">
            {interfaceMode === 'intelligent' ? (
              <div className="max-w-5xl mx-auto">
                {/* Interface Inteligente */}
                <div ref={chatContainerRef} className="chat-container bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                  {/* Chat Messages */}
                  <div ref={chatMessagesRef} className="chat-messages p-6 max-h-[70vh] overflow-y-auto">
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`message ${message.type === 'ai' ? 'message-ai' : 'message-user'} mb-4`}
                      >
                        {message.content}
                      </div>
                    ))}
                    
                    {/* Indicador de digitação */}
                    {showTyping && (
                      <div className="typing-indicator">
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                      </div>
                    )}
                    
                    {/* Opções de área crítica - Passo 0 */}
                    {currentStep === 0 && !showTyping && (
                      <div className="options-container mt-4 space-y-2">
                        {['Backup SaaS Estratégico', 'Plataformas de FinOps com IA', 'Plataformas Edge AI', 'Data Security Posture Management (DSPM)', 'Breach and Attack Simulation (BAS)', 'Otimização de Presença Digital'].map((area) => (
                          <button
                            key={area}
                            onClick={() => handleAreaSelection(area)}
                            className="option-button w-full text-left p-3 bg-gray-800 hover:bg-primary/20 rounded-lg transition-colors"
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {/* Opções de perfil - Passo 1 */}
                    {currentStep === 1 && !showTyping && (
                      <div className="options-container mt-4 space-y-2">
                        {['Liderança Executiva / Estratégica', 'Gestão Técnica / Operacional', 'Especialista Técnico', 'Outro'].map((profile) => (
                          <button
                            key={profile}
                            onClick={() => handleProfileSelection(profile)}
                            className="option-button w-full text-left p-3 bg-gray-800 hover:bg-primary/20 rounded-lg transition-colors"
                          >
                            {profile}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {/* Opções de recomendação - Passo 2 */}
                    {currentStep === 2 && !showTyping && selectedArea && selectedProfile && (
                      <div className="options-container mt-4 space-y-2">
                        {getDiagnosis(selectedArea, selectedProfile).recommendations.map((recommendation) => (
                          <button
                            key={recommendation}
                            onClick={() => handleRecommendationSelection(recommendation)}
                            className="option-button w-full text-left p-3 bg-gray-800 hover:bg-primary/20 rounded-lg transition-colors"
                          >
                            {recommendation}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                  
                  {/* Chat Input */}
                  <div className="chat-input-container p-4 border-t border-gray-800 bg-gray-900 flex items-center">
                    <button 
                      onClick={resetConversation}
                      className="reset-button mr-2 text-gray-400 hover:text-primary"
                      title="Reiniciar conversa"
                    >
                      <i className="ri-restart-line"></i>
                    </button>
                    
                    <form onSubmit={handleSendMessage} className="flex-1 flex">
                      <input
                        type="text"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 p-3 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary"
                      />
                      <button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-white p-3 rounded-r-lg"
                      >
                        <i className="ri-send-plane-fill"></i>
                      </button>
                    </form>
                  </div>
                </div>
                
                {/* Botão para alternar para navegação tradicional */}
                <div className="text-center mt-8">
                  <button
                    onClick={toggleInterfaceMode}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transition-all text-lg font-medium"
                  >
                    <i className="ri-layout-grid-line mr-2"></i>
                    Alternar para Navegação Tradicional
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-7xl mx-auto">
                {/* Navegação Tradicional */}
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                    Nossas <span className="text-primary">Soluções</span>
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Conheça nossas soluções estratégicas para o mercado B2B, desenvolvidas para transformar desafios complexos em crescimento sustentável.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {/* Backup SaaS Estratégico */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-colors">
                    <div className="p-8">
                      <div className="text-primary text-5xl mb-6">
                        <i className="ri-shield-check-line"></i>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Backup SaaS Estratégico</h2>
                      <p className="text-gray-300 mb-6">
                        A AORKIA ativa a Keepit — líder global em backup SaaS — para garantir proteção completa dos seus dados na nuvem.
                      </p>
                      <Link href="/contato" className="text-primary hover:text-primary/80 inline-flex items-center">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Plataformas de FinOps com IA */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-colors">
                    <div className="p-8">
                      <div className="text-primary text-5xl mb-6">
                        <i className="ri-funds-line"></i>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Plataformas de FinOps com IA</h2>
                      <p className="text-gray-300 mb-6">
                        Otimize seus investimentos em nuvem com nossa plataforma de gerenciamento financeiro inteligente.
                      </p>
                      <Link href="/contato" className="text-primary hover:text-primary/80 inline-flex items-center">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Plataformas Edge AI */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-colors">
                    <div className="p-8">
                      <div className="text-primary text-5xl mb-6">
                        <i className="ri-cpu-line"></i>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Plataformas Edge AI</h2>
                      <p className="text-gray-300 mb-6">
                        Processamento de dados e inteligência artificial na borda para decisões em tempo real.
                      </p>
                      <Link href="/contato" className="text-primary hover:text-primary/80 inline-flex items-center">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Data Security Posture Management (DSPM) */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-colors">
                    <div className="p-8">
                      <div className="text-primary text-5xl mb-6">
                        <i className="ri-database-2-line"></i>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Data Security Posture Management</h2>
                      <p className="text-gray-300 mb-6">
                        Visibilidade e controle completos sobre seus dados sensíveis em ambientes multi-cloud.
                      </p>
                      <Link href="/contato" className="text-primary hover:text-primary/80 inline-flex items-center">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Breach and Attack Simulation (BAS) */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-colors">
                    <div className="p-8">
                      <div className="text-primary text-5xl mb-6">
                        <i className="ri-bug-line"></i>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Breach and Attack Simulation</h2>
                      <p className="text-gray-300 mb-6">
                        Validação contínua de segurança para identificar vulnerabilidades antes que sejam exploradas.
                      </p>
                      <Link href="/contato" className="text-primary hover:text-primary/80 inline-flex items-center">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Otimização de Presença Digital */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-colors">
                    <div className="p-8">
                      <div className="text-primary text-5xl mb-6">
                        <i className="ri-global-line"></i>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Otimização de Presença Digital</h2>
                      <p className="text-gray-300 mb-6">
                        Transforme sua presença online com estratégias digitais orientadas por dados e resultados.
                      </p>
                      <Link href="/contato" className="text-primary hover:text-primary/80 inline-flex items-center">
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Botão para alternar para interface inteligente */}
                <div className="text-center mt-8">
                  <button
                    onClick={toggleInterfaceMode}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg inline-flex items-center transition-all text-lg font-medium"
                  >
                    <i className="ri-robot-line mr-2"></i>
                    Alternar para Interface Inteligente
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Seção CTA */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Entre em contato hoje mesmo e descubra como nossas soluções estratégicas podem impulsionar sua empresa.
              </p>
              <Link 
                href="/contato" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all inline-block"
              >
                Solicitar Avaliação Gratuita
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
