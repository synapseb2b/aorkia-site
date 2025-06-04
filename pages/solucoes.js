import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
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
        'Operações de Bordas Inteligentes': {
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
            message: 'Baseado no seu perfil e interesse em Operações de Bordas Inteligentes, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Segurança para Operações Críticas': {
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
            message: 'Baseado no seu perfil e interesse em Segurança para Operações Críticas, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Plataforma de Inteligência de Receita com IA': {
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
            message: 'Baseado no seu perfil e interesse em Plataforma de Inteligência de Receita com IA, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        },
        'Estratégia de Presença Digital AORKIA': {
          'Liderança Executiva / Estratégica': {
            message: 'Diagnóstico Estratégico: Como líder, você enfrenta o desafio de garantir que sua presença digital esteja alinhada com os objetivos estratégicos do negócio. Sua abordagem atual não está otimizada para gerar leads qualificados e converter visitantes em clientes. Identificamos oportunidades para implementar uma estratégia digital integrada que aumentaria significativamente o ROI dos seus investimentos digitais.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Gestão Técnica / Operacional': {
            message: 'Diagnóstico Técnico-Gerencial: Como gestor, você enfrenta o desafio de integrar múltiplas plataformas digitais e garantir uma experiência consistente para os usuários. Sua infraestrutura digital atual apresenta silos que dificultam a coleta e análise de dados. Identificamos oportunidades para implementar uma arquitetura digital integrada que forneceria uma visão unificada do cliente e otimizaria a jornada de compra.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Especialista Técnico': {
            message: 'Diagnóstico Técnico-Especializado: Como especialista técnico, você enfrenta o desafio de implementar e manter uma infraestrutura digital que suporte os objetivos de negócio. Sua stack tecnológica atual não está otimizada para performance, escalabilidade e segurança. Identificamos oportunidades para implementar uma arquitetura moderna que melhoraria significativamente a experiência do usuário e facilitaria a implementação de novas funcionalidades.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          },
          'Outro': {
            message: 'Baseado no seu perfil e interesse em Estratégia de Presença Digital AORKIA, recomendamos uma análise personalizada com nossos especialistas para identificar as melhores soluções para o seu contexto específico.',
            recommendations: ['Blueprint Técnico Exclusivo', 'Conversa Estratégica']
          }
        }
      };

      // Verifica se a área e o perfil existem no objeto de diagnósticos
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
        message: "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, entre em contato diretamente com nossa equipe para uma análise personalizada.",
        recommendations: ['Contato Direto']
      };
    }
  };

  // Função para lidar com erros
  const handleError = () => {
    setMessages(prev => [...prev, 
      { 
        type: 'ai', 
        content: "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente ou entre em contato diretamente com nossa equipe." 
      }
    ]);
  };

  // Função para reiniciar a interface
  const handleReset = () => {
    setCurrentStep(0);
    setSelectedArea(null);
    setSelectedProfile(null);
    setViewMode('70-30');
    setMessages([
      {
        type: 'ai',
        content: 'Bem-vindo à AORKIA. Vamos identificar, com precisão, a área crítica da sua operação que precisa evoluir. Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:'
      }
    ]);
  };

  // Função para alternar entre modos de interface
  const toggleInterfaceMode = () => {
    setInterfaceMode(prev => prev === 'intelligent' ? 'traditional' : 'intelligent');
  };

  // Áreas críticas disponíveis para seleção
  const criticalAreas = [
    'Backup SaaS Estratégico',
    'Operações de Bordas Inteligentes',
    'Segurança para Operações Críticas',
    'Plataforma de Inteligência de Receita com IA',
    'Estratégia de Presença Digital AORKIA'
  ];

  // Perfis disponíveis para seleção
  const profiles = [
    'Liderança Executiva / Estratégica',
    'Gestão Técnica / Operacional',
    'Especialista Técnico',
    'Outro'
  ];

  return (
    <>
      <Head>
        <title>Soluções | AORKIA</title>
        <meta name="description" content="Conheça nossas soluções especializadas para proteger seus dados, otimizar operações e impulsionar crescimento." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white min-h-screen">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                Nossas <span className="text-primary">Soluções</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mb-12">
                Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Seletor de Interface - Estilo Jam3 */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold">Escolha sua navegação</h2>
                <p className="text-gray-300 mt-2">Selecione o modo que melhor se adapta às suas preferências</p>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setInterfaceMode('intelligent')}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    interfaceMode === 'intelligent' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Interface Inteligente
                </button>
                <button 
                  onClick={() => setInterfaceMode('traditional')}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    interfaceMode === 'traditional' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Navegação Tradicional
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interface Inteligente - Estilo Jam3 */}
        {interfaceMode === 'intelligent' && (
          <section className="py-16 bg-black" ref={chatContainerRef}>
            <div className="container mx-auto max-w-7xl px-4">
              <div className={`grid ${viewMode === '70-30' ? 'grid-cols-1 lg:grid-cols-7' : 'grid-cols-1 lg:grid-cols-10'} gap-8`}>
                {/* Chat Interface */}
                <div className={`${viewMode === '70-30' ? 'lg:col-span-5' : 'lg:col-span-3'} bg-gray-900 rounded-xl overflow-hidden border border-gray-800`}>
                  <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Interface Inteligente AORKIA</h3>
                    <button 
                      onClick={handleReset}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <i className="ri-restart-line text-xl"></i>
                    </button>
                  </div>
                  
                  <div className="p-6 h-[500px] overflow-y-auto" ref={chatMessagesRef}>
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`mb-6 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg p-4 ${
                            message.type === 'user' 
                              ? 'bg-primary text-white rounded-tr-none' 
                              : 'bg-gray-800 text-white rounded-tl-none'
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                    
                    {/* Indicador de digitação */}
                    {showTyping && (
                      <div className="mb-6 flex justify-start">
                        <div className="bg-gray-800 text-white rounded-lg rounded-tl-none p-4 max-w-[80%]">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                  
                  <div className="p-6 border-t border-gray-800">
                    {currentStep === 0 && (
                      <div className="grid grid-cols-1 gap-4">
                        {criticalAreas.map((area, index) => (
                          <button
                            key={index}
                            onClick={() => handleAreaSelection(area)}
                            className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg text-left transition-colors"
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {currentStep === 1 && (
                      <div className="grid grid-cols-1 gap-4">
                        {profiles.map((profile, index) => (
                          <button
                            key={index}
                            onClick={() => handleProfileSelection(profile)}
                            className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg text-left transition-colors"
                          >
                            {profile}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {currentStep === 2 && (
                      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <Link 
                          href="/contato" 
                          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all text-center flex-1"
                        >
                          Solicitar Contato
                        </Link>
                        <button 
                          onClick={handleReset}
                          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all text-center"
                        >
                          Reiniciar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Informações Complementares */}
                <div className={`${viewMode === '70-30' ? 'lg:col-span-2' : 'lg:col-span-7'} bg-gray-900 rounded-xl overflow-hidden border border-gray-800`}>
                  <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Informações Complementares</h3>
                    <button 
                      onClick={() => setViewMode(prev => prev === '70-30' ? '30-70' : '70-30')}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <i className={`ri-${viewMode === '70-30' ? 'layout-right-2' : 'layout-left-2'}-line text-xl`}></i>
                    </button>
                  </div>
                  
                  <div className="p-6 h-[500px] overflow-y-auto">
                    {currentStep < 2 ? (
                      <div className="text-center flex flex-col items-center justify-center h-full">
                        <div className="text-6xl text-gray-600 mb-4">
                          <i className="ri-information-line"></i>
                        </div>
                        <p className="text-gray-400">
                          Informações complementares serão exibidas após a análise do seu perfil.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <h4 className="text-2xl font-bold mb-6">Próximos Passos Recomendados</h4>
                        
                        <div className="space-y-6">
                          <div className="bg-gray-800 p-6 rounded-lg">
                            <div className="text-primary text-3xl mb-4">
                              <i className="ri-file-text-line"></i>
                            </div>
                            <h5 className="text-xl font-bold mb-2">Blueprint Técnico Exclusivo</h5>
                            <p className="text-gray-300">
                              Receba um documento técnico personalizado com recomendações específicas para o seu cenário, incluindo arquitetura de referência e roteiro de implementação.
                            </p>
                          </div>
                          
                          <div className="bg-gray-800 p-6 rounded-lg">
                            <div className="text-primary text-3xl mb-4">
                              <i className="ri-discuss-line"></i>
                            </div>
                            <h5 className="text-xl font-bold mb-2">Conversa Estratégica</h5>
                            <p className="text-gray-300">
                              Agende uma sessão com nossos especialistas para discutir em detalhes os desafios específicos da sua organização e como nossas soluções podem ajudar.
                            </p>
                          </div>
                          
                          <Link 
                            href="/contato" 
                            className="block bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg transition-all text-center mt-6"
                          >
                            Solicitar Contato
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Navegação Tradicional - Estilo Jam3 */}
        {interfaceMode === 'traditional' && (
          <section className="py-16 bg-black">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Backup SaaS Estratégico */}
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-colors group">
                  <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <img 
                      src="/images/backup.png" 
                      alt="Backup SaaS Estratégico" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Backup SaaS Estratégico</h3>
                    <p className="text-gray-300 mb-6">
                      Proteção completa para seus dados críticos na nuvem com a plataforma líder global Keepit.
                    </p>
                    <Link 
                      href="/contato" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
                
                {/* Operações de Bordas Inteligentes */}
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-colors group">
                  <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <img 
                      src="/images/bordas.png" 
                      alt="Operações de Bordas Inteligentes" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Operações de Bordas Inteligentes</h3>
                    <p className="text-gray-300 mb-6">
                      Processamento de dados e inteligência artificial na borda para decisões em tempo real.
                    </p>
                    <Link 
                      href="/contato" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
                
                {/* Segurança para Operações Críticas */}
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-colors group">
                  <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <img 
                      src="/images/dspm.png" 
                      alt="Segurança para Operações Críticas" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Segurança para Operações Críticas</h3>
                    <p className="text-gray-300 mb-6">
                      Visibilidade e controle completos sobre seus dados sensíveis em ambientes multi-cloud.
                    </p>
                    <Link 
                      href="/contato" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
                
                {/* Plataforma de Inteligência de Receita com IA */}
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-colors group">
                  <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <img 
                      src="/images/receitas.png" 
                      alt="Plataforma de Inteligência de Receita com IA" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Plataforma de Inteligência de Receita com IA</h3>
                    <p className="text-gray-300 mb-6">
                      Otimize seus investimentos em nuvem com nossa plataforma de gerenciamento financeiro inteligente.
                    </p>
                    <Link 
                      href="/contato" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
                
                {/* Estratégia de Presença Digital AORKIA */}
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-colors group">
                  <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <img 
                      src="/images/digital.png" 
                      alt="Estratégia de Presença Digital AORKIA" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Estratégia de Presença Digital AORKIA</h3>
                    <p className="text-gray-300 mb-6">
                      Transforme sua presença online com estratégias digitais orientadas por dados e resultados.
                    </p>
                    <Link 
                      href="/contato" 
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
