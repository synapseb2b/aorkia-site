import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionBackgrounds, setSectionBackgrounds] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Detectar quais seções devem ter background image
      const sections = [
        'nossa-historia',
        'nossos-valores',
        'nossa-missao'
      ];

      const newBackgrounds = {};
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Ativar background quando a seção está visível
          newBackgrounds[sectionId] = rect.top < window.innerHeight && rect.bottom > 0;
        }
      });

      setSectionBackgrounds(newBackgrounds);

      // Detectar seção ativa
      const allSections = document.querySelectorAll('[data-section]');
      allSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getSectionBackground = (sectionId) => {
    return sectionBackgrounds[sectionId] ? 'opacity-20' : 'opacity-0';
  };

  return (
    <>
      <Head>
        <title>Sobre a AORKIA | Resiliência Cibernética e Governança de Dados</title>
        <meta name="description" content="Ativando soluções de ponta para transformar seus ambientes críticos em sistemas coordenados, resilientes e escaláveis." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Link Voltar */}
      <div className="fixed top-6 left-6 z-40">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 text-gray-700 hover:text-primary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o site
        </Link>
      </div>

      <main className="min-h-screen bg-white relative">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/video/video_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
          
          <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">Conheça a AORKIA</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Sobre a <span className="text-[#0076FF]">AORKIA</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-center max-w-4xl mx-auto">
              Ativando soluções de ponta para transformar seus ambientes críticos em sistemas coordenados, resilientes e escaláveis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="#nossa-historia" onClick={(e) => scrollToSection(e, 'nossa-historia')} className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Nossa História
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary transition duration-300">
                Fale Conosco
              </Link>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section id="nossa-historia" data-section="nossa-historia" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('nossa-historia')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Nossa História
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border-2 border-blue-500 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-building-line text-3xl text-blue-500"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">Nossa Origem</h3>
                </div>
                
                <div className="space-y-6 text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      A AORKIA nasceu da necessidade de transformar a complexidade tecnológica em soluções práticas e eficazes para empresas que enfrentam desafios críticos de segurança e governança de dados.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Desde o início, nossa missão tem sido clara: ativar as melhores plataformas globais e adaptá-las à realidade brasileira, garantindo que nossos clientes tenham acesso à tecnologia de ponta sem a complexidade da implementação.
                    </p>
                  </div>
                  
                  <div className="bg-blue-600 rounded-lg p-6 shadow-lg">
                    <p className="text-white font-bold text-lg">
                      Transformamos risco em resiliência, vulnerabilidade em vantagem competitiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section id="nossos-valores" data-section="nossos-valores" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('nossos-valores')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Nossos Valores
            </h2>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {/* Valor 1 - Excelência */}
              <div className="p-6 rounded-lg border-2 border-blue-500 bg-transparent text-center">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="ri-award-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Excelência</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed text-center">
                  Buscamos sempre a perfeição em cada projeto, entregando soluções que superam expectativas e geram resultados duradouros.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-2 text-center">
                    Nossa promessa:
                  </p>
                  <p className="text-sm font-medium text-blue-700 text-center">
                    Qualidade sem compromissos
                  </p>
                </div>
              </div>

              {/* Valor 2 - Inovação */}
              <div className="p-6 rounded-lg border-2 border-green-500 bg-transparent text-center">
                <div className="text-4xl text-green-600 mb-4">
                  <i className="ri-lightbulb-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Inovação</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed text-center">
                  Estamos sempre na vanguarda tecnológica, ativando as melhores plataformas globais para resolver desafios complexos.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-800 mb-2 text-center">
                    Nossa promessa:
                  </p>
                  <p className="text-sm font-medium text-green-700 text-center">
                    Tecnologia de ponta, sempre
                  </p>
                </div>
              </div>

              {/* Valor 3 - Confiança */}
              <div className="p-6 rounded-lg border-2 border-purple-500 bg-transparent text-center">
                <div className="text-4xl text-purple-600 mb-4">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Confiança</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed text-center">
                  Construímos relacionamentos duradouros baseados na transparência, integridade e resultados comprovados.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-sm font-semibold text-purple-800 mb-2 text-center">
                    Nossa promessa:
                  </p>
                  <p className="text-sm font-medium text-purple-700 text-center">
                    Parceria verdadeira
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Missão */}
        <section id="nossa-missao" data-section="nossa-missao" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('nossa-missao')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="relative bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <i className="ri-rocket-line text-6xl text-white/80"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Nossa Missão
                </h3>
                <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                  "Ativar plataformas globais de ponta para transformar ambientes críticos em sistemas coordenados, resilientes e escaláveis, convertendo complexidade tecnológica em vantagem competitiva duradoura."
                </blockquote>
                <p className="text-sm text-white/70 font-medium">
                  AORKIA - Resiliência Cibernética e Governança de Dados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="cta-final" data-section="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Pronto para Conhecer Nossas Soluções?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Descubra como a AORKIA pode transformar os desafios de segurança e governança da sua empresa em vantagens competitivas duradouras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Explorar Soluções
              </Link>
              <Link
                href="/contato"
                className="inline-block px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

