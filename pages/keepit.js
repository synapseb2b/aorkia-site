import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Keepit() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Detectar qual seção está visível
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          const sectionId = section.getAttribute('data-section');
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Keepit com AORKIA | Backup Imutável para Microsoft 365, Google Workspace e Salesforce</title>
        <meta name="description" content="Proteja seus dados SaaS com backup imutável, recuperação granular e conformidade garantida. A AORKIA ativa a Keepit para proteção total dos seus dados críticos." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - RESPONSIVIDADE CORRIGIDA */}
        <section 
          id="hero" 
          data-section="hero"
          className="relative h-screen overflow-hidden flex items-center justify-center"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/image/backup.png)` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Logo Keepit */}
              <div className="mb-8">
                <Image 
                  src="/image/keepit_logo_aorkia.png" 
                  alt="Keepit" 
                  className="h-16 md:h-20 w-auto"
                  width={240}
                  height={80}
                  priority
                />
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                Backup Imutável. Isolamento Real. Recuperação Garantida.
              </p>
              
              {/* HERO TITLE - RESPONSIVIDADE CORRIGIDA PARA TELAS MENORES DE DESKTOP */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 tracking-tight max-w-5xl">
                Microsoft, Google e Salesforce não garantem a recuperação dos seus dados
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl">
                A AORKIA ativa a Keepit — plataforma global de backup SaaS — para entregar proteção imutável, restauração granular e conformidade certificada com LGPD, GDPR e HIPAA.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold"
                >
                  Descobrir Recursos
                </button>
                <button 
                  onClick={() => scrollToSection('why-keepit')}
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold text-center"
                >
                  Por que Keepit?
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('why')}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </button>
          </div>
        </section>

        {/* Seção Por que preciso - REESTILIZADA COMPLETAMENTE */}
        <section 
          id="why" 
          data-section="why"
          className="relative w-full h-screen md:h-[80vh] overflow-hidden group"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/image/digital.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-2 text-gray-300">
                  Proteção Crítica
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Proteja o Coração Digital da Sua Empresa com a Keepit
                </h2>
              </div>
              <div>
                <p className="text-xl md:text-2xl max-w-2xl text-gray-300 mb-8">
                  Mesmo com Microsoft 365, Google Workspace ou Salesforce, seus dados estão expostos. Essas plataformas não oferecem proteção completa contra exclusões acidentais, ataques de ransomware ou erros humanos.
                </p>
                <div className="mt-8">
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Descobrir a solução</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Recursos */}
        <section 
          id="features" 
          data-section="features"
          className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                O que você ativa com Keepit
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Proteção completa, recuperação granular e conformidade automatizada para todo seu ecossistema SaaS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-primary/50 transition-all">
                <div className="text-primary text-4xl mb-6">
                  <i className="ri-shield-keyhole-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Backup Imutável com Air Gap</h3>
                <p className="text-gray-300 text-lg">
                  Dados isolados em nuvem independente — não podem ser corrompidos ou apagados. Proteção real contra ransomware e falhas internas.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-primary/50 transition-all">
                <div className="text-primary text-4xl mb-6">
                  <i className="ri-restart-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Restauração Granular e Instantânea</h3>
                <p className="text-gray-300 text-lg">
                  Recupere um item, uma conta ou toda a estrutura — em minutos e com total controle. Sem perda de produtividade.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-primary/50 transition-all">
                <div className="text-primary text-4xl mb-6">
                  <i className="ri-apps-2-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Cobertura Completa do seu Ecossistema SaaS</h3>
                <p className="text-gray-300 text-lg">
                  Proteção nativa para Microsoft 365, Google Workspace, Salesforce, Dynamics, Azure AD e muito mais.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-primary/50 transition-all">
                <div className="text-primary text-4xl mb-6">
                  <i className="ri-file-shield-2-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Compliance Automatizado e Retenção Ilimitada</h3>
                <p className="text-gray-300 text-lg">
                  Políticas configuráveis, trilhas de auditoria completas e certificações como ISO 27001, ISAE 3402 e DORA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Why Keepit - O DIFERENCIAL AORKIA REESTILIZADA */}
        <section 
          id="why-keepit" 
          data-section="why-keepit"
          className="relative w-full h-screen md:h-[80vh] overflow-hidden group"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/image/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-2 text-gray-300">
                  O Diferencial AORKIA
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Por que escolher Keepit com AORKIA?
                </h2>
              </div>
              <div>
                <p className="text-xl md:text-2xl max-w-2xl text-gray-300 mb-8">
                  Resiliência começa com escolhas inteligentes. A nuvem independente da Keepit oferece proteção inteligente e recuperação sem igual. A AORKIA não apenas implementa — transformamos proteção de dados em vantagem estratégica.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/contato" 
                    className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Ativar Keepit com AORKIA</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Benefícios Detalhados */}
        <section 
          id="benefits" 
          data-section="benefits"
          className="py-20 md:py-32 bg-white text-black"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Vantagens Keepit com AORKIA
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
                Expertise certificada, implementação estratégica e suporte contínuo para máximo ROI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Continuidade de Negócios */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary/50 transition-all group shadow-lg">
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Continuidade de Negócios, Sempre</h3>
                <p className="text-gray-700 mb-4 font-semibold text-primary">Proteção independente de fornecedor SaaS</p>
                <p className="text-gray-700">
                  A nuvem independente da Keepit alinha-se com a regra de backup 3-2-1 e o framework NIST, armazenando backups separadamente dos seus dados primários.
                </p>
              </div>

              {/* Recuperação Sem Esforço */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary/50 transition-all group shadow-lg">
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-restart-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Recuperação Sem Esforço, Sempre</h3>
                <p className="text-gray-700 mb-4 font-semibold text-primary">Interface intuitiva e acesso fácil</p>
                <p className="text-gray-700">
                  Recupere dados críticos ou localize arquivos específicos em segundos. Nossa interface intuitiva não requer treinamento.
                </p>
              </div>

              {/* Certificação Total */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary/50 transition-all group shadow-lg">
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-award-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Certificado para Confiança Total</h3>
                <p className="text-gray-700 mb-4 font-semibold text-primary">Segurança líder da indústria</p>
                <p className="text-gray-700">
                  Keepit atende aos mais altos padrões de segurança com certificação ISO 27001 em todas as localizações.
                </p>
              </div>

              {/* Dados Ilimitados */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary/50 transition-all group shadow-lg">
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-database-2-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Dados Ilimitados, Preço Previsível</h3>
                <p className="text-gray-700 mb-4 font-semibold text-primary">Modelo de custo transparente por usuário</p>
                <p className="text-gray-700">
                  Preço fixo por usuário inclui armazenamento ilimitado de dados sempre disponíveis, sem taxas ocultas.
                </p>
              </div>

              {/* Compliance Simplificado */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary/50 transition-all group shadow-lg">
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-file-shield-2-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Compliance Simplificado</h3>
                <p className="text-gray-700 mb-4 font-semibold text-primary">Suporte regulatório simplificado</p>
                <p className="text-gray-700">
                  Keepit simplifica compliance para políticas internas e regulamentações globais, oferecendo proteção alinhada com GDPR, NIS2, NIST.
                </p>
              </div>

              {/* Expertise AORKIA */}
              <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 p-8 rounded-lg border border-primary/30 hover:border-primary/50 transition-all group shadow-lg">
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-team-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Expertise AORKIA</h3>
                <p className="text-gray-700 mb-4 font-semibold text-primary">Ativação estratégica e suporte contínuo</p>
                <p className="text-gray-700">
                  A AORKIA não apenas implementa a Keepit — transformamos proteção de dados em vantagem estratégica com expertise comprovada.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link 
                href="/contato" 
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold"
              >
                <span>Ativar Keepit com AORKIA</span>
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção Como Funciona */}
        <section 
          id="how" 
          data-section="how"
          className="py-20 md:py-32 bg-gray-900 text-white"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Como funciona a ativação com a AORKIA
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Processo estruturado para implementação, configuração e gestão contínua da sua proteção de dados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Análise e Planejamento</h3>
                <p className="text-gray-300">
                  Avaliamos sua infraestrutura SaaS atual e definimos estratégia de proteção personalizada.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Implementação e Configuração</h3>
                <p className="text-gray-300">
                  Ativamos a Keepit com configurações otimizadas para seu ambiente e necessidades específicas.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Monitoramento e Suporte</h3>
                <p className="text-gray-300">
                  Gestão contínua, monitoramento proativo e suporte especializado para máxima eficiência.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link 
                href="/contato" 
                className="inline-flex items-center border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold"
              >
                <span>Começar agora</span>
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

