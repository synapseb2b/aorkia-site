import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // --- INÍCIO: Hooks para efeito de transição de fundo ---
  const [isValorImediatoVisible, setIsValorImediatoVisible] = useState(false);
  const [isProblemasCriticosVisible, setIsProblemasCriticosVisible] = useState(false);
  const [isSolucoesVisible, setIsSolucoesVisible] = useState(false);

  const valorImediatoRef = useRef(null);
  const problemasCriticosRef = useRef(null);
  const solucoesRef = useRef(null);

  useEffect(() => {
    const createObserver = (ref, setState) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 } // Ativa quando 10% da seção está visível
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    };

    createObserver(valorImediatoRef, setIsValorImediatoVisible);
    createObserver(problemasCriticosRef, setIsProblemasCriticosVisible);
    createObserver(solucoesRef, setIsSolucoesVisible);
  }, []);
  // --- FIM: Hooks para efeito de transição de fundo ---


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

  // Função para rolagem suave ao clicar em "Ver nosso trabalho"
  const scrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('valor-imediato');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>AORKIA | Resiliência Cibernética, Inteligência Operacional e Proteção de Dados. Ativamos tecnologia de ponta para resultados reais.</title>
        <meta name="description" content="A AORKIA ativa plataformas globais para resiliência cibernética, inteligência operacional e proteção inabalável de dados, convertendo tecnologia de ponta em vantagem competitiva duradoura e valor imediato." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - VÍDEO CORRIGIDO */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0"
            preload="auto"
          >
            <source src="/video/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                AORKIA:
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Ativamos tecnologia de ponta para transformar o risco de dados em resiliência inabalável e vantagem competitiva.
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="#valor-imediato"
                  onClick={scrollToWork}
                  className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Explore Nossas Soluções
                </Link>
                <Link
                  href="/contato"
                  className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Inicie uma Conversa Estratégica
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 1: Valor Imediato - Pirâmide Invertida */}
        <div className="relative">
          <div
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isValorImediatoVisible ? 'opacity-10' : 'opacity-0'}`}
            style={{
              backgroundImage: 'url(/image/risco.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <section ref={valorImediatoRef} id="valor-imediato" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
                Sua empresa está vulnerável e você não sabe
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Situação Atual */}
                  <div className="relative h-full">
                    <div className="bg-transparent rounded-2xl p-8 border-2 border-red-500 shadow-lg h-full">
                      <h3 className="text-2xl font-bold text-red-700 mb-8 text-center">
                        Situação Atual da Maioria das Empresas
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Proteção Ilusória:</h4>
                          <p className="text-gray-600 text-center">Confia apenas na proteção nativa do Microsoft 365 e Google Workspace.</p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Dados Invisíveis:</h4>
                          <p className="text-gray-600 text-center">Não sabe onde estão os dados sensíveis nem quem tem acesso a eles.</p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Risco de Multas:</h4>
                          <p className="text-gray-600 text-center">Vulnerável a multas da LGPD e perda de dados por ransomware.</p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Reação Tardia:</h4>
                          <p className="text-gray-600 text-center">Só descobre problemas quando já é tarde demais.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Com AORKIA */}
                  <div className="relative h-full">
                    <div className="bg-transparent rounded-2xl p-8 border-2 border-green-500 shadow-lg h-full">
                      <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">
                        Com a AORKIA
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Proteção Real:</h4>
                          <p className="text-gray-600 text-center">Backup imutável e recuperação garantida em qualquer cenário.</p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Visibilidade Total:</h4>
                          <p className="text-gray-600 text-center">Controle completo sobre localização e acesso aos dados sensíveis.</p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Conformidade Garantida:</h4>
                          <p className="text-gray-600 text-center">Atendimento automático à LGPD com trilhas de auditoria completas.</p>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Prevenção Inteligente:</h4>
                          <p className="text-gray-600 text-center">Identificação e mitigação de riscos antes que se tornem problemas.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <Link 
                    href="#problemas-criticos" 
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 inline-flex items-center"
                  >
                    Veja os Riscos Específicos
                    <i className="ri-arrow-down-line ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Seção 2: Problemas Críticos */}
        <div className="relative">
           <div
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isProblemasCriticosVisible ? 'opacity-10' : 'opacity-0'}`}
            style={{
              backgroundImage: 'url(/image/risco.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <section ref={problemasCriticosRef} id="problemas-criticos" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                Os Dois Maiores Riscos do Seu Negócio
              </h2>
              <p className="text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">
                Enquanto você foca no crescimento, estes riscos silenciosos podem destruir anos de trabalho em questão de horas.
              </p>
              
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Risco 1: Backup SaaS */}
                <div className="bg-transparent rounded-2xl p-8 shadow-lg border-2 border-[#00683f] hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-shield-cross-line text-2xl text-red-600"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Sua proteção de dados SaaS é uma ilusão
                    </h3>
                    <p className="text-red-600 font-semibold">Backup SaaS Estratégico</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-circle-line text-red-500 text-xl mt-1"></i>
                      <p className="text-gray-600">Proteção nativa do Microsoft 365 falha contra ransomware</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-circle-line text-red-500 text-xl mt-1"></i>
                      <p className="text-gray-600">Retenção limitada (30-90 dias) é insuficiente</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-circle-line text-red-500 text-xl mt-1"></i>
                      <p className="text-gray-600">Recuperação complexa sem garantias de integridade</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#00683f]/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Image 
                        src="/icon/keepit_logo_aorkia.png" 
                        alt="Keepit AORKIA" 
                        className="h-8 w-auto"
                        width={120}
                        height={32}
                      />
                    </div>
                    <p className="text-sm text-gray-700">Backup imutável com recuperação instantânea e soberania de dados no Brasil.</p>
                  </div>
                  
                  <Link 
                    href="/backup_saas_estrategico" 
                    className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-300"
                  >
                    Veja Como a Proteção Nativa Falha
                  </Link>
                </div>

                {/* Risco 2: DSPM */}
                <div className="bg-transparent rounded-2xl p-8 shadow-lg border-2 border-[#a855f7] hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-eye-off-line text-2xl text-orange-600"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      A fonte da sua próxima multa da LGPD já existe
                    </h3>
                    <p className="text-orange-600 font-semibold">Governança Estratégica de Dados Sensíveis</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-circle-line text-orange-500 text-xl mt-1"></i>
                      <p className="text-gray-600">Dados sensíveis espalhados sem ampla visibilidade</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-circle-line text-orange-500 text-xl mt-1"></i>
                      <p className="text-gray-600">"Shadow data" criado fora dos controles de TI</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-close-circle-line text-orange-500 text-xl mt-1"></i>
                      <p className="text-gray-600">Acesso não controlado a informações críticas</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#a855f7]/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <i className="ri-shield-check-line text-blue-600 text-2xl"></i>
                      <span className="font-semibold text-blue-800 text-lg">DSPM</span>
                    </div>
                    <p className="text-sm text-gray-700">Descoberta, classificação e proteção automática de dados sensíveis em qualquer nuvem.</p>
                  </div>
                  
                  <Link 
                    href="/governanca_dados_sensiveis" 
                    className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-300"
                  >
                    Veja Riscos que Você Não Enxerga
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Seção 3: Soluções Especializadas */}
        <div className="relative">
          <div
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isSolucoesVisible ? 'opacity-10' : 'opacity-0'}`}
            style={{
              backgroundImage: 'url(/image/solucoes_especializadas.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <section ref={solucoesRef} id="solucoes-especializadas" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                  Como a AORKIA Transforma Risco em Vantagem Competitiva
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Não vendemos ferramentas. Ativamos plataformas globais líderes com consultoria estratégica para gerar resultados reais e mensuráveis.
                </p>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                      Nossa Abordagem Diferenciada
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                        <div>
                          <h4 className="font-semibold text-gray-800">Curadoria Estratégica</h4>
                          <p className="text-gray-600">Selecionamos apenas as melhores plataformas globais para cada necessidade específica.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                        <div>
                          <h4 className="font-semibold text-gray-800">Implementação Otimizada</h4>
                          <p className="text-gray-600">Configuramos e integramos as soluções ao seu ecossistema existente.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                        <div>
                          <h4 className="font-semibold text-gray-800">Suporte Contínuo</h4>
                          <p className="text-gray-600">Garantimos que você extraia o máximo valor com suporte especializado em português.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="ri-rocket-line text-3xl text-white"></i>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Resultado Garantido</h4>
                      <p className="text-gray-600">
                        Transformamos tecnologia complexa em vantagem competitiva real, com ROI comprovado e conformidade garantida.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="#transformacao-garantida" 
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 inline-flex items-center"
                  >
                    Veja o Resultado Final
                    <i className="ri-arrow-down-line ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Seção 4: Transformação Garantida */}
        <section id="transformacao-garantida" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: 'url(/image/futuro.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Tecnologia de Ponta.<br />
                Vantagem Competitiva.
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                Sua empresa ganha proteção inabalável de dados, continuidade operacional e governança estratégica com a AORKIA.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Proteção Inabalável</h3>
                  <p className="text-gray-400">Backup imutável e recuperação garantida contra qualquer ameaça.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-eye-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Visibilidade Total</h3>
                  <p className="text-gray-400">Controle completo sobre todos os dados sensíveis da empresa.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-award-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Conformidade Garantida</h3>
                  <p className="text-gray-400">Atendimento automático à LGPD e outras regulamentações.</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8">
                Nós convertemos tecnologia de ponta em resultados concretos, ativando plataformas globais líderes adaptadas à realidade do seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link 
                  href="/contato" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 inline-flex items-center"
                >
                  Inicie uma Conversa Estratégica
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                <Link 
                  href="#valor-imediato" 
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-black transition duration-300"
                >
                  Revisar Benefícios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}