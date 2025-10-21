import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/style.css';
import { Mail, Phone, MessageCircle, ArrowUp } from 'lucide-react';

// Componente "Aurora"
const AuroraEffect = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return <div className="aurora-effect"></div>;
};


// Componente Botão WhatsApp Flutuante
const WhatsAppButton = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5531988019006&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20AORKIA."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale Conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 bg-primary text-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all duration-300 z-50 transform hover:scale-110 animate-pulse-slow"
  >
    <MessageCircle size={32} />
  </a>
);

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary/20 text-white pt-16 pb-8 relative">
       <div className="absolute top-4 right-4">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-gray-800/50 hover:bg-primary hover:text-black text-primary p-3 rounded-full transition-all duration-300"
                aria-label="Voltar ao topo"
            >
                <ArrowUp size={24} />
            </button>
        </div>
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
              <li><Link href="/backup-saas-estrategico" className="text-gray-300 hover:text-primary transition-colors">Backup SaaS Estratégico</Link></li>
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
  const [cookieConsent, setCookieConsent] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true' || consent === 'false') {
      setCookieConsent(consent === 'true');
    } else {
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);
  
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => sections.forEach(section => {
          if (section) {
            observer.unobserve(section)
          }
        });
    }, [router.pathname]); // Re-executa ao mudar de rota

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
                    'pulse-slow': 'pulse-slow 2s infinite ease-in-out',
                    'fade-in': 'fade-in 1s ease-in-out forwards',
                  },
                  keyframes: {
                    'marquee-left': {
                        '0%': { transform: 'translateX(0%)' },
                        '100%': { transform: 'translateX(-100%)' },
                    },
                    'pulse-slow': {
                        '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(0, 240, 181, 0.7)' },
                        '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(0, 240, 181, 0)' },
                    }
                  }
                },
              },
            };
          `
        }} />
      </Head>

      <div className="hidden lg:block">
        <AuroraEffect />
      </div>

      <header className="fixed top-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-black/20 z-[60] transition-all duration-300">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo/logo_aorkia.png"
              alt="AORKIA"
              width={140} 
              height={50}
              quality={100}
              priority
              className="md:w-32"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-2">
             {['Home', 'Backup SaaS Estratégico', 'Sobre', 'Blog', 'Contato'].map((item) => {
                const path = `/${item.toLowerCase().replace(/backup saas estratégico/g, 'backup-saas-estrategico').replace(/\s+/g, '-').replace('home', '')}`;
                return (
                    <Link key={item} href={path} className={`relative px-4 py-2 rounded-lg font-medium text-lg transition-colors duration-300 ${ isActiveRoute(path) ? 'text-primary' : 'text-text-color hover:text-primary'}`}>
                        <span>{item}</span>
                         {isActiveRoute(path) && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-primary rounded-full"></span>
                         )}
                         <span className="absolute inset-0 border-primary/30 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 border"></span>
                    </Link>
                );
             })}
          </nav>
          
           {/* Mobile Menu Button */}
           <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors group"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white block transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[70] transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex justify-between items-center h-20 px-6 border-b border-primary/20">
             <Link href="/" className="flex-shrink-0">
                <Image
                src="/logo/logo_aorkia.png"
                alt="AORKIA"
                width={100}
                height={40}
                priority
                />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu" className="text-white text-4xl hover:text-primary">&times;</button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-20 text-2xl space-y-8">
            <Link href="/" className="text-white hover:text-primary transition-colors">Home</Link>
            <Link href="/backup-saas-estrategico" className="text-white hover:text-primary transition-colors">Backup SaaS</Link>
            <Link href="/sobre" className="text-white hover:text-primary transition-colors">Sobre</Link>
            <Link href="/blog" className="text-white hover:text-primary transition-colors">Blog</Link>
            <Link href="/contato" className="text-white hover:text-primary transition-colors">Contato</Link>
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

