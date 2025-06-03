import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Sobre() {
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
        <title>Sobre - AORKIA</title>
        <meta name="description" content="Conheça a AORKIA, empresa especializada em soluções estratégicas de tecnologia que transformam desafios complexos em crescimento sustentável." />
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
            Sobre a <span style={{ color: '#0076FF' }}>AORKIA</span>
          </h1>
          <p className="hero__subtitle">
            Transformamos desafios complexos em crescimento sustentável e performance superior através de soluções estratégicas em tecnologia.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="whats-in-works">
        <div className="whats-in-works__content">
          <h2 className="whats-in-works__title">Nossa História</h2>
          <p className="whats-in-works__description">
            Fundada em 2015, a AORKIA nasceu da visão de transformar a maneira como as empresas abordam seus desafios tecnológicos. Identificamos uma lacuna no mercado: a falta de uma abordagem verdadeiramente estratégica para a implementação de soluções tecnológicas.
          </p>
          <p className="whats-in-works__description" style={{ marginTop: '1rem' }}>
            Nossa jornada começou com um pequeno time de especialistas apaixonados por tecnologia e estratégia de negócios. Ao longo dos anos, expandimos nossa equipe e portfólio de soluções, sempre mantendo nosso compromisso com a excelência e a inovação.
          </p>
          <p className="whats-in-works__description" style={{ marginTop: '1rem' }}>
            Hoje, somos reconhecidos como líderes em soluções estratégicas de tecnologia, ajudando empresas de todos os portes a transformar desafios complexos em oportunidades de crescimento sustentável.
          </p>
        </div>
      </section>

      {/* Metodologia */}
      <section className="product-blocks">
        <div className="product-block">
          <img 
            src="/images/metodologia.png" 
            alt="Metodologia AORKIA" 
            className="product-block__bg"
          />
          <div className="product-block__overlay"></div>
          <div className="product-block__content">
            <h2 className="product-block__title">Metodologia AORKIA</h2>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0076FF' }}>Engenharia Estratégica Aplicada</h3>
            <p className="product-block__description">
              Conheça os pilares que transformam desafios complexos em crescimento sustentável e performance superior.
            </p>
            <div style={{ marginTop: '2rem', borderLeft: '4px solid #0076FF', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Diagnóstico Preciso e Curadoria Estratégica</h4>
              <p>Entendimento profundo. Soluções sob medida.</p>
            </div>
            <p className="product-block__description">
              Cada projeto inicia com um diagnóstico minucioso, alinhado aos seus desafios e objetivos, para orientar escolhas tecnológicas sob medida.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="whats-in-works">
        <div className="whats-in-works__content">
          <h2 className="whats-in-works__title">Missão e Valores</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ backgroundColor: 'rgba(18, 18, 18, 0.7)', padding: '2rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0076FF' }}>Nossa Missão</h3>
              <p>
                Transformar desafios tecnológicos complexos em vantagens competitivas sustentáveis, capacitando organizações a alcançarem seu máximo potencial através de soluções estratégicas e inovadoras.
              </p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(18, 18, 18, 0.7)', padding: '2rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0076FF' }}>Nossa Visão</h3>
              <p>
                Ser reconhecida globalmente como a parceira preferencial para transformação digital estratégica, definindo novos padrões de excelência e inovação no setor de tecnologia.
              </p>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'rgba(18, 18, 18, 0.7)', padding: '2rem', borderRadius: '0.5rem', marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0076FF' }}>Nossos Valores</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Excelência</h4>
                <p>Buscamos a excelência em tudo o que fazemos, superando expectativas e estabelecendo novos padrões de qualidade.</p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Inovação</h4>
                <p>Abraçamos a mudança e promovemos a inovação contínua, explorando novas ideias e tecnologias para criar soluções disruptivas.</p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Integridade</h4>
                <p>Agimos com transparência, honestidade e ética em todas as nossas interações, construindo relacionamentos baseados na confiança.</p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Impacto</h4>
                <p>Focamos em gerar impacto positivo e mensurável para nossos clientes, parceiros e para a sociedade como um todo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', paddingLeft: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ backgroundColor: '#0076FF', padding: '3rem', borderRadius: '0.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Pronto para transformar seu negócio?</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Descubra como nossas soluções estratégicas podem impulsionar sua empresa.</p>
            <Link href="/contato">
              <a style={{ display: 'inline-block', backgroundColor: 'white', color: '#0076FF', fontWeight: '600', padding: '1rem 2rem', borderRadius: '2rem', transition: 'background-color 0.3s ease' }}>
                Entre em contato
              </a>
            </Link>
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
