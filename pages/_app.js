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
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [logoToggle, setLogoToggle] = useState(false);
  const logoIntervalRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);

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
    document.execCommand('copy', false, 'contato@aorkia.com');
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 3000);
  };

  // Função para copiar telefone para área de transferência
  const copyPhoneToClipboard = () => {
    document.execCommand('copy', false, '+55 31 3958-6192');
    setPhoneCopied(true);
    setTimeout(() => {
      setPhoneCopied(false);
    }, 3000);
  };

  // Função para copiar endereço para área de transferência
  const copyAddressToClipboard = () => {
    document.execCommand('copy', false, 'Av. Getúlio Vargas, 671 — Sala 500, Belo Horizonte - MG');
    setAddressCopied(true);
    setTimeout(() => {
      setAddressCopied(false);
    }, 3000);
  };

  // Função para lidar com o envio do formulário
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

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        {/* Favicon configurado corretamente */}
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
                    'slide-in-right': 'slideInRight 0.4s ease-out',
                    'fade-in-up': 'fadeInUp 0.5s ease-out',
                    'scale-in': 'scaleIn 0.3s ease-out',
                  },
                  keyframes: {
                    'gradient-x': {
                      '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                      },
                      '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                      },
                    },
                    'pulse-glow': {
                      '0%': {
                        'box-shadow': '0 0 5px #0076FF, 0 0 10px #0076FF, 0 0 15px #0076FF',
                        'transform': 'scale(1)'
                      },
                      '100%': {
                        'box-shadow': '0 0 10px #0076FF, 0 0 20px #0076FF, 0 0 30px #0076FF',
                        'transform': 'scale(1.02)'
                      },
                    },
                    'float': {
                      '0%, 100%': { 'transform': 'translateY(0px)' },
                      '50%': { 'transform': 'translateY(-5px)' },
                    },
                    'slideInRight': {
                      '0%': { 'transform': 'translateX(100%)', 'opacity': '0' },
                      '100%': { 'transform': 'translateX(0)', 'opacity': '1' },
                    },
                    'fadeInUp': {
                      '0%': { 'transform': 'translateY(20px)', 'opacity': '0' },
                      '100%': { 'transform': 'translateY(0)', 'opacity': '1' },
                    },
                    'scaleIn': {
                      '0%': { 'transform': 'scale(0.9)', 'opacity': '0' },
                      '100%': { 'transform': 'scale(1)', 'opacity': '1' },
                    },
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

      {/* Desktop Navbar - UX MELHORADA E LOGO CORRIGIDA */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-200 bg-white z-[60] hidden md:block">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          {/* Logo à esquerda - LOGO CORRIGIDA */}
          <Link href="/" className="flex-shrink-0">
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

          {/* Menu à direita */}
          <nav className="flex items-center space-x-2">
            <Link href="/" className="text-gray-800 hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Home
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
            
            {/* Dropdown Soluções - UX MELHORADA */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button className="text-gray-800 hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20 flex items-center">
                Soluções
                <i className="ri-arrow-down-s-line ml-1"></i>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
              </button>
              
              {/* Dropdown Menu - MELHORADO */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-[70] py-2">
                  <Link 
                    href="/backup_saas_estrategico" 
                    className="block px-6 py-4 text-gray-800 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    <div className="font-semibold text-lg">Backup SaaS Estratégico</div>
                    <div className="text-sm text-gray-600 mt-1">Keepit - Proteção imutável para Microsoft 365, Google Workspace e Salesforce</div>
                  </Link>
                  <Link 
                    href="/governanca_dados_sensiveis" 
                    className="block px-6 py-4 text-gray-800 hover:bg-primary/5 hover:text-primary transition-colors"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    <div className="font-semibold text-lg">Governança Estratégica de Dados Sensíveis</div>
                    <div className="text-sm text-gray-600 mt-1">DSPM - Visibilidade e controle total dos seus dados sensíveis</div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/sobre" className="text-gray-800 hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Sobre
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
            <Link href="/blog" className="text-gray-800 hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Blog
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
            <Link href="/contato" className="text-gray-800 hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Contato
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Navbar - MODERNIZADO */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 z-[60] md:hidden">
        <div className="flex justify-between items-center h-full px-6">
          <Link href="/" className="py-2">
            <div className="logo-container h-16 relative">
              <Image
                src="/logo/logo_aorkia_color_transparent.png"
                alt="AORKIA"
                className="h-16 w-auto"
                width={200}
                height={80}
                priority
              />
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="w-full h-0.5 bg-gray-800 block transition-all duration-300 group-hover:bg-primary"></span>
              <span className="w-full h-0.5 bg-gray-800 block transition-all duration-300 group-hover:bg-primary"></span>
              <span className="w-full h-0.5 bg-gray-800 block transition-all duration-300 group-hover:bg-primary"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Menu Mobile Fullscreen - COMPLETAMENTE MODERNIZADO */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[64] animate-fade-in-up"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Container */}
          <div className="fixed inset-0 z-[65] flex">
            <div className="ml-auto w-full max-w-sm bg-gradient-to-br from-primary via-dark-blue-2 to-dark-blue-1 animate-slide-in-right">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <div className="logo-container h-12 relative">
                    <Image
                      src="/logo/logo_aorkia_white_transparent.png"
                      alt="AORKIA"
                      className="h-12 w-auto"
                      width={150}
                      height={48}
                      priority
                    />
                  </div>
                </Link>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-6 py-8 space-y-2">
                {/* Home */}
                <Link
                  href="/"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group animate-fade-in-up"
                  style={{ animationDelay: '0.1s' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <i className="ri-home-line text-xl"></i>
                  </div>
                  <span className="text-lg font-medium">Home</span>
                </Link>

                {/* Soluções - Accordion */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <button
                    onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <i className="ri-shield-check-line text-xl"></i>
                      </div>
                      <span className="text-lg font-medium">Soluções</span>
                    </div>
                    <i className={`ri-arrow-${solutionsExpanded ? 'up' : 'down'}-s-line text-xl transition-transform duration-300`}></i>
                  </button>
                  
                  {/* Submenu */}
                  {solutionsExpanded && (
                    <div className="ml-14 mt-2 space-y-1 animate-fade-in-up">
                      <Link
                        href="/backup_saas_estrategico"
                        className="block p-3 rounded-lg hover:bg-white/5 transition-colors text-white/80 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-medium">Backup SaaS Estratégico</div>
                        <div className="text-sm text-white/60 mt-1">Keepit - Proteção imutável</div>
                      </Link>
                      <Link
                        href="/governanca_dados_sensiveis"
                        className="block p-3 rounded-lg hover:bg-white/5 transition-colors text-white/80 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-medium">Governança de Dados</div>
                        <div className="text-sm text-white/60 mt-1">DSPM - Controle total</div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Sobre */}
                <Link
                  href="/sobre"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group animate-fade-in-up"
                  style={{ animationDelay: '0.3s' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <i className="ri-team-line text-xl"></i>
                  </div>
                  <span className="text-lg font-medium">Sobre</span>
                </Link>

                {/* Blog */}
                <Link
                  href="/blog"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <i className="ri-article-line text-xl"></i>
                  </div>
                  <span className="text-lg font-medium">Blog</span>
                </Link>

                {/* Contato */}
                <Link
                  href="/contato"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-white group animate-fade-in-up"
                  style={{ animationDelay: '0.5s' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <i className="ri-mail-line text-xl"></i>
                  </div>
                  <span className="text-lg font-medium">Contato</span>
                </Link>
              </nav>

              {/* CTA Section */}
              <div className="p-6 border-t border-white/10">
                <Link
                  href="/contato"
                  className="w-full flex items-center justify-center space-x-3 p-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-white/90 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: '0.6s' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className="ri-rocket-line text-xl"></i>
                  <span>Começar agora</span>
                </Link>
                
                {/* Contact Info */}
                <div className="mt-4 text-center text-white/60 text-sm animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  <p>+55 31 3958-6192</p>
                  <p>contato@aorkia.com</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Botões flutuantes */}
      <div className="fixed bottom-8 right-8 z-[50] flex flex-col gap-4">
        <a
          href="https://wa.me/553139586192"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          title="Fale conosco no WhatsApp"
        >
          <i className="ri-whatsapp-line text-xl"></i>
        </a>

        <Link href="/" className="bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
          <i className="ri-home-4-line text-xl"></i>
        </Link>
      </div>

      {/* Espaçador para compensar o header fixo */}
      <div className="h-20 md:h-20"></div>

      {/* Banner de Cookies */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-[70] shadow-lg">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-700">
              <p>
                Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{' '}
                <Link href="/politica-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Componente da página */}
      <Component 
        {...pageProps} 
        scrollToNextSection={scrollToNextSection}
        copyEmailToClipboard={copyEmailToClipboard}
        copyPhoneToClipboard={copyPhoneToClipboard}
        copyAddressToClipboard={copyAddressToClipboard}
        emailCopied={emailCopied}
        phoneCopied={phoneCopied}
        addressCopied={addressCopied}
        handleFormSubmit={handleFormSubmit}
        formSubmitted={formSubmitted}
      />
    </>
  );
}

export default MyApp;

