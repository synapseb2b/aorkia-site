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

  // Dados de posts do blog - Agora com os dois posts especificados e dados atualizados
  const blogPosts = [
    {
      id: 'post-1',
      // Título que estará na parte inferior do card
      cardTitle: 'Não! Seu Google Workspace NÃO ESTÁ SEGURO!',
      date: '15 de Junho, 2025',
      // Excerto atualizado para a parte inferior do card
      cardExcerpt: 'Você, gestor, realmente acredita na segurança dos dados da sua empresa no Google Workspace? Prepare-se para uma verdade incômoda: o que parece proteção pode ser uma porta aberta para riscos catastróficos.',
      video: '/image/Video_Meme_CIO_em_Panico.mp4', // Caminho do vídeo
      link: '/blog/a-importancia-do-backup-imutavel', // Link para o post completo
      category: 'Cibersegurança',
    },
    {
      id: 'post-2',
      // Título que estará na parte inferior do card
      cardTitle: 'Não! Seu Microsoft365 <span class="text-primary italic">também</span> NÃO ESTÁ SEGURO!', // Título com "também" em laranja e itálico
      date: '18 de Junho, 2025',
      // Excerto atualizado para a parte inferior do card
      cardExcerpt: 'Você, gestor, realmente acredita na segurança dos dados da sua empresa no Microsoft365? Prepare-se para uma verdade incômoda: o que parece proteção pode ser uma porta aberta para riscos catastróficos.',
      video: '/image/Video_Meme_CIO_em_Panico_2.mp4', // Vídeo para o 2º card
      link: '/blog/microsoft365-a-importancia-do-backup-imutavel', // Link para o novo post Microsoft 365
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

      {/* Conteúdo da página começa com a seção de posts. */}
      <main className="bg-black text-white min-h-screen"> {/* Removido padding top */}

        {/* Seção de Posts do Blog */}
        <section
          id="blog-posts"
          data-section-id="blog-posts"
          className="relative w-full py-24 md:py-32 overflow-hidden border-t border-b border-gray-800 bg-black text-white" /* Fundo escuro fixo */
        >
          {/* Fundo da seção com futuro.png */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/image/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div> {/* Overlay escuro para legibilidade */}
          </div>

          {/* Título "Blog da AORKIA" na vertical esquerda - Ajustado para diferentes tamanhos de tela */}
          <div className="absolute left-4 lg:left-[8rem] top-1/2 -translate-y-1/2 z-20 hidden md:block"> {/* left-4 em telas menores, left-[8rem] em telas grandes */}
            <div className="flex flex-col items-center justify-center transform -rotate-90 origin-center">
              <h1 className="text-2xl lg:text-4xl font-bold text-white tracking-widest uppercase opacity-80 whitespace-nowrap"> {/* Texto menor em telas menores */}
                Blog da AORKIA
              </h1>
              <p className="text-sm lg:text-xl text-gray-400 mt-2 whitespace-nowrap">Insights e Inovação em Tecnologia B2B</p> {/* Texto de apoio responsivo */}
            </div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10"> {/* z-10 para ficar acima do fundo mas abaixo do título vertical */}
            
            {/* Título centralizado para mobile - aparece apenas em telas pequenas */}
            <div className="block md:hidden text-center mb-12">
              <h1 className="text-4xl font-bold text-white tracking-wide uppercase mb-4">
                Blog da AORKIA
              </h1>
              <p className="text-lg text-gray-400">
                Insights e Inovação em Tecnologia B2B
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 h-full flex flex-col hover:border-primary">
                  {/* Área do vídeo no card (Topo do Card) - SOMENTE VÍDEO */}
                  <Link href={post.link} className="w-full h-48 relative overflow-hidden flex items-center justify-center cursor-pointer">
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                      <source src={post.video} type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                    {/* Removido o texto sobreposto ao vídeo */}
                    <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Overlay sutil sobre o vídeo */}
                  </Link>
                  
                  {/* Conteúdo do texto do card (Inferior do Card) */}
                  <div className="p-6 flex flex-col flex-grow items-center text-center bg-dark-blue-2"> {/* Centralizado, fundo azul petróleo */}
                    <span className="text-sm font-medium mb-2 block text-gray-400">{post.date} &bull; {post.category}</span>
                    <h2 className="text-xl font-bold mb-3 text-white" dangerouslySetInnerHTML={{ __html: post.cardTitle }}></h2> {/* Usando dangerouslySetInnerHTML para o "também" formatado */}
                    <p className="text-base leading-relaxed mb-4 flex-grow text-gray-300">
                      {post.cardExcerpt}
                    </p>
                    {/* O "Ler Mais" agora é um Link explícito, mantido para clareza */}
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
