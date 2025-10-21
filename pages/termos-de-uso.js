import Head from 'next/head';
import Link from 'next/link';

// Componente Divisor de Seção
const SectionDivider = () => (
  <div className="relative w-full h-12 flex items-center justify-center my-8">
    <div className="absolute w-full h-px bg-primary/20"></div>
    <div className="absolute w-1/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
  </div>
);

export default function TermosDeUso() {
  return (
    <>
      <Head>
        <title>Termos de Uso | AORKIA</title>
        <meta name="description" content="Consulte os Termos de Uso que regem o uso do site e dos serviços da AORKIA." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Seção Hero */}
        <section className="relative pt-40 pb-20 text-center bg-gray-900/50">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
           <div className="relative z-20 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-primary">
                    Termos de Uso
                </h1>
                <p className="text-lg text-gray-400">
                    Última atualização: 21 de Outubro de 2025
                </p>
           </div>
        </section>

        {/* Conteúdo Legal */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-gray-300 text-lg leading-relaxed">

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20 space-y-6">
              <h2 className="text-2xl font-bold text-white">1. Bem-vindo à AORKIA</h2>
              <p>Ao acessar e utilizar o site da AORKIA, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concorda com algum destes termos, está proibido de usar ou acessar este site.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">2. Uso do Conteúdo</h2>
              <p>Todo o conteúdo presente neste site, incluindo textos, gráficos, logos e imagens, é propriedade da AORKIA ou de seus parceiros e é protegido por leis de direitos autorais. O uso do conteúdo é permitido apenas para fins informativos e não comerciais. Qualquer outra utilização, incluindo a reprodução, modificação ou distribuição, é estritamente proibida sem a nossa autorização prévia por escrito.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">3. Isenção de Responsabilidade</h2>
              <p>As informações fornecidas neste site são para fins informativos gerais. A AORKIA não oferece garantias, expressas ou implícitas, sobre a completude, precisão ou confiabilidade das informações. O uso de qualquer informação obtida através deste site é de sua inteira responsabilidade.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">4. Limitação de Responsabilidade</h2>
              <p>Em nenhuma circunstância a AORKIA ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais no site da AORKIA.</p>

              <SectionDivider />
              
              <h2 className="text-2xl font-bold text-white">5. Alterações nos Termos de Uso</h2>
              <p>A AORKIA pode revisar estes Termos de Uso a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes termos.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">6. Contato</h2>
              <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:contato@aorkia.com" className="text-primary hover:underline">contato@aorkia.com</a>.</p>
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
