import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Sobre() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Prevenir rolagem automática ao carregar a página
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  return (
    <div className={`relative ${isLoaded ? 'animate-fadeIn' : ''}`}>
      <Head>
        <title>Sobre - AORKIA</title>
        <meta name="description" content="Conheça a AORKIA, empresa especializada em soluções estratégicas de tecnologia que transformam desafios em oportunidades." />
      </Head>

      {/* Hero Section */}
      <section className="hero" style={{ height: '70vh' }}>
        <div className="hero__overlay" style={{ backgroundColor: '#0076FF' }}></div>
        
        <div className="hero__content">
          <h1 className="hero__title">Sobre a AORKIA</h1>
          <p className="hero__subtitle">
            Transformamos desafios complexos em crescimento sustentável e performance superior através de soluções estratégicas em tecnologia.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="whats-in-works">
        <div className="whats-in-works__content">
          <h2 className="whats-in-works__title">Nossa História</h2>
          <p className="whats-in-works__description" style={{ marginBottom: '1.5rem' }}>
            Fundada em 2018, a AORKIA nasceu da visão de um grupo de especialistas em tecnologia que identificaram a necessidade de uma abordagem mais estratégica e personalizada para os desafios tecnológicos das empresas brasileiras.
          </p>
          <p className="whats-in-works__description" style={{ marginBottom: '1.5rem' }}>
            Desde o início, nossa missão tem sido clara: transformar desafios complexos em crescimento sustentável e performance superior através de soluções estratégicas em tecnologia.
          </p>
          <p className="whats-in-works__description">
            Ao longo dos anos, desenvolvemos uma metodologia única de Engenharia Estratégica Aplicada, que combina diagnóstico preciso, curadoria estratégica e implementação especializada para entregar resultados mensuráveis aos nossos clientes.
          </p>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="product-block" style={{ backgroundColor: '#0076FF', color: 'white' }}>
        <div className="product-block__content">
          <h2 className="product-block__title">Nossos Valores</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Excelência</h3>
              <p>Buscamos a excelência em tudo o que fazemos, desde o primeiro contato até a entrega final e suporte contínuo.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Inovação</h3>
              <p>Estamos constantemente explorando novas tecnologias e abordagens para oferecer as melhores soluções aos nossos clientes.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Integridade</h3>
              <p>Agimos com transparência e ética em todas as nossas relações, construindo confiança e parcerias duradouras.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Impacto</h3>
              <p>Medimos nosso sucesso pelo impacto positivo que geramos nos negócios de nossos clientes e na sociedade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visão e Missão */}
      <section className="whats-in-works">
        <div className="whats-in-works__content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <h2 className="whats-in-works__title">Nossa Visão</h2>
              <p className="whats-in-works__description">
                Ser reconhecida como a principal referência em soluções estratégicas de tecnologia no Brasil, transformando a maneira como as empresas abordam seus desafios tecnológicos.
              </p>
            </div>
            <div>
              <h2 className="whats-in-works__title">Nossa Missão</h2>
              <p className="whats-in-works__description">
                Transformar desafios complexos em crescimento sustentável e performance superior através de soluções estratégicas em tecnologia, gerando valor mensurável para nossos clientes.
              </p>
            </div>
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
