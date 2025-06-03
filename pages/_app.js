import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const router = useRouter();
  const logos = ['/images/logo_aorkia_white.png', '/images/logo_aorkia_color.png'];
  const preloaderRef = useRef(null);

  // Efeito para alternar logos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Efeito para controlar o preloader
  useEffect(() => {
    let timer;
    let interval;

    if (isLoading) {
      // Simular progresso de carregamento
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10; // Acelerado para 10% por etapa
        });
      }, 100); // Intervalo reduzido para 100ms

      // Ocultar preloader após o carregamento completo
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); // Reduzido para 1.5 segundos
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isLoading]);

  // Efeito para verificar se o cookie já foi aceito
  useEffect(() => {
    // Verificar se estamos no lado do cliente
    if (typeof window !== 'undefined') {
      const cookieAccepted = localStorage.getItem('cookieAccepted');
      
      // Mostrar banner de cookies após um pequeno delay
      setTimeout(() => {
        setShowCookieBanner(!cookieAccepted);
      }, 1000);
    }
  }, []);

  // Função para aceitar cookies
  const handleAcceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowCookieBanner(false);
  };

  // Função para abrir configurações de cookies
  const handleCookieSettings = () => {
    // Implementação futura: abrir modal de configurações
    console.log('Abrir configurações de cookies');
    // Por enquanto, apenas aceita os cookies
    handleAcceptCookies();
  };

  // Função para lidar com mudanças de rota
  useEffect(() => {
    const handleRouteChange = () => {
      // Fechar o menu ao mudar de página
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>AORKIA - Soluções Estratégicas em Tecnologia</title>
        <meta name="description" content="Transformamos desafios complexos em crescimento sustentável e performance superior através de soluções estratégicas em tecnologia." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Preloader */}
      {isLoading && (
        <div className="preloader" ref={preloaderRef}>
          <img 
            src="/images/logo_aorkia_white.png" 
            alt="AORKIA" 
            className="preloader__logo"
          />
          <div className="preloader__bar-container">
            <div 
              className="preloader__bar"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Navbar Lateral (Desktop) */}
      <div className="sidebar">
        {/* Logo Vertical com Transição */}
        <div className="sidebar__logo-container">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`sidebar__logo ${activeLogoIndex === index ? 'active' : ''}`}
            >
              <img 
                src={logo} 
                alt="AORKIA" 
                width={120} 
                height={30}
              />
            </div>
          ))}
        </div>

        {/* Menu Sanduíche */}
        <button 
          className={`sidebar__menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="sidebar__menu-line"></span>
          <span className="sidebar__menu-line"></span>
          <span className="sidebar__menu-line"></span>
        </button>

        {/* "SEE OUR WORK" no canto inferior */}
        <Link href="/solucoes">
          <a className="sidebar__see-work">Ver nosso trabalho</a>
        </Link>
      </div>

      {/* Navbar Mobile */}
      <div className="mobile-navbar">
        <Link href="/">
          <a>
            <img 
              src="/images/logo_aorkia_white.png" 
              alt="AORKIA" 
              className="mobile-navbar__logo"
            />
          </a>
        </Link>
        <button 
          className={`mobile-navbar__menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="mobile-navbar__menu-line"></span>
          <span className="mobile-navbar__menu-line"></span>
          <span className="mobile-navbar__menu-line"></span>
        </button>
      </div>

      {/* Menu Fullscreen */}
      <div className={`fullscreen-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="fullscreen-menu__nav">
          {[
            { name: 'Home', path: '/' },
            { name: 'Soluções', path: '/solucoes' },
            { name: 'Sobre', path: '/sobre' },
            { name: 'Contato', path: '/contato' }
          ].map((item) => (
            <Link key={item.name} href={item.path}>
              <a 
                className={`fullscreen-menu__link ${router.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <Component {...pageProps} />
      </main>

      {/* Cookie Banner */}
      <div className={`cookie-banner ${showCookieBanner ? 'active' : ''}`}>
        <p className="cookie-banner__text">
          Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <Link href="/politica-privacidade"><a className="cookie-banner__link">Política de Privacidade</a></Link>.
        </p>
        <div className="cookie-banner__buttons">
          <button 
            onClick={handleCookieSettings}
            className="cookie-banner__button cookie-banner__button--settings"
          >
            Configurações
          </button>
          <button 
            onClick={handleAcceptCookies}
            className="cookie-banner__button cookie-banner__button--accept"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </>
  );
}
