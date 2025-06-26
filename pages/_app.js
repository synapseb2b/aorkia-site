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
    document.execCommand('copy', false, 'contato@aorkia.com'); // Usando execCommand para compatibilidade
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 3000);
  };

  // Função para copiar telefone para área de transferência
  const copyPhoneToClipboard = () => {
    document.execCommand('copy', false, '+55 31 3958-6192'); // Usando execCommand para compatibilidade
    setPhoneCopied(true);
    setTimeout(() => {
      setPhoneCopied(false);
    }, 3000);
  };

  // Função para copiar endereço para área de transferência
  const copyAddressToClipboard = () => {
    document.execCommand('copy', false, 'Av. Getúlio Vargas, 671 — Sala 500, Belo Horizonte - MG'); // Usando execCommand para compatibilidade
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
      // URL de implantação do Google Apps Script atualizada
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
      // Usar um modal personalizado ou elemento na página em vez de alert
      // alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        {/* Favicon configurado corretamente */}
        <link rel="icon" type="image/png" sizes="32x32" href="/pubic/image/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />
        <link rel="icon" href="image/favicon.ico" />
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
              src="/image/logo_aorkia_color.png"
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

      {/* Desktop Navbar - Corrigida para fundo branco e textos escuros */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-200 bg-white z-[60] hidden md:block">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          {/* Logo à esquerda - AUMENTADA 25% */}
          <Link href="/" className="flex-shrink-0">
            <div className="logo-container h-20 relative">
      <Image
        src="/image/logo_aorkia_color.png"
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
            <Link href="/solucoes" className="text-gray-800 hover:text-primary transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20">
              Soluções
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
            </Link>
            {/* Logo Keepit sem texto - COM EFEITOS DE HOVER */}
            <Link href="/keepit" className="text-gray-800 hover:text-green-400 transition-all duration-300 text-lg font-medium relative group px-6 py-3 rounded-lg hover:bg-green-400/5 border border-transparent hover:border-green-400/20 flex items-center">
              <Image
                src="/image/keepit_logo_aorkia.png" // Assume que esta logo já é adequada para fundo claro
                alt="Keepit"
                className="h-6 w-auto"
                width={80}
                height={24}
              />
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-6"></span>
            </Link>
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

      {/* Mobile Navbar - Corrigida para fundo branco e textos escuros */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-gray-200 bg-white z-[60] md:hidden">
        <div className="flex justify-between items-center h-full px-4">
          <Link href="/" className="py-2">
            <div className="logo-container h-16 relative">
              <Image
                src="/image/logo_aorkia_color.png" // Logo colorida para fundo branco
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
            className="text-gray-800"
          >
            <div className="w-6 flex flex-col gap-1">
              <span className="w-full h-0.5 bg-gray-800 block"></span>
              <span className="w-full h-0.5 bg-gray-800 block"></span>
              <span className="w-full h-0.5 bg-gray-800 block"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Menu Mobile Fullscreen */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[65] flex flex-col"> {/* Fundo branco */}
          <div className="container mx-auto px-4 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="logo-container h-14 relative">
                  <Image
                    src="/image/logo_aorkia_color.png" // Logo colorida para fundo branco
                alt="AORKIA"
                className="h-16 w-auto"
                width={200}
                height={80}
                    priority
                  />
                </div>
              </Link>
              <button
                className="text-gray-800 text-3xl" // Texto escuro
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="flex flex-col space-y-6 justify-center mt-12 items-center">
              <Link
                href="/"
                className="text-gray-800 text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/solucoes"
                className="text-gray-800 text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Soluções
              </Link>
              {/* Logo Keepit sem texto no mobile */}
              <Link
                href="/keepit"
                className="text-gray-800 text-3xl md:text-5xl font-bold hover:text-green-400 transition-colors flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/image/keepit_logo_aorkia.png" // Assume que esta logo já é adequada para fundo claro
                  alt="Keepit"
                  className="h-8 md:h-12 w-auto"
                  width={120}
                  height={48}
                />
              </Link>
              <Link
                href="/sobre"
                className="text-gray-800 text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              {/* Novo link para o Blog no mobile */}
              <Link
                href="/blog"
                className="text-gray-800 text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contato"
                className="text-gray-800 text-3xl md:text-5xl font-bold hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
            <div className="mt-auto flex justify-center">
              <Link
                href="/contato"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg transition-all text-center mt-8 text-2xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Começar agora
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Botões flutuantes - Z-INDEX CORRIGIDO */}
      <div className="fixed bottom-8 right-8 z-[50] flex flex-col gap-4">
        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/553139586192"
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

      {/* Footer Global - Corrigido para fundo branco e textos escuros */}
      {/* Não mostrar footer na página presencadigital */}
      {router.pathname !== '/presencadigital' && (
        <footer className="bg-white text-gray-800 py-16 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulário de Contato - Primeira coluna no mobile */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-8 text-primary">Vamos conversar?</h3>
<form onSubmit={handleFormSubmit} className="space-y-6">
  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800">Nome</label>
    <input
      type="text"
      id="name"
      name="nome"
      required
      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors text-gray-800"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800">E-mail</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors text-gray-800"
    />
  </div>
  <div>
    <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-800">Empresa</label>
    <input
      type="text"
      id="company"
      name="empresa"
      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors text-gray-800"
    />
  </div>

  {/* CAMPO TELEFONE ADICIONADO */}
  <div>
  <label htmlFor="telefone" className="block text-sm font-medium mb-2 text-gray-800">Telefone</label>
  <input
    type="tel"
    id="telefone"
    name="telefone"
    required
    placeholder="+55 31 91234-5678"
    // Pattern atualizado para tornar espaços e hífen opcionais
    pattern="\+\d{2}\s?\d{2}\s?\d{4,5}-?\d{4}"
    title="Formato: +55 31 91234-5678 ou +5531912345678"
    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors text-gray-800"
  />
</div>

  <div>
    <label className="block text-sm font-medium mb-3 text-gray-800">Soluções de interesse</label>
    <div className="space-y-3">
      <label className="flex items-center">
        <input
          type="checkbox"
          name="solucoes"
          value="Backup SaaS Estratégico"
          className="mr-3 w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
        />
        <span className="text-gray-800">Backup SaaS Estratégico (Keepit)</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="solucoes"
          value="Governança Estratégica de Dados Sensíveis"
          className="mr-3 w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
        />
        <span className="text-gray-800">Governança Estratégica de Dados Sensíveis (DSPM)</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="solucoes"
          value="Inteligência Autônoma na Borda"
          className="mr-3 w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
        />
        <span className="text-gray-800">Inteligência Autônoma na Borda (Edge AI)</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="solucoes"
          value="Presença Digital AORKIA"
          className="mr-3 w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
        />
        <span className="text-gray-800">Presença Digital AORKIA</span>
      </label>
    </div>
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800">Mensagem</label>
    <textarea
      id="message"
      name="mensagem"
      rows="4"
      required
      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-gray-800"
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all font-semibold"
  >
    Enviar Mensagem
  </button>
</form>

              {formSubmitted && (
                <div className="mt-4 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                  <p className="text-green-400 font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                </div>
              )}
            </div>

            {/* Informações de Contato - Segunda coluna no mobile */}
            <div className="order-2 lg:order-1 bg-gray-50 p-8 rounded-lg shadow-inner">
              <div className="mb-12">
              <Image
                src="/image/logo_aorkia_color.png"
                alt="AORKIA"
                className="h-20 w-auto mb-6"
                width={416}
                height={166}
                quality={100}
            />
                <p className="text-gray-600 text-lg leading-relaxed">
                  A AORKIA ativa plataformas globais para resiliência cibernética, inteligência operacional e proteção inabalável de dados. Fortaleça seu negócio com a inteligência que ele precisa.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">Contato</h4>
                  <div className="space-y-3">
                    <div
                      className="flex items-center cursor-pointer hover:text-primary transition-colors group"
                      onClick={copyEmailToClipboard}
                    >
                      <i className="ri-mail-line text-xl mr-3 text-primary"></i>
                      <span className="text-gray-800">contato@aorkia.com</span>
                      {emailCopied && <span className="ml-2 text-green-600 text-sm">Copiado!</span>}
                    </div>
                    <div
                      className="flex items-center cursor-pointer hover:text-primary transition-colors group"
                      onClick={copyPhoneToClipboard}
                    >
                      <i className="ri-phone-line text-xl mr-3 text-primary"></i>
                      <span className="text-gray-800">+55 31 3958-6192</span>
                      {phoneCopied && <span className="ml-2 text-green-600 text-sm">Copiado!</span>}
                    </div>
                    <div
                      className="flex items-start cursor-pointer hover:text-primary transition-colors group"
                      onClick={copyAddressToClipboard}
                    >
                      <i className="ri-map-pin-line text-xl mr-3 text-primary mt-1"></i>
                      <span className="text-gray-800">Av. Getúlio Vargas, 671 — Sala 500, Belo Horizonte - MG</span>
                      {addressCopied && <span className="ml-2 text-green-600 text-sm">Copiado!</span>}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">Navegação</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/" className="text-gray-800 hover:text-primary transition-colors">Home</Link>
                    <Link href="/solucoes" className="text-gray-800 hover:text-primary transition-colors">Soluções</Link>
                    <Link href="/keepit" className="text-gray-800 hover:text-primary transition-colors">Keepit</Link>
                    <Link href="/sobre" className="text-gray-800 hover:text-primary transition-colors">Sobre</Link>
                    {/* Novo link para o Blog no footer */}
                    <Link href="/blog" className="text-gray-800 hover:text-primary transition-colors">Blog</Link>
                    <Link href="/contato" className="text-gray-800 hover:text-primary transition-colors">Contato</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Copyright - ATUALIZADA COM ANIMAÇÃO CRIATIVA */}
        <div className="border-t border-gray-200 mt-16 pt-8"> {/* Borda cinza clara */}
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <p className="text-gray-600 mb-3"> {/* Texto escuro */}
                  © 2025 AORKIA. Todos os direitos reservados.
                </p>
                {/* LINK ATUALIZADO PARA A ROTA CORRETA */}
                <Link
                  href="https://aorkia.com/presencadigital/"
                  className="group relative inline-block"
                >
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] animate-gradient-x p-[2px]">
                    <div className="bg-white rounded-lg px-4 py-2 group-hover:bg-gray-100 transition-all duration-300"> {/* Fundo branco, hover cinza claro */}
                      <span className="text-sm font-medium bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-primary transition-all duration-300 animate-float">
                        ✨ Desenvolvido por Presença Digital AORKIA
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow pointer-events-none"></div>
                </Link>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="https://wa.me/553139586192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors" // Texto escuro
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                </a>
                <a
                  href="mailto:contato@aorkia.com"
                  className="text-gray-600 hover:text-primary transition-colors" // Texto escuro
                >
                  <i className="ri-mail-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      )}

      {/* Banner de Cookies */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 p-4 z-[70]"> {/* Fundo cinza claro */}
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-800 text-sm"> {/* Texto escuro */}
              Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
            </p>
            <div className="flex gap-3">
              <button
                onClick={acceptCookies}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
                Aceitar
              </button>
              <button
                onClick={declineCookies}
                className="border border-gray-400 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
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
 
