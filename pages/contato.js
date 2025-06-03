import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contato() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Prevenir rolagem automática ao carregar a página
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio do formulário
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        mensagem: ''
      });
    }, 1000);
  };

  return (
    <div className={`relative ${isLoaded ? 'animate-fadeIn' : ''}`}>
      <Head>
        <title>Contato - AORKIA</title>
        <meta name="description" content="Entre em contato com a AORKIA para soluções estratégicas em tecnologia que transformam desafios em oportunidades." />
      </Head>

      {/* Hero Section */}
      <section className="hero" style={{ height: '70vh' }}>
        <div className="hero__overlay" style={{ backgroundColor: '#0076FF' }}></div>
        
        <div className="hero__content">
          <h1 className="hero__title">Entre em Contato</h1>
          <p className="hero__subtitle">
            Estamos prontos para transformar os desafios da sua empresa em oportunidades de crescimento.
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="whats-in-works">
        <div className="whats-in-works__content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <h2 className="whats-in-works__title">Fale Conosco</h2>
              <p className="whats-in-works__description" style={{ marginBottom: '2rem' }}>
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas úteis.
              </p>
              
              {formSubmitted ? (
                <div style={{ 
                  backgroundColor: 'rgba(74, 222, 128, 0.1)', 
                  border: '1px solid #4ADE80',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem'
                }}>
                  <h3 style={{ color: '#4ADE80', marginBottom: '0.5rem', fontWeight: 'bold' }}>Mensagem enviada com sucesso!</h3>
                  <p>Obrigado pelo seu contato. Nossa equipe retornará em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="nome" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nome completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.25rem',
                        color: 'white'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>E-mail corporativo *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.25rem',
                        color: 'white'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="empresa" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Empresa *</label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.25rem',
                        color: 'white'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="telefone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Telefone</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.25rem',
                        color: 'white'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="mensagem" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mensagem *</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.25rem',
                        color: 'white',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#0076FF',
                      color: 'white',
                      padding: '0.75rem 2rem',
                      borderRadius: '2rem',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="whats-in-works__title">Informações de Contato</h2>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>E-mail</h3>
                <p><a href="mailto:contato@aorkia.com" style={{ color: '#0076FF' }}>contato@aorkia.com</a></p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Telefone</h3>
                <p><a href="tel:+551140028922" style={{ color: '#0076FF' }}>+55 (11) 4002-8922</a></p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Redes Sociais</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'background-color 0.3s ease'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'background-color 0.3s ease'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
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
