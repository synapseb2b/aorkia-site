import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Award, BrainCircuit, Users, Handshake } from 'lucide-react';

// Componente Divisor de Seção
const SectionDivider = () => (
  <div className="relative w-full h-12 flex items-center justify-center my-12">
    <div className="absolute w-full h-px bg-primary/20"></div>
    <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-fast"></div>
  </div>
);

// Componente de Card de Valor
const ValueCard = ({ icon: Icon, title, text }) => (
    <div className="text-center p-8 bg-gray-900/50 rounded-2xl border border-primary/20 h-full">
        <div className="flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/30 rounded-full mx-auto mb-6">
            <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{text}</p>
    </div>
);


export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre a AORKIA | Especialistas em Resiliência Cibernética</title>
        <meta name="description" content="Nossa missão é blindar negócios contra perda de dados SaaS, ativando a plataforma líder mundial Keepit para garantir continuidade e conformidade." />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main className="bg-black text-white text-center">
        {/* Seção Hero */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
            src="/video/video_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
          
          <div className="relative z-20 px-4 max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-primary">
                    Nós existimos para que o seu negócio nunca pare.
                </h1>
                <h2 className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    Em um mundo onde a continuidade digital é inegociável, a AORKIA nasceu com um propósito claro: ser a linha de frente da Resiliência Cibernética para dados SaaS no Brasil.
                </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/backup_saas_estrategico" className="bg-primary hover:bg-primary/90 text-black font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                Conheça o Backup Estratégico
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition duration-300 text-lg">
                Fale com um Especialista
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Nossa História */}
        <section id="nossa-historia" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 md:p-12 border border-primary/20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nossa História</h2>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6">
                        A AORKIA surgiu da constatação de uma falha crítica no mercado: empresas migravam para a nuvem acreditando que seus dados estavam seguros, sem entender que a responsabilidade final pela proteção era delas. Vimos negócios vulneráveis a ransomware e perdas de dados, dependendo de proteções nativas insuficientes.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Nossa missão se tornou blindar o ecossistema SaaS brasileiro. Para isso, firmamos parceria com a <strong className="text-primary">Keepit</strong>, a plataforma líder global em backup e recuperação, reconhecida por sua arquitetura de nuvem independente e imutável. Hoje, não apenas ativamos uma ferramenta, mas implementamos uma estratégia completa de resiliência que garante a continuidade e a conformidade dos nossos clientes.
                    </p>
                </div>
            </div>
        </section>
        
        <SectionDivider />

        {/* Nossos Valores */}
        <section id="nossos-valores" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Nossos Pilares</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ValueCard 
                        icon={Shield}
                        title="Foco Absoluto em Resiliência"
                        text="Não somos generalistas. Nossa energia está 100% dedicada a proteger dados SaaS. Essa especialização garante que entregamos a solução mais robusta e eficaz do mercado para o desafio de backup e recuperação."
                    />
                    <ValueCard 
                        icon={Handshake}
                        title="Parceria Estratégica"
                        text="Ativar a Keepit é apenas o começo. Atuamos como uma extensão da sua equipe de TI e segurança, garantindo que a tecnologia se traduza em uma estratégia de continuidade real, alinhada aos seus objetivos de negócio e conformidade."
                    />
                    <ValueCard 
                        icon={Award}
                        title="Excelência Comprovada"
                        text="Só trabalhamos com o líder de mercado. A Keepit é a escolha de mais de 15.000 empresas globais porque sua tecnologia é inquestionável. Trazemos essa excelência mundial para a realidade brasileira, com suporte e implementação locais."
                    />
                </div>
            </div>
        </section>
        
        <SectionDivider />

        {/* Nossa Missão */}
        <section id="nossa-missao" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                 <div className="relative bg-gradient-to-br from-primary/90 to-green-600 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
                    <div className="relative z-10 text-center">
                        <Target className="w-16 h-16 text-black mx-auto mb-6" />
                        <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">Nossa Missão</h3>
                        <blockquote className="text-xl md:text-2xl text-gray-900 leading-relaxed">
                            "Garantir que nenhum negócio no Brasil pare por perda de dados SaaS, ativando a mais avançada tecnologia de resiliência cibernética com uma camada de inteligência estratégica e suporte local."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-32 text-center bg-gradient-to-br from-primary to-green-600">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Transforme Risco em Vantagem Competitiva</h2>
                <p className="text-lg md:text-xl text-gray-900 mb-10">
                    Sua jornada para a resiliência total começa com uma conversa. Fale com nossos especialistas e descubra como a parceria AORKIA e Keepit pode blindar o futuro do seu negócio.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link href="/contato" className="bg-black text-primary hover:bg-gray-800 font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                        Falar com Especialista
                    </Link>
                    <Link href="/backup_saas_estrategico" className="bg-transparent border-2 border-black text-black font-bold py-3 px-8 rounded-lg hover:bg-black hover:text-primary transition duration-300 text-lg">
                        Conheça a Solução
                    </Link>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
