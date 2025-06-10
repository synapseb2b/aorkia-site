import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Termos de Uso | AORKIA</title>
        <meta name="description" content="Termos de Uso da AORKIA - Condições para utilização de nosso site e serviços." />
      </Head>

      <main className="bg-black text-white min-h-screen">
        {/* Seção Hero */}
        <section className="relative py-24 bg-gradient-to-r from-black to-gray-900">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Termos de Uso
              </h1>
              <p className="text-xl text-gray-300">
                Condições para utilização do site e serviços da AORKIA
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo dos Termos */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-invert max-w-none">
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Aceitação dos Termos</h2>
                <p className="text-gray-300 mb-4">
                  Ao acessar e usar o site da AORKIA (www.aorkia.com), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso site ou serviços.
                </p>
                <p className="text-gray-300">
                  Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam nossos serviços.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Descrição dos Serviços</h2>
                <p className="text-gray-300 mb-4">
                  A AORKIA oferece soluções tecnológicas especializadas, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Backup SaaS Estratégico</li>
                  <li>Operações de Bordas Inteligentes</li>
                  <li>Segurança para Operações Críticas (DSPM)</li>
                  <li>Plataformas de Inteligência de Receita com IA</li>
                  <li>Estratégia de Presença Digital</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Uso Aceitável</h2>
                <p className="text-gray-300 mb-4">Você concorda em usar nosso site apenas para fins legítimos e de acordo com estes Termos. Você não deve:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Usar o site de qualquer forma que viole leis locais, estaduais, nacionais ou internacionais</li>
                  <li>Transmitir ou procurar transmitir qualquer material que contenha vírus, cavalos de Troia ou outros códigos maliciosos</li>
                  <li>Tentar obter acesso não autorizado ao site, servidores ou redes conectadas</li>
                  <li>Interferir ou interromper o site ou servidores ou redes conectadas ao site</li>
                  <li>Usar o site para fins comerciais não autorizados</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Propriedade Intelectual</h2>
                <p className="text-gray-300 mb-4">
                  O conteúdo do site, incluindo mas não limitado a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da AORKIA e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
                </p>
                <p className="text-gray-300">
                  Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material do nosso site sem autorização prévia por escrito.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Privacidade</h2>
                <p className="text-gray-300">
                  Sua privacidade é importante para nós. Nossa coleta e uso de informações pessoais em conexão com o site é regida por nossa Política de Privacidade, que está incorporada a estes Termos de Uso por referência.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Isenção de Responsabilidade</h2>
                <p className="text-gray-300 mb-4">
                  As informações neste site são fornecidas "como estão" sem garantias de qualquer tipo, expressas ou implícitas. A AORKIA não garante que:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>O site atenderá às suas necessidades específicas</li>
                  <li>O site será ininterrupto, oportuno, seguro ou livre de erros</li>
                  <li>Os resultados obtidos do uso do site serão precisos ou confiáveis</li>
                  <li>Quaisquer erros no site serão corrigidos</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Limitação de Responsabilidade</h2>
                <p className="text-gray-300">
                  Em nenhuma circunstância a AORKIA será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo mas não limitado a perda de lucros, dados ou uso, decorrentes ou relacionados ao uso ou incapacidade de usar o site.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Indenização</h2>
                <p className="text-gray-300">
                  Você concorda em indenizar, defender e isentar a AORKIA de todas as reivindicações, responsabilidades, danos, perdas, custos e despesas (incluindo honorários advocatícios) decorrentes do seu uso do site ou violação destes Termos de Uso.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Modificações dos Termos</h2>
                <p className="text-gray-300">
                  A AORKIA reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação no site. Seu uso continuado do site após tais modificações constituirá sua aceitação dos termos revisados.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">10. Lei Aplicável</h2>
                <p className="text-gray-300">
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa decorrente destes termos será resolvida nos tribunais competentes de Belo Horizonte, Minas Gerais.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">11. Contato</h2>
                <p className="text-gray-300 mb-4">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-300">
                    <strong>E-mail:</strong> contato@aorkia.com<br />
                    <strong>Endereço:</strong> Av. Getúlio Vargas, 671 — Sala 500, Belo Horizonte - MG<br />
                    <strong>Telefone:</strong> +55 31 98801-9006
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">12. Disposições Gerais</h2>
                <p className="text-gray-300 mb-4">
                  Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível, as disposições restantes permanecerão em pleno vigor e efeito. A falha da AORKIA em exercer ou fazer cumprir qualquer direito ou disposição destes Termos de Uso não constituirá uma renúncia a tal direito ou disposição.
                </p>
                <p className="text-gray-300">
                  Estes Termos de Uso constituem o acordo completo entre você e a AORKIA em relação ao uso do site.
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
            <h2 className="text-3xl font-bold mb-6">Dúvidas sobre nossos Termos de Uso?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Nossa equipe jurídica está disponível para esclarecer qualquer questão sobre estes termos.
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

