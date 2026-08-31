import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Componente Divisor de Seção
const SectionDivider = () => (
  <div className="relative w-full h-12 flex items-center justify-center my-12">
    <div className="absolute w-full h-px bg-primary/20"></div>
    <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-fast"></div>
  </div>
);


export default function PostBackupImutavel() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <title>Backup Imutável na Era do Ransomware | Blog AORKIA</title>
        <meta name="description" content="Descubra por que Google Workspace, Backup and DR e Google Vault não protegem seus dados contra ransomware e erros humanos. A importância do backup imutável com Keepit." />
        <meta name="keywords" content="backup imutável, ransomware, Google Workspace, Google Vault, Keepit, cibersegurança, proteção de dados, DR, recuperação de desastres, AORKIA" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Link Voltar */}
      <div className="fixed top-6 left-6 z-40">
        <Link href="/blog" className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 text-gray-700 hover:text-primary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o Blog
        </Link>
      </div>

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section do Post */}
        <section id="hero-post" className="relative h-screen overflow-hidden flex flex-col justify-center items-center pt-24 pb-12 px-4 text-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-30">
            <source src="/video/video_meme_cio_em_panico_google_workspace.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

          <div className="relative z-20 w-full max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-primary animate-fade-in-up">
              Não! Seu Google Workspace NÃO ESTÁ SEGURO!
            </h1>
             <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-2 animate-fade-in-up animation-delay-200">
              Backup and DR Google e Google Vault Não Protegem Seu Google Workspace.
            </p>
            <p className="text-md text-gray-400 animate-fade-in-up animation-delay-400">
              18 de Junho, 2025 &bull; Cibersegurança
            </p>
          </div>

          <div className="absolute bottom-8 animate-bounce z-20">
              <a href="#content-post" onClick={(e) => scrollToSection(e, 'content-post')} className="text-white text-4xl">
                <i className="ri-arrow-down-line"></i>
              </a>
            </div>
        </section>

        {/* Conteúdo Principal do Post */}
        <article id="content-post" className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center">

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300">
                  Você, gestor, realmente acredita na segurança dos dados da sua empresa no Google Workspace? Prepare-se para uma verdade incômoda: o que parece proteção pode ser uma porta aberta para riscos catastróficos.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  Imagine uma auditoria de segurança. O diretor de TI, com convicção, detalha: "Para o Google Workspace, usamos o Backup and DR da própria Google. Para conformidade, temos o Google Vault." Um aceno satisfeito percorre a sala, até que um especialista independente intervém. A pergunta é direta: "E se o ransomware atingir seu Google Workspace? Ou um erro humano apagar dados críticos irrecuperavelmente?"
                </p>
                 <blockquote className="text-center text-primary text-2xl md:text-3xl font-bold italic border-l-4 border-primary pl-4 py-2 mt-8">
                  "O que você pensa ser proteção pode, na verdade, ser uma porta aberta para riscos catastróficos."
                </blockquote>
                 <p className="text-lg md:text-xl leading-relaxed mt-8 text-gray-300">
                  O silêncio ecoa. A crença de que ferramentas nativas do Google oferecem proteção completa é um equívoco perigoso e custoso.
                </p>
            </div>
            
            <SectionDivider/>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  O Mito da Proteção Nativa: <span className="text-primary">Desvendando a Falsa Segurança</span>
                </h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-300">
                  Muitos gestores confundem a segurança do Google Cloud com a do Google Workspace. As robustas soluções de Backup e DR do Google Cloud não se estendem automaticamente à proteção granular e recuperação do seu Workspace.
                </p>
                <p className="text-lg leading-relaxed mb-8 text-gray-300">
                  E a percepção de segurança com o Google Vault é ainda mais enganosa. O próprio Google é categórico:
                </p>
                <blockquote className="border-l-4 border-primary pl-4 py-2 my-8 italic text-lg md:text-xl font-semibold text-gray-200">
                  "O Vault não foi projetado para ser uma ferramenta de backup ou arquivamento." Um alerta máximo para qualquer gestor.
                </blockquote>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                  Detalhes que desmascaram essa falsa sensação de segurança:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
                  {[
                    { icon: 'ri-database-line', title: 'Não para Grandes Volumes', description: 'Exportações do Vault não são para backups em grande escala. Há limitações de contas, um serviço por vez, sem paralelismo ou agendamento automático.' },
                    { icon: 'ri-gavel-line', title: 'Foco Legal, Não Operacional', description: 'O Vault visa eDiscovery, não recuperação eficiente. Não cria backups diferenciais nem desduplica dados, gerando volume desnecessário e dificultando a restauração.' },
                    { icon: 'ri-forbid-line', title: 'Cobertura Limitada', description: 'Serviços como o Google Calendário não são cobertos pelo Vault, deixando lacunas críticas.' },
                    { icon: 'ri-time-line', title: 'Restauração Complexa', description: 'O Vault não tem ferramentas de recuperação automatizadas. Restaurar dados dele é um processo manual, demorado e difícil.' },
                    { icon: 'ri-user-unfollow-line', title: 'Dados de Ex-Usuários Descartados', description: 'Excluir uma conta de usuário no Google Workspace significa que os dados no Vault também são excluídos, exigindo transferência manual prévia – um risco enorme de perda.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-lg border border-gray-700 bg-gray-900/50 flex flex-col items-center text-center">
                      <div className="text-primary text-3xl mb-3"><i className={item.icon}></i></div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-base text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
            </div>

            <SectionDivider/>

             <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                  A Realidade dos Riscos: <span className="text-primary">Por Que o Backup Dedicado é Indispensável</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
                  <div className="md:col-span-1 text-center">
                    <p className="text-primary text-6xl md:text-7xl font-bold leading-none">75%</p>
                    <p className="text-lg md:text-xl font-semibold text-gray-200">dos tomadores de decisão de segurança sofreram uma violação nos últimos 12 meses.</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg leading-relaxed text-gray-300">
                      A verdade é que a crescente ameaça do ransomware não pergunta se sua empresa será atacada, mas quando. E o ambiente SaaS está "cheio de buracos": falhas de API, erros do fornecedor, riscos de plataformas compartilhadas, ciberameaças e alterações maliciosas ou acidentais.
                    </p>
                    <p className="text-lg leading-relaxed mt-4 font-bold text-gray-100">
                      Não é à toa que 30% das maiores preocupações das empresas com SaaS estão relacionadas à segurança.
                    </p>
                  </div>
                </div>
            </div>

            <SectionDivider/>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                    O Verdadeiro ROI da Recuperação: <span className="text-primary">Protegendo Seu Investimento</span>
                </h2>
                <p className="text-lg leading-relaxed mb-12 text-gray-300">
                    É nesse cenário que o backup dedicado entra como um investimento estratégico. A Forrester, em seu estudo sobre a Keepit, quantificou os benefícios reais para as empresas. Para uma organização de US$ 2 bilhões e 10.000 usuários, os resultados são impressionantes:
                </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: 'Recuperação Rápida de Ransomware:', description: 'Redução de <strong>90% no tempo de restauração</strong>, valendo <strong>US$ 819.149</strong> em três anos.' },
                        { title: 'Redução de Custos de Licença:', description: '<strong>US$ 351.446</strong> em três anos, retendo dados de ex-funcionários sem licença ativa.' },
                        { title: 'Economia com Backup On-premise:', description: '<strong>US$ 133.944</strong> em três anos.' },
                        { title: 'Ganhos de Produtividade:', description: 'Ganhos de <strong>US$ 21.380</strong> em três anos.' },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 rounded-lg border border-gray-700 bg-gray-900/50 shadow-md">
                            <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                            <p className="text-base text-gray-300" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </article>
        
        {/* Seção CTA Final */}
        <section className="py-20 md:py-32 text-center bg-gradient-to-br from-primary to-green-600">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                    Não Deixe Seus Dados Vulneráveis
                </h2>
                <p className="text-lg md:text-xl text-gray-900 mb-10">
                    A proteção real dos seus dados SaaS não é uma opção — é uma necessidade estratégica. Converse com nossos especialistas e descubra como implementar backup imutável com Keepit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contato" className="bg-black text-primary hover:bg-gray-800 font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                        Falar com Especialista
                    </Link>
                    <Link href="/blog" className="bg-transparent border-2 border-black text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-primary transition duration-300 text-lg">
                        Voltar ao Blog
                    </Link>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
