import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef({});

  // IntersectionObserver para detectar seções visíveis
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            setActiveSection(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.3,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Monitorar progresso de rolagem
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
        {/* Seção Hero (INTOCADA) */}
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
        <section 
          id="valor-imediato"
          data-section-id="valor-imediato"
          ref={(el) => (sectionRefs.current['valor-imediato'] = el)}
          className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden"
        >
          {/* Background com transição da imagem risco */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'valor-imediato' ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/risco.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-[#000511] to-[#021028] transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'valor-imediato' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Sua empresa está vulnerável<br />
                <span className="text-red-400">e você não sabe</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Coluna: Situação Atual */}
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                    <i className="ri-error-warning-line text-3xl text-red-400"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-red-400 mb-4">Situação Atual</h3>
                  <p className="text-gray-400 text-lg">A realidade oculta da maioria das empresas</p>
                </div>

                <div className="space-y-6">
                  <div className="group p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-900/10 to-red-800/5 backdrop-blur-lg hover:border-red-500/60 hover:bg-red-900/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                        <i className="ri-shield-cross-line text-xl text-red-400"></i>
                      </div>
                      <div className="text-center flex-1">
                        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-red-100 transition-colors">Proteção Ilusória</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">Acredita que a proteção nativa da Microsoft e Google é suficiente, ignorando as lacunas que podem levar à perda total de dados.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-900/10 to-red-800/5 backdrop-blur-lg hover:border-red-500/60 hover:bg-red-900/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                        <i className="ri-eye-off-line text-xl text-red-400"></i>
                      </div>
                      <div className="text-center flex-1">
                        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-red-100 transition-colors">Dados Invisíveis</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">Dados sensíveis espalhados e sem controlo de quem lhes acede — um convite aberto a fugas de informação e violações da LGPD.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-900/10 to-red-800/5 backdrop-blur-lg hover:border-red-500/60 hover:bg-red-900/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                        <i className="ri-alarm-warning-line text-xl text-red-400"></i>
                      </div>
                      <div className="text-center flex-1">
                        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-red-100 transition-colors">Risco de Multas</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">Exposição constante a multas da LGPD e à paralisia operacional causada por ataques de ransomware.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-900/10 to-red-800/5 backdrop-blur-lg hover:border-red-500/60 hover:bg-red-900/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                        <i className="ri-time-line text-xl text-red-400"></i>
                      </div>
                      <div className="text-center flex-1">
                        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-red-100 transition-colors">Reação Tardia</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">Opera em modo reativo, descobrindo a perda de dados ou a inconformidade apenas quando o dano já é irreversível.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna: Com AORKIA */}
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <i className="ri-shield-check-line text-3xl text-green-400"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4">Com a AORKIA</h3>
                  <p className="text-gray-400 text-lg">Transformação estratégica e proteção real</p>
                </div>

                <div className="space-y-6">
                  <div className="group p-8 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-900/10 to-green-800/5 backdrop-blur-lg hover:border-green-500/60 hover:bg-green-900/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <i className="ri-shield-check-line text-xl text-green-400"></i>
                      </div>
                      <div className="text-center flex-1">
                        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-green-100 transition-colors">Proteção Real</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">Implementamos um backup 100% imutável, garantindo a recuperação dos seus dados em qualquer cenário de desastre.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-8 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-900/10 to-green-800/5 backdrop-blur-lg hover:border-green-500/60 hover:bg-green-900/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <i className="ri-radar-line text-xl text-green-400"></i>
                      </div>
                      <div className="text-center flex-1">
                        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-green-100 transition-colors">Governança Ativa</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">Entregamos governança ativa, com mapeamento e controlo total sobre onde estão os seus dados e quem lhes acede.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-8 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-900/10 to-green-800/5 backdrop-blur-lg hover:border-green-500/60 hover:bg-green-900/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <i className="ri-government-line text-xl text-green-400"></i>
                      </div>
                      <div className="text-center flex-1">
                        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-green-100 transition-colors">Conformidade Garantida</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">Asseguramos a sua conformidade com a LGPD através de soberania de dados e trilhas de auditoria que simplificam qualquer auditoria.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-8 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-900/10 to-green-800/5 backdrop-blur-lg hover:border-green-500/60 hover:bg-green-900/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <i className="ri-lightbulb-line text-xl text-green-400"></i>
                      </div>
                      <div className="text-center flex-1">
                        <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-green-100 transition-colors">Prevenção Inteligente</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">Mudamos o seu paradigma para a prevenção, com a identificação e mitigação de riscos antes que estes se transformem em crises.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: Os Dois Maiores Riscos */}
        <section 
          id="problemas-criticos"
          data-section-id="problemas-criticos"
          ref={(el) => (sectionRefs.current['problemas-criticos'] = el)}
          className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden"
        >
          {/* Background com transição da imagem risco */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'problemas-criticos' ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/risco.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-[#000511] to-[#021028] transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'problemas-criticos' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Os Dois Maiores Riscos<br />
                <span className="text-red-400">do Seu Negócio</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
              
              {/* Risco 1 */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-10 border border-red-500/40 border-t-4 border-t-red-500 hover:bg-gray-900/80 hover:border-red-500/70 transition-all duration-500 shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-3">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6 group-hover:bg-red-500/30 transition-colors">
                      <i className="ri-shield-cross-line text-4xl text-red-400"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">A Ilusão da Proteção Nativa</h3>
                    <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="text-gray-300 space-y-6 text-lg leading-relaxed text-center">
                    <p>A confiança na proteção padrão do Microsoft 365 ou Google Workspace é o primeiro passo para um desastre. Essas ferramentas não foram desenhadas para serem uma solução de backup contra ameaças externas.</p>
                    
                    <p>A retenção de dados é limitada, a recuperação é complexa e, o mais crítico: elas falham em proteger contra um ataque de ransomware. O resultado? Em caso de ataque, a recuperação é incerta e a continuidade do seu negócio fica refém da sorte.</p>
                    
                    <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30 mt-8">
                      <p className="font-bold text-red-300 text-xl text-center">Está preparado para essa aposta?</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risco 2 */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/40 border-t-4 border-t-purple-500 hover:bg-gray-900/80 hover:border-purple-500/70 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-3">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-6 group-hover:bg-purple-500/30 transition-colors">
                      <i className="ri-time-line text-4xl text-purple-400"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">A Bomba-Relógio dos Dados Internos</h3>
                    <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="text-gray-300 space-y-6 text-lg leading-relaxed text-center">
                    <p>A fonte da sua próxima multa da LGPD não virá de um hacker, mas de dentro da sua própria operação. "Shadow Data", acessos indevidos e dados sensíveis espalhados sem qualquer visibilidade.</p>
                    
                    <p>Você não tem como proteger o que não sabe que existe. O resultado? Multas da LGPD, fugas de dados por erros internos e a perda de confiança de clientes e do mercado.</p>
                    
                    <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30 mt-8">
                      <p className="font-bold text-purple-300 text-xl text-center">Sabe onde está o seu maior passivo neste exato momento?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: A Nossa Resposta Estratégica */}
        <section 
          id="solucoes-especializadas"
          data-section-id="solucoes-especializadas"
          ref={(el) => (sectionRefs.current['solucoes-especializadas'] = el)}
          className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden"
        >
          {/* Background com transição da imagem risco */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'solucoes-especializadas' ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/risco.png)` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-[#000511] to-[#021028] transition-opacity duration-800 ease-out z-0 ${
              activeSection === 'solucoes-especializadas' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20 max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                A Nossa Resposta<br />
                <span className="text-primary">Estratégica</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-purple-500 mx-auto rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center">Nós convertemos tecnologia de ponta em resultados concretos, ativando plataformas globais líderes adaptadas à realidade do seu negócio.</p>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
              
              {/* Solução 1 - Backup */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl p-10 flex flex-col border border-green-500/40 hover:border-green-500/80 transition-all duration-500 shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-3 h-full">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6 group-hover:bg-green-500/30 transition-colors">
                      <i className="ri-safe-2-line text-4xl text-green-400"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Backup SaaS Estratégico</h3>
                    <p className="font-semibold text-gray-400 text-lg">Para o Risco da Proteção Ilusória</p>
                    <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
                  </div>

                  <p className="text-gray-300 flex-grow text-lg leading-relaxed text-center mb-8">Ativamos a plataforma líder de backup imutável para garantir que o seu negócio nunca pare. Seus dados ficam protegidos numa nuvem independente, à prova de ransomware.</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-3 text-green-300 text-lg">
                      <i className="ri-checkbox-circle-line text-xl"></i>
                      <span>Recuperação instantânea</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-green-300 text-lg">
                      <i className="ri-checkbox-circle-line text-xl"></i>
                      <span>Soberania de dados no Brasil</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-green-300 text-lg">
                      <i className="ri-checkbox-circle-line text-xl"></i>
                      <span>Economia com licenças</span>
                    </div>
                  </div>

                  <Link href="/backup_saas_estrategico" className="mt-auto block w-full text-center py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#00683f] to-[#005232] hover:from-[#005232] hover:to-[#004028] text-lg shadow-lg hover:shadow-green-500/30 transform hover:scale-105">
                    Conhecer a Solução de Backup <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>

              {/* Solução 2 - Governança */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl p-10 flex flex-col border border-purple-500/40 hover:border-purple-500/80 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-3 h-full">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-6 group-hover:bg-purple-500/30 transition-colors">
                      <i className="ri-radar-line text-4xl text-purple-400"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Governança de Dados</h3>
                    <p className="font-semibold text-gray-400 text-lg">Para o Risco da Bomba-Relógio Interna</p>
                    <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full mt-4"></div>
                  </div>

                  <p className="text-gray-300 flex-grow text-lg leading-relaxed text-center mb-8">Implementamos uma governança ativa para transformar "dados invisíveis" em ativos protegidos. Descobrimos, classificamos e protegemos seus dados sensíveis.</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-3 text-purple-300 text-lg">
                      <i className="ri-checkbox-circle-line text-xl"></i>
                      <span>Visibilidade total sobre dados</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-purple-300 text-lg">
                      <i className="ri-checkbox-circle-line text-xl"></i>
                      <span>Prevenção contra fugas</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-purple-300 text-lg">
                      <i className="ri-checkbox-circle-line text-xl"></i>
                      <span>Conformidade com a LGPD</span>
                    </div>
                  </div>

                  <Link href="/governanca_dados_sensiveis" className="mt-auto block w-full text-center py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#5e17eb] to-[#4b13b9] hover:from-[#4b13b9] hover:to-[#3a0f94] text-lg shadow-lg hover:shadow-purple-500/30 transform hover:scale-105">
                    Conhecer a Solução de Governança <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Central */}
            <div className="text-center mt-24">
              <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary to-green-500">
                <Link href="/contato" className="bg-[#000511] hover:bg-transparent text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-primary/40 transform hover:scale-105">
                  Inicie uma Conversa Estratégica <i className="ri-arrow-right-line ml-3 text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

