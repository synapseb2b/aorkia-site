import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  // Efeito para simular preloader
  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Sobre a AORKIA | Soluções Estratégicas B2B</title>
        <meta name="description" content="Conheça a AORKIA, empresa especializada em soluções estratégicas para o mercado B2B, com foco em Backup SaaS, Infraestrutura, Segurança Cloud e Receita B2B." />
      </Head>

      {/* Preloader - Estilo Jam3 */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="preloader-content">
            <div className="logo-container mb-8">
              <Image 
                src="/logo_aorkia_white.png" 
                alt="AORKIA" 
                width={280} 
                height={70} 
                className="h-20 w-auto" 
              />
            </div>
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        </div>
      )}

      {/* Indicador de progresso de rolagem */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-40 origin-left" 
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      ></div>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative h-screen overflow-hidden hero flex items-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
                Sobre a <span className="text-primary">AORKIA</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Transformando ambientes críticos em sistemas coordenados, resilientes e escaláveis.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <a href="#historia" className="text-white text-4xl">
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção Nossa História - Estilo Jam3 */}
        <section id="historia" className="py-24 md:py-32 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Nossa História</h2>
                <p className="text-xl text-gray-300 mb-6">
                  A AORKIA nasceu da visão de um grupo de especialistas em tecnologia que identificaram uma lacuna crítica no mercado: a falta de soluções verdadeiramente estratégicas para ambientes críticos de TI.
                </p>
                <p className="text-xl text-gray-300 mb-6">
                  Fundada em 2018, nossa empresa rapidamente se estabeleceu como referência em soluções de alta complexidade para o mercado B2B, combinando expertise técnica com visão estratégica de negócios.
                </p>
                <p className="text-xl text-gray-300">
                  Hoje, a AORKIA é reconhecida por sua abordagem única que transforma ambientes críticos em sistemas coordenados, resilientes e escaláveis, permitindo que nossos clientes se concentrem em seu core business enquanto nós garantimos a excelência operacional de sua infraestrutura tecnológica.
                </p>
              </div>
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-6">
                      <i className="ri-check-line text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">2018</h3>
                      <p className="text-gray-300 text-lg">Fundação da AORKIA com foco em soluções de infraestrutura estratégica.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-6">
                      <i className="ri-check-line text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">2020</h3>
                      <p className="text-gray-300 text-lg">Expansão para soluções de Backup SaaS e parceria estratégica com a Keepit.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-6">
                      <i className="ri-check-line text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">2022</h3>
                      <p className="text-gray-300 text-lg">Lançamento das soluções de Segurança Cloud e Receita B2B.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-6">
                      <i className="ri-check-line text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">2025</h3>
                      <p className="text-gray-300 text-lg">Consolidação como referência em soluções estratégicas para o mercado B2B.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Nossos Valores - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Nossos <span className="text-primary">Valores</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border border-gray-800 p-8 rounded-lg hover:border-primary transition-colors transform hover:translate-y-[-10px] transition-transform duration-300">
                <div className="text-5xl text-primary mb-8">
                  <i className="ri-award-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Excelência</h3>
                <p className="text-gray-300 text-lg">
                  Buscamos a excelência em tudo o que fazemos, desde o primeiro contato até o suporte contínuo.
                </p>
              </div>
              
              <div className="border border-gray-800 p-8 rounded-lg hover:border-primary transition-colors transform hover:translate-y-[-10px] transition-transform duration-300">
                <div className="text-5xl text-primary mb-8">
                  <i className="ri-lightbulb-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Inovação</h3>
                <p className="text-gray-300 text-lg">
                  Estamos constantemente explorando novas tecnologias e abordagens para oferecer soluções de ponta.
                </p>
              </div>
              
              <div className="border border-gray-800 p-8 rounded-lg hover:border-primary transition-colors transform hover:translate-y-[-10px] transition-transform duration-300">
                <div className="text-5xl text-primary mb-8">
                  <i className="ri-team-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Colaboração</h3>
                <p className="text-gray-300 text-lg">
                  Trabalhamos em estreita parceria com nossos clientes, construindo relacionamentos de longo prazo.
                </p>
              </div>
              
              <div className="border border-gray-800 p-8 rounded-lg hover:border-primary transition-colors transform hover:translate-y-[-10px] transition-transform duration-300">
                <div className="text-5xl text-primary mb-8">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Integridade</h3>
                <p className="text-gray-300 text-lg">
                  Agimos com transparência e ética em todas as nossas interações e decisões de negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Parceiros Estratégicos - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Parceiros <span className="text-primary">Estratégicos</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-black p-8 rounded-lg border border-gray-800 flex items-center justify-center h-40 hover:border-primary transition-colors">
                <p className="text-2xl font-bold text-white">Keepit</p>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800 flex items-center justify-center h-40 hover:border-primary transition-colors">
                <p className="text-2xl font-bold text-white">Microsoft</p>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800 flex items-center justify-center h-40 hover:border-primary transition-colors">
                <p className="text-2xl font-bold text-white">AWS</p>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800 flex items-center justify-center h-40 hover:border-primary transition-colors">
                <p className="text-2xl font-bold text-white">Google Cloud</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Nosso Impacto - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Nosso <span className="text-primary">Impacto</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-6">100+</div>
                <p className="text-2xl text-white">Clientes atendidos</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-6">500+</div>
                <p className="text-2xl text-white">Projetos entregues</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-6">99.9%</div>
                <p className="text-2xl text-white">Taxa de satisfação</p>
              </div>
            </div>
            
            <div className="bg-gray-900 p-12 rounded-lg border border-gray-800">
              <h3 className="text-3xl font-bold mb-8 text-center">Setores Atendidos</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-black p-6 rounded-lg text-center border border-gray-800 hover:border-primary transition-colors">
                  <div className="text-4xl text-primary mb-4">
                    <i className="ri-bank-line"></i>
                  </div>
                  <p className="text-xl font-medium text-white">Financeiro</p>
                </div>
                
                <div className="bg-black p-6 rounded-lg text-center border border-gray-800 hover:border-primary transition-colors">
                  <div className="text-4xl text-primary mb-4">
                    <i className="ri-heart-pulse-line"></i>
                  </div>
                  <p className="text-xl font-medium text-white">Saúde</p>
                </div>
                
                <div className="bg-black p-6 rounded-lg text-center border border-gray-800 hover:border-primary transition-colors">
                  <div className="text-4xl text-primary mb-4">
                    <i className="ri-government-line"></i>
                  </div>
                  <p className="text-xl font-medium text-white">Governo</p>
                </div>
                
                <div className="bg-black p-6 rounded-lg text-center border border-gray-800 hover:border-primary transition-colors">
                  <div className="text-4xl text-primary mb-4">
                    <i className="ri-store-2-line"></i>
                  </div>
                  <p className="text-xl font-medium text-white">Varejo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA - Estilo Jam3 */}
        <section id="formulario-cta" className="py-24 md:py-32 bg-black relative">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Lado esquerdo - Conteúdo */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Vamos <span className="text-primary">transformar</span> seu negócio?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Descubra como nossas soluções estratégicas podem impulsionar sua empresa. Preencha o formulário e um de nossos especialistas entrará em contato.
                </p>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                      <i className="ri-shield-check-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Avaliação Gratuita</h3>
                      <p className="text-gray-400">Diagnóstico preliminar sem compromisso</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
                      <i className="ri-time-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Resposta Rápida</h3>
                      <p className="text-gray-400">Retorno em até 24 horas úteis</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Lado direito - Formulário */}
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Solicite uma avaliação gratuita</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">Nome completo</label>
                    <input 
                      type="text" 
                      id="nome" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-1">Empresa</label>
                    <input 
                      type="text" 
                      id="empresa" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interesse" className="block text-sm font-medium text-gray-300 mb-1">Principal interesse</label>
                    <select 
                      id="interesse" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="backup">Backup SaaS Estratégico</option>
                      <option value="infraestrutura">Infraestrutura Estratégica</option>
                      <option value="seguranca">Segurança Cloud</option>
                      <option value="receita">Receita B2B</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg text-lg font-medium transition-all"
                  >
                    Solicitar Avaliação Gratuita
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    Ao enviar este formulário, você concorda com nossa <Link href="/privacy" className="text-primary hover:underline">Política de Privacidade</Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* Estilos para o preloader */
        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .loading-bar {
          width: 200px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .loading-progress {
          height: 100%;
          width: 100%;
          background-color: #0076FF;
          animation: loading 2s ease-in-out;
          transform-origin: left;
        }
        
        @keyframes loading {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </>
  );
}
