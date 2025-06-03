import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  
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
            Transformamos desafios em oportunidades tecnológicas
          </h1>
          <p className="hero__subtitle">
            Soluções estratégicas que impulsionam seu negócio com tecnologias inovadoras e resultados mensuráveis.
          </p>
          <Link href="/solucoes">
            <a className="hero__cta">Conheça nossas soluções</a>
          </Link>
        </div>
        
        <a href="#selected-projects" className="hero__scroll">
          <span className="hero__scroll-text">Explore</span>
          <svg className="hero__scroll-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
          </svg>
        </a>
      </section>

      {/* Selected Projects Section */}
      <section id="selected-projects" className="selected-projects">
        <div className="selected-projects__header">
          <h2 className="selected-projects__title">Soluções Selecionadas</h2>
          <p className="selected-projects__description">
            Conheça nossas soluções estratégicas que transformam desafios complexos em crescimento sustentável e performance superior.
          </p>
        </div>
      </section>

      {/* Product Blocks */}
      <section className="product-blocks">
        {/* Backup SaaS Estratégico */}
        <div className="product-block">
          <img 
            src="/images/keepit.png" 
            alt="Backup SaaS Estratégico" 
            className="product-block__bg"
          />
          <div className="product-block__overlay"></div>
          <div className="product-block__content">
            <h2 className="product-block__title">Backup SaaS Estratégico</h2>
            <p className="product-block__description">
              Proteja seus dados críticos na nuvem com nossa solução de backup SaaS estratégico, garantindo continuidade de negócios e conformidade regulatória.
            </p>
            <Link href="/solucoes">
              <a className="product-block__link">Saiba mais</a>
            </Link>
          </div>
        </div>

        {/* Plataformas de FinOps com IA */}
        <div className="product-block">
          <img 
            src="/images/finops.png" 
            alt="Plataformas de FinOps com IA" 
            className="product-block__bg"
          />
          <div className="product-block__overlay"></div>
          <div className="product-block__content">
            <h2 className="product-block__title">Plataformas de FinOps com IA</h2>
            <p className="product-block__description">
              Otimize seus investimentos em nuvem com nossa plataforma de FinOps potencializada por IA, reduzindo custos e maximizando o valor de seus recursos tecnológicos.
            </p>
            <Link href="/solucoes">
              <a className="product-block__link">Saiba mais</a>
            </Link>
          </div>
        </div>

        {/* Plataformas Edge AI */}
        <div className="product-block">
          <img 
            src="/images/edge.png" 
            alt="Plataformas Edge AI" 
            className="product-block__bg"
          />
          <div className="product-block__overlay"></div>
          <div className="product-block__content">
            <h2 className="product-block__title">Plataformas Edge AI</h2>
            <p className="product-block__description">
              Processe dados em tempo real na borda da rede com nossas soluções de Edge AI, permitindo tomadas de decisão mais rápidas e reduzindo a latência.
            </p>
            <Link href="/solucoes">
              <a className="product-block__link">Saiba mais</a>
            </Link>
          </div>
        </div>

        {/* Data Security Posture Management (DSPM) */}
        <div className="product-block">
          <img 
            src="/images/dspm.png" 
            alt="Data Security Posture Management" 
            className="product-block__bg"
          />
          <div className="product-block__overlay"></div>
          <div className="product-block__content">
            <h2 className="product-block__title">Data Security Posture Management</h2>
            <p className="product-block__description">
              Gerencie proativamente a postura de segurança de seus dados com nossa solução DSPM, identificando e mitigando riscos antes que se tornem ameaças.
            </p>
            <Link href="/solucoes">
              <a className="product-block__link">Saiba mais</a>
            </Link>
          </div>
        </div>

        {/* Breach and Attack Simulation (BAS) */}
        <div className="product-block">
          <img 
            src="/images/bas.png" 
            alt="Breach and Attack Simulation" 
            className="product-block__bg"
          />
          <div className="product-block__overlay"></div>
          <div className="product-block__content">
            <h2 className="product-block__title">Breach and Attack Simulation</h2>
            <p className="product-block__description">
              Teste continuamente suas defesas de segurança com simulações realistas de ataques, identificando vulnerabilidades e fortalecendo sua postura de segurança.
            </p>
            <Link href="/solucoes">
              <a className="product-block__link">Saiba mais</a>
            </Link>
          </div>
        </div>

        {/* Otimização de Presença Digital */}
        <div className="product-block">
          <img 
            src="/images/digital.png" 
            alt="Otimização de Presença Digital" 
            className="product-block__bg"
          />
          <div className="product-block__overlay"></div>
          <div className="product-block__content">
            <h2 className="product-block__title">Otimização de Presença Digital</h2>
            <p className="product-block__description">
              Amplie seu alcance e engajamento digital com nossas soluções de otimização de presença online, aumentando conversões e fortalecendo sua marca.
            </p>
            <Link href="/solucoes">
              <a className="product-block__link">Saiba mais</a>
            </Link>
          </div>
        </div>
      </section>

      {/* What's in the Works Section */}
      <section className="whats-in-works">
        <div className="whats-in-works__content">
          <h2 className="whats-in-works__title">O que estamos preparando?</h2>
          <p className="whats-in-works__description">
            Uma nova geração de soluções de segurança cibernética com inteligência artificial avançada, projetada para proteger empresas contra as ameaças mais sofisticadas do mercado.
          </p>
          <Link href="/contato">
            <a className="whats-in-works__link">Fale conosco para saber mais</a>
          </Link>
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
