import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Contato() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio do formulário
    setFormStatus('loading');
    
    // Simulação de resposta do servidor após 1.5 segundos
    setTimeout(() => {
      setFormStatus('success');
      // Limpar formulário após envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        assunto: '',
        mensagem: ''
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contato AORKIA | Fale com nossa equipe de especialistas</title>
        <meta name="description" content="Entre em contato com a AORKIA para descobrir como nossas soluções estratégicas podem impulsionar sua empresa. Agende uma conversa com nossos especialistas." />
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
                Vamos <span className="text-primary">transformar</span> seu negócio juntos
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Entre em contato com nossa equipe de especialistas e descubra como podemos impulsionar sua empresa.
              </p>
              <a href="#formulario" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-all">
                Fale conosco agora <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Informações de Contato</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-map-pin-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Endereço</h3>
                      <p className="text-gray-700">
                        Av. Getúlio Vargas, 671 — Sala 500<br />
                        Belo Horizonte - MG<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-phone-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Telefone</h3>
                      <p className="text-gray-700">
                        +55 31 98801-9006
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-mail-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
                      <p className="text-gray-700">
                        contato@aorkia.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-time-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">Horário de Atendimento</h3>
                      <p className="text-gray-700">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado e Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Siga-nos</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                      <i className="ri-twitter-fill text-xl"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                      <i className="ri-instagram-fill text-xl"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
                      <i className="ri-facebook-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div id="formulario" className="md:w-1/2">
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Envie sua mensagem</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
                      <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email corporativo *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        name="telefone" 
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                      <input 
                        type="text" 
                        id="empresa" 
                        name="empresa" 
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">Assunto de interesse *</label>
                      <select 
                        id="assunto" 
                        name="assunto" 
                        value={formData.assunto}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="backup-saas">Backup SaaS Estratégico</option>
                        <option value="infraestrutura">Infraestrutura Estratégica</option>
                        <option value="seguranca-cloud">Segurança Cloud</option>
                        <option value="receita-b2b">Receita B2B</option>
                        <option value="outro">Outro assunto</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                      <textarea 
                        id="mensagem" 
                        name="mensagem" 
                        rows="4" 
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                        required
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                        disabled={formStatus === 'loading'}
                      >
                        {formStatus === 'loading' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </>
                        ) : 'Enviar mensagem'}
                      </button>
                      
                      {formStatus === 'success' && (
                        <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg">
                          <p className="flex items-center">
                            <i className="ri-check-line mr-2"></i>
                            Mensagem enviada com sucesso! Entraremos em contato em breve.
                          </p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que escolher a AORKIA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">Por que escolher a AORKIA?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-customer-service-2-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Atendimento Personalizado</h3>
                <p className="text-gray-700">
                  Cada cliente é único. Nossa abordagem consultiva garante que entendamos profundamente seus desafios específicos para oferecer soluções sob medida.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Expertise Comprovada</h3>
                <p className="text-gray-700">
                  Nossa equipe é formada por especialistas certificados com vasta experiência em implementações complexas e casos de sucesso em diversos segmentos.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-line-chart-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Resultados Mensuráveis</h3>
                <p className="text-gray-700">
                  Focamos em entregar valor mensurável para seu negócio, com KPIs claros e acompanhamento contínuo dos resultados das soluções implementadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Veja o que nossos clientes têm a dizer sobre nossa parceria e os resultados alcançados.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl relative">
                <div className="absolute -top-4 left-8 text-5xl text-primary opacity-20">"</div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-amber-400 flex">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8">
                    "A implementação do Backup SaaS pela AORKIA foi impecável. Além da excelência técnica, o que mais me impressionou foi o entendimento profundo do nosso negócio e necessidades específicas."
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
                      <p className="font-bold text-gray-900">Ricardo Almeida</p>
                      <p className="text-sm text-gray-600">Diretor de TI, Empresa de Saúde</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl relative">
                <div className="absolute -top-4 left-8 text-5xl text-primary opacity-20">"</div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-amber-400 flex">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8">
                    "A AORKIA transformou nossa infraestrutura de TI em um verdadeiro diferencial competitivo. A equipe é extremamente competente e sempre disponível para nos apoiar."
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
                      <p className="font-bold text-gray-900">Camila Rodrigues</p>
                      <p className="text-sm text-gray-600">CIO, Empresa de Varejo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl relative">
                <div className="absolute -top-4 left-8 text-5xl text-primary opacity-20">"</div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-amber-400 flex">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8">
                    "A solução de segurança cloud implementada pela AORKIA nos deu visibilidade e controle que nunca tivemos antes. Agora dormimos tranquilos sabendo que nossos dados estão protegidos."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image 
                        src="/testimonial-3.jpg" 
                        alt="Cliente" 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Eduardo Martins</p>
                      <p className="text-sm text-gray-600">CISO, Instituição Financeira</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa de Localização */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Nossa Localização</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Estamos estrategicamente localizados em Belo Horizonte, com atendimento em todo o Brasil.
            </p>
            
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              {/* Aqui seria inserido um mapa interativo */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">
                  <i className="ri-map-pin-line text-4xl block mb-2"></i>
                  Mapa de localização da AORKIA
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://maps.google.com/?q=Av.+Getúlio+Vargas,+671,+Belo+Horizonte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Ver no Google Maps <i className="ri-external-link-line ml-2"></i>
              </a>
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
              <a href="#formulario" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-all">
                Fale Conosco <i className="ri-customer-service-2-line ml-2"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Assumindo que é global via _app.js) */}
      {/* <Footer /> */}
    </>
  );
}
