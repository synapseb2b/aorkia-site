import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const videoRef = useRef(null);
  
  // Produtos
  const products = [
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      description: 'Proteja seus dados críticos com nossa solução de backup especializada para ambientes SaaS, garantindo continuidade de negócios e conformidade regulatória.',
      image: '/images/keepit.png'
    },
    {
      id: 'finops',
      title: 'Plataformas de FinOps com IA',
      description: 'Otimize seus investimentos em nuvem com nossa plataforma de FinOps potencializada por inteligência artificial, reduzindo custos e maximizando o valor de seus recursos.',
      image: '/images/finops.png'
    },
    {
      id: 'edge',
      title: 'Plataformas Edge AI',
      description: 'Leve o poder da inteligência artificial para a borda da sua rede, permitindo processamento em tempo real e tomada de decisões mais rápida e eficiente.',
      image: '/images/edge.png'
    },
    {
      id: 'dspm',
      title: 'Data Security Posture Management (DSPM)',
      description: 'Proteja seus dados sensíveis com nossa solução de gerenciamento de postura de segurança de dados, identificando riscos e vulnerabilidades em tempo real.',
      image: '/images/dspm.png'
    },
    {
      id: 'bas',
      title: 'Breach and Attack Simulation (BAS)',
      description: 'Teste continuamente suas defesas de segurança com simulações realistas de ataques, identificando vulnerabilidades antes que sejam exploradas por ameaças reais.',
      image: '/images/bas.png'
    },
    {
      id: 'digital',
      title: 'Otimização de Presença Digital',
      description: 'Transforme sua presença online com nossas soluções estratégicas de marketing digital, aumentando visibilidade, engajamento e conversões.',
      image: '/images/digital.png'
    }
  ];
  
  // Efeito para iniciar o vídeo de fundo quando a página carregar
  useEffect(() => {
    setIsLoaded(true);
    
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Erro ao reproduzir vídeo:", error);
      });
    }
  }, []);

  return (
    <div className={`relative ${isLoaded ? 'animate-fadeIn' : ''}`}>
      <Head>
        <title>AORKIA - Soluções Estratégicas em Tecnologia</title>
        <meta name="description" content="Transformamos desafios complexos em crescimento sustentável e performance superior através de soluções estratégicas em tecnologia." />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        {/* Vídeo de Fundo */}
        <video 
          ref={videoRef}
          className="hero__video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/video_hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
        
        <div className="hero__content">
          <h1 className="hero__title">
            Soluções estratégicas que <span style={{ color: '#0076FF' }}>transformam</span> desafios em oportunidades
          </h1>
          <p className="hero__subtitle">
            Combinamos expertise tecnológica e visão estratégica para impulsionar o crescimento sustentável do seu negócio
          </p>
        </div>
      </section>

      {/* Soluções Selecionadas */}
      <section className="whats-in-works">
        <div className="whats-in-works__content">
          <h2 className="whats-in-works__title">Soluções Selecionadas</h2>
          <p className="whats-in-works__description">
            Conheça nossas soluções estratégicas que transformam desafios complexos em crescimento sustentável e performance superior.
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section className="product-blocks">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className="product-block"
            onMouseEnter={() => setActiveProductIndex(index)}
            onMouseLeave={() => setActiveProductIndex(null)}
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-block__bg"
              style={{ opacity: activeProductIndex === index ? 1 : 0 }}
            />
            <div 
              className="product-block__overlay"
              style={{ opacity: activeProductIndex === index ? 1 : 0 }}
            ></div>
            <div 
              className="product-block__content"
              style={{ color: activeProductIndex === index ? 'white' : 'black' }}
            >
              <h2 className="product-block__title">{product.title}</h2>
              <p className="product-block__description">{product.description}</p>
              <Link href="/solucoes">
                <a style={{ 
                  display: 'inline-block', 
                  marginTop: '2rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: activeProductIndex === index ? 'white' : '#0076FF',
                  color: activeProductIndex === index ? '#0076FF' : 'white',
                  borderRadius: '2rem',
                  fontWeight: '600',
                  transition: 'background-color 0.3s ease, color 0.3s ease'
                }}>
                  Saiba mais
                </a>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* O que estamos preparando */}
      <section className="whats-in-works">
        <div className="whats-in-works__content">
          <h2 className="whats-in-works__title">O que estamos preparando?</h2>
          <p className="whats-in-works__description">
            Uma nova geração de soluções estratégicas que combinam inteligência artificial, análise avançada de dados e automação para transformar a maneira como as empresas abordam seus desafios tecnológicos.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contato">
              <a style={{ 
                display: 'inline-block', 
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0076FF',
                color: 'white',
                borderRadius: '2rem',
                fontWeight: '600',
                transition: 'background-color 0.3s ease'
              }}>
                Fale conosco
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="product-blocks">
        <div 
          className="product-block"
          style={{ backgroundColor: '#0076FF', color: 'white' }}
        >
          <div className="product-block__content">
            <h2 className="product-block__title">Metodologia AORKIA</h2>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Engenharia Estratégica Aplicada</h3>
            <p className="product-block__description">
              Conheça os pilares que transformam desafios complexos em crescimento sustentável e performance superior.
            </p>
            <div style={{ marginTop: '2rem', borderLeft: '4px solid white', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Diagnóstico Preciso e Curadoria Estratégica</h4>
              <p>Entendimento profundo. Soluções sob medida.</p>
            </div>
            <p className="product-block__description">
              Cada projeto inicia com um diagnóstico minucioso, alinhado aos seus desafios e objetivos, para orientar escolhas tecnológicas sob medida.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__content">
          <img 
            src="/images/logo_aorkia_white.png" 
            alt="AORKIA" 
            className="footer__logo"
          />
          <nav className="footer__nav">
            <Link href="/"><a className="footer__link">Home</a></Link>
            <Link href="/solucoes"><a className="footer__link">Soluções</a></Link>
            <Link href="/sobre"><a className="footer__link">Sobre</a></Link>
            <Link href="/contato"><a className="footer__link">Contato</a></Link>
          </nav>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© {new Date().getFullYear()} AORKIA. Todos os direitos reservados.</p>
          <div className="footer__social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
