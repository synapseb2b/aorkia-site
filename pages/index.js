import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeProduct, setActiveProduct] = useState(null);
  const productsRef = useRef(null);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Produtos com suas respectivas imagens
  const products = [
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      description: 'Proteção completa para seus dados críticos na nuvem com a plataforma líder global Keepit.',
      image: '/images/keepit.png'
    },
    {
      id: 'finops',
      title: 'Plataformas de FinOps com IA',
      description: 'Otimize seus investimentos em nuvem com nossa plataforma de gerenciamento financeiro inteligente.',
      image: '/images/finops.png'
    },
    {
      id: 'edge',
      title: 'Plataformas Edge AI',
      description: 'Processamento de dados e inteligência artificial na borda para decisões em tempo real.',
      image: '/images/edge.png'
    },
    {
      id: 'dspm',
      title: 'Data Security Posture Management (DSPM)',
      description: 'Visibilidade e controle completos sobre seus dados sensíveis em ambientes multi-cloud.',
      image: '/images/dspm.png'
    },
    {
      id: 'bas',
      title: 'Breach and Attack Simulation (BAS)',
      description: 'Validação contínua de segurança para identificar vulnerabilidades antes que sejam exploradas.',
      image: '/images/bas.png'
    },
    {
      id: 'digital',
      title: 'Otimização de Presença Digital',
      description: 'Transforme sua presença online com estratégias digitais orientadas por dados e resultados.',
      image: '/images/digital.png'
    }
  ];

  return (
    <>
      <Head>
        <title>AORKIA | Soluções B2B que Transformam Negócios</title>
        <meta name="description" content="Soluções B2B que Transformam Negócios: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative h-screen overflow-hidden hero flex items-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                Soluções B2B que <br className="hidden md:block" />
                <span className="text-primary">Transformam</span> Negócios
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mb-12">
                Potencialize sua empresa com nossas soluções: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex justify-center animate-bounce">
            <a href="#solucoes" className="text-white text-4xl">
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção Soluções Selecionadas - Estilo Jam3 */}
        <section id="solucoes" className="py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-left mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Soluções <span className="text-primary">Selecionadas</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl">
                Na AORKIA, cada escolha tecnológica é fundamentada naquilo que mais importa:
                resultados previsíveis, eficiência operacional e expansão sustentável.
              </p>
            </div>
          </div>
        </section>

        {/* Produtos - Estilo Jam3 (um abaixo do outro, ocupando 100% da largura) */}
        <section ref={productsRef} className="relative">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="relative w-full h-screen md:h-[80vh] overflow-hidden group"
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              {/* Background Image (aparece apenas no hover) */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                  activeProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Background Color (aparece quando não está em hover) */}
              <div 
                className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                  activeProduct === product.id ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-500 ${
                  activeProduct === product.id ? 'text-white' : 'text-black'
                }`}>
                  {product.title}
                </h3>
                <p className={`text-xl md:text-2xl max-w-2xl transition-colors duration-500 ${
                  activeProduct === product.id ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {product.description}
                </p>
                <div className="mt-8">
                  <Link 
                    href="/solucoes" 
                    className={`inline-flex items-center text-lg font-medium transition-colors duration-500 ${
                      activeProduct === product.id ? 'text-primary hover:text-primary/80' : 'text-blue-700 hover:text-blue-800'
                    }`}
                  >
                    <span>Saiba mais</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Seção "O que estamos preparando" - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-left mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                O que estamos <span className="text-primary">preparando?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl">
                Uma nova geração de soluções que combinam inteligência artificial, automação avançada e segurança de ponta para transformar a maneira como as empresas operam e crescem no mercado B2B.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors">
                <div className="text-primary text-5xl mb-6">
                  <i className="ri-ai-generate"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Plataforma de IA Generativa para B2B</h3>
                <p className="text-gray-300 text-lg">
                  Uma solução revolucionária que utiliza IA generativa para automatizar processos complexos de negócios, criar conteúdo personalizado e otimizar operações em tempo real.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors">
                <div className="text-primary text-5xl mb-6">
                  <i className="ri-shield-keyhole-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Segurança Autônoma Adaptativa</h3>
                <p className="text-gray-300 text-lg">
                  Um sistema de segurança que aprende e se adapta continuamente às novas ameaças, utilizando IA para prever, detectar e responder a ataques em tempo real.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
