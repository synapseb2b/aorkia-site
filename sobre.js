import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Efeito para controlar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Sobre a AORKIA | Soluções Estratégicas para Empresas B2B</title>
        <meta name="description" content="Conheça a AORKIA: nossa história, valores, abordagem estratégica e como transformamos ambientes críticos em sistemas coordenados, resilientes e escaláveis." />
      </Head>

      {/* Indicador de progresso de rolagem */}
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>

      <main>
        {/* Hero Section */}
        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10"></div>
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/video_hero.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
          
          <div className="container mx-auto max-w-7xl px-4 py-24 md:py-32 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transformando <span className="text-primary">ambientes críticos</span> em sistemas coordenados
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Conheça nossa história, valores e abordagem estratégica para impulsionar a transformação digital de empresas B2B.
              </p>
              <Link href="#nossa-historia" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-all">
                Conheça nossa história <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section id="nossa-historia" className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Nossa História</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    A AORKIA nasceu da visão de um grupo de especialistas em tecnologia que identificaram uma lacuna crítica no mercado: empresas B2B precisavam de um parceiro estratégico que realmente entendesse seus desafios tecnológicos complexos e oferecesse soluções personalizadas.
                  </p>
                  <p>
                    Fundada em 2018, nossa trajetória começou com foco em infraestrutura estratégica, rapidamente expandindo para backup SaaS, segurança cloud e otimização de receita B2B, sempre com uma abordagem consultiva e orientada a resultados.
                  </p>
                  <p>
                    Hoje, a AORKIA é reconhecida como referência em transformação digital para empresas que buscam não apenas implementar tecnologia, mas utilizá-la como alavanca estratégica para crescimento e inovação.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/sobre-historia.jpg" 
                    alt="História da AORKIA" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Desde 2018</p>
                  <p>Transformando negócios</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Abordagem */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Nossa Abordagem Estratégica</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-search-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Diagnóstico Preciso</h3>
                <p className="text-gray-700">
                  Analisamos profundamente seu ambiente tecnológico e processos de negócio para identificar oportunidades de otimização e pontos críticos que exigem atenção imediata.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-tools-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Implementação Especializada</h3>
                <p className="text-gray-700">
                  Nossa equipe de especialistas implementa soluções personalizadas com foco em resultados mensuráveis, garantindo adoção e valor de negócio desde o primeiro dia.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-line-chart-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Evolução Contínua</h3>
                <p className="text-gray-700">
                  Mantemos um ciclo constante de monitoramento, otimização e evolução das soluções implementadas, garantindo que sua tecnologia acompanhe o crescimento do seu negócio.
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Metodologia AORKIA</h3>
              <p className="text-gray-700 mb-6">
                Nossa metodologia proprietária combina as melhores práticas de mercado com nossa experiência acumulada para garantir implementações bem-sucedidas e resultados consistentes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <span className="font-medium">Avaliação</span>
                </div>
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <span className="font-medium">Planejamento</span>
                </div>
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <span className="font-medium">Implementação</span>
                </div>
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <span className="font-medium">Otimização</span>
                </div>
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <span className="font-medium">Evolução</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="ri-shield-check-line text-2xl text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Integridade</h3>
                  <p className="text-gray-300">
                    Agimos com transparência e ética em todas as interações. Nossos clientes confiam em nós porque sempre priorizamos seus interesses e entregamos o que prometemos.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="ri-lightbulb-line text-2xl text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Inovação</h3>
                  <p className="text-gray-300">
                    Buscamos constantemente novas tecnologias e abordagens para resolver desafios complexos. A inovação está no centro de tudo o que fazemos.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="ri-team-line text-2xl text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Colaboração</h3>
                  <p className="text-gray-300">
                    Trabalhamos como extensão da equipe dos nossos clientes, compartilhando conhecimento e construindo relacionamentos de longo prazo baseados em confiança mútua.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="ri-rocket-line text-2xl text-primary"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Excelência</h3>
                  <p className="text-gray-300">
                    Não nos contentamos com o bom quando podemos entregar o excelente. Buscamos a perfeição em cada detalhe e nos desafiamos constantemente a superar expectativas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Contamos com especialistas certificados e experientes em cada área de atuação, prontos para enfrentar seus desafios mais complexos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Especialista 1 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-64 relative">
                  <Image 
                    src="/team-member-1.jpg" 
                    alt="Especialista em Backup SaaS" 
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">Carlos Mendes</h3>
                  <p className="text-primary font-medium mb-3">Especialista em Backup SaaS</p>
                  <p className="text-gray-700 mb-4">
                    Mais de 10 anos de experiência em proteção de dados e continuidade de negócios. Certificado Keepit e Microsoft 365.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <i className="ri-linkedin-box-fill text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <i className="ri-twitter-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Especialista 2 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-64 relative">
                  <Image 
                    src="/team-member-2.jpg" 
                    alt="Especialista em Infraestrutura" 
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">Ana Oliveira</h3>
                  <p className="text-primary font-medium mb-3">Especialista em Infraestrutura</p>
                  <p className="text-gray-700 mb-4">
                    Arquiteta de soluções cloud com certificações AWS, Azure e GCP. Especialista em ambientes híbridos e multicloud.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <i className="ri-linkedin-box-fill text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <i className="ri-github-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Especialista 3 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-64 relative">
                  <Image 
                    src="/team-member-3.jpg" 
                    alt="Especialista em Segurança Cloud" 
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">Rafael Costa</h3>
                  <p className="text-primary font-medium mb-3">Especialista em Segurança Cloud</p>
                  <p className="text-gray-700 mb-4">
                    Especialista em CSPM e CNAPP com foco em conformidade regulatória. Certificado CISSP e Cloud Security Alliance.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <i className="ri-linkedin-box-fill text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <i className="ri-medium-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/contato" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                Entre em contato com nossa equipe <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Parceiros Estratégicos */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Parceiros Estratégicos</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Trabalhamos com os melhores fornecedores de tecnologia para entregar soluções de classe mundial para nossos clientes.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image 
                  src="/partner-keepit.png" 
                  alt="Keepit" 
                  width={160} 
                  height={80} 
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image 
                  src="/partner-microsoft.png" 
                  alt="Microsoft" 
                  width={160} 
                  height={80} 
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image 
                  src="/partner-aws.png" 
                  alt="AWS" 
                  width={160} 
                  height={80} 
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image 
                  src="/partner-google.png" 
                  alt="Google Cloud" 
                  width={160} 
                  height={80} 
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image 
                  src="/partner-salesforce.png" 
                  alt="Salesforce" 
                  width={160} 
                  height={80} 
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nosso Impacto */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">Nosso Impacto</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">150+</div>
                <p className="text-xl text-gray-700">Clientes atendidos</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <p className="text-xl text-gray-700">Taxa de satisfação</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-xl text-gray-700">Projetos entregues</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Depoimentos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="text-amber-400 flex">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "A AORKIA transformou nossa infraestrutura de TI de um centro de custo para um motor de inovação. A implementação da solução de backup SaaS nos deu tranquilidade e reduziu nossos custos operacionais em 30%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src="/testimonial-1.jpg" 
                        alt="Cliente" 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Marcelo Santos</p>
                      <p className="text-sm text-gray-600">CIO, Empresa de Tecnologia</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="text-amber-400 flex">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "A abordagem estratégica da AORKIA para segurança cloud nos ajudou a identificar e mitigar riscos que nem sabíamos que existiam. Agora temos visibilidade total e conformidade contínua em nossos ambientes multicloud."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src="/testimonial-2.jpg" 
                        alt="Cliente" 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Fernanda Lima</p>
                      <p className="text-sm text-gray-600">CISO, Instituição Financeira</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Descubra como nossas soluções estratégicas podem impulsionar sua empresa para o próximo nível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solucoes" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-all">
                Explorar Soluções <i className="ri-arrow-right-line ml-2"></i>
              </Link>
              <Link href="/contato" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-all">
                Fale Conosco <i className="ri-customer-service-2-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Assumindo que é global via _app.js) */}
      {/* <Footer /> */}
    </>
  );
}
