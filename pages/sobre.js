import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  return (
    <>
      <Head>
        <title>Sobre a AORKIA | Soluções Estratégicas B2B</title>
        <meta name="description" content="Conheça a AORKIA, empresa especializada em soluções estratégicas para o mercado B2B, com foco em Backup SaaS, Infraestrutura, Segurança Cloud e Receita B2B." />
      </Head>

      {/* Indicador de progresso de rolagem */}
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      ></div>

      <main>
        {/* Seção Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden min-h-[60vh] flex items-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Sobre a <span className="text-primary">AORKIA</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Transformando ambientes críticos em sistemas coordenados, resilientes e escaláveis.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Nossa História */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                <p className="text-gray-700 mb-4">
                  A AORKIA nasceu da visão de um grupo de especialistas em tecnologia que identificaram uma lacuna crítica no mercado: a falta de soluções verdadeiramente estratégicas para ambientes críticos de TI.
                </p>
                <p className="text-gray-700 mb-4">
                  Fundada em 2018, nossa empresa rapidamente se estabeleceu como referência em soluções de alta complexidade para o mercado B2B, combinando expertise técnica com visão estratégica de negócios.
                </p>
                <p className="text-gray-700">
                  Hoje, a AORKIA é reconhecida por sua abordagem única que transforma ambientes críticos em sistemas coordenados, resilientes e escaláveis, permitindo que nossos clientes se concentrem em seu core business enquanto nós garantimos a excelência operacional de sua infraestrutura tecnológica.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 text-white mr-4">
                      <i className="ri-check-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">2018</h3>
                      <p className="text-gray-700">Fundação da AORKIA com foco em soluções de infraestrutura estratégica.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 text-white mr-4">
                      <i className="ri-check-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">2020</h3>
                      <p className="text-gray-700">Expansão para soluções de Backup SaaS e parceria estratégica com a Keepit.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 text-white mr-4">
                      <i className="ri-check-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">2022</h3>
                      <p className="text-gray-700">Lançamento das soluções de Segurança Cloud e Receita B2B.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 text-white mr-4">
                      <i className="ri-check-line text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">2025</h3>
                      <p className="text-gray-700">Consolidação como referência em soluções estratégicas para o mercado B2B.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Nossos Valores */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border border-gray-700 p-6 rounded-lg hover:border-primary transition-colors">
                <div className="text-4xl text-primary mb-6">
                  <i className="ri-award-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Excelência</h3>
                <p className="text-gray-300">
                  Buscamos a excelência em tudo o que fazemos, desde o primeiro contato até o suporte contínuo.
                </p>
              </div>
              
              <div className="border border-gray-700 p-6 rounded-lg hover:border-primary transition-colors">
                <div className="text-4xl text-primary mb-6">
                  <i className="ri-lightbulb-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Inovação</h3>
                <p className="text-gray-300">
                  Estamos constantemente explorando novas tecnologias e abordagens para oferecer soluções de ponta.
                </p>
              </div>
              
              <div className="border border-gray-700 p-6 rounded-lg hover:border-primary transition-colors">
                <div className="text-4xl text-primary mb-6">
                  <i className="ri-team-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Colaboração</h3>
                <p className="text-gray-300">
                  Trabalhamos em estreita parceria com nossos clientes, construindo relacionamentos de longo prazo.
                </p>
              </div>
              
              <div className="border border-gray-700 p-6 rounded-lg hover:border-primary transition-colors">
                <div className="text-4xl text-primary mb-6">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Integridade</h3>
                <p className="text-gray-300">
                  Agimos com transparência e ética em todas as nossas interações e decisões de negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Parceiros Estratégicos */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Parceiros Estratégicos</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <p className="text-xl font-bold text-gray-400">Keepit</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <p className="text-xl font-bold text-gray-400">Microsoft</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <p className="text-xl font-bold text-gray-400">AWS</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
                <p className="text-xl font-bold text-gray-400">Google Cloud</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Nosso Impacto */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nosso Impacto</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">100+</div>
                <p className="text-xl text-gray-700">Clientes atendidos</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">500+</div>
                <p className="text-xl text-gray-700">Projetos entregues</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">99.9%</div>
                <p className="text-xl text-gray-700">Taxa de satisfação</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Setores Atendidos</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-primary mb-2">
                    <i className="ri-bank-line"></i>
                  </div>
                  <p className="font-medium">Financeiro</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-primary mb-2">
                    <i className="ri-heart-pulse-line"></i>
                  </div>
                  <p className="font-medium">Saúde</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-primary mb-2">
                    <i className="ri-government-line"></i>
                  </div>
                  <p className="font-medium">Governo</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-primary mb-2">
                    <i className="ri-store-2-line"></i>
                  </div>
                  <p className="font-medium">Varejo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Lado esquerdo - Imagem */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 z-10"></div>
                <Image 
                  src="/cta-image.jpg" 
                  alt="Equipe AORKIA" 
                  width={800} 
                  height={600} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Transforme seu negócio</h3>
                    <p className="text-lg">Converse com nossos especialistas</p>
                  </div>
                </div>
              </div>
              
              {/* Lado direito - Formulário */}
              <div className="w-full md:w-1/2 p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Solicite uma avaliação gratuita</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                      <input 
                        type="text" 
                        id="nome" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                      <input 
                        type="text" 
                        id="cargo" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email corporativo</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Telefone</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">Assunto de Interesse</label>
                    <select 
                      id="assunto" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="backup-saas">Backup SaaS Estratégico</option>
                      <option value="infraestrutura">Infraestrutura Estratégica</option>
                      <option value="seguranca-cloud">Segurança Cloud</option>
                      <option value="receita-b2b">Receita B2B</option>
                    </select>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Solicitar Contato
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
