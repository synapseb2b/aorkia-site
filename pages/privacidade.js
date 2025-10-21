import Head from 'next/head';
import Link from 'next/link';

// Componente Divisor de Seção
const SectionDivider = () => (
  <div className="relative w-full h-12 flex items-center justify-center my-8">
    <div className="absolute w-full h-px bg-primary/20"></div>
    <div className="absolute w-1/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
  </div>
);

export default function Privacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | AORKIA</title>
        <meta name="description" content="Entenda como a AORKIA coleta, usa e protege suas informações pessoais." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Seção Hero */}
        <section className="relative pt-40 pb-20 text-center bg-gray-900/50">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
           <div className="relative z-20 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-primary">
                    Política de Privacidade
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
              <h2 className="text-2xl font-bold text-white">1. Nosso Compromisso</h2>
              <p>A AORKIA respeita a sua privacidade e está empenhada em proteger os seus dados pessoais. Esta política de privacidade informará como cuidamos dos seus dados pessoais quando você visita nosso site e informa sobre seus direitos de privacidade e como a lei o protege.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">2. Dados que Coletamos</h2>
              <p>Podemos coletar, usar, armazenar e transferir diferentes tipos de dados pessoais sobre você, como: dados de identidade (nome, sobrenome), dados de contato (endereço de e-mail, número de telefone) e dados técnicos (endereço IP, dados de login, tipo e versão do navegador).</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">3. Como Usamos Seus Dados</h2>
              <p>Usamos seus dados pessoais apenas quando a lei nos permite. Mais comumente, usaremos seus dados pessoais nas seguintes circunstâncias: para gerenciar nosso relacionamento com você, para administrar e proteger nossos negócios e este site e para fornecer conteúdo relevante do site e anúncios para você.</p>

              <SectionDivider />
              
              <h2 className="text-2xl font-bold text-white">4. Cookies</h2>
              <p>Nosso site utiliza cookies para distingui-lo de outros usuários. Isso nos ajuda a fornecer uma boa experiência ao navegar em nosso site e também nos permite melhorá-lo. Você pode configurar seu navegador para recusar todos ou alguns cookies do navegador, ou para alertá-lo quando os sites definirem ou acessarem cookies.</p>

              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">5. Seus Direitos Legais</h2>
              <p>Sob certas circunstâncias, você tem direitos sob as leis de proteção de dados em relação aos seus dados pessoais, incluindo o direito de solicitar acesso, correção, exclusão ou restrição do uso de seus dados pessoais.</p>
              
              <SectionDivider />

              <h2 className="text-2xl font-bold text-white">6. Contato</h2>
              <p>Se você tiver alguma dúvida sobre esta política de privacidade, entre em contato conosco através do e-mail: <a href="mailto:contato@aorkia.com" className="text-primary hover:underline">contato@aorkia.com</a>.</p>
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
