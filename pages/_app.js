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
            <Link href="/keepit" className="text-white hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20 flex items-center">
              <Image 
                src="/image/keepit_logo_aorkia.png" 
                alt="Keepit" 
                className="h-6 w-auto mr-2"
                width={80}
                height={24}
              />
              <span className="text-green-400">Keepit</span>
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-6"></span>
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
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            className="text-white"
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
                href="/keepit" 
                className="text-white text-3xl md:text-5xl font-bold hover:text-green-400 transition-colors flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image 
                  src="/image/keepit_logo_aorkia.png" 
                  alt="Keepit" 
                  className="h-8 md:h-12 w-auto mr-4"
                  width={120}
                  height={48}
                />
                <span className="text-green-400">Keepit</span>
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
              </div>
            </div>

            {/* Formulário de contato */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              
              {formSubmitted ? (
                <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                  <i className="ri-check-line text-3xl mb-4 block"></i>
                  <h4 className="text-xl font-semibold mb-2">Mensagem enviada com sucesso!</h4>
                  <p>Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu e-mail"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Seu telefone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Sua empresa"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
                    />
                  </div>
                  <div>
                    <textarea
                      name="mensagem"
                      placeholder="Sua mensagem"
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all font-semibold"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Seção de Copyright */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 AORKIA. Todos os direitos reservados.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Banner de Cookies */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-[70]">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white text-sm md:text-base">
              <p>
                Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                Recusar
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all text-sm font-semibold"
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

