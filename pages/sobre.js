import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// CSS-in-JS extra for animations and effects
const logoAnimationStyles = `
@keyframes spinLogoAorkia {
  0% { transform: rotateY(0deg);}
  100% { transform: rotateY(360deg);}
}
.aorkia-logo-spin {
  animation: spinLogoAorkia 2.5s linear infinite;
  transition: filter 0.3s;
}
.aorkia-logo-spin:hover {
  filter: drop-shadow(0 0 12px #fff) brightness(2);
}
.sidebar-logo-tooltip, .sidebar-menu-tooltip {
  position: absolute;
  left: 130px;
  top: 24px;
  background: #222;
  color: #fff;
  padding: 7px 16px;
  border-radius: 8px;
  font-size: 1rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-10px);
  transition: opacity 0.2s, transform 0.2s;
  z-index: 9999;
}
.sidebar-logo:hover + .sidebar-logo-tooltip,
.sidebar-logo:focus + .sidebar-logo-tooltip,
.sidebar-menu:hover + .sidebar-menu-tooltip,
.sidebar-menu:focus + .sidebar-menu-tooltip {
  opacity: 1;
  transform: translateX(0);
}
.menu-mobile-anim {
  transition: transform 0.3s, color 0.25s;
}
.menu-mobile-anim:hover, .menu-mobile-anim:focus {
  color: #0076FF;
  transform: scale(1.15) rotate(12deg);
}
.ver-trabalho-anim {
  transition: background 0.2s, color 0.2s, border 0.2s;
  position: relative;
}
.ver-trabalho-anim::after {
  content: "";
  position: absolute;
  left: 0; top: 100%;
  width: 100%;
  height: 2px;
  background: #0076FF;
  opacity: 0;
  transition: opacity 0.2s;
}
.ver-trabalho-anim:hover, .ver-trabalho-anim:focus {
  background: #0076FF;
  color: #fff;
  border: none;
}
.ver-trabalho-anim:hover::after, .ver-trabalho-anim:focus::after {
  opacity: 1;
}
`;

// Helper for intersection observer for scroll background activation
function useSectionScrollActivation(sectionIds, setActiveSection) {
  useEffect(() => {
    const handleScroll = () => {
      let found = null;
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom > window.innerHeight * 0.25) {
            found = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, setActiveSection]);
}

export default function Solucoes() {
  const [activeSection, setActiveSection] = useState('hero');
  const solutionsRef = useRef(null);

  // IDs das seções para scroll spy
  const sectionIds = ['hero', 'solutions', 'contact'];

  // Ativa alternância de seção ao rolar
  useSectionScrollActivation(sectionIds, setActiveSection);

  // Força reload do vídeo hero
  useEffect(() => {
    const video = document.getElementById('hero-video');
    if (video && video.paused) {
      video.load();
      video.play().catch(() => {});
    }
  }, []);

  // Soluções completas conforme fornecido (ajuste paths se necessário!)
  const solutions = [
    // ...cole o array solutions completo fornecido no seu último prompt...
    // (Omitido aqui para brevidade - use igual ao seu conteúdo original)
  ];

  // Rolar para próxima seção
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Soluções | AORKIA</title>
        <meta name="description" content="Explore como a AORKIA ativa tecnologia de ponta para transformar seus desafios complexos em crescimento rentável e sustentável." />
        <meta name="theme-color" content="#0076FF" />
        <style>{logoAnimationStyles}</style>
      </Head>
      <main className="bg-black text-white min-h-screen">

        {/* NAVBAR MOBILE */}
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800 lg:hidden">
          {/* Logo branca no canto ESQUERDO */}
          <div className="flex-1 flex items-center">
            <Image
              src="/image/logo_aorkia_white.png"
              alt="AORKIA White"
              width={100}
              height={42}
              className="aorkia-logo-spin"
              priority
            />
          </div>
          {/* Menu sanduíche à direita */}
          <button
            className="text-white text-3xl p-2 ml-auto relative menu-mobile-anim"
            aria-label="Menu"
            onMouseEnter={e => {
              const tooltip = document.getElementById('mobile-menu-tooltip');
              if (tooltip) tooltip.style.opacity = 1;
            }}
            onMouseLeave={e => {
              const tooltip = document.getElementById('mobile-menu-tooltip');
              if (tooltip) tooltip.style.opacity = 0;
            }}
          >
            <i className="ri-menu-line"></i>
            <span id="mobile-menu-tooltip" style={{
              position: 'absolute', right: 0, top: 48, background: '#222',
              color: '#fff', padding: '7px 16px', borderRadius: 8, fontSize: '1rem',
              opacity: 0, transition: 'opacity .2s', pointerEvents: 'none', zIndex: 99
            }}>Menu</span>
          </button>
        </nav>

        {/* SIDEBAR DESKTOP */}
        <aside className="hidden lg:flex flex-col items-center fixed left-0 top-0 pt-10 z-50" style={{width: '120px', height: '100vh'}}>
          <div className="relative flex flex-col items-center">
            <button
              className="sidebar-logo aorkia-logo-spin bg-transparent border-none p-0 focus:outline-none"
              tabIndex={0}
              aria-label="Home"
              onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
              onMouseEnter={e => {
                const tooltip = document.getElementById('sidebar-logo-tooltip');
                if (tooltip) tooltip.style.opacity = 1;
              }}
              onMouseLeave={e => {
                const tooltip = document.getElementById('sidebar-logo-tooltip');
                if (tooltip) tooltip.style.opacity = 0;
              }}
            >
              <Image
                src="/image/logo_aorkia_white.png"
                alt="AORKIA White"
                width={100}
                height={42}
                priority
              />
            </button>
            <span
              id="sidebar-logo-tooltip"
              className="sidebar-logo-tooltip"
              style={{
                opacity: 0,
                left: '110px',
                top: '14px'
              }}
            >Home</span>
            {/* Menu sanduíche fake apenas para efeito visual */}
            <button
              className="sidebar-menu mt-12 text-white text-3xl bg-transparent border-none p-0 focus:outline-none"
              tabIndex={0}
              aria-label="Menu"
              onMouseEnter={e => {
                const tooltip = document.getElementById('sidebar-menu-tooltip');
                if (tooltip) tooltip.style.opacity = 1;
              }}
              onMouseLeave={e => {
                const tooltip = document.getElementById('sidebar-menu-tooltip');
                if (tooltip) tooltip.style.opacity = 0;
              }}
            >
              <i className="ri-menu-line"></i>
            </button>
            <span
              id="sidebar-menu-tooltip"
              className="sidebar-menu-tooltip"
              style={{
                opacity: 0,
                left: '110px',
                top: '75px'
              }}
            >Menu</span>
          </div>
        </aside>

        {/* HERO */}
        <section id="hero" className="relative h-screen overflow-hidden flex items-center justify-center lg:pl-[120px]">
          <video
            id="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/image/backup.png"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
          <div className="container mx-auto max-w-6xl px-4 relative z-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Nossas Soluções <br className="hidden md:block" />
                Estratégicas
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300">
                Explore como a AORKIA ativa tecnologia de ponta para transformar seus desafios complexos em crescimento rentável e sustentável.
              </p>
              <button
                className="text-lg font-medium px-8 py-3 border border-white text-white ver-trabalho-anim"
                onClick={e => scrollToSection(e, 'solutions')}
                onMouseEnter={e => {
                  e.currentTarget.classList.add('animate-pulse');
                }}
                onMouseLeave={e => {
                  e.currentTarget.classList.remove('animate-pulse');
                }}
              >
                Ver nosso trabalho
              </button>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE SOLUÇÕES */}
        <section id="solutions" ref={solutionsRef} className="relative lg:pl-[120px]">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              id={solution.id}
              className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
            >
              {/* Transição automática do fundo com base no scroll */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700
                  ${activeSection === solution.id ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${solution.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              <div
                className={`absolute inset-0 bg-white transition-opacity duration-700
                  ${activeSection === solution.id ? 'opacity-0' : 'opacity-100'}`}
              ></div>
              <div className="relative z-10 py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                      <p className={`text-lg mb-2 transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {solution.supportText}
                      </p>
                      <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-white' : 'text-black'
                      }`}>
                        {solution.title}
                      </h2>
                      <h3 className={`text-2xl md:text-3xl font-medium mb-8 transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                      }`}>
                        {solution.subtitle}
                      </h3>
                      {solution.logo && (
                        <div className="mt-4 mb-8">
                          <Image
                            src={solution.logo}
                            alt="Logo"
                            className="h-12 w-auto"
                            width={160}
                            height={48}
                            priority
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className={`text-xl leading-relaxed transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {solution.caseStudy}
                      </p>
                    </div>
                  </div>
                  {/* Features */}
                  <div className="mb-24">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-12 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      Ative e Escale {solution.title}
                    </h3>
                    <p className={`text-xl mb-12 max-w-4xl transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.activateContent}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex">
                          <div className={`text-4xl mr-6 transition-colors duration-500 ${
                            activeSection === solution.id ? 'text-primary' : 'text-blue-700'
                          }`}>
                            <i className={feature.icon}></i>
                          </div>
                          <div>
                            <h4 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                              activeSection === solution.id ? 'text-white' : 'text-black'
                            }`}>
                              {feature.title}
                            </h4>
                            <p className={`transition-colors duration-500 ${
                              activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Why */}
                  <div className="mb-24">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      Por Que {solution.id === 'backup' ? 'Fazer Backup dos Seus Dados SaaS?' :
                        solution.id === 'bordas' ? 'Executar IA na Borda?' :
                          solution.id === 'dspm' ? 'Priorizar a Segurança da Postura dos Seus Dados (DSPM)?' :
                            solution.id === 'receitas' ? 'Investir em Inteligência de Receita com IA?' :
                              'Priorizar uma Estratégia de Presença Digital?'}
                    </h3>
                    <p className={`text-xl mb-8 max-w-4xl transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.whyContent}
                    </p>
                    <div className={`p-8 border-l-4 max-w-4xl transition-all duration-500 ${
                      activeSection === solution.id ? 'border-primary bg-black/30' : 'border-blue-700 bg-gray-100'
                    }`}>
                      <p className={`text-lg italic transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        "{solution.whyQuote}"
                      </p>
                    </div>
                  </div>
                  {/* How */}
                  <div className="mb-24">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      Como a AORKIA Ajuda Você com {solution.title}
                    </h3>
                    <p className={`text-xl mb-8 max-w-4xl transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.howContent}
                    </p>
                    <div className={`p-8 border-l-4 max-w-4xl transition-all duration-500 ${
                      activeSection === solution.id ? 'border-primary bg-black/30' : 'border-blue-700 bg-gray-100'
                    }`}>
                      <p className={`text-lg italic transition-colors duration-500 ${
                        activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        "{solution.howQuote}"
                      </p>
                    </div>
                  </div>
                  {/* CTA Section */}
                  <div className="text-center max-w-4xl mx-auto">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-white' : 'text-black'
                    }`}>
                      Comece com a AORKIA
                    </h3>
                    <p className={`text-xl mb-12 transition-colors duration-500 ${
                      activeSection === solution.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {solution.ctaText}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                      <Link
                        href="/contato"
                        className={`px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-500 ${
                          activeSection === solution.id
                            ? 'bg-primary hover:bg-primary/90 text-white'
                            : 'bg-blue-700 hover:bg-blue-800 text-white'
                        }`}
                      >
                        Agendar Demonstração
                      </Link>
                      <Link
                        href="/contato"
                        className={`px-8 py-4 text-lg font-medium rounded-lg border transition-colors duration-500 ${
                          activeSection === solution.id
                            ? 'border-white text-white hover:bg-white hover:text-black'
                            : 'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'
                        }`}
                      >
                        Solicitar Blueprint Técnico
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Seção Formulário */}
        <section id="contact" className="py-24 md:py-32 bg-black lg:pl-[120px]">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg">
                <form className="space-y-6" action="https://formspree.io/f/mkgrleqq" method="POST">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email corporativo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp / Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:</label>
                    <div className="space-y-3">
                      {solutions.map((solution) => (
                        <div key={solution.id} className="flex items-center">
                          <input
                            type="radio"
                            id={solution.id}
                            name="focus"
                            value={solution.title}
                            className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                          />
                          <label htmlFor={solution.id} className="ml-3 text-gray-300">
                            {solution.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Solicitar Contato
                  </button>
                </form>
                <p className="mt-6 text-sm text-gray-400 text-center">
                  Sua mensagem foi enviada. Um de nossos especialistas em ativação de soluções responderá em breve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER ÚNICO FINAL (completo e corrigido) */}
        <footer className="bg-[#08101C] border-t border-gray-800 py-12 lg:pl-[120px]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-end relative">
            {/* Logo branca canto superior direito */}
            <div className="absolute right-8 top-8">
              <Image
                src="/image/logo_aorkia_white.png"
                alt="AORKIA"
                width={90}
                height={38}
                priority
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div className="text-lg text-gray-300 mb-6 text-center md:text-left">
                AORKIA: Ativamos tecnologia global de ponta, impulsionando diferenciação estratégica, inovação acelerada e crescimento rentável para empresas B2B.
              </div>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com/company/aorkia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="ri-linkedin-box-line text-2xl text-gray-300 hover:text-primary"></i>
                </a>
                <a href="https://instagram.com/aorkia.tech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="ri-instagram-line text-2xl text-gray-300 hover:text-primary"></i>
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-end">
              <div className="text-gray-300 text-base mb-3 text-center md:text-right">
                Av. Getúlio Vargas, 671 — Sala 500<br />
                Belo Horizonte - MG<br />
                +55 31 98801-9006<br />
                contato@aorkia.com
              </div>
              <a href="/contato" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
                Entre em contato
              </a>
              <div className="text-xs text-gray-500 mb-2 text-center md:text-right">
                © 2025 AORKIA. Todos os direitos reservados.<br />
                <a href="/privacidade" className="underline hover:text-primary">Política de Privacidade</a> | <a href="/termos" className="underline hover:text-primary">Termos de Uso</a>
              </div>
              <div className="text-xs text-gray-500 text-center md:text-right">
                Site Desenvolvido por AORKIA – Estratégia de Presença Digital
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
