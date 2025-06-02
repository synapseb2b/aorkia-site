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
      content: 'Bem-vindo à AORKIA. Sou sua assistente estratégica para diagnóstico preliminar. Vamos, juntos, identificar com precisão qual área da sua operação exige evolução imediata.'
    }
  ]);
  
  // Referência para o container de mensagens para scroll automático
  const messagesEndRef = useRef(null);
  const chatMessagesRef = useRef(null);

  // Prevenir rolagem automática quando a página carrega
  useEffect(() => {
    // Desabilitar rolagem automática na carga inicial
    window.history.scrollRestoration = 'manual';
    
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
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
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
              content: 'Ótimo, agora me ajude a entender qual o seu papel na organização. Selecione a opção que mais representa seu perfil:' 
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
        'Infraestrutura Estratégica': {
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
            message: 'Baseado no seu perfil e interesse em Infraestrutura Estratégica, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Segurança Cloud': {
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
            message: 'Baseado no seu perfil e interesse em Segurança Cloud, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Receita B2B': {
          'Liderança Executiva / Estratégica': {
            message: 'Diagnóstico Estratégico: Sua abordagem atual de geração de receita B2B apresenta ineficiências que limitam o crescimento e previsibilidade financeira. Como líder, você enfrenta o desafio de escalar operações comerciais de forma sustentável. Identificamos oportunidades para implementar uma metodologia de engenharia de receita que transformaria seu processo de vendas em um motor de crescimento previsível.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestão Técnica / Operacional': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor de tecnologia, você tem a oportunidade de transformar a infraestrutura tecnológica em um habilitador estratégico para o crescimento de receita B2B. Sua stack tecnológica atual não está otimizada para suportar processos comerciais escaláveis. Identificamos oportunidades para implementar soluções que aumentariam significativamente a eficiência e eficácia da equipe comercial.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua infraestrutura técnica atual não está otimizada para suportar processos comerciais B2B escaláveis. Identificamos oportunidades para implementar automações e integrações que eliminariam silos de dados e forneceriam insights acionáveis para a equipe comercial, aumentando significativamente a eficiência e taxa de conversão.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Outro': {
            message: 'Baseado no seu perfil e interesse em Receita B2B, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        }
      };

      return diagnoses[area]?.[profile] || {
        message: 'Baseado no seu perfil e área de interesse, recomendamos uma análise personalizada com nossos especialistas.',
        recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
      };
    } catch (error) {
      console.error("Erro ao obter diagnóstico:", error);
      return {
        message: 'Ocorreu um erro ao processar seu diagnóstico. Por favor, tente novamente ou entre em contato com nossos especialistas.',
        recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
      };
    }
  };

  // Função para enviar mensagem do usuário
  const handleSendMessage = (e) => {
    try {
      e.preventDefault();
      if (!userMessage.trim()) return;

      setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
      setUserMessage('');
      setShowTyping(true);

      // Simula resposta da IA
      setTimeout(() => {
        try {
          setShowTyping(false);
          setMessages(prev => [...prev, { 
            type: 'ai', 
            content: 'Obrigado pelo seu comentário. Nossos especialistas estão disponíveis para uma conversa mais detalhada sobre suas necessidades específicas.' 
          }]);
        } catch (error) {
          console.error("Erro ao processar resposta da IA:", error);
          handleError();
        }
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      handleError();
    }
  };

  // Função para reiniciar a conversa
  const handleReset = () => {
    try {
      setMessages([{
        type: 'ai',
        content: 'Bem-vindo à AORKIA. Sou sua assistente estratégica para diagnóstico preliminar. Vamos, juntos, identificar com precisão qual área da sua operação exige evolução imediata.'
      }]);
      setCurrentStep(0);
      setSelectedArea(null);
      setSelectedProfile(null);
      setViewMode('70-30');
    } catch (error) {
      console.error("Erro ao reiniciar conversa:", error);
      handleError();
    }
  };

  // Função para alternar entre modos de interface
  const toggleInterfaceMode = () => {
    try {
      setInterfaceMode(interfaceMode === 'intelligent' ? 'traditional' : 'intelligent');
    } catch (error) {
      console.error("Erro ao alternar modo de interface:", error);
      handleError();
    }
  };

  // Função para lidar com erros
  const handleError = () => {
    try {
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: 'Desculpe, ocorreu um erro. Por favor, tente reiniciar a conversa ou entre em contato com nosso suporte.' 
      }]);
    } catch (error) {
      console.error("Erro ao exibir mensagem de erro:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Soluções AORKIA | Interface Inteligente de Diagnóstico</title>
        <meta name="description" content="Explore nossas soluções estratégicas através da Interface Inteligente de Diagnóstico AORKIA ou navegue tradicionalmente por nosso portfólio." />
        <style>{`
          /* Estilos específicos para a Interface Inteligente */
          .chat-interface {
            max-width: 1200px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            height: calc(100vh - 200px);
            min-height: 500px;
          }
          
          .chat-container {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          
          .chat-header {
            background-color: #0076FF;
            color: white;
            padding: 10px 16px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            z-index: 10;
          }
          
          .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            background-color: #f5f5f5;
          }
          
          .message {
            padding: 10px 14px;
            border-radius: 16px;
            max-width: 85%;
            word-break: break-word;
            position: relative;
            margin-bottom: 2px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          }
          
          .message-ai {
            background-color: white;
            align-self: flex-start;
            border-bottom-left-radius: 4px;
          }
          
          .message-user {
            background-color: #dcf8c6;
            color: #303030;
            align-self: flex-end;
            border-bottom-right-radius: 4px;
          }
          
          .chat-input {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            border-top: 1px solid #e0e0e0;
            background-color: #fff;
            position: relative;
            z-index: 10;
          }
          
          .chat-input input {
            flex: 1;
            padding: 10px 16px;
            border: 1px solid #e0e0e0;
            border-radius: 24px;
            outline: none;
            background-color: #f5f5f5;
          }
          
          .chat-input button {
            background-color: #0076FF;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-left: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
          }
          
          .typing-indicator {
            display: flex;
            align-items: center;
            padding: 8px 16px;
            background-color: white;
            border-radius: 16px;
            align-self: flex-start;
            margin-top: 4px;
            border-bottom-left-radius: 4px;
          }
          
          .typing-dot {
            width: 8px;
            height: 8px;
            background-color: #666;
            border-radius: 50%;
            margin: 0 2px;
            animation: typing-animation 1.4s infinite ease-in-out both;
          }
          
          .typing-dot:nth-child(1) {
            animation-delay: -0.32s;
          }
          
          .typing-dot:nth-child(2) {
            animation-delay: -0.16s;
          }
          
          @keyframes typing-animation {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
          
          .view-mode-70-30 {
            display: grid;
            grid-template-columns: 70% 30%;
            height: 100%;
          }
          
          .view-mode-30-70 {
            display: grid;
            grid-template-columns: 30% 70%;
            height: 100%;
          }
          
          .option-button {
            text-align: left;
            padding: 12px 16px;
            border: 1px solid #e0e0e0;
            border-radius: 16px;
            background-color: white;
            margin-bottom: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 15px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          }
          
          .option-button:hover {
            background-color: #f5f5f5;
            border-color: #0076FF;
          }
          
          .option-button:active {
            transform: scale(0.98);
          }
          
          /* Estilos específicos para mobile */
          @media (max-width: 768px) {
            .view-mode-70-30,
            .view-mode-30-70 {
              grid-template-columns: 1fr;
              grid-template-rows: auto 1fr;
            }
            
            .chat-interface {
              height: calc(100vh - 150px);
              border-radius: 0;
              margin: 0;
              max-width: 100%;
            }
            
            .message {
              max-width: 90%;
              font-size: 15px;
              padding: 8px 12px;
            }
            
            .chat-messages {
              padding: 12px;
              gap: 6px;
            }
            
            .chat-header {
              padding: 8px 12px;
            }
            
            .option-button {
              padding: 10px 14px;
              font-size: 14px;
            }
            
            .content-area {
              padding: 12px;
              max-height: 300px;
              overflow-y: auto;
            }
            
            .chat-input {
              padding: 6px 10px;
            }
            
            .chat-input input {
              padding: 8px 12px;
            }
            
            .chat-input button {
              width: 36px;
              height: 36px;
            }
          }
        `}</style>
      </Head>

      <main>
        {/* Seção Hero com Interface Inteligente */}
        <section className="relative py-8 md:py-16 overflow-hidden min-h-screen bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

          <div className="container mx-auto px-4 relative z-10">
            {interfaceMode === 'intelligent' ? (
              <div className="py-4 md:py-8">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-white text-center">
                  Interface Inteligente de Soluções AORKIA
                </h1>
                
                <div className="chat-interface">
                  <div className={`${viewMode === '70-30' ? 'view-mode-70-30' : 'view-mode-30-70'}`}>
                    {/* Área de Chat */}
                    <div className="chat-container">
                      <div className="chat-header">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                            <i className="ri-robot-line text-white"></i>
                          </div>
                          <span>Assistente AORKIA</span>
                        </div>
                        <button 
                          onClick={handleReset}
                          className="text-white hover:text-gray-200 transition-colors"
                          aria-label="Reiniciar conversa"
                        >
                          <i className="ri-refresh-line"></i>
                        </button>
                      </div>
                      
                      <div className="chat-messages" id="chat-messages" ref={chatMessagesRef}>
                        {messages.map((msg, index) => (
                          <div key={index} className={`message message-${msg.type}`}>
                            {msg.content}
                          </div>
                        ))}
                        
                        {showTyping && (
                          <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                          </div>
                        )}
                        
                        {currentStep === 0 && !selectedArea && (
                          <div className="flex flex-col gap-2 mt-2">
                            <p className="text-gray-700 text-sm mb-2">Selecione abaixo a frente que mais representa seu foco atual:</p>
                            <button 
                              onClick={() => handleAreaSelection('Backup SaaS Estratégico')}
                              className="option-button"
                            >
                              Backup SaaS Estratégico
                            </button>
                            <button 
                              onClick={() => handleAreaSelection('Infraestrutura Estratégica')}
                              className="option-button"
                            >
                              Infraestrutura Estratégica
                            </button>
                            <button 
                              onClick={() => handleAreaSelection('Segurança Cloud')}
                              className="option-button"
                            >
                              Segurança Cloud
                            </button>
                            <button 
                              onClick={() => handleAreaSelection('Receita B2B')}
                              className="option-button"
                            >
                              Receita B2B
                            </button>
                          </div>
                        )}
                        
                        {currentStep === 1 && selectedArea && !selectedProfile && (
                          <div className="flex flex-col gap-2 mt-2">
                            <p className="text-gray-700 text-sm mb-2">Selecione a opção que mais representa seu perfil:</p>
                            <button 
                              onClick={() => handleProfileSelection('Liderança Executiva / Estratégica')}
                              className="option-button"
                            >
                              Liderança Executiva / Estratégica
                            </button>
                            <button 
                              onClick={() => handleProfileSelection('Gestão Técnica / Operacional')}
                              className="option-button"
                            >
                              Gestão Técnica / Operacional
                            </button>
                            <button 
                              onClick={() => handleProfileSelection('Especialista Técnico')}
                              className="option-button"
                            >
                              Especialista Técnico
                            </button>
                            <button 
                              onClick={() => handleProfileSelection('Outro')}
                              className="option-button"
                            >
                              Outro
                            </button>
                          </div>
                        )}
                        
                        {currentStep === 2 && selectedArea && selectedProfile && (
                          <div className="mt-2">
                            <div className="bg-white border border-primary rounded-lg p-3 mb-2">
                              <h3 className="text-base font-bold text-primary mb-2">Próximos Passos:</h3>
                              <div className="flex flex-col sm:flex-row gap-2">
                                <a 
                                  href="#formulario-cta" 
                                  className="bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-1 transition-all text-sm"
                                >
                                  <i className="ri-file-text-line"></i>
                                  <span>Blueprint Técnico</span>
                                </a>
                                <a 
                                  href="#formulario-cta" 
                                  className="bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-1 transition-all text-sm"
                                >
                                  <i className="ri-calendar-line"></i>
                                  <span>Agendar conversa</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Referência para rolar para o final das mensagens */}
                        <div ref={messagesEndRef} />
                      </div>
                      
                      <div className="chat-input">
                        <form onSubmit={handleSendMessage} className="flex-1 flex">
                          <input 
                            type="text" 
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            placeholder="Digite sua mensagem..."
                            className="flex-1"
                          />
                          <button type="submit" aria-label="Enviar mensagem">
                            <i className="ri-send-plane-fill"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    
                    {/* Área de Conteúdo Recomendado */}
                    <div className="bg-gray-50 overflow-y-auto content-area">
                      {viewMode === '70-30' ? (
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-3">Conteúdo Recomendado</h3>
                          <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
                            <h4 className="font-bold text-primary text-sm">Whitepaper</h4>
                            <p className="text-sm text-gray-700">Estratégias de Proteção de Dados para Ambientes SaaS</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <h4 className="font-bold text-primary text-sm">Case Study</h4>
                            <p className="text-sm text-gray-700">Como a Empresa X reduziu custos de backup em 60%</p>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-3">Diagnóstico Personalizado</h3>
                          
                          {selectedArea && selectedProfile && (
                            <div className="space-y-3">
                              <div className="bg-white p-3 rounded-lg shadow-sm">
                                <h4 className="font-bold text-primary mb-1 text-sm">Sua Situação Atual</h4>
                                <p className="text-sm text-gray-700">
                                  Com base no seu perfil de {selectedProfile} e foco em {selectedArea}, identificamos pontos críticos que exigem atenção imediata.
                                </p>
                              </div>
                              
                              <div className="bg-white p-3 rounded-lg shadow-sm">
                                <h4 className="font-bold text-primary mb-1 text-sm">Oportunidades de Melhoria</h4>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                  <li>Implementação de arquitetura resiliente</li>
                                  <li>Otimização de processos operacionais</li>
                                  <li>Automação de tarefas repetitivas</li>
                                  <li>Visibilidade e controle centralizado</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-3 rounded-lg shadow-sm">
                                <h4 className="font-bold text-primary mb-1 text-sm">Recursos Exclusivos</h4>
                                <div className="grid grid-cols-1 gap-1">
                                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                                    <i className="ri-file-text-line"></i>
                                    <span>Whitepaper Exclusivo</span>
                                  </a>
                                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                                    <i className="ri-video-line"></i>
                                    <span>Webinar On-Demand</span>
                                  </a>
                                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                                    <i className="ri-presentation-line"></i>
                                    <span>Apresentação Técnica</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Botão para alternar para navegação tradicional */}
                <div className="text-center mt-4">
                  <button 
                    onClick={toggleInterfaceMode}
                    className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-all inline-flex items-center text-sm"
                    aria-label="Alternar para navegação tradicional"
                  >
                    <i className="ri-layout-grid-line mr-2"></i>
                    <span>Prefiro Navegação Tradicional</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
                  Soluções AORKIA
                </h1>
                
                <div className="bg-primary/10 backdrop-blur-sm p-4 rounded-lg mb-8 border border-primary/30">
                  <div className="flex flex-col md:flex-row items-center gap-4 text-white">
                    <div className="text-3xl">
                      <i className="ri-robot-line"></i>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold mb-1">Experimente nossa Interface Inteligente</h3>
                      <p>Obtenha um diagnóstico personalizado baseado no seu perfil e necessidades específicas.</p>
                    </div>
                    <button 
                      onClick={toggleInterfaceMode}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-all"
                    >
                      Começar agora
                    </button>
                  </div>
                </div>
                
                {/* Backup SaaS Estratégico */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                  <div className="p-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">Backup SaaS Estratégico</h2>
                    
                    <p className="text-base md:text-lg text-gray-700 mb-4 text-center">
                      Proteja seus dados críticos na nuvem com a solução líder global em backup SaaS.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-cloud-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Microsoft 365</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Backup completo para Exchange Online, SharePoint, OneDrive e Teams.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-google-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Google Workspace</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Proteção para Gmail, Drive, Contatos, Calendário e muito mais.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-database-2-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Salesforce</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Backup e recuperação granular para seus dados de CRM críticos.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="#formulario-cta" 
                        className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg inline-flex items-center transition-all text-sm"
                      >
                        Solicitar Avaliação Gratuita <i className="ri-arrow-right-line ml-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Infraestrutura Estratégica */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                  <div className="p-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">Infraestrutura Estratégica</h2>
                    
                    <p className="text-base md:text-lg text-gray-700 mb-4 text-center">
                      Transforme sua infraestrutura em um ativo estratégico que impulsiona inovação e crescimento.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-server-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Alta Disponibilidade</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Arquiteturas resilientes que garantem continuidade de negócios mesmo em cenários críticos.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-speed-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Otimização de Performance</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Análise e ajuste fino de sistemas para máxima eficiência e velocidade de resposta.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-scales-3-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Escalabilidade</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Infraestrutura que cresce com seu negócio, sem interrupções ou retrabalho.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="#formulario-cta" 
                        className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg inline-flex items-center transition-all text-sm"
                      >
                        Solicitar Avaliação Gratuita <i className="ri-arrow-right-line ml-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Segurança Cloud */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                  <div className="p-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">Segurança Cloud</h2>
                    
                    <p className="text-base md:text-lg text-gray-700 mb-4 text-center">
                      Proteja seus ativos digitais com nossa abordagem multicamada de segurança para ambientes cloud.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-eye-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Monitoramento 24/7</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Vigilância contínua de seus ambientes cloud com detecção de anomalias baseada em IA.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-shield-flash-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Resposta a Ameaças</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Contenção e remediação rápida de ameaças para minimizar impacto e tempo de inatividade.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-file-list-3-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Conformidade Regulatória</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Garantia de conformidade com LGPD, ISO 27001, PCI DSS e outras regulamentações relevantes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="#formulario-cta" 
                        className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg inline-flex items-center transition-all text-sm"
                      >
                        Solicitar Avaliação Gratuita <i className="ri-arrow-right-line ml-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Receita B2B */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                  <div className="p-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">Receita B2B</h2>
                    
                    <p className="text-base md:text-lg text-gray-700 mb-4 text-center">
                      Transforme seu processo de vendas B2B com nossa metodologia de engenharia de receita previsível.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-customer-service-2-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Vendas Consultiva</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Metodologia que transforma seu time de vendas em consultores estratégicos para seus clientes.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-settings-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Automação de Processos</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Ferramentas e workflows que eliminam tarefas manuais e aumentam a produtividade da equipe comercial.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl text-primary mb-2 text-center">
                          <i className="ri-line-chart-line"></i>
                        </div>
                        <h3 className="text-base font-bold mb-2 text-center">Análise Preditiva</h3>
                        <p className="text-gray-700 text-center text-sm">
                          Modelos analíticos que preveem comportamento de compra e identificam oportunidades de upsell e cross-sell.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="#formulario-cta" 
                        className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg inline-flex items-center transition-all text-sm"
                      >
                        Solicitar Avaliação Gratuita <i className="ri-arrow-right-line ml-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Seção CTA */}
        <section id="formulario-cta" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Lado esquerdo - Imagem */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 z-10"></div>
                <Image 
                  src="/cta-image.jpg" 
                  alt="Equipe AORKIA" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Transforme seu negócio</h3>
                    <p className="text-base md:text-lg">Converse com nossos especialistas</p>
                  </div>
                </div>
              </div>
              
              {/* Lado direito - Formulário */}
              <div className="w-full md:w-1/2 p-5 md:p-6">
                <h3 className="text-xl font-bold mb-4">Solicite uma avaliação gratuita</h3>
                <form className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                      <input 
                        type="text" 
                        id="nome" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                      <input 
                        type="text" 
                        id="cargo" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email corporativo</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Telefone</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">Assunto de Interesse</label>
                    <select 
                      id="assunto" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="backup-saas">Backup SaaS Estratégico</option>
                      <option value="infraestrutura">Infraestrutura Estratégica</option>
                      <option value="seguranca-cloud">Segurança Cloud</option>
                      <option value="receita-b2b">Receita B2B</option>
                    </select>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Solicitar Contato
                    </button>
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
