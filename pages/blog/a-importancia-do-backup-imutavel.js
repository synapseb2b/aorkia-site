import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PostBackupImutavel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHero, setActiveHero] = useState(false); // Estado para a seção Hero
  const [activeCta, setActiveCta] = useState(false);   // Estado para a seção CTA Final

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const heroSection = document.getElementById('hero-post');
      const ctaFinalSection = document.getElementById('cta-final-post');

      // Detectar ativação do Hero
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setActiveHero(rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2);
      }
      // Detectar ativação do CTA Final
      if (ctaFinalSection) {
        const rect = ctaFinalSection.getBoundingClientRect();
        setActiveCta(rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2);
      }
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
        <link rel="canonical" href="https://aorkia.com/blog/a-importancia-do-backup-imutavel" />
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
        <Link href="/blog" className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 text-gray-700 hover:text-primary">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o Blog
        </Link>
      </div>

      <main className={`min-h-screen ${activeHero || activeCta ? 'bg-black text-white' : 'bg-white text-black'}`}> {/* Removida a transição de cor aqui para o corpo do texto */}
        {/* Hero Section do Post */}
        <section id="hero-post" className="relative h-screen overflow-hidden flex flex-col justify-between pt-24 pb-12 px-4 text-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video/video_meme_cio_em_panico_google_workspace.mp4" type="video/mp4" /> {/* Vídeo específico do post */}
            Seu navegador não suporta vídeo.
          </video>
          {/* Removidas todas as máscaras e imagens de fallback que cobriam o vídeo */}
          {/* O background e overlay foram removidos para mostrar o vídeo sem efeitos */}

          <div className="relative z-20 w-full text-left max-w-5xl mx-auto pl-4 md:pl-0"> {/* Alinhado à esquerda */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white animate-fade-in-up"> {/* Fonte um pouco menor */}
              Não!<br />Seu Google Workspace<br />NÃO ESTÁ SEGURO!
            </h1>
          </div>

          <div className="relative z-20 w-full text-center max-w-5xl mx-auto px-4 md:px-0">
            <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in-up animation-delay-200">
              Backup and DR Google e Google Vault Não Protegem Seu Google Workspace.
            </p>
            <p className="text-md text-gray-400 animate-fade-in-up animation-delay-400">
              18 de Junho, 2025 &bull; Cibersegurança
            </p>
            <div className="mt-8 animate-bounce">
              <a href="#content-post" onClick={(e) => scrollToSection(e, 'content-post')} className="text-white text-4xl">
                <i className="ri-arrow-down-line"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Conteúdo Principal do Post - Layout de Blog Tradicional aprimorado */}
        {/* Mantém o fundo branco e texto escuro para o corpo do artigo */}
        <section id="content-post" className="py-16 md:py-24 bg-white text-black"> {/* Fundo branco e texto preto/cinza fixo */}
          <div className="container mx-auto max-w-4xl px-4">

            {/* Introdução com Layout em Duas Colunas e Citação em Destaque */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
              <div className="md:col-span-2 text-justify"> {/* Coluna Esquerda: Texto do Artigo Justificado */}
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
                  Você, gestor, realmente acredita na segurança dos dados da sua empresa no Google Workspace? Prepare-se para uma verdade incômoda: o que parece proteção pode ser uma porta aberta para riscos catastróficos.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  Imagine uma auditoria de segurança. O diretor de TI, com convicção, detalha: "Para o Google Workspace, usamos o Backup and DR da própria Google. Para conformidade, temos o Google Vault." Um aceno satisfeito percorre a sala, até que um especialista independente, com a experiência que acumulamos em monitorar o cenário de cibersegurança, intervém. A pergunta é direta: "E se o ransomware atingir seu Google Workspace? Ou um erro humano apagar dados críticos irrecuperavelmente?"
                </p>
              </div>
              <div className="md:col-span-1 flex items-center justify-center"> {/* Coluna Direita: Citação em Destaque */}
                <blockquote className="text-center text-primary text-2xl md:text-3xl font-bold italic border-l-4 border-primary pl-4 py-2">
                  "O que você pensa ser proteção pode, na verdade, ser uma porta aberta para riscos catastróficos."
                </blockquote>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed mt-4 mb-12 text-gray-700 text-justify"> {/* Texto Justificado */}
              O silêncio ecoa. A crença de que ferramentas nativas do Google oferecem proteção completa para o Google Workspace é um equívoco perigoso e custoso. Desconhecer isso pode transformar uma auditoria de rotina em um pesadelo de vulnerabilidades.
            </p>

            {/* O Mito da Proteção Nativa */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black text-center"> {/* Centralizado */}
              O Mito da Proteção Nativa: <span className="text-primary">Desvendando a Falsa Segurança</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-700 text-justify"> {/* Texto Justificado */}
              Muitos gestores confundem a segurança do Google Cloud com a abrangência do Google Workspace. As robustas soluções de Backup e DR do Google Cloud não se estendem automaticamente à proteção granular e recuperação do seu Google Workspace. Seus e-mails, documentos no Drive, calendários e outros dados vitais estão mais expostos do que você imagina.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-700 text-justify"> {/* Texto Justificado */}
              E a percepção de segurança com o Google Vault é ainda mais enganosa. Embora muitos assinantes do Google Workspace o utilizem para retenção e eDiscovery — permitindo reter, armazenar, pesquisar e exportar dados de alguns usuários — o próprio Google é categórico:
            </p>
            {/* Citação destacada */}
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-8 italic text-lg md:text-xl font-semibold text-gray-800 text-center"> {/* Centralizado */}
              "O Vault não foi projetado para ser uma ferramenta de backup ou arquivamento." Um alerta máximo para qualquer gestor.
            </blockquote>

            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black text-center"> {/* Centralizado */}
              Detalhes que desmascaram essa falsa sensação de segurança:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: 'ri-database-line', title: 'Não para Grandes Volumes', description: 'Exportações do Vault não são para backups em grande escala. Há limitações de contas, um serviço por vez, sem paralelismo ou agendamento automático.' },
                { icon: 'ri-gavel-line', title: 'Foco Legal, Não Operacional', description: 'O Vault visa eDiscovery, não recuperação eficiente. Não cria backups diferenciais nem desduplica dados, gerando volume desnecessário e dificultando a restauração.' },
                { icon: 'ri-forbid-line', title: 'Cobertura Limitada', description: 'Serviços como o Google Calendário não são cobertos pelo Vault, deixando lacunas críticas.' },
                { icon: 'ri-time-line', title: 'Restauração Complexa', description: 'O Vault não tem ferramentas de recuperação automatizadas. Restaurar dados dele é um processo manual, demorado e difícil.' },
                { icon: 'ri-user-unfollow-line', title: 'Dados de Ex-Usuários Descartados', description: 'Excluir uma conta de usuário no Google Workspace significa que os dados no Vault também são excluídos, exigindo transferência manual prévia – um risco enorme de perda.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-gray-200 bg-gray-50 flex flex-col items-center text-center"> {/* Centralizado itens e texto */}
                  <div className="text-primary text-3xl mb-3"><i className={item.icon}></i></div>
                  <h4 className="text-xl font-bold mb-2 text-black">{item.title}</h4>
                  <p className="text-base text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            {/* A Realidade dos Riscos com Stat Callout */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center"> {/* Centralizado */}
              A Realidade dos Riscos: <span className="text-primary">Por Que o Backup Dedicado é Indispensável</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
              <div className="md:col-span-1 text-center">
                <p className="text-primary text-6xl md:text-7xl font-bold leading-none">75%</p>
                <p className="text-lg md:text-xl font-semibold text-gray-800">dos tomadores de decisão de segurança sofreram uma violação nos últimos 12 meses.</p>
              </div>
              <div className="md:col-span-2 text-justify"> {/* Texto Justificado */}
                <p className="text-lg leading-relaxed text-gray-700">
                  A verdade é que a crescente ameaça do ransomware não pergunta se sua empresa será atacada, mas quando. E o ambiente SaaS, embora traga agilidade, não é imune a falhas. Pelo contrário: ele está "cheio de buracos". Falhas podem surgir de explorações de API, erros do próprio fornecedor, riscos de plataformas compartilhadas, exfiltração de dados, ciberameaças, vulnerabilidades em dispositivos de usuários finais, e até mesmo alterações maliciosas ou acidentais.
                </p>
                <p className="text-lg leading-relaxed mt-4 font-bold text-gray-800"> {/* Cor alterada para cinza escuro */}
                  Não é à toa que 30% das maiores preocupações das empresas com SaaS estão relacionadas à segurança e proteção contra crimes cibernéticos. Esses números são um alerta urgente para qualquer gestor.
                </p>
              </div>
            </div>

            {/* O Verdadeiro ROI da Recuperação - Layout de "Timeline" */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black text-center"> {/* Centralizado */}
              O Verdadeiro ROI da Recuperação: <span className="text-primary">Protegendo Seu Investimento</span>
            </h2>
            <p className="text-lg leading-relaxed mb-12 text-gray-700 text-justify"> {/* Texto Justificado */}
              É nesse cenário que o backup dedicado entra como um investimento estratégico, e não apenas um custo. A Forrester, em seu estudo "O Impacto Econômico Total da Proteção de Dados SaaS Keepit", quantificou os benefícios reais para as empresas. Para uma organização composta com receita de US$ 2 bilhões e 10.000 usuários, os resultados são impressionantes:
            </p>

            <div className="relative py-8 md:py-12">
                {/* Linha Vertical da Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full hidden md:block"></div>

                {/* Itens da Timeline */}
                {[
                    {
                        title: 'Recuperação rápida e precisa de ataques de ransomware:',
                        description: 'Uma redução de <strong>90% no tempo para restauração direcionada</strong>, valendo <strong>US$ 819.149</strong> em três anos. Como disse um consultor: "Conseguiríamos restaurar nossas operações em poucos dias com os serviços Keepit... definitivamente não levaria várias semanas." ',
                        align: 'left'
                    },
                    {
                        title: 'Redução de custos de licenciamento SaaS:',
                        description: '<strong>US$ 351.446</strong> em três anos.',
                        align: 'right'
                    },
                    {
                        title: 'Economia com backup on-premise:',
                        description: '<strong>US$ 133.944</strong> em três anos.',
                        align: 'left'
                    },
                    {
                        title: 'Impacto na produtividade do usuário SaaS:',
                        description: 'Ganhos de <strong>US$ 21.380</strong> em três anos.',
                        align: 'right'
                    },
                ].map((item, idx) => (
                    <div key={idx} className={`relative mb-12 md:mb-16 flex items-center ${item.align === 'left' ? 'justify-start md:pr-1/2' : 'justify-end md:pl-1/2'}`}>
                        {/* Ponto na Timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 hidden md:block"></div>

                        {/* Conteúdo do Item */}
                        <div className={`w-full md:w-1/2 p-6 rounded-lg border border-gray-200 bg-gray-50 shadow-md ${item.align === 'left' ? 'md:mr-8' : 'md:ml-8'} text-center`}> {/* Centralizado */}
                            <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                            <p className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Conclusão e CTA */}
            <div className="bg-primary text-white p-8 rounded-lg shadow-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Não Deixe Seus Dados Vulneráveis
              </h2>
              <p className="text-lg mb-6">
                A proteção real dos seus dados SaaS não é uma opção — é uma necessidade estratégica. Converse com nossos especialistas e descubra como implementar backup imutável com Keepit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-block px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Falar com Especialista
                </Link>
                <Link
                  href="/blog"
                  className="inline-block px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Voltar ao Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

