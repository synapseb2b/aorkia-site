import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null); // Adicionado para controle de seção ativa

  // Efeito para monitorar o progresso de rolagem e detectar seções visíveis
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Detectar qual seção está visível e ativar transição (similar ao sobre.js)
      const sections = document.querySelectorAll('[data-section-id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

        if (isVisible) {
          const sectionId = section.getAttribute('data-section-id');
          setActiveSection(sectionId);
        }
      });
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

  // Função para ativar seção no hover/touch (desktop)
  const handleSectionInteraction = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Função para desativar seção (apenas no desktop)
  const handleSectionLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveSection(null);
    }
  };

  // Dados de posts de exemplo para o blog
  const blogPosts = [
    {
      id: 'post-1',
      title: 'A Importância do Backup Imutável na Era do Ransomware',
      date: '15 de Junho, 2025',
      excerpt: 'Em um cenário de ameaças cibernéticas crescentes, o backup imutável surge como a linha de defesa definitiva contra ataques de ransomware. Saiba como ele pode proteger seus dados críticos.',
      image: 'https://placehold.co/600x400/0076FF/FFFFFF?text=Backup+Imutavel',
      link: '/blog/a-importancia-do-backup-imutavel', // Exemplo de link para o post completo
      category: 'Cibersegurança'
    }
  ];

  return (
    <>
      <Head>
        <title>Blog AORKIA | Insights e Inovação em Tecnologia B2B</title>
        <meta name="description" content="Explore artigos, análises e insights sobre as últimas tendências em cibersegurança, inteligência artificial, edge computing e estratégia digital para o mercado B2B." />
        <meta name="keywords" content="blog aorkia, tecnologia b2b, cibersegurança, edge ai, dspm, transformação digital, inovação" />
        <link rel="canonical" href="https://aorkia.com/blog" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Link Voltar */}
      <div className="fixed top-6 left-6 z-40">
        <Link href="/" className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 text-gray-700 hover:text-primary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o site
        </Link>
      </div>

      <main className="bg-black text-white min-h-screen">
        {/* Hero Section do Blog - Adaptada do estilo da página 'sobre' */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" /> {/* Reutilizando vídeo se disponível */}
            Seu navegador não suporta vídeo.
          </video>
          {/* Fallback para imagem se o vídeo não carregar ou não existir */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/image/blog_hero.png)` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div> {/* Overlay */}

          <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
              Blog da AORKIA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up animation-delay-200">
              Insights e Tendências em Tecnologia B2B
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a
              href="#blog-posts"
              onClick={(e) => scrollToSection(e, 'blog-posts')}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção de Posts do Blog - Estilo Jam3 com transições */}
        <section
          id="blog-posts"
          data-section-id="blog-posts"
          className="relative w-full min-h-screen overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('blog-posts')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('blog-posts')}
          onClick={() => handleSectionInteraction('blog-posts')}
        >
          {/* Background Image (aparece apenas no hover/ativo) */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'blog-posts' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/futuro.png)` }} /* Reutilizando imagem de 'sobre' */
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Background Color (aparece quando não está em hover/ativo) */}
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'blog-posts' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-7xl px-4 py-24 md:py-32 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <div key={post.id} className={`rounded-lg overflow-hidden shadow-lg border transition-all duration-300 h-full flex flex-col items-center text-center ${
                  activeSection === 'blog-posts'
                    ? 'bg-gray-800 border-gray-700 hover:border-primary'
                    : 'bg-gray-100 border-gray-300 hover:border-blue-500'
                }`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgBWfAOFjD+tMQAAAABJRU5ErkJggg=="
                  />
                  <div className="p-6 flex flex-col flex-grow items-center text-center">
                    <span className={`text-sm font-medium mb-2 block transition-colors duration-500 ${
                      activeSection === 'blog-posts' ? 'text-gray-400' : 'text-gray-600'
                    }`}>{post.date} &bull; {post.category}</span>
                    <h2 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-500 ${
                      activeSection === 'blog-posts' ? 'text-white' : 'text-black'
                    }`}>{post.title}</h2>
                    <p className={`text-base leading-relaxed mb-4 flex-grow transition-colors duration-500 ${
                      activeSection === 'blog-posts' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={post.link}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors mt-auto"
                    >
                      Ler Mais <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final (reutilizado de outras páginas) - Estilo Jam3 com transições */}
        <section
          id="cta-final"
          data-section-id="cta-final"
          className="relative w-full py-20 px-4 overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('cta-final')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('cta-final')}
          onClick={() => handleSectionInteraction('cta-final')}
        >
          {/* Background Image (aparece apenas no hover/ativo) */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              activeSection === 'cta-final' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(/image/light_pont.png)` }} /* Reutilizando imagem de 'sobre' */
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Background Color (aparece quando não está em hover/ativo) */}
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${
              activeSection === 'cta-final' ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
              activeSection === 'cta-final' ? 'text-white' : 'text-black'
            }`}>
              Pronto para Ativar Resultados Reais?
            </h2>
            <p className={`text-xl mb-8 transition-colors duration-500 ${
              activeSection === 'cta-final' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Transforme desafios críticos em vantagem competitiva com as soluções AORKIA.
            </p>
            <Link
              href="/contato"
              className={`inline-block px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                activeSection === 'cta-final' ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'
              }`}
            >
              Começar Agora
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
