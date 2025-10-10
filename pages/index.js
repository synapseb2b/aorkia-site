import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Cloud, FileText, Lock, ShieldAlert, CheckCircle, XCircle, Globe, Clock, Server, Scale } from 'lucide-react';

export default function Home() {
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

  return (
    <>
      <Head>
        <title>AORKIA | Resiliência Cibernética para Dados SaaS</title>
        <meta name="description" content="A AORKIA ativa a Keepit, líder global em proteção de dados SaaS, para garantir que seu negócio nunca pare. Backup imutável e recuperação à prova de ransomware." />
        <meta name="theme-color" content="#000000" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="bg-black text-white">
        {/* Seção Hero */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
            src="/video/video_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
          
          <div className="relative z-20 px-4 max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-primary">
              Resiliência não é negociável. Continuidade, também não.
            </h1>
            <h2 className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Seu provedor SaaS não faz backup dos seus dados. Essa responsabilidade é sua — e o mercado só descobre isso quando já é tarde. Nós garantimos que seu negócio nunca pare: backup imutável, recuperação instantânea e conformidade garantida.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/backup_saas_estrategico" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                Conheça o Backup Estratégico
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition duration-300 text-lg">
                Fale com um Especialista
              </Link>
            </div>
          </div>
        </section>

        {/* Bloco de Confiança */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              A confiança de quem opera sem margem para erro.
            </h1>
            <h2 className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12">
              Clientes globais da Keepit operam em ambientes onde cada minuto de parada impacta diretamente o resultado. São organizações que não podem errar — e escolheram a mesma infraestrutura que protege seus dados críticos.
            </h2>
            {/* Carrossel de Logos - Placeholder */}
            <div className="overflow-hidden relative py-4">
              <div className="flex animate-marquee-left whitespace-nowrap">
                <div className="flex items-center justify-around w-full">
                  <Image src="/icon/porsche.png" alt="Porsche" width={120} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/oxford_university.png" alt="Universidade de Oxford" width={150} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/arezzo.png" alt="Arezzo&Co" width={120} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/hdi.png" alt="HDI Global" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/national_gallery.png" alt="National Gallery of Denmark - SMK" width={180} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/crayon.png" alt="Crayon" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/sgs.png" alt="SGS" width={80} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/banco_bv.png" alt="Banco BV" width={120} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/itausa.png" alt="Itaúsa" width={120} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                {/* Duplicar para efeito de carrossel contínuo */}
                <div className="flex items-center justify-around w-full">
                  <Image src="/icon/porsche.png" alt="Porsche" width={120} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/oxford_university.png" alt="Universidade de Oxford" width={150} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/arezzo.png" alt="Arezzo&Co" width={120} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/hdi.png" alt="HDI Global" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/national_gallery.png" alt="National Gallery of Denmark - SMK" width={180} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/crayon.png" alt="Crayon" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/sgs.png" alt="SGS" width={80} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/banco_bv.png" alt="Banco BV" width={120} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/itausa.png" alt="Itaúsa" width={120} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Plataforma */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Uma Plataforma Inteligente para Múltiplas Cargas de Trabalho SaaS</h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Nossa solução de backup e recuperação de dados em nuvem, ponta a ponta e agnóstica a fornecedores, garante que seus dados críticos de aplicações SaaS estejam seguros e rapidamente recuperáveis. Tenha confiança absoluta em sua conformidade e resiliência cibernética com a Keepit.
              </p>
            </div>
            {/* Carrossel de Produtos - Placeholder */}
            <div className="overflow-hidden relative py-4">
              <div className="flex animate-marquee-left whitespace-nowrap">
                <div className="flex items-center justify-around w-full">
                  <Image src="/icon/m365.png" alt="Microsoft 365" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/google_workspace.png" alt="Google Workspace" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/salesforce.png" alt="Salesforce" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/dynamics.png" alt="Dynamics" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/sharepoint.png" alt="SharePoint" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/onedrive.png" alt="OneDrive" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/teams.png" alt="Teams" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/exchange.png" alt="Exchange" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                {/* Duplicar para efeito de carrossel contínuo */}
                <div className="flex items-center justify-around w-full">
                  <Image src="/icon/m365.png" alt="Microsoft 365" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/google_workspace.png" alt="Google Workspace" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/salesforce.png" alt="Salesforce" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/dynamics.png" alt="Dynamics" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/sharepoint.png" alt="SharePoint" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/onedrive.png" alt="OneDrive" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/teams.png" alt="Teams" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <Image src="/icon/exchange.png" alt="Exchange" width={100} height={50} className="mx-8 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Escolha Inteligente */}
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-semibold uppercase mb-2 block">Faça a escolha inteligente</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nuvem Independente para Resiliência e Recuperação</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Embora você possa acreditar que seu provedor de SaaS oferece backup e recuperação completos, essa responsabilidade é, na verdade, exclusivamente sua. O modelo de responsabilidade compartilhada deixa isso claro.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Gerencie a resiliência e mantenha o controle estratégico diante de tecnologias emergentes e do avanço da inteligência artificial. Prepare sua proteção de dados para o futuro e garanta conformidade rigorosa com a arquitetura de nuvem independente da Keepit.
                </p>
                <Link href="/backup_saas_estrategico" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                  Entenda a Diferença
                </Link>
              </div>
              <div>
                {/* Imagem ou ilustração */}
                <Image src="/image/keepit_intelligent_choice.png" alt="Escolha Inteligente Keepit" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Seção Seus Dados. Hoje. Amanhã. */}
        <section className="py-20 md:py-28 bg-black">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Seus Dados. Hoje. Amanhã.</h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Garanta a continuidade do seu negócio com a proteção mais robusta e confiável do mercado.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 rounded-full mx-auto mb-6">
                  <ShieldAlert className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Resiliência Contra Perda de Dados</h3>
                <p className="text-gray-400 leading-relaxed">
                  Proteção imutável para recuperação rápida e confiável. Mantenha o controle absoluto dos seus dados e elimine riscos operacionais, mesmo ao adotar novas tecnologias e enfrentar ameaças ransomware.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 rounded-full mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Backup em Nuvem Independente</h3>
                <p className="text-gray-400 leading-relaxed">
                  Certificado de ponta a ponta, sem sub-processadores. A arquitetura air-gapped da Keepit garante isolamento total, recuperação resiliente e segura, livre de vulnerabilidades de fornecedores.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 rounded-full mx-auto mb-6">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Conformidade Fácil e Confiável</h3>
                <p className="text-gray-400 leading-relaxed">
                  Certificações ISO 27001, ISAE 3402. Mantenha-se em conformidade com LGPD, GDPR, HIPAA, NIS2, NIST e outras regulamentações globais sem esforço adicional ou complexidade operacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA Final */}
        <section className="py-20 md:py-32 text-center bg-gradient-to-br from-primary to-green-600">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Não Deixe o Risco Definir o Seu Futuro.</h2>
                <p className="text-lg md:text-xl text-white mb-10">
                    A AORKIA, parceira oficial da Keepit, oferece a única solução de Backup SaaS Estratégico que realmente protege seu negócio. Converse com nossos especialistas e transforme vulnerabilidade em vantagem competitiva.
                </p>
                <Link href="/contato" className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition duration-300 text-xl">
                    Agende Sua Análise de Resiliência
                </Link>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-950 py-12">
          <div className="container mx-auto px-4 text-gray-400">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-lg font-bold mb-4">AORKIA</h3>
                <p className="text-sm mb-2">Resiliência Cibernética de classe mundial. Parceiro oficial Keepit no Brasil.</p>
                <p className="text-xs">Direção estratégica: Synapse B2B</p>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Navegação</h3>
                <ul>
                  <li className="mb-2"><Link href="/plataforma" className="hover:text-primary transition-colors">Plataforma</Link></li>
                  <li className="mb-2"><Link href="/solucao" className="hover:text-primary transition-colors">Solução</Link></li>
                  <li className="mb-2"><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
                <ul>
                  <li className="mb-2"><Link href="/termos-de-uso" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                  <li className="mb-2"><Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
                  <li className="mb-2"><Link href="/conformidade" className="hover:text-primary transition-colors">Conformidade</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
                <p className="text-sm">[Informações de Contato]</p>
              </div>
            </div>
            <div className="text-center text-xs mt-8 pt-8 border-t border-gray-800">
              © 2025 AORKIA. Todos os direitos reservados.
              Desenvolvido por Synapse B2B | Plataformas Digitais arquitetadas em Engenharia de Receita.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
