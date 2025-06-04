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

  // Efeito para simular carregamento da página
  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingProgress(prev => {
          const newProgress = prev + Math.random() * 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoading(false);
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, 200);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading]);

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

      {/* Preloader - Estilo Jam3 */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
          <div className="preloader-content text-center">
            <div className="logo-container mb-8 flex justify-center">
              <img 
                src="/images/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="h-20 w-auto" 
              />
            </div>
            <div className="loading-bar w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
              <div 
                className="loading-progress h-full bg-primary rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar - Estilo Jam3 */}
      <div className="fixed top-0 left-0 bottom-0 w-24 border-r border-gray-800 bg-black z-50 hidden md:flex flex-col justify-between">
        <div className="flex flex-col items-center pt-8">
          <div className="logo-container h-16 relative">
            <div className={`absolute inset-0 transition-opacity duration-1000 ${logoToggle ? 'opacity-100' : 'opacity-0'}`}>
              <img 
                src="/images/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="h-16 w-auto" 
              />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-1000 ${logoToggle ? 'opacity-0' : 'opacity-100'}`}>
              <img 
                src="/images/logo_aorkia.png" 
                alt="AORKIA" 
                className="h-16 w-auto" 
              />
            </div>
          </div>
          <button 
            className="mt-12 p-4 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <div className="w-8 flex flex-col gap-1.5">
              <span className="w-full h-0.5 bg-white block"></span>
              <span className="w-full h-0.5 bg-white block"></span>
              <span className="w-full h-0.5 bg-white block"></span>
            </div>
          </button>
        </div>
        <div className="pb-8 flex flex-col items-center">
          <a href="#work" className="text-white hover:text-primary transition-colors transform -rotate-90 whitespace-nowrap mb-24" onClick={scrollToNextSection}>
            VER NOSSO TRABALHO
          </a>
        </div>
      </div>

      {/* Mobile Header - Estilo Jam3 */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-gray-800 bg-black z-50 md:hidden">
        <div className="flex justify-between items-center h-full px-4">
          <Link href="/" className="py-2">
            <img 
              src="/images/logo_aorkia_white.png" 
              alt="AORKIA" 
              className="h-8 w-auto" 
            />
          </Link>
          <button 
            className="text-white text-2xl p-2"
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

      {/* Menu Fullscreen - Estilo Jam3 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[60] flex flex-col">
          <div className="container mx-auto px-4 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/images/logo_aorkia_white.png" 
                  alt="AORKIA" 
                  className="h-14 w-auto" 
                />
              </Link>
              <button 
                className="text-white text-3xl"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="flex flex-row space-x-8 justify-center mt-12">
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

      {/* Espaçador para compensar o header fixo no mobile e sidebar no desktop */}
      <div className="h-16 md:h-0 md:ml-24"></div>

      {/* Conteúdo da Página */}
      <div className="md:ml-24">
        <Component {...pageProps} />
      </div>

      {/* Footer Global - Estilo Jam3 */}
      <footer className="bg-black text-white py-16 md:ml-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="md:text-left text-center">
              <img 
                src="/images/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="inline-block md:mx-0 mx-auto h-20 w-auto" 
              />
              <p className="mt-6 text-lg max-w-md md:mx-0 mx-auto text-gray-300">
                AORKIA: Ativamos tecnologia global de ponta, impulsionando diferenciação estratégica, inovação acelerada e crescimento rentável para empresas B2B.
              </p>
              <div className="mt-8 flex md:justify-start justify-center space-x-6">
                <a href="https://linkedin.com/company/aorkia" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="https://instagram.com/aorkia" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
            <div className="md:text-right text-center">
              <p className="text-lg text-gray-300">
                Av. Getúlio Vargas, 671 — Sala 500<br />
                Belo Horizonte - MG<br />
                +55 31 98801-9006<br />
                contato@aorkia.com
              </p>
              <div className="mt-8 flex md:justify-end justify-center">
                <Link href="/contato" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all text-lg font-medium">
                  Entre em contato
                </Link>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                © 2025 AORKIA. Todos os direitos reservados.<br />
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link> | <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link>
              </p>
              <p className="mt-2 text-xs text-gray-600">
                Site Desenvolvido por AORKIA - Estratégia de Presença Digital
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Banner de Cookies - Estilo Jam3 */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <p className="text-sm md:text-base">
                  Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <Link href="/privacy" className="text-primary hover:underline">Política de Privacidade</Link>.
                </p>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={declineCookies}
                  className="px-4 py-2 border border-gray-400 text-gray-400 hover:text-white hover:border-white rounded transition-colors text-sm"
                >
                  Recusar
                </button>
                <button 
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded transition-colors text-sm"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
