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

      {/* Footer */}
      <footer className="footer">
        <div className="footer__content">
          <img 
            src="/images/logo_aorkia_white.png" 
            alt="AORKIA" 
            className="footer__logo"
          />
          <nav className="footer__nav">
            <Link href="/"><a className="footer__link">Home</a></Link>
            <Link href="/solucoes"><a className="footer__link">Soluções</a></Link>
            <Link href="/sobre"><a className="footer__link">Sobre</a></Link>
            <Link href="/contato"><a className="footer__link">Contato</a></Link>
          </nav>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© {new Date().getFullYear()} AORKIA. Todos os direitos reservados.</p>
          <div className="footer__social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
