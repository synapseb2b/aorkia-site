import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PresencaDigital() {
  const [activeTooltip, setActiveTooltip] = useState(null);
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

  // Função para rolagem suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Exemplos visuais com tooltips
  const visualExamples = [
    {
      id: 'hero',
      title: 'Hero Section',
      description: 'Texto direto, sem promessas genéricas',
      tooltip: 'Este título foi escrito para transmitir autoridade imediata, não apenas atrair cliques.',
      image: '/image/solucoesespecializadas.png'
    },
    {
      id: 'solutions',
      title: 'Cards de Soluções',
      description: 'Foco em ICP real e resultados mensuráveis',
      tooltip: 'Cada card comunica valor específico para o ICP, evitando linguagem publicitária.',
      image: '/image/backup.png'
    },
    {
      id: 'keepit',
      title: 'Integração Keepit',
      description: 'Parceria estratégica destacada',
      tooltip: 'Este elemento reforça credibilidade através de parceria com líder global.',
      image: '/image/keepit_logo_aorkia.png'
    },
    {
      id: 'cta',
      title: 'Call-to-Action',
      description: 'Ação qualificada, não volume',
      tooltip: 'Este botão foi escrito para ativar ação de lead qualificado, não apenas gerar clique.',
      image: '/image/dspm.png'
    }
  ];

  return (
    <>
      <Head>
        <title>Presença Digital AORKIA | Padrões de Execução</title>
        <meta name="description" content="Desenvolvido pela AORKIA. Executado com os mesmos padrões que exigimos dos nossos sistemas críticos." />
        <meta name="theme-color" content="#0076FF" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="bg-black text-white min-h-screen">
        {/* Barra de Progresso */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>

        {/* Link de Volta */}
        <div className="fixed top-6 left-6 z-40">
          <Link 
            href="/"
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Voltar para o site
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <Image 
                src="/image/logo_aorkia_white.png" 
                alt="AORKIA" 
                className="h-16 w-auto mx-auto mb-8"
                width={160}
                height={64}
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Desenvolvido pela <span className="text-primary">AORKIA</span>.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-12 text-gray-300">
              Executado com os mesmos padrões que exigimos dos nossos sistemas críticos.
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Esta página representa um exemplo prático da nossa abordagem de presença digital: 
                <span className="text-white font-medium"> enxuta, funcional e com propósito claro</span>. 
                Não vendemos esse serviço — mas aplicamos esse padrão em tudo o que carregará o nome AORKIA.
              </p>
            </div>

            <div className="mt-16">
              <button 
                onClick={() => scrollToSection('abordagem')}
                className="text-primary hover:text-white transition-colors animate-bounce"
              >
                <i className="ri-arrow-down-line text-3xl"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Nossa Abordagem */}
        <section id="abordagem" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary">
                  Nossa Abordagem
                </h2>
                <h3 className="text-2xl md:text-3xl font-light mb-8 text-white">
                  Presença Digital não é sobre aparecer. É sobre sustentar percepção de autoridade.
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Na AORKIA, presença digital é <span className="text-white font-medium">consequência — não produto</span>. 
                  Utilizamos esse termo para descrever o conjunto de decisões estratégicas que moldam como nossa marca é percebida no digital: 
                  clareza, consistência e sofisticação técnica.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Cada linha de código, cor, CTA ou estrutura visual do nosso site é parte de um sistema pensado para 
                  <span className="text-primary font-medium"> reforçar confiança imediata e diferencial competitivo</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Padrões de Execução */}
        <section id="padroes" className="py-20 px-4 bg-black">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Padrões de Execução
              </h2>
              <p className="text-xl md:text-2xl text-gray-400">
                O mesmo rigor técnico aplicado em nossas soluções críticas também está presente aqui.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-smartphone-line',
                  title: 'Design responsivo',
                  description: 'Direto e sem distrações'
                },
                {
                  icon: 'ri-target-line',
                  title: 'Conteúdo focado em ICP real',
                  description: 'Sem promessas genéricas'
                },
                {
                  icon: 'ri-search-line',
                  title: 'SEO técnico',
                  description: 'Foco bottom-of-funnel'
                },
                {
                  icon: 'ri-chat-3-line',
                  title: 'Linguagem estratégica',
                  description: 'Não publicitária'
                },
                {
                  icon: 'ri-speed-line',
                  title: 'Performance de carregamento',
                  description: 'Segurança como prioridade'
                },
                {
                  icon: 'ri-shield-check-line',
                  title: 'Padrões corporativos',
                  description: 'Consistência em cada detalhe'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 border border-gray-800 rounded-lg hover:border-primary/50 transition-all duration-300 hover:bg-gray-900/50"
                >
                  <div className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloco Visual Interativo */}
        <section id="exemplos" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Como aplicamos na prática
              </h2>
              <p className="text-xl text-gray-400">
                Cada elemento do nosso site reflete decisões estratégicas intencionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visualExamples.map((example, index) => (
                <div 
                  key={example.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveTooltip(example.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="relative overflow-hidden rounded-lg border border-gray-700 group-hover:border-primary/50 transition-all duration-300">
                    <div className="aspect-video bg-gray-800 flex items-center justify-center">
                      <Image 
                        src={example.image}
                        alt={example.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        width={400}
                        height={225}
                      />
                    </div>
                    
                    {/* Overlay com informações */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {example.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {example.description}
                        </p>
                        <div className="w-8 h-8 mx-auto bg-primary rounded-full flex items-center justify-center">
                          <i className="ri-information-line text-white"></i>
                        </div>
                      </div>
                    </div>

                    {/* Tooltip */}
                    {activeTooltip === example.id && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black border border-primary rounded-lg p-3 max-w-xs z-10 animate-fade-in">
                        <p className="text-sm text-white">
                          ✔ {example.tooltip}
                        </p>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Simbólico */}
        <section id="cta" className="py-20 px-4 bg-black">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Queremos que você <span className="text-primary">veja</span>. Não que compre.
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Este não é um produto. <span className="text-white font-medium">Não está à venda</span>. 
                Esta é a forma como tratamos nossa própria presença digital — e acreditamos que ela deve ser 
                um reflexo direto da inteligência por trás de cada operação AORKIA.
              </p>
              <p className="text-lg text-gray-400">
                Se quiser conversar sobre infraestrutura, proteção de dados ou performance crítica, estamos prontos.
              </p>
            </div>

            <Link 
              href="/solucoes"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Ver Soluções Reais da AORKIA
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>
          </div>
            
        </section>

      </main> {/* <- FECHAMENTO DO MAIN ADICIONADO AQUI */}

      {/* Footer exclusivo da página Presença Digital */}
      <footer className="bg-gray-900 text-gray-400 text-sm py-10 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div className="space-y-2">
            <p className="text-white font-semibold text-lg">AORKIA</p>
            <p>Av. Getúlio Vargas, 671 — Sala 500</p>
            <p>Belo Horizonte - MG</p>
          </div>

          <div className="space-y-2 text-left md:text-right">
            <p>
              <span className="text-white">E-mail:</span> <a href="mailto:contato@aorkia.com" className="hover:text-white transition-colors">contato@aorkia.com</a>
            </p>
            <p>
              <span className="text-white">WhatsApp:</span> <a href="https://wa.me/553139586192" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 31 3958-6192</a>
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 mt-6">
          © 2025 AORKIA. Todos os direitos reservados.
        </div>
      </footer>

         <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
