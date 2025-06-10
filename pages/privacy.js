import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | AORKIA</title>
        <meta name="description" content="Política de Privacidade da AORKIA - Como coletamos, usamos e protegemos suas informações pessoais." />
      </Head>

      <main className="bg-black text-white min-h-screen">
        {/* Seção Hero */}
        <section className="relative py-24 bg-gradient-to-r from-black to-gray-900">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Política de Privacidade
              </h1>
              <p className="text-xl text-gray-300">
                Como a AORKIA coleta, usa e protege suas informações pessoais
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo da Política */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-invert max-w-none">
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Informações Gerais</h2>
                <p className="text-gray-300 mb-4">
                  A AORKIA está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site e serviços.
                </p>
                <p className="text-gray-300">
                  Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras regulamentações aplicáveis de proteção de dados.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Informações que Coletamos</h2>
                <p className="text-gray-300 mb-4">Coletamos as seguintes categorias de informações:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong>Informações de Contato:</strong> Nome, e-mail, telefone e empresa quando você preenche nossos formulários</li>
                  <li><strong>Informações de Navegação:</strong> Dados sobre como você usa nosso site, incluindo páginas visitadas e tempo de permanência</li>
                  <li><strong>Informações Técnicas:</strong> Endereço IP, tipo de navegador, sistema operacional e dados de cookies</li>
                  <li><strong>Informações de Comunicação:</strong> Conteúdo de mensagens enviadas através de nossos canais de contato</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Como Usamos suas Informações</h2>
                <p className="text-gray-300 mb-4">Utilizamos suas informações para:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Responder às suas solicitações e fornecer suporte</li>
                  <li>Enviar informações sobre nossos produtos e serviços</li>
                  <li>Melhorar nosso site e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                  <li>Proteger nossos direitos e prevenir fraudes</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Compartilhamento de Informações</h2>
                <p className="text-gray-300 mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Com prestadores de serviços que nos auxiliam na operação do site</li>
                  <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Segurança dos Dados</h2>
                <p className="text-gray-300">
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, controles de acesso e monitoramento regular de nossos sistemas.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Seus Direitos</h2>
                <p className="text-gray-300 mb-4">Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Acesso às suas informações pessoais</li>
                  <li>Correção de dados incorretos ou incompletos</li>
                  <li>Exclusão de seus dados pessoais</li>
                  <li>Portabilidade dos dados</li>
                  <li>Revogação do consentimento</li>
                  <li>Oposição ao processamento</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Cookies</h2>
                <p className="text-gray-300">
                  Utilizamos cookies para melhorar sua experiência em nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador. Para mais informações sobre como usamos cookies, consulte nossa política de cookies.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Contato</h2>
                <p className="text-gray-300 mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-300">
                    <strong>E-mail:</strong> contato@aorkia.com<br />
                    <strong>Endereço:</strong> Av. Getúlio Vargas, 671 — Sala 500, Belo Horizonte - MG
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Alterações nesta Política</h2>
                <p className="text-gray-300">
                  Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas através de nosso site ou por e-mail. A versão mais recente estará sempre disponível nesta página.
                </p>
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-400 text-sm">
                  Última atualização: Janeiro de 2025
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Dúvidas sobre nossa Política de Privacidade?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Nossa equipe está pronta para esclarecer qualquer questão sobre como protegemos seus dados.
            </p>
            <Link 
              href="/contato" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all font-medium text-lg"
            >
              Entre em Contato
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

