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

      // Detectar qual seção está visível e ativar transição
      const sections = document.querySelectorAll('[data-product-id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          const productId = section.getAttribute('data-product-id');
          setActiveProduct(productId);
        }
      });
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

  // Função para ativar produto no hover/touch
  const handleProductInteraction = (productId) => {
    setActiveProduct(productId);
  };

  // Função para desativar produto (apenas no desktop)
  const handleProductLeave = () => {
    // No mobile, mantém ativo; no desktop, desativa
    if (window.innerWidth >= 768) {
      setActiveProduct(null);
    }
  };

// Produtos com suas respectivas imagens (corrigido para /image/)
const products = [
  {
    id: 'solucoes',
    title: 'AORKIA',
    supportText: 'Conceito',
    description: 'Ativamos plataformas globais com foco em resiliência cibernética, inteligência operacional e resultados mensuráveis — sem ruído, sem promessas vazias.',
    image: '/image/solucoesespecializadas.png',
    link: '/solucoes'
  },
  {
    id: 'backup',
    title: 'Backup SaaS Estratégico',
    supportText: 'Proteção Imutável. Recuperação Rápida. Conformidade Garantida.',
    description: 'Microsoft, Google e Salesforce não protegem seus dados contra exclusões, erros humanos ou ransomware. A AORKIA ativa a Keepit — líder global em backup SaaS — para garantir recuperação granular, backups 100% imutáveis e conformidade com LGPD e GDPR. Confiança de mais de 15.000 empresas em 74 países, incluindo Porsche e Oxford University.',
    image: '/image/backup.png',
    link: '/solucoes'
  },
  {
    id: 'dspm',
    title: 'Visibilidade Estratégica de Dados Sensíveis',
    supportText: 'Dados Sensíveis Sob Controle. Riscos Visíveis e Eliminados.',
    description: 'Seus dados confidenciais estão espalhados em múltiplas nuvens? A AORKIA ativa Plataformas DSPM (Data Security Posture Management) que descobrem, classificam e monitoram acessos em tempo real — identificando vulnerabilidades antes que virem crises. Evite violações, multas e danos reputacionais com segurança contínua e visibilidade total.',
    image: '/image/dspm.png',
    link: '/solucoes'
  },
  {
    id: 'bordas',
    title: 'Inteligência Autônoma na Borda ',
    supportText: 'Decisão em Milissegundos. Performance no Ponto Crítico.',
    description: 'Sua fábrica, varejo ou operação remota não pode esperar. A AORKIA ativa Plataformas Edge AI que analisam dados no local, preveem falhas em tempo real e garantem decisões automáticas, mesmo sem conexão com a nuvem. Resultados: menos paralisações, mais eficiência e total conformidade.',
    image: '/image/bordas.png',
    link: '/solucoes'
  }
];

  return (
    <>
      <Head>
        <title>AORKIA | Backup SaaS Estratégico (Keepit), Visibilidade Estratégica de Dados Sensíveis (DSPM) e Inteligência Autônoma na Borda (Edge AI). Tecnologias de Ponta orientada a resultados reais.</title>
        <meta name="description" content="Tecnologias de Ponta orientada a resultados reais: Backup SaaS Estratégico (Keepit), Visibilidade Estratégica de Dados Sensíveis (DSPM) e Inteligência Autônoma na Borda (Edge AI)." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                AORKIA:
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Ativamos tecnologia de ponta para transformar desafios críticos <br className="hidden md:block" />
                em resultados reais e mensuráveis.
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

        {/* Seção Produtos - Estilo Jam3 */}
        <section id="work" ref={workSectionRef} className="relative">
          {products.map((product, index) => (
            <div 
              key={product.id}
              data-product-id={product.id}
              className="relative w-full h-screen md:h-[80vh] overflow-hidden group border-t border-b border-gray-800"
              onMouseEnter={() => handleProductInteraction(product.id)}
              onMouseLeave={handleProductLeave}
              onTouchStart={() => handleProductInteraction(product.id)}
              onClick={() => handleProductInteraction(product.id)}
            >
              {/* Background Image (aparece apenas no hover/ativo) */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                  activeProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              
              {/* Background Color (aparece quando não está em hover/ativo) */}
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
                        <Image 
                          src="/image/keepit_logo_aorkia.png" 
                          alt="Keepit" 
                          className="h-12 w-auto"
                          width={160}
                          height={48}
                          priority
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
        <section 
          className="relative w-full h-screen md:h-[80vh] overflow-hidden group"
          data-product-id="futuro"
          onMouseEnter={() => handleProductInteraction('futuro')}
          onMouseLeave={handleProductLeave}
          onTouchStart={() => handleProductInteraction('futuro')}
          onClick={() => handleProductInteraction('futuro')}
        >
          {/* Background Image (aparece apenas no hover/ativo) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeProduct === 'futuro' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Background Color (aparece quando não está em hover/ativo) */}
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
                  Tecnologia de Ponta. Vantagem Competitiva.
                </h3>
              </div>
              <div>
                <p className={`text-xl md:text-2xl max-w-2xl transition-colors duration-500 ${
                  activeProduct === 'futuro' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Ativamos plataformas globais líderes, adaptadas à realidade do seu negócio. Convertemos tecnologia de ponta em resultados concretos: proteção de dados, continuidade operacional e excelência em performance crítica.
                </p>
              </div>
            </div>
          </div>
        </section>
 </main>
    </>
  );
}
