import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Logo animation (desktop): alterna entre duas logos brancas
const logoAnimationStyles = `
@keyframes alternateLogo {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
@keyframes alternateLogo2 {
  0%, 49% { opacity: 0; }
  50%, 100% { opacity: 1; }
}
.sidebar-logo-stack {
  position: relative;
  width: 120px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.sidebar-logo-stack img.logo1 {
  position: absolute;
  left: 0;
  top: 0;
  width: 120px;
  height: 48px;
  object-fit: contain;
  animation: alternateLogo 3s linear infinite;
  transition: opacity .4s;
}
.sidebar-logo-stack img.logo2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 120px;
  height: 48px;
  object-fit: contain;
  animation: alternateLogo2 3s linear infinite;
  transition: opacity .4s;
}
.sidebar-logo-stack .sidebar-logo-tooltip {
  opacity: 0;
  transition: opacity .2s;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  background: #222;
  color: #fff;
  padding: 4px 12px;
  border-radius: 6px;
  margin-left: 10px;
  font-size: 1rem;
  z-index: 100;
  pointer-events: none;
}
.sidebar-logo-stack:hover .sidebar-logo-tooltip {
  opacity: 1;
}
.menu-btn {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 50%;
}
.menu-btn:hover {
  background: #222;
  transform: scale(1.07) rotate(-10deg);
  box-shadow: 0 2px 12px 0 #2227;
}
.menu-btn .menu-tooltip {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 110%;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  border-radius: 6px;
  font-size: 1rem;
  padding: 4px 12px;
  white-space: nowrap;
  pointer-events: none;
  transition: opacity .18s;
  z-index: 100;
}
.menu-btn:hover .menu-tooltip {
  opacity: 1;
}
.hero-btn-cta {
  transition: box-shadow 0.2s, background 0.2s, color 0.2s, transform 0.2s;
}
.hero-btn-cta:hover {
  background: #fff;
  color: #000;
  box-shadow: 0 4px 24px 0 #fff6;
  transform: scale(1.06);
}
.hero-btn-cta:active {
  background: #e6e6e6;
  color: #111;
}
`;

export default function Solucoes() {
  const [activeSection, setActiveSection] = useState(null);
  const solutionsRef = useRef(null);
  const [sidebarLogoHover, setSidebarLogoHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);

  useEffect(() => {
    // HERO video reload fix
    const video = document.getElementById('hero-video');
    if (video && video.paused) {
      video.load();
      video.play().catch(() => {});
    }
  }, []);

  // Scroll-based background activation for sections
  useEffect(() => {
    function onScroll() {
      const sections = Array.from(document.querySelectorAll('.solution-section'));
      const scrollY = window.scrollY;
      let current = null;
      for (let sec of sections) {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollY + window.innerHeight / 2 >= top && scrollY + window.innerHeight / 2 < bottom) {
          current = sec.id;
          break;
        }
      }
      setActiveSection(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Soluções (use os seus dados completos aqui!)
  const solutions = [
    // ... (use seu array solutions completo com as imagens em /image/...)
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      supportText: 'Imutável. Independente. Inteligente.',
      subtitle: 'Seus Dados na Nuvem, Realmente Protegidos.',
      caseStudy: 'Perder dados críticos de Plataformas SaaS como Microsoft 365, Google Workspace e Salesforce por um simples erro humano ou um ataque de ransomware pode paralisar sua operação e gerar custos enormes. Com o Backup SaaS Estratégico ativado pela AORKIA, você recupera desde um único e-mail até ambientes inteiros rapidamente, garantindo a continuidade do seu negócio e a tranquilidade da sua equipe.',
      activateContent: 'A AORKIA simplifica a complexidade da proteção de dados SaaS, ativando a plataforma líder da Keepit para oferecer máxima segurança, controle e tranquilidade para sua empresa:',
      features: [
        { icon: 'ri-shield-keyhole-line', title: 'Proteção Completa e Imutável Contra Ameaças', description: 'Seus dados SaaS são copiados para uma nuvem independente e segura, com backups 100% imutáveis que protegem contra ransomware, exclusões acidentais e corrupção.' },
        { icon: 'ri-restart-line', title: 'Recuperação Rápida e Granular a Qualquer Momento', description: 'Restaure exatamente o que você precisa – um arquivo, um e-mail, um registro específico ou contas inteiras – em minutos, diretamente para o local original ou para download.' },
        { icon: 'ri-apps-2-line', title: 'Ampla Cobertura para Seu Ecossistema SaaS', description: 'Garanta a proteção completa dos seus dados críticos em Microsoft 365, Google Workspace, Salesforce, Dynamics 365, Azure AD, entre outras plataformas essenciais.' },
        { icon: 'ri-file-shield-2-line', title: 'Conformidade Descomplicada e Auditoria Facilitada', description: 'Atenda às exigências da LGPD, GDPR, HIPAA e outras regulamentações com políticas de retenção flexíveis, trilhas de auditoria detalhadas e data centers seguros.' }
      ],
      whyContent: 'Muitas empresas ainda acreditam que seus provedores de SaaS (como Microsoft ou Google) são totalmente responsáveis pelo backup de todos os seus dados. No entanto, o modelo de responsabilidade é compartilhada: eles garantem a infraestrutura; você protege seus dados contra perdas acidentais, erros humanos, ameaças internas e ataques de ransomware.',
      whyQuote: 'Seus dados em Microsoft 365, Salesforce ou Google Workspace são ativos cruciais, mas a proteção nativa dessas plataformas não cobre todos os cenários de perda de dados. Erros humanos, exclusões (acidentais ou maliciosas) e, principalmente, ataques de ransomware podem levar à perda irreparável de informações vitais. Um backup SaaS dedicado, independente e imutável, como o ativado pela AORKIA, é essencial para garantir a verdadeira continuidade dos negócios, a conformidade regulatória e a sua total tranquilidade operacional.',
      howContent: 'A AORKIA não é apenas uma fornecedora de tecnologia; somos seus parceiros estratégicos na proteção de dados. Nosso modelo de "ativação" garante que você extraia o máximo valor da melhor solução de backup SaaS do mercado, de forma rápida, personalizada e sem complexidade para sua equipe.',
      howQuote: 'Com a AORKIA, você não apenas adquire uma solução líder global como a Keepit; você ativa uma estratégia completa e robusta de proteção para seus dados SaaS. Nossa expertise assegura uma implementação ágil e customizada às suas políticas, configuração otimizada para suas necessidades de conformidade e retenção de dados, e suporte especializado contínuo. Capacitamos sua equipe para gerenciar os backups com facilidade e confiança, transformando a segurança de dados em um pilar fundamental para o crescimento e a resiliência do seu negócio.',
      ctaText: 'Proteja o Coração Digital do Seu Negócio Agora Mesmo. Descubra como o Backup SaaS Estratégico ativado pela AORKIA pode blindar seus dados críticos na nuvem.',
      image: '/image/backup.png',
      logo: '/image/keepit_logo_aorkia.png'
    },
    // ... demais soluções (igual ao seu array solutions)
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

        {/* Navbar mobile: logo branca no extremo esquerdo, sanduíche extremo direito */}
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800 lg:hidden">
          <div className="aorkia-logo-stack" style={{minWidth:120}}>
            <Image
              src="/image/logo_aorkia_white.png"
              alt="AORKIA White"
              width={120}
              height={48}
              className="aorkia-white"
              priority
            />
          </div>
          <button
            className="menu-btn relative text-white text-3xl p-2"
            style={{outline: 'none', border: 'none', background: 'none'}}
            aria-label="Menu"
            onMouseEnter={() => setMenuHover(true)}
            onMouseLeave={() => setMenuHover(false)}
          >
            <i className="ri-menu-line"></i>
            <span className="menu-tooltip">{menuHover && 'Menu'}</span>
          </button>
        </nav>

        {/* Sidebar desktop: duas logos brancas alternando, animação, tooltip "Home" */}
        <aside className="hidden lg:flex flex-col items-center fixed left-0 top-0 pt-10 z-50"
          style={{width: '120px', height: '100vh'}}
        >
          <div
            className="sidebar-logo-stack mb-8"
            tabIndex={0}
            onMouseEnter={() => setSidebarLogoHover(true)}
            onMouseLeave={() => setSidebarLogoHover(false)}
            onFocus={() => setSidebarLogoHover(true)}
            onBlur={() => setSidebarLogoHover(false)}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            aria-label="Home"
          >
            <Image
              src="/image/logo_aorkia_white.png"
              alt="AORKIA White 1"
              width={120}
              height={48}
              className="logo1"
              priority
            />
            <Image
              src="/image/logo_aorkia_white.png"
              alt="AORKIA White 2"
              width={120}
              height={48}
              className="logo2"
              priority
              style={{opacity:0.7, filter:'brightness(1.4)'}}
            />
            <span className="sidebar-logo-tooltip">{sidebarLogoHover && 'Home'}</span>
          </div>
        </aside>

        {/* Hero */}
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
                className="hero-btn-cta text-lg font-medium px-8 py-3 border text-white border-white"
                onClick={e => {
                  scrollToSection(e, 'solutions');
                  e.currentTarget.blur();
                }}
                onMouseEnter={e => { e.currentTarget.classList.add('animate-pulse'); }}
                onMouseLeave={e => { e.currentTarget.classList.remove('animate-pulse'); }}
              >
                Ver nosso trabalho
              </button>
            </div>
          </div>
        </section>

        {/* Seção de Soluções */}
        <section id="solutions" ref={solutionsRef} className="relative lg:pl-[120px]">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              id={solution.id}
              className={`solution-section relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800`}
            >
              {/* Background transition by scroll */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                  activeSection === solution.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${solution.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              {/* Background branco quando inativa */}
              <div
                className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                  activeSection === solution.id ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              {/* Conteúdo */}
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
                  {/* Why Section */}
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
                  {/* How Section */}
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
        <section className="py-24 md:py-32 bg-black lg:pl-[120px]">
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

        {/* Footer ÚNICO, completo, logo canto superior direito, instagram corrigido */}
        <footer className="bg-[#0e1622] border-t border-gray-800 pt-12 pb-6 lg:pl-[120px]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="mb-6 text-center md:text-left text-lg text-gray-300 max-w-xl">
                AORKIA: Ativamos tecnologia global de ponta, impulsionando diferenciação estratégica, inovação acelerada e crescimento rentável para empresas B2B.
              </div>
              <div className="mt-4 flex gap-4">
                <a href="https://www.linkedin.com/company/aorkia/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-primary">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://instagram.com/aorkia.tech" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-primary">
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
            <div className="flex-1 mt-8 md:mt-0 flex flex-col items-center md:items-end justify-end">
              <div className="w-full flex flex-row justify-end">
                <Image
                  src="/image/logo_aorkia_white.png"
                  alt="AORKIA"
                  width={120}
                  height={48}
                  className="aorkia-white mb-2"
                  priority
                />
              </div>
              <div className="text-md text-gray-400 text-right mt-2">
                Av. Getúlio Vargas, 671 — Sala 500<br />
                Belo Horizonte - MG<br />
                +55 31 98801-9006<br />
                contato@aorkia.com
              </div>
              <Link href="/contato" className="mt-3 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors text-center w-fit block">
                Entre em contato
              </Link>
              <div className="text-xs text-gray-500 mt-4">
                © {new Date().getFullYear()} AORKIA. Todos os direitos reservados.<br />
                <Link href="/privacidade" className="underline hover:text-primary">Política de Privacidade</Link> | <Link href="/termos" className="underline hover:text-primary">Termos de Uso</Link>
                <br />
                Site Desenvolvido por AORKIA – Estratégia de Presença Digital
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
