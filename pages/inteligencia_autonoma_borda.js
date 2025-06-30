import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function InteligenciaAutonomaBorda() {
  const [activeSection, setActiveSection] = useState('bordas');
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);
  const [activePart, setActivePart] = useState(null); // Para controlar qual parte está ativa
  const selectorRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Soluções com nova ordem e textos atualizados
  const solutions = [
    {
      id: 'bordas',
      title: 'Inteligência Autônoma na Borda',
      supportText: 'Decisão Imediata. Eficiência Local. IA no Ponto Crítico.',
      subtitle: 'A AORKIA ativa Plataformas Edge AI que processam dados onde eles nascem — na fábrica, no varejo, em equipamentos remotos — para decisões autônomas, respostas em tempo real e independência da nuvem.',
      video: '/image/Edge_AI_AORKIA.mp4',
      mythTitle: 'O Mito da Centralização Total: Sua IA é Realmente Inteligente?',
      mythContent: 'Muitos gestores, acostumados com a potência da nuvem, acreditam que toda a inteligência e processamento de dados devem residir em data centers remotos. O mito é que a IA de ponta só funciona com grande poder de processamento centralizado, ou que suas operações já são "rápidas o suficiente". A verdade é que a dependência exclusiva da nuvem para cada decisão cria gargalos invisíveis: latência que retarda ações críticas, interrupções por falhas de conectividade e custos crescentes de transmissão de dados. Sua IA pode ser poderosa na nuvem, mas será que ela é realmente inteligente onde a ação acontece – no ponto crítico da sua operação?',
      mythHighlight: 'Confiar apenas na inteligência centralizada na nuvem é como ter um cérebro brilhante desconectado dos reflexos do corpo no momento da ação, roubando sua agilidade e capacidade de inovação no dia a dia.',
      solutionTitle: 'IA Funcional na Borda: Agilidade, Resiliência e Inteligência Operacional.',
      features: [
        {
          icon: 'ri-cpu-line',
          title: 'IA Ativa Onde os Dados Nascem',
          description: 'Decisões automatizadas em tempo real, com latência mínima e impacto máximo, sem depender da conectividade constante com a internet.'
        },
        {
          icon: 'ri-global-line',
          title: 'Escalabilidade Distribuída com Controle Central',
          description: 'Implante e gerencie IA em centenas ou milhares de sites com gestão central estratégica unificada, otimizando custos e eficiência.'
        },
        {
          icon: 'ri-dashboard-3-line',
          title: 'Gestão Unificada de Dispositivos e Aplicações',
          description: 'Controle o ciclo de vida completo de seus sistemas de borda sob uma única interface, abstraindo a complexidade da infraestrutura distribuída.'
        },
        {
          icon: 'ri-shield-check-line',
          title: 'Segurança de Ponta a Ponta',
          description: 'Proteção robusta desde o hardware até a nuvem com criptografia, isolamento e integridade garantida, processando dados localmente para privacidade aprimorada.'
        }
      ],
      differentialTitle: 'Por que ativar Edge AI com AORKIA?',
      differentialSubtitle: 'Entregamos a IA Pronta, Segura e Dimensionada',
      differentialContent: 'Você não precisa entender de infraestrutura distribuída, containers ou gerenciamento de dispositivos. A AORKIA entrega IA funcional na borda — pronta, segura e dimensionada para seu negócio. Ativamos, monitoramos e escalamos junto com você.',
      processTitle: 'Seu Caminho para a Inteligência Autônoma: Nosso Processo Estruturado.',
      processSteps: [
        {
          title: 'Mapeamento dos Casos de Uso Críticos',
          description: 'Avaliação detalhada das suas operações e necessidades para otimização com IA na borda.'
        },
        {
          title: 'Escolha e Integração das Melhores Plataformas Edge AI',
          description: 'Seleção e ativação das tecnologias líderes de mercado, como NVIDIA Jetson ou Azure IoT Edge, adaptadas ao seu ambiente.'
        },
        {
          title: 'Automação do Provisionamento e Orquestração Centralizada',
          description: 'Configuração de fluxos de trabalho para implantação e gerenciamento eficientes em escala, abstraindo a complexidade.'
        },
        {
          title: 'Treinamento, Suporte e Gestão Contínua com Visibilidade Total',
          description: 'Capacitação da sua equipe e suporte especializado AORKIA para máxima performance e resiliência.'
        }
      ],
      risksTitle: 'A Inação tem um Custo Alto: Não Deixe Sua Operação para Trás.',
      risks: [
        'Operações paralisadas por latência ou falta de conectividade, impactando a produtividade.',
        'Falta de resposta imediata em situações críticas, comprometendo segurança ou qualidade.',
        'Custo alto com nuvem centralizada e suporte ineficiente, devido à transmissão constante de dados.',
        'Perda de competitividade em eficiência, personalização e predição no seu segmento.'
      ],
      ctaText: 'Ganhe velocidade, resiliência e inteligência operacional no exato momento em que os dados são gerados. Converse com a AORKIA e veja como ativar decisões autônomas no ponto mais crítico da sua operação.',
      // Imagens para cada parte da seção
      images: {
        intro: '/image/bordas.png',
        myth: '/image/bordas.png',
        solution: '/image/bordas.png',
        differential: '/image/bordas.png',
        process: '/image/bordas.png',
        risks: '/image/bordas.png',
        cta: '/image/bordas.png'
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
        <title>AORKIA | Inteligência Autônoma na Borda</title>
        <meta name="description" content="A AORKIA ativa Plataformas Edge AI que processam dados onde eles nascem — na fábrica, no varejo, em equipamentos remotos — para decisões autônomas, respostas em tempo real e independência da nuvem." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/video/Edge_AI_AORKIA.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up">
              Ganhe velocidade, resiliência e inteligência operacional no exato momento em que os dados são gerados.
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up animation-delay-200">
              A AORKIA ativa Plataformas Edge AI que processam dados onde eles nascem — na fábrica, no varejo, em equipamentos remotos — para decisões autônomas, respostas em tempo real e independência da nuvem.
            </h2>
            <p className="text-lg md:text-xl mb-10 animate-fade-in-up animation-delay-400">
              Sua IA pode ser poderosa na nuvem, mas será que ela é realmente inteligente onde a ação acontece – no ponto crítico da sua operação?
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

        {/* Section 2: O Risco Real por Trás da Centralização Total */}
        <section id="risco-real" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/bordas_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              O Risco Real por Trás da Centralização Total
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Coluna 1: Abordagem Tradicional (Nuvem Centralizada) */}
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-red-300">
                <h3 className="text-2xl font-semibold text-red-600 mb-6">Abordagem Tradicional (Nuvem Centralizada)</h3>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Latência:</strong> Decisões lentas devido à necessidade de enviar dados para a nuvem e aguardar processamento.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Dependência de Conectividade:</strong> Operações paralisadas em caso de falha de internet ou rede.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Custos de Transmissão de Dados:</strong> Escalada de custos com o volume de dados enviados e recebidos da nuvem.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 text-2xl mr-3">❌</span>
                    <div>
                      <strong className="block">Privacidade e Segurança:</strong> Dados sensíveis precisam ser enviados para a nuvem, aumentando a superfície de ataque e preocupações com privacidade.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Coluna 2: Edge AI Ativada por AORKIA */}
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-green-300">
                <h3 className="text-2xl font-semibold text-green-600 mb-6">Edge AI Ativada por AORKIA</h3>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Decisão Imediata:</strong> Processamento de dados na borda, permitindo respostas em tempo real e autonomia operacional.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Resiliência Operacional:</strong> Continuidade das operações mesmo sem conectividade constante com a nuvem.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Otimização de Custos:</strong> Redução de custos com transmissão de dados e infraestrutura de nuvem.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-2xl mr-3">✅</span>
                    <div>
                      <strong className="block">Segurança e Privacidade Aprimoradas:</strong> Processamento de dados sensíveis localmente, minimizando riscos de vazamento.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bloco de Destaque Estatístico */}
            <div className="mt-16 bg-blue-700 text-white p-8 rounded-lg shadow-xl text-center">
              <h3 className="text-3xl font-bold mb-4">A Agilidade é a Nova Moeda. Sua Operação Está Perdendo?</h3>
              <p className="text-xl italic leading-relaxed">
                "Até 2025, mais de 75% dos dados gerados por empresas serão criados e processados fora de um data center centralizado ou nuvem, em comparação com menos de 10% em 2018."
              </p>
              <p className="text-sm mt-4">Fonte: Gartner, "Predicts 2020: The Edge Becomes a Real Place for Computing", 2019</p>
            </div>
          </div>
        </section>

        {/* Section 3: Não é só IA. É a Inteligência que transforma o seu negócio. */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/bordas_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
              Não é só IA. É a Inteligência que transforma o seu negócio.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Diante da necessidade de decisões em tempo real e da crescente geração de dados na borda, uma simples implementação de IA na nuvem é insuficiente. A resposta precisa ser uma estratégia de Edge AI.
              A AORKIA entrega essa estratégia completa: ativamos plataformas Edge AI e implementamos a inteligência autônoma na borda como um pilar fundamental de agilidade e eficiência operacional. O resultado é a garantia de respostas imediatas, otimização de custos e a tranquilidade da autonomia para o seu negócio.
            </p>
            {/* Diagrama de Valor */}
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12 mb-12">
              <Image src="/icon/edge_ai_logo_aorkia.png" alt="Edge AI Logo" width={150} height={50} />
              <span className="text-4xl text-blue-600">+</span>
              <Image src="/logo/logo_aorkia_color_transparent.png" alt="AORKIA Logo" width={150} height={50} />
              <span className="text-4xl text-blue-600">→</span>
              <div className="flex flex-col items-center">
                <i className="ri-cpu-line text-6xl text-green-500 mb-2"></i>
                <p className="text-xl font-semibold text-gray-800">Agilidade e Eficiência Operacional</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Os Pilares da Inteligência na Borda */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/bordas_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Os Pilares da Inteligência na Borda
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 group">
                <div className="text-blue-600 group-hover:text-blue-800 mb-4 text-5xl text-center">
                  <i className="ri-cpu-line"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">IA Ativa Onde os Dados Nascem</h3>
                <p className="text-gray-700 mb-4">
                  Decisões automatizadas em tempo real, com latência mínima e impacto máximo, sem depender da conectividade constante com a internet. Ideal para ambientes com largura de banda limitada.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong className="font-semibold">O que significa para o negócio:</strong> Agilidade operacional sem precedentes, permitindo respostas imediatas a eventos críticos e otimização de processos em tempo real.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 group">
                <div className="text-blue-600 group-hover:text-blue-800 mb-4 text-5xl text-center">
                  <i className="ri-global-line"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Escalabilidade Distribuída com Controle Central</h3>
                <p className="text-gray-700 mb-4">
                  Implante e gerencie IA em centenas ou milhares de sites com gestão central estratégica unificada, otimizando custos e eficiência. Flexibilidade para expandir conforme a necessidade.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong className="font-semibold">O que significa para o negócio:</strong> Redução de custos operacionais e maior controle sobre a infraestrutura de IA, permitindo uma expansão eficiente e gerenciável.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 group">
                <div className="text-blue-600 group-hover:text-blue-800 mb-4 text-5xl text-center">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Segurança de Ponta a Ponta</h3>
                <p className="text-gray-700 mb-4">
                  Proteção robusta desde o hardware até a nuvem com criptografia, isolamento e integridade garantida, processando dados localmente para privacidade aprimorada. Atende aos mais altos padrões de segurança.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong className="font-semibold">O que significa para o negócio:</strong> Redução do risco de vazamento de dados e maior conformidade com regulamentações de privacidade, protegendo a reputação e a confiança dos clientes.
                </p>
              </div>
            </div>

            {/* Grid de Plataformas Suportadas */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Plataformas que ativamos.</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
                <Image src="/icon/nvidia.png" alt="NVIDIA Logo" width={120} height={40} />
                <Image src="/icon/azure_iot_edge.png" alt="Azure IoT Edge Logo" width={120} height={40} />
                <Image src="/icon/aws_iot_greengrass.png" alt="AWS IoT Greengrass Logo" width={120} height={40} />
                <Image src="/icon/google_edge_tpu.png" alt="Google Edge TPU Logo" width={120} height={40} />
                <Image src="/icon/intel_openvino.png" alt="Intel OpenVINO Logo" width={120} height={40} />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3eCkFDVBZTyuw3x99mtoOR25plYf_6OJEsz6U-MrNxcy0weuGp2jaXR72-XEFBgrlMi0tpHtgl?gv=true" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
                Agendar Demo de Edge AI (15 min)
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Construído para os Desafios do Seu Negócio */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/bordas_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Uma Solução. Respostas para Cada Desafio Estratégico.
            </h2>
            {/* Tabs Component */}
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <button
                  className={`px-6 py-3 text-lg font-semibold rounded-t-lg ${activePart === 'agilidade' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => handlePartClick('agilidade')}
                >
                  Agilidade e Resposta em Tempo Real
                </button>
                <button
                  className={`px-6 py-3 text-lg font-semibold rounded-t-lg ${activePart === 'custos' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => handlePartClick('custos')}
                >
                  Otimização de Custos e Eficiência
                </button>
                <button
                  className={`px-6 py-3 text-lg font-semibold rounded-t-lg ${activePart === 'seguranca' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => handlePartClick('seguranca')}
                >
                  Segurança e Privacidade de Dados
                </button>
              </div>

              <div className="bg-white p-8 rounded-b-lg shadow-lg border border-gray-200">
                {activePart === 'agilidade' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Para Agilidade e Resposta em Tempo Real</h3>
                    <p className="text-gray-700 mb-4">
                      <strong className="font-semibold">Desafio:</strong> Como garantir que suas operações respondam instantaneamente a eventos críticos, sem depender da conectividade com a nuvem?
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold">Solução AORKIA:</strong> Ativamos Edge AI para processar dados localmente, eliminando a latência e permitindo decisões autônomas e respostas imediatas, mesmo em ambientes desconectados.
                    </p>
                  </div>
                )}
                {activePart === 'custos' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Para Otimização de Custos e Eficiência</h3>
                    <p className="text-gray-700 mb-4">
                      <strong className="font-semibold">Desafio:</strong> Como reduzir os custos de transmissão de dados e otimizar o uso da infraestrutura de nuvem, mantendo a inteligência operacional?
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold">Solução AORKIA:</strong> Implementamos Edge AI para processar e filtrar dados na borda, enviando apenas informações relevantes para a nuvem, o que reduz significativamente os custos de largura de banda e armazenamento.
                    </p>
                  </div>
                )}
                {activePart === 'seguranca' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Para Segurança e Privacidade de Dados</h3>
                    <p className="text-gray-700 mb-4">
                      <strong className="font-semibold">Desafio:</strong> Como proteger dados sensíveis gerados na borda, garantindo a privacidade e a conformidade com regulamentações como LGPD e GDPR?
                    </p>
                    <p className="text-gray-700">
                      <strong className="font-semibold">Solução AORKIA:</strong> Ativamos Edge AI com recursos de segurança embarcados, processando dados sensíveis localmente e minimizando a exposição a riscos de vazamento, além de garantir a conformidade com as políticas de privacidade.
                    </p>
                  </div>
                )}
                {!activePart && (
                  <div className="text-center text-gray-600">
                    Selecione uma aba para ver os detalhes.
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3eCkFDVBZTyuw3x99mtoOR25plYf_6OJEsz6U-MrNxcy0weuGp2jaXR72-XEFBgrlMi0tpHtgl?gv=true" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
                Agendar Demo de Edge AI (15 min)
              </a>
            </div>
          </div>
        </section>

        {/* Section 6: Confiança Validada pelo Mercado Global */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/bordas_vertical.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
              Confiança Validada pelo Mercado Global
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Na AORKIA, nossa curadoria se baseia em dados. Escolhemos parceiros que são líderes validados não por analistas, mas pelos próprios usuários. Os dados do Gartner Peer Insights de Junho de 2025 confirmam por que a NVIDIA é a nossa escolha para Edge AI.
            </p>

            {/* Logos de Clientes */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Clientes Globais</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center mb-12">
                <Image src="/icon/bmw.png" alt="BMW Logo" width={150} height={50} />
                <Image src="/icon/boeing.png" alt="Boeing Logo" width={150} height={50} />
                <Image src="/icon/philips.png" alt="Philips Logo" width={150} height={50} />
                <Image src="/icon/samsung.png" alt="Samsung Logo" width={150} height={50} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Clientes Nacionais</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
                <Image src="/icon/embraer.png" alt="Embraer Logo" width={150} height={50} />
                <Image src="/icon/weg.png" alt="WEG Logo" width={150} height={50} />
                <Image src="/icon/vale.png" alt="Vale Logo" width={150} height={50} />
                <Image src="/icon/gerdau.png" alt="Gerdau Logo" width={150} height={50} />
              </div>
            </div>

            {/* Depoimentos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="italic text-gray-700 mb-4">
                  "A plataforma NVIDIA Edge AI nos permitiu otimizar nossos processos de fabricação, resultando em ganhos significativos de eficiência."
                </p>
                <p className="font-semibold text-gray-800">Mark Johnson</p>
                <p className="text-sm text-gray-600">Head of Manufacturing, Global Automotive</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="italic text-gray-700 mb-4">
                  "Com a Edge AI da NVIDIA, conseguimos implementar soluções de visão computacional em tempo real, melhorando a segurança e a qualidade em nossas operações."
                </p>
                <p className="font-semibold text-gray-800">Sarah Chen</p>
                <p className="text-sm text-gray-600">Director of Operations, Aerospace</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="italic text-gray-700 mb-4">
                  "A flexibilidade e o desempenho das soluções NVIDIA Edge AI nos permitiram inovar rapidamente e entregar valor aos nossos clientes de forma mais eficiente."
                </p>
                <p className="font-semibold text-gray-800">David Lee</p>
                <p className="text-sm text-gray-600">CTO, Smart Retail Solutions</p>
              </div>
            </div>

            {/* Bloco de Certificações e Whitepapers */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-inner border border-blue-200 text-center">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Recursos e Whitepapers</h3>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="https://www.nvidia.com/en-us/deep-learning-ai/solutions/edge-ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  NVIDIA Edge AI Solutions
                </a>
                <a href="https://www.nvidia.com/en-us/deep-learning-ai/education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  NVIDIA Deep Learning Institute
                </a>
                <a href="https://www.nvidia.com/en-us/deep-learning-ai/resources/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  NVIDIA AI Resources
                </a>
              </div>
              <a href="/documents/guia_completo_edge_ai.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg inline-flex items-center">
                <i className="ri-download-line mr-2"></i> Download eGuide: Guia Completo de Edge AI
              </a>
            </div>
          </div>
        </section>

        {/* Pre-Footer Section */}
        <section className="bg-blue-800 text-white py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para Ativar a Inteligência na Borda?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Não deixe sua operação para trás. Ative a inteligência autônoma e a agilidade que seu negócio precisa com a AORKIA e NVIDIA.
            </p>
            <Link href="/contato" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-lg">
              Fale com um Especialista
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}


