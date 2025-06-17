import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PostBackupImutavel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

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

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSectionInteraction = (sectionId) => {
    setActiveSection(sectionId);
  };

  const handleSectionLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveSection(null);
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

      <main className="bg-black text-white min-h-screen">
        {/* Hero Section do Post */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center text-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          {/* Fallback para imagem se o vídeo não carregar ou não existir */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://placehold.co/1920x1080/0076FF/FFFFFF?text=Backup+Imutavel+Hero)` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>

          <div className="relative z-20 max-w-5xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white animate-fade-in-up">
              Não! Seu Google Workspace Não Está Seguro!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              Backup and DR Google e Google Vault Não Protegem Seu Google Workspace.
            </p>
            <p className="text-md text-gray-400 animate-fade-in-up animation-delay-400">
              15 de Junho, 2025 &bull; Cibersegurança
            </p>
          </div>
        </section>

        {/* Introdução do Post */}
        <section
          id="introducao"
          data-section-id="introducao"
          className="relative w-full py-24 md:py-32 overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('introducao')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('introducao')}
          onClick={() => handleSectionInteraction('introducao')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'introducao' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'introducao' ? 'opacity-0' : 'opacity-100'}`}
          ></div>

          <div className="container mx-auto max-w-4xl px-4 relative z-10">
            <p className={`text-lg md:text-xl leading-relaxed mb-8 transition-colors duration-500 ${activeSection === 'introducao' ? 'text-gray-300' : 'text-gray-700'}`}>
              Você, gestor, respira aliviado pensando na segurança dos dados da sua empresa no Google Workspace? Prepare-se para uma verdade desconfortável: o que você pensa ser proteção pode, na verdade, ser uma porta aberta para riscos catastróficos.
            </p>
            <p className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 ${activeSection === 'introducao' ? 'text-gray-300' : 'text-gray-700'}`}>
              Imagine esta cena, comum em tantas corporações: durante uma auditoria de segurança rigorosa, o diretor de TI, com confiança, detalha a estratégia de proteção de dados da empresa. "Para o Google Workspace", ele explica, "nós utilizamos o Backup and DR da própria Google. E para conformidade e retenção, temos o Google Vault." Um aceno de cabeça satisfeito percorre a sala, até que um especialista independente, com a experiência que acumulamos em monitorar o cenário de cibersegurança, interrompe. A pergunta é simples, mas seu impacto congela o ambiente: "E o que acontece quando o ransomware atinge o seu Google Workspace? Ou um erro humano apaga dados críticos de forma irrecuperável?"
            </p>
            <p className={`text-lg md:text-xl leading-relaxed mt-4 transition-colors duration-500 ${activeSection === 'introducao' ? 'text-gray-300' : 'text-gray-700'}`}>
              O silêncio é a resposta. A crença generalizada de que essas ferramentas nativas do Google oferecem uma proteção completa para o Google Workspace é um dos equívocos mais perigosos e custosos que sua empresa pode ter. O desconhecimento, nesse cenário, pode custar caro demais, transformando uma auditoria de rotina em um pesadelo de vulnerabilidades.
            </p>
          </div>
        </section>

        {/* Seção: O Mito da Proteção Nativa */}
        <section
          id="mito-protecao"
          data-section-id="mito-protecao"
          className="relative w-full py-24 md:py-32 overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('mito-protecao')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('mito-protecao')}
          onClick={() => handleSectionInteraction('mito-protecao')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'mito-protecao' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/light_pont.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'mito-protecao' ? 'opacity-0' : 'opacity-100'}`}
          ></div>

          <div className="container mx-auto max-w-5xl px-4 relative z-10 text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-12 transition-colors duration-500 ${activeSection === 'mito-protecao' ? 'text-white' : 'text-black'}`}>
              O Mito da Proteção Nativa: <span className="text-primary">Desvendando a Verdade por Trás da Falsa Segurança</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-8 transition-colors duration-500 ${activeSection === 'mito-protecao' ? 'text-gray-300' : 'text-gray-700'}`}>
              Muitos gestores confundem a segurança do Google Cloud com a segurança abrangente do Google Workspace. Embora o Google ofereça soluções robustas de Backup e DR para seu ambiente de Cloud, essas ferramentas não se estendem automaticamente à proteção granular e recuperação do seu Google Workspace. Ou seja, seus e-mails, documentos no Drive, calendários e outros dados vitais estão mais expostos do que você imagina.
            </p>
            <p className={`text-lg leading-relaxed mb-8 transition-colors duration-500 ${activeSection === 'mito-protecao' ? 'text-gray-300' : 'text-gray-700'}`}>
              E quando a conversa se volta para o Google Vault, a percepção de segurança é ainda mais enganosa. Muitos assinantes do Google Workspace têm acesso a essa ferramenta de retenção e eDiscovery, acreditando que ela supre a necessidade de backup. Com ele, é possível reter, armazenar, pesquisar e exportar dados do Google Workspace de alguns usuários. Parece suficiente, certo? Errado, novamente.
            </p>
            <p className={`text-lg leading-relaxed mb-12 font-bold transition-colors duration-500 ${activeSection === 'mito-protecao' ? 'text-primary' : 'text-blue-700'}`}>
              O próprio site de suporte do Google é categórico: "O Vault não foi projetado para ser uma ferramenta de backup ou arquivamento." Isso por si só já deveria acionar um alerta máximo para qualquer gestor responsável pela segurança da informação.
            </p>

            <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-colors duration-500 ${activeSection === 'mito-protecao' ? 'text-white' : 'text-black'}`}>
              Mas vamos aos detalhes que desmascaram essa falsa sensação de segurança:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Não é para Grandes Volumes de Dados', description: 'As exportações do Vault não são projetadas para backups de dados em grande escala ou em grandes volumes. Você está limitado a exportar dados para um número restrito de contas e apenas um serviço do Google por vez. Esqueça a ideia de muitas exportações paralelas ou agendamento automático para uma recuperação eficiente.' },
                { title: 'Foco Legal, Não Operacional', description: 'O Vault prepara exportações para fins de descoberta legal (eDiscovery), não para processamento eficiente de dados em um cenário de recuperação. Isso significa que ele não pode criar backups diferenciais nem desduplicar dados. Uma exportação do Drive, por exemplo, inclui todos os itens aos quais a conta pesquisada tem acesso, resultando em dados duplicados e excesso de volume – um pesadelo em uma restauração de emergência.' },
                { title: 'Cobertura Limitada', description: 'Ele não oferece suporte a todos os serviços do Google. Serviços como o Google Calendário, por exemplo, não são cobertos pelo Vault, deixando lacunas críticas em sua estratégia de dados.' },
                { title: 'Restauração Complexa (ou Inexistente)', description: 'O Vault não possui ferramentas de recuperação automatizadas. A restauração de dados a partir de seus arquivos de exportação é, na melhor das hipóteses, um processo manual, demorado e extremamente difícil. Em outras palavras, ele não foi projetado para recuperar dados perdidos ou corrompidos, uma função essencial de qualquer ferramenta de backup e recuperação robusta.' },
                { title: 'Dados de Ex-Usuários Descartados', description: 'Um ponto crítico para a governança de dados: se um funcionário sair da sua empresa e você, como administrador, excluir a conta de usuário dele no Google Workspace, todos os dados salvos no Vault também serão excluídos. Para salvá-los, você precisaria transferir todos os dados para fora do Vault antes de excluir a conta – um risco enorme de perda permanente.' }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-lg border transition-all duration-500 text-center ${
                  activeSection === 'mito-protecao'
                    ? 'bg-gray-800 border-gray-700 hover:border-primary'
                    : 'bg-gray-100 border-gray-300 hover:border-blue-500'
                }`}>
                  <h4 className={`text-xl font-bold mb-3 transition-colors duration-500 ${activeSection === 'mito-protecao' ? 'text-white' : 'text-black'}`}>{item.title}</h4>
                  <p className={`text-base transition-colors duration-500 ${activeSection === 'mito-protecao' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção: A Realidade dos Riscos */}
        <section
          id="realidade-riscos"
          data-section-id="realidade-riscos"
          className="relative w-full py-24 md:py-32 overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('realidade-riscos')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('realidade-riscos')}
          onClick={() => handleSectionInteraction('realidade-riscos')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'realidade-riscos' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'realidade-riscos' ? 'opacity-0' : 'opacity-100'}`}
          ></div>

          <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-12 transition-colors duration-500 ${activeSection === 'realidade-riscos' ? 'text-white' : 'text-black'}`}>
              A Realidade dos Riscos: <span className="text-primary">Por Que o Backup Dedicado é Indispensável</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-8 transition-colors duration-500 ${activeSection === 'realidade-riscos' ? 'text-gray-300' : 'text-gray-700'}`}>
              A verdade é que a crescente ameaça do ransomware não pergunta se sua empresa será atacada, mas quando. E o ambiente SaaS, embora traga agilidade, não é imune a falhas. Pelo contrário: ele está "cheio de buracos". Falhas podem surgir de explorações de API, erros do próprio fornecedor, riscos de plataformas compartilhadas, exfiltração de dados, ciberameaças, vulnerabilidades em dispositivos de usuários finais, e até mesmo alterações maliciosas ou acidentais.
            </p>
            <p className={`text-lg leading-relaxed mb-12 font-bold transition-colors duration-500 ${activeSection === 'realidade-riscos' ? 'text-primary' : 'text-blue-700'}`}>
              Não é à toa que 30% das maiores preocupações das empresas com SaaS estão relacionadas à segurança e proteção contra crimes cibernéticos. Estudos mostram que 75% dos tomadores de decisão de segurança sofreram uma violação nos últimos 12 meses. Esses números são um alerta claro para qualquer gestor.
            </p>
          </div>
        </section>

        {/* Seção: O Verdadeiro ROI da Recuperação */}
        <section
          id="roi-recuperacao"
          data-section-id="roi-recuperacao"
          className="relative w-full py-24 md:py-32 overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('roi-recuperacao')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('roi-recuperacao')}
          onClick={() => handleSectionInteraction('roi-recuperacao')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'roi-recuperacao' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/ponta.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'roi-recuperacao' ? 'opacity-0' : 'opacity-100'}`}
          ></div>

          <div className="container mx-auto max-w-5xl px-4 relative z-10 text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-12 transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-white' : 'text-black'}`}>
              O Verdadeiro ROI da Recuperação: <span className="text-primary">Protegendo Seu Investimento</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-8 transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-gray-300' : 'text-gray-700'}`}>
              É nesse cenário que o backup dedicado entra como um investimento estratégico, e não apenas um custo. A Forrester, em seu estudo "O Impacto Econômico Total da Proteção de Dados SaaS Keepit", quantificou os benefícios reais para as empresas. Para uma organização composta com receita de US$ 2 bilhões e 10.000 usuários, os resultados são impressionantes:
            </p>

            <div className="space-y-6 text-left">
              <div className={`p-6 rounded-lg border transition-all duration-500 ${activeSection === 'roi-recuperacao' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-white' : 'text-black'}`}>
                  Recuperação mais rápida e precisa de ataques de ransomware:
                </h3>
                <p className={`text-lg transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Uma redução de <strong>90% no tempo para restauração direcionada</strong>, resultando em um valor presente de <strong>US$ 819.149</strong> em três anos. Como afirmou um consultor sênior de uma organização sem fins lucrativos: "Conseguiríamos restaurar nossas operações em poucos dias com os serviços Keepit... definitivamente não levaria várias semanas."
                </p>
              </div>
              <div className={`p-6 rounded-lg border transition-all duration-500 ${activeSection === 'roi-recuperacao' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-white' : 'text-black'}`}>
                  Redução de custos de licenciamento SaaS:
                </h3>
                <p className={`text-lg transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>US$ 351.446</strong> em economia em três anos.
                </p>
              </div>
              <div className={`p-6 rounded-lg border transition-all duration-500 ${activeSection === 'roi-recuperacao' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-white' : 'text-black'}`}>
                  Evitar custos de backup on-premise:
                </h3>
                <p className={`text-lg transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Uma economia de <strong>US$ 133.944</strong> em três anos.
                </p>
              </div>
              <div className={`p-6 rounded-lg border transition-all duration-500 ${activeSection === 'roi-recuperacao' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-white' : 'text-black'}`}>
                  Impacto na produtividade do usuário SaaS:
                </h3>
                <p className={`text-lg transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Ganhos de <strong>US$ 21.380</strong> em três anos.
                </p>
              </div>
            </div>
            <p className={`text-lg leading-relaxed mt-12 font-bold transition-colors duration-500 ${activeSection === 'roi-recuperacao' ? 'text-primary' : 'text-blue-700'}`}>
              Somando todos esses benefícios e subtraindo os custos (principalmente as taxas de licença de software de US$ 492.000 ), o estudo aponta um ROI impressionante de <span className="text-4xl">163%</span> e um Valor Presente Líquido (NPV) de <span className="text-4xl">US$ 822K</span> em três anos.
            </p>
          </div>
        </section>

        {/* Seção: Keepit: A Escolha Inteligente para Gestores */}
        <section
          id="keepit-escolha"
          data-section-id="keepit-escolha"
          className="relative w-full py-24 md:py-32 overflow-hidden group border-t border-b border-gray-800"
          onMouseEnter={() => handleSectionInteraction('keepit-escolha')}
          onMouseLeave={handleSectionLeave}
          onTouchStart={() => handleSectionInteraction('keepit-escolha')}
          onClick={() => handleSectionInteraction('keepit-escolha')}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${activeSection === 'keepit-escolha' ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(/image/futuro.png)` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-500 ${activeSection === 'keepit-escolha' ? 'opacity-0' : 'opacity-100'}`}
          ></div>

          <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-12 transition-colors duration-500 ${activeSection === 'keepit-escolha' ? 'text-white' : 'text-black'}`}>
              Keepit: A Escolha Inteligente para Gestores
            </h2>
            <p className={`text-lg leading-relaxed mb-8 transition-colors duration-500 ${activeSection === 'keepit-escolha' ? 'text-gray-300' : 'text-gray-700'}`}>
              A Keepit se posiciona como a solução ideal para preencher as lacunas deixadas por ferramentas como o Google Vault. Ela oferece:
            </p>
            <ul className={`text-lg leading-relaxed space-y-4 text-left mb-12 transition-colors duration-500 ${activeSection === 'keepit-escolha' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start">
                <i className={`ri-check-line text-xl mr-3 ${activeSection === 'keepit-escolha' ? 'text-primary' : 'text-blue-700'}`}></i>
                Excelentes capacidades de backup, garantindo que seus dados críticos estejam sempre protegidos.
              </li>
              <li className="flex items-start">
                <i className={`ri-check-line text-xl mr-3 ${activeSection === 'keepit-escolha' ? 'text-primary' : 'text-blue-700'}`}></i>
                Conformidade com as legislações de proteção de dados.
              </li>
              <li className="flex items-start">
                <i className={`ri-check-line text-xl mr-3 ${activeSection === 'keepit-escolha' ? 'text-primary' : 'text-blue-700'}`}></i>
                Uma plataforma amigável e fácil de usar, mesmo para usuários não-IT. Um líder de TI de uma organização sem fins lucrativos resumiu: "O treinamento dado pela Keepit durante a fase de implementação foi extremamente bom. Em 10 minutos, todos os membros da minha equipe estavam a bordo."
              </li>
              <li className="flex items-start">
                <i className={`ri-check-line text-xl mr-3 ${activeSection === 'keepit-escolha' ? 'text-primary' : 'text-blue-700'}`}></i>
                Capacidades em nuvem robustas.
              </li>
              <li className="flex items-start">
                <i className={`ri-check-line text-xl mr-3 ${activeSection === 'keepit-escolha' ? 'text-primary' : 'text-blue-700'}`}></i>
                A capacidade de usar a solução para arquivamento de dados e fins de auditoria, facilitando a localização rápida de informações.
              </li>
            </ul>
            <p className={`text-lg leading-relaxed mb-8 font-bold transition-colors duration-500 ${activeSection === 'keepit-escolha' ? 'text-primary' : 'text-blue-700'}`}>
              A Keepit se destaca como a única nuvem independente do mundo para proteção de dados SaaS. Isso significa que seus dados são copiados múltiplas vezes (quatro cópias, com duas em cada um de dois data centers independentes), garantindo imutabilidade por padrão e disponibilidade em uma infraestrutura isolada e à prova de adulteração.
            </p>
          </div>
        </section>

        {/* CTA Final do Post */}
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
            style={{ backgroundImage: `url(/image/light_pont.png)` }}
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
              Não Deixe o Futuro do Seu Negócio ao Acaso
            </h2>
            <p className={`text-xl mb-8 transition-colors duration-500 ${
              activeSection === 'cta-final' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A segurança dos dados no ambiente SaaS é complexa e exige uma abordagem proativa e especializada. Como parceiros estratégicos em cibersegurança, na AORKIA, entendemos profundamente esses desafios. Confiar em soluções que não foram projetadas para backup pode expor sua empresa a riscos inaceitáveis e perdas financeiras catastróficas em caso de um ataque de ransomware ou erro humano.
            </p>
            <p className={`text-xl mb-8 font-bold transition-colors duration-500 ${
              activeSection === 'cta-final' ? 'text-primary' : 'text-blue-700'
            }`}>
              Investir em uma solução de recuperação robusta como a Keepit não é um custo, mas um investimento estratégico que protege o negócio, minimiza perdas, garante a continuidade das operações e oferece um retorno financeiro comprovado. Não espere pelo próximo ataque de ransomware.
            </p>
            <Link
              href="/contato"
              className={`inline-block px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                activeSection === 'cta-final' ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'
              }`}
            >
              Fale com a AORKIA hoje mesmo.
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
