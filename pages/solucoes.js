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
        'Backup SaaS': {
          'Executivo C-Level': {
            message: 'Diagnóstico Estratégico: Sua posição de liderança exige garantia de continuidade de negócios. Identificamos que sua estratégia de Backup SaaS atual apresenta vulnerabilidades críticas que podem comprometer decisões executivas e gerar riscos regulatórios significativos. Recomendamos uma avaliação imediata da sua postura de resiliência de dados.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestor de TI': {
            message: 'Diagnóstico Técnico-Gerencial: Como responsável pela infraestrutura tecnológica, sua atual abordagem de Backup SaaS apresenta lacunas operacionais que comprometem SLAs e aumentam o risco de perda de dados críticos. Identificamos oportunidades para otimizar processos, reduzir overhead operacional e implementar automações que eliminariam pontos cegos na proteção de dados.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua infraestrutura atual de Backup SaaS apresenta deficiências arquiteturais que comprometem a integridade e disponibilidade dos dados. Identificamos oportunidades para implementar soluções de proteção de dados de última geração que eliminariam vulnerabilidades técnicas e otimizariam processos de recuperação.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Infraestrutura': {
          'Executivo C-Level': {
            message: 'Diagnóstico Estratégico: Sua infraestrutura atual está limitando a capacidade de inovação e crescimento do negócio. Como líder, você enfrenta desafios de escalabilidade que impactam diretamente resultados financeiros e vantagem competitiva. Identificamos oportunidades para transformar sua infraestrutura em um ativo estratégico que impulsiona inovação.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestor de TI': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor, você enfrenta o desafio de equilibrar manutenção da infraestrutura existente com a necessidade de modernização. Sua arquitetura atual apresenta ineficiências que aumentam custos operacionais e limitam a agilidade do negócio. Identificamos oportunidades para otimizar recursos e implementar automações que reduziriam significativamente o overhead operacional.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua infraestrutura atual apresenta gargalos técnicos que comprometem performance e escalabilidade. Identificamos oportunidades para implementar arquiteturas modernas que eliminariam pontos únicos de falha e otimizariam a utilização de recursos, permitindo maior flexibilidade e resiliência operacional.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Segurança Cloud': {
          'Executivo C-Level': {
            message: 'Diagnóstico Estratégico: Sua postura de segurança cloud atual expõe a organização a riscos significativos de compliance e reputação. Como líder, você enfrenta o desafio de proteger ativos digitais críticos em um cenário de ameaças cada vez mais sofisticadas. Identificamos vulnerabilidades que poderiam ser exploradas para comprometer dados sensíveis e propriedade intelectual.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestor de TI': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor responsável pela segurança, você enfrenta o desafio de manter visibilidade e controle em ambientes cloud distribuídos. Sua abordagem atual apresenta lacunas que dificultam a detecção e resposta a ameaças em tempo hábil. Identificamos oportunidades para implementar controles de segurança adaptativos que fortaleceriam significativamente sua postura de proteção.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua arquitetura de segurança cloud atual apresenta vulnerabilidades técnicas que poderiam ser exploradas por atacantes. Identificamos oportunidades para implementar controles de segurança avançados que forneceriam proteção em profundidade e visibilidade granular sobre atividades suspeitas, fortalecendo significativamente sua postura de segurança.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Receita B2B': {
          'Executivo C-Level': {
            message: 'Diagnóstico Estratégico: Sua abordagem atual de geração de receita B2B apresenta ineficiências que limitam o crescimento e previsibilidade financeira. Como líder, você enfrenta o desafio de escalar operações comerciais de forma sustentável. Identificamos oportunidades para implementar uma metodologia de engenharia de receita que transformaria seu processo de vendas em um motor de crescimento previsível.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestor de TI': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor de tecnologia, você tem a oportunidade de transformar a infraestrutura tecnológica em um habilitador estratégico para o crescimento de receita B2B. Sua stack tecnológica atual não está otimizada para suportar processos comerciais escaláveis. Identificamos oportunidades para implementar soluções que aumentariam significativamente a eficiência e eficácia da equipe comercial.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Sua infraestrutura técnica atual não está otimizada para suportar processos comerciais B2B escaláveis. Identificamos oportunidades para implementar automações e integrações que eliminariam silos de dados e forneceriam insights acionáveis para a equipe comercial, aumentando significativamente a eficiência e taxa de conversão.',
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
      </Head>

      <main>
        {/* Seção Hero com Interface Inteligente */}
        <section className="relative py-16 md:py-24 overflow-hidden min-h-screen">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            {interfaceMode === 'intelligent' ? (
              <div className="py-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
                  Interface Inteligente de Soluções AORKIA
                </h1>
                
                <div className="interface-border">
                  <div className={`bg-white rounded-lg overflow-hidden ${viewMode === '70-30' ? 'view-mode-70-30' : 'view-mode-30-70'}`}>
                    {/* Área de Chat */}
                    <div className="chat-container bg-white">
                      <div className="chat-header bg-primary">
                        <div className="flex justify-between items-center">
                          <span>Assistente Estratégico AORKIA</span>
                          <button 
                            onClick={handleReset}
                            className="text-white hover:text-gray-200 transition-colors"
                            aria-label="Reiniciar conversa"
                          >
                            <i className="ri-refresh-line"></i>
                          </button>
                        </div>
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
                          <div className="flex flex-col gap-2 mt-4">
                            <p className="text-gray-700">Selecione abaixo a frente que mais representa seu foco atual:</p>
                            <button 
                              onClick={() => handleAreaSelection('Backup SaaS')}
                              className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              ➤ Backup SaaS Estratégico
                            </button>
                            <button 
                              onClick={() => handleAreaSelection('Infraestrutura')}
                              className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              ➤ Infraestrutura Estratégica
                            </button>
                            <button 
                              onClick={() => handleAreaSelection('Segurança Cloud')}
                              className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              ➤ Segurança Cloud
                            </button>
                            <button 
                              onClick={() => handleAreaSelection('Receita B2B')}
                              className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              ➤ Receita B2B
                            </button>
                          </div>
                        )}
                        
                        {currentStep === 1 && selectedArea && !selectedProfile && (
                          <div className="flex flex-col gap-2 mt-4">
                            <p className="text-gray-700">Selecione a opção que mais representa seu perfil:</p>
                            <button 
                              onClick={() => handleProfileSelection('Executivo C-Level')}
                              className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              ➤ Executivo C-Level
                            </button>
                            <button 
                              onClick={() => handleProfileSelection('Gestor de TI')}
                              className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              ➤ Gestor de TI
                            </button>
                            <button 
                              onClick={() => handleProfileSelection('Especialista Técnico')}
                              className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              ➤ Especialista Técnico
                            </button>
                          </div>
                        )}
                        
                        {currentStep === 2 && selectedArea && selectedProfile && (
                          <div className="mt-4">
                            <div className="bg-white border border-primary rounded-lg p-4 mb-4">
                              <h3 className="text-lg font-bold text-primary mb-2">Próximos Passos Recomendados:</h3>
                              <div className="flex flex-col sm:flex-row gap-3">
                                <a 
                                  href="#formulario-cta" 
                                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
                                >
                                  <i className="ri-file-text-line"></i>
                                  <span>Blueprint Técnico Exclusivo</span>
                                </a>
                                <a 
                                  href="#formulario-cta" 
                                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
                                >
                                  <i className="ri-calendar-line"></i>
                                  <span>Agende uma conversa</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Referência para rolar para o final das mensagens */}
                        <div ref={messagesEndRef} />
                      </div>
                      
                      <div className="chat-input">
                        <button 
                          onClick={handleReset}
                          className="reset-button"
                          aria-label="Reiniciar conversa"
                        >
                          <i className="ri-refresh-line"></i>
                        </button>
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
                    <div className="bg-gray-50 p-4 overflow-y-auto">
                      {viewMode === '70-30' ? (
                        <div>
                          <h3 className="text-lg font-bold mb-4">Conteúdo Recomendado</h3>
                          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                            <h4 className="font-bold text-primary">Whitepaper</h4>
                            <p className="text-sm text-gray-700">Estratégias de Proteção de Dados para Ambientes SaaS</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-bold text-primary">Case Study</h4>
                            <p className="text-sm text-gray-700">Como a Empresa X reduziu custos de backup em 60%</p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h3 className="text-lg font-bold mb-4">Diagnóstico Personalizado</h3>
                          
                          {selectedArea && selectedProfile && (
                            <div className="space-y-4">
                              <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-primary mb-2">Sua Situação Atual</h4>
                                <p className="text-sm text-gray-700">
                                  Com base no seu perfil de {selectedProfile} e foco em {selectedArea}, identificamos pontos críticos que exigem atenção imediata.
                                </p>
                              </div>
                              
                              <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-primary mb-2">Oportunidades de Melhoria</h4>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                  <li>Implementação de arquitetura resiliente</li>
                                  <li>Otimização de processos operacionais</li>
                                  <li>Automação de tarefas repetitivas</li>
                                  <li>Visibilidade e controle centralizado</li>
                                </ul>
                              </div>
                              
                              <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold text-primary mb-2">Recursos Exclusivos</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                                    <i className="ri-calculator-line"></i>
                                    <span>Calculadora de ROI</span>
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
                <button 
                  onClick={toggleInterfaceMode}
                  className="traditional-nav-button bg-primary"
                  aria-label="Alternar para navegação tradicional"
                >
                  <i className="ri-layout-grid-line mr-2"></i>
                  <span>Prefiro Navegação Tradicional</span>
                </button>
              </div>
            ) : (
              <div className="py-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
                  Soluções AORKIA
                </h1>
                
                <div className="bg-primary/10 backdrop-blur-sm p-4 rounded-lg mb-12 border border-primary/30">
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
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Backup SaaS Estratégico</h2>
                    
                    <p className="text-lg text-gray-700 mb-8 text-center">
                      Proteja seus dados críticos na nuvem com a solução líder global em backup SaaS.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-cloud-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Microsoft 365</h3>
                        <p className="text-gray-700 text-center">
                          Backup completo para Exchange Online, SharePoint, OneDrive e Teams.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-google-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Google Workspace</h3>
                        <p className="text-gray-700 text-center">
                          Proteção para Gmail, Drive, Contatos, Calendário e muito mais.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-database-2-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Salesforce</h3>
                        <p className="text-gray-700 text-center">
                          Backup e recuperação granular para seus dados de CRM críticos.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-bold mb-4 text-center">Por que escolher a Keepit?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <div className="text-primary mr-2">
                            <i className="ri-check-line text-xl"></i>
                          </div>
                          <p className="text-gray-700">
                            <span className="font-medium">Líder global</span> com mais de 15.000 clientes em 74 países
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="text-primary mr-2">
                            <i className="ri-check-line text-xl"></i>
                          </div>
                          <p className="text-gray-700">
                            <span className="font-medium">Infraestrutura independente</span> com data centers próprios
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="text-primary mr-2">
                            <i className="ri-check-line text-xl"></i>
                          </div>
                          <p className="text-gray-700">
                            <span className="font-medium">Recuperação instantânea</span> com pesquisa avançada
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="text-primary mr-2">
                            <i className="ri-check-line text-xl"></i>
                          </div>
                          <p className="text-gray-700">
                            <span className="font-medium">Criptografia de ponta a ponta</span> e conformidade com GDPR/LGPD
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="#formulario-cta" 
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg inline-flex items-center transition-all"
                      >
                        Solicitar Avaliação Gratuita <i className="ri-arrow-right-line ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Infraestrutura Estratégica */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Infraestrutura Estratégica</h2>
                    
                    <p className="text-lg text-gray-700 mb-8 text-center">
                      Transforme sua infraestrutura em um ativo estratégico que impulsiona inovação e crescimento.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-server-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Alta Disponibilidade</h3>
                        <p className="text-gray-700 text-center">
                          Arquiteturas resilientes que garantem continuidade de negócios mesmo em cenários críticos.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-speed-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Otimização de Performance</h3>
                        <p className="text-gray-700 text-center">
                          Análise e ajuste fino de sistemas para máxima eficiência e velocidade de resposta.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-scales-3-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Escalabilidade</h3>
                        <p className="text-gray-700 text-center">
                          Infraestrutura que cresce com seu negócio, sem interrupções ou retrabalho.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="#formulario-cta" 
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg inline-flex items-center transition-all"
                      >
                        Solicitar Avaliação Gratuita <i className="ri-arrow-right-line ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Segurança Cloud */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Segurança Cloud</h2>
                    
                    <p className="text-lg text-gray-700 mb-8 text-center">
                      Proteja seus ativos digitais com nossa abordagem multicamada de segurança para ambientes cloud.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-eye-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Monitoramento 24/7</h3>
                        <p className="text-gray-700 text-center">
                          Vigilância contínua de seus ambientes cloud com detecção de anomalias baseada em IA.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-shield-flash-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Resposta a Ameaças</h3>
                        <p className="text-gray-700 text-center">
                          Contenção e remediação rápida de ameaças para minimizar impacto e tempo de inatividade.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-file-list-3-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Conformidade Regulatória</h3>
                        <p className="text-gray-700 text-center">
                          Garantia de conformidade com LGPD, ISO 27001, PCI DSS e outras regulamentações relevantes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="#formulario-cta" 
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg inline-flex items-center transition-all"
                      >
                        Solicitar Avaliação Gratuita <i className="ri-arrow-right-line ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Receita B2B */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Receita B2B</h2>
                    
                    <p className="text-lg text-gray-700 mb-8 text-center">
                      Transforme seu processo de vendas B2B com nossa metodologia de engenharia de receita previsível.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-customer-service-2-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Vendas Consultiva</h3>
                        <p className="text-gray-700 text-center">
                          Metodologia que transforma seu time de vendas em consultores estratégicos para seus clientes.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-settings-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Automação de Processos</h3>
                        <p className="text-gray-700 text-center">
                          Ferramentas e workflows que eliminam tarefas manuais e aumentam a produtividade da equipe comercial.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-4xl text-primary mb-4">
                          <i className="ri-line-chart-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center">Análise Preditiva</h3>
                        <p className="text-gray-700 text-center">
                          Modelos analíticos que preveem comportamento de compra e identificam oportunidades de upsell e cross-sell.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <a 
                        href="#formulario-cta" 
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg inline-flex items-center transition-all"
                      >
                        Solicitar Avaliação Gratuita <i className="ri-arrow-right-line ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Seção CTA */}
        <section id="formulario-cta" className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="nome" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                    <input 
                      type="text" 
                      id="cargo" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">Assunto de Interesse</label>
                  <select 
                    id="assunto" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
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
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Solicitar Contato
                  </button>
                </div>
              </form>
              
              <p className="text-gray-600 text-sm text-center mt-6">
                Descubra como nossas soluções podem impulsionar sua empresa.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
