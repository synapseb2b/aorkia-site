import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const logoAnimationStyles = `
@keyframes rotateLogoAorkia {
  0% { opacity: 1; }
  40% { opacity: 1; }
  50% { opacity: 0; }
  90% { opacity: 0; }
  100% { opacity: 1; }
}
.aorkia-logo-stack {
  position: relative;
  width: 120px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.aorkia-logo-stack img.aorkia-white {
  position: absolute;
  left: 0;
  top: 0;
  width: 120px;
  height: 48px;
  object-fit: contain;
  opacity: 1;
  animation: rotateLogoAorkia 7s linear infinite;
  transition: opacity .5s;
}
.sidebar-logo-hover {
  transition: transform 0.3s, box-shadow 0.3s;
}
.sidebar-logo-hover:hover {
  transform: scale(1.08) rotate(-5deg);
  box-shadow: 0 4px 18px 0 rgba(0,118,255,0.20);
}
.menu-hover {
  transition: transform 0.3s, box-shadow 0.3s;
}
.menu-hover:hover {
  transform: scale(1.11) rotate(-7deg);
  box-shadow: 0 4px 18px 0 rgba(0,118,255,0.15);
}
.btn-scroll-hover {
  transition: transform 0.2s, background 0.2s, color 0.2s;
}
.btn-scroll-hover:hover {
  transform: translateY(-4px) scale(1.04) rotate(-2deg);
  background: #0076ff !important;
  color: #fff !important;
  box-shadow: 0 6px 18px 0 rgba(0,118,255,0.13);
}
.tooltip {
  position: absolute;
  left: 105%;
  top: 55%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.92);
  color: #fff;
  font-size: 13px;
  padding: 3px 12px;
  border-radius: 7px;
  pointer-events: none;
  opacity: 0;
  transition: opacity .3s;
  z-index: 100;
  white-space: nowrap;
}
.logo-container:hover .logo-tooltip,
.menu-hover:hover .menu-tooltip,
.btn-scroll-hover:hover .ver-trabalho-tooltip {
  opacity: 1;
}
`;

function isMobileScreen() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 1024;
}

export default function Solucoes() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string>('');
  const [isHoverSidebarLogo, setIsHoverSidebarLogo] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const [isHoverVerTrabalho, setIsHoverVerTrabalho] = useState(false);

  // Detectar seção ativa ao rolar no mobile
  useEffect(() => {
    if (!isMobileScreen()) return;
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-solution-section]');
      let found = '';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 140) { // ajuste da zona de foco
          found = section.getAttribute('data-solution-section') || '';
        }
      });
      setMobileSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: any, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll suave para a próxima seção (desktop)
  const scrollToNextSection = (e: any) => {
    e.preventDefault();
    const sections = document.querySelectorAll('[data-solution-section]');
    let nextSection: Element | null = null;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top > 90) {
        nextSection = sections[i];
        break;
      }
    }
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Soluções
  const solutions = [
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      supportText: 'Imutável. Independente. Inteligente.',
      subtitle: 'Seus Dados na Nuvem, Realmente Protegidos.',
      caseStudy: 'Perder dados críticos de Plataformas SaaS como Microsoft 365, Google Workspace e Salesforce...',
      activateContent: 'A AORKIA simplifica a complexidade da proteção de dados SaaS...',
      features: [
        { icon: 'ri-shield-keyhole-line', title: 'Proteção Completa e Imutável Contra Ameaças', description: 'Seus dados SaaS são copiados para uma nuvem independente...' },
        { icon: 'ri-restart-line', title: 'Recuperação Rápida e Granular a Qualquer Momento', description: 'Restaure exatamente o que você precisa...' },
        { icon: 'ri-apps-2-line', title: 'Ampla Cobertura para Seu Ecossistema SaaS', description: 'Garanta a proteção completa dos seus dados críticos...' },
        { icon: 'ri-file-shield-2-line', title: 'Conformidade Descomplicada e Auditoria Facilitada', description: 'Atenda às exigências da LGPD, GDPR, HIPAA...' }
      ],
      whyContent: 'Muitas empresas ainda acreditam que seus provedores de SaaS...',
      whyQuote: 'Seus dados em Microsoft 365, Salesforce ou Google Workspace são ativos cruciais...',
      howContent: 'A AORKIA não é apenas uma fornecedora de tecnologia; somos seus parceiros estratégicos...',
      howQuote: 'Com a AORKIA, você não apenas adquire uma solução líder global como a Keepit...',
      ctaText: 'Proteja o Coração Digital do Seu Negócio Agora Mesmo...',
      image: '/image/backup.png',
      logo: '/image/keepit_logo_aorkia.png'
    },
    // ...demais soluções igual ao seu array original
  ];

  return (
    <>
      <Head>
        <title>Soluções | AORKIA</title>
        <meta name="description" content="Explore como a AORKIA ativa tecnologia de ponta para transformar seus desafios complexos em crescimento rentável e sustentável." />
        <meta name="theme-color" content="#0076FF" />
        <style>{logoAnimationStyles}</style>
      </Head>
      <main className="bg-black text-white min-h-screen">

        {/* Navbar MOBILE - só uma barra fixa, logo branca à esquerda, menu sanduíche à direita */}
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800 lg:hidden fixed top-0 left-0 z-40">
          <div className="aorkia-logo-stack">
            <Image src="/image/logo_aorkia_white.png" alt="AORKIA White" width={120} height={48} className="aorkia-white" priority />
          </div>
          <div className="relative menu-hover">
            <button className="text-white text-3xl p-2" aria-label="Menu">
              <i className="ri-menu-line"></i>
            </button>
            <span className="tooltip menu-tooltip" style={{opacity: isHoverMenu ? 1 : 0, left: 'auto', right: '-90px'}}>Menu</span>
          </div>
        </nav>

        {/* Sidebar DESKTOP - logo branca fixa, animação e tooltip */}
        <aside className="hidden lg:flex flex-col items-center fixed left-0 top-0 pt-10 z-50" style={{width: '120px', height: '100vh'}}>
          <div className="relative logo-container"
            onMouseEnter={() => setIsHoverSidebarLogo(true)}
            onMouseLeave={() => setIsHoverSidebarLogo(false)}
          >
            <div className="aorkia-logo-stack sidebar-logo-hover" tabIndex={0}>
              <Image src="/image/logo_aorkia_white.png" alt="AORKIA White" width={120} height={48} className="aorkia-white" priority />
            </div>
            <span className="tooltip logo-tooltip" style={{opacity: isHoverSidebarLogo ? 1 : 0, left: 130}}>Home</span>
          </div>
          <div className="relative mt-4 menu-hover"
            onMouseEnter={() => setIsHoverMenu(true)}
            onMouseLeave={() => setIsHoverMenu(false)}
          >
            <button className="text-white text-3xl p-2" aria-label="Menu">
              <i className="ri-menu-line"></i>
            </button>
            <span className="tooltip menu-tooltip" style={{opacity: isHoverMenu ? 1 : 0}}>Menu</span>
          </div>
        </aside>

        {/* HERO */}
        <section className="relative h-screen overflow-hidden flex items-center justify-center lg:pl-[120px]">
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
                onClick={(e) => scrollToSection(e, 'solutions')}
                className="text-lg font-medium px-8 py-3 border text-white border-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Explorar soluções
              </button>
              <button
                className="mt-6 px-8 py-3 text-lg font-medium border border-primary text-primary bg-transparent btn-scroll-hover relative"
                onMouseEnter={() => setIsHoverVerTrabalho(true)}
                onMouseLeave={() => setIsHoverVerTrabalho(false)}
                onClick={scrollToNextSection}
                style={{minWidth:180}}
              >
                Ver nosso trabalho
                <span className="tooltip ver-trabalho-tooltip" style={{opacity: isHoverVerTrabalho ? 1 : 0, left: 200}}>Rolar para próxima seção</span>
              </button>
            </div>
          </div>
        </section>

        {/* Seção de Soluções */}
        <section id="solutions" className="relative lg:pl-[120px] mt-20">
          {solutions.map((solution) => {
            const isActive = isMobileScreen() ? mobileSection === solution.id : activeSection === solution.id;
            return (
              <div
                key={solution.id}
                id={solution.id}
                data-solution-section={solution.id}
                className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
                onMouseEnter={!isMobileScreen() ? () => setActiveSection(solution.id) : undefined}
                onMouseLeave={!isMobileScreen() ? () => setActiveSection(null) : undefined}
              >
                <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundImage: `url(${solution.image})` }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
                {/* Conteúdo igual ao seu original */}
                <div className="relative z-10 py-24 md:py-32">
                  {/* ...conteúdo igual ao existente */}
                  {/* ... */}
                  <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                      <div>
                        <p className={`text-lg mb-2 transition-colors duration-500 ${isActive ? 'text-gray-300' : 'text-gray-700'}`}>
                          {solution.supportText}
                        </p>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${isActive ? 'text-white' : 'text-black'}`}>
                          {solution.title}
                        </h2>
                        <h3 className={`text-2xl md:text-3xl font-medium mb-8 transition-colors duration-500 ${isActive ? 'text-primary' : 'text-blue-700'}`}>
                          {solution.subtitle}
                        </h3>
                        {solution.logo && (
                          <div className="mt-4 mb-8">
                            <Image src={solution.logo} alt="Logo" className="h-12 w-auto" width={160} height={48} priority />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className={`text-xl leading-relaxed transition-colors duration-500 ${isActive ? 'text-gray-300' : 'text-gray-700'}`}>
                          {solution.caseStudy}
                        </p>
                      </div>
                    </div>
                    {/* ...restante do conteúdo da seção (features, why, how, CTA) igual ao seu código */}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ...formulário igual ao original */}

        {/* FOOTER único e correto */}
        <footer className="bg-black border-t border-gray-800 py-12 lg:pl-[120px]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-start md:items-end w-full md:w-auto">
              <Image src="/image/logo_aorkia_white.png" alt="AORKIA" width={120} height={48} className="aorkia-white mb-2" priority />
            </div>
            <div className="flex flex-col items-center md:items-end w-full md:w-auto">
              <div className="text-right text-lg text-gray-400 mb-3 max-w-xl">
                AORKIA: Ativamos tecnologia global de ponta, impulsionando diferenciação estratégica, inovação acelerada e crescimento rentável para empresas B2B
              </div>
              <div className="text-right text-gray-400 text-sm">
                Av. Getúlio Vargas, 671 — Sala 500<br />
                Belo Horizonte - MG<br />
                +55 31 98801-9006<br />
                contato@aorkia.com<br />
                <a href="https://instagram.com/aorkia.tech" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">@aorkia.tech</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
