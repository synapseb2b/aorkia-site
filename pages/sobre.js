import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

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

  // Função para rolagem suave ao clicar em links internos
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Sobre a AORKIA</title>
        <meta name="description" content="Sobre a AORKIA" />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                Ativando soluções de ponta para transformar seus ambientes críticos em sistemas coordenados, resilientes e escaláveis.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Sobre a <br className="hidden md:block" />
                AORKIA
              </h1>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex justify-center animate-bounce">
            <a 
              href="#work" 
              onClick={scrollToWork}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção Nossa História - Estilo Jam3 */}
        <section 
          id="historia" 
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => setActiveSection('historia')}
          onMouseLeave={() => setActiveSection(null)}
        >
          {/* Background Image (aparece apenas no hover) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'historia' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/images/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color (aparece quando não está em hover) */}
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'historia' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col">
              <h2 className={`text-3xl md:text-5xl font-bold mb-12 transition-colors duration-500 ${
                activeSection === 'historia' ? 'text-white' : 'text-black'
              }`}>
                Nossa História
              </h2>
              
              <div className={`text-lg md:text-xl max-w-4xl space-y-8 transition-colors duration-500 ${
                activeSection === 'historia' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  A AORKIA nasce de uma convicção – forjada em mais de duas décadas de experiência imersiva no epicentro da tecnologia B2B – de que empresas ambiciosas merecem uma abordagem mais ágil e eficaz. Após testemunhar os desafios recorrentes de implementações lentas, custos imprevisíveis e o potencial de tecnologias globais muitas vezes não realizado plenamente, surgiu a visão de um novo tipo de parceiro. Um parceiro que não apenas oferece tecnologia, mas que a ativa com foco estratégico, transformando as melhores soluções do mundo em resultados de negócio reais e rentáveis para seus clientes.
                </p>
                <p>
                  Fundada em 2025, a AORKIA é a materialização dessa visão. Somos especialistas em realizar a curadoria e ativação de plataformas de ponta em Backup SaaS Estratégico, Operações de Bordas Inteligentes, Segurança para Operações Críticas e Plataforma de Inteligência de Receita com IA. Nosso compromisso é com a implementação rápida, a redução de riscos associados à adoção tecnológica e a geração de valor imediato.
                </p>
                <p>
                  Iniciamos nossa trajetória sobre uma base sólida de expertise de mercado, com o objetivo de construir uma equipe de Heads altamente capacitados, dedicados a cada pilar de solução. Olhamos para o futuro com a ambição de expandir nossa capacidade de transformar desafios complexos em diferenciação e crescimento sustentável para empresas que, como nós, acreditam no poder da tecnologia ativada com inteligência e propósito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Nossos Valores - Estilo Jam3 */}
        <section 
          id="valores" 
          className="relative w-full min-h-screen overflow-hidden group border-b border-gray-800"
          onMouseEnter={() => setActiveSection('valores')}
          onMouseLeave={() => setActiveSection(null)}
        >
          {/* Background Image (aparece apenas no hover) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'valores' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/images/digital.jpeg)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color (aparece quando não está em hover) */}
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'valores' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col">
              <h2 className={`text-3xl md:text-5xl font-bold mb-16 transition-colors duration-500 ${
                activeSection === 'valores' ? 'text-white' : 'text-black'
              }`}>
                Nossos Valores
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className={`p-8 rounded-lg border transition-all duration-500 ${
                  activeSection === 'valores' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-rocket-line"></i>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-white' : 'text-black'
                  }`}>
                    Ativação Estratégica
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Mais do que implementar, ativamos o valor real da tecnologia global para o seu negócio.
                  </p>
                </div>
                
                <div className={`p-8 rounded-lg border transition-all duration-500 ${
                  activeSection === 'valores' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-award-line"></i>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-white' : 'text-black'
                  }`}>
                    Curadoria de Excelência
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Selecionamos e trazemos até você apenas soluções líderes, comprovadamente robustas e rentáveis.
                  </p>
                </div>
                
                <div className={`p-8 rounded-lg border transition-all duration-500 ${
                  activeSection === 'valores' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-focus-3-line"></i>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-white' : 'text-black'
                  }`}>
                    Foco no Cliente e em Resultados
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Construímos parcerias para transformar seu investimento em tecnologia em crescimento rentável e vantagem competitiva duradoura.
                  </p>
                </div>
                
                <div className={`p-8 rounded-lg border transition-all duration-500 ${
                  activeSection === 'valores' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <div className={`text-5xl mb-6 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-primary' : 'text-blue-700'
                  }`}>
                    <i className="ri-eye-line"></i>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-white' : 'text-black'
                  }`}>
                    Visão de Futuro, Expertise Presente
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    activeSection === 'valores' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Nascemos da experiência para construir o futuro, com um compromisso de evoluir constantemente e entregar o máximo potencial tecnológico aos nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Parceiros Estratégicos - Estilo Jam3 */}
        <section 
          id="parceiros" 
          className="relative w-full overflow-hidden group border-b border-gray-800 py-24"
          onMouseEnter={() => setActiveSection('parceiros')}
          onMouseLeave={() => setActiveSection(null)}
        >
          {/* Background Image (aparece apenas no hover) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'parceiros' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/images/bordas.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color (aparece quando não está em hover) */}
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'parceiros' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col">
              <h2 className={`text-3xl md:text-5xl font-bold mb-16 transition-colors duration-500 ${
                activeSection === 'parceiros' ? 'text-white' : 'text-black'
              }`}>
                Parceiros Estratégicos
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className={`flex items-center justify-center h-32 rounded-lg border transition-all duration-500 ${
                  activeSection === 'parceiros' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <p className={`text-2xl font-bold transition-colors duration-500 ${
                    activeSection === 'parceiros' ? 'text-white' : 'text-black'
                  }`}>
                    Keepit
                  </p>
                </div>
                
                <div className={`flex items-center justify-center h-32 rounded-lg border transition-all duration-500 ${
                  activeSection === 'parceiros' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <p className={`text-2xl font-bold transition-colors duration-500 ${
                    activeSection === 'parceiros' ? 'text-white' : 'text-black'
                  }`}>
                    Microsoft
                  </p>
                </div>
                
                <div className={`flex items-center justify-center h-32 rounded-lg border transition-all duration-500 ${
                  activeSection === 'parceiros' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <p className={`text-2xl font-bold transition-colors duration-500 ${
                    activeSection === 'parceiros' ? 'text-white' : 'text-black'
                  }`}>
                    Google Cloud
                  </p>
                </div>
                
                <div className={`flex items-center justify-center h-32 rounded-lg border transition-all duration-500 ${
                  activeSection === 'parceiros' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <p className={`text-2xl font-bold transition-colors duration-500 ${
                    activeSection === 'parceiros' ? 'text-white' : 'text-black'
                  }`}>
                    Tenable
                  </p>
                </div>
                
                <div className={`flex items-center justify-center h-32 rounded-lg border transition-all duration-500 ${
                  activeSection === 'parceiros' 
                  ? 'border-primary/30 bg-black/30 hover:bg-black/50' 
                  : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}>
                  <p className={`text-2xl font-bold transition-colors duration-500 ${
                    activeSection === 'parceiros' ? 'text-white' : 'text-black'
                  }`}>
                    NVIDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Formulário - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-black">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
                </p>
                <div className="space-y-6 text-gray-300">
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <div>
                      <p>Av. Getúlio Vargas, 671 — Sala 500</p>
                      <p>Belo Horizonte - MG</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <i className="ri-phone-line"></i>
                    </div>
                    <div>
                      <p>+55 31 98801-9006</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <i className="ri-mail-line"></i>
                    </div>
                    <div>
                      <p>contato@aorkia.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <form className="space-y-6" action="https://formspree.io/f/mkgrleqq" method="POST">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email corporativo</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:</label>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="backup" 
                          name="focus"
                          value="Backup SaaS Estratégico"
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                        />
                        <label htmlFor="backup" className="ml-3 text-gray-300">
                          Backup SaaS Estratégico
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="bordas" 
                          name="focus"
                          value="Operações de Bordas Inteligentes"
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                        />
                        <label htmlFor="bordas" className="ml-3 text-gray-300">
                          Operações de Bordas Inteligentes
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="seguranca" 
                          name="focus"
                          value="Segurança para Operações Críticas"
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                        />
                        <label htmlFor="seguranca" className="ml-3 text-gray-300">
                          Segurança para Operações Críticas
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="receita" 
                          name="focus"
                          value="Plataforma de Inteligência de Receita com IA"
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                        />
                        <label htmlFor="receita" className="ml-3 text-gray-300">
                          Plataforma de Inteligência de Receita com IA
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="digital" 
                          name="focus"
                          value="Estratégia de Presença Digital AORKIA"
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                        />
                        <label htmlFor="digital" className="ml-3 text-gray-300">
                          Estratégia de Presença Digital AORKIA
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Solicitar Contato
                  </button>
                </form>
                
                <p className="mt-6 text-sm text-gray-400 text-center">
                  Sua mensagem foi enviada. Um de nossos especialistas em ativação de soluções responderá em breve.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
