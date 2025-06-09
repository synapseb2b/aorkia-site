import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// CSS-in-JS for logo animation and brightness
const logoAnimationStyles = `
@keyframes rotateLogoAorkia {
  0% { opacity: 1; }
  40% { opacity: 1; }
  50% { opacity: 0; }
  90% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes rotateLogoAorkiaColor {
  0% { opacity: 0; filter: brightness(2) drop-shadow(0 0 10px #fff);}
  40% { opacity: 0; filter: brightness(2) drop-shadow(0 0 10px #fff);}
  50% { opacity: 1; filter: brightness(2) drop-shadow(0 0 10px #fff);}
  90% { opacity: 1; filter: brightness(2) drop-shadow(0 0 10px #fff);}
  100% { opacity: 0; filter: brightness(2) drop-shadow(0 0 10px #fff);}
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
.aorkia-logo-stack img.aorkia-color {
  position: absolute;
  left: 0;
  top: 0;
  width: 120px;
  height: 48px;
  object-fit: contain;
  opacity: 0;
  animation: rotateLogoAorkiaColor 7s linear infinite;
}
`;

export default function Solucoes() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const solutionsRef = useRef(null);

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

  // Força reload do vídeo hero
  useEffect(() => {
    const video = document.getElementById('hero-video');
    if (video && video.paused) {
      video.load();
      video.play().catch(() => {});
    }
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Soluções conforme seu exemplo
  const solutions = [
    // ... [COPIE SUAS SOLUÇÕES AQUI como no seu exemplo anterior]
    // (Omitido aqui por limitação de espaço, mas use o array solutions completo do seu exemplo anterior)
    // ...
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      supportText: 'Imutável. Independente. Inteligente.',
      subtitle: 'Seus Dados na Nuvem, Realmente Protegidos.',
      caseStudy: 'Perder dados críticos de Plataformas SaaS como Microsoft 365, Google Workspace e Salesforce por um simples erro humano ou um ataque de ransomware pode paralisar sua operação e gerar custos enormes. Com o Backup SaaS Estratégico ativado pela AORKIA, você recupera desde um único e-mail até ambientes inteiros rapidamente, garantindo a continuidade do seu negócio e a tranquilidade da sua equipe.',
      activateContent: 'A AORKIA simplifica a complexidade da proteção de dados SaaS, ativando a plataforma líder da Keepit para oferecer máxima segurança, controle e tranquilidade para sua empresa:',
      features: [
        {
          icon: 'ri-shield-keyhole-line',
          title: 'Proteção Completa e Imutável Contra Ameaças',
          description: 'Seus dados SaaS são copiados para uma nuvem independente e segura, com backups 100% imutáveis que protegem contra ransomware, exclusões acidentais e corrupção.'
        },
        {
          icon: 'ri-restart-line',
          title: 'Recuperação Rápida e Granular a Qualquer Momento',
          description: 'Restaure exatamente o que você precisa – um arquivo, um e-mail, um registro específico ou contas inteiras – em minutos, diretamente para o local original ou para download.'
        },
        {
          icon: 'ri-apps-2-line',
          title: 'Ampla Cobertura para Seu Ecossistema SaaS',
          description: 'Garanta a proteção completa dos seus dados críticos em Microsoft 365, Google Workspace, Salesforce, Dynamics 365, Azure AD, entre outras plataformas essenciais.'
        },
        {
          icon: 'ri-file-shield-2-line',
          title: 'Conformidade Descomplicada e Auditoria Facilitada',
          description: 'Atenda às exigências da LGPD, GDPR, HIPAA e outras regulamentações com políticas de retenção flexíveis, trilhas de auditoria detalhadas e data centers seguros.'
        }
      ],
      whyContent: 'Muitas empresas ainda acreditam que seus provedores de SaaS (como Microsoft ou Google) são totalmente responsáveis pelo backup de todos os seus dados. No entanto, o modelo de responsabilidade é compartilhada: eles garantem a infraestrutura; você protege seus dados contra perdas acidentais, erros humanos, ameaças internas e ataques de ransomware.',
      whyQuote: 'Seus dados em Microsoft 365, Salesforce ou Google Workspace são ativos cruciais, mas a proteção nativa dessas plataformas não cobre todos os cenários de perda de dados. Erros humanos, exclusões (acidentais ou maliciosas) e, principalmente, ataques de ransomware podem levar à perda irreparável de informações vitais. Um backup SaaS dedicado, independente e imutável, como o ativado pela AORKIA, é essencial para garantir a verdadeira continuidade dos negócios, a conformidade regulatória e a sua total tranquilidade operacional.',
      howContent: 'A AORKIA não é apenas uma fornecedora de tecnologia; somos seus parceiros estratégicos na proteção de dados. Nosso modelo de "ativação" garante que você extraia o máximo valor da melhor solução de backup SaaS do mercado, de forma rápida, personalizada e sem complexidade para sua equipe.',
      howQuote: 'Com a AORKIA, você não apenas adquire uma solução líder global como a Keepit; você ativa uma estratégia completa e robusta de proteção para seus dados SaaS. Nossa expertise assegura uma implementação ágil e customizada às suas políticas, configuração otimizada para suas necessidades de conformidade e retenção de dados, e suporte especializado contínuo. Capacitamos sua equipe para gerenciar os backups com facilidade e confiança, transformando a segurança de dados em um pilar fundamental para o crescimento e a resiliência do seu negócio.',
      ctaText: 'Proteja o Coração Digital do Seu Negócio Agora Mesmo. Descubra como o Backup SaaS Estratégico ativado pela AORKIA pode blindar seus dados críticos na nuvem.',
      image: '/image/backup.png',
      logo: '/image/keepit_logo_aorkia.png'
    },
    // ... [demais soluções como no seu exemplo]
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

        {/* NAVBAR MOBILE */}
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800 lg:hidden">
          <div className="aorkia-logo-stack">
            <Image
              src="/image/logo_aorkia_white.png"
              alt="AORKIA White"
              width={120}
              height={48}
              className="aorkia-white"
              priority
            />
            <Image
              src="/image/logo_aorkia_color.png"
              alt="AORKIA Color"
              width={120}
              height={48}
              className="aorkia-color"
              priority
              style={{ filter: 'brightness(2) drop-shadow(0 0 10px #fff)' }}
            />
          </div>
          <button className="text-white text-3xl p-2" aria-label="Menu">
            <i className="ri-menu-line"></i>
          </button>
        </nav>

        {/* LOGO SIDEBAR (DESKTOP) */}
        <aside className="hidden lg:flex flex-col items-center fixed left-0 top-0 pt-10 z-50" style={{width: '120px', height: '100vh'}}>
          <div className="aorkia-logo-stack mb-8">
            <Image
              src="/image/logo_aorkia_white.png"
              alt="AORKIA White"
              width={120}
              height={48}
              className="aorkia-white"
              priority
            />
            <Image
              src="/image/logo_aorkia_color.png"
              alt="AORKIA Color"
              width={120}
              height={48}
              className="aorkia-color"
              priority
              style={{ filter: 'brightness(2) drop-shadow(0 0 10px #fff)' }}
            />
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
            style={{ background: "#000" }}
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
            </div>
          </div>
        </section>

        {/* SEÇÃO DE SOLUÇÕES (completa) */}
        <section id="solutions" ref={solutionsRef} className="relative lg:pl-[120px]">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              id={solution.id}
              className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
              onMouseEnter={() => setActiveSection(solution.id)}
              onMouseLeave={() => setActiveSection(null)}
            >
              {/* Background Image (aparece apenas no hover) */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                  activeSection === solution.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${solution.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Background Color (aparece quando não está em hover) */}
              <div 
                className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                  activeSection === solution.id ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              
              {/* Content */}
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

                  {/* Features Section */}
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

                  {/* How AORKIA Helps Section */}
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

        {/* FOOTER final correto */}
        <footer className="bg-black border-t border-gray-800 py-12 lg:pl-[120px]">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="mb-6">
              <Image
                src="/image/logo_aorkia_white.png"
                alt="AORKIA"
                width={120}
                height={48}
                className="aorkia-white"
                priority
              />
            </div>
            <div className="text-center text-lg text-gray-400 max-w-xl">
              AORKIA: Ativamos tecnologia global de ponta, impulsionando diferenciação estratégica, inovação acelerada e crescimento rentável para empresas B2B
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
