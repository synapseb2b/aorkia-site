import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Solucoes() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showTraditionalNav, setShowTraditionalNav] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Bem-vindo à AORKIA. Vamos identificar, com precisão, a área crítica da sua operação que precisa evoluir. Selecione abaixo a frente que mais representa seu foco prioritário neste momento:'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);
  const videoRef = useRef(null);
  const logos = ['/images/logo_aorkia_white.png', '/images/logo_aorkia_color.png'];
  
  const options = [
    ['Backup SaaS Estratégico', 'Infraestrutura Estratégica', 'Segurança Cloud', 'Receita B2B'],
    ['CTO / CIO / Diretor de TI', 'CISO / Diretor de Segurança', 'CEO / Diretor Executivo', 'Outro'],
    ['Menos de 50 funcionários', '50-200 funcionários', '201-1000 funcionários', 'Mais de 1000 funcionários']
  ];

  // Efeito para alternar logos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Efeito para controlar o preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Efeito para iniciar o vídeo de fundo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Erro ao reproduzir vídeo:", error);
      });
    }
  }, []);

  // Efeito para scroll automático do chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Função para simular digitação do bot
  const simulateTyping = (callback) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      if (callback) callback();
    }, 1500);
  };

  // Função para processar a seleção do usuário
  const handleOptionSelect = (option) => {
    // Adiciona a mensagem do usuário
    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      content: option
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Simula digitação do bot
    simulateTyping(() => {
      // Determina a próxima mensagem do bot com base no passo atual
      let botResponse;
      
      if (currentStep === 0) {
        botResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: 'Excelente escolha. Para personalizar ainda mais nossa análise, qual é o seu perfil profissional?'
        };
        setCurrentStep(1);
      } else if (currentStep === 1) {
        botResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: 'Obrigado. Qual o tamanho da sua empresa?'
        };
        setCurrentStep(2);
      } else if (currentStep === 2) {
        botResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: 'Perfeito! Com base nas suas respostas, preparamos recomendações personalizadas para sua empresa. Você pode visualizá-las na seção AORKIA Insights ao lado ou continuar a conversa para um diagnóstico mais detalhado.'
        };
        setCurrentStep(3);
      }
      
      if (botResponse) {
        setMessages(prev => [...prev, botResponse]);
      }
    });
  };

  // Função para enviar mensagem do usuário
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Adiciona a mensagem do usuário
    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      content: userInput
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    
    // Simula digitação do bot
    simulateTyping(() => {
      // Resposta personalizada para o passo 3 (após todas as seleções)
      if (currentStep === 3) {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: 'Obrigado por compartilhar mais detalhes. Baseado em sua situação específica, recomendamos agendar uma avaliação gratuita com um de nossos especialistas para uma análise mais aprofundada. Você pode agendar diretamente pelo botão "Solicitar Avaliação Gratuita" abaixo.'
        };
        setMessages(prev => [...prev, botResponse]);
      }
    });
  };

  // Função para reiniciar o chat
  const handleReset = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: 'Bem-vindo à AORKIA. Vamos identificar, com precisão, a área crítica da sua operação que precisa evoluir. Selecione abaixo a frente que mais representa seu foco prioritário neste momento:'
      }
    ]);
    setCurrentStep(0);
  };

  return (
    <div className={`relative ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
      <Head>
        <title>Soluções - AORKIA</title>
        <meta name="description" content="Conheça nossas soluções estratégicas em tecnologia que transformam desafios complexos em crescimento sustentável." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 relative mb-8">
              <Image 
                src="/images/logo_aorkia_white.png" 
                alt="AORKIA" 
                layout="fill" 
                objectFit="contain"
                className="animate-pulse" 
              />
            </div>
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-2000 ease-out"
                style={{ width: `${Math.min(100, (Date.now() % 2500) / 25)}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Menu Lateral Fixo (estilo Jam3) */}
      <div className="fixed top-0 left-0 h-full w-16 z-40 flex flex-col justify-between items-center py-8 border-r border-gray-800">
        {/* Logo Vertical com Transição */}
        <div className="relative w-8 h-32">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 flex items-center justify-center"
              style={{ 
                opacity: activeLogoIndex === index ? 1 : 0,
                transform: 'rotate(-90deg)',
                transformOrigin: 'center'
              }}
            >
              <Image 
                src={logo} 
                alt="AORKIA" 
                width={120} 
                height={30}
                className="object-contain" 
              />
            </div>
          ))}
        </div>

        {/* Menu Sanduíche */}
        <button 
          className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* "SEE OUR WORK" no canto inferior */}
        <div className="transform -rotate-90 whitespace-nowrap text-white text-xs tracking-widest uppercase">
          <Link href="/">
            <a className="hover:text-blue-500 transition-colors duration-300">Voltar para Home</a>
          </Link>
        </div>
      </div>

      {/* Menu Fullscreen */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-30 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {['Home', 'Soluções', 'Sobre', 'Contato'].map((item, index) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              >
                <a 
                  className={`text-4xl md:text-6xl font-bold text-white hover:text-blue-500 transition-all duration-300 transform ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="min-h-screen bg-black text-white pt-16 pb-24">
        {/* Vídeo de Fundo */}
        <div className="fixed inset-0 z-0">
          <video 
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/video_hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 container mx-auto px-4 md:px-16 pt-8">
          {!showTraditionalNav ? (
            <>
              {/* Interface Inteligente */}
              <div className="flex justify-center mb-8">
                <h1 className="text-2xl md:text-4xl font-bold">Interface Inteligente AORKIA</h1>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
                {/* Chat (70% em desktop, 100% em mobile) */}
                <div className="w-full lg:w-7/10 bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 8.1 19.33 6.66 18.12C6.25 17.8 6 17.3 6 16.75C6 14.58 7.72 12.75 10 12.75H14C16.28 12.75 18 14.58 18 16.75C18 17.3 17.75 17.8 17.34 18.12C15.9 19.33 14.03 20 12 20Z" fill="#0076FF"/>
                        </svg>
                      </div>
                      <span className="font-medium">Interface Inteligente AORKIA</span>
                    </div>
                    <button 
                      onClick={handleReset}
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      <span className="text-sm">Reiniciar</span>
                    </button>
                  </div>
                  
                  {/* Área de Chat */}
                  <div 
                    ref={chatRef}
                    className="h-96 md:h-[500px] overflow-y-auto p-4 space-y-4"
                  >
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            message.type === 'user' 
                              ? 'bg-blue-600 text-white rounded-tr-none' 
                              : 'bg-gray-800 text-white rounded-tl-none'
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                    
                    {/* Indicador de digitação */}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-800 text-white rounded-2xl rounded-tl-none px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Opções de Resposta */}
                  {currentStep < 3 && (
                    <div className="p-4 border-t border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {options[currentStep].map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                            className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4 py-3 text-left transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Input de Mensagem */}
                  <div className="p-4 border-t border-gray-800">
                    <form onSubmit={handleSendMessage} className="flex items-center">
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Escreva aqui..."
                        className="flex-1 bg-gray-800 text-white rounded-l-full px-4 py-2 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-full p-2 transition-colors"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                        </svg>
                      </button>
                    </form>
                    <div className="mt-2 text-xs text-gray-500 text-center">
                      Evite compartilhar informações confidenciais/sensíveis.
                    </div>
                  </div>
                </div>
                
                {/* Área de Insights (30% em desktop, 100% em mobile) */}
                <div className="w-full lg:w-3/10 space-y-4">
                  <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">AORKIA Insights</h2>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="flex items-start mb-2">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="font-medium">Diagnóstico Estratégico</span>
                        </div>
                        <p className="text-sm text-gray-300">Identificamos pontos críticos com precisão</p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <div className="flex items-start mb-2">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="font-medium">Soluções Personalizadas</span>
                        </div>
                        <p className="text-sm text-gray-300">Recomendações baseadas no seu perfil</p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4 py-2">
                        <div className="flex items-start mb-2">
                          <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                          </svg>
                          <span className="font-medium">Resultados Mensuráveis</span>
                        </div>
                        <p className="text-sm text-gray-300">Impacto direto nos seus indicadores</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-600 rounded-xl p-6 text-center shadow-lg">
                    <h3 className="text-lg font-bold mb-2">Pronto para transformar seu negócio?</h3>
                    <p className="text-sm mb-4">Agende uma avaliação gratuita com nossos especialistas</p>
                    <Link href="/contato">
                      <a className="inline-block bg-white text-blue-600 font-medium rounded-full px-6 py-2 hover:bg-gray-100 transition-colors">
                        Solicitar Avaliação Gratuita
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Botão para alternar para Navegação Tradicional */}
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setShowTraditionalNav(true)}
                  className="bg-transparent border border-white text-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors"
                >
                  Alternar para Navegação Tradicional
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Navegação Tradicional */}
              <div className="flex justify-between items-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold">Nossas Soluções</h1>
                <button
                  onClick={() => setShowTraditionalNav(false)}
                  className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition-colors"
                >
                  Voltar para Interface Inteligente
                </button>
              </div>
              
              {/* Grid de Soluções */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Backup SaaS Estratégico */}
                <div id="backup" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                  <div className="p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Backup SaaS Estratégico</h2>
                    <p className="text-gray-300 mb-6">
                      A AORKIA ativa a Keepit — líder global em backup SaaS — para garantir proteção completa e contínua dos seus dados na nuvem.
                    </p>
                    <div className="border-l-4 border-blue-500 pl-4 py-2 mb-6">
                      <p className="italic text-gray-300">
                        Proteção automatizada, recuperação instantânea, segurança absoluta.
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Backup contínuo e automatizado</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Recuperação instantânea e granular</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Criptografia de ponta a ponta</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 mb-6">
                      A AORKIA + Keepit protege seus dados críticos em Microsoft 365, Google Workspace, Salesforce e muito mais.
                    </p>
                    <Link href="/contato">
                      <a className="inline-block bg-blue-600 text-white font-medium rounded-full px-6 py-2 hover:bg-blue-700 transition-colors">
                        Solicitar Demonstração
                      </a>
                    </Link>
                  </div>
                </div>
                
                {/* Infraestrutura Estratégica */}
                <div id="infraestrutura" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                  <div className="p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Infraestrutura Estratégica</h2>
                    <p className="text-gray-300 mb-6">
                      Transformamos sua infraestrutura em um ativo estratégico que impulsiona inovação e crescimento sustentável.
                    </p>
                    <div className="border-l-4 border-green-500 pl-4 py-2 mb-6">
                      <p className="italic text-gray-300">
                        Arquitetura resiliente, performance otimizada, escalabilidade garantida.
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Arquitetura de alta disponibilidade</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Otimização de performance</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Escalabilidade sob demanda</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 mb-6">
                      Soluções de infraestrutura que equilibram performance, segurança e custo-benefício para seu negócio.
                    </p>
                    <Link href="/contato">
                      <a className="inline-block bg-green-600 text-white font-medium rounded-full px-6 py-2 hover:bg-green-700 transition-colors">
                        Solicitar Avaliação
                      </a>
                    </Link>
                  </div>
                </div>
                
                {/* Segurança Cloud */}
                <div id="seguranca" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                  <div className="p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Segurança Cloud</h2>
                    <p className="text-gray-300 mb-6">
                      Proteja seus ambientes cloud com soluções avançadas de segurança que garantem visibilidade, controle e conformidade.
                    </p>
                    <div className="border-l-4 border-purple-500 pl-4 py-2 mb-6">
                      <p className="italic text-gray-300">
                        Proteção contínua, detecção avançada, resposta automatizada.
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Cloud Security Posture Management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Proteção contra ameaças avançadas</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Gestão de identidades e acessos</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 mb-6">
                      Soluções integradas para proteger seus dados e aplicações em ambientes multi-cloud e híbridos.
                    </p>
                    <Link href="/contato">
                      <a className="inline-block bg-purple-600 text-white font-medium rounded-full px-6 py-2 hover:bg-purple-700 transition-colors">
                        Solicitar Consultoria
                      </a>
                    </Link>
                  </div>
                </div>
                
                {/* Receita B2B */}
                <div id="receita" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                  <div className="p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Receita B2B</h2>
                    <p className="text-gray-300 mb-6">
                      Estratégias e soluções para impulsionar seu crescimento comercial e maximizar resultados no mercado B2B.
                    </p>
                    <div className="border-l-4 border-yellow-500 pl-4 py-2 mb-6">
                      <p className="italic text-gray-300">
                        Aquisição estratégica, conversão otimizada, retenção ampliada.
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Estratégias de aquisição de clientes</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Otimização de funil de vendas</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Programas de fidelização e expansão</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 mb-6">
                      Abordagem data-driven para identificar oportunidades, otimizar processos e aumentar sua receita B2B.
                    </p>
                    <Link href="/contato">
                      <a className="inline-block bg-yellow-600 text-white font-medium rounded-full px-6 py-2 hover:bg-yellow-700 transition-colors">
                        Solicitar Estratégia
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-blue-600 rounded-xl p-8 text-center shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para transformar seu negócio?</h2>
                <p className="text-xl mb-6">Descubra como nossas soluções estratégicas podem impulsionar sua empresa.</p>
                <Link href="/contato">
                  <a className="inline-block bg-white text-blue-600 font-medium rounded-full px-8 py-3 hover:bg-gray-100 transition-colors">
                    Solicitar Avaliação Gratuita
                  </a>
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="mb-8 md:mb-0">
              <Image 
                src="/images/logo_aorkia_white.png" 
                alt="AORKIA" 
                width={180} 
                height={45}
                className="object-contain" 
              />
            </div>
            <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              {['Home', 'Soluções', 'Sobre', 'Contato'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                >
                  <a className="text-lg hover:text-blue-500 transition-colors">{item}</a>
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AORKIA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0 md:mr-8">
          Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <Link href="/politica-privacidade"><a className="underline">Política de Privacidade</a></Link>.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-transparent border border-white text-white text-sm rounded hover:bg-white hover:text-gray-900 transition-colors">
            Configurações
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
