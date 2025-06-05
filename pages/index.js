import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeProduct, setActiveProduct] = useState(null);
  const productsRef = useRef(null);
  const workSectionRef = useRef(null);

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
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Produtos com suas respectivas imagens
  const products = [
    {
      id: 'solucoes',
      title: 'Soluções Especializadas',
      supportText: 'AORKIA',
      description: 'Nossas soluções são desenhadas para proteger seus ativos digitais, otimizar sua performance operacional e acelerar sua jornada rumo ao crescimento estratégico e rentável.',
      image: '/images/solucoesespecializadas.png',
      link: '/solucoes'
    },
    {
      id: 'backup',
      title: 'Backup SaaS Estratégico',
      supportText: 'Imutável. Independente. Inteligente.',
      description: 'Perder dados críticos de Plataformas SaaS como Microsoft 365, Google Workspace e Salesforce por um simples erro humano ou um ataque de ransomware pode paralisar sua operação e gerar custos enormes. Para garantir proteção de dados independente, completa e sempre recuperável, a AORKIA ativa a Keepit – Líder Global com mais de 15.000 clientes em 74 países, incluindo Porsche e Oxford University.',
      image: '/images/backup.jpeg',
      link: '/solucoes'
    },
    {
      id: 'bordas',
      title: 'Operações de Bordas Inteligentes',
      supportText: 'Inteligência na Borda. Decisões Imediatas.',
      description: 'Otimize a produção em tempo real na sua fábrica, preveja falhas em equipamentos remotos antes que paralisem suas operações, ou ofereça experiências personalizadas e instantâneas no seu varejo. A AORKIA ativa Plataformas Edge AI, garantindo inteligência, segurança e conformidade para suas operações na borda.',
      image: '/images/bordas.png',
      link: '/solucoes'
    },
    {
      id: 'dspm',
      title: 'Segurança para Operações Críticas',
      supportText: 'Visão Total. Controle Ativo.',
      description: 'Sua empresa armazena dados de clientes ou propriedade intelectual em múltiplas nuvens e tem dificuldade em saber quem realmente tem acesso a quê? Uma configuração incorreta pode expor dados críticos, gerando riscos regulatórios e de reputação. A AORKIA ativa Plataformas Data Security Posture Management (DSPM), que potencializam a descoberta, classificação, monitoramento e proteção contínuos dos seus dados sensíveis em ambientes multicloud e híbridos.',
      image: '/images/dspm.jpeg',
      link: '/solucoes'
    },
    {
      id: 'receitas',
      title: 'Plataformas de Inteligência de Receita com IA',
      supportText: 'Receita Previsível. Crescimento Acelerado.',
      description: 'Sua equipe de vendas perde tempo com tarefas manuais em vez de focar em fechar negócios? Suas previsões de receita são imprecisas e o pipeline parece ter "vazamentos" que você não consegue identificar? A AORKIA ativa Plataformas de Inteligência de Receita com IA, transformando seus dados de vendas e CRM em insights preditivos e automação inteligente.',
      image: '/images/receitas.jpeg',
      link: '/solucoes'
    },
    {
      id: 'digital',
      title: 'Estratégia de Presença Digital AORKIA',
      supportText: 'Receita Previsível. Crescimento Acelerado.',
      description: 'Sua empresa compreende que uma presença digital eficaz vai muito além de um site visualmente atraente – é um ecossistema completo e um ativo estratégico fundamental para o crescimento sustentável no mercado B2B? A AORKIA ativa sua Estratégia de Presença Digital, elevando sua autoridade no mercado, a conexão com clientes e os resultados comerciais concretos.',
      image: '/images/digital.jpeg',
      link: '/solucoes'
    }
  ];

  return (
    <>
      <Head>
        <title>AORKIA | Tecnologia de Ponta. Visão de Futuro.</title>
        <meta name="description" content="Tecnologia de Ponta. Visão de Futuro." />
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
                Boas-vindas à AORKIA.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Tecnologia de Ponta. <br className="hidden md:block" />
                Visão de Futuro.
              </h1>
              
              {/* Botão "Ver nosso trabalho" com rolagem suave */}
              <button 
                onClick={scrollToWork}
                className="text-white bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300 py-3 px-6 text-lg font-medium"
              >
                Ver nosso trabalho
              </button>
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

        {/* Seção Produtos - Estilo Jam3 */}
        <section id="work" ref={workSectionRef} className="relative">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="relative w-full h-screen md:h-[80vh] overflow-hidden group border-t border-b border-gray-800"
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              {/* Background Image (aparece apenas no hover) */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                  activeProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Background Color (aparece quando não está em hover) */}
              <div 
                className={`absolute inset-0 bg-white transition-opacity duration-500 ${
                  activeProduct === product.id ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className={`text-lg mb-2 transition-colors duration-500 ${
                      activeProduct === product.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {product.supportText}
                    </p>
                    <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-500 ${
                      activeProduct === product.id ? 'text-white' : 'text-black'
                    }`}>
                      {product.title}
                    </h3>
                    {product.id === 'backup' && (
                      <div className="mt-4 mb-6">
                        <img 
                          src="/images/keepit_logo_aorkia.svg" 
                          alt="Keepit" 
                          className="h-12 w-auto"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className={`text-xl md:text-2xl max-w-2xl transition-colors duration-500 ${
                      activeProduct === product.id ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {product.description}
                    </p>
                    <div className="mt-8">
                      <Link 
                        href={product.link} 
                        className={`inline-flex items-center text-lg font-medium transition-colors duration-500 ${
                          activeProduct === product.id ? 'text-primary hover:text-primary/80' : 'text-blue-700 hover:text-blue-800'
                        }`}
                      >
                        <span>Saiba mais</span>
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Seção Pré-Footer - Estilo Jam3 */}
        <section className="relative w-full h-screen md:h-[80vh] overflow-hidden group"
          onMouseEnter={() => setActiveProduct('futuro')}
          onMouseLeave={() => setActiveProduct(null)}
        >
          {/* Background Image (aparece apenas no hover) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeProduct === 'futuro' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/images/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color (aparece quando não está em hover) */}
          <div 
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeProduct === 'futuro' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className={`text-lg mb-2 transition-colors duration-500 ${
                  activeProduct === 'futuro' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  AORKIA
                </p>
                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-500 ${
                  activeProduct === 'futuro' ? 'text-white' : 'text-black'
                }`}>
                  O Futuro do Seu Negócio, Ativado.
                </h3>
              </div>
              <div>
                <p className={`text-xl md:text-2xl max-w-2xl transition-colors duration-500 ${
                  activeProduct === 'futuro' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Ativamos as melhores soluções globais para a sua realidade específica. Convertemos potencial tecnológico em vantagem competitiva e crescimento sustentável para sua empresa.
                </p>
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
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:</label>
                    <div className="space-y-3">
                      {['Backup SaaS Estratégico', 'Operações de Bordas Inteligentes', 'Segurança para Operações Críticas', 'Plataforma de Inteligência de Receita com IA', 'Estratégia de Presença Digital AORKIA'].map((option) => (
                        <div key={option} className="flex items-center">
                          <input 
                            type="radio" 
                            id={option.replace(/\s+/g, '-').toLowerCase()} 
                            name="focus" 
                            className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                          />
                          <label htmlFor={option.replace(/\s+/g, '-').toLowerCase()} className="ml-3 text-gray-300">
                            {option}
                          </label>
                        </div>
                      ))}
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
                
                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                  <p className="text-gray-400">
                    Av. Getúlio Vargas, 671 — Sala 500, BH - MG<br />
                    +55 31 98801-9006<br />
                    contato@aorkia.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
