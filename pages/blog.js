import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dados de posts do blog - VÍDEOS CORRIGIDOS
  const blogPosts = [
    {
      id: 'post-1',
      cardTitle: 'Não! Seu Google Workspace NÃO ESTÁ SEGURO!',
      date: '15 de Junho, 2025',
      cardExcerpt: 'Você, gestor, realmente acredita na segurança dos dados da sua empresa no Google Workspace? Prepare-se para uma verdade incômoda: o que parece proteção pode ser uma porta aberta para riscos catastróficos.',
      video: '/video/video_meme_cio_em_panico_google_workspace.mp4', // CAMINHO CORRIGIDO
      link: '/blog/a-importancia-do-backup-imutavel',
      category: 'Cibersegurança',
    },
    {
      id: 'post-2',
      cardTitle: 'Não! Seu Microsoft365 <span class="text-primary italic">também</span> NÃO ESTÁ SEGURO!',
      date: '18 de Junho, 2025',
      cardExcerpt: 'Você, gestor, realmente acredita na segurança dos dados da sua empresa no Microsoft365? Prepare-se para uma verdade incômoda: o que parece proteção pode ser uma porta aberta para riscos catastróficos.',
      video: '/video/video_meme_cio_em_panico_m365.mp4', // CAMINHO CORRIGIDO
      link: '/blog/microsoft365-a-importancia-do-backup-imutavel',
      category: 'Cibersegurança',
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
        {/* Seção de Posts do Blog */}
        <section
          id="blog-posts"
          data-section-id="blog-posts"
          className="relative w-full py-24 md:py-32 overflow-hidden border-t border-b border-gray-800 bg-black text-white"
        >
          {/* Fundo da seção com futuro.png */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/image/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Título "Blog da AORKIA" na vertical esquerda */}
          <div className="absolute left-4 lg:left-[8rem] top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <div className="flex flex-col items-center justify-center transform -rotate-90 origin-center">
              <h1 className="text-2xl lg:text-4xl font-bold text-white tracking-widest uppercase opacity-80 whitespace-nowrap">
                Blog da AORKIA
              </h1>
              <p className="text-sm lg:text-xl text-gray-400 mt-2 whitespace-nowrap">Insights e Inovação em Tecnologia B2B</p>
            </div>
          </div>

          {/* Título Mobile */}
          <div className="block md:hidden text-center mb-12 relative z-20">
            <h1 className="text-3xl font-bold text-white mb-4">Blog da AORKIA</h1>
            <p className="text-lg text-gray-400">Insights e Inovação em Tecnologia B2B</p>
          </div>

          {/* Container dos Cards - VÍDEOS CORRIGIDOS */}
          <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="group relative">
                  {/* Card Container */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    
                    {/* Vídeo Container - CORRIGIDO */}
                    <div className="relative aspect-video overflow-hidden">
                      <video 
                        className="w-full h-full object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        preload="metadata"
                      >
                        <source src={post.video} type="video/mp4" />
                        Seu navegador não suporta vídeo.
                      </video>
                      
                      {/* Overlay com categoria */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      {/* Overlay de hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <i className="ri-calendar-line mr-2"></i>
                        <span>{post.date}</span>
                      </div>
                      
                      <h3 
                        className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300"
                        dangerouslySetInnerHTML={{ __html: post.cardTitle }}
                      />
                      
                      <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
                        {post.cardExcerpt}
                      </p>
                      
                      <Link 
                        href={post.link}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
                      >
                        <span>Ler artigo completo</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção CTA */}
        <section className="relative w-full py-24 bg-primary">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Quer Mais Insights?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Assine nossa newsletter e receba conteúdos exclusivos sobre tecnologia, segurança e inovação.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contato"
                className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Fale com um Especialista
              </Link>
              <Link
                href="/backup_saas_estrategico"
                className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Conheça Nossas Soluções
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

