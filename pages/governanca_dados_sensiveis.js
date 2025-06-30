import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const faqData = [
  {
    question: "Qual a principal diferença entre DSPM e CSPM?",
    answer: "CSPM protege a infraestrutura da nuvem (as \"paredes da casa\"), enquanto a DSPM protege o que há de mais valioso dentro dela: os próprios dados."
  },
  {
    question: "O que é \"shadow data\" e por que é tão perigoso?",
    answer: "É qualquer dado que sua TI não conhece ou não gerencia. É perigoso porque frequentemente não está protegido, tornando-se uma porta de entrada para atacantes e um passivo de conformidade com a LGPD."
  },
  {
    question: "Como a DSPM ajuda a proteger nossa Propriedade Intelectual?",
    answer: "Ao descobrir e classificar automaticamente todos os dados, ela identifica onde sua PI (códigos-fonte, patentes) está armazenada e garante que apenas pessoas autorizadas tenham acesso, mitigando riscos de roubo e vazamento."
  },
  {
    question: "Por que devo ativar uma plataforma DSPM com a AORKIA?",
    answer: "A AORKIA adiciona a camada de consultoria estratégica. Nós não apenas implementamos a ferramenta; nós a integramos ao seu ecossistema de segurança (CSPM, SIEM), otimizamos para suas políticas e fornecemos suporte contínuo para transformar os dados em controle real."
  },
  {
    question: "A solução funciona em ambientes multi-cloud (AWS, Azure, GCP) e híbridos?",
    answer: "Sim. A DSPM é projetada para oferecer uma visão unificada e consistente em todos os seus ambientes de dados, sejam eles em múltiplas nuvens, SaaS ou on-premise."
  },
  {
    question: "Como a DSPM ajuda na conformidade com a LGPD?",
    answer: "Ela automatiza a descoberta e classificação de dados pessoais, monitora o acesso e o fluxo desses dados e gera relatórios detalhados que simplificam a comprovação de conformidade para auditorias e solicitações da ANPD (Autoridade Nacional de Proteção de Dados)."
  },
  {
    question: "A implementação de uma DSPM é um processo demorado?",
    answer: "Não com a abordagem da AORKIA. Utilizamos ferramentas \"agentless\" (sem agente) e integrações pré-construídas para garantir um rápido tempo de valorização, com visibilidade inicial em questão de horas, não meses."
  }
];

export default function GovernancaDadosSensiveis() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionBackgrounds, setSectionBackgrounds] = useState({});
  const [openFaqItems, setOpenFaqItems] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Detectar quais seções devem ter background image
      const sections = [
        'risco-real',
        'responsabilidade', 
        'resiliencia',
        'pilares',
        'cobertura',
        'desafios',
        'confianca',
        'depoimentos',
        'certificacoes',
        'faq'
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

  const toggleFaqItem = (index) => {
    setOpenFaqItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Head>
        <title>Governança Estratégica de Dados Sensíveis - DSPM | AORKIA</title>
        <meta name="description" content="Visibilidade Total. Controle Inteligente. Proteção de Dados em Qualquer Nuvem. A AORKIA ativa plataformas DSPM para descobrir, classificar e proteger dados críticos em tempo real." />
        <meta name="keywords" content="DSPM, governança de dados, dados sensíveis, LGPD, GDPR, proteção de dados, visibilidade de dados, classificação de dados, conformidade" />
        <link rel="canonical" href="https://aorkia.com/governanca_dados_sensiveis" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="min-h-screen bg-white relative">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/video/dspm.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
          
          <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Governança Estratégica<br />
              de Dados Sensíveis
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-center">
              Visibilidade Total. Controle Inteligente. Proteção de Dados em Qualquer Nuvem.
            </p>
            <p className="text-lg md:text-xl mb-10 text-center max-w-4xl mx-auto">
              Seus dados sensíveis estão espalhados em múltiplas nuvens — e você não tem visibilidade real sobre onde estão, quem acessa ou o quão expostos estão? A AORKIA ativa plataformas DSPM para descobrir, classificar e proteger dados críticos em tempo real, com controle contínuo e conformidade garantida.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="#risco-real" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Veja os Riscos Invisíveis
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Ativar Visibilidade Agora
              </Link>
            </div>
          </div>
        </section>

        {/* O Mito da Segurança Perimetral */}
        <section id="risco-real" data-section="risco-real" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('risco-real')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              O Mito da Segurança Perimetral: Você realmente sabe onde estão seus dados?
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Segurança Tradicional */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-l-4 border-red-500 shadow-lg">
                    <h3 className="text-2xl font-bold text-red-700 mb-8 text-center">
                      Segurança Tradicional (Firewalls / Antivírus)
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Visibilidade Limitada:</h4>
                        <p className="text-gray-600 text-center">Focam no perímetro, mas não revelam onde estão seus dados sensíveis ou quem tem acesso.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Shadow Data Invisível:</h4>
                        <p className="text-gray-600 text-center">Dados críticos criados fora dos controles de TI permanecem completamente invisíveis.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Conformidade Reativa:</h4>
                        <p className="text-gray-600 text-center">Descobrem violações apenas após vazamentos ou auditorias externas.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Falsa Sensação de Controle:</h4>
                        <p className="text-gray-600 text-center">Acreditam que controle de acesso é suficiente, ignorando riscos de exposição de dados.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DSPM com AORKIA */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">
                      DSPM Inteligente com AORKIA
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Descoberta Automática:</h4>
                        <p className="text-gray-600 text-center">Mapeamento completo de todos os dados sensíveis, incluindo shadow data em qualquer nuvem.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Classificação Inteligente:</h4>
                        <p className="text-gray-600 text-center">Identifica automaticamente tipos de dados, níveis de sensibilidade e riscos de exposição.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Controle Contínuo:</h4>
                        <p className="text-gray-600 text-center">Monitoramento em tempo real de permissões, acessos e mudanças de configuração.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Remediação Automatizada:</h4>
                        <p className="text-gray-600 text-center">Correção guiada ou automática de riscos com trilhas de auditoria completas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Fonte da Sua Próxima Multa da LGPD */}
        <section id="responsabilidade" data-section="responsabilidade" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('responsabilidade')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <i className="ri-alert-line text-6xl text-white/80"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  A Fonte da Sua Próxima Multa da LGPD Já Existe
                </h3>
                <blockquote className="text-lg md:text-xl text-white/90 italic leading-relaxed mb-6">
                  "Dados sensíveis e dados criados fora dos controles de TI espalhados por múltiplas nuvens deixam sua empresa vulnerável a vazamentos e multas severas da LGPD."
                </blockquote>
                <p className="text-sm text-white/70 font-medium">
                  Realidade: 73% das empresas não sabem onde estão todos os seus dados sensíveis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Não é só Visibilidade. É Controle Estratégico. */}
        <section id="resiliencia" data-section="resiliencia" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('resiliencia')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
                Não é só Visibilidade. É Controle Estratégico.
              </h2>
              
              <div className="relative">
                {/* Background decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl"></div>
                
                <div className="relative z-10 p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                          Diante da complexidade de dados espalhados em múltiplas nuvens e das pesadas multas da LGPD, uma simples ferramenta de monitoramento é insuficiente.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-6 shadow-lg">
                        <p className="text-xl font-bold text-white text-center">
                          A resposta precisa ser uma estratégia de governança.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                          A AORKIA transforma essa incerteza em controle absoluto. Ativamos plataformas DSPM que oferecem um mapa preciso dos seus dados, riscos e permissões, transformando governança em vantagem competitiva.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-700 rounded-2xl p-8 shadow-2xl text-white text-center">
                        <div className="text-5xl mb-4">
                          <i className="ri-eye-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Visibilidade Unificada</h3>
                        <p className="text-lg leading-relaxed">
                          Controle total e conformidade garantida para o seu negócio digital.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Os Pilares da Governança Real */}
        <section id="pilares" data-section="pilares" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('pilares')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Os Pilares da Governança Real
            </h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* 1º Pilar */}
              <div className="p-6 rounded-lg border-2 border-blue-500 bg-transparent text-center">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="ri-search-eye-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Descoberta e Classificação Inteligente</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Mapeamento automático de todos os dados confidenciais — até os invisíveis ("shadow data") — em SaaS, IaaS, PaaS e ambientes híbridos.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-blue-700 mb-1">
                    Eliminação de pontos cegos de dados sensíveis.
                  </p>
                  <p className="text-sm font-medium text-blue-700">
                    Inventário completo para conformidade e auditoria.
                  </p>
                </div>
              </div>

              {/* 2º Pilar */}
              <div className="p-6 rounded-lg border-2 border-blue-500 bg-transparent text-center">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="ri-bar-chart-grouped-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Priorização Real de Riscos</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Entenda quem acessa, como os dados são usados e onde estão vulneráveis — para agir no que realmente importa.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-blue-700 mb-1">
                    Foco em riscos críticos, não alertas irrelevantes.
                  </p>
                  <p className="text-sm font-medium text-blue-700">
                    Otimização de recursos de segurança.
                  </p>
                </div>
              </div>

              {/* 3º Pilar */}
              <div className="p-6 rounded-lg border-2 border-blue-500 bg-transparent text-center">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Correção Automatizada</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Remediação guiada ou automatizada. Conformidade com LGPD, GDPR, HIPAA com trilhas de auditoria completas.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-blue-700 mb-1">
                    Redução drástica do tempo de resposta a incidentes.
                  </p>
                  <p className="text-sm font-medium text-blue-700">
                    Conformidade contínua e auditável.
                  </p>
                </div>
              </div>

              {/* 4º Pilar */}
              <div className="p-6 rounded-lg border-2 border-blue-500 bg-transparent text-center">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Segurança Cloud-Native</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Proteja aplicações nativas da nuvem com uma visão unificada de dados, permissões e riscos em tempo real.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800 mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-blue-700 mb-1">
                    Proteção escalável para crescimento digital.
                  </p>
                  <p className="text-sm font-medium text-blue-700">
                    Integração nativa com infraestrutura existente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cobertura Completa */}
        <section id="cobertura" data-section="cobertura" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('cobertura')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Visibilidade Completa do seu Ecossistema Cloud
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto items-center">
              <div className="flex flex-col items-center">
                <Image src="/icon/aws.png" alt="Amazon Web Services" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/azure.png" alt="Microsoft Azure" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Microsoft Azure</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/gcp.png" alt="Google Cloud Platform" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Google Cloud</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/microsoft_365.png" alt="Microsoft 365" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Microsoft 365</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/salesforce.png" alt="Salesforce" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Salesforce</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/mongodb.png" alt="MongoDB" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">MongoDB</span>
              </div>
            </div>
          </div>
        </section>

        {/* Uma Solução. Respostas para Cada Desafio Estratégico. */}
        <section id="desafios" data-section="desafios" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('desafios')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Uma Solução. Respostas para Cada Desafio Estratégico.
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Desafio 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="ri-eye-off-line text-2xl text-red-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Dados sensíveis espalhados sem visibilidade</h3>
                    <p className="text-gray-600 mb-4">Como descobrir onde estão todos os dados críticos em múltiplas nuvens?</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-700 font-medium">
                        <strong>Solução DSPM:</strong> Descoberta automática e classificação inteligente de todos os dados sensíveis, incluindo shadow data, com mapeamento completo em tempo real.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desafio 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-alert-line text-2xl text-orange-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Auditoria LGPD está chegando</h3>
                    <p className="text-gray-600 mb-4">Como comprovar conformidade e controle de dados sensíveis?</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-700 font-medium">
                        <strong>Solução DSPM:</strong> Trilhas de auditoria completas, relatórios de conformidade automatizados e evidências documentadas para LGPD, GDPR e outras regulamentações.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desafio 3 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-shield-cross-line text-2xl text-purple-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Permissões excessivas e acessos inadequados</h3>
                    <p className="text-gray-600 mb-4">Como controlar quem acessa dados sensíveis e corrigir exposições?</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-700 font-medium">
                        <strong>Solução DSPM:</strong> Análise contínua de permissões, detecção de acessos inadequados e remediação automatizada com políticas de menor privilégio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que os Heads de Governança de Dados dizem sobre DSPM? */}
        <section id="depoimentos" data-section="depoimentos" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('depoimentos')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              O que os Heads de Governança de Dados dizem sobre DSPM?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Depoimento 1 */}
              <div className="p-6 rounded-lg border-2 border-blue-500 bg-transparent text-center">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-700 mb-6 italic text-center">
                  "DSPM nos deu visibilidade completa dos nossos dados sensíveis. Agora sabemos exatamente onde estão, quem acessa e como protegê-los adequadamente."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">Ana Silva</p>
                  <p className="text-sm text-gray-600">CISO, TechCorp</p>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div className="p-6 rounded-lg border-2 border-blue-500 bg-transparent text-center">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-700 mb-6 italic text-center">
                  "A conformidade com LGPD ficou muito mais simples. Temos trilhas de auditoria automáticas e relatórios que comprovam nosso controle de dados."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">Carlos Oliveira</p>
                  <p className="text-sm text-gray-600">DPO, InnovaCorp</p>
                </div>
              </div>

              {/* Depoimento 3 */}
              <div className="p-6 rounded-lg border-2 border-blue-500 bg-transparent text-center">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-700 mb-6 italic text-center">
                  "Descobrimos dados sensíveis em lugares que nem sabíamos que existiam. O DSPM transformou nossa postura de segurança de reativa para proativa."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">Maria Santos</p>
                  <p className="text-sm text-gray-600">Diretora de TI, SecureTech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que o Mercado Diz: Análise do Gartner sobre DSPM */}
        <section id="gartner" data-section="gartner" className="py-16 md:py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              O que o Mercado Diz: Análise do Gartner sobre DSPM
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-gray-200">
                <div className="text-center mb-8">
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex text-yellow-400 text-3xl">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                    <span className="ml-3 text-2xl font-bold text-gray-800">Líder</span>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">DSPM é uma das tecnologias emergentes mais importantes para segurança de dados, com um impacto "transformacional" previsto pelo Gartner.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20%</div>
                    <p className="text-gray-700">das organizações terão implementado DSPM até 2026.</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">US$ 2,7 MILHÕES</div>
                    <p className="text-gray-700">é o custo médio de uma violação de dados.</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <blockquote className="text-lg text-gray-700 italic text-center">
                    "DSPM oferece visibilidade e controle sem precedentes sobre dados sensíveis em ambientes de nuvem complexos."
                  </blockquote>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    Fonte: Gartner Hype Cycle™ for Data Security & Forrester "Lessons Learned From The World's Biggest Data Breaches".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" data-section="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('faq')}`}
            style={{
              backgroundImage: 'url(/image/dspm_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Perguntas Frequentes sobre Governança de Dados
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {faqData.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleFaqItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-lg font-semibold text-gray-800 pr-4">
                        {item.question}
                      </span>
                      <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white font-bold transition-transform duration-200 ${openFaqItems[index] ? 'rotate-45' : ''}`}>
                        +
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${openFaqItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-4 pt-2">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="cta-final" data-section="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Pronto para Ter Visibilidade Total dos Seus Dados?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Não deixe seus dados sensíveis invisíveis. A AORKIA ativa plataformas DSPM e transforma incerteza em controle estratégico. Converse com nossos especialistas agora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Falar com Especialista
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Voltar ao Topo
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

