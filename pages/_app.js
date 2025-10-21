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
  const [logoToggle, setLogoToggle] = useState(false);
  const logoIntervalRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Efeito para carregar scripts externos como RemixIcon
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
    logoIntervalRef.current = setInterval(() => {
      setLogoToggle(prev => !prev);
    }, 3000);

    return () => {
      if (logoIntervalRef.current) {
        clearInterval(logoIntervalRef.current);
      }
    };
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

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('contato@aorkia.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText('+55 31 3958-6192');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 3000);
  };

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText('Av. Getúlio Vargas, 671 — Sala 500, Belo Horizonte - MG');
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 3000);
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
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  const isActiveRoute = (path) => router.pathname === path;

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
                    primary: 'var(--primary-color)',
                    'background-dark': 'var(--background-dark)',
                    'background-light': 'var(--background-light)',
                    'accent-color': 'var(--accent-color)',
                    'text-color': 'var(--text-color)',
                  },
                  animation: {
                    'gradient-x': 'gradient-x 3s ease infinite',
                    'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
                    'float': 'float 3s ease-in-out infinite',
                    'dropdown-slide-in': 'dropdown-slide-in 0.3s ease-out',
                    'dropdown-slide-out': 'dropdown-slide-out 0.3s ease-out',
                    'nav-item-hover': 'nav-item-hover 0.3s ease-out',
                    'marquee-left': 'marquee-left 40s linear infinite',
                  },
                  keyframes: {
                    'gradient-x': {
                      '0%, 100%': { 'background-size':'200% 200%', 'background-position': 'left center' },
                      '50%': { 'background-size':'200% 200%', 'background-position': 'right center' },
                    },
                    'pulse-glow': {
                      '0%': { 'box-shadow': '0 0 5px var(--primary-color), 0 0 10px var(--primary-color), 0 0 15px var(--primary-color)', 'transform': 'scale(1)' },
                      '100%': { 'box-shadow': '0 0 10px var(--primary-color), 0 0 20px var(--primary-color), 0 0 30px var(--primary-color)', 'transform': 'scale(1.02)' },
                    },
                    'float': {
                      '0%, 100%': { 'transform': 'translateY(0px)' },
                      '50%': { 'transform': 'translateY(-5px)' },
                    },
                    'dropdown-slide-in': {
                      '0%': { 'opacity': '0', 'transform': 'translateY(-10px) scale(0.95)' },
                      '100%': { 'opacity': '1', 'transform': 'translateY(0) scale(1)' },
                    },
                    'dropdown-slide-out': {
                      '0%': { 'opacity': '1', 'transform': 'translateY(0) scale(1)' },
                      '100%': { 'opacity': '0', 'transform': 'translateY(-10px) scale(0.95)' },
                    },
                    'nav-item-hover': {
                      '0%': { 'transform': 'translateY(0px)' },
                      '100%': { 'transform': 'translateY(-2px)' },
                    },
                    'marquee-left': {
                        '0%': { transform: 'translateX(0%)' },
                        '100%': { transform: 'translateX(-100%)' },
                    }
                  }
                },
              },
            };
          `
        }} />
      </Head>

      {isLoading && (
        <div className="fixed inset-0 bg-background-dark z-[100] flex items-center justify-center">
          {/* ... preloader content ... */}
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 h-20 bg-background-dark/95 backdrop-blur-sm border-b border-primary/20 shadow-lg shadow-black/5 z-[60] hidden md:block">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <div className="logo-container h-20 relative">
              <Image
                src="/logo/logo_aorkia.png"
                alt="AORKIA"
                className="h-24 w-auto"
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
                  : 'text-text-color hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15'
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
                  : 'text-text-color hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span>Soluções</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {solutionsDropdownOpen && (
                 <div className="absolute top-full left-0 mt-2 w-[420px] bg-background-light rounded-xl shadow-2xl shadow-primary/20 z-[70] py-4 animate-dropdown-slide-in">
                  <Link 
                    href="/backup_saas_estrategico" 
                    className="group block px-6 py-4 text-text-color hover:bg-white/10 transition-all duration-300 border-b border-white/10 last:border-b-0"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                     <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg></div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-primary group-hover:text-primary/90 transition-colors">Backup SaaS Estratégico</div>
                        <div className="text-sm text-white/80 mt-1 group-hover:text-white transition-colors">Keepit - Proteção imutável para Microsoft 365, Google Workspace e Salesforce</div>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    href="/governanca_dados_sensiveis" 
                    className="group block px-6 py-4 text-text-color hover:bg-white/10 transition-all duration-300"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-primary group-hover:text-primary/90 transition-colors">Governança Estratégica de Dados Sensíveis</div>
                        <div className="text-sm text-white/80 mt-1 group-hover:text-white transition-colors">DSPM - Visibilidade e controle total dos seus dados sensíveis</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/sobre" className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/sobre') ? 'text-primary bg-primary/10 border-primary/30 shadow-md shadow-primary/20' : 'text-text-color hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15' }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span>Sobre</span>
            </Link>

            <Link href="/blog" className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/blog') ? 'text-primary bg-primary/10 border-primary/30 shadow-md shadow-primary/20' : 'text-text-color hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15' }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              <span>Blog</span>
            </Link>

            <Link href="/contato" className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/contato') ? 'text-primary bg-primary/10 border-primary/30 shadow-md shadow-primary/20' : 'text-text-color hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15' }`}>
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>Contato</span>
            </Link>

            <Link href="/contato" className="group flex items-center space-x-2 ml-4 px-6 py-3 bg-primary text-background-dark rounded-lg transition-all duration-300 font-semibold hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 border border-transparent">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span>Começar agora</span>
            </Link>
          </nav>
        </div>
      </header>
      
       <header className="fixed top-0 left-0 right-0 h-20 bg-background-dark/95 backdrop-blur-sm border-b border-primary/20 z-[60] md:hidden">
        <div className="flex justify-between items-center h-full px-6">
          <div className="py-2">
            <div className="logo-container h-16 relative flex items-center">
              <Image
                src="/logo/logo_aorkia.png"
                alt="AORKIA"
                className="h-24 w-auto"
                width={200}
                height={80}
                priority
              />
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors group"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="w-full h-0.5 bg-white block transition-all duration-300 group-hover:bg-primary"></span>
              <span className="w-full h-0.5 bg-white block transition-all duration-300 group-hover:bg-primary"></span>
              <span className="w-full h-0.5 bg-white block transition-all duration-300 group-hover:bg-primary"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Other components remain the same */}
      <main className="pt-20">
        <Component {...pageProps} />
      </main>

      {/* Footer, Cookie Banner etc. remain the same */}

    </>
  );
}

export default MyApp;