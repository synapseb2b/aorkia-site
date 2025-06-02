import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  return (
    <>
      <Head>
        <title>Soluções B2B que Transformam Negócios: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível.</title>
        <meta name="description" content="Soluções B2B que Transformam Negócios: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível." />
        <meta name="theme-color" content="#0076FF" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AORKIA",
              "url": "https://www.aorkia.com.br",
              "logo": "https://www.aorkia.com.br/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-31-98801-9006",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Getúlio Vargas, 671 - Sala 500",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "postalCode": "30112-021",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://www.linkedin.com/company/aorkia",
                "https://www.instagram.com/aorkia"
              ]
            })
          }}
        />
      </Head>

      <main>
        {/* Seção Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden hero">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>

          <div className="container mx-auto max-w-6xl px-4 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" 
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)', letterSpacing: '0.5px' }}
                >
                  Soluções B2B que Transformam Negócios
                </h1>

                <p 
                  className="text-base sm:text-lg md:text-xl font-semibold text-white leading-relaxed" 
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)', letterSpacing: '0.5px' }}
                >
                  Potencialize sua empresa com nossas soluções: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível.
                </p>

                <p 
                  className="text-base sm:text-lg md:text-xl font-semibold text-white leading-relaxed italic" 
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)', letterSpacing: '0.5px' }}
                >
                  Incluindo Backup SaaS da 
                  <span className="text-[#00683f] font-bold bg-white px-1 rounded" style={{ textShadow: 'none', letterSpacing: 'normal' }}>
                    Keepit
                  </span> 
                  – Líder Global com mais de 15.000 clientes em 74 países, incluindo Porsche e Oxford University.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/5531988019006" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg md:hidden hover:bg-primary/90 animate-bounce"
                    >
                      <i className="ri-whatsapp-line text-xl"></i>
                    </a>

                    <a 
                      href="#formulario-cta"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-4 py-2 font-medium rounded-lg whitespace-nowrap flex items-center justify-center gap-2 hover-scale cursor-pointer text-sm sm:text-base md:text-lg shadow-lg transition-all duration-300"
                    >
                      <span>Fale com um Estrategista AORKIA</span>
                    </a>

                    <Link 
                      href="/solucoes" 
                      className="group border border-primary text-primary bg-white px-4 py-2 font-medium rounded-lg whitespace-nowrap flex items-center gap-3 hover:bg-primary/10 hover-scale cursor-pointer text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <span>Explore Nossas Soluções</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nova Seção: Metodologia AORKIA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Metodologia AORKIA: <span className="text-primary">Engenharia Estratégica Aplicada</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Conheça os pilares que transformam desafios complexos em crescimento sustentável e performance superior.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4">
                  <i className="ri-search-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Diagnóstico Preciso</h3>
                <p className="text-gray-700">
                  Cada projeto inicia com um diagnóstico minucioso, alinhado aos seus desafios e objetivos, para orientar escolhas tecnológicas sob medida.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4">
                  <i className="ri-tools-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Curadoria Estratégica</h3>
                <p className="text-gray-700">
                  Entendimento profundo. Soluções sob medida. Selecionamos e integramos tecnologias que realmente agregam valor ao seu negócio.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4">
                  <i className="ri-line-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Resultados Mensuráveis</h3>
                <p className="text-gray-700">
                  Implementamos soluções com métricas claras de sucesso, garantindo retorno sobre investimento e impacto positivo nos resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Soluções B2B */}
        <section className="py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white"></div>
            <div className="absolute inset-0 animate-gradient-x" style={{ background: 'linear-gradient(90deg, rgba(0,118,255,0.1), rgba(74,144,226,0.1), rgba(0,118,255,0.1))', backgroundSize: '200% 100%' }}></div>
            <div className="absolute inset-0 animate-gradient-y" style={{ background: 'linear-gradient(180deg, rgba(0,118,255,0.08), rgba(74,144,226,0.08), rgba(0,118,255,0.08))', backgroundSize: '100% 200%' }}></div>
            <div className="absolute inset-0 animate-gradient-radial">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,118,255,0.08), rgba(255,255,255,0) 60%)' }}></div>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="gradient-text">Soluções</span>
                  <span> Especializadas</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
                  Na AORKIA, cada escolha tecnológica é fundamentada naquilo que mais importa:
                  <span className="text-primary font-medium"> resultados previsíveis</span>,
                  <span className="text-primary font-medium"> eficiência operacional</span> e
                  <span className="text-primary font-medium"> expansão sustentável</span>.
                </p>
              </div>
            </div>

            {/* Cards de Soluções - Layout mais compacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Backup SaaS Estratégico */}
              <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col">
                <h3 className="text-xl font-bold text-center mb-3">Backup SaaS Estratégico</h3>
                <p className="text-gray-700 mb-3 flex-grow">
                  A AORKIA ativa a <span className="text-[#00683f] font-medium">Keepit</span> — líder global em backup SaaS — para garantir proteção completa dos seus dados na nuvem.
                </p>
                <div className="mt-auto pt-3 text-center">
                  <Link 
                    href="/solucoes" 
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-all inline-block"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
              
              {/* Infraestrutura Estratégica */}
              <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col">
                <h3 className="text-xl font-bold text-center mb-3">Infraestrutura Estratégica</h3>
                <p className="text-gray-700 mb-3 flex-grow">
                  Transformamos sua infraestrutura em um ativo estratégico que impulsiona inovação e crescimento sustentável.
                </p>
                <div className="mt-auto pt-3 text-center">
                  <Link 
                    href="/solucoes" 
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-all inline-block"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
              
              {/* Segurança Cloud */}
              <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col">
                <h3 className="text-xl font-bold text-center mb-3">Segurança Cloud</h3>
                <p className="text-gray-700 mb-3 flex-grow">
                  Proteja seus ativos digitais com nossa abordagem multicamada de segurança para ambientes cloud.
                </p>
                <div className="mt-auto pt-3 text-center">
                  <Link 
                    href="/solucoes" 
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-all inline-block"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
              
              {/* Receita B2B */}
              <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col">
                <h3 className="text-xl font-bold text-center mb-3">Receita B2B</h3>
                <p className="text-gray-700 mb-3 flex-grow">
                  Transforme seu processo de vendas B2B com nossa metodologia de engenharia de receita previsível.
                </p>
                <div className="mt-auto pt-3 text-center">
                  <Link 
                    href="/solucoes" 
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-all inline-block"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nova Seção CTA com foto e formulário */}
        <section id="formulario-cta" className="py-16 bg-gray-100">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Lado esquerdo - Imagem */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 z-10"></div>
                <Image 
                  src="/cta-image.jpg" 
                  alt="Equipe AORKIA" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Transforme seu negócio</h3>
                    <p className="text-lg">Converse com nossos especialistas</p>
                  </div>
                </div>
              </div>
              
              {/* Lado direito - Formulário */}
              <div className="w-full md:w-1/2 p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Solicite uma avaliação gratuita</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                      <input 
                        type="text" 
                        id="nome" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                      <input 
                        type="text" 
                        id="cargo" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email corporativo</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Telefone</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">Assunto de Interesse</label>
                    <select 
                      id="assunto" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="backup-saas">Backup SaaS Estratégico</option>
                      <option value="infraestrutura">Infraestrutura Estratégica</option>
                      <option value="seguranca-cloud">Segurança Cloud</option>
                      <option value="receita-b2b">Receita B2B</option>
                    </select>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Solicitar Contato
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
