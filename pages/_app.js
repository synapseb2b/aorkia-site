import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efeito para carregar scripts externos como RemixIcon
  useEffect(() => {
    const remixiconLink = document.createElement('link');
    remixiconLink.href = 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css';
    remixiconLink.rel = 'stylesheet';
    document.head.appendChild(remixiconLink);

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

      {/* Header Global */}
      <header className="fixed w-full z-50 bg-gray-900 shadow-md">
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
          <Link href="/" className="py-4">
            <Image 
              src="/logo_aorkia_white.png" 
              alt="AORKIA" 
              width={120} 
              height={30} 
              className="h-8 w-auto" 
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/solucoes" className="text-white hover:text-primary transition-colors">
              Soluções
            </Link>
            <Link href="/sobre" className="text-white hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="text-white hover:text-primary transition-colors">
              Contato
            </Link>
            <Link href="/contato" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all">
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

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-50 md:hidden">
          <div className="container mx-auto px-4 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image 
                  src="/logo_aorkia_white.png" 
                  alt="AORKIA" 
                  width={120} 
                  height={30} 
                  className="h-8 w-auto" 
                />
              </Link>
              <button 
                className="text-white text-2xl"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <Link 
                href="/" 
                className="text-white text-xl hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/solucoes" 
                className="text-white text-xl hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Soluções
              </Link>
              <Link 
                href="/sobre" 
                className="text-white text-xl hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/contato" 
                className="text-white text-xl hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <Link 
                href="/contato" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Começar agora
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Espaçador para compensar o header fixo */}
      <div className="h-16"></div>

      {/* Conteúdo da Página */}
      <Component {...pageProps} />

      {/* Footer Global */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:text-left text-center">
              <Image 
                src="/logo_aorkia_white.png" 
                alt="AORKIA" 
                width={140} 
                height={35} 
                className="inline-block md:mx-0 mx-auto" 
              />
              <p className="mt-4 text-sm max-w-md md:mx-0 mx-auto">
                Soluções estratégicas para empresas que buscam excelência e inovação no mercado B2B.
              </p>
            </div>
            <div className="md:text-right text-center">
              <p className="text-sm">
                Av. Getúlio Vargas, 671 — Sala 500, BH - MG<br />
                +55 31 98801-9006<br />
                contato@aorkia.com
              </p>
              <p className="mt-6 text-xs">
                © 2025 AORKIA. Todos os direitos reservados.<br />
                <Link href="/privacy" className="text-gray-400 hover:text-white">Política de Privacidade</Link> | <Link href="/terms" className="text-gray-400 hover:text-white">Termos de Uso</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
