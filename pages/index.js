import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  // Efeito para simular preloader
  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>AORKIA | Soluções B2B que Transformam Negócios</title>
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

      {/* Preloader - Estilo Jam3 */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="preloader-content">
            <div className="logo-container mb-8">
              <Image 
                src="/logo_aorkia_white.png" 
                alt="AORKIA" 
                width={280} 
                height={70} 
                className="h-20 w-auto" 
              />
            </div>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        </div>
      )}

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative h-screen overflow-hidden hero flex items-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                Soluções B2B que <br className="hidden md:block" />
                <span className="text-primary">Transformam</span> Negócios
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                Potencialize sua empresa com nossas soluções: Backup SaaS, Infraestrutura Resiliente e Engenharia de Receita Previsível.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#formulario-cta"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all"
                >
                  Fale com um Estrategista
                </a>

                <Link 
                  href="/solucoes" 
                  className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-medium transition-all"
                >
                  Explore Nossas Soluções
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <a href="#solucoes" className="text-white text-4xl">
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção de Soluções B2B - Estilo Jam3 */}
        <section id="solucoes" className="py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Soluções <span className="text-primary">Especializadas</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Na AORKIA, cada escolha tecnológica é fundamentada naquilo que mais importa:
                resultados previsíveis, eficiência operacional e expansão sustentável.
              </p>
            </div>

            {/* Cards de Soluções - Grid Colorido Estilo Jam3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Backup SaaS Estratégico */}
              <div className="solution-card bg-blue-900 rounded-lg p-8 transform transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="solution-icon mb-6">
                  <i className="ri-shield-check-line text-5xl text-primary"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Backup SaaS Estratégico</h3>
                <p className="text-gray-300 text-lg mb-6">
                  A AORKIA ativa a <span className="text-primary font-medium">Keepit</span> — líder global em backup SaaS — para garantir proteção completa dos seus dados na nuvem.
                </p>
                <div className="mt-auto">
                  <Link 
                    href="/solucoes" 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-lg transition-colors"
                  >
                    <span>Saiba mais</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
              
              {/* Infraestrutura Estratégica */}
              <div className="solution-card bg-purple-900 rounded-lg p-8 transform transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="solution-icon mb-6">
                  <i className="ri-server-line text-5xl text-primary"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Infraestrutura Estratégica</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Transformamos sua infraestrutura em um ativo estratégico que impulsiona inovação e crescimento sustentável.
                </p>
                <div className="mt-auto">
                  <Link 
                    href="/solucoes" 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-lg transition-colors"
                  >
                    <span>Saiba mais</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
              
              {/* Segurança Cloud */}
              <div className="solution-card bg-green-900 rounded-lg p-8 transform transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="solution-icon mb-6">
                  <i className="ri-lock-line text-5xl text-primary"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Segurança Cloud</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Proteja seus ativos digitais com nossa abordagem multicamada de segurança para ambientes cloud.
                </p>
                <div className="mt-auto">
                  <Link 
                    href="/solucoes" 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-lg transition-colors"
                  >
                    <span>Saiba mais</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
              
              {/* Receita B2B */}
              <div className="solution-card bg-red-900 rounded-lg p-8 transform transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="solution-icon mb-6">
                  <i className="ri-line-chart-line text-5xl text-primary"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Receita B2B</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Transforme seu processo de vendas B2B com nossa metodologia de engenharia de receita previsível.
                </p>
                <div className="mt-auto">
                  <Link 
                    href="/solucoes" 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-lg transition-colors"
                  >
                    <span>Saiba mais</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Metodologia AORKIA - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Metodologia <span className="text-primary">AORKIA</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Engenharia Estratégica Aplicada: Conheça os pilares que transformam desafios complexos em crescimento sustentável e performance superior.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="methodology-card bg-black p-8 rounded-lg border border-gray-800 transform transition-all hover:border-primary">
                <div className="text-primary text-5xl mb-6">
                  <i className="ri-search-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Diagnóstico Preciso</h3>
                <p className="text-gray-300 text-lg">
                  Cada projeto inicia com um diagnóstico minucioso, alinhado aos seus desafios e objetivos, para orientar escolhas tecnológicas sob medida.
                </p>
              </div>
              
              <div className="methodology-card bg-black p-8 rounded-lg border border-gray-800 transform transition-all hover:border-primary">
                <div className="text-primary text-5xl mb-6">
                  <i className="ri-tools-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Curadoria Estratégica</h3>
                <p className="text-gray-300 text-lg">
                  Entendimento profundo. Soluções sob medida. Selecionamos e integramos tecnologias que realmente agregam valor ao seu negócio.
                </p>
              </div>
              
              <div className="methodology-card bg-black p-8 rounded-lg border border-gray-800 transform transition-all hover:border-primary">
                <div className="text-primary text-5xl mb-6">
                  <i className="ri-line-chart-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Resultados Mensuráveis</h3>
                <p className="text-gray-300 text-lg">
                  Implementamos soluções com métricas claras de sucesso, garantindo retorno sobre investimento e impacto positivo nos resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nova Seção CTA com foto e formulário - Estilo Jam3 */}
        <section id="formulario-cta" className="py-24 md:py-32 bg-black relative">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Lado esquerdo - Conteúdo */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Vamos <span className="text-primary">transformar</span> seu negócio?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Descubra como nossas soluções estratégicas podem impulsionar sua empresa. Preencha o formulário e um de nossos especialistas entrará em contato.
                </p>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                      <i className="ri-shield-check-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Avaliação Gratuita</h3>
                      <p className="text-gray-400">Diagnóstico preliminar sem compromisso</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                      <i className="ri-time-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Resposta Rápida</h3>
                      <p className="text-gray-400">Retorno em até 24 horas úteis</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Lado direito - Formulário */}
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Solicite uma avaliação gratuita</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">Nome completo</label>
                    <input 
                      type="text" 
                      id="nome" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-1">Empresa</label>
                    <input 
                      type="text" 
                      id="empresa" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interesse" className="block text-sm font-medium text-gray-300 mb-1">Principal interesse</label>
                    <select 
                      id="interesse" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="backup">Backup SaaS Estratégico</option>
                      <option value="infraestrutura">Infraestrutura Estratégica</option>
                      <option value="seguranca">Segurança Cloud</option>
                      <option value="receita">Receita B2B</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg text-lg font-medium transition-all"
                  >
                    Solicitar Avaliação Gratuita
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    Ao enviar este formulário, você concorda com nossa <Link href="/privacy" className="text-primary hover:underline">Política de Privacidade</Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* Estilos para o preloader */
        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .loading-bar {
          width: 200px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .loading-progress {
          height: 100%;
          width: 100%;
          background-color: #0076FF;
          animation: loading 2s ease-in-out;
          transform-origin: left;
        }
        
        @keyframes loading {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        /* Estilos para cards de solução */
        .solution-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s ease;
        }
        
        /* Estilos para cards de metodologia */
        .methodology-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
}
