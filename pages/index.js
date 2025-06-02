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

        {/* Seção de Soluções B2B */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white"></div>
            <div className="absolute inset-0 animate-gradient-x" style={{ background: 'linear-gradient(90deg, rgba(0,118,255,0.1), rgba(74,144,226,0.1), rgba(0,118,255,0.1))', backgroundSize: '200% 100%' }}></div>
            <div className="absolute inset-0 animate-gradient-y" style={{ background: 'linear-gradient(180deg, rgba(0,118,255,0.08), rgba(74,144,226,0.08), rgba(0,118,255,0.08))', backgroundSize: '100% 200%' }}></div>
            <div className="absolute inset-0 animate-gradient-radial">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,118,255,0.08), rgba(255,255,255,0) 60%)' }}></div>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-24">
              <div className="inline-flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="gradient-text">Soluções</span>
                  <span> Especializadas</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8">
                  Na AORKIA, cada escolha tecnológica é fundamentada naquilo que mais importa:
                  <span className="text-primary font-medium"> resultados previsíveis</span>,
                  <span className="text-primary font-medium"> eficiência operacional</span> e
                  <span className="text-primary font-medium"> expansão sustentável</span>.
                </p>
              </div>
            </div>

            {/* Backup SaaS Estratégico */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 mb-16">
              <div className="w-full md:basis-1/2 md:max-w-[600px] p-4 md:p-6 space-y-4 text-justify break-words hyphens-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center">Backup SaaS Estratégico</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  A AORKIA ativa a <span className="text-[#00683f] font-medium">Keepit</span> — líder global em backup SaaS — para garantir proteção completa e contínua dos seus dados na nuvem.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Proteção automatizada, recuperação instantânea, segurança absoluta.
                </blockquote>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 marker:text-primary leading-relaxed">
                  <li>Backup contínuo e automatizado</li>
                  <li>Recuperação instantânea e granular</li>
                  <li>Criptografia de ponta a ponta</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  A AORKIA + <span className="text-[#00683f] font-medium">Keepit</span> protege seus dados críticos em Microsoft 365, Google Workspace, Salesforce e muito mais.
                </p>
                <div className="flex justify-center pt-4">
                  <Link 
                    href="/solucoes" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    Conheça nossa Interface Inteligente
                  </Link>
                </div>
              </div>
              <div className="w-full md:basis-1/2 md:max-w-[600px] p-4 md:p-6 space-y-4 text-justify break-words hyphens-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center">Infraestrutura Estratégica</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Transformamos sua infraestrutura em um ativo estratégico que impulsiona inovação e crescimento sustentável.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Arquitetura resiliente, performance otimizada, escalabilidade garantida.
                </blockquote>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 marker:text-primary leading-relaxed">
                  <li>Arquitetura de alta disponibilidade</li>
                  <li>Otimização de performance</li>
                  <li>Escalabilidade sob demanda</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Soluções de infraestrutura que equilibram performance, segurança e custo-benefício para seu negócio.
                </p>
                <div className="flex justify-center pt-4">
                  <Link 
                    href="/solucoes" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    Conheça nossa Interface Inteligente
                  </Link>
                </div>
              </div>
            </div>

            {/* Segurança Cloud e Receita B2B */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
              <div className="w-full md:basis-1/2 md:max-w-[600px] p-4 md:p-6 space-y-4 text-justify break-words hyphens-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center">Segurança Cloud</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Proteja seus ativos digitais com nossa abordagem multicamada de segurança para ambientes cloud.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Proteção contínua, visibilidade total, conformidade garantida.
                </blockquote>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 marker:text-primary leading-relaxed">
                  <li>Monitoramento 24/7</li>
                  <li>Detecção e resposta a ameaças</li>
                  <li>Conformidade regulatória</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Segurança que evolui com seu negócio, protegendo dados e aplicações em qualquer ambiente cloud.
                </p>
                <div className="flex justify-center pt-4">
                  <Link 
                    href="/solucoes" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    Conheça nossa Interface Inteligente
                  </Link>
                </div>
              </div>
              <div className="w-full md:basis-1/2 md:max-w-[600px] p-4 md:p-6 space-y-4 text-justify break-words hyphens-auto bg-white rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center">Receita B2B</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Transforme seu processo de vendas B2B com nossa metodologia de engenharia de receita previsível.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Previsibilidade de receita, ciclos de venda otimizados, crescimento sustentável.
                </blockquote>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 marker:text-primary leading-relaxed">
                  <li>Estratégia de vendas consultiva</li>
                  <li>Automação de processos comerciais</li>
                  <li>Análise preditiva de pipeline</li>
                </ul>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Metodologia que transforma seu time de vendas em consultores estratégicos para seus clientes.
                </p>
                <div className="flex justify-center pt-4">
                  <Link 
                    href="/solucoes" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all"
                  >
                    Conheça nossa Interface Inteligente
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA */}
        <section id="formulario-cta" className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Descubra como nossas soluções estratégicas podem impulsionar sua empresa para o próximo nível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solucoes" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-all">
                Explorar Soluções <i className="ri-arrow-right-line ml-2"></i>
              </Link>
              <Link href="/contato" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-all">
                Fale Conosco <i className="ri-customer-service-2-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
