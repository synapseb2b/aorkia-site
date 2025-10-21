import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Cloud, FileText, Lock, ShieldAlert, CheckCircle, XCircle, Globe, Clock, Server, Scale } from 'lucide-react';

// Componente Divisor de Seção
const SectionDivider = () => (
  <div className="relative w-full h-12 flex items-center justify-center my-12">
    <div className="absolute w-full h-px bg-primary/20"></div>
    <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-fast"></div>
  </div>
);

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
  
  const clientLogos = ['logo-placeholder-1.svg', 'logo-placeholder-2.svg', 'logo-placeholder-3.svg', 'logo-placeholder-4.svg', 'logo-placeholder-5.svg', 'logo-placeholder-6.svg'];
  const platformLogos = ['m365.svg', 'dynamics.svg', 'salesforce.svg', 'google.svg', 'azure.svg', 'entra-id.svg'];


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
      
      <main className="min-h-screen bg-black text-white">
        {/* Seção Hero */}
        <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
             <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-20">
                <source src="/video/hero-background.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
            <div className="relative z-20 px-4 max-w-4xl mx-auto animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    <span className="text-primary">Resiliência Cibernética</span> para Dados SaaS. Seu Negócio à Prova de Falhas.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    A AORKIA ativa a Keepit, líder global em proteção de dados SaaS, para garantir que seu negócio nunca pare. Backup imutável e recuperação instantânea à prova de ransomware.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/backup_saas_estrategico" className="bg-primary text-black font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg">
                        Conheça o Backup Estratégico
                    </Link>
                </div>
            </div>
        </section>

        {/* Seção Carrossel Clientes */}
        <section className="py-16 md:py-24 text-center">
             <div className="container mx-auto px-4">
                 <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">A confiança de quem opera sem margem para erro</h2>
                     <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">Líderes em setores críticos protegem seus dados SaaS com a Keepit. Junte-se a eles.</p>
                     <div className="relative w-full overflow-hidden h-24">
                        <div className="absolute top-0 left-0 flex animate-scroll">
                            {[...clientLogos, ...clientLogos].map((logo, index) => (
                                <div key={`client-${index}`} className="flex-shrink-0 w-48 flex items-center justify-center">
                                    <Image
                                        src={`/logos/${logo}`}
                                        alt={logo.split('.')[0]}
                                        width={160}
                                        height={80}
                                        className="mx-8 object-contain h-16 w-auto filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* Seção "A Realidade da Proteção Nativa" */}
        <section className="py-16 md:py-24 text-center">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">A Ilusão de Segurança que Custa Caro</h2>
                <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                    A proteção nativa de plataformas como Microsoft 365 e Google Workspace não é backup. É uma falsa sensação de segurança que deixa seus dados mais valiosos expostos.
                </p>
                <div className="bg-gray-900/50 border-2 border-primary rounded-2xl p-8 md:p-12 text-left shadow-2xl shadow-primary/10">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">A Realidade da Proteção Nativa</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start">
                            <XCircle className="w-10 h-10 text-red-500 mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Retenção Limitada e Inflexível</h4>
                                <p className="text-gray-400">Dados são permanentemente excluídos após 30-90 dias, sem chance de recuperação.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <XCircle className="w-10 h-10 text-red-500 mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Vulnerável a Ransomware</h4>
                                <p className="text-gray-400">Se um ataque criptografa seus dados, a nuvem sincroniza o ataque, tornando os dados inúteis.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <XCircle className="w-10 h-10 text-red-500 mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Recuperação Lenta e Incompleta</h4>
                                <p className="text-gray-400">Restaurar dados é um processo manual, demorado e que não garante a integridade total.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <XCircle className="w-10 h-10 text-red-500 mr-4 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Responsabilidade Contratual é Sua</h4>
                                <p className="text-gray-400">Microsoft e Google afirmam em contrato: a responsabilidade final pela proteção dos seus dados é sua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* Seção Carrossel Plataformas */}
         <section className="py-16 md:py-24 text-center">
             <div className="container mx-auto px-4">
                 <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Uma Plataforma Inteligente. Cobertura Total.</h2>
                     <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">Proteja os ecossistemas SaaS mais críticos para o seu negócio com uma única solução.</p>
                     <div className="relative w-full overflow-hidden h-24">
                        <div className="absolute top-0 left-0 flex animate-scroll-reverse">
                            {[...platformLogos, ...platformLogos].map((logo, index) => (
                                <div key={`platform-${index}`} className="flex-shrink-0 w-48 flex items-center justify-center">
                                    <Image
                                        src={`/logos/${logo}`}
                                        alt={logo.split('.')[0]}
                                        width={160}
                                        height={80}
                                        className="mx-8 object-contain h-16 w-auto filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Seção CTA Final */}
        <section className="py-20 md:py-32 text-center bg-gradient-to-br from-primary to-green-600">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Não Deixe o Risco Definir o Seu Futuro.</h2>
              <p className="text-lg md:text-xl text-gray-900 mb-10">
                  A AORKIA, parceira oficial da Keepit, oferece a única solução de Backup SaaS Estratégico que realmente protege seu negócio. Converse com nossos especialistas e transforme vulnerabilidade em vantagem competitiva.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Link href="/contato" className="bg-black text-primary hover:bg-gray-800 font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                      Falar com Especialista
                  </Link>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-transparent border-2 border-black text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-primary transition duration-300 text-lg">
                      Voltar ao Topo
                  </button>
              </div>
          </div>
        </section>
      </main>
    </>
  );
}

