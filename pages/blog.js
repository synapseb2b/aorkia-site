import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const [scrollProgress, setScrollProgress] = useState(0);
  // activeSection não será mais usado para transições de fundo da seção de posts
  // mas pode ser mantido se houver outras interações visuais baseadas em visibilidade.
  // Por simplicidade na requisição, vou remover a lógica de activeSection para transição de fundo da seção blog-posts
  // e fixar o tema escuro para a seção de posts.

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

  // Não há mais necessidade das funções handleSectionInteraction e handleSectionLeave se não houver transição de fundo por seção.

  // Dados de posts do blog - Agora com apenas o primeiro post e dados atualizados
  const blogPosts = [
    {
      id: 'post-1',
      // Título com quebra de linha para o card
      title: 'Não! Seu Google Workspace<br/>NÃO ESTÁ SEGURO!',
      date: '15 de Junho, 2025',
      // Excerto atualizado para o card
      excerpt: 'Você, gestor, realmente acredita na segurança dos dados da sua empresa no Google Workspace? Prepare-se para uma verdade incômoda: o que parece proteção pode ser uma porta aberta para riscos catastróficos.',
      video: '/image/Vídeo_Meme_CIO_em_Pânico.mp4', // Caminho para o vídeo do card
      link: '/blog/a-importancia-do-backup-imutavel', // Link para o post completo
      category: 'Cibersegurança'
    }
    // Outras postagens serão inseridas 1 a 1, então removemos os demais exemplos
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

      {/* Removida a Hero Section principal. O conteúdo da página começa com a seção de posts. */}
      <main className="bg-black text-white min-h-screen pt-20 md:pt-24"> {/* Ajustado padding top para Navbar */}

        {/* Seção de Posts do Blog - Agora a primeira visão do usuário */}
        <section
          id="blog-posts"
          data-section-id="blog-posts"
          className="relative w-full py-24 md:py-32 overflow-hidden border-t border-b border-gray-800 bg-black text-white" /* Fundo escuro fixo */
        >
          {/* Removidos Background Image e Background Color dinâmicos para manter o fundo fixo da main */}
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Área do vídeo no card */}
                  <div className="w-full h-48 relative overflow-hidden bg-black flex items-center justify-center">
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                      <source src={post.video} type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                    {/* Texto sobreposto ao vídeo no card */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4"> {/* Overlay sutil para legibilidade */}
                      <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: post.title }}></h3>
                    </div>
                  </div>
                  
                  {/* Conteúdo do texto do card */}
                  <div className="p-6 flex flex-col flex-grow items-center text-center">
                    <span className="text-sm font-medium mb-2 block text-gray-400">{post.date} &bull; {post.category}</span>
                    <p className="text-base leading-relaxed mb-4 flex-grow text-gray-300">
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

        {/* Removida a seção CTA Final "Pronto para Ativar Resultados Reais?" */}
        {/* O cliente deve ir direto para o formulário. */}
      </main>
    </>
  );
}
