import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoverProduct, setHoverProduct] = useState(null);
  const videoRef = useRef(null);
  const logos = ['/images/logo_aorkia_white.png', '/images/logo_aorkia_color.png'];
  
  // Produtos com suas respectivas imagens de fundo
  const products = [
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      description: 'Proteção completa e contínua para seus dados críticos na nuvem',
      image: '/images/keepit.png'
    },
    {
      id: 'finops',
      title: 'Plataformas de FinOps com IA',
      description: 'Otimização de custos e governança financeira para ambientes cloud',
      image: '/images/finops.png'
    },
    {
      id: 'edge',
      title: 'Plataformas Edge AI',
      description: 'Inteligência artificial na borda para decisões em tempo real',
      image: '/images/edge.png'
    },
    {
      id: 'dspm',
      title: 'Data Security Posture Management',
      description: 'Visibilidade e proteção contínua para seus dados mais valiosos',
      image: '/images/dspm.png'
    },
    {
      id: 'bas',
      title: 'Breach and Attack Simulation',
      description: 'Validação contínua de segurança contra ameaças reais',
      image: '/images/bas.png'
    },
    {
      id: 'digital',
      title: 'Otimização de Presença Digital',
      description: 'Estratégias para maximizar seu impacto no ambiente digital',
      image: '/images/digital.png'
    }
  ];

  // Efeito para alternar logos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogoIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Efeito para controlar o preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Efeito para monitorar o scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito para iniciar o vídeo de fundo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Erro ao reproduzir vídeo:", error);
      });
    }
  }, []);

  return (
    <div className={`relative ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
      <Head>
        <title>AORKIA - Soluções Estratégicas em Tecnologia</title>
        <meta name="description" content="Transformamos desafios complexos em crescimento sustentável e performance superior através de soluções estratégicas em tecnologia." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 relative mb-8">
              <Image 
                src="/images/logo_aorkia_white.png" 
                alt="AORKIA" 
                layout="fill" 
                objectFit="contain"
                className="animate-pulse" 
              />
            </div>
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-2000 ease-out"
                style={{ width: `${Math.min(100, (Date.now() % 2500) / 25)}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Menu Lateral Fixo (estilo Jam3) */}
      <div className="fixed top-0 left-0 h-full w-16 z-40 flex flex-col justify-between items-center py-8 border-r border-gray-800">
        {/* Logo Vertical com Transição */}
        <div className="relative w-8 h-32">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 flex items-center justify-center"
              style={{ 
                opacity: activeLogoIndex === index ? 1 : 0,
                transform: 'rotate(-90deg)',
                transformOrigin: 'center'
              }}
            >
              <Image 
                src={logo} 
                alt="AORKIA" 
                width={120} 
                height={30}
                className="object-contain" 
              />
            </div>
          ))}
        </div>

        {/* Menu Sanduíche */}
        <button 
          className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* "SEE OUR WORK" no canto inferior */}
        <div className="transform -rotate-90 whitespace-nowrap text-white text-xs tracking-widest uppercase">
          <Link href="/solucoes">
            <a className="hover:text-blue-500 transition-colors duration-300">Ver nosso trabalho</a>
          </Link>
        </div>
      </div>

      {/* Menu Fullscreen */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-30 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {['Home', 'Soluções', 'Sobre', 'Contato'].map((item, index) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              >
                <a 
                  className={`text-4xl md:text-6xl font-bold text-white hover:text-blue-500 transition-all duration-300 transform ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section com Vídeo de Fundo */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Vídeo de Fundo */}
        <div className="absolute inset-0 bg-black">
          <video 
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/video_hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
        </div>

        {/* Conteúdo Hero */}
        <div className="relative h-full container mx-auto px-4 md:px-16 flex flex-col justify-center">
          <div className="max-w-4xl ml-0 md:ml-16">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Transformamos <span className="text-blue-500">tecnologia</span> em vantagem competitiva
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Soluções estratégicas que impulsionam inovação e crescimento sustentável para sua empresa.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fadeIn" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <span className="text-white text-sm uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-0.5 h-8 bg-white/50 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1/3 bg-white animate-scrollDown"></span>
          </div>
        </div>
      </section>

      {/* Seção Selected Projects (similar à Jam3) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 md:mb-0">
              Soluções<br />Selecionadas
            </h2>
            <div className="max-w-md">
              <p className="text-lg text-gray-600">
                Uma seleção de <span className="font-medium">Tecnologia Estratégica</span>, <span className="font-medium">Segurança</span> e <span className="font-medium">Transformação Digital</span> para impulsionar seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Produtos com Efeito Hover */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {products.map((product) => (
            <div 
              key={product.id}
              className="relative h-screen md:h-[70vh] overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoverProduct(product.id)}
              onMouseLeave={() => setHoverProduct(null)}
            >
              {/* Fundo com imagem (visível apenas no hover) */}
              <div 
                className="absolute inset-0 transition-opacity duration-700 ease-in-out z-0"
                style={{ 
                  opacity: hoverProduct === product.id ? 1 : 0,
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Conteúdo do produto */}
              <div className={`relative z-10 h-full flex flex-col justify-center px-8 md:px-16 transition-colors duration-700 ${
                hoverProduct === product.id ? 'text-white' : 'text-black'
              }`}>
                <h3 className="text-3xl md:text-5xl font-bold mb-4">{product.title}</h3>
                <p className="text-lg md:text-xl max-w-md">{product.description}</p>
                <div className="mt-8">
                  <Link href={`/solucoes#${product.id}`}>
                    <a className={`inline-flex items-center text-lg ${
                      hoverProduct === product.id ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      <span className="mr-2">Saiba mais</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção "What's in the works?" (similar à Jam3) */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-16">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-widest text-gray-500">O que estamos preparando?</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              <span className="text-blue-500">Soluções avançadas</span> que transformam desafios em oportunidades.
            </h2>
            <div className="flex flex-col justify-between">
              <p className="text-xl text-gray-600 mb-8">
                Uma nova geração de ferramentas de <span className="text-black">segurança preditiva</span> para proteger seus ativos mais valiosos.
              </p>
              <div>
                <p className="text-lg mb-4">Pronto para transformar seu negócio?</p>
                <Link href="/contato">
                  <a className="inline-block text-lg font-medium border-b-2 border-blue-500 pb-1 hover:text-blue-500 transition-colors">
                    Fale conosco
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="mb-8 md:mb-0">
              <Image 
                src="/images/logo_aorkia_white.png" 
                alt="AORKIA" 
                width={180} 
                height={45}
                className="object-contain" 
              />
            </div>
            <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              {['Home', 'Soluções', 'Sobre', 'Contato'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                >
                  <a className="text-lg hover:text-blue-500 transition-colors">{item}</a>
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AORKIA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0 md:mr-8">
          Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <Link href="/politica-privacidade"><a className="underline">Política de Privacidade</a></Link>.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-transparent border border-white text-white text-sm rounded hover:bg-white hover:text-gray-900 transition-colors">
            Configurações
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
