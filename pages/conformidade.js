import Head from 'next/head';
import Link from 'next/link';
import { ShieldCheck, Database, Lock } from 'lucide-react';

// Componente Divisor de Seção
const SectionDivider = () => (
  <div className="relative w-full h-12 flex items-center justify-center my-8">
    <div className="absolute w-full h-px bg-primary/20"></div>
    <div className="absolute w-1/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
  </div>
);

export default function Conformidade() {
  return (
    <>
      <Head>
        <title>Conformidade | AORKIA</title>
        <meta name="description" content="Saiba mais sobre as práticas de conformidade e segurança da AORKIA e de nossos parceiros." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Seção Hero */}
        <section className="relative pt-40 pb-20 text-center bg-gray-900/50">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
           <div className="relative z-20 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-primary">
                    Conformidade e Segurança
                </h1>
                <p className="text-lg text-gray-400">
                    Nosso compromisso com a proteção e a governança dos seus dados.
                </p>
           </div>
        </section>

        {/* Conteúdo Legal */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-gray-300 text-lg leading-relaxed">

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20 space-y-6">
              <h2 className="text-2xl font-bold text-white">1. Nosso Padrão de Segurança</h2>
              <p>A AORKIA e nosso parceiro estratégico, Keepit, operam sob os mais rigorosos padrões de segurança e conformidade do setor. Entendemos que a confiança é a base da resiliência cibernética, e nossa arquitetura é projetada para garantir a integridade, confidencialidade e disponibilidade dos seus dados.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">2. Conformidade com a LGPD</h2>
              <p>Nossas soluções são desenvolvidas para ajudar sua organização a atender aos requisitos da Lei Geral de Proteção de Dados (LGPD). A capacidade de realizar buscas granulares, restaurar dados específicos e garantir a imutabilidade dos backups são recursos essenciais para uma estratégia de conformidade robusta.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">3. Certificações Relevantes</h2>
              <p>A plataforma Keepit possui certificações reconhecidas globalmente, como ISO/IEC 27001, que atesta um sistema de gestão de segurança da informação de classe mundial. Nossos data centers independentes também seguem os mais altos padrões de segurança física e lógica.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">4. Transparência</h2>
              <p>Estamos comprometidos com a transparência em nossas operações. Para mais detalhes sobre nossas práticas de segurança, certificações ou para solicitar documentação de conformidade, entre em contato com nossa equipe.</p>
              
              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">5. Contato</h2>
              <p>Para questões relacionadas à conformidade e segurança, entre em contato conosco através do e-mail: <a href="mailto:contato@aorkia.com" className="text-primary hover:underline">contato@aorkia.com</a>.</p>
            </div>
            
             <div className="text-center mt-12">
                <Link href="/" className="bg-primary text-black font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg">
                    Voltar para Home
                </Link>
             </div>
          </div>
        </section>
      </main>
    </>
  );
}
