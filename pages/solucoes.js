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
        content: 'Bem-vindo à AORKIA. Vamos identificar, com precisão, a área crítica da sua operação que precisa evoluir. Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:'
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
      </Head>

      <main className="bg-black text-white min-h-screen">
        {/* Hero Section - Estilo Jam3 */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Interface Inteligente de <span className="text-primary">Soluções AORKIA</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                Um mecanismo de diagnóstico estratégico que identifica com precisão os pontos críticos de sua operação e recomenda soluções personalizadas.
              </p>
            </div>
          </div>
        </section>

        {/* Interface Inteligente - Redesenhada no estilo ChatGPT/Jam3 */}
        <section className="py-10 md:py-16 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className={`chat-interface-container ${interfaceMode === 'intelligent' ? 'block' : 'hidden'}`}>
              <div className={`chat-interface ${viewMode === '70-30' ? 'mode-70-30' : 'mode-30-70'}`} ref={chatContainerRef}>
                <div className="chat-layout">
                  {/* Área do Chat - Lado Esquerdo */}
                  <div className="chat-area">
                    <div className="chat-header">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
                            <i className="ri-robot-line text-white"></i>
                          </div>
                          <h3 className="font-medium">Interface Inteligente AORKIA</h3>
                        </div>
                        <button 
                          onClick={handleReset}
                          className="text-sm px-3 py-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                        >
                          Reiniciar
                        </button>
                      </div>
                    </div>
                    
                    <div className="chat-messages" ref={chatMessagesRef}>
                      {messages.map((msg, index) => (
                        <div 
                          key={index} 
                          className={`message ${msg.type === 'ai' ? 'ai-message' : 'user-message'}`}
                        >
                          <div className="message-content">
                            {msg.content}
                          </div>
                        </div>
                      ))}
                      
                      {showTyping && (
                        <div className="message ai-message">
                          <div className="message-content typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      )}
                      
                      {currentStep === 0 && !selectedArea && (
                        <div className="options-container">
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
                      
                      {currentStep === 1 && !selectedProfile && (
                        <div className="options-container">
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
                      
                      <div ref={messagesEndRef} />
                    </div>
                    
                    <div className="chat-input">
                      <form onSubmit={handleSendMessage} className="flex items-center">
                        <input
                          type="text"
                          value={userMessage}
                          onChange={(e) => setUserMessage(e.target.value)}
                          placeholder="Escreva aqui..."
                          className="flex-grow px-4 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-primary"
                        />
                        <button
                          type="submit"
                          className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg"
                        >
                          <i className="ri-send-plane-fill"></i>
                        </button>
                      </form>
                      <div className="text-xs text-gray-400 mt-2 text-center">
                        Evite compartilhar informações confidenciais/sensíveis.
                      </div>
                    </div>
                  </div>
                  
                  {/* Área Complementar - Lado Direito */}
                  <div className="complementary-area">
                    {viewMode === '70-30' ? (
                      <div className="complementary-content">
                        <h3 className="text-xl font-bold mb-4">AORKIA Insights</h3>
                        <div className="status-panel">
                          <div className="status-item">
                            <div className="status-icon">
                              <i className="ri-shield-check-line"></i>
                            </div>
                            <div className="status-text">
                              <h4>Diagnóstico Estratégico</h4>
                              <p>Identificamos pontos críticos com precisão</p>
                            </div>
                          </div>
                          <div className="status-item">
                            <div className="status-icon">
                              <i className="ri-rocket-line"></i>
                            </div>
                            <div className="status-text">
                              <h4>Soluções Personalizadas</h4>
                              <p>Recomendações baseadas no seu perfil</p>
                            </div>
                          </div>
                          <div className="status-item">
                            <div className="status-icon">
                              <i className="ri-line-chart-line"></i>
                            </div>
                            <div className="status-text">
                              <h4>Resultados Mensuráveis</h4>
                              <p>Impacto direto nos seus indicadores</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="recommended-content">
                        <h3 className="text-xl font-bold mb-4">Conteúdo Recomendado</h3>
                        {selectedArea && selectedProfile && (
                          <div className="recommendation-panel">
                            <div className="recommendation-header">
                              <h4 className="text-lg font-semibold">{selectedArea}</h4>
                              <p className="text-sm text-gray-400">{selectedProfile}</p>
                            </div>
                            
                            <div className="recommendation-actions">
                              <a 
                                href="#blueprint"
                                className="action-button primary"
                              >
                                <i className="ri-file-text-line mr-2"></i>
                                Blueprint Técnico Exclusivo
                              </a>
                              <a 
                                href="#agendar"
                                className="action-button secondary"
                              >
                                <i className="ri-calendar-line mr-2"></i>
                                Agendar Conversa Estratégica
                              </a>
                            </div>
                            
                            <div className="related-resources">
                              <h5 className="text-md font-medium mb-2">Recursos Relacionados</h5>
                              <ul className="resource-list">
                                <li>
                                  <a href="#case-study">
                                    <i className="ri-article-line mr-2"></i>
                                    Case Study: Transformação Digital
                                  </a>
                                </li>
                                <li>
                                  <a href="#whitepaper">
                                    <i className="ri-file-paper-line mr-2"></i>
                                    Whitepaper: Estratégias de {selectedArea}
                                  </a>
                                </li>
                                <li>
                                  <a href="#webinar">
                                    <i className="ri-video-line mr-2"></i>
                                    Webinar: Tendências em {selectedArea}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`traditional-interface ${interfaceMode === 'traditional' ? 'block' : 'hidden'}`}>
              {/* Conteúdo da interface tradicional */}
            </div>
            
            <div className="interface-toggle mt-6 text-center">
              <button 
                onClick={toggleInterfaceMode}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
              >
                {interfaceMode === 'intelligent' 
                  ? 'Alternar para Navegação Tradicional' 
                  : 'Voltar para Interface Inteligente'}
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section - Estilo Jam3 */}
        <section className="py-16 bg-black">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
                Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
              </p>
              <a 
                href="#solicitar-avaliacao"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              >
                Solicitar Avaliação Gratuita
              </a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* Estilos para a Interface Inteligente no estilo ChatGPT/Jam3 */
        .chat-interface-container {
          width: 100%;
        }
        
        .chat-interface {
          background-color: #121212;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          height: 600px;
          max-height: 80vh;
          margin: 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .chat-layout {
          display: flex;
          height: 100%;
        }
        
        .mode-70-30 .chat-area {
          width: 70%;
        }
        
        .mode-70-30 .complementary-area {
          width: 30%;
        }
        
        .mode-30-70 .chat-area {
          width: 30%;
        }
        
        .mode-30-70 .complementary-area {
          width: 70%;
        }
        
        .chat-area {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          transition: width 0.5s ease;
        }
        
        .chat-header {
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background-color: #1a1a1a;
        }
        
        .chat-messages {
          flex-grow: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .message {
          max-width: 85%;
          padding: 12px 16px;
          border-radius: 12px;
          animation: fadeIn 0.3s ease;
        }
        
        .ai-message {
          align-self: flex-start;
          background-color: #2a2a2a;
          border-bottom-left-radius: 4px;
        }
        
        .user-message {
          align-self: flex-end;
          background-color: #0076FF;
          border-bottom-right-radius: 4px;
        }
        
        .message-content {
          line-height: 1.5;
        }
        
        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .typing-indicator span {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          display: inline-block;
          animation: typing 1.4s infinite ease-in-out both;
        }
        
        .typing-indicator span:nth-child(1) {
          animation-delay: -0.32s;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: -0.16s;
        }
        
        .options-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
          margin-bottom: 8px;
        }
        
        .option-button {
          background-color: #2a2a2a;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 10px 16px;
          text-align: left;
          transition: all 0.2s ease;
        }
        
        .option-button:hover {
          background-color: #333;
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .chat-input {
          padding: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background-color: #1a1a1a;
        }
        
        .complementary-area {
          padding: 20px;
          background-color: #1a1a1a;
          overflow-y: auto;
          transition: width 0.5s ease;
        }
        
        .status-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }
        
        .status-item {
          display: flex;
          gap: 12px;
          padding: 12px;
          background-color: #2a2a2a;
          border-radius: 8px;
        }
        
        .status-icon {
          font-size: 24px;
          color: #0076FF;
        }
        
        .recommendation-panel {
          background-color: #2a2a2a;
          border-radius: 8px;
          padding: 16px;
          margin-top: 16px;
        }
        
        .recommendation-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 16px;
          margin-bottom: 16px;
        }
        
        .action-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .action-button.primary {
          background-color: #0076FF;
          color: white;
        }
        
        .action-button.primary:hover {
          background-color: #0065d9;
        }
        
        .action-button.secondary {
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .action-button.secondary:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        
        .related-resources {
          margin-top: 20px;
        }
        
        .resource-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .resource-list li a {
          display: flex;
          align-items: center;
          color: #0076FF;
          font-size: 14px;
          padding: 6px 0;
        }
        
        .resource-list li a:hover {
          text-decoration: underline;
        }
        
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0.6); }
          40% { transform: scale(1); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Estilos responsivos */
        @media (max-width: 768px) {
          .chat-layout {
            flex-direction: column;
          }
          
          .mode-70-30 .chat-area,
          .mode-30-70 .chat-area,
          .mode-70-30 .complementary-area,
          .mode-30-70 .complementary-area {
            width: 100%;
          }
          
          .chat-area {
            height: 70%;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .complementary-area {
            height: 30%;
          }
          
          .chat-interface {
            height: 80vh;
          }
        }
      `}</style>
    </>
  );
}
