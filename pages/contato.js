import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contato() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    foco: '',
    mensagem: ''
  });

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
      // Reset do formulário após envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        foco: '',
        mensagem: ''
      });
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Contato | AORKIA</title>
        <meta name="description" content="Entre em contato com a AORKIA e descubra como nossas soluções estratégicas podem impulsionar sua empresa." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero - Estilo Jam3 */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                Pronto para <span className="text-primary">transformar</span> seu negócio?
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mb-12">
                Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Formulário de Contato - Estilo Jam3 */}
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Formulário */}
              <div>
                {formSubmitted ? (
                  <div className="bg-gray-800 p-8 rounded-lg border border-primary text-center">
                    <div className="text-primary text-6xl mb-6">
                      <i className="ri-check-line"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Sua mensagem foi enviada. Um de nossos especialistas em ativação de soluções responderá em breve.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-lg font-medium text-gray-300 mb-2">Nome</label>
                      <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email corporativo</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-lg font-medium text-gray-300 mb-2">WhatsApp / Telefone</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        name="telefone" 
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="foco" className="block text-lg font-medium text-gray-300 mb-2">
                        Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:
                      </label>
                      <select 
                        id="foco" 
                        name="foco" 
                        value={formData.foco}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="Backup SaaS Estratégico">Backup SaaS Estratégico</option>
                        <option value="Operações de Bordas Inteligentes">Operações de Bordas Inteligentes</option>
                        <option value="Segurança para Operações Críticas">Segurança para Operações Críticas</option>
                        <option value="Plataforma de Inteligência de Receita com IA">Plataforma de Inteligência de Receita com IA</option>
                        <option value="Estratégia de Presença Digital AORKIA">Estratégia de Presença Digital AORKIA</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="mensagem" className="block text-lg font-medium text-gray-300 mb-2">Mensagem (opcional)</label>
                      <textarea 
                        id="mensagem" 
                        name="mensagem" 
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg text-lg font-medium transition-all"
                      >
                        Solicitar Contato
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Informações de Contato */}
              <div className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Endereço</h3>
                      <p className="text-gray-300">
                        Av. Getúlio Vargas, 671 — Sala 500<br />
                        Belo Horizonte - MG
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <i className="ri-phone-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Telefone</h3>
                      <p className="text-gray-300">
                        +55 31 98801-9006
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <i className="ri-mail-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-gray-300">
                        contato@aorkia.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mr-4">
                      <i className="ri-time-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Horário de Atendimento</h3>
                      <p className="text-gray-300">
                        Segunda a Sexta: 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/company/aorkia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-primary text-white p-3 rounded-full transition-colors"
                    >
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                    <a 
                      href="https://instagram.com/aorkia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-primary text-white p-3 rounded-full transition-colors"
                    >
                      <i className="ri-instagram-line text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
