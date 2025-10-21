import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/style.css';
import { Mail, Phone, MessageCircle } from 'lucide-react';

// Componente Botão WhatsApp Flutuante
const WhatsAppButton = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5531988019006&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20AORKIA."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale Conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50 transform hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M16.634 14.256c-.227-.114-.472-.184-.728-.21l-.01-.003c-.93-.16-1.846-.5-2.618-1.028-.24-.163-.44-.378-.58-.633-.532-.976-.838-2.127-.838-3.374s.306-2.398.838-3.374c.14-.255.34-.47.58-.633.772-.529-1.688-.868-2.618-1.028l.01-.003c.256-.026.501-.096.728-.21a1.25 1.25 0 0 0 .61-1.313c-.156-.883-.717-1.638-1.488-2.01a1.24 1.24 0 0 0-1.072-.05L12.5 1.503a1.248 1.248 0 0 0-1.001 0l-2.254.902a1.24 1.24 0 0 0-1.072.05c-.77.372-1.332-1.127-1.488-2.01a1.25 1.25 0 0 0 .61 1.313c.227.114.472.184.728.21l.01.003c.93.16 1.846.5 2.618 1.028.24.163.44.378.58.633.532.976.838 2.127.838 3.374s-.306 2.398-.838 3.374c-.14.255-.34.47-.58.633-.772.529-1.688-.868-2.618-1.028l-.01.003c-.256-.026-.501-.096-.728-.21a1.25 1.25 0 0 0-.61 1.313c.156.883.717 1.638 1.488 2.01a1.24 1.24 0 0 0 1.072.05l2.254.902a1.248 1.248 0 0 0 1.001 0l2.254-.902a1.24 1.24 0 0 0 1.072-.05c.77-.372-1.332-1.127-1.488-2.01a1.25 1.25 0 0 0-.61-1.313ZM12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
    </svg>
  </a>
);

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
          <p className="text-gray-600 text-xs mt-2">
            Desenvolvido por <a href="https://www.synapseb2b.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Synapse B2B</a> | Plataformas Digitais arquitetadas em Engenharia de Receita.
          </p>
        </div>
      </div>
    </footer>
  );
};


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(null); // Inicia como null
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // A verificação do consentimento de cookies agora só roda no lado do cliente
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setCookieConsent(true);
    } else if (consent === 'false') {
        setCookieConsent(false);
    } else {
      // Se não houver registro, mostra o banner após um delay
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                  }
                },
              },
            };
          `
        }} />
      </Head>

      <header className="fixed top-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-sm border-b border-primary/20 shadow-lg shadow-black/5 z-[60] hidden md:block">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo/logo_aorkia.png"
              alt="AORKIA"
              width={80}
              height={50}
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

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-[70] transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex justify-end p-6">
               <button onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu" className="text-white text-4xl">&times;</button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-16 text-2xl space-y-8">
            <Link href="/" className="text-white hover:text-primary">Home</Link>
            <Link href="/backup_saas_estrategico" className="text-white hover:text-primary">Backup SaaS</Link>
            <Link href="/sobre" className="text-white hover:text-primary">Sobre</Link>
            <Link href="/blog" className="text-white hover:text-primary">Blog</Link>
            <Link href="/contato" className="text-white hover:text-primary">Contato</Link>
          </nav>
      </div>

      <main className="pt-20">
        <Component {...pageProps} />
      </main>

      <WhatsAppButton />
      <Footer />

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-primary/20 p-4 z-[70] animate-fade-in">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              Utilizamos cookies para otimizar sua experiência em nosso site. Ao continuar, você concorda com nossa <Link href="/privacidade" className="font-semibold underline hover:text-primary">Política de Privacidade</Link>.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button onClick={acceptCookies} className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-lg transition-all text-sm font-medium">
                Aceitar
              </button>
              <button onClick={declineCookies} className="border border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all text-sm font-medium">
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

