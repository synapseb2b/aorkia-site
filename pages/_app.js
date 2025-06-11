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
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);
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

  // Função para copiar telefone para área de transferência
  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText('+55 31 3958-6192').then(() => {
      setPhoneCopied(true);
      setTimeout(() => {
        setPhoneCopied(false);
      }, 3000);
    });
  };

  // Função para copiar endereço para área de transferência
  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText('Av. Getúlio Vargas, 671 — Sala 500, Belo Horizonte - MG').then(() => {
      setAddressCopied(true);
      setTimeout(() => {
        setAddressCopied(false);
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-x-1/2 w-56 h-56 bg-primary/10 rounded-full animate-pulse-fast blur-3xl"></div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar - CORRIGIDA */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-800 bg-black z-[60] hidden md:block">
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
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-800 bg-black z-[60] md:hidden">
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
        <div className="fixed inset-0 bg-black z-[65] flex flex-col">
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

      {/* Botões flutuantes - Z-INDEX CORRIGIDO */}
      <div className="fixed bottom-8 right-8 z-[50] flex flex-col gap-4">
        {/* Botão WhatsApp */}
        <a 
          href="https://wa.me/553139586192" 
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

      {/* Footer Global - REORGANIZADO PARA MOBILE COM FORMULÁRIO PRIMEIRO E SEÇÃO DE COPYRIGHT ADICIONADA */}
      <footer className="bg-gray-900 text-white py-16 border-t border-primary/20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* No mobile, formulário aparece primeiro */}
            <div className="order-2 md:order-1">
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
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                    <p 
                      className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                      onClick={copyAddressToClipboard}
                      title="Clique para copiar"
                    >
                      Av. Getúlio Vargas, 671 — Sala 500<br />
                      Belo Horizonte - MG
                      {addressCopied && <span className="text-green-400 ml-2">✓ Copiado!</span>}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-2xl mt-1 mr-4">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <p 
                      className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                      onClick={copyPhoneToClipboard}
                      title="Clique para copiar"
                    >
                      +55 31 3958-6192
                      {phoneCopied && <span className="text-green-400 ml-2">✓ Copiado!</span>}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-2xl mt-1 mr-4">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                    <p 
                      className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                      onClick={copyEmailToClipboard}
                      title="Clique para copiar"
                    >
                      contato@aorkia.com
                      {emailCopied && <span className="text-green-400 ml-2">✓ Copiado!</span>}
                    </p>
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
            
            {/* No mobile, formulário aparece primeiro */}
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-green-600 text-6xl mb-6">
                    <i className="ri-check-circle-line"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Mensagem Enviada com Sucesso!</h3>
                  <p className="text-gray-300 mb-8">
                    Obrigado pelo seu interesse na AORKIA. Nossa equipe entrará em contato em breve para discutir como podemos ativar as melhores soluções para sua empresa.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="bg-primary text-white px-8 py-3 rounded hover:bg-primary/90 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800 text-white"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800 text-white"
                        placeholder="seu.email@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800 text-white"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="solucao" className="block text-sm font-medium text-gray-300 mb-2">
                        Solução de Interesse
                      </label>
                      <select
                        id="solucao"
                        name="solucao"
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800 text-white"
                      >
                        <option value="">Selecione uma solução</option>
                        <option value="backup">Backup SaaS Estratégico</option>
                        <option value="bordas">Operações de Bordas Inteligentes</option>
                        <option value="dspm">Segurança para Operações Críticas</option>
                        <option value="receitas">Inteligência de Receita com IA</option>
                        <option value="digital">Estratégia de Presença Digital</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-800 text-white"
                      placeholder="Conte-nos sobre seus desafios e como podemos ajudar sua empresa..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-primary text-white px-12 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* SEÇÃO DE COPYRIGHT ADICIONADA */}
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
                Site Desenvolvido por AORKIA - Estratégia de Presença Digital
              </div>
              <div className="text-gray-400 text-xs">
                contato@aorkia.com
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
                  <span className="hidden sm:inline text-gray-600">|</span>
                  <span className="text-gray-400">Site Desenvolvido por AORKIA - Estratégia de Presença Digital</span>
                  <span className="hidden sm:inline text-gray-600">|</span>
                  <span className="text-gray-400">contato@aorkia.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Banner de Cookies */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-[55]">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm">
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa política de cookies.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={declineCookies}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Recusar
              </button>
              <button 
                onClick={acceptCookies}
                className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;

