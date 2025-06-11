import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [logoToggle, setLogoToggle] = useState(false);
  const logoIntervalRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Efeito para carregar scripts externos como RemixIcon
  useEffect(() => {
    const remixiconLink = document.createElement('link');
    remixiconLink.href = 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css';
    remixiconLink.rel = 'stylesheet';
    document.head.appendChild(remixiconLink);

    // Verificar se o usuário já deu consentimento para cookies
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookieConsent(true);
    } else {
      // Mostrar banner de cookies após um pequeno delay
      setTimeout(() => {
        setShowCookieBanner(true);
      }, 1500);
    }

    return () => {
      if (document.head.contains(remixiconLink)) {
        document.head.removeChild(remixiconLink);
      }
    };
  }, []);

  // Preloader removido conforme solicitado
  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Efeito para alternar entre logos (branca e colorida)
  useEffect(() => {
    logoIntervalRef.current = setInterval(() => {
      setLogoToggle(prev => !prev);
    }, 3000);

    return () => {
      if (logoIntervalRef.current) {
        clearInterval(logoIntervalRef.current);
      }
    };
  }, []);

  // Efeito para prevenir rolagem quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Função para aceitar cookies
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
    setShowCookieBanner(false);
  };

  // Função para recusar cookies
  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setCookieConsent(false);
    setShowCookieBanner(false);
  };

  // Função para rolar para a próxima seção
  const scrollToNextSection = (e) => {
    e.preventDefault();
    const nextSection = document.getElementById('work');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função para copiar email para área de transferência
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('contato@aorkia.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 3000);
    });
  };

  // Função para lidar com o envio do formulário
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyXVnm65_jRLny939UAFYBDPAqhxAR2WfBp3c1LAW3m3WY9P9hQyc4yYR9PRyG29Rj-ZQ/exec', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: "#0076FF",
                    secondary: "#4A90E2",
                    success: "#0076FF",
                    'dark-blue-1': "#002C4C",
                    'dark-blue-2': "#0D3A64",
                    'light-blue': "#2196F3",
                  }
                },
              },
            };
          `
        }} />
      </Head>

      {/* Preloader - Estilo Jam3 - Apenas logo com iluminação */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
          <div className="preloader-content text-center">
            <div className="logo-container relative">
              <Image 
                src="/image/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="h-32 w-auto z-10 relative animate-fade-in" 
                width={300}
                height={128}
                priority
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/30 rounded-full animate-pulse-fast blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full animate-pulse-fast blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-primary/10 rounded-full animate-pulse-fast blur-3xl"></div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar - CORRIGIDA */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-800 bg-black z-50 hidden md:block">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          {/* Logo à esquerda */}
          <Link href="/" className="flex-shrink-0">
            <div className="logo-container h-12 relative">
              <Image 
                src="/image/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="h-12 w-auto"
                width={120}
                height={48}
                priority
              />
            </div>
          </Link>
          
          {/* Menu à direita */}
          <nav className="flex items-center space-x-2">
            <Link href="/" className="text-white hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Home
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
            <Link href="/solucoes" className="text-white hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Soluções
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
            <Link href="/sobre" className="text-white hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Sobre
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
            <Link href="/contato" className="text-white hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Contato
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Navbar - CORRIGIDA */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-800 bg-black z-50 md:hidden">
        <div className="flex justify-between items-center h-full px-4">
          <Link href="/" className="py-2">
            <div className="logo-container h-12 relative">
              <Image 
                src="/image/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="h-12 w-auto"
                width={120}
                height={48}
                priority
              />
            </div>
          </Link>
          <button 
            className="text-white text-2xl p-2 z-[70]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span className="w-full h-0.5 bg-white block"></span>
              <span className="w-full h-0.5 bg-white block"></span>
              <span className="w-full h-0.5 bg-white block"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Menu Mobile Fullscreen */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[60] flex flex-col">
          <div className="container mx-auto px-4 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="logo-container h-14 relative">
                  <Image 
                    src="/image/logo_aorkia_white.png" 
                    alt="AORKIA" 
                    className="h-14 w-auto"
                    width={140}
                    height={56}
                    priority
                  />
                </div>
              </Link>
              <button 
                className="text-white text-3xl"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="flex flex-col space-y-6 justify-center mt-12 items-center">
              <Link 
                href="/" 
                className="text-white text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/solucoes" 
                className="text-white text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Soluções
              </Link>
              <Link 
                href="/sobre" 
                className="text-white text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/contato" 
                className="text-white text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
            <div className="mt-auto">
              <Link 
                href="/contato" 
                className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg transition-all text-center mt-8 text-2xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Começar agora
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Botões flutuantes */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        {/* Botão WhatsApp */}
        <a 
          href="https://wa.me/5531988019006" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
          title="Fale conosco no WhatsApp"
        >
          <i className="ri-whatsapp-line text-xl"></i>
        </a>
        
        {/* Botão Home */}
        <Link href="/" className="bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all">
          <i className="ri-home-4-line text-xl"></i>
        </Link>
      </div>

      {/* Espaçador para compensar o header fixo */}
      <div className="h-20 md:h-20"></div>

      {/* Conteúdo da Página */}
      <div>
        <Component {...pageProps} />
      </div>

      {/* Footer Global - COMPLETAMENTE REORGANIZADO PARA MOBILE */}
      <footer className="bg-gray-900 text-white py-16 border-t border-primary/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="mb-8">
                <Image
                  src="/image/logo_aorkia_white.png"
                  alt="AORKIA Logo"
                  width={180}
                  height={60}
                  className="mb-4"
                  priority
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary text-2xl mt-1 mr-4">
                    <i className="ri-map-pin-2-line"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                    <p className="text-gray-300">
                      Av. Getúlio Vargas, 671 — Sala 500<br />
                      Belo Horizonte - MG
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-2xl mt-1 mr-4">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <p className="text-gray-300">+55 31 98801-9006</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-2xl mt-1 mr-4">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-300">contato@aorkia.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-6">
                <a href="https://linkedin.com/company/aorkia" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="https://instagram.com/aorkia.tech" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              {formSubmitted ? (
                <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                  <i className="ri-check-line text-3xl mb-2"></i>
                  <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p>Obrigado pelo seu contato. A AORKIA retornará em breve.</p>
                </div>
              ) : (
                <form 
                  className="space-y-4" 
                  onSubmit={handleFormSubmit}
                >
                  <div>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome completo"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Produtos de interesse (selecione um ou mais):</label>
                    <div className="grid grid-cols-1 gap-3">
                      <label className="flex items-start cursor-pointer">
                        <input type="checkbox" name="interesses" value="Backup SaaS Estratégico" className="mt-1 mr-3 h-4 w-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                        <span className="text-gray-300 text-sm">Backup SaaS Estratégico</span>
                      </label>
                      <label className="flex items-start cursor-pointer">
                        <input type="checkbox" name="interesses" value="Operações de Bordas Inteligentes" className="mt-1 mr-3 h-4 w-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                        <span className="text-gray-300 text-sm">Operações de Bordas Inteligentes</span>
                      </label>
                      <label className="flex items-start cursor-pointer">
                        <input type="checkbox" name="interesses" value="Segurança para Operações Críticas (DSPM)" className="mt-1 mr-3 h-4 w-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                        <span className="text-gray-300 text-sm">Segurança para Operações Críticas (DSPM)</span>
                      </label>
                      <label className="flex items-start cursor-pointer">
                        <input type="checkbox" name="interesses" value="Plataforma de Inteligência de Receita com IA" className="mt-1 mr-3 h-4 w-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                        <span className="text-gray-300 text-sm">Plataforma de Inteligência de Receita com IA</span>
                      </label>
                      <label className="flex items-start cursor-pointer">
                        <input type="checkbox" name="interesses" value="Estratégia de Presença Digital" className="mt-1 mr-3 h-4 w-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                        <span className="text-gray-300 text-sm">Estratégia de Presença Digital</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="mensagem"
                      placeholder="Sua mensagem"
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Footer responsivo - COMPLETAMENTE REORGANIZADO */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            {/* Mobile: Layout em coluna única */}
            <div className="block md:hidden space-y-4 text-center">
              <div className="text-gray-400 text-xs">
                © 2025 AORKIA. Todos os direitos reservados.
              </div>
              <div className="flex flex-col space-y-2 text-xs">
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </div>
              <div className="text-gray-400 text-xs">
                Site Desenvolvido por AORKIA
              </div>
              <div className="text-gray-400 text-xs">
                Estratégia de Presença Digital
              </div>
              <div className="flex items-center justify-center space-x-2">
                <i 
                  className="ri-mail-line text-sm text-gray-400 cursor-pointer hover:text-primary transition-colors"
                  onClick={copyEmailToClipboard}
                  title="Copiar e-mail"
                ></i>
                <span 
                  className="text-gray-400 text-xs cursor-pointer hover:text-primary transition-colors"
                  onClick={copyEmailToClipboard}
                  title="Copiar e-mail"
                >
                  contato@aorkia.com
                </span>
              </div>
            </div>
            
            {/* Desktop: Layout original */}
            <div className="hidden md:block">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left space-y-4 lg:space-y-0">
                <div className="text-gray-400 text-sm">
                  © 2025 AORKIA. Todos os direitos reservados.
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-end space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                  <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                    Política de Privacidade
                  </Link>
                  <span className="hidden sm:inline text-gray-600">|</span>
                  <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                    Termos de Uso
                  </Link>
                </div>
              </div>
              
              <div className="mt-4 text-center lg:text-left">
                <div className="text-gray-400 text-sm">
                  Site Desenvolvido por AORKIA - Estratégia de Presença Digital.
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-center lg:justify-start space-x-2">
                <i 
                  className="ri-mail-line text-lg text-gray-400 cursor-pointer hover:text-primary transition-colors"
                  onClick={copyEmailToClipboard}
                  title="Copiar e-mail para a área de transferência"
                ></i>
                <span 
                  className="text-gray-400 text-sm cursor-pointer hover:text-primary transition-colors"
                  onClick={copyEmailToClipboard}
                  title="Copiar e-mail para a área de transferência"
                >
                  contato@aorkia.com
                </span>
              </div>
            </div>
            
            {/* Mensagem de confirmação de cópia */}
            {emailCopied && (
              <div className="mt-2 text-center lg:text-left">
                <p className="text-green-500 text-xs">E-mail copiado para a área de transferência!</p>
              </div>
            )}
          </div>
        </div>
      </footer>

      {/* Banner de Cookies */}
      {showCookieBanner && !cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
          <p className="text-sm mb-4 md:mb-0">
            Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com o uso de cookies. Para mais informações, consulte nossa 
            <Link href="/privacy" className="text-primary hover:underline ml-1">Política de Privacidade</Link>.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={acceptCookies} 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm transition-all"
            >
              Aceitar
            </button>
            <button 
              onClick={declineCookies} 
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-all"
            >
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;

