import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

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

      {/* Header Global - Estilo Jam3 */}
      <header className="fixed w-full z-50 bg-black shadow-md">
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center py-4">
          <Link href="/" className="py-2">
            <Image 
              src="/logo_aorkia_white.png" 
              alt="AORKIA" 
              width={240} 
              height={60} 
              className="h-16 w-auto" 
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary transition-colors text-lg font-medium">
              Home
            </Link>
            <Link href="/solucoes" className="text-white hover:text-primary transition-colors text-lg font-medium">
              Soluções
            </Link>
            <Link href="/sobre" className="text-white hover:text-primary transition-colors text-lg font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-white hover:text-primary transition-colors text-lg font-medium">
              Contato
            </Link>
            <Link href="/contato" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg transition-all text-lg font-medium">
              Começar agora
            </Link>
          </nav>
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </header>

      {/* Menu Mobile - Estilo Jam3 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 md:hidden">
          <div className="container mx-auto px-4 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image 
                  src="/logo_aorkia_white.png" 
                  alt="AORKIA" 
                  width={200} 
                  height={50} 
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
            <div className="flex flex-col space-y-8 mt-12">
              <Link 
                href="/" 
                className="text-white text-3xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/solucoes" 
                className="text-white text-3xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Soluções
              </Link>
              <Link 
                href="/sobre" 
                className="text-white text-3xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/contato" 
                className="text-white text-3xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <Link 
                href="/contato" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg transition-all text-center mt-8 text-2xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Começar agora
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Espaçador para compensar o header fixo */}
      <div className="h-24"></div>

      {/* Conteúdo da Página */}
      <Component {...pageProps} />

      {/* Footer Global - Estilo Jam3 */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="md:text-left text-center">
              <Image 
                src="/logo_aorkia_white.png" 
                alt="AORKIA" 
                width={280} 
                height={70} 
                className="inline-block md:mx-0 mx-auto h-20 w-auto" 
              />
              <p className="mt-6 text-lg max-w-md md:mx-0 mx-auto text-gray-300">
                Soluções estratégicas para empresas que buscam excelência e inovação no mercado B2B.
              </p>
              <div className="mt-8 flex md:justify-start justify-center space-x-6">
                <a href="https://linkedin.com/company/aorkia" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="https://instagram.com/aorkia" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/aorkia" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                  <i className="ri-twitter-x-line"></i>
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
                  Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <Link href="/privacy" className="text-primary hover:underline">Política de Privacidade</Link> e <Link href="/terms" className="text-primary hover:underline">Termos de Uso</Link>.
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
