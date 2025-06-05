import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Solucoes() {
  const [interfaceMode, setInterfaceMode] = useState('intelligent');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showTyping, setShowTyping] = useState(false);
  const [viewMode, setViewMode] = useState('70-30');
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Bem-vindo à AORKIA. Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:'
    }
  ]);
  const [chatCompleted, setChatCompleted] = useState(false);

  const messagesEndRef = useRef(null);
  const chatMessagesRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

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

  useEffect(() => {
    if (messagesEndRef.current && chatMessagesRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

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

  return (
    <>
      <Head>
        <title>Soluções | AORKIA</title>
        <meta name="description" content="Conheça as soluções estratégicas da AORKIA para transformação digital, segurança e inovação." />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Botões de Interface */}
        <section className="py-8 bg-black text-center">
          <div className="flex justify-center gap-4 mb-12">
            <button
              className={`px-6 py-2 text-lg font-medium rounded-lg transition-all ${
                interfaceMode === 'intelligent'
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setInterfaceMode('intelligent')}
            >
              Interface Inteligente
            </button>
            <button
              className={`px-6 py-2 text-lg font-medium rounded-lg transition-all ${
                interfaceMode === 'traditional'
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setInterfaceMode('traditional')}
            >
              Navegação Tradicional
            </button>
          </div>

          {/* Interface Inteligente */}
          {interfaceMode === 'intelligent' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chat Interface */}
              <div className="flex flex-col h-full">
                <div className="ai-interface" ref={chatContainerRef}>
                  <div className="ai-header mb-4">
                    <h3 className="text-xl font-bold text-white">Interface Inteligente AORKIA</h3>
                  </div>
                  <div className="ai-conversation p-4 bg-gray-900 rounded-lg" ref={chatMessagesRef}>
                    {messages.map((msg, index) => (
                      <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className="inline-block bg-gray-800 p-3 rounded-lg">
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {showTyping && (
                      <div className="text-left mb-4">
                        <div className="inline-block bg-gray-800 p-3 rounded-lg flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
              </div>

              {/* Placeholder para Análise Personalizada */}
              <div className="flex flex-col h-full bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Análise Personalizada</h3>
                {/* Aqui você vai injetar a análise baseada em selectedArea e selectedProfile */}
                {/* Exemplo:
                  {selectedArea && <p>{selectedArea}</p>}
                  {selectedProfile && <p>{selectedProfile}</p>}
                */}
              </div>
            </div>
          )}

          {/* Navegação Tradicional */}
          {interfaceMode === 'traditional' && (
            <div className="space-y-24 mt-12">
              {/* Aqui insere seu conteúdo tradicional conforme a navegação padrão */}
              <div className="text-center">
                <h2 className="text-3xl font-bold">Backup SaaS Estratégico</h2>
                <p className="text-gray-400 mt-4">
                  Transforme seus dados de backup em ativos estratégicos...
                </p>
              </div>
              {/* Repete para outras seções */}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
