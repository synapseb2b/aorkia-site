import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// CSS-in-JS para animação de logo rotativa (alternando entre branca e colorida)
const logoAnimationStyles = `
@keyframes rotateLogoAorkia {
  0% { opacity: 1; }
  40% { opacity: 1; }
  50% { opacity: 0; }
  90% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes rotateLogoAorkiaColor {
  0% { opacity: 0; filter: brightness(2) drop-shadow(0 0 10px #fff); }
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
  /* Tratamento para tornar a logo colorida visível sobre fundo preto */
}
`;

export default function Solucoes() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const solutionsRef = useRef(null);

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

  // Corrige Video Hero para garantir exibição
  useEffect(() => {
    // Força reload em caso de hydration issues (Next.js SSR/CSR) para o vídeo
    const video = document.getElementById('hero-video');
    if (video && video.paused) {
      video.load();
      video.play().catch(() => {});
    }
  }, []);

  // Função para rolagem suave ao clicar em links internos
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Soluções com suas respectivas imagens e conteúdos
  const solutions = [
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
    // ... demais soluções iguais (omiti para clareza)
    // copie as demais soluções do seu código original
    // ...
  ];

  return (
    <>
      <Head>
        <title>Soluções | AORKIA</title>
        <meta name="description" content="Explore como a AORKIA ativa tecnologia de ponta para transformar seus desafios complexos em crescimento rentável e sustentável." />
        <meta name="theme-color" content="#0076FF" />
        <style>{logoAnimationStyles}</style>
      </Head>
      <main className="bg-black text-white">

        {/* LOGO SIDEBAR DESKTOP (acima do menu sanduíche) */}
        <div className="hidden lg:flex flex-col items-center fixed left-0 top-0 pt-10 z-50" style={{width: '120px', height: '100vh'}}>
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
        </div>

        {/* LOGO + MENU HORIZONTAL (ao lado do menu sanduíche no desktop e no topo no mobile) */}
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-black border-b border-gray-800 lg:pl-[120px]">
          <div className="flex items-center">
            <div className="aorkia-logo-stack mr-4 lg:hidden">
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
            <span className="sr-only">AORKIA</span>
          </div>
          <div className="flex gap-8 items-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/solucoes" className="hover:text-primary transition-colors font-bold">Soluções</Link>
            <Link href="/sobre" className="hover:text-primary transition-colors">Sobre</Link>
            <Link href="/contato" className="hover:text-primary transition-colors">Contato</Link>
            {/* menu sanduíche seria aqui */}
          </div>
        </nav>

        {/* HERO */}
        <section className="relative h-screen overflow-hidden flex items-center justify-center">
          {/* Video Hero (corrigido: id, poster fallback, z-index) */}
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

        {/* ...restante do código permanece igual (soluções, formulário, etc.) */}

        {/* FOOTER com logo branca + frase */}
        <footer className="bg-black border-t border-gray-800 py-16">
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
