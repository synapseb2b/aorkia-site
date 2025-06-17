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
    },
    {
      id: 'post-2',
      title: 'Edge AI: Desbloqueando o Potencial da Inteligência na Borda',
      date: '10 de Junho, 2025',
      excerpt: 'A Inteligência Artificial não está mais restrita à nuvem. Descubra como a Edge AI está revolucionando operações e permitindo decisões em tempo real em diversos setores.',
      image: 'https://placehold.co/600x400/4A90E2/FFFFFF?text=Edge+AI',
      link: '/blog/edge-ai-potencial-na-borda',
      category: 'Inteligência Artificial'
    },
    {
      id: 'post-3',
      title: 'DSPM: O Que É e Por Que Sua Empresa Precisa Disso Agora',
      date: '05 de Junho, 2025',
      excerpt: 'Com dados espalhados em múltiplas nuvens, a visibilidade e o controle são cruciais. Entenda como o Data Security Posture Management (DSPM) protege suas informações mais sensíveis.',
      image: 'https://placehold.co/600x400/2196F3/FFFFFF?text=DSPM+Seguranca',
      link: '/blog/dspm-seguranca-de-dados',
      category: 'Segurança de Dados'
    },
    {
      id: 'post-4',
      title: 'Transformando Percepção em Posicionamento com Presença Digital',
      date: '01 de Junho, 2025',
      excerpt: 'Ter um site bonito não é suficiente. Sua presença digital precisa ser estratégica para impactar quem realmente importa e validar a autoridade da sua empresa no mercado.',
      image: 'https://placehold.co/600x400/002C4C/FFFFFF?text=Presenca+Digital',
      link: '/blog/presenca-digital-estrategica',
      category: 'Marketing Digital'
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
        {/* Hero Section do Blog */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/image/blog_hero.png)` }} // Placeholder, substitua pela imagem do seu blog
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Blog da AORKIA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Insights e Tendências em Tecnologia B2B
            </p>
          </div>
        </section>

        {/* Seção de Posts do Blog */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-all duration-300">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    quality={75}
                    placeholder="blur" // Opção para blur-up effect
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgBWfAOFjD+tMQAAAABJRU5ErkJggg=="
                  />
                  <div className="p-6">
                    <span className="text-sm text-gray-400 mb-2 block">{post.date} &bull; {post.category}</span>
                    <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={post.link}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      Ler Mais <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final (reutilizado de outras páginas) */}
        <section className="py-20 px-4 bg-dark-blue-1">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Ativar Resultados Reais?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transforme desafios críticos em vantagem competitiva com as soluções AORKIA.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Começar Agora
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
