import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Solucoes() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [chatState, setChatState] = useState('welcome');
  const [selectedOption, setSelectedOption] = useState(null);
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Bem-vindo à AORKIA. Vamos identificar, com precisão, a área crítica da sua operação que precisa evoluir. Selecione abaixo a frente que mais representa seu foco prioritário neste momento:'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const videoRef = useRef(null);
  
  // Opções de produtos
  const productOptions = [
    { id: 'backup', name: 'Backup SaaS Estratégico' },
    { id: 'infra', name: 'Infraestrutura Estratégica' },
    { id: 'security', name: 'Segurança Cloud' },
    { id: 'revenue', name: 'Receita B2B' }
  ];
  
  // Opções de perfil
  const profileOptions = [
    { id: 'cto', name: 'CTO / Diretor de TI' },
    { id: 'ciso', name: 'CISO / Responsável por Segurança' },
    { id: 'cfo', name: 'CFO / Diretor Financeiro' },
    { id: 'ceo', name: 'CEO / Diretor Geral' }
  ];

  // Efeito para iniciar o vídeo de fundo quando a página carregar
  useEffect(() => {
    setIsLoaded(true);
    
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Erro ao reproduzir vídeo:", error);
      });
    }

    // Prevenir rolagem automática ao carregar a página
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  // Efeito para rolar para a última mensagem sem mover a página
  useEffect(() => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  // Função para adicionar mensagem
  const addMessage = (type, content) => {
    setMessages(prev => [...prev, { type, content }]);
  };

  // Função para simular digitação da IA
  const simulateTyping = (callback) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, 1500);
  };

  // Função para lidar com a seleção de produto
  const handleProductSelect = (product) => {
    // Adicionar mensagem do usuário
    addMessage('user', product.name);
    
    // Atualizar estado
    setSelectedOption(product);
    setChatState('profile');
    
    // Simular resposta da IA
    simulateTyping(() => {
      addMessage('ai', `Excelente escolha! ${product.name} é uma área crítica para muitas empresas. Para personalizar nossa recomendação, por favor, informe seu perfil profissional:`);
    });
  };

  // Função para lidar com a seleção de perfil
  const handleProfileSelect = (profile) => {
    // Adicionar mensagem do usuário
    addMessage('user', profile.name);
    
    // Atualizar estado
    setChatState('recommendation');
    
    // Simular resposta da IA
    simulateTyping(() => {
      addMessage('ai', `Obrigado! Com base na sua seleção de ${selectedOption.name} e seu perfil de ${profile.name}, preparamos uma recomendação personalizada. Nossa solução pode ajudar a otimizar seus processos, reduzir custos e aumentar a segurança. Gostaria de agendar uma avaliação gratuita com nossos especialistas?`);
    });
  };

  // Função para reiniciar o chat
  const handleReset = () => {
    setChatState('welcome');
    setSelectedOption(null);
    setMessages([
      {
        type: 'ai',
        content: 'Bem-vindo à AORKIA. Vamos identificar, com precisão, a área crítica da sua operação que precisa evoluir. Selecione abaixo a frente que mais representa seu foco prioritário neste momento:'
      }
    ]);
  };

  // Função para alternar para navegação tradicional
  const handleToggleNavigation = () => {
    // Implementação futura: alternar para navegação tradicional
    console.log('Alternar para navegação tradicional');
  };

  return (
    <div className={`relative ${isLoaded ? 'animate-fadeIn' : ''}`}>
      <Head>
        <title>Soluções - AORKIA</title>
        <meta name="description" content="Conheça nossas soluções estratégicas que transformam desafios complexos em crescimento sustentável e performance superior." />
      </Head>

      {/* Interface Inteligente */}
      <section className="interface">
        {/* Vídeo de Fundo */}
        <video 
          ref={videoRef}
          className="interface__video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/video_hero.mp4" type="video/mp4" />
        </video>
        <div className="interface__overlay"></div>
        
        {/* Botão para alternar navegação */}
        <button 
          className="interface__toggle"
          onClick={handleToggleNavigation}
        >
          Alternar para Navegação Tradicional
        </button>
        
        {/* Chat */}
        <div className="interface__chat">
          <div className="interface__messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`interface__message interface__message--${message.type}`}
              >
                {message.content}
              </div>
            ))}
            
            {isTyping && (
              <div className="interface__message interface__message--ai">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Opções de Produto */}
          {chatState === 'welcome' && (
            <div className="interface__options">
              {productOptions.map(product => (
                <button
                  key={product.id}
                  className="interface__option"
                  onClick={() => handleProductSelect(product)}
                >
                  {product.name}
                </button>
              ))}
            </div>
          )}
          
          {/* Opções de Perfil */}
          {chatState === 'profile' && (
            <div className="interface__options">
              {profileOptions.map(profile => (
                <button
                  key={profile.id}
                  className="interface__option"
                  onClick={() => handleProfileSelect(profile)}
                >
                  {profile.name}
                </button>
              ))}
            </div>
          )}
          
          {/* Input e Botões */}
          <div className="interface__input-container">
            <input
              type="text"
              className="interface__input"
              placeholder="Digite sua mensagem..."
              disabled={chatState !== 'recommendation'}
            />
            
            <button 
              className="interface__reset"
              onClick={handleReset}
              style={{ marginLeft: '0.5rem' }}
            >
              Reiniciar
            </button>
            
            <button 
              className="interface__button"
              disabled={chatState !== 'recommendation'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Insights */}
        <div className="interface__insights">
          <h2 className="interface__insights-title">AORKIA Insights</h2>
          
          <div className="interface__insight">
            <svg className="interface__insight-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#0076FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12" stroke="#0076FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="#0076FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="interface__insight-content">
              <h3 className="interface__insight-title">Diagnóstico Estratégico</h3>
              <p className="interface__insight-description">Identificamos pontos críticos com precisão</p>
            </div>
          </div>
          
          <div className="interface__insight">
            <svg className="interface__insight-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="interface__insight-content">
              <h3 className="interface__insight-title">Soluções Personalizadas</h3>
              <p className="interface__insight-description">Recomendações baseadas no seu perfil</p>
            </div>
          </div>
          
          <div className="interface__insight">
            <svg className="interface__insight-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V6" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18V22" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.93 4.93L7.76 7.76" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.24 16.24L19.07 19.07" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12H6" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 12H22" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.93 19.07L7.76 16.24" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.24 7.76L19.07 4.93" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="interface__insight-content">
              <h3 className="interface__insight-title">Resultados Mensuráveis</h3>
              <p className="interface__insight-description">Impacto direto nos seus indicadores</p>
            </div>
          </div>
          
          <div className="interface__cta">
            <h3 className="interface__cta-title">Pronto para transformar seu negócio?</h3>
            <p className="interface__cta-description">Agende uma avaliação gratuita com nossos especialistas</p>
            <Link href="/contato">
              <a className="interface__cta-button">Solicitar Avaliação Gratuita</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
