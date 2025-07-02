import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Hooks para efeito de transição de fundo
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
          setState(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    };

    createObserver(valorImediatoRef, setIsValorImediatoVisible);
    createObserver(problemasCriticosRef, setIsProblemasCriticosVisible);
    createObserver(solucoesRef, setIsSolucoesVisible);
  }, []);

  const scrollToWork = (e) => {
    e.preventDefault();
    document.getElementById('valor-imediato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Head>
        <title>AORKIA | Resiliência Cibernética e Governança de Dados</title>
        <meta name="description" content="A AORKIA ativa plataformas globais para resiliência cibernética, inteligência operacional e proteção inabalável de dados, convertendo tecnologia de ponta em vantagem competitiva duradoura e valor imediato." />
        <meta name="theme-color" content="#000511" />
      </Head>

      <main className="bg-gradient-to-b from-[#000511] to-[#021028] text-gray-200">
        {/* Seção Hero */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0" preload="auto">
            <source src="/video/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="container mx-auto max-w-6xl px-4 relative z-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">AORKIA:</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white">
                Ativamos tecnologia de ponta para transformar o risco de dados em resiliência inabalável e vantagem competitiva.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="#valor-imediato" onClick={scrollToWork} className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
                  Explore Nossas Soluções
                </Link>
                <Link href="/contato" className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">
                  Inicie uma Conversa Estratégica
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 1: Sua empresa está vulnerável */}
        <div className="relative">
          <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isValorImediatoVisible ? 'opacity-5' : 'opacity-0'}`} style={{ backgroundImage: 'url(/image/risco.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <section ref={valorImediatoRef} id="valor-imediato" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                Sua empresa está vulnerável e você não sabe
              </h2>
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                
                {/* Situação Atual */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">Situação Atual da Maioria das Empresas</h3>
                  <div className="p-6 rounded-xl border border-red-500/50 bg-red-900/20 backdrop-blur-md hover:border-red-500/80 hover:bg-red-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-center mb-2 text-white">Proteção Ilusória</h4>
                    <p className="text-justify font-normal text-gray-300">Acredita que a proteção nativa da Microsoft e Google é suficiente, ignorando as lacunas que podem levar à perda total de dados.</p>
                  </div>
                  <div className="p-6 rounded-xl border border-red-500/50 bg-red-900/20 backdrop-blur-md hover:border-red-500/80 hover:bg-red-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-center mb-2 text-white">Dados Invisíveis</h4>
                    <p className="text-justify font-normal text-gray-300">Dados sensíveis espalhados e sem controlo de quem lhes acede — um convite aberto a fugas de informação e violações da LGPD.</p>
                  </div>
                  <div className="p-6 rounded-xl border border-red-500/50 bg-red-900/20 backdrop-blur-md hover:border-red-500/80 hover:bg-red-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-center mb-2 text-white">Risco de Multas</h4>
                    <p className="text-justify font-normal text-gray-300">Exposição constante a multas da LGPD e à paralisia operacional causada por ataques de ransomware.</p>
                  </div>
                  <div className="p-6 rounded-xl border border-red-500/50 bg-red-900/20 backdrop-blur-md hover:border-red-500/80 hover:bg-red-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-center mb-2 text-white">Reação Tardia</h4>
                    <p className="text-justify font-normal text-gray-300">Opera em modo reativo, descobrindo a perda de dados ou a inconformidade apenas quando o dano já é irreversível.</p>
                  </div>
                </div>

                {/* Com AORKIA */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Com a AORKIA</h3>
                  <div className="p-6 rounded-xl border border-green-500/50 bg-green-900/20 backdrop-blur-md hover:border-green-500/80 hover:bg-green-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-center mb-2 text-white">Proteção Real</h4>
                    <p className="text-justify font-normal text-gray-300">Implementamos um backup 100% imutável, garantindo a recuperação dos seus dados em qualquer cenário de desastre.</p>
                  </div>
                  <div className="p-6 rounded-xl border border-green-500/50 bg-green-900/20 backdrop-blur-md hover:border-green-500/80 hover:bg-green-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-center mb-2 text-white">Governança Ativa</h4>
                    <p className="text-justify font-normal text-gray-300">Entregamos governança ativa, com mapeamento e controlo total sobre onde estão os seus dados e quem lhes acede.</p>
                  </div>
                  <div className="p-6 rounded-xl border border-green-500/50 bg-green-900/20 backdrop-blur-md hover:border-green-500/80 hover:bg-green-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-center mb-2 text-white">Conformidade Garantida</h4>
                    <p className="text-justify font-normal text-gray-300">Asseguramos a sua conformidade com a LGPD através de soberania de dados e trilhas de auditoria que simplificam qualquer auditoria.</p>
                  </div>
                  <div className="p-6 rounded-xl border border-green-500/50 bg-green-900/20 backdrop-blur-md hover:border-green-500/80 hover:bg-green-900/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-center mb-2 text-white">Prevenção Inteligente</h4>
                    <p className="text-justify font-normal text-gray-300">Mudamos o seu paradigma para a prevenção, com a identificação e mitigação de riscos antes que estes se transformem em crises.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Seção 2: Os Dois Maiores Riscos */}
        <div className="relative">
          <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isProblemasCriticosVisible ? 'opacity-5' : 'opacity-0'}`} style={{ backgroundImage: 'url(/image/risco.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <section ref={problemasCriticosRef} id="problemas-criticos" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
                Os Dois Maiores Riscos do Seu Negócio
              </h2>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Card 1 */}
                <div className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-8 border border-red-500/50 border-t-4 border-t-red-500 hover:bg-gray-900/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">A Ilusão da Proteção Nativa</h3>
                  <div className="text-justify text-gray-300 space-y-4">
                    <p>A confiança na proteção padrão do Microsoft 365 ou Google Workspace é o primeiro passo para um desastre.</p>
                    <p>Essas ferramentas não foram desenhadas para serem uma solução de backup contra ameaças externas.</p>
                    <p>A retenção de dados é limitada, a recuperação é complexa e, o mais crítico: elas falham em proteger contra um ataque de ransomware, que pode encriptar e tornar inúteis todos os seus dados operacionais.</p>
                    <p>O resultado? Em caso de ataque, a recuperação é incerta e a continuidade do seu negócio fica refém da sorte.</p>
                    <p className="font-semibold text-red-300">Está preparado para essa aposta?</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/50 border-t-4 border-t-purple-500 hover:bg-gray-900/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">A Bomba-Relógio dos Dados Internos</h3>
                  <div className="text-justify text-gray-300 space-y-4">
                    <p>A fonte da sua próxima multa da LGPD não virá de um hacker, mas de dentro da sua própria operação.</p>
                    <p>Departamentos criam bases de dados paralelas sem o controlo da TI ("Shadow Data"), funcionários têm acesso a informações críticas que não deveriam e dados sensíveis de clientes estão espalhados sem qualquer visibilidade.</p>
                    <p>Você não tem como proteger o que não sabe que existe.</p>
                    <p>O resultado? Multas da LGPD, fugas de dados por erros internos e a perda de confiança de clientes e do mercado.</p>
                    <p className="font-semibold text-purple-300">Sabe onde está o seu maior passivo neste exato momento?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Seção 3: A Nossa Resposta Estratégica */}
        <div className="relative">
          <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isSolucoesVisible ? 'opacity-5' : 'opacity-0'}`} style={{ backgroundImage: 'url(/image/risco.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <section ref={solucoesRef} id="solucoes-especializadas" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Nossa Resposta Estratégica para Cada Risco</h2>
                <p className="text-xl text-gray-300">Nós convertemos tecnologia de ponta em resultados concretos, ativando plataformas globais líderes adaptadas à realidade do seu negócio.</p>
              </div>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Card 1 - Backup */}
                <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 flex flex-col border border-green-500/50 hover:border-green-500/80 transition-all duration-300">
                  <div className="text-center mb-6">
                    <i className="ri-safe-2-line text-5xl text-green-400"></i>
                    <h3 className="text-2xl font-bold text-white mt-4">Backup SaaS Estratégico</h3>
                    <p className="font-semibold text-gray-400 mt-1">Para o Risco da Proteção Ilusória</p>
                  </div>
                  <p className="text-justify text-gray-300 flex-grow">Ativamos a plataforma líder de backup imutável para garantir que o seu negócio nunca pare. Seus dados do Microsoft 365, Google Workspace e outras aplicações SaaS ficam protegidos numa nuvem independente e isolada, à prova de ransomware e erros humanos.</p>
                  <div className="my-6 space-y-2 text-green-300">
                    <p>✓ Recuperação instantânea após um ataque.</p>
                    <p>✓ Soberania de dados com backup no Brasil.</p>
                    <p>✓ Economia com licenças de ex-funcionários.</p>
                  </div>
                  <Link href="/backup_saas_estrategico" className="mt-auto block w-full text-center py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-300 bg-[#00683f] hover:bg-[#005232]">
                    Conhecer a Solução de Backup SaaS &gt;
                  </Link>
                </div>

                {/* Card 2 - Governança */}
                <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 flex flex-col border border-purple-500/50 hover:border-purple-500/80 transition-all duration-300">
                  <div className="text-center mb-6">
                    <i className="ri-radar-line text-5xl text-purple-400"></i>
                    <h3 className="text-2xl font-bold text-white mt-4">Governança Estratégica de Dados</h3>
                    <p className="font-semibold text-gray-400 mt-1">Para o Risco da Bomba-Relógio Interna</p>
                  </div>
                  <p className="text-justify text-gray-300 flex-grow">Implementamos uma estratégia de governança ativa para transformar os seus "dados invisíveis" em ativos protegidos e em conformidade. Descobrimos, classificamos e protegemos os seus dados sensíveis, onde quer que eles estejam.</p>
                  <div className="my-6 space-y-2 text-purple-300">
                    <p>✓ Visibilidade total sobre dados sensíveis.</p>
                    <p>✓ Prevenção contra fugas de informação.</p>
                    <p>✓ Conformidade contínua com a LGPD.</p>
                  </div>
                  <Link href="/governanca_dados_sensiveis" className="mt-auto block w-full text-center py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-300 bg-[#5e17eb] hover:bg-[#4b13b9]">
                    Conhecer a Solução de Governança &gt;
                  </Link>
                </div>
              </div>
              <div className="text-center mt-16">
                <Link href="/contato" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 inline-flex items-center">
                  Inicie uma Conversa Estratégica <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}