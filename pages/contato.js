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

  // Função para rolagem suave ao clicar no botão "Contato"
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('fale-conosco');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        {/* Seção Hero - Estilo Jam3 com vídeo */}
        <section className="relative h-screen overflow-hidden hero flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/image/video_hero.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                Entre em contato conosco.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-white">
                Fale com a <span className="text-primary">AORKIA</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300">
                Descubra como nossas soluções estratégicas podem impulsionar sua empresa.
              </p>
              
              {/* Botão para rolar para o formulário de contato */}
              <button 
                onClick={scrollToContact}
                className="text-lg font-medium px-8 py-3 border text-white border-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Contato
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex justify-center animate-bounce">
            <a 
              href="#fale-conosco" 
              onClick={scrollToContact}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </section>

        {/* Seção Formulário de Contato */}
        <section id="fale-conosco" className="relative bg-white text-black py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Fale Conosco
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Estamos prontos para ativar as melhores soluções tecnológicas para sua empresa. Entre em contato e descubra como podemos impulsionar seu crescimento.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 md:p-12">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-green-600 text-6xl mb-6">
                    <i className="ri-check-circle-line"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">Mensagem Enviada com Sucesso!</h3>
                  <p className="text-gray-700 mb-8">
                    Obrigado pelo seu interesse na AORKIA. Nossa equipe entrará em contato em breve para discutir como podemos ativar as melhores soluções para sua empresa.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="bg-primary text-white px-8 py-3 rounded hover:bg-primary/90 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                        placeholder="seu.email@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="solucao" className="block text-sm font-medium text-gray-700 mb-2">
                        Solução de Interesse
                      </label>
                      <select
                        id="solucao"
                        name="solucao"
                        value={formData.solucao}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                      >
                        <option value="">Selecione uma solução</option>
                        <option value="backup">Backup SaaS Estratégico</option>
                        <option value="bordas">Operações de Bordas Inteligentes</option>
                        <option value="dspm">Segurança para Operações Críticas</option>
                        <option value="receitas">Inteligência de Receita com IA</option>
                        <option value="digital">Estratégia de Presença Digital</option>
                        <option value="consultoria">Consultoria Estratégica</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black"
                      placeholder="Conte-nos sobre seus desafios e como podemos ajudar sua empresa..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="bg-primary text-white px-12 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensagem'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

