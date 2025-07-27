import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const remixiconLink = document.createElement('link');
    remixiconLink.href = 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css';
    remixiconLink.rel = 'stylesheet';
    document.head.appendChild(remixiconLink);

    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookieConsent(true);
    } else {
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

  useEffect(() => {
    setIsLoading(false);
  }, []);

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

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
    setShowCookieBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setCookieConsent(false);
    setShowCookieBanner(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby0dqYS39NiRN9rGiVRy18bUxsOCLbuFXlMoJ13x2aMHDN1DtE3ngctFxZ06t5xpT6b/exec', {
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
    }
  };

  const isActiveRoute = (path) => {
    return router.pathname === path;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" href="/favicon/favicon.ico" />
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
                  },
                  animation: {
                    'gradient-x': 'gradient-x 3s ease infinite',
                    'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
                    'float': 'float 3s ease-in-out infinite',
                    'dropdown-slide-in': 'dropdown-slide-in 0.3s ease-out',
                  },
                  keyframes: {
                    'gradient-x': {
                      '0%, 100%': {'background-size':'200% 200%', 'background-position': 'left center'},
                      '50%': {'background-size':'200% 200%', 'background-position': 'right center'},
                    },
                    'pulse-glow': {
                      '0%': {'box-shadow': '0 0 5px #0076FF, 0 0 10px #0076FF, 0 0 15px #0076FF', 'transform': 'scale(1)'},
                      '100%': {'box-shadow': '0 0 10px #0076FF, 0 0 20px #0076FF, 0 0 30px #0076FF', 'transform': 'scale(1.02)'},
                    },
                    'float': {
                      '0%, 100%': { 'transform': 'translateY(0px)' },
                      '50%': { 'transform': 'translateY(-5px)' },
                    },
                    'dropdown-slide-in': {
                      '0%': {'opacity': '0', 'transform': 'translateY(-10px) scale(0.95)'},
                      '100%': {'opacity': '1', 'transform': 'translateY(0) scale(1)'},
                    },
                  }
                },
              },
            };
          `
        }} />
      </Head>

      {isLoading && (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
          <div className="preloader-content text-center">
           <div className="logo-container h-20 relative overflow-hidden flex items-center">
            <Image
              src="/logo/logo_aorkia_color_transparent.png"
              alt="AORKIA"
              className="h-20 w-auto"
              width={200}
              height={80}
              quality={100}
              priority
            />
          </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/30 rounded-full animate-pulse-fast blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full animate-pulse-fast blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-primary/10 rounded-full animate-pulse-fast blur-3xl"></div>
            </div>
          </div>
      )}

      {/* ===== HEADER DESKTOP RESTAURADO ===== */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-lg shadow-black/5 z-[60] hidden md:block">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <div className="logo-container h-20 relative">
              <Image
                src="/logo/logo_aorkia_color_transparent.png"
                alt="AORKIA"
                className="h-20 w-auto"
                width={200}
                height={80}
                quality={100}
                priority
              />
            </div>
          </Link>
          <nav className="flex items-center space-x-2">
            <Link 
              href="/" 
              className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${
                isActiveRoute('/') 
                  ? 'text-primary bg-primary/10 border-primary/30 shadow-md shadow-primary/20' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span>Home</span>
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${
                router.pathname.includes('/backup_saas_estrategico') || router.pathname.includes('/governanca_dados_sensiveis')
                  ? 'text-primary bg-primary/10 border-primary/30 shadow-md shadow-primary/20' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span>Soluções</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[420px] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl shadow-2xl shadow-blue-500/20 z-[70] py-4 animate-dropdown-slide-in">
                  <Link 
                    href="/backup_saas_estrategico" 
                    className="group block px-6 py-4 text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 last:border-b-0"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg></div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg group-hover:text-blue-100 transition-colors">Backup SaaS Estratégico</div>
                        <div className="text-sm text-blue-100/80 mt-1 group-hover:text-blue-50 transition-colors">Keepit - Proteção imutável para Microsoft 365, Google Workspace e Salesforce</div>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    href="/governanca_dados_sensiveis" 
                    className="group block px-6 py-4 text-white hover:bg-white/10 transition-all duration-300"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg group-hover:text-blue-100 transition-colors">Governança Estratégica de Dados Sensíveis</div>
                        <div className="text-sm text-blue-100/80 mt-1 group-hover:text-blue-50 transition-colors">DSPM - Visibilidade e controle total dos seus dados sensíveis</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/sobre" className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/sobre') ? 'text-primary bg-primary/10 border-primary/30 shadow-md shadow-primary/20' : 'text-gray-700 hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15' }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span>Sobre</span>
            </Link>

            <Link href="/blog" className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/blog') ? 'text-primary bg-primary/10 border-primary/30 shadow-md shadow-primary/20' : 'text-gray-700 hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15' }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              <span>Blog</span>
            </Link>

            <Link href="/contato" className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/contato') ? 'text-primary bg-primary/10 border-primary/30 shadow-md shadow-primary/20' : 'text-gray-700 hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15' }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>Contato</span>
            </Link>

            <Link href="/contato" className="group flex items-center space-x-2 ml-4 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg transition-all duration-300 font-semibold hover:from-blue-600 hover:to-primary hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 border border-transparent">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span>Começar agora</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* ===== HEADER MOBILE RESTAURADO ===== */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 z-[60] md:hidden">
        <div className="flex justify-between items-center h-full px-6">
          <div className="py-2">
            <div className="logo-container h-16 relative flex items-center">
              <Image
                src="/logo/logo_aorkia_color_transparent.png"
                alt="AORKIA"
                className="h-16 w-auto"
                width={200}
                height={80}
                priority
              />
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="w-full h-0.5 bg-gray-800 block transition-all duration-300 group-hover:bg-blue-600"></span>
              <span className="w-full h-0.5 bg-gray-800 block transition-all duration-300 group-hover:bg-blue-600"></span>
              <span className="w-full h-0.5 bg-gray-800 block transition-all duration-300 group-hover:bg-blue-600"></span>
            </div>
          </button>
        </div>
      </header>
      
      {/* ===== MENU MOBILE RESTAURADO ===== */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[64] animate-fade-in" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-0 z-[65] flex">
            <div className="ml-auto w-full max-w-sm bg-gradient-to-br from-blue-600 via-blue-800 to-blue-900 animate-slide-in-right">
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <div className="logo-container h-12 relative">
                  <Image
                    src="/logo/logo_aorkia_white_transparent.png"
                    alt="AORKIA"
                    className="h-12 w-auto"
                    width={200}
                    height={80}
                    priority
                  />
                </div>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <nav className="flex-1 px-6 py-8 space-y-2">
                <Link href="/" passHref><div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group animate-fade-in-up cursor-pointer" style={{ animationDelay: '0.1s' }} onClick={() => setMobileMenuOpen(false)}><div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div><span className="text-lg font-medium">Home</span></div></Link>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <button onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)} className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group">
                    <div className="flex items-center space-x-4"><div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><span className="text-lg font-medium">Soluções</span></div>
                    <svg className={`w-5 h-5 transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {solutionsDropdownOpen && (
                    <div className="ml-14 mt-2 space-y-1 animate-fade-in-up">
                      <Link href="/backup_saas_estrategico" passHref><div className="block p-3 rounded-lg hover:bg-white/5 transition-colors text-white/80 hover:text-white cursor-pointer" onClick={() => setMobileMenuOpen(false)}><div className="font-medium">Backup SaaS Estratégico</div><div className="text-sm text-white/60 mt-1">Keepit - Proteção imutável</div></div></Link>
                      <Link href="/governanca_dados_sensiveis" passHref><div className="block p-3 rounded-lg hover:bg-white/5 transition-colors text-white/80 hover:text-white cursor-pointer" onClick={() => setMobileMenuOpen(false)}><div className="font-medium">Governança de Dados</div><div className="text-sm text-white/60 mt-1">DSPM - Controle total</div></div></Link>
                    </div>
                  )}
                </div>
                <Link href="/sobre" passHref><div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group animate-fade-in-up cursor-pointer" style={{ animationDelay: '0.3s' }} onClick={() => setMobileMenuOpen(false)}><div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div><span className="text-lg font-medium">Sobre</span></div></Link>
                <Link href="/blog" passHref><div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group animate-fade-in-up cursor-pointer" style={{ animationDelay: '0.4s' }} onClick={() => setMobileMenuOpen(false)}><div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg></div><span className="text-lg font-medium">Blog</span></div></Link>
                <Link href="/contato" passHref><div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group animate-fade-in-up cursor-pointer" style={{ animationDelay: '0.6s' }} onClick={() => setMobileMenuOpen(false)}><div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div><span className="text-lg font-medium">Contato</span></div></Link>
              </nav>
              <div className="p-6 border-t border-white/10">
                <div className="w-full flex items-center justify-center space-x-3 p-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-white/90 transition-all duration-300 animate-scale-in cursor-pointer" style={{ animationDelay: '0.6s' }} onClick={() => { router.push('/contato'); setMobileMenuOpen(false); }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <span>Começar agora</span>
                </div>
                <div className="mt-4 text-center text-white/60 text-sm animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  <p>+55 31 3958-6192</p>
                  <p>contato@aorkia.com</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <main className="pt-20">
        <Component {...pageProps} />
      </main>
  
      {/* Footer Global */}
      <footer className="relative bg-black text-white py-16 border-t border-gray-800 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video/video_hero.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-8 text-primary">Vamos conversar?</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Campos do Formulário */}
              </form>
              {formSubmitted && (
                <div className="mt-4 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                  <p className="text-green-400 font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                </div>
              )}
            </div>
            <div className="order-2 lg:order-1 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-inner">
                {/* Conteúdo da coluna de informações */}
              </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <p className="text-gray-300 mb-4">© 2025 Synapse B2B. Todos os direitos reservados. Desenvolvido por Synapse B2B</p>                           
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {/* Ícones de Contato */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 p-4 z-[70]">
            {/* Conteúdo do Banner de Cookies */}
        </div>
      )}
    </>
  );
}

export default MyApp;