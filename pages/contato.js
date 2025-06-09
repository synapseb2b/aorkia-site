import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Contato() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    solucao: ''
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        solucao: ''
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contato | AORKIA</title>
        <meta name="description" content="Entre em contato com a AORKIA para descobrir como nossas soluções estratégicas podem impulsionar sua empresa." />
      </Head>

      <main className="bg-black text-white">
        {/* Hero removido conforme solicitado */}

        {/* Seção Formulário de Contato - Estilo Jam3 */}
        <section className="py-24 md:py-32 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Fale Conosco</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Preencha o formulário ao lado e um de nossos especialistas entrará em contato para discutir como podemos ajudar sua empresa.
                </p>
                
                {/* Logo institucional ilustrativa */}
                <div className="mb-12">
                  <Image
                    src="/image/logo_aorkia_color.png"
                    alt="AORKIA Logo"
                    width={180}
                    height={60}
                    className="mb-4"
                    priority
                  />
                </div>

                <div className="space-y-6 mt-12">
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mt-1 mr-4">
                      <i className="ri-map-pin-2-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                      <p className="text-gray-300">
                        Av. Getúlio Vargas, 671 — Sala 500<br />
                        Belo Horizonte - MG
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mt-1 mr-4">
                      <i className="ri-phone-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                      <p className="text-gray-300">+55 31 98801-9006</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mt-1 mr-4">
                      <i className="ri-mail-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <p className="text-gray-300">contato@aorkia.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mt-1 mr-4">
                      <i className="ri-time-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Horário de Atendimento</h3>
                      <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/company/aorkia" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                    <a href="https://instagram.com/aorkia" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="text-6xl text-primary mb-6">
                      <i className="ri-check-line"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                    <p className="text-gray-300 text-lg mb-8">
                      Obrigado por entrar em contato. Um de nossos especialistas em ativação de soluções responderá em breve.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                      <input 
                        type="text" 
                        id="nome" 
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email corporativo</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp / Telefone</label>
                      <input 
                        type="tel" 
                        id="telefone" 
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">Selecione abaixo a frente que mais representa o seu foco prioritário neste momento:</label>
                      <div className="space-y-3">
                        {[
                          { label: 'Backup SaaS Estratégico', img: '/image/backup.png' },
                          { label: 'Operações de Bordas Inteligentes', img: '/image/bordas.png' },
                          { label: 'Segurança para Operações Críticas', img: '/image/dspm.png' },
                          { label: 'Plataforma de Inteligência de Receita com IA', img: '/image/receitas.png' },
                          { label: 'Estratégia de Presença Digital AORKIA', img: '/image/digital.png' }
                        ].map((option) => (
                          <div key={option.label} className="flex items-center">
                            <input 
                              type="radio" 
                              id={option.label.replace(/\s+/g, '-').toLowerCase()} 
                              name="solucao"
                              value={option.label}
                              checked={formData.solucao === option.label}
                              onChange={handleInputChange}
                              className="h-5 w-5 text-primary focus:ring-primary border-gray-600"
                            />
                            {/* Adiciona uma miniatura ilustrando a solução */}
                            <Image
                              src={option.img}
                              alt={option.label}
                              width={32}
                              height={32}
                              className="ml-3 rounded"
                            />
                            <label htmlFor={option.label.replace(/\s+/g, '-').toLowerCase()} className="ml-3 text-gray-300">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-1">Mensagem (opcional)</label>
                      <textarea 
                        id="mensagem" 
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : 'Solicitar Contato'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Seções de Mapa e FAQ removidas conforme solicitado */}
      </main>
    </>
  );
}
