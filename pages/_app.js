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
  // Função para forçar o formulário Google
  useEffect(() => {
  const form = document.querySelector("form");
  if (form && form.action.includes("formspree")) {
    form.action = "https://script.google.com/macros/s/AKfycbyvmpYg121WTnYrBaxDJuLk296DTfRIG_uoCuFqrLQ6/dev";
    console.log("⚠️ Formspree sobrescrito pelo script da AORKIA.");
  }
}, []);

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

      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-800 bg-black z-50 hidden md:block">
        <div className="container mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
          <div className="flex items-center space-x-12">
            <Link href="/" className="py-2">
              <div className="logo-container h-12 relative">
                <Image 
                  src="/image/logo_aorkia_white.png" 
                  alt="AORKIA" 
                  className="h-20 w-auto"
                  width={160}
                  height={64}
                  priority
                />
              </div>
            </Link>
            <nav className="flex space-x-8">
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
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-800 bg-black z-50 md:hidden">
        <div className="flex justify-between items-center h-full px-4">
          <Link href="/" className="py-2">
            <div className="logo-container h-10 relative">
              <Image 
                src="/image/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="h-10 w-auto"
                width={100}
                height={40}
                priority
              />
            </div>
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

      {/* Footer Global - Baseado na seção "Fale Conosco" */}
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
              <form 
                className="space-y-4" 
                action="https://script.google.com/macros/s/AKfycbyvmpYg121WTnYrBaxDJuLk296DTfRIG_uoCuFqrLQ6/dev" 
                method="POST"
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
                  <label className="block text-sm font-medium mb-2">Produtos de interesse (selecione um ou mais):</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" name="produtos" value="backup" className="mr-2 text-primary" />
                      <span className="text-gray-300">Backup SaaS Estratégico</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="produtos" value="bordas" className="mr-2 text-primary" />
                      <span className="text-gray-300">Operações de Bordas Inteligentes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="produtos" value="dspm" className="mr-2 text-primary" />
                      <span className="text-gray-300">Segurança DSPM</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="produtos" value="receitas" className="mr-2 text-primary" />
                      <span className="text-gray-300">Inteligência de Receita</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="produtos" value="digital" className="mr-2 text-primary" />
                      <span className="text-gray-300">Estratégia de Presença Digital</span>
                    </label>
                  </div>
                </div>
                <div>
                  <textarea
                    name="mensagem"
                    placeholder="Mensagem"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all font-medium"
                >
                  Enviar mensagem
                </button>
                <p className="text-sm text-gray-400 mt-2">
                  Este formulário é processado com segurança pela plataforma Google Apps Script. Ao enviar, suas informações são armazenadas diretamente em nosso sistema interno da AORKIA.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Rodapé com direitos autorais */}
        <div className="bg-gray-900 border-t border-gray-700 py-4">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-sm text-gray-400">
              <div className="flex flex-wrap items-center justify-center gap-1 text-center">
                <span>© 2025 AORKIA. Todos os direitos reservados.</span>
                <span className="hidden md:inline">|</span>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <span>|</span>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
                <span>|</span>
                <span>Site Desenvolvido por AORKIA - Estratégia de Presença Digital.</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                  title="Clique para copiar o e-mail"
                >
                  <i className="ri-mail-line"></i>
                  <span>contato@aorkia.com</span>
                </button>
              </div>
            </div>

      {/* Banner de Cookies */}
      {showCookieBanner && !cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
            </p>
            <div className="flex gap-4">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm rounded transition-colors"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notificação de email copiado */}
      {emailCopied && (
        <div className="fixed top-24 right-8 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          E-mail copiado para a área de transferência!
        </div>
      )}
    </>
  );
}}

export default MyApp;
