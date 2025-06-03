import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Contato() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: '',
    interesse: 'Backup SaaS Estratégico'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio de formulário
    setTimeout(() => {
      setFormSubmitted(true);
      // Resetar formulário após envio
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        mensagem: '',
        interesse: 'Backup SaaS Estratégico'
      });
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Contato | AORKIA</title>
        <meta name="description" content="Entre em contato com a AORKIA e descubra como nossas soluções estratégicas podem transformar seu negócio." />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative h-screen overflow-hidden hero flex items-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
                Fale <span className="text-primary">Conosco</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                Estamos prontos para ajudar sua empresa a alcançar novos patamares de excelência tecnológica.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex justify-center animate-bounce">
            <a href="#contato" className="text-white text-4xl">
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção Formulário de Contato - Estilo Jam3 */}
        <section id="contato" className="py-24 md:py-32 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Lado esquerdo - Informações de contato */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Entre em contato</h2>
                <p className="text-xl text-gray-300 mb-12">
                  Preencha o formulário ao lado ou utilize um de nossos canais de atendimento para iniciar uma conversa sobre como podemos transformar sua operação.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-6">
                      <i className="ri-map-pin-line text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Endereço</h3>
                      <p className="text-gray-300 text-lg">
                        Av. Getúlio Vargas, 671 — Sala 500<br />
                        Belo Horizonte - MG
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-6">
                      <i className="ri-phone-line text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Telefone</h3>
                      <p className="text-gray-300 text-lg">
                        +55 31 98801-9006
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-6">
                      <i className="ri-mail-line text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">E-mail</h3>
                      <p className="text-gray-300 text-lg">
                        contato@aorkia.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-3 text-white mr-6">
                      <i className="ri-time-line text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Horário de Atendimento</h3>
                      <p className="text-gray-300 text-lg">
                        Segunda a Sexta: 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-4">Siga-nos</h3>
                  <div className="flex space-x-6">
                    <a href="https://linkedin.com/company/aorkia" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white transition-colors">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="https://instagram.com/aorkia" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white transition-colors">
                      <i className="ri-instagram-line"></i>
                    </a>
                    <a href="https://twitter.com/aorkia" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white transition-colors">
                      <i className="ri-twitter-x-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Lado direito - Formulário */}
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                {formSubmitted ? (
                  <div className="text-center py-16">
                    <div className="text-6xl text-primary mb-6">
                      <i className="ri-check-line"></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Mensagem Enviada!</h3>
                    <p className="text-xl text-gray-300 mb-8">
                      Obrigado por entrar em contato. Um de nossos especialistas entrará em contato em até 24 horas úteis.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all text-lg font-medium"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6">Solicite uma avaliação gratuita</h3>
                    
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">Nome completo</label>
                      <input 
                        type="text" 
                        id="nome" 
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail corporativo</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-1">Empresa</label>
                      <input 
                        type="text" 
                        id="empresa" 
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-1">Telefone</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interesse" className="block text-sm font-medium text-gray-300 mb-1">Área de interesse</label>
                      <select 
                        id="interesse" 
                        name="interesse"
                        value={formData.interesse}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                        required
                      >
                        <option value="Backup SaaS Estratégico">Backup SaaS Estratégico</option>
                        <option value="Plataformas de FinOps com IA">Plataformas de FinOps com IA</option>
                        <option value="Plataformas Edge AI">Plataformas Edge AI</option>
                        <option value="Data Security Posture Management (DSPM)">Data Security Posture Management (DSPM)</option>
                        <option value="Breach and Attack Simulation (BAS)">Breach and Attack Simulation (BAS)</option>
                        <option value="Otimização de Presença Digital">Otimização de Presença Digital</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
                      <textarea 
                        id="mensagem" 
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows="4" 
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white" 
                        required
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg transition-all text-lg font-medium"
                      >
                        Enviar mensagem
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
