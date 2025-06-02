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

        {/* Seção Nossa Abordagem */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossa Abordagem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl text-primary mb-6">
                  <i className="ri-search-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Diagnóstico Estratégico</h3>
                <p className="text-gray-700">
                  Analisamos profundamente seu ambiente tecnológico e objetivos de negócio para identificar oportunidades de otimização e transformação.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl text-primary mb-6">
                  <i className="ri-tools-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Implementação Precisa</h3>
                <p className="text-gray-700">
                  Executamos projetos com metodologia ágil e foco em resultados, garantindo entregas no prazo e dentro do orçamento.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl text-primary mb-6">
                  <i className="ri-line-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Evolução Contínua</h3>
                <p className="text-gray-700">
                  Monitoramos e otimizamos constantemente as soluções implementadas, garantindo que evoluam com as necessidades do seu negócio.
                </p>
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

        {/* Seção Nossa Equipe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossa Equipe</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold mb-2">Carlos Mendes</h3>
                <p className="text-primary font-medium mb-4">CEO & Fundador</p>
                <p className="text-gray-700">
                  Especialista em estratégia de negócios e transformação digital com mais de 15 anos de experiência.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold mb-2">Fernanda Silva</h3>
                <p className="text-primary font-medium mb-4">CTO</p>
                <p className="text-gray-700">
                  Arquiteta de soluções com vasta experiência em infraestrutura crítica e ambientes cloud.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold mb-2">Ricardo Oliveira</h3>
                <p className="text-primary font-medium mb-4">Diretor de Operações</p>
                <p className="text-gray-700">
                  Especialista em gestão de projetos complexos e otimização de processos operacionais.
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
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-primary mb-2">
                    <i className="ri-building-line"></i>
                  </div>
                  <p className="font-medium">Manufatura</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-primary mb-2">
                    <i className="ri-car-line"></i>
                  </div>
                  <p className="font-medium">Automotivo</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-primary mb-2">
                    <i className="ri-book-open-line"></i>
                  </div>
                  <p className="font-medium">Educação</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl text-primary mb-2">
                    <i className="ri-global-line"></i>
                  </div>
                  <p className="font-medium">Tecnologia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">O Que Nossos Clientes Dizem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-primary text-2xl mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-300 mb-6">
                  "A AORKIA transformou completamente nossa infraestrutura de TI, proporcionando maior segurança, desempenho e escalabilidade. O ROI foi impressionante."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Marcos Almeida</p>
                    <p className="text-sm text-gray-400">CIO, Empresa de Tecnologia</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-primary text-2xl mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-300 mb-6">
                  "A solução de Backup SaaS da AORKIA nos salvou de um desastre quando sofremos um ataque de ransomware. Recuperamos todos os dados em questão de horas."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Ana Costa</p>
                    <p className="text-sm text-gray-400">Diretora de TI, Instituição Financeira</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="text-primary text-2xl mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-300 mb-6">
                  "A metodologia de Receita B2B da AORKIA transformou nosso processo de vendas, resultando em um aumento de 40% na taxa de conversão e 25% no ticket médio."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Roberto Santos</p>
                    <p className="text-sm text-gray-400">VP de Vendas, Empresa de Software</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como nossas soluções estratégicas podem impulsionar sua empresa.
            </p>
            <Link href="/contato" className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center">
              Fale com um especialista <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
