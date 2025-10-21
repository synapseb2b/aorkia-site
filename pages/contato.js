import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Mail, Phone, Building, User, MessageSquare } from 'lucide-react';

// Componente Divisor de Seção
const SectionDivider = () => (
  <div className="relative w-full h-12 flex items-center justify-center my-12">
    <div className="absolute w-full h-px bg-primary/20"></div>
    <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-fast"></div>
  </div>
);

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: 'Olá! Gostaria de saber mais sobre a solução de Backup Estratégico da AORKIA.',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('');

    if (!formData.name || !formData.email || !formData.phone) {
        setFormStatus('Por favor, preencha os campos obrigatórios.');
        return;
    }

    const whatsappNumber = "5531988019006";
    const text = `
*Novo Contato - Site AORKIA*

*Nome:* ${formData.name}
*Empresa:* ${formData.company || 'Não informado'}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}

*Mensagem:*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    setFormStatus('Sua mensagem foi preparada. Envie pelo WhatsApp!');
  };

  return (
    <>
      <Head>
        <title>Contato | AORKIA</title>
        <meta name="description" content="Fale com nossos especialistas em Resiliência Cibernética. Tire suas dúvidas e descubra como podemos proteger seus dados SaaS." />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero */}
        <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
            <div 
                className="absolute inset-0 z-0 opacity-20"
                style={{
                backgroundImage: 'url(/image/contato_hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
          
            <div className="relative z-20 px-4 max-w-4xl mx-auto animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-primary">
                    Vamos Conversar?
                </h1>
                <h2 className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    Estamos prontos para entender seu desafio e desenhar a estratégia de resiliência que seu negócio precisa. Preencha o formulário ou entre em contato pelos nossos canais.
                </h2>
            </div>
        </section>

        <SectionDivider />

        {/* Seção do Formulário e Informações */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              
              {/* Formulário */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                <h3 className="text-3xl font-bold text-white mb-8">Envie sua Mensagem</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6 relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                    <input type="text" name="name" placeholder="Seu nome *" value={formData.name} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"/>
                  </div>
                  <div className="mb-6 relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                    <input type="text" name="company" placeholder="Sua empresa" value={formData.company} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"/>
                  </div>
                   <div className="mb-6 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                    <input type="email" name="email" placeholder="Seu e-mail *" value={formData.email} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"/>
                  </div>
                   <div className="mb-6 relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                    <input type="tel" name="phone" placeholder="Seu telefone *" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"/>
                  </div>
                  <div className="mb-8 relative">
                    <MessageSquare className="absolute left-4 top-5 text-primary" />
                    <textarea name="message" rows="5" placeholder="Mensagem" value={formData.message} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-black font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg">
                    Enviar via WhatsApp
                  </button>
                  {formStatus && <p className="text-center mt-4 text-primary">{formStatus}</p>}
                </form>
              </div>

              {/* Informações de Contato */}
              <div className="text-center md:text-left pt-8">
                  <h3 className="text-3xl font-bold text-white mb-6">Canais Diretos</h3>
                  <p className="text-gray-400 mb-10 text-lg">
                      Prefere um contato mais direto? Fique à vontade para nos chamar ou enviar um e-mail.
                  </p>
                  <div className="space-y-8">
                      <div className="flex items-center justify-center md:justify-start">
                          <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center">
                              <Mail className="w-8 h-8 text-primary"/>
                          </div>
                          <div className="ml-6">
                              <h4 className="text-xl font-bold text-white">E-mail</h4>
                              <a href="mailto:contato@aorkia.com" className="text-gray-300 hover:text-primary transition-colors text-lg">contato@aorkia.com</a>
                          </div>
                      </div>
                       <div className="flex items-center justify-center md:justify-start">
                          <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center">
                              <Phone className="w-8 h-8 text-primary"/>
                          </div>
                          <div className="ml-6">
                              <h4 className="text-xl font-bold text-white">Telefone</h4>
                              <a href="https://wa.me/5531988019006" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors text-lg">+55 31 98801-9006</a>
                          </div>
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
