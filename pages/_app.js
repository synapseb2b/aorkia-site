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

      <header className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-lg shadow-black/5 z-[60] hidden md:block">
        {/* Conteúdo do Header Desktop */}
      </header>

      <header className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 z-[60] md:hidden">
        {/* Conteúdo do Header Mobile */}
      </header>

      {mobileMenuOpen && (
        <>
            {/* Conteúdo do Menu Mobile */}
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
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Nome</label>
                  <input type="text" id="name" name="nome" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">E-mail</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-300" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">Empresa</label>
                  <input type="text" id="company" name="empresa" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-300" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium mb-2 text-white">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" required placeholder="+55 31 91234-5678" pattern="\+\d{2}\s?\d{2}\s?\d{4,5}-?\d{4}" title="Formato: +55 31 91234-5678 ou +5531912345678" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Soluções de interesse</label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" name="solucoes" value="Backup SaaS Estratégico" className="mr-3 w-4 h-4 text-primary bg-white/10 border-white/20 rounded focus:ring-primary focus:ring-2" />
                      <span className="text-white">Backup SaaS Estratégico (Keepit)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="solucoes" value="Governança Estratégica de Dados Sensíveis" className="mr-3 w-4 h-4 text-primary bg-white/10 border-white/20 rounded focus:ring-primary focus:ring-2" />
                      <span className="text-white">Governança Estratégica de Dados Sensíveis (DSPM)</span>
                    </label>
                    {/* Checkbox de Presença Digital REMOVIDO */}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Mensagem</label>
                  <textarea id="message" name="mensagem" rows="4" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-white placeholder-gray-300"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all font-semibold">
                  Enviar Mensagem
                </button>
              </form>
              {formSubmitted && (
                <div className="mt-4 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                  <p className="text-green-400 font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                </div>
              )}
            </div>
            <div className="order-2 lg:order-1 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-inner">
                {/* Conteúdo da coluna de informações */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">Navegação</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/" className="text-white hover:text-primary transition-colors">Home</Link>
                    <Link href="/backup_saas_estrategico" className="text-white hover:text-primary transition-colors">Backup SaaS</Link>
                    <Link href="/governanca_dados_sensiveis" className="text-white hover:text-primary transition-colors">DSPM</Link>
                    {/* Link de Presença Digital REMOVIDO */}
                    <Link href="/sobre" className="text-white hover:text-primary transition-colors">Sobre</Link>
                    <Link href="/blog" className="text-white hover:text-primary transition-colors">Blog</Link>
                    <Link href="/contato" className="text-white hover:text-primary transition-colors">Contato</Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-16 pt-8">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <p className="text-gray-300 mb-4">© 2025 AORKIA. Todos os direitos reservados.</p>
                        {/* Bloco de "Site Desenvolvido por" REMOVIDO */}
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Ícones de Contato */}
                    </div>
                </div>
            </div>
        </div>
      </footer>

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 p-4 z-[70]">
            {/* Conteúdo do Banner de Cookies */}
        </div>
      )}
    </>
  );
}

export default MyApp;