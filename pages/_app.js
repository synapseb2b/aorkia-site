import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/style.css';
import { Mail, Phone } from 'lucide-react';

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary/20 text-white pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Coluna Esquerda: Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image src="/logo/logo_aorkia.png" alt="AORKIA Logo" width={150} height={60} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Resiliência Cibernética de classe mundial. Parceiro oficial Keepit no Brasil.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Direção estratégica: Synapse B2B
            </p>
          </div>

          {/* Coluna Média Esquerda: Navegação */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/backup_saas_estrategico" className="text-gray-300 hover:text-primary transition-colors">Backup SaaS Estratégico</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contato" className="text-gray-300 hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna Média Direita: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/termos-de-uso" className="text-gray-300 hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="text-gray-300 hover:text-primary transition-colors">Privacidade</Link></li>
              <li><Link href="/conformidade" className="text-gray-300 hover:text-primary transition-colors">Conformidade</Link></li>
            </ul>
          </div>

          {/* Coluna Direita: Contato */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contato@aorkia.com" className="text-gray-300 hover:text-primary transition-colors">contato@aorkia.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+5531988019006" className="text-gray-300 hover:text-primary transition-colors">+55 31 98801-9006</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} AORKIA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookieConsent(true);
    } else {
      setTimeout(() => {
        setShowCookieBanner(true);
      }, 1500);
    }
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

  const isActiveRoute = (path) => router.pathname === path;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.png" />
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
                    'marquee-left': 'marquee-left 40s linear infinite',
                    'pulse-fast': 'pulse-fast 1.5s infinite ease-in-out',
                    'fade-in': 'fade-in 1s ease-in-out',
                  },
                  keyframes: {
                    'marquee-left': {
                        '0%': { transform: 'translateX(0%)' },
                        '100%': { transform: 'translateX(-100%)' },
                    },
                    'pulse-fast': {
                      '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
                      '50%': { transform: 'scale(1.05)', opacity: 1 },
                    },
                    'fade-in': {
                      '0%': { opacity: '0' },
                      '100%': { opacity: '1' },
                    },
                  }
                },
              },
            };
          `
        }} />
      </Head>

      {isLoading && (
        <div className="fixed inset-0 bg-background-dark z-[100] flex items-center justify-center">
          {/* Preloader content can go here if needed */}
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-sm border-b border-primary/20 shadow-lg shadow-black/5 z-[60] hidden md:block">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo/logo_aorkia.png"
              alt="AORKIA"
              width={70}
              height={40}
              quality={100}
              priority
            />
          </Link>
          <nav className="flex items-center space-x-2">
            <Link href="/" className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/') ? 'text-primary bg-primary/10 border-primary/30' : 'text-text-color hover:text-primary hover:bg-primary/5'}`}>
              <span>Home</span>
            </Link>
            <Link href="/backup_saas_estrategico" className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/backup_saas_estrategico') ? 'text-primary bg-primary/10 border-primary/30' : 'text-text-color hover:text-primary hover:bg-primary/5'}`}>
              <span>Backup SaaS Estratégico</span>
            </Link>
            <Link href="/sobre" className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/sobre') ? 'text-primary bg-primary/10 border-primary/30' : 'text-text-color hover:text-primary hover:bg-primary/5'}`}>
              <span>Sobre</span>
            </Link>
            <Link href="/blog" className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/blog') ? 'text-primary bg-primary/10 border-primary/30' : 'text-text-color hover:text-primary hover:bg-primary/5'}`}>
              <span>Blog</span>
            </Link>
            <Link href="/contato" className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-lg border border-transparent ${ isActiveRoute('/contato') ? 'text-primary bg-primary/10 border-primary/30' : 'text-text-color hover:text-primary hover:bg-primary/5'}`}>
              <span>Contato</span>
            </Link>
          </nav>
        </div>
      </header>
      
       <header className="fixed top-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-sm border-b border-primary/20 z-[60] md:hidden">
        <div className="flex justify-between items-center h-full px-6">
          <Link href="/">
            <Image
              src="/logo/logo_aorkia.png"
              alt="AORKIA"
              width={150}
              height={60}
              priority
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors group"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="w-full h-0.5 bg-white block"></span>
              <span className="w-full h-0.5 bg-white block"></span>
              <span className="w-full h-0.5 bg-white block"></span>
            </div>
          </button>
        </div>
      </header>

      <main className="pt-20">
        <Component {...pageProps} />
      </main>

      <Footer />

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 p-4 z-[70]">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-800 text-sm">
              Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa <Link href="/privacidade" className="font-semibold underline hover:text-primary">política de cookies.</Link>
            </p>
            <div className="flex gap-3">
              <button onClick={acceptCookies} className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-lg transition-all text-sm font-medium">
                Aceitar
              </button>
              <button onClick={declineCookies} className="border border-gray-400 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all text-sm font-medium">
                Recusar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;

