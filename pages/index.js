import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionBackgrounds, setSectionBackgrounds] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Detectar quais seções devem ter background image
      const sections = [
        'valor-imediato',
        'problemas-criticos', 
        'solucoes-especializadas'
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

  return (
    <>
      <Head>
        <title>AORKIA | Resiliência Cibernética e Governança de Dados</title>
        <meta name="description" content="A AORKIA ativa plataformas globais para resiliência cibernética, inteligência operacional e proteção inabalável de dados, convertendo tecnologia de ponta em vantagem competitiva duradoura e valor imediato." />
        <meta name="theme-color" content="#000511" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="min-h-screen bg-white relative">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/video/video_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          
          <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">AORKIA:</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Ativamos tecnologia de ponta para transformar o risco de dados em resiliência inabalável e vantagem competitiva.
            </h1>
            <p className="text-lg md:text-xl mb-10 text-center max-w-4xl mx-auto">
              A AORKIA ativa plataformas globais para resiliência cibernética, inteligência operacional e proteção inabalável de dados, convertendo tecnologia de ponta em vantagem competitiva duradoura e valor imediato.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="#valor-imediato" onClick={(e) => scrollToSection(e, 'valor-imediato')} className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Explore Nossas Soluções
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary transition duration-300">
                Inicie uma Conversa Estratégica
              </Link>
            </div>
          </div>
        </section>

        {/* Sua empresa está vulnerável e você não sabe */}
        <section id="valor-imediato" data-section="valor-imediato" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('valor-imediato')}`}
            style={{
              backgroundImage: 'url(/image/flow_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Sua empresa está vulnerável e você não sabe
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Situação Atual */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-500 shadow-lg">
                    <h3 className="text-2xl font-bold text-red-700 mb-8 text-center">
                      Situação Atual
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-shield-cross-line text-xl text-red-400"></i>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Proteção Ilusória</h4>
                        <p className="text-gray-600 text-center">Acredita que a proteção nativa da Microsoft e Google é suficiente, ignorando as lacunas que podem levar à perda total de dados.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-eye-off-line text-xl text-red-400"></i>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Dados Invisíveis</h4>
                        <p className="text-gray-600 text-center">Dados sensíveis espalhados e sem controlo de quem lhes acede — um convite aberto a fugas de informação e violações da LGPD.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-alarm-warning-line text-xl text-red-400"></i>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Risco de Multas</h4>
                        <p className="text-gray-600 text-center">Exposição constante a multas da LGPD e à paralisia operacional causada por ataques de ransomware.</p>
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-time-line text-xl text-red-400"></i>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Reação Tardia</h4>
                        <p className="text-gray-600 text-center">Opera em modo reativo, descobrindo a perda de dados ou a inconformidade apenas quando o dano já é irreversível.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Com AORKIA */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-500 shadow-lg">
                    <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">
                      Com a AORKIA
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-shield-check-line text-xl text-green-400"></i>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Proteção Real</h4>
                        <p className="text-gray-600 text-center">Implementamos um backup 100% imutável, garantindo a recuperação dos seus dados em qualquer cenário de desastre.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-radar-line text-xl text-green-400"></i>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Governança Ativa</h4>
                        <p className="text-gray-600 text-center">Entregamos governança ativa, com mapeamento e controlo total sobre onde estão os seus dados e quem lhes acede.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-government-line text-xl text-green-400"></i>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Conformidade Garantida</h4>
                        <p className="text-gray-600 text-center">Asseguramos a sua conformidade com a LGPD através de soberania de dados e trilhas de auditoria que simplificam qualquer auditoria.</p>
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                            <i className="ri-lightbulb-line text-xl text-green-400"></i>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Prevenção Inteligente</h4>
                        <p className="text-gray-600 text-center">Mudamos o seu paradigma para a prevenção, com a identificação e mitigação de riscos antes que estes se transformem em crises.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Os Dois Maiores Riscos do Seu Negócio */}
        <section id="problemas-criticos" data-section="problemas-criticos" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('problemas-criticos')}`}
            style={{
              backgroundImage: 'url(/image/flow_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Os Dois Maiores Riscos do Seu Negócio
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Risco 1 */}
              <div className="bg-gradient-to-r from-red-50 to-purple-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="ri-shield-cross-line text-2xl text-red-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">A Ilusão da Proteção Nativa</h3>
                    <p className="text-gray-600 mb-4">A confiança na proteção padrão do Microsoft 365 ou Google Workspace é o primeiro passo para um desastre. Essas ferramentas não foram desenhadas para serem uma solução de backup contra ameaças externas.</p>
                    <p className="text-gray-600 mb-4">A retenção de dados é limitada, a recuperação é complexa e, o mais crítico: elas falham em proteger contra um ataque de ransomware. O resultado? Em caso de ataque, a recuperação é incerta e a continuidade do seu negócio fica refém da sorte.</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                      <p className="text-red-700 font-medium text-center">
                        <strong>Está preparado para essa aposta?</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risco 2 */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-time-line text-2xl text-purple-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">A Bomba-Relógio dos Dados Internos</h3>
                    <p className="text-gray-600 mb-4">A fonte da sua próxima multa da LGPD não virá de um hacker, mas de dentro da sua própria operação. "Shadow Data", acessos indevidos e dados sensíveis espalhados sem qualquer visibilidade.</p>
                    <p className="text-gray-600 mb-4">Você não tem como proteger o que não sabe que existe. O resultado? Multas da LGPD, fugas de dados por erros internos e a perda de confiança de clientes e do mercado.</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                      <p className="text-purple-700 font-medium text-center">
                        <strong>Sabe onde está o seu maior passivo neste exato momento?</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Nossa Resposta Estratégica */}
        <section id="solucoes-especializadas" data-section="solucoes-especializadas" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('solucoes-especializadas')}`}
            style={{
              backgroundImage: 'url(/image/flow_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              A Nossa Resposta Estratégica
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-center text-gray-600 mb-16">
              Nós convertemos tecnologia de ponta em resultados concretos, ativando plataformas globais líderes adaptadas à realidade do seu negócio.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Backup SaaS Estratégico */}
              <div className="p-6 rounded-lg border-2 border-green-500 bg-transparent text-center">
                <div className="text-4xl text-green-600 mb-4">
                  <i className="ri-safe-2-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Backup SaaS Estratégico</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Ativamos a plataforma líder de backup imutável para garantir que o seu negócio nunca pare. Seus dados ficam protegidos numa nuvem independente, à prova de ransomware.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
                  <p className="text-sm font-semibold text-green-800 mb-2">
                    Para o Risco da Proteção Ilusória:
                  </p>
                  <p className="text-sm font-medium text-green-700 mb-1">
                    ✓ Recuperação instantânea
                  </p>
                  <p className="text-sm font-medium text-green-700 mb-1">
                    ✓ Soberania de dados no Brasil
                  </p>
                  <p className="text-sm font-medium text-green-700">
                    ✓ Economia com licenças
                  </p>
                </div>

                <Link href="/backup_saas_estrategico" className="inline-block w-full text-center py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-300 bg-green-600 hover:bg-green-700">
                  Conhecer a Solução de Backup →
                </Link>
              </div>

              {/* Governança de Dados */}
              <div className="p-6 rounded-lg border-2 border-purple-500 bg-transparent text-center">
                <div className="text-4xl text-purple-600 mb-4">
                  <i className="ri-radar-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Governança de Dados</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Implementamos uma governança ativa para transformar "dados invisíveis" em ativos protegidos. Descobrimos, classificamos e protegemos seus dados sensíveis.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
                  <p className="text-sm font-semibold text-purple-800 mb-2">
                    Para o Risco da Bomba-Relógio Interna:
                  </p>
                  <p className="text-sm font-medium text-purple-700 mb-1">
                    ✓ Visibilidade total sobre dados
                  </p>
                  <p className="text-sm font-medium text-purple-700 mb-1">
                    ✓ Prevenção contra fugas
                  </p>
                  <p className="text-sm font-medium text-purple-700">
                    ✓ Conformidade com a LGPD
                  </p>
                </div>

                <Link href="/governanca_dados_sensiveis" className="inline-block w-full text-center py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-300 bg-purple-600 hover:bg-purple-700">
                  Conhecer a Solução de Governança →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="cta-final" data-section="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-primary to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Pronto para Transformar Risco em Resiliência?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Não deixe seus dados vulneráveis. A AORKIA ativa as melhores plataformas globais e implementa a proteção estratégica que sua empresa precisa. Converse com nossos especialistas agora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Inicie uma Conversa Estratégica
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

