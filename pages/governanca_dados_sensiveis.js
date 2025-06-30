import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function GovernancaDadosSensiveis() {
  const [activeSection, setActiveSection] = useState('dspm');
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);
  const [activePart, setActivePart] = useState(null); // Para controlar qual parte está ativa
  const selectorRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Soluções com nova ordem e textos atualizados
  const solutions = [
    {
      id: 'dspm',
      title: 'Governança Estratégica de Dados Sensíveis',
      supportText: 'Visibilidade Total. Controle Inteligente. Proteção de Dados em Qualquer Nuvem.',
      subtitle: 'Seus dados sensíveis estão espalhados em múltiplas nuvens — e você não tem visibilidade real sobre onde estão, quem acessa ou o quão expostos estão? A AORKIA ativa plataformas DSPM para descobrir, classificar e proteger dados críticos em tempo real, com controle contínuo e conformidade garantida.',
      video: '/video/DSPM_AORKIA.mp4',
      mythTitle: 'O Mito da Segurança Perimetral: Você Realmente Sabe Onde Estão Seus Dados?',
      mythContent: 'Muitos gestores ainda acreditam que firewalls, antivírus e ferramentas tradicionais de segurança são suficientes para proteger dados sensíveis em ambientes de nuvem. O mito é que "se tenho controle de acesso, meus dados estão seguros" ou que as ferramentas de segurança existentes oferecem visibilidade completa. A verdade é que essas soluções focam no perímetro e na proteção de rede, mas não revelam que seus dados mais sensíveis podem estar acessíveis sem visibilidade, controle ou proteção eficaz.',
      mythHighlight: 'É uma falsa sensação de controle que expõe sua organização a riscos invisíveis de vazamento ou penalidade, até que seja tarde demais.',
      solutionTitle: 'DSPM Inteligente: Visibilidade, Controle e Proteção Real de Dados.',
      features: [
        {
          icon: 'ri-search-eye-line',
          title: 'Descoberta e Classificação Inteligente de Dados Sensíveis',
          description: 'Mapeamento automático de todos os dados confidenciais — até os invisíveis ("shadow data") — em SaaS, IaaS, PaaS e ambientes híbridos.'
        },
        {
          icon: 'ri-bar-chart-grouped-line',
          title: 'Priorização Real de Riscos com Contexto',
          description: 'Entenda quem acessa, como os dados são usados e onde estão vulneráveis — para agir no que realmente importa.'
        },
        {
          icon: 'ri-shield-check-line',
          title: 'Correção Automatizada e Conformidade Simples',
          description: 'Remediação guiada ou automatizada. Conformidade com LGPD, GDPR, HIPAA com trilhas de auditoria completas.'
        },
        {
          icon: 'ri-cloud-line',
          title: 'Segurança Integrada à Sua Infraestrutura Cloud',
          description: 'Proteja aplicações nativas da nuvem com uma visão unificada de dados, permissões e riscos em tempo real.'
        }
      ],
      differentialTitle: 'Por que ativar DSPM com AORKIA?',
      differentialSubtitle: 'Entregamos Visibilidade Estratégica e Ação Concreta',
      differentialContent: 'Enquanto outras soluções apenas geram alertas, a AORKIA transforma dados em ação concreta. Ativamos as melhores plataformas DSPM do mercado e orquestramos sua proteção de dados com inteligência, contexto e precisão contínua.',
      processTitle: 'Sua Visibilidade de Dados: Nosso Processo Estruturado.',
      processSteps: [
        {
          title: 'Mapeamento Completo de Riscos e Dados Sensíveis',
          description: 'Descoberta abrangente de todos os dados críticos e avaliação de vulnerabilidades em seu ambiente.'
        },
        {
          title: 'Integração com sua Estratégia de Segurança e Compliance',
          description: 'Alinhamento das políticas DSPM com seus frameworks de segurança e requisitos regulatórios existentes.'
        },
        {
          title: 'Automação da Remediação com Visibilidade Contínua',
          description: 'Implementação de correções automatizadas e monitoramento em tempo real para proteção proativa.'
        },
        {
          title: 'Capacitação da Equipe + Suporte Estratégico AORKIA',
          description: 'Treinamento especializado e suporte contínuo para maximizar o valor da sua estratégia de proteção de dados.'
        }
      ],
      risksTitle: 'A Inação tem um Custo Alto: Não Deixe Seus Dados Invisíveis.',
      risks: [
        'Informações de clientes expostas sem rastreamento, comprometendo confiança e reputação.',
        'Violações com impacto regulatório (LGPD, GDPR), resultando em multas significativas.',
        'Perda de propriedade intelectual e reputação por vazamentos não detectados.',
        'Equipes paralisadas por alertas sem ação, desperdiçando recursos e tempo.'
      ],
      ctaText: 'Segurança de dados não é só sobre firewalls — é sobre saber exatamente o que está exposto, onde e por quê. Converse com nossos especialistas e transforme visibilidade em segurança real.',
      // Imagens para cada parte da seção
      images: {
        intro: '/image/dspm.png',
        myth: '/image/dspm.png',
        solution: '/image/dspm.png',
        differential: '/image/dspm.png',
        process: '/image/dspm.png',
        risks: '/image/dspm.png',
        cta: '/image/dspm.png'
      }
    }
  ];

  // Funções para controle de touch no mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && selectedSolutionIndex < solutions.length - 1) {
      setSelectedSolutionIndex(selectedSolutionIndex + 1);
    }
    if (isRightSwipe && selectedSolutionIndex > 0) {
      setSelectedSolutionIndex(selectedSolutionIndex - 1);
    }
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const index = solutions.findIndex(sol => sol.id === sectionId);
    setSelectedSolutionIndex(index);
    setActivePart(null); // Resetar a parte ativa ao mudar de seção
  };

  const handlePartClick = (partId) => {
    setActivePart(partId);
  };

  useEffect(() => {
    if (selectorRef.current) {
      const activeElement = selectorRef.current.querySelector(`.solution-selector-item[data-id="${activeSection}"]`);
      if (activeElement) {
        selectorRef.current.scrollTo({
          left: activeElement.offsetLeft - (selectorRef.current.offsetWidth / 2) + (activeElement.offsetWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection]);

  const currentSolution = solutions[selectedSolutionIndex];

  return (
    <>
      <Head>
        <title>AORKIA | Governança Estratégica de Dados Sensíveis</title>
        <meta name="description" content="A AORKIA ativa plataformas DSPM para descobrir, classificar e proteger dados críticos em tempo real, com controle contínuo e conformidade garantida." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/video/DSPM_AORKIA.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up">
              A fonte da sua próxima multa da LGPD já existe.
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up animation-delay-200">
              Dados sensíveis e dados criados por IA estão espalhados em múltiplas nuvens — e você não tem visibilidade real sobre onde estão, quem acessa ou o quão expostos estão. A responsabilidade final é sempre sua.
            </h2>
            <p className="text-lg md:text-xl mb-10 animate-fade-in-up animation-delay-400">
              A AORKIA ativa plataformas DSPM para descobrir, classificar e proteger dados críticos em tempo real, com controle contínuo e conformidade garantida.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-600">
              <Link href="#risco-real" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Veja a Falha na Prática
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Agendar Demonstração Estratégica
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: O Risco Real por Trás da Proteção Nativa */}
        <section id="risco-real" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/dspm_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              O Risco Real por Trás da Proteção Nativa
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Coluna 1: Ferramentas Nativas */}
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-red-300">
                <h3 className="text-2xl font-semibold text-red-600 mb-6">Ferramentas Nativas (Microsoft 365 / Google)</h3>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Visibilidade de Dados Sensíveis:</strong> Inexistente. Não há mapeamento automático de dados confidenciais em SaaS, IaaS, PaaS e ambientes híbridos.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Classificação de Dados:</strong> Manual e incompleta. Não identifica "shadow data" ou dados criados por IA.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Controle de Acesso Granular:</strong> Lento, manual e complexo. Impossível controlar o acesso a dados sensíveis em tempo real.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Conformidade com LGPD:</strong> Sem garantia de que seus dados sensíveis estão em conformidade com a LGPD.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Coluna 2: DSPM Ativado por AORKIA */}
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-green-300">
                <h3 className="text-2xl font-semibold text-green-600 mb-6">DSPM Ativado por AORKIA</h3>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Descoberta e Classificação Inteligente:</strong> Mapeamento automático de todos os dados confidenciais — até os invisíveis ("shadow data") — em SaaS, IaaS, PaaS e ambientes híbridos.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Priorização Real de Riscos com Contexto:</strong> Entenda quem acessa, como os dados são usados e onde estão vulneráveis — para agir no que realmente importa.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Correção Automatizada e Conformidade Simples:</strong> Remediação guiada ou automatizada. Conformidade com LGPD, GDPR, HIPAA com trilhas de auditoria completas.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Segurança Integrada à Sua Infraestrutura Cloud:</strong> Proteja aplicações nativas da nuvem com uma visão unificada de dados, permissões e riscos em tempo real.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bloco de Destaque Estatístico */}
            <div className="mt-16 bg-blue-700 text-white p-8 rounded-lg shadow-xl text-center">
              <h3 className="text-3xl font-bold mb-4">A LGPD Não Perdoa. A Multa é Sua.</h3>
              <p className="text-xl italic leading-relaxed">
                "A Autoridade Nacional de Proteção de Dados (ANPD) pode aplicar sanções administrativas, incluindo multas de até 2% do faturamento da empresa, limitadas a R$ 50 milhões por infração."
              </p>
              <p className="text-sm mt-4">Fonte: Lei Geral de Proteção de Dados (LGPD)</p>
            </div>
          </div>
        </section>

        {/* Section 3: Não é só Visibilidade. É a Governança que protege o seu negócio. */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/dspm_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
              Não é só Visibilidade. É a Governança que protege o seu negócio.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Diante do desafio de gerenciar dados sensíveis espalhados em múltiplas nuvens e do risco de multas da LGPD, uma simples ferramenta de visibilidade é insuficiente. A resposta precisa ser uma estratégia.
              A AORKIA entrega essa estratégia completa: ativamos plataformas DSPM e implementamos a governança de dados sensíveis que sua empresa precisa.
            </p>

            {/* Grid de Benefícios */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {currentSolution.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl text-blue-600 mb-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para Transformar Visibilidade em Segurança Real?
              </h3>
              <p className="text-lg mb-6">
                Segurança de dados não é só sobre firewalls — é sobre saber exatamente o que está exposto, onde e por quê. Converse com nossos especialistas e transforme visibilidade em segurança real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Falar com Especialista
                </Link>
                <Link
                  href="/"
                  className="inline-block px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

